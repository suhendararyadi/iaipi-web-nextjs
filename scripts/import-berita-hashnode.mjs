#!/usr/bin/env node
// Impor berita lama dari blog Hashnode (https://news.iaipersisgarut.ac.id) ke koleksi
// EmDash `berita`.
//
// Sumber data
//   --sumber rss       (bawaan) RSS https://news.iaipersisgarut.ac.id/rss.xml — hanya
//                      memuat ±20 posting terbaru, tapi isinya lengkap.
//   --sumber sitemap   Semua posting yang terdaftar di sitemap.xml (±100). Tiap halaman
//                      posting diunduh lalu dibaca: JSON-LD (judul, ringkasan, tanggal,
//                      sampul) + HTML isi artikel.
//   --rss-file <path>  Baca RSS dari file lokal (kalau jaringan ke host Hashnode bermasalah).
//   --batas <n>        Ambil paling banyak n posting.
//   --slug <a,b,...>   Hanya posting dengan slug tersebut (dipisah koma).
//
// Keluaran (pilih salah satu atau lebih)
//   --seed-part <file> Tulis ke `content.berita` di file seed part (mis.
//                      seed/parts/40-beranda.json). Isi `content.berita` lama diganti;
//                      bagian lain file tidak disentuh. Gambar sampul & gambar di dalam
//                      isi ditulis sebagai `$media` (diunduh ke media library saat setup).
//                      Urutan entri: terlama dulu, supaya urutan terbit tetap benar.
//   --json <file>      Tulis daftar posting yang sudah dinormalisasi (untuk diperiksa).
//   --api <url>        Impor langsung ke situs EmDash yang sedang berjalan lewat REST API:
//                        - posting yang slug-nya belum ada: gambar diunggah ke media
//                          library, entri dibuat dengan tanggal terbit asli + kategori;
//                        - posting yang slug-nya SUDAH ada (mis. dari seed): hanya tanggal
//                          terbitnya diperbaiki ke tanggal asli (seed EmDash selalu
//                          memberi published_at = waktu setup).
//                      Autentikasi: --token <token> atau env EMDASH_TOKEN (buat token di
//                      admin: Settings → API Tokens, scope content + media). Untuk
//                      http://localhost tanpa token dipakai dev-bypass.
//   --dry-run          (dengan --api) tampilkan rencana tanpa menulis apa pun.
//
// Contoh
//   # perbarui seed dari RSS (dipakai untuk membuat seed/parts/40-beranda.json)
//   node scripts/import-berita-hashnode.mjs --seed-part seed/parts/40-beranda.json
//
//   # setelah situs live & seed diterapkan: perbaiki tanggal 20 berita dari seed, lalu
//   # impor semua posting lama lain dari sitemap
//   EMDASH_TOKEN=ec_pat_xxx node scripts/import-berita-hashnode.mjs \
//       --api https://iaipersisgarut.ac.id --sumber sitemap
//
//   # uji di dev server lokal (dev-bypass, tanpa token)
//   node scripts/import-berita-hashnode.mjs --api http://localhost:4321 --sumber sitemap --batas 5
//
// Kategori: semua posting Hashnode masuk kategori `berita`, kecuali judulnya diawali
// "Pengumuman" (→ `pengumuman`) atau "Agenda" (→ `agenda`). Tag Hashnode (kebanyakan nama
// orang) tidak diimpor. Slug dipertahankan sama dengan slug Hashnode, sehingga alamat lama
// news.iaipersisgarut.ac.id/<slug> bisa dialihkan ke /berita/<slug>.

import { readFileSync, writeFileSync } from "node:fs";
import { basename } from "node:path";
import { parseArgs } from "node:util";

const BLOG = "https://news.iaipersisgarut.ac.id";
const COLLECTION = "berita";
const TAXONOMY = "kategori_berita";

const { values: opt } = parseArgs({
	options: {
		sumber: { type: "string", default: "rss" },
		"rss-file": { type: "string" },
		batas: { type: "string" },
		slug: { type: "string" },
		"seed-part": { type: "string" },
		json: { type: "string" },
		api: { type: "string" },
		token: { type: "string" },
		byline: { type: "string", default: "byline-humas" },
		"dry-run": { type: "boolean", default: false },
		help: { type: "boolean", short: "h", default: false },
	},
});

