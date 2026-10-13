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
