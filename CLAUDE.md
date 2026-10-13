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
- `src/layouts/Base.astro` — HTML dasar: font (Source Serif 4 untuk judul + Plus Jakarta Sans untuk isi/UI), `src/styles/global.css`, header,
  footer, tombol WhatsApp, `src/scripts/ui.ts` (menu mobile, tab, carousel, slider; tanpa jQuery).
- `src/styles/global.css` — sistem desain (tata letak mengikuti unpad.ac.id, warna IAIP): token warna,
  `.wadah`, `.section`, `.judul-besar`/`.judul-sedang`/`.sorot`, `.btn-kuning`, `.tab`, `.kartu`,
  `.kartu-foto`, `.pita-statistik`, `.banner`, `.carousel`, `.prosa`.
- `src/components/layout/*` — Header (menu CMS `tautan_atas` + `utama`), Footer (menu `footer_sumber`,
  `footer_layanan`, `footer_profil`), PageBanner (banner halaman dalam), WhatsAppFloat.
- `src/components/ui/*` — `JudulSorot`/`KepalaSection`: judul dari CMS dengan `*kata*` disorot hijau.
- `src/lib/cms.ts` — helper: `mediaSrc()`, `lines()`, `paragraphs()`, `rows()`, `useCacheHint()`,
  `getInfoKampus()`, `waHref()`, `formatTanggal()`.
- `public/` — CSS/JS/gambar tema. Gambar dekoratif tetap di sini; gambar konten ada di media library.

## Konvensi

- Halaman = file `.astro` yang dirender di server. **Jangan** pakai komponen React untuk halaman
  publik (lebih berat CPU di Worker); interaktivitas kecil cukup `<script>` vanilla di komponen.
  React hanya dipakai oleh admin EmDash.
- Desain: ikuti sistem di `src/styles/global.css`. Aturan warna: latar aksen hijau `#006738` (teks
  putih); tombol/pil/tab aktif kuning `#FFC600` dengan teks gelap (jangan teks putih di atas kuning);
  kata sorotan di judul hijau; angka/meta di atas foto atau latar gelap kuning. Gaya khusus komponen
  taruh di `<style>` (scoped). Interaksi lewat atribut `data-tabs`, `data-carousel`, `data-slider`.
- Setiap halaman yang membaca CMS wajib memanggil `useCacheHint(Astro, cacheHint, ...)` untuk
  semua hasil query, supaya cache edge ter-purge otomatis saat konten diubah. Tambahkan route
  publik baru ke `routeRules` di `astro.config.mjs`.
- Field `image` EmDash berupa objek — selalu render lewat `mediaSrc(field, fallback, lebar?)`. Gambar
  media library otomatis di-resize ke WebP lewat `/_image` (default 1600px; isi `lebar` lebih kecil
  untuk thumbnail/logo). `mediaSrcAsli()` untuk URL file asli (mis. RSS).
- Daftar sederhana disimpan sebagai field `text` "satu baris per item" (dibaca dengan `lines()`),
  karena repeater EmDash tidak bisa bersarang. Contoh: daftar mata kuliah per semester ditulis
  `Nama Mata Kuliah | 2` per baris.
- Nama koleksi & field: huruf kecil + underscore (`/^[a-z][a-z0-9_]*$/`), label bahasa Indonesia.
  Hindari slug field yang dicadangkan (`id`, `slug`, `status`, `terms`, `bylines`, dll.).
- Di seed part, gambar ditulis `{ "$asset": "/images/...", "alt": "..." }` (diunduh dari repo
  GitHub saat setup) dan rich text sederhana `{ "$pt": "paragraf\n\nparagraf" }`.
- Data yang belum resmi/masih generik diberi penanda di konten (mis. field `catatan_internal`) —
  jangan mengarang data institusi.
- Ikon: inline `<svg>` sederhana dengan `aria-hidden="true"` (FontAwesome tidak lagi dimuat).
- Tipografi: judul halaman/section (h1, h2, `.judul-besar`, `.judul-sedang`, angka statistik) serif
  `var(--font-judul)`; judul kartu (h3 ke bawah), isi, dan UI sans `var(--font-isi)`/`var(--font-ui)`.
- Ornamen: pakai `<Ornamen jenis="pola|roset" />` (`src/components/ui/Ornamen.astro`) di blok berwarna
  yang `position: relative; isolation: isolate; overflow: hidden`. Jaga samar (putih 6–10%), jangan
  di belakang teks panjang (pakai `pudar="tengah"`), dan hanya di blok berwarna — bukan latar putih.

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
