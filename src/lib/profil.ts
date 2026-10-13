// Helper area Profil, Layanan, Lembaga, Kontak, dan PMB (koleksi di seed/parts/50-profil.json).
import { getEmDashCollection, getEmDashEntry } from "emdash";
import type { MediaField } from "@/lib/cms";

// ------------------------------------------------------------------ util

/** Kelas ikon FontAwesome 4.7 dari isian editor ("fa-book", "fa fa-book", atau "book"). */
export function ikon(nama: string | null | undefined, cadangan = "fa-circle"): string {
	const n = (nama ?? "").trim().replace(/^fa\s+/, "") || cadangan;
	return `fa ${n.startsWith("fa-") ? n : `fa-${n}`}`;
}

function escapeHtml(text: string): string {
	return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

/** Teks aman untuk `set:html`; `**teks**` menjadi <strong>teks</strong>. */
export function tebal(text: string | null | undefined): string {
	return escapeHtml(text ?? "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

/** href tel: untuk nomor Indonesia yang ditulis "08..." / "+62 ..." / "62...". */
export function telIndo(phone: string | null | undefined): string {
	const digits = (phone ?? "").replace(/[^\d+]/g, "");
	if (!digits) return "#";
	if (digits.startsWith("+")) return `tel:${digits}`;
	if (digits.startsWith("0")) return `tel:+62${digits.slice(1)}`;
	if (digits.startsWith("62")) return `tel:+${digits}`;
	return `tel:${digits}`;
}

/** Link wa.me dari nomor (format internasional) + pesan awal. */
export function waLink(nomor: string | null | undefined, pesan?: string | null): string {
	const n = (nomor ?? "").replace(/\D/g, "");
	if (!n) return "#";
	return `https://wa.me/${n}${pesan ? `?text=${encodeURIComponent(pesan)}` : ""}`;
}

/**
 * Memecah alamat satu baris menjadi tiga baris seperti kartu alamat lama:
 * "Jl. ...", "Kecamatan, Kabupaten", "Provinsi Kodepos, Indonesia".
 */
export function alamatBaris(alamat: string | null | undefined): string[] {
	const text = (alamat ?? "").trim();
	if (!text) return [];
	if (text.includes("\n")) return text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
	const parts = text.split(/,\s*/);
	if (parts.length < 3) return [text];
	const akhir = parts[parts.length - 1];
	return [parts[0], parts.slice(1, -1).join(", "), /indonesia/i.test(akhir) ? akhir : `${akhir}, Indonesia`];
}

/** Peta Google Maps situs lama — dipakai bila Info Kampus > URL embed Google Maps masih kosong. */
export const PETA_EMBED_LAMA =
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8834!2d107.9073!3d-7.2242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTMnMjcuMSJTIDEwN8KwNTQnMjYuMyJF!5e0!3m2!1sen!2sid!4v1234567890";

/** Nilai field datetime EmDash (Date atau string ISO) → Date, atau null. */
export function keTanggal(value: Date | string | null | undefined): Date | null {
	if (!value) return null;
	const d = value instanceof Date ? value : new Date(value);
	return Number.isNaN(d.getTime()) ? null : d;
}

type Edit = Record<string, Record<string, string>>;

// ------------------------------------------------------------------ profil institusi

export interface ItemIkon {
	ikon?: string;
	judul?: string;
	deskripsi?: string;
	teks?: string;
}

export interface Statistik {
	angka: number;
	akhiran?: string;
	label: string;
	ikon?: string;
}

export interface Sertifikat {
	judul: string;
	program: string;
	peringkat?: string;
	label_peringkat?: string;
	masa_berlaku?: string;
	nomor_sk?: string;
	gambar?: MediaField;
	tautan?: string;
	warna?: string;
}

export interface ProfilInstitusi {
	nama: string;
	paragraf_pembuka?: string;
	tentang?: string;
	gambar_tentang?: MediaField;
	lencana_judul?: string;
	lencana_subjudul?: string;
	poin_utama?: ItemIkon[];
	keunggulan?: ItemIkon[];
	visi?: string;
	misi?: ItemIkon[];
	tujuan?: ItemIkon[];
	moto?: string;
	nilai?: ItemIkon[];
	statistik?: Statistik[];
	akreditasi_peringkat?: string;
	akreditasi_keterangan?: string;
	akreditasi_sertifikat?: Sertifikat[];
	akreditasi_statistik?: { ikon?: string; angka: string; label: string }[];
	akreditasi_informasi?: string;
	akreditasi_email?: string;
}

/** Entri "utama" koleksi profil_institusi (atau entri pertama bila slug lain). */
export async function getProfil(): Promise<{ profil: ProfilInstitusi | null; edit: Edit; cacheHint?: unknown }> {
	const { entry, cacheHint } = await getEmDashEntry("profil_institusi", "utama");
	if (entry) return { profil: entry.data as unknown as ProfilInstitusi, edit: entry.edit as Edit, cacheHint };
	const list = await getEmDashCollection("profil_institusi", { limit: 1 });
	const first = list.entries[0];
	return { profil: (first?.data as unknown as ProfilInstitusi) ?? null, edit: (first?.edit ?? {}) as Edit, cacheHint: list.cacheHint };
}

// ------------------------------------------------------------------ layanan

export const KATEGORI_LAYANAN = [
	{ id: "all", nama: "Semua Layanan", ikon: "fa-th" },
	{ id: "akademik", nama: "Akademik", ikon: "fa-graduation-cap" },
	{ id: "penelitian", nama: "Penelitian & P2M", ikon: "fa-flask" },
	{ id: "publikasi", nama: "Publikasi", ikon: "fa-book" },
	{ id: "mahasiswa", nama: "Kemahasiswaan", ikon: "fa-users" },
	{ id: "alumni", nama: "Alumni", ikon: "fa-user-plus" },
	{ id: "administrasi", nama: "Administrasi", ikon: "fa-cog" },
] as const;

export interface Layanan {
	nama: string;
	nama_singkat: string;
	kategori: string;
	deskripsi?: string;
	url?: string;
	ikon?: string;
	warna?: string;
	ketersediaan: "aktif" | "segera_hadir";
	urutan?: number;
}

export async function getLayanan() {
	const { entries, cacheHint } = await getEmDashCollection("layanan", { orderBy: { urutan: "asc" }, limit: 200 });
	return { entries: entries as unknown as { id: string; data: Layanan }[], cacheHint };
}

// ------------------------------------------------------------------ lembaga

export const KATEGORI_LEMBAGA: Record<string, string> = {
	lembaga: "Lembaga",
	pusat: "Pusat",
	unit: "Unit",
	prodi: "Prodi",
};

export interface Lembaga {
	nama: string;
	nama_lengkap?: string;
	kategori: string;
	fakultas?: string;
	deskripsi?: string;
	url?: string;
	ikon?: string;
	ketersediaan: "aktif" | "segera_hadir";
	urutan?: number;
	tampil_di_halaman?: boolean;
	tampil_di_beranda?: boolean;
	urutan_beranda?: number;
	beranda_nama_lengkap?: string;
	beranda_deskripsi?: string;
	warna?: string;
}

export type LembagaEntry = { id: string; data: Lembaga };

export async function getLembaga() {
	const { entries, cacheHint } = await getEmDashCollection("lembaga", { orderBy: { urutan: "asc" }, limit: 200 });
	return { entries: entries as unknown as LembagaEntry[], cacheHint };
}

/** Urutan halaman lama: lembaga aktif (non-prodi) → program studi → yang segera hadir. */
export function urutkanLembaga(list: LembagaEntry[]): LembagaEntry[] {
	const prioritas = (l: Lembaga) => (l.ketersediaan === "aktif" && l.kategori !== "prodi" ? 1 : l.kategori === "prodi" ? 2 : 3);
	return list
		.map((e, i) => ({ e, i }))
		.sort((a, b) => prioritas(a.e.data) - prioritas(b.e.data) || a.i - b.i)
		.map(({ e }) => e);
}

// ------------------------------------------------------------------ kontak

export interface UnitKontak {
	nama: string;
	deskripsi?: string;
	email?: string;
	telepon?: string;
}

export interface InfoKontak {
	judul: string;
	jam_operasional?: string;
	unit?: UnitKontak[];
}

export async function getInfoKontak(): Promise<{ kontak: InfoKontak | null; cacheHint?: unknown }> {
	const { entry, cacheHint } = await getEmDashEntry("info_kontak", "utama");
	if (entry) return { kontak: entry.data as unknown as InfoKontak, cacheHint };
	const list = await getEmDashCollection("info_kontak", { limit: 1 });
	return { kontak: (list.entries[0]?.data as unknown as InfoKontak) ?? null, cacheHint: list.cacheHint };
}

// ------------------------------------------------------------------ PMB

export interface Pmb {
	judul: string;
	tahun_akademik: string;
	gelombang_aktif?: string;
	tanggal_tutup?: Date | string | null;
	tanggal_tutup_beasiswa?: Date | string | null;
	intro_judul?: string;
	intro_deskripsi?: string;
	jumlah_prodi?: string;
	label_jumlah_prodi?: string;
	biaya_minimum_s1?: string;
	biaya_minimum_s2?: string;
	jadwal?: { jalur: string; periode: string }[];
	catatan_jadwal?: string;
	whatsapp_admin?: string;
	pesan_whatsapp_admin?: string;
	keunggulan?: ItemIkon[];
	program_studi?: { fakultas: string; ikon?: string; prodi?: string }[];
	ukm?: { nama: string; bidang?: string }[];
	catatan_biaya?: string;
	biaya_s1?: { komponen: string; nominal: string }[];
	biaya_s2?: { komponen: string; nominal: string }[];
	langkah_judul?: string;
	langkah_deskripsi?: string;
	alur_pendaftaran?: { judul: string; deskripsi?: string }[];
	persyaratan?: string;
	poster?: { gambar?: MediaField; keterangan?: string }[];
	poster_lengkap?: MediaField;
	kanal_bantuan?: { ikon?: string; label: string; url: string; keterangan?: string }[];
	beranda_judul_pmb?: string;
	beranda_teks_pmb?: string;
	beranda_judul_beasiswa?: string;
	beranda_teks_beasiswa?: string;
	beranda_sorotan_beasiswa?: { ikon?: string; teks: string }[];
}

export async function getPmb(): Promise<{ pmb: Pmb | null; edit: Edit; cacheHint?: unknown }> {
	const { entry, cacheHint } = await getEmDashEntry("pmb", "utama");
	if (entry) return { pmb: entry.data as unknown as Pmb, edit: entry.edit as Edit, cacheHint };
	const list = await getEmDashCollection("pmb", { limit: 1 });
	const first = list.entries[0];
	return { pmb: (first?.data as unknown as Pmb) ?? null, edit: (first?.edit ?? {}) as Edit, cacheHint: list.cacheHint };
}

