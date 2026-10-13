// Helper query konten beranda: pengaturan section (koleksi `beranda`, entri "utama"),
// slider hero, dan jurnal. Berita, fakultas, pimpinan, dan layanan diambil lewat
// helper koleksinya masing-masing (src/lib/berita.ts, akademik.ts, pimpinan.ts, profil.ts).
import { getEmDashCollection, getEmDashEntry } from "emdash";
import { rows, type MediaField } from "@/lib/cms";

export interface TautanCepat {
	judul?: string;
	keterangan?: string;
	url?: string;
}

export interface StatistikBeranda {
	label?: string;
	nilai?: string;
	catatan?: string;
}

export interface KartuStudi {
	judul?: string;
	gambar?: MediaField;
	url?: string;
	teks_tombol?: string;
}

export interface AngkaSederhana {
	nilai?: string;
	label?: string;
}

/** Nilai field select `tab` di repeater fasilitas & nilai_kartu. */
export type NomorTab = "1" | "2";

export interface FotoFasilitas {
	tab?: NomorTab;
	judul?: string;
	gambar?: MediaField;
}

export interface KartuNilai {
	tab?: NomorTab;
	judul?: string;
	deskripsi?: string;
	gambar?: MediaField;
}

export type IkonAngka = "toga" | "buku" | "gedung" | "jurnal" | "mahasiswa" | "dosen" | "staf" | "bintang";

export interface AngkaIkon {
	nilai?: string;
	label?: string;
	ikon?: IkonAngka;
}

export interface Beranda {
	tautan_cepat: TautanCepat[];
	pernyataan_judul?: string;
	pernyataan_teks?: string;
	pernyataan_lencana?: string;
	statistik: StatistikBeranda[];
	studi_judul?: string;
	studi_teks?: string;
	studi_kartu: KartuStudi[];
	berita_judul?: string;
	berita_teks?: string;
	berita_jumlah: number;
	kehidupan_judul?: string;
	kehidupan_teks?: string;
	kehidupan_gambar?: MediaField;
	kehidupan_angka: AngkaSederhana[];
	fakultas_judul?: string;
	fakultas_teks?: string;
	fasilitas_tab_1?: string;
	fasilitas_tab_2?: string;
	fasilitas: FotoFasilitas[];
	nilai_judul?: string;
	nilai_teks?: string;
	nilai_tab_1?: string;
	nilai_tab_2?: string;
	nilai_kartu: KartuNilai[];
	sambutan_judul?: string;
	sambutan_latar?: MediaField;
	angka_judul?: string;
	angka_teks?: string;
	angka_latar?: MediaField;
	angka: AngkaIkon[];
	jurnal_judul?: string;
	jurnal_teks?: string;
}

const REPEATER = [
	"tautan_cepat",
	"statistik",
	"studi_kartu",
	"kehidupan_angka",
	"fasilitas",
	"nilai_kartu",
	"angka",
] as const satisfies readonly (keyof Beranda)[];

/**
 * Pengaturan beranda (entri slug "utama"). Field kosong dibiarkan kosong — section
 * yang tidak punya isi tidak dirender — kecuali repeater (selalu array) dan
 * `berita_jumlah` (1–9, bawaan 3).
 */
export async function getBeranda(): Promise<{ beranda: Beranda; cacheHint?: unknown }> {
	const { entry, cacheHint } = await getEmDashEntry("beranda", "utama");
	const data = (entry?.data ?? {}) as Record<string, unknown>;
	const beranda = { ...data } as unknown as Beranda;
	for (const key of REPEATER) (beranda as unknown as Record<string, unknown>)[key] = rows(data[key]);
	const jumlah = Number(data.berita_jumlah);
	beranda.berita_jumlah = Number.isFinite(jumlah) && jumlah > 0 ? Math.min(9, Math.round(jumlah)) : 3;
	return { beranda, cacheHint };
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

/** Tanggal pendek dd/mm/yyyy (zona Asia/Jakarta), untuk meta kartu berita. */
export function tanggalAngka(date: Date | string | null | undefined): string {
	if (!date) return "";
	const d = typeof date === "string" ? new Date(date) : date;
	if (Number.isNaN(d.getTime())) return "";
	return d.toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "Asia/Jakarta" });
}

/** Tanggal ringkas "10 Okt" (zona Asia/Jakarta), untuk daftar agenda & pengumuman. */
export function tanggalRingkas(date: Date | string | null | undefined): string {
	if (!date) return "";
	const d = typeof date === "string" ? new Date(date) : date;
	if (Number.isNaN(d.getTime())) return "";
	return d.toLocaleDateString("id-ID", { day: "numeric", month: "short", timeZone: "Asia/Jakarta" }).replace(".", "");
}

/** Tanggal ISO (YYYY-MM-DD) untuk atribut datetime. */
export function tanggalIso(date: Date | string | null | undefined): string | undefined {
	if (!date) return undefined;
	const d = typeof date === "string" ? new Date(date) : date;
	return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
}

/** Memecah daftar menjadi baris berpola (mis. [2, 3, 3]) untuk grid bento. */
export function pecahBaris<T>(items: T[], pola: (sisa: number, indeks: number) => number): T[][] {
	const hasil: T[][] = [];
	let i = 0;
	while (i < items.length) {
		const n = Math.max(1, pola(items.length - i, hasil.length));
		hasil.push(items.slice(i, i + n));
		i += n;
	}
	return hasil;
}
