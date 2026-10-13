import cloudflare from "@astrojs/cloudflare";
import { cacheCloudflare } from "@astrojs/cloudflare/cache";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";

// Cache edge Cloudflare (Workers Cache) untuk halaman publik: kunjungan berikutnya
// dilayani dari cache tanpa menjalankan Worker, dan EmDash otomatis mem-purge
// halaman terkait saat konten diterbitkan/diubah lewat admin.
//
// DEFAULT MATI. Saat Workers Cache aktif, request ke aset statis (CSS, JS, gambar
// di public/) ikut dihitung sebagai request Worker. Di paket Workers Free (kuota
// 100.000 request/hari) itu bisa cepat habis. Aktifkan dengan EDGE_CACHE=1 saat
// build (mis. variabel build di Workers Builds) setelah upgrade ke Workers Paid.
const EDGE_CACHE = process.env.EDGE_CACHE === "1";
const publicPage = { maxAge: 300, swr: 86400 };

export default defineConfig({
	site: "https://iaipersisgarut.ac.id",
	output: "server",
	adapter: cloudflare(),
	...(EDGE_CACHE ? { cache: { provider: cacheCloudflare() } } : {}),
	routeRules: {
		"/": publicPage,
		"/tentang": publicPage,
		"/kontak": publicPage,
		"/layanan": publicPage,
		"/lembaga-departemen": publicPage,
		"/pmb": publicPage,
		"/pimpinan": publicPage,
		"/pimpinan/[slug]": publicPage,
		"/fakultas": publicPage,
		"/fakultas/[fakultas]": publicPage,
		"/fakultas/[fakultas]/[prodi]": publicPage,
		"/magister": publicPage,
		"/magister/[prodi]": publicPage,
		"/berita": publicPage,
		"/berita/[slug]": publicPage,
		"/berita/kategori/[slug]": publicPage,
		"/rss.xml": publicPage,
		"/halaman/[slug]": publicPage,
	},
	redirects: {
		// Warek IV dihapus dari struktur; Dr. Heri Mohamad Tohari kini Wakil Rektor III.
		"/pimpinan/warek4": { status: 301, destination: "/pimpinan/warek3" },
		"/contact": { status: 301, destination: "/kontak" },
	},
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(), // wajib: UI admin EmDash adalah aplikasi React
		emdash({
			database: d1({ binding: "DB", session: "auto" }),
			storage: r2({ binding: "MEDIA" }),
		}),
	],
	devToolbar: { enabled: false },
});