if (opt.help || (!opt["seed-part"] && !opt.json && !opt.api)) {
	console.log(readFileSync(new URL(import.meta.url), "utf8").split("\n\nimport ")[0].replace(/^\/\/ ?/gm, ""));
	process.exit(opt.help ? 0 : 1);
}

// ---------------------------------------------------------------------------
// Jaringan (dengan pengulangan — host Hashnode kadang memutus koneksi)
// ---------------------------------------------------------------------------

async function fetchRetry(url, init = {}, tries = 4) {
	let lastError;
	for (let i = 0; i < tries; i++) {
		try {
			const res = await fetch(url, { ...init, signal: AbortSignal.timeout(60_000) });
			if (res.ok || res.status === 404 || i === tries - 1) return res;
			lastError = new Error(`HTTP ${res.status}`);
		} catch (error) {
			lastError = error;
		}
		await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
	}
	throw new Error(`Gagal mengambil ${url}: ${lastError?.message ?? lastError}`);
}

async function fetchText(url) {
	const res = await fetchRetry(url, { headers: { "User-Agent": "IAIPI-import/1.0" } });
	if (!res.ok) throw new Error(`Gagal mengambil ${url}: HTTP ${res.status}`);
	return res.text();
}

// ---------------------------------------------------------------------------
// Utilitas teks / HTML
// ---------------------------------------------------------------------------

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", "#39": "'" };

function decodeEntities(s) {
	return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+\d*);/gi, (m, e) => {
		if (e[0] === "#") {
			const code = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
			return Number.isFinite(code) ? String.fromCodePoint(code) : m;
		}
		return ENTITIES[e.toLowerCase()] ?? m;
	});
}

function stripHtml(html) {
	return decodeEntities(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

function cdata(s) {
	return s.replace(/^\s*<!\[CDATA\[/, "").replace(/\]\]>\s*$/, "");
}

function attr(tag, name) {
	const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, "i"));
	return m ? decodeEntities(m[2] ?? m[3] ?? "") : null;
}

/** Potong teks di batas kata, tambahkan elipsis bila dipotong. */
function ringkas(text, max = 240) {
	const t = text.replace(/\*\*/g, "").trim();
	if (t.length <= max) return t;
	const cut = t.slice(0, max);
	return `${cut.slice(0, cut.lastIndexOf(" ") > 120 ? cut.lastIndexOf(" ") : max).replace(/[\s,.;:—-]+$/, "")}…`;
}

function kategoriDari(judul) {
	if (/^\s*pengumuman\b/i.test(judul)) return "pengumuman";
	if (/^\s*agenda\b/i.test(judul)) return "agenda";
	return "berita";
}

function filenameDari(url, fallback) {
	try {
		const name = basename(new URL(url).pathname);
		return name && /\.[a-z0-9]{2,5}$/i.test(name) ? name : fallback;
	} catch {
		return fallback;
	}
}

// ---------------------------------------------------------------------------
// HTML → Portable Text (cukup untuk HTML Hashnode: p, h1-6, ol/ul/li, img, a,
// strong/b, em/i, blockquote, br, code)
// ---------------------------------------------------------------------------

const BUKAN_TAUTAN = /^https?:\/\/[A-Z][A-Za-z]{0,3}\.[A-Z][A-Za-z]{0,3}\/?$/;

