// Helper bersama untuk membaca konten EmDash di halaman Astro.
import { getEmDashCollection, getEmDashEntry } from "emdash";

const INTERNAL_MEDIA_PREFIX = "/_emdash/api/media/file/";

/** Nilai field `image` EmDash (atau string URL untuk data lama/eksternal). */
export type MediaField =
	| string
	| null
	| undefined
	| {
			id?: string;
			src?: string;
			url?: string;
			alt?: string;
			width?: number;
			height?: number;
			meta?: { storageKey?: string } & Record<string, unknown>;
	  };

/**
 * Gambar media library diubah ukurannya lewat endpoint gambar Astro/EmDash (`/_image`):
 * file dibaca langsung dari R2 lalu di-resize & dikonversi ke WebP oleh binding Cloudflare
 * Images (gratis 5.000 transformasi unik/bulan; tiap kombinasi gambar+lebar dihitung sekali
 * per bulan). Lebar default 1600px cukup untuk foto lebar layar penuh.
 */
export const LEBAR_GAMBAR_DEFAULT = 1600;
const TANPA_TRANSFORMASI = /\.(svg|gif)$/i;

function transformMedia(url: string, lebar: number): string {
	if (!url.startsWith(INTERNAL_MEDIA_PREFIX) || TANPA_TRANSFORMASI.test(url) || lebar <= 0) return url;
	return `/_image?href=${encodeURIComponent(url)}&w=${Math.round(lebar)}&f=webp&q=80`;
}

/**
 * URL gambar dari field `image` EmDash. Mengembalikan `fallback` bila kosong.
 * Gambar media library otomatis di-resize ke `lebar` (px); isi 0 untuk file asli.
 */
export function mediaSrc(image: MediaField, fallback = "", lebar = LEBAR_GAMBAR_DEFAULT): string {
	return transformMedia(mediaSrcAsli(image, fallback), lebar);
}

/** URL file asli (tanpa resize) dari field `image` EmDash. */
export function mediaSrcAsli(image: MediaField, fallback = ""): string {
	if (!image) return fallback;
	if (typeof image === "string") return image;
	if (image.src) return image.src;
	if (image.url) return image.url;
	if (image.meta?.storageKey) return INTERNAL_MEDIA_PREFIX + image.meta.storageKey;
	if (image.id) return INTERNAL_MEDIA_PREFIX + image.id;
	return fallback;
}

/** Alt text dari field `image`, dengan cadangan. */
export function mediaAlt(image: MediaField, fallback = ""): string {
	if (image && typeof image === "object" && image.alt) return image.alt;
	return fallback;
}

/** Memecah field teks multi-baris menjadi daftar baris yang tidak kosong. */
export function lines(text: string | null | undefined): string[] {
	if (!text) return [];
	return text
		.split(/\r?\n/)
		.map((line) => line.replace(/^\s*[-•]\s*/, "").trim())
		.filter(Boolean);
}

/** Memecah teks menjadi paragraf (dipisah baris kosong). */
export function paragraphs(text: string | null | undefined): string[] {
	if (!text) return [];
	return text
		.split(/\n\s*\n/)
		.map((p) => p.replace(/\s+/g, " ").trim())
		.filter(Boolean);
}

/** Daftar repeater yang aman (field repeater kosong bisa bernilai null). */
export function rows<T = Record<string, unknown>>(value: unknown): T[] {
	return Array.isArray(value) ? (value as T[]) : [];
}

export function isExternal(url: string | null | undefined): boolean {
	return !!url && /^https?:\/\//i.test(url);
}

/** Atribut target/rel untuk tautan eksternal. */
export function linkAttrs(url: string | null | undefined): Record<string, string> {
	return isExternal(url) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

type CacheHintTarget = { cache?: { enabled?: boolean; set: (hint: never) => void } };

/** Daftarkan cache hint EmDash ke route cache Astro (agar purge otomatis saat konten berubah). */
export function useCacheHint(astro: CacheHintTarget, ...hints: unknown[]): void {
	if (!astro.cache?.enabled) return;
	for (const hint of hints) {
		if (hint) astro.cache.set(hint as never);
	}
}

export interface InfoKampus {
	nama: string;
	nama_singkat?: string;
	deskripsi?: string;
	logo?: MediaField;
	alamat?: string;
	kota?: string;
	provinsi?: string;
	kode_pos?: string;
	telepon?: string;
	whatsapp?: string;
	pesan_whatsapp?: string;
	email?: string;
	email_pmb?: string;
	facebook?: string;
	instagram?: string;
	youtube?: string;
	link_pendaftaran?: string;
	link_siakad?: string;
	peta_embed?: string;
	teks_hak_cipta?: string;
	teks_pengembang?: string;
	google_analytics_id?: string;
}

const INFO_DEFAULT: InfoKampus = {
	nama: "Institut Agama Islam PERSIS Garut",
	nama_singkat: "IAIPI Garut",
};

/**
 * Info kampus (satu entri "utama" di koleksi info_kampus). Jika entri itu
 * belum ada, pakai entri pertama yang terbit.
 */
export async function getInfoKampus(): Promise<{ info: InfoKampus; cacheHint?: unknown }> {
	const { entry, cacheHint } = await getEmDashEntry("info_kampus", "utama");
	if (entry) return { info: { ...INFO_DEFAULT, ...(entry.data as Partial<InfoKampus>) }, cacheHint };
	const list = await getEmDashCollection("info_kampus", { limit: 1 });
	const first = list.entries[0];
	return {
		info: { ...INFO_DEFAULT, ...((first?.data ?? {}) as Partial<InfoKampus>) },
		cacheHint: list.cacheHint,
	};
}

/** Nomor telepon untuk href tel: (hanya digit dan +). */
export function telHref(phone: string | undefined): string {
	return phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : "#";
}

/** Link wa.me dengan pesan awal opsional. */
export function waHref(info: Pick<InfoKampus, "whatsapp" | "pesan_whatsapp">): string {
	const number = (info.whatsapp ?? "").replace(/\D/g, "");
	if (!number) return "#";
	const text = info.pesan_whatsapp ? `?text=${encodeURIComponent(info.pesan_whatsapp)}` : "";
	return `https://wa.me/${number}${text}`;
}

/** Ganti {tahun} dengan tahun berjalan. */
export function withYear(text: string | undefined): string {
	return (text ?? "").replace(/\{tahun\}/g, String(new Date().getFullYear()));
}

/** Format tanggal Indonesia, mis. 13 Oktober 2026. */
export function formatTanggal(date: Date | string | null | undefined): string {
	if (!date) return "";
	const d = typeof date === "string" ? new Date(date) : date;
	if (Number.isNaN(d.getTime())) return "";
	return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });
}

/**
 * Memecah judul bertanda *kata* menjadi segmen agar kata yang disorot bisa diberi
 * warna (class "sorot") tanpa set:html. Contoh: "Studi di *IAI PERSIS Garut*".
 */
export function segmenSorot(text: string | null | undefined): { teks: string; sorot: boolean }[] {
	if (!text) return [];
	return text
		.split(/(\*[^*]+\*)/g)
		.filter(Boolean)
		.map((bagian) => (bagian.startsWith("*") && bagian.endsWith("*") ? { teks: bagian.slice(1, -1), sorot: true } : { teks: bagian, sorot: false }));
}

/** Teks polos dari judul bertanda *kata* (untuk title/alt/aria). */
export function tanpaSorot(text: string | null | undefined): string {
	return (text ?? "").replace(/\*/g, "");
}
