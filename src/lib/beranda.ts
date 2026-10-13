// Helper query konten beranda: pengaturan section (koleksi `beranda`, entri "utama"),
// slider, jurnal, dan testimoni.
import { getEmDashCollection, getEmDashEntry } from "emdash";
import { rows, type MediaField } from "@/lib/cms";

export interface PoinVideo {
	judul: string;
	deskripsi?: string;
	ikon?: MediaField;
}

export interface Beranda {
	pimpinan_eyebrow?: string;
	pimpinan_judul?: string;
	berita_eyebrow?: string;
	berita_judul?: string;
	berita_jumlah?: number;
	berita_teks_tautan?: string;
	video_url?: string;
	video_latar?: MediaField;
	video_judul?: string;
	video_poin: PoinVideo[];
	publikasi_eyebrow?: string;
	publikasi_judul?: string;
	publikasi_url?: string;
	publikasi_teks_tombol?: string;
	testimoni_eyebrow?: string;
	testimoni_judul?: string;
	testimoni_latar?: MediaField;
}

/** Nilai cadangan bila entri "utama" belum ada / field dikosongkan. */
const BERANDA_DEFAULT: Beranda = {
	pimpinan_eyebrow: "Dosen dan Peneliti",
	pimpinan_judul: "Pimpinan",
	berita_eyebrow: "Berita & Agenda",
	berita_judul: "Berita Terbaru",
	berita_jumlah: 4,
	berita_teks_tautan: "Lihat Semua Berita",
	video_poin: [],
	publikasi_eyebrow: "Publikasi",
	publikasi_judul: "Jurnal",
	publikasi_teks_tombol: "Selengkapnya",
	testimoni_eyebrow: "Testimonial",
	testimoni_judul: "Kata Mereka",
};

/** Pengaturan beranda (entri slug "utama"), digabung dengan nilai cadangan. */
export async function getBeranda(): Promise<{ beranda: Beranda; cacheHint?: unknown }> {
	const { entry, cacheHint } = await getEmDashEntry("beranda", "utama");
	const data = (entry?.data ?? {}) as Partial<Beranda>;
	const merged: Beranda = { ...BERANDA_DEFAULT };
	for (const [k, v] of Object.entries(data)) {
		if (v !== null && v !== undefined && v !== "") (merged as unknown as Record<string, unknown>)[k] = v;
	}
	merged.video_poin = rows<PoinVideo>(data.video_poin);
	merged.berita_jumlah = Math.min(6, Math.max(3, Number(merged.berita_jumlah) || 4));
	return { beranda: merged, cacheHint };
}

export interface Slide {
	judul: string;
	gambar?: MediaField;
	teks_alt?: string;
	tautan?: string;
	urutan?: number;
	aktif?: boolean;
}

export interface Jurnal {
	nama: string;
	bidang?: string;
	url?: string;
	sampul?: MediaField;
	urutan?: number;
}

export interface Testimoni {
	nama: string;
	program_studi?: string;
	keterangan?: string;
	foto?: MediaField;
	isi: string;
	urutan?: number;
}

export interface Entri<T> {
	id: string;
	data: T;
}

/** Slide yang aktif, urut berdasarkan field `urutan`. */
export async function getSlider() {
	const { entries, cacheHint } = await getEmDashCollection("slider", {
		orderBy: { urutan: "asc" },
		limit: 50,
	});
	const aktif = (entries as unknown as Entri<Slide>[]).filter((e) => e.data.aktif !== false);
	return { entries: aktif, cacheHint };
}

/** Jurnal, urut berdasarkan field `urutan`. */
export async function getJurnal() {
	const { entries, cacheHint } = await getEmDashCollection("jurnal", {
		orderBy: { urutan: "asc" },
		limit: 100,
	});
	return { entries: entries as unknown as Entri<Jurnal>[], cacheHint };
}

/** Testimoni yang terbit, urut berdasarkan field `urutan`. */
export async function getTestimoni() {
	const { entries, cacheHint } = await getEmDashCollection("testimoni", {
		orderBy: { urutan: "asc" },
		limit: 50,
	});
	return { entries: entries as unknown as Entri<Testimoni>[], cacheHint };
}

/** Avatar inisial untuk testimoni tanpa foto (layanan ui-avatars, seperti situs lama). */
export function avatarInisial(nama: string): string {
	return `https://ui-avatars.com/api/?name=${encodeURIComponent(nama)}&size=200&background=006739&color=ffffff&bold=true`;
}
