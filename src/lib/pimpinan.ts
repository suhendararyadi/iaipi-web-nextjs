import { getEmDashCollection } from "emdash";
import type { MediaField } from "@/lib/cms";

export interface Pimpinan {
	nama: string;
	jabatan: string;
	jabatan_singkat?: string;
	kelompok: "rektor" | "wakil_rektor" | "dekan" | "kaprodi";
	urutan?: number;
	foto?: MediaField;
	foto_avatar?: MediaField;
	tentang?: string;
	pendidikan?: string;
	sinta_id?: string;
	google_scholar?: string;
	kutipan?: string;
	foto_sambutan?: MediaField;
}

export interface PimpinanEntry {
	/** slug, dipakai di URL /pimpinan/<slug> */
	id: string;
	data: Pimpinan;
}

/** Semua pimpinan yang terbit, diurutkan berdasarkan field `urutan`. */
export async function getPimpinan() {
	const { entries, cacheHint } = await getEmDashCollection("pimpinan", {
		orderBy: { urutan: "asc" },
		limit: 200,
	});
	return { entries: entries as unknown as PimpinanEntry[], cacheHint };
}

/** Urutan, label, dan anchor kelompok pimpinan untuk halaman /pimpinan. */
export const KELOMPOK_PIMPINAN: { kelompok: Pimpinan["kelompok"]; label: string; anchor: string }[] = [
	{ kelompok: "rektor", label: "Rektor", anchor: "rektor" },
	{ kelompok: "wakil_rektor", label: "Wakil Rektor", anchor: "wakil-rektor" },
	{ kelompok: "dekan", label: "Dekan", anchor: "dekan" },
	{ kelompok: "kaprodi", label: "Ketua Program Studi", anchor: "ketua-program-studi" },
];

/** Label kelompok, mis. "wakil_rektor" → "Wakil Rektor". */
export function labelKelompok(kelompok: string | undefined): string {
	return KELOMPOK_PIMPINAN.find((k) => k.kelompok === kelompok)?.label ?? "Pimpinan";
}

/** Jabatan ringkas untuk kartu (jabatan_singkat bila diisi). */
export function jabatanRingkas(p: Pick<Pimpinan, "jabatan" | "jabatan_singkat">): string {
	return p.jabatan_singkat || p.jabatan;
}

/** Inisial nama (tanpa gelar) untuk kartu tanpa foto, mis. "Dr. Tiar Anwar" → "TA". */
export function inisialNama(nama: string): string {
	const kata = nama
		.split(",")[0]
		.split(/\s+/)
		.filter((k) => k && !/\.$/.test(k));
	return (kata[0]?.[0] ?? "") + (kata.length > 1 ? kata[kata.length - 1][0] : "");
}
