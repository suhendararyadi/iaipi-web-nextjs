// Sitemap seluruh situs: halaman statis + semua entri CMS yang punya halaman.
// Menggantikan sitemap bawaan EmDash, yang tidak tahu pola URL prodi
// (/fakultas/<fakultas>/<prodi>) maupun halaman statis seperti /pmb.
import type { APIRoute } from "astro";
import { getEmDashCollection } from "emdash";
import { getFakultasList, getProdiList, prodiUrl } from "@/lib/akademik";
import { getPimpinan } from "@/lib/pimpinan";

const STATIS = ["/", "/tentang", "/kontak", "/layanan", "/lembaga-departemen", "/pmb", "/pimpinan", "/fakultas", "/magister", "/berita"];

interface Url {
	path: string;
	lastmod?: Date | null;
}

async function semuaEntri(collection: string) {
	const hasil: { id: string; data: { updatedAt?: Date } }[] = [];
	let cursor: string | undefined;
	do {
		const page = await getEmDashCollection(collection, { limit: 100, cursor });
		hasil.push(...(page.entries as unknown as typeof hasil));
		cursor = page.nextCursor;
	} while (cursor && hasil.length < 5000);
	return hasil;
}

const diperbarui = (data: unknown) => (data as { updatedAt?: Date }).updatedAt;

const escapeXml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const GET: APIRoute = async ({ site, url }) => {
	const origin = (site ?? url).origin;
	const [fakultas, prodi, pimpinan, halaman, berita] = await Promise.all([
		getFakultasList(),
		getProdiList(),
		getPimpinan(),
		semuaEntri("halaman"),
		semuaEntri("berita"),
	]);

	const urls: Url[] = [
		...STATIS.map((path) => ({ path })),
		...fakultas.entries.filter((f) => f.data.jenjang !== "S2").map((f) => ({ path: `/fakultas/${f.id}`, lastmod: diperbarui(f.data) })),
		...prodi.entries.map((p) => ({ path: prodiUrl(p), lastmod: diperbarui(p.data) })),
		...pimpinan.entries.map((p) => ({ path: `/pimpinan/${p.id}` })),
		...halaman.map((h) => ({ path: `/halaman/${h.id}`, lastmod: diperbarui(h.data) })),
		...berita.map((b) => ({ path: `/berita/${b.id}`, lastmod: diperbarui(b.data) })),
	];

	const body = urls
		.map(({ path, lastmod }) => {
			const mod = lastmod instanceof Date && !Number.isNaN(lastmod.getTime()) ? `<lastmod>${lastmod.toISOString()}</lastmod>` : "";
			return `  <url><loc>${escapeXml(origin + path)}</loc>${mod}</url>`;
		})
		.join("\n");

	return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
};
