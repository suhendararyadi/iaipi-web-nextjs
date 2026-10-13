import cloudflare from "@astrojs/cloudflare";
import { cacheCloudflare } from "@astrojs/cloudflare/cache";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";

// Halaman publik di-cache di edge Cloudflare (Workers Cache) sehingga sebagian
// besar kunjungan tidak menjalankan Worker sama sekali. EmDash otomatis
// mem-purge cache halaman terkait saat konten diterbitkan/diubah lewat admin.
const publicPage = { maxAge: 300, swr: 86400 };

export default defineConfig({
	site: "https://iaipersisgarut.ac.id",
	output: "server",
	adapter: cloudflare(),
	cache: {
		provider: cacheCloudflare(),
	},
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
