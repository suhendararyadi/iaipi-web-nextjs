# 🎓 Website Institut Agama Islam PERSIS Garut

![Version](https://img.shields.io/badge/version-4.0.0-blue.svg)
![Astro](https://img.shields.io/badge/Astro-7-orange.svg)
![EmDash](https://img.shields.io/badge/EmDash_CMS-1.2-black.svg)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-f38020.svg)

Website resmi Institut Agama Islam PERSIS Garut. Sejak versi 4.0 situs ini memakai
**[EmDash CMS](https://emdashcms.com)** di atas **Astro**, dan di-hosting di **Cloudflare Workers**
(database D1, media R2). Semua konten bisa diubah oleh staf lewat panel admin tanpa menyentuh kode.

## ✨ Apa yang bisa diedit di CMS

Panel admin: `https://<domain>/_emdash/admin`

| Menu admin | Isi |
| --- | --- |
| **Berita** | Berita, agenda, pengumuman (draf, jadwal terbit, kategori, SEO) |
| **Halaman** | Halaman teks bebas, alamat `/halaman/<slug>` |
| **Program Studi & Fakultas** | Profil, visi-misi, kurikulum per semester, fasilitas, prospek karir, akreditasi |
| **Pimpinan** | Rektor, wakil rektor, dekan, kaprodi: foto, jabatan, pendidikan, Sinta/Scholar |
| **Beranda** | Slider, video, jurnal, testimoni |
| **Profil Institusi, Layanan, Lembaga, PMB** | Konten halaman Tentang, Layanan & SI, Lembaga, Penerimaan Mahasiswa Baru |
| **Info Kampus** | Alamat, telepon, WhatsApp, email, media sosial, link pendaftaran, Google Analytics |
| **Menus** | Menu utama header & menu footer |
| **Media** | Semua gambar/berkas unggahan (tersimpan di R2) |

Admin mendukung Bahasa Indonesia, banyak pengguna dengan peran (Administrator/Editor/Author/
Contributor), login passkey, riwayat revisi, dan pratinjau draf.

## 🚀 Tech Stack

- **Framework**: Astro 7 (server-rendered), halaman `.astro` tanpa React di sisi publik
- **CMS**: EmDash 1.2 (admin + REST API + MCP server, skema konten disimpan di database)
- **Hosting**: Cloudflare Workers + D1 + R2 + KV (sesi) + Images
- **Tampilan**: CSS & jQuery tema lama dipertahankan (`public/css`, `public/js`) agar tampilan sama
  dengan versi Next.js; slider beranda memakai Swiper 14
- **Ikon**: FontAwesome 4.7 — hanya ikon versi 4.7 yang tampil

## 💻 Pengembangan Lokal

```bash
npm install
npm run dev
```

- Situs: <http://localhost:4321>
- Setup cepat + impor seluruh konten awal:
  <http://localhost:4321/_emdash/api/setup/dev-bypass?redirect=/>
- Admin: <http://localhost:4321/_emdash/admin>

Database lokal tersimpan di `.wrangler/state`; hapus folder itu untuk mengulang dari nol.

## ☁️ Deploy

Lihat **[docs/DEPLOY-CLOUDFLARE.md](./docs/DEPLOY-CLOUDFLARE.md)** — langkah lengkap: deploy
pertama, wizard setup admin (pilih **Konten sampel** untuk mengimpor konten lama), deploy
otomatis dari GitHub, pemindahan domain, dan batasan paket Workers Free.

Ringkasnya:

```bash
npx wrangler login
npm run deploy
```

## 📁 Struktur Proyek

```
├── astro.config.mjs        # Astro + adapter Cloudflare + integrasi EmDash
├── wrangler.jsonc          # Binding Cloudflare (D1, R2), cron, domain
├── seed/parts/*.json       # Skema koleksi + konten awal (hasil migrasi situs lama)
├── scripts/build-seed.mjs  # Menggabungkan seed/parts → seed/seed.json
├── public/                 # CSS, JS, font, dan gambar tema
└── src/
    ├── layouts/Base.astro  # Kerangka HTML, header, footer, skrip tema
    ├── components/         # Komponen per area (layout, beranda, akademik, pimpinan, ...)
    ├── lib/                # Helper query CMS
    ├── pages/              # Rute situs (file-based routing Astro)
    ├── middleware.ts       # Header keamanan
    └── worker.ts           # Entry Worker (fetch + cron EmDash)
```

Konvensi kode untuk kontributor/AI agent ada di [CLAUDE.md](./CLAUDE.md).

## 🔄 Version History

Lihat [CHANGELOG.md](./CHANGELOG.md).

## 📞 Kontak

- **Website**: https://iaipersisgarut.ac.id
- **Email**: rektorat@iaipersisgarut.ac.id
- **Phone / WhatsApp**: +62 851 2312 3670
- **Alamat**: Jl. Aruji Kartawinata No. 2, Tarogong Kidul, Kabupaten Garut, Jawa Barat 44151

---

**Built with ❤️ by IAI PERSIS Garut** | Dikelola oleh Direktorat IT IAIPI
