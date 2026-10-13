// Helper area akademik: koleksi `fakultas` dan `prodi` (S1 & S2).
import { getEmDashCollection, getEmDashEntry } from "emdash";
import { lines, mediaAlt, mediaSrc, rows, type MediaField } from "@/lib/cms";

export type Jenjang = "S1" | "S2";

export interface Fakultas {
	nama: string;
	nama_singkat?: string;
	jenjang: Jenjang;
	urutan?: number;
	judul_ringkasan?: string;
	deskripsi_singkat?: string;
	deskripsi?: string;
	ikon?: string;
	warna?: string;
	gambar?: MediaField;
	gambar_banner?: MediaField;
	jumlah_mahasiswa?: string;
	jumlah_dosen?: string;
	visi?: string;
	misi?: string;
	cta_judul?: string;
	cta_teks?: string;
	catatan_internal?: string;
}

export interface ProfilLulusan {
	ikon?: string;
	judul: string;
	deskripsi?: string;
}

export interface JudulDeskripsi {
	judul: string;
	deskripsi?: string;
}

export interface Semester {
	semester: string;
	total_sks?: number | null;
	fokus?: string;
	mata_kuliah?: string;
}

export interface KartuDaftar {
	ikon?: string;
	judul: string;
	item?: string;
}

export interface Catatan {
	ikon?: string;
	judul?: string;
	teks: string;
	letak: "profil" | "karir";
}

export interface Prodi {
	nama: string;
	singkatan: string;
	jenjang: Jenjang;
	fakultas: string;
	urutan?: number;
	gelar?: string;
	lama_studi?: number | null;
	akreditasi?: string;
	akreditasi_kartu?: string;
	gambar?: MediaField;
	gambar_banner?: MediaField;
	warna?: string;
	deskripsi_singkat?: string;
	sorotan?: string;
	ringkasan_karir?: string;
	ringkasan_keunggulan?: string;
	deskripsi?: string;
	visi?: string;
	misi?: string;
	tujuan?: string;
	profil_lulusan?: ProfilLulusan[] | null;
	kompetensi?: JudulDeskripsi[] | null;
	keunggulan?: JudulDeskripsi[] | null;
	kurikulum_pengantar?: string;
	kurikulum?: Semester[] | null;
	fasilitas_pengantar?: string;
	fasilitas?: KartuDaftar[] | null;
	karir_pengantar?: string;
	karir?: KartuDaftar[] | null;
	catatan?: Catatan[] | null;
	website?: string;
	kaprodi_slug?: string;
	cta_teks?: string;
	judul_seo?: string;
	deskripsi_seo?: string;
	catatan_internal?: string;
}

export interface FakultasEntry {
	/** slug, dipakai di URL /fakultas/<slug> */
	id: string;
	data: Fakultas & { id: string };
	edit?: Record<string, Record<string, string>>;
}

export interface ProdiEntry {
	/** slug, dipakai di URL /fakultas/<fakultas>/<slug> atau /magister/<slug> */
	id: string;
	data: Prodi & { id: string };
	edit?: Record<string, Record<string, string>>;
}

/** Semua fakultas yang terbit (S1 & pascasarjana), urut berdasarkan `urutan`. */
export async function getFakultasList() {
	const { entries, cacheHint } = await getEmDashCollection("fakultas", {
		orderBy: { urutan: "asc" },
		limit: 50,
	});
	return { entries: entries as unknown as FakultasEntry[], cacheHint };
}

/** Semua prodi yang terbit, urut berdasarkan `urutan` (disaring di halaman). */
export async function getProdiList() {
	const { entries, cacheHint } = await getEmDashCollection("prodi", {
		orderBy: { urutan: "asc" },
		limit: 200,
	});
	return { entries: entries as unknown as ProdiEntry[], cacheHint };
}

export async function getFakultas(slug: string) {
	const { entry, cacheHint } = await getEmDashEntry("fakultas", slug);
	return { entry: entry as unknown as FakultasEntry | null, cacheHint };
}

export async function getProdi(slug: string) {
	const { entry, cacheHint } = await getEmDashEntry("prodi", slug);
	return { entry: entry as unknown as ProdiEntry | null, cacheHint };
}