function htmlToPortableText(html, keyPrefix) {
	let n = 0;
	const key = () => `${keyPrefix}${(++n).toString(36)}`;
	const blocks = [];
	const listStack = []; // "bullet" | "number"
	let block = null; // blok teks yang sedang dibangun
	let blockStyle = "normal";
	let inBlockquote = false;
	const marks = []; // dekorator & key link aktif

	const startBlock = () => {
		if (block) return;
		block = { _type: "block", _key: key(), style: inBlockquote ? "blockquote" : blockStyle, markDefs: [], children: [] };
		if (listStack.length) {
			block.listItem = listStack[listStack.length - 1];
			block.level = listStack.length;
		}
	};
	const flush = () => {
		if (!block) return;
		// rapikan spasi di awal/akhir blok
		const kids = block.children;
		if (kids.length) {
			kids[0].text = kids[0].text.replace(/^\s+/, "");
			kids[kids.length - 1].text = kids[kids.length - 1].text.replace(/\s+$/, "");
		}
		block.children = kids.filter((c) => c.text.length > 0);
		if (block.children.length) blocks.push(block);
		block = null;
	};
	const pushText = (raw) => {
		let text = decodeEntities(raw).replace(/\s+/g, " ");
		if (!text.trim() && !block) return;
		startBlock();
		// Hashnode kadang menyisakan **tebal** markdown di dalam HTML.
		const parts = text.split(/\*\*(.+?)\*\*/);
		parts.forEach((part, i) => {
			if (!part) return;
			const m = i % 2 === 1 ? [...marks, "strong"] : [...marks];
			const last = block.children[block.children.length - 1];
			if (last && JSON.stringify(last.marks) === JSON.stringify(m)) last.text += part;
			else block.children.push({ _type: "span", _key: key(), text: part, marks: m });
		});
	};

	const re = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z0-9]+)([^>]*)>|([^<]+)/g;
	let m;
	while ((m = re.exec(html))) {
		if (m[4] !== undefined) {
			pushText(m[4]);
			continue;
		}
		if (!m[2]) continue;
		const closing = m[1] === "/";
		const tag = m[2].toLowerCase();
		const rawTag = m[0];
		switch (tag) {
			case "p":
			case "div":
				flush();
				blockStyle = "normal";
				break;
			case "h1":
			case "h2":
			case "h3":
			case "h4":
			case "h5":
			case "h6":
				flush();
				// h1 di isi artikel diturunkan ke h2 (judul halaman sudah h1/h3)
				blockStyle = closing ? "normal" : tag === "h1" ? "h2" : tag;
				break;
			case "blockquote":
				flush();
				inBlockquote = !closing;
				break;
			case "ul":
			case "ol":
				flush();
				if (closing) listStack.pop();
				else listStack.push(tag === "ol" ? "number" : "bullet");
				break;
			case "li":
				flush();
				break;
			case "br":
				if (block) pushText("\n");
				break;
			case "strong":
			case "b":
				if (closing) marks.splice(marks.lastIndexOf("strong"), 1);
				else marks.push("strong");
				break;
			case "em":
			case "i":
				if (closing) marks.splice(marks.lastIndexOf("em"), 1);
				else marks.push("em");
				break;
			case "code":
				if (closing) marks.splice(marks.lastIndexOf("code"), 1);
				else marks.push("code");
				break;
			case "a": {
				if (closing) {
					const idx = marks.findIndex((x) => x.startsWith("lnk"));
					if (idx >= 0) marks.splice(idx, 1);
					break;
				}
				const href = attr(rawTag, "href");
				// Hashnode menautkan otomatis gelar seperti "S.Ag"/"M.Pd" menjadi http://S.Ag — abaikan.
				if (!href || BUKAN_TAUTAN.test(href)) break;
				startBlock();
				const k = `lnk${key()}`;
				block.markDefs.push({ _type: "link", _key: k, href, ...(/^https?:/.test(href) ? { blank: true } : {}) });
				marks.push(k);
				break;
			}
			case "img": {
				const src = attr(rawTag, "src");
				if (!src) break;
				flush();
				const alt = attr(rawTag, "alt") || "";
				blocks.push({
					_type: "image",
					_key: key(),
					asset: { $media: { url: src, alt, filename: filenameDari(src, `berita-${keyPrefix}${n}.jpg`) } },
					...(alt ? { alt } : {}),
				});
				break;
			}
			default:
				break;
		}
	}
	flush();
	// span <br> di dalam blok: pertahankan sebagai baris baru
	for (const b of blocks) {
		if (b._type !== "block") continue;
		for (const c of b.children) c.text = c.text.replace(/ ?\n ?/g, "\n");
	}
	return blocks;
}

function teksPertama(blocks) {
	for (const b of blocks) {
		if (b._type === "block" && !b.listItem) {
			const t = b.children.map((c) => c.text).join("").trim();
			if (t.length > 40) return t;
		}
	}
	return "";
}

