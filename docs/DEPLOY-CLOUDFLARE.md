# Panduan Deploy ke Cloudflare

Situs ini berjalan sebagai **satu Cloudflare Worker** (Astro + EmDash) dengan:

| Layanan Cloudflare | Binding | Fungsi |
| --- | --- | --- |
| Workers | — | Menjalankan situs + admin CMS |
| D1 | `DB` | Database konten (dibuat otomatis saat deploy pertama) |
| R2 | `MEDIA` | Penyimpanan gambar/berkas yang diunggah lewat admin |
| KV | `SESSION` | Sesi login (dibuat otomatis) |
| Images | `IMAGES` | Resize gambar (gratis 5.000 transformasi unik/bulan) |
| Cron Trigger | — | Publikasi terjadwal, backup, pemeliharaan EmDash (tiap menit) |

Semua binding dideklarasikan di `wrangler.jsonc`; D1, R2, dan KV dibuat otomatis oleh Wrangler
pada deploy pertama jika belum ada.

## 1. Persiapan (sekali saja)

1. Buat/masuk akun Cloudflare: <https://dash.cloudflare.com>.
2. Aktifkan **R2** di dashboard (menu *R2 Object Storage*). Cloudflare biasanya meminta metode
   pembayaran untuk verifikasi walaupun pemakaian masih di dalam kuota gratis (10 GB).
3. Di komputer lokal (Node.js 22+):

   ```bash
   git clone https://github.com/suhendararyadi/iaipi-web-nextjs.git
   cd iaipi-web-nextjs
   npm install
   npx wrangler login
   ```

## 2. Deploy pertama

```bash
npm run deploy
```

Wrangler akan membuat database D1 `iaipi-web`, bucket R2 `iaipi-web-media`, dan namespace KV,
lalu menampilkan alamat seperti `https://iaipi-web.<akun>.workers.dev`.

## 3. Setup admin & impor konten lama

1. Buka `https://iaipi-web.<akun>.workers.dev/` sekali (migrasi database berjalan otomatis).
2. Buka `/_emdash/admin` → **wizard setup**:
   - Isi judul situs.
   - Pada pilihan cara memulai, pilih **Konten sampel** (*Sample content*). Ini yang mengimpor
     seluruh konten situs lama (prodi, pimpinan, layanan, PMB, dst.) dan mengunduh foto-fotonya ke R2.
     Proses ini bisa memakan waktu 1–3 menit.
   - Buat akun administrator dengan **passkey** (sidik jari/Face ID/PIN perangkat).
3. Lakukan setup **segera** setelah deploy — sebelum setup selesai, siapa pun yang membuka
   `/_emdash/admin` bisa menjadi admin pertama.
4. Bahasa admin bisa diganti ke Bahasa Indonesia dari menu profil pengguna.
5. Undang editor lain lewat **Users** (peran: Administrator, Editor, Author, Contributor).

> **Passkey terikat ke domain.** Passkey yang dibuat di `*.workers.dev` tidak berlaku otomatis di
> `iaipersisgarut.ac.id`. Setelah domain dipindah (langkah 5), gunakan **Settings → General →
> Change domain** di admin, lalu daftarkan passkey baru di domain produksi. Alternatif: lakukan
> setup langsung di domain produksi dengan mengisi `EMDASH_SITE_URL` di `wrangler.jsonc` sebelum
> setup.

## 3b. Melengkapi berita lama dari Hashnode

Seed hanya memuat 20 berita terbaru dari RSS Hashnode, dan tanggal terbitnya tercatat sebagai
waktu setup (keterbatasan seed EmDash). Setelah setup:

1. Di admin buat API token (scope konten + media).
2. Jalankan dari komputer lokal:

   ```bash
   EMDASH_TOKEN=... node scripts/import-berita-hashnode.mjs --api https://<alamat-situs> --sumber sitemap
   ```

   Skrip mengoreksi tanggal terbit 20 berita dari seed ke tanggal asli dan mengimpor sekitar 85
   berita lama lain yang ada di sitemap Hashnode. Coba dulu dengan `--dry-run`.