/** Nama & alamat Ketua Prodi dari koleksi pimpinan (null bila tidak ada). */
export async function getKaprodi(slug: string | undefined) {
	if (!slug) return { kaprodi: null, cacheHint: undefined };
	const { entry, cacheHint } = await getEmDashEntry("pimpinan", slug);
	const nama = (entry?.data as { nama?: string } | undefined)?.nama;
	return { kaprodi: entry && nama ? { nama, url: `/pimpinan/${entry.id}` } : null, cacheHint };
}

/** Alamat halaman detail prodi. */
export function prodiUrl(p: Pick<ProdiEntry, "id" | "data">): string {
	return p.data.jenjang === "S2" ? `/magister/${p.id}` : `/fakultas/${p.data.fakultas}/${p.id}`;
}

/** "Program Studi Pendidikan Agama Islam" (S1) atau "Magister Ilmu Hadis" (S2, nama sudah lengkap). */
export function judulProdi(p: Prodi): string {
	return p.jenjang === "S2" ? p.nama : `Program Studi ${p.nama}`;
}

/** Lama studi dalam tahun untuk header prodi, mis. 8 semester -> "4 Tahun". */
export function durasiTahun(semester: number | null | undefined): string {
	if (!semester) return "";
	return `${(semester / 2).toLocaleString("id-ID")} Tahun`;
}

/** Lama studi dalam semester untuk kartu, mis. "8 Semester". */
export function durasiSemester(semester: number | null | undefined): string {
	return semester ? `${semester} Semester` : "";
}

export interface MataKuliah {
	nama: string;
	sks: number | null;
}

/** Baris "Nama Mata Kuliah | 2" -> { nama, sks }. */
export function mataKuliah(text: string | null | undefined): MataKuliah[] {
	return lines(text).map((line) => {
		const i = line.lastIndexOf("|");
		if (i === -1) return { nama: line, sks: null };
		const sks = Number.parseInt(line.slice(i + 1).trim(), 10);
		return { nama: line.slice(0, i).trim(), sks: Number.isNaN(sks) ? null : sks };
	});
}

/** Total SKS satu semester: pakai isian editor, atau jumlahkan SKS mata kuliah. */
export function totalSks(s: Semester): number | null {
	if (typeof s.total_sks === "number") return s.total_sks;
	const list = mataKuliah(s.mata_kuliah);
	if (list.length === 0 || list.every((mk) => mk.sks === null)) return null;
	return list.reduce((n, mk) => n + (mk.sks ?? 0), 0);
}

export type BlokTeks = { type: "p"; text: string } | { type: "ul"; items: string[] };

/** Teks campuran: baris berawalan "- " jadi butir daftar, baris lain jadi paragraf. */
export function blokTeks(text: string | null | undefined): BlokTeks[] {
	if (!text) return [];
	const out: BlokTeks[] = [];
	for (const raw of text.split(/\r?\n/)) {
		const line = raw.trim();
		if (!line) continue;
		const item = line.match(/^[-•]\s*(.*)$/);
		if (item) {
			const last = out[out.length - 1];
			if (last?.type === "ul") last.items.push(item[1]);
			else out.push({ type: "ul", items: [item[1]] });
		} else {
			out.push({ type: "p", text: line });
		}
	}
	return out;
}