// ---------------------------------------------------------------------------
// Pembaca sumber
// ---------------------------------------------------------------------------

function normalisasi({ slug, judul, html, ringkasan, tanggal, sampul }, index) {
	const content = htmlToPortableText(html, `h${index.toString(36)}x`);
	const excerpt = ringkas(teksPertama(content) || stripHtml(ringkasan || ""));
	return {
		slug,
		title: judul.replace(/\s+/g, " ").trim(),
		excerpt,
		publishedAt: tanggal ? new Date(tanggal).toISOString() : null,
		cover: sampul || null,
		kategori: kategoriDari(judul),
		content,
		sumber: `${BLOG}/${slug}`,
	};
}

function slugDariLink(link) {
	return new URL(link).pathname.replace(/^\/+|\/+$/g, "");
}

async function dariRss() {
	const xml = opt["rss-file"] ? readFileSync(opt["rss-file"], "utf8") : await fetchText(`${BLOG}/rss.xml`);
	const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
	const field = (item, name) => {
		const m = item.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`));
		return m ? cdata(m[1]) : "";
	};
	return items.map((item, i) => {
		const enclosure = item.match(/<enclosure\b[^>]*>/)?.[0];
		return normalisasi(
			{
				slug: slugDariLink(field(item, "link")),
				judul: decodeEntities(field(item, "title")),
				html: field(item, "content:encoded"),
				ringkasan: field(item, "description"),
				tanggal: field(item, "pubDate"),
				sampul: enclosure ? attr(enclosure, "url") : null,
			},
			i,
		);
	});
}

const hanyaSlug = opt.slug ? new Set(opt.slug.split(",").map((s) => s.trim()).filter(Boolean)) : null;

const BUKAN_POSTING = /^(|archive|recommendations|newsletter|members|about|badges|sponsor|search)$/;

async function dariSitemap() {
	const index = await fetchText(`${BLOG}/sitemap.xml`);
	let sitemaps = [...index.matchAll(/<sitemap>\s*<loc>([^<]+)<\/loc>/g)].map((m) => decodeEntities(m[1]));
	if (sitemaps.length === 0) sitemaps = [`${BLOG}/sitemap.xml`];
	const urls = new Set();
	for (const sm of sitemaps) {
		const xml = sm === `${BLOG}/sitemap.xml` ? index : await fetchText(sm);
		for (const m of xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)) {
			const url = decodeEntities(m[1]);
			const path = slugDariLink(url);
			if (path.includes("/") || BUKAN_POSTING.test(path)) continue; // /tag/x, /series/x, dll.
			if (hanyaSlug && !hanyaSlug.has(path)) continue;
			urls.add(url);
		}
	}
	const posts = [];
	let i = 0;
	for (const url of urls) {
		if (opt.batas && posts.length >= Number(opt.batas)) break;
		const html = await fetchText(url);
		const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
			.map((m) => {
				try {
					return JSON.parse(m[1]);
				} catch {
					return null;
				}
			})
			.find((d) => d && (d["@type"] === "Article" || d["@type"] === "BlogPosting"));
		const prose = html.match(/<div class="prose dark:prose-invert[^"]*"><div>([\s\S]*?)<\/div><\/div>/);
		if (!ld || !prose) {
			console.warn(`  ! dilewati (bukan halaman posting?): ${url}`);
			continue;
		}
		const image = typeof ld.image === "string" ? ld.image : ld.image?.url;
		posts.push(
			normalisasi(
				{
					slug: slugDariLink(url),
					judul: ld.headline,
					html: prose[1],
					ringkasan: ld.description,
					tanggal: ld.datePublished,
					sampul: image,
				},
				i++,
			),
		);
		process.stdout.write(`  ✓ ${posts.length}. ${ld.headline.slice(0, 70)}\n`);
	}
	return posts;
}

// ---------------------------------------------------------------------------
// Keluaran: seed part
// ---------------------------------------------------------------------------

function keSeedEntry(post) {
	return {
		id: `berita-${post.slug}`.slice(0, 120),
		slug: post.slug,
		status: "published",
		data: {
			title: post.title,
			excerpt: post.excerpt,
			...(post.cover
				? { featured_image: { $media: { url: post.cover, alt: post.title, filename: filenameDari(post.cover, `${post.slug.slice(0, 60)}.jpg`) } } }
				: {}),
			content: post.content,
		},
		taxonomies: { [TAXONOMY]: [post.kategori] },
		...(opt.byline ? { bylines: [{ byline: opt.byline }] } : {}),
	};
}

function tulisSeedPart(file, posts) {
	const part = JSON.parse(readFileSync(file, "utf8"));
	part.content ??= {};
	const urut = [...posts].sort((a, b) => String(a.publishedAt).localeCompare(String(b.publishedAt)));
	part.content[COLLECTION] = urut.map(keSeedEntry);
	writeFileSync(file, JSON.stringify(part, null, "\t") + "\n");
	console.log(`✓ ${urut.length} berita ditulis ke ${file} (content.${COLLECTION})`);
}

// ---------------------------------------------------------------------------
// Keluaran: REST API situs live
// ---------------------------------------------------------------------------

function apiClient(baseUrl, token) {
	const origin = new URL(baseUrl).origin;
	const isLocal = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(new URL(baseUrl).hostname);
	let cookie = null;

	async function auth() {
		if (token || cookie || !isLocal) return;
		const res = await fetch(new URL("/_emdash/api/auth/dev-bypass", origin), { redirect: "manual" });
		const setCookie = res.headers.get("set-cookie");
		cookie = setCookie ? setCookie.split(";")[0] : null;
		if (!cookie) throw new Error("dev-bypass gagal; berikan --token");
	}

	async function call(method, path, body) {
		await auth();
		const headers = { "X-EmDash-Request": "1", Origin: origin };
		if (token) headers.Authorization = `Bearer ${token}`;
		if (cookie) headers.Cookie = cookie;
		let payload;
		if (body instanceof FormData) payload = body;
		else if (body !== undefined) {
			headers["Content-Type"] = "application/json";
			payload = JSON.stringify(body);
		}
		const res = await fetchRetry(`${origin}/_emdash/api${path}`, { method, headers, body: payload }, method === "GET" ? 3 : 1);
		const text = await res.text();
		let json;
		try {
			json = text ? JSON.parse(text) : {};
		} catch {
			json = { raw: text };
		}
		return { status: res.status, ok: res.ok, json };
	}

	return { call };
}

async function unggahMedia(api, url, alt, cache) {
	if (cache.has(url)) return cache.get(url);
	const res = await fetchRetry(url, { headers: { "User-Agent": "IAIPI-import/1.0" } });
	if (!res.ok) {
		console.warn(`    ! gambar gagal diunduh (${res.status}): ${url}`);
		cache.set(url, null);
		return null;
	}
	const type = res.headers.get("content-type") || "image/jpeg";
	const bytes = new Uint8Array(await res.arrayBuffer());
	const form = new FormData();
	const filename = filenameDari(url, `berita-${Date.now()}.${type.split("/")[1] || "jpg"}`);
	form.append("file", new Blob([bytes], { type }), filename);
	if (alt) form.append("alt", alt);
	const up = await api.call("POST", "/media", form);
	if (!up.ok) {
		console.warn(`    ! gambar gagal diunggah (${up.status}): ${JSON.stringify(up.json).slice(0, 200)}`);
		cache.set(url, null);
		return null;
	}
	const item = up.json.data?.item ?? up.json.item;
	const value = {
		provider: "local",
		id: item.id,
		alt: alt || undefined,
		width: item.width,
		height: item.height,
		mimeType: item.mimeType,
		filename: item.filename,
		meta: { storageKey: item.key ?? item.storageKey },
	};
	cache.set(url, value);
	return value;
}

/** Ganti semua `$media` (sampul & gambar di isi) dengan media yang sudah diunggah. */
async function resolveMediaRefs(api, value, cache) {
	if (Array.isArray(value)) return Promise.all(value.map((v) => resolveMediaRefs(api, v, cache)));
	if (value && typeof value === "object") {
		if (value.$media) return unggahMedia(api, value.$media.url, value.$media.alt, cache);
		const out = {};
		for (const [k, v] of Object.entries(value)) out[k] = await resolveMediaRefs(api, v, cache);
		// blok gambar PT: asset harus {_ref, url}
		if (out._type === "image" && out.asset && out.asset.id) {
			const media = out.asset;
			out.asset = { _ref: media.id, url: `/_emdash/api/media/file/${media.meta?.storageKey ?? media.id}` };
			if (media.width) out.width = media.width;
			if (media.height) out.height = media.height;
		}
		if (out._type === "image" && !out.asset) return null;
		return out;
	}
	return value;
}

async function imporApi(posts) {
	const token = opt.token || process.env.EMDASH_TOKEN || null;
	const api = apiClient(opt.api, token);
	const cache = new Map();
	let dibuat = 0;
	let diperbaiki = 0;
	let gagal = 0;
	for (const post of posts) {
		const existing = await api.call("GET", `/content/${COLLECTION}/${encodeURIComponent(post.slug)}`);
		if (existing.ok) {
			const item = existing.json.data?.item ?? existing.json.item;
			const detik = (d) => Math.floor(new Date(d).getTime() / 1000);
			const sama = item?.publishedAt && post.publishedAt && detik(item.publishedAt) === detik(post.publishedAt);
			if (sama || !post.publishedAt) {
				console.log(`  = sudah ada: ${post.slug}`);
				continue;
			}
			console.log(`  ~ perbaiki tanggal terbit → ${post.publishedAt}: ${post.slug}`);
			if (opt["dry-run"]) continue;
			const pub = await api.call("POST", `/content/${COLLECTION}/${item.id}/publish`, {
				publishedAt: post.publishedAt,
				...(item._rev ? { _rev: item._rev } : {}),
			});
			if (pub.ok) diperbaiki++;
			else {
				gagal++;
				console.warn(`    ! gagal (${pub.status}): ${JSON.stringify(pub.json).slice(0, 300)}`);
			}
			continue;
		}
		console.log(`  + buat: ${post.slug}`);
		if (opt["dry-run"]) continue;
		const entry = keSeedEntry(post);
		const data = await resolveMediaRefs(api, entry.data, cache);
		data.content = (data.content ?? []).filter(Boolean);
		if (!data.featured_image) delete data.featured_image;
		const created = await api.call("POST", `/content/${COLLECTION}`, {
			data,
			slug: post.slug,
			taxonomies: entry.taxonomies,
			...(post.publishedAt ? { publishedAt: post.publishedAt } : {}),
		});
		if (!created.ok) {
			gagal++;
			console.warn(`    ! gagal membuat (${created.status}): ${JSON.stringify(created.json).slice(0, 300)}`);
			continue;
		}
		const item = created.json.data?.item ?? created.json.item;
		// Entri baru berstatus draf; terbitkan dengan tanggal asli.
		if (item?.status !== "published") {
			const pub = await api.call("POST", `/content/${COLLECTION}/${item.id}/publish`, post.publishedAt ? { publishedAt: post.publishedAt } : {});
			if (!pub.ok) {
				gagal++;
				console.warn(`    ! dibuat tapi gagal terbit (${pub.status}): ${JSON.stringify(pub.json).slice(0, 300)}`);
				continue;
			}
		}
		dibuat++;
	}
	console.log(`✓ API: ${dibuat} dibuat, ${diperbaiki} tanggal diperbaiki, ${gagal} gagal`);
	if (gagal) process.exitCode = 1;
}

// ---------------------------------------------------------------------------

let posts = opt.sumber === "sitemap" ? await dariSitemap() : await dariRss();
if (hanyaSlug) posts = posts.filter((p) => hanyaSlug.has(p.slug));
if (opt.batas) posts = posts.slice(0, Number(opt.batas));
console.log(`${posts.length} posting dibaca dari ${opt.sumber}`);

if (opt.json) {
	writeFileSync(opt.json, JSON.stringify(posts, null, "\t") + "\n");
	console.log(`✓ JSON ditulis ke ${opt.json}`);
}
if (opt["seed-part"]) tulisSeedPart(opt["seed-part"], posts);
if (opt.api) await imporApi(posts);