3. Bila subdomain `news.iaipersisgarut.ac.id` nanti dialihkan, redirect `/:slug` ke
   `https://iaipersisgarut.ac.id/berita/:slug` (slug berita dipertahankan sama).

## 4. Deploy otomatis dari GitHub (disarankan)

Cloudflare dashboard → **Workers & Pages** → worker `iaipi-web` → **Settings → Builds** →
*Connect* ke repo `suhendararyadi/iaipi-web-nextjs`:

- Branch produksi: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Setiap push ke `main` akan otomatis ter-deploy. Konten di CMS **tidak** ikut tertimpa saat deploy
(konten ada di D1/R2, bukan di repo).

## 5. Memindahkan domain iaipersisgarut.ac.id

1. Tambahkan domain di Cloudflare (**Add a site**) dan ganti nameserver di registrar domain
   ke nameserver yang diberikan Cloudflare.
2. **Periksa ulang semua record DNS yang diimpor Cloudflare sebelum mengganti nameserver**,
   terutama subdomain yang dipakai layanan lain: `siakad`, `library`, `repository`, `lpm`, `lppm`,
   `news`, email (MX), dll. Record yang hilang membuat layanan itu mati.
3. Hapus/ubah record `@` dan `www` yang sekarang mengarah ke Vercel.
4. Aktifkan blok `routes` di `wrangler.jsonc`, lalu `npm run deploy` (atau push ke `main`).
5. Di admin: **Settings → General → Change domain** ke `https://iaipersisgarut.ac.id`.
6. Matikan project lama di Vercel setelah semuanya terverifikasi. (`vercel.json` di repo sudah
   menonaktifkan deploy otomatis Vercel dari Git, jadi situs Vercel lama tetap menyajikan
   deployment terakhirnya sampai DNS dipindah.)

## 6. Batasan paket Workers Free

| Batas | Free | Dampak |
| --- | --- | --- |
| Request Worker | 100.000/hari | Tiap halaman HTML + tiap gambar dari media library = 1 request. Aset di `public/` (CSS, JS, gambar tema) gratis & tidak dihitung. |
| CPU per request | 10 ms | Halaman berat bisa sesekali gagal dengan *Error 1102*. Jika sering terjadi, upgrade ke Workers Paid (US$5/bulan). |
| D1 | 5 GB, 5 juta baris dibaca/hari | Lebih dari cukup untuk situs kampus. |
| R2 | 10 GB | Untuk foto & berkas unggahan. |
| Plugin sandbox EmDash | Tidak tersedia | Butuh Worker Loader (khusus Paid). |

### Setelah upgrade ke Workers Paid

- **Cache edge**: set variabel build `EDGE_CACHE=1` (Workers Builds → Build variables) agar halaman
  publik dilayani dari cache Cloudflare tanpa menjalankan Worker. EmDash otomatis membersihkan
  cache halaman terkait saat konten diubah. (Di paket Free ini tidak disarankan karena request
  aset statis ikut dihitung ke kuota harian.)
- **Plugin EmDash** (form, SEO, dll.): aktifkan `worker_loaders` di `wrangler.jsonc` dan
  `sandboxRunner: sandbox()` di `astro.config.mjs` (lihat komentar di kedua file).

## 7. Operasional

- **Log**: `npx wrangler tail` atau tab *Observability* worker di dashboard.
- **Backup database**: D1 Time Travel menyimpan titik pulih 7 hari (Free) / 30 hari (Paid).
  Catat bookmark sebelum perubahan besar: `npx wrangler d1 time-travel info iaipi-web`.
  Untuk arsip di luar Cloudflare: `npx wrangler d1 export iaipi-web --remote --output backup.sql`.
- **Backup media**: salin isi bucket R2 `iaipi-web-media` secara berkala (mis. `aws s3 sync`
  dengan endpoint R2, atau `rclone`).
- **Ubah skema** (menambah field/koleksi) dilakukan lewat admin → *Content Types*. File
  `seed/parts/*.json` hanya dipakai untuk setup awal situs baru.
- **Uji lokal**: `npm run dev`, lalu buka
  `http://localhost:4321/_emdash/api/setup/dev-bypass?redirect=/` untuk setup cepat + impor seed.