function escapeHtml(s: string): string {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** Escape HTML lalu ubah **teks** menjadi <strong>teks</strong> (untuk set:html). */
export function tebal(text: string): string {
	return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

/** Repeater aman + buang baris tanpa judul. */
export function daftar<T extends { judul?: string }>(value: unknown): T[] {
	return rows<T>(value).filter((r) => r && (r.judul ?? "").trim() !== "");
}

/**
 * Jumlahkan angka seperti "400+", "300+" -> "1000+". Mengembalikan "" bila
 * tidak ada angka sama sekali.
 */
export function jumlahkanAngka(values: (string | undefined)[]): string {
	let total = 0;
	let ada = false;
	let plus = false;
	for (const v of values) {
		const m = (v ?? "").replace(/\./g, "").match(/(\d+)\s*(\+)?/);
		if (!m) continue;
		ada = true;
		total += Number(m[1]);
		if (m[2]) plus = true;
	}
	return ada ? `${total}${plus ? "+" : ""}` : "";
}

/** Nilai yang paling sering muncul (mis. akreditasi mayoritas prodi). */
export function modus(values: (string | undefined)[]): string {
	const count = new Map<string, number>();
	for (const v of values) if (v) count.set(v, (count.get(v) ?? 0) + 1);
	let best = "";
	let max = 0;
	for (const [v, n] of count) {
		if (n > max) {
			best = v;
			max = n;
		}
	}
	return best;
}

/** Kalimat pertama sebuah teks (untuk deskripsi SEO cadangan). */
export function kalimatPertama(text: string | undefined): string {
	if (!text) return "";
	const m = text.match(/^.*?[.!?](\s|$)/);
	return (m ? m[0] : text).trim();
}

// ---------- Tambahan untuk desain baru halaman akademik ----------

export interface KaprodiProfil {
	nama: string;
	url: string;
	jabatan?: string;
	foto: string;
	fotoAlt: string;
	kutipan?: string;
	tentang?: string;
	pendidikan: string[];
}

/** Profil Ketua Prodi untuk section "Ketua Program Studi" (nama, jabatan, foto, kutipan, pendidikan). */
export async function getKaprodiProfil(slug: string | undefined) {
	if (!slug) return { kaprodi: null, cacheHint: undefined };
	const { entry, cacheHint } = await getEmDashEntry("pimpinan", slug);
	const d = (entry?.data ?? {}) as {
		nama?: string;
		jabatan?: string;
		foto?: MediaField;
		foto_sambutan?: MediaField;
		kutipan?: string;
		tentang?: string;
		pendidikan?: string;
	};
	if (!entry || !d.nama) return { kaprodi: null, cacheHint };
	const kaprodi: KaprodiProfil = {
		nama: d.nama,
		url: `/pimpinan/${entry.id}`,
		jabatan: d.jabatan,
		foto: mediaSrc(d.foto_sambutan) || mediaSrc(d.foto),
		fotoAlt: mediaAlt(d.foto_sambutan) || mediaAlt(d.foto, d.nama),
		kutipan: d.kutipan?.trim() || undefined,
		tentang: d.tentang?.trim() || undefined,
		pendidikan: lines(d.pendidikan),
	};
	return { kaprodi, cacheHint };
}

const GELAR: Record<string, string> = {
	"S.Pd.": "Sarjana Pendidikan",
	"S.Ag.": "Sarjana Agama",
	"S.Hum.": "Sarjana Humaniora",
	"S.E.": "Sarjana Ekonomi",
	"S.H.": "Sarjana Hukum",
	"S.Sos.": "Sarjana Sosial",
	"M.Pd.": "Magister Pendidikan",
	"M.Ag.": "Magister Agama",
	"M.E.": "Magister Ekonomi",
	"M.H.": "Magister Hukum",
};

/** Kepanjangan gelar akademik, mis. "S.Pd." -> "Sarjana Pendidikan" ("" bila tidak dikenal). */
export function kepanjanganGelar(gelar: string | undefined): string {
	if (!gelar) return "";
	const key = gelar.trim().replace(/\s+/g, "");
	return GELAR[key] ?? GELAR[`${key}.`] ?? "";
}

/** Ubah entitas HTML sisa migrasi (mis. "Da&apos;i") menjadi karakter biasa. */
export function tanpaEntitas(text: string | null | undefined): string {
	return (text ?? "")
		.replace(/&apos;|&#0*39;/g, "'")
		.replace(/&quot;|&#0*34;/g, '"')
		.replace(/&nbsp;/g, " ")
		.replace(/&amp;/g, "&");
}

/** Semester kurikulum yang valid (punya nama semester). */
export function daftarSemester(value: unknown): Semester[] {
	return rows<Semester>(value).filter((s) => !!s?.semester);
}

/** Catatan yang valid (punya teks). */
export function daftarCatatan(value: unknown): Catatan[] {
	return rows<Catatan>(value).filter((c) => !!c?.teks);
}

/**
 * Total SKS seluruh kurikulum — hanya bila semua semester (sesuai lama studi)
 * tercantum, agar angka tidak menyesatkan saat kurikulum baru diisi sebagian.
 */
export function totalSksKurikulum(kurikulum: Semester[], lamaStudi: number | null | undefined): number | null {
	if (!lamaStudi || kurikulum.length < lamaStudi) return null;
	let total = 0;
	for (const s of kurikulum) {
		const n = totalSks(s);
		if (n === null) return null;
		total += n;
	}
	return total;
}

export { lines };
