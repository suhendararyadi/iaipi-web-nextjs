// Menggabungkan seed/parts/*.json menjadi seed/seed.json (dipakai EmDash saat
// setup pertama: skema koleksi + konten awal hasil migrasi dari situs lama).
//
// Singkatan yang boleh dipakai di file part (diubah di sini ke format seed EmDash):
//   { "$asset": "/images/x.jpg", "alt": "..." }  -> $media yang diunduh dari repo GitHub
//                                                  (file di folder public/) lalu disimpan
//                                                  ke media library (R2) saat setup.
//   { "$pt": "Paragraf 1\n\nParagraf 2" }        -> Portable Text (paragraf biasa).
//                                                  Baris yang diawali "## " jadi heading h2,
//                                                  "### " jadi h3, "- " jadi butir list.
//
// Urutan file part menentukan urutan penggabungan (00-..., 10-..., dst).

import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const partsDir = join(root, "seed", "parts");
const outFile = join(root, "seed", "seed.json");

const ASSET_BASE = (
	process.env.SEED_ASSET_BASE ||
	"https://raw.githubusercontent.com/suhendararyadi/iaipi-web-nextjs/main/public"
).replace(/\/$/, "");

let keyCounter = 0;
const key = () => `k${(++keyCounter).toString(36)}`;

function span(text) {
	return { _type: "span", _key: key(), text, marks: [] };
}

function toPortableText(src) {
	const blocks = [];
	for (const chunk of String(src).split(/\n{2,}/)) {
		const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
		for (const line of lines) {
			if (line.startsWith("### ")) {
				blocks.push({ _type: "block", _key: key(), style: "h3", markDefs: [], children: [span(line.slice(4))] });
			} else if (line.startsWith("## ")) {
				blocks.push({ _type: "block", _key: key(), style: "h2", markDefs: [], children: [span(line.slice(3))] });
			} else if (line.startsWith("- ")) {
				blocks.push({ _type: "block", _key: key(), style: "normal", listItem: "bullet", level: 1, markDefs: [], children: [span(line.slice(2))] });
			} else {
				blocks.push({ _type: "block", _key: key(), style: "normal", markDefs: [], children: [span(line)] });
			}
		}
	}
	return blocks;
}

function transform(value) {
	if (Array.isArray(value)) return value.map(transform);
	if (value && typeof value === "object") {
		if (typeof value.$asset === "string") {
			const path = value.$asset.startsWith("/") ? value.$asset : `/${value.$asset}`;
			const url = ASSET_BASE + path.split("/").map(encodeURIComponent).join("/");
			if (!existsSync(join(root, "public", path))) {
				throw new Error(`$asset tidak ditemukan di public/: ${path}`);
			}
			return {
				$media: {
					url,
					alt: value.alt ?? "",
					filename: basename(path),
				},
			};
		}
		if (typeof value.$pt === "string") return toPortableText(value.$pt);
		const out = {};
		for (const [k, v] of Object.entries(value)) out[k] = transform(v);
		return out;
	}
	return value;
}

const seed = {
	$schema: "https://emdashcms.com/seed.schema.json",
	version: "1",
	meta: {},
	settings: {},
	collections: [],
	taxonomies: [],
	menus: [],
	widgetAreas: [],
	sections: [],
	bylines: [],
	content: {},
};

const files = readdirSync(partsDir).filter((f) => f.endsWith(".json")).sort();
const seenCollections = new Set();

for (const file of files) {
	let part;
	try {
		part = JSON.parse(readFileSync(join(partsDir, file), "utf8"));
	} catch (error) {
		throw new Error(`JSON tidak valid di seed/parts/${file}: ${error.message}`);
	}
	if (part.meta) Object.assign(seed.meta, part.meta);
	if (part.settings) Object.assign(seed.settings, part.settings);
	for (const listKey of ["collections", "taxonomies", "menus", "widgetAreas", "sections", "bylines"]) {
		for (const item of part[listKey] ?? []) {
			if (listKey === "collections") {
				if (seenCollections.has(item.slug)) throw new Error(`Koleksi "${item.slug}" didefinisikan dua kali (${file})`);
				seenCollections.add(item.slug);
			}
			seed[listKey].push(item);
		}
	}
	for (const [collection, entries] of Object.entries(part.content ?? {})) {
		seed.content[collection] = [...(seed.content[collection] ?? []), ...entries];
	}
}

for (const collection of Object.keys(seed.content)) {
	if (!seenCollections.has(collection)) {
		throw new Error(`Konten untuk koleksi "${collection}" tapi koleksinya tidak didefinisikan`);
	}
}

for (const k of ["taxonomies", "menus", "widgetAreas", "sections", "bylines"]) {
	if (seed[k].length === 0) delete seed[k];
}

writeFileSync(outFile, JSON.stringify(transform(seed), null, "\t") + "\n");
const entryCount = Object.values(seed.content).reduce((n, list) => n + list.length, 0);
console.log(`seed/seed.json: ${seed.collections.length} koleksi, ${entryCount} entri dari ${files.length} file part`);
