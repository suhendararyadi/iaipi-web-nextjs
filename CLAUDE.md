# Website IAI PERSIS Garut — catatan untuk agen/kontributor

Situs ini adalah proyek **Astro 7 + EmDash CMS** yang berjalan di **Cloudflare Workers** (D1 untuk
database, R2 untuk media). Semua konten diedit lewat admin EmDash di `/_emdash/admin`.
Skill EmDash ada di `.claude/skills/building-emdash-site` (baca `SKILL.md` + `references/` sebelum
menambah koleksi atau query).

## Struktur

- `astro.config.mjs` — adapter Cloudflare, integrasi EmDash (D1 + R2), route cache, redirect.
- `wrangler.jsonc` — binding Cloudflare (DB, MEDIA), cron, domain.
- `seed/parts/*.json` — **sumber skema & konten awal**. `scripts/build-seed.mjs` menggabungkannya
  menjadi `seed/seed.json` (file hasil, di-gitignore) setiap `npm run dev`/`npm run build`.
  Seed hanya dipakai saat setup pertama (database kosong). Setelah situs live, skema diubah lewat
  admin (Content Types) dan konten lewat editor — bukan lewat seed.
- `src/layouts/Base.astro` — HTML dasar: CSS tema lama (`public/css/*`), header, footer, bottom nav,
  tombol WhatsApp, jQuery + `public/js/main.js` (slick slider, counter, back-to-top, sticky header).
- `src/components/layout/*` — Header, Footer, PageBanner, BottomNav, WhatsAppFloat.
- `src/lib/cms.ts` — helper: `mediaSrc()`, `lines()`, `paragraphs()`, `rows()`, `useCacheHint()`,
  `getInfoKampus()`, `waHref()`, `formatTanggal()`.
- `public/` — CSS/JS/gambar tema. Gambar dekoratif tetap di sini; gambar konten ada di media library.

## Konvensi

- Halaman = file `.astro` yang dirender di server. **Jangan** pakai komponen React untuk halaman
  publik (lebih berat CPU di Worker); interaktivitas kecil cukup `<script>` vanilla di komponen.
  React hanya dipakai oleh admin EmDash.
- Markup & class CSS dipertahankan sama dengan versi Next.js lama supaya tampilan identik
  (`public/css/custom.css` dll.). Gaya baru taruh di `public/css/site.css` atau `<style>` komponen.
- Setiap halaman yang membaca CMS wajib memanggil `useCacheHint(Astro, cacheHint, ...)` untuk
  semua hasil query, supaya cache edge ter-purge otomatis saat konten diubah. Tambahkan route
  publik baru ke `routeRules` di `astro.config.mjs`.
- Field `image` EmDash berupa objek — selalu render lewat `mediaSrc(field, fallback)`.
- Daftar sederhana disimpan sebagai field `text` "satu baris per item" (dibaca dengan `lines()`),
  karena repeater EmDash tidak bisa bersarang. Contoh: daftar mata kuliah per semester ditulis
  `Nama Mata Kuliah | 2` per baris.
- Nama koleksi & field: huruf kecil + underscore (`/^[a-z][a-z0-9_]*$/`), label bahasa Indonesia.
  Hindari slug field yang dicadangkan (`id`, `slug`, `status`, `terms`, `bylines`, dll.).
- Di seed part, gambar ditulis `{ "$asset": "/images/...", "alt": "..." }` (diunduh dari repo
  GitHub saat setup) dan rich text sederhana `{ "$pt": "paragraf\n\nparagraf" }`.
- Data yang belum resmi/masih generik diberi penanda di konten (mis. field `catatan_internal`) —
  jangan mengarang data institusi.
- Ikon: FontAwesome **4.7** saja (`fa fa-nama`). Ikon FA5+ tidak tampil.

## Perintah

```bash
npm install
npm run dev          # http://localhost:4321, admin di /_emdash/admin
                     # setup lokal cepat + isi seed: /_emdash/api/setup/dev-bypass?redirect=/
npm run build        # build produksi (dist/)
npm run deploy       # build + wrangler deploy
npx emdash types     # regenerasi emdash-env.d.ts dari dev server
```

Database lokal dev ada di `.wrangler/state` — hapus folder itu untuk mengulang setup + seed dari nol.
