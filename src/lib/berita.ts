// Helper query koleksi `berita` + taksonomi `kategori_berita`.
import { getEmDashCollection, getEmDashEntry, getTaxonomyTermsWithCacheHint } from "emdash";
import type { MediaField } from "@/lib/cms";

export const TAKSONOMI_KATEGORI = "kategori_berita";

export interface KategoriBerita {
	id?: string;
	slug: string;
	label: string;
}

export interface Berita {
	/** ULID database (untuk getEntryTerms, komentar, dll.) */
	id: string;
	title: string;
	excerpt?: string;
	featured_image?: MediaField;
	content?: unknown[];
	publishedAt: Date | null;
	createdAt?: Date;
	updatedAt?: Date;
	terms?: Record<string, KategoriBerita[]>;
	byline?: { displayName: string; slug: string } | null;
}

export interface BeritaEntry {
	/** slug, dipakai di URL /berita/<slug> */
	id: string;
	data: Berita;
	edit?: unknown;
}

/** Kategori sebuah berita (array kosong bila belum dikategorikan). */
export function kategoriBerita(entry: BeritaEntry): KategoriBerita[] {
	return entry.data.terms?.[TAKSONOMI_KATEGORI] ?? [];
}

/** Tanggal tampil: tanggal terbit, atau tanggal dibuat untuk draf/pratinjau. */
export function tanggalBerita(entry: BeritaEntry): Date | null {
	return entry.data.publishedAt ?? entry.data.createdAt ?? null;
}

/** Perkiraan waktu baca (menit) dari isi Portable Text. */
export function waktuBaca(content: unknown[] | undefined): number {
	if (!Array.isArray(content)) return 1;
	let words = 0;
	for (const block of content as { _type?: string; children?: { text?: string }[] }[]) {
		if (block?._type !== "block") continue;
		for (const child of block.children ?? []) words += (child.text ?? "").split(/\s+/).filter(Boolean).length;
	}
	return Math.max(1, Math.ceil(words / 200));
}

/** Berita terbaru (untuk beranda/sidebar). */
export async function getBeritaTerbaru(limit = 4) {
	const { entries, cacheHint } = await getEmDashCollection("berita", {
		limit,
		orderBy: { published_at: "desc" },
	});
	return { entries: entries as unknown as BeritaEntry[], cacheHint };
}

/** Daftar berita dengan paginasi cursor, opsional difilter satu kategori (slug term). */
export async function getDaftarBerita(options: { cursor?: string; limit?: number; kategori?: string } = {}) {
	const { entries, nextCursor, cacheHint } = await getEmDashCollection("berita", {
		limit: options.limit ?? 12,
		cursor: options.cursor,
		orderBy: { published_at: "desc" },
		...(options.kategori ? { where: { [TAKSONOMI_KATEGORI]: options.kategori } } : {}),
	});
	return { entries: entries as unknown as BeritaEntry[], nextCursor, cacheHint };
}

/** Satu berita berdasarkan slug. */
export async function getBerita(slug: string) {
	const { entry, cacheHint } = await getEmDashEntry("berita", slug);
	return {
		entry: (entry ?? null) as unknown as (BeritaEntry & { edit: Record<string, Record<string, string>> }) | null,
		cacheHint,
	};
}

/** Semua kategori berita. */
export async function getKategoriBerita() {
	const { data, cacheHint } = await getTaxonomyTermsWithCacheHint(TAKSONOMI_KATEGORI, { includeCounts: false });
	return { kategori: (data ?? []) as unknown as KategoriBerita[], cacheHint };
}
