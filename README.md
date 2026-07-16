# 🎓 Website Institut Agama Islam PERSIS Garut

![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black.svg)
![React](https://img.shields.io/badge/React-19.2.3-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Website resmi Institut Agama Islam PERSIS Garut yang dibangun dengan Next.js 16 (App Router) dan React 19. Website ini menampilkan informasi lengkap tentang institusi, program studi, layanan akademik, dan sistem informasi.

## 🌟 Fitur Utama

### 📚 **Program Pendidikan**
- **Fakultas Sarjana (S1)**: 3 Fakultas dengan 10 Program Studi
  - Fakultas Ushuluddin (Ilmu Hadis/ILHA, Ilmu Al-Qur'an dan Tafsir/IAT, Sejarah Peradaban Islam/SPI)
  - Fakultas Tarbiyah (PAI, PGMI, BKPI, Pendidikan Bahasa Arab/PBA)
  - Fakultas Ekonomi & Bisnis Islam (Ekonomi Syariah/Ekosy, Manajemen Keuangan Syariah/MKS)
- **Program Magister (S2)**: 2 Program
  - MPAI (Magister Pendidikan Agama Islam)
  - MIH (Magister Ilmu Hadis)

> ⚠️ Kurikulum, fasilitas, dan prospek karir untuk PGMI dan PAI bersumber dari dokumen kurikulum resmi FTK Tahun 2024. Prodi lain masih berisi konten generik yang ditandai `DRAFT` di source code dan perlu direview dengan data resmi sebelum diperlakukan sebagai final — lihat [CHANGELOG.md](./CHANGELOG.md) bagian [3.0.0].

### 🎨 **UI/UX Modern**
- Design responsive untuk semua device
- Animasi smooth dan interactive
- Color-coded cards per fakultas/prodi
- Tab-based content organization
- Hover effects dan micro-interactions

### 🟡 **Tombol Pendaftaran Khusus**
- Yellow gradient button di navigation
- Pulse animation
- Prominent positioning
- Mobile responsive

### 🏛️ **Lembaga & Layanan**
- Section Lembaga di homepage
- Halaman Layanan & Sistem Informasi
- 12 sistem informasi (4 aktif, 8 coming soon)
- Category filter untuk kemudahan akses

### 📄 **Halaman Informasi**
- Tentang Institut (dengan Visi/Misi tabbed interface)
- Struktur Organisasi & Pimpinan
- Akreditasi (interactive certificate display)
- Berita & Agenda
- PMB (Penerimaan Mahasiswa Baru)

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **UI Library**: React 19.2.3
- **Styling**: CSS Custom + Bootstrap Grid
- **Icons**: FontAwesome 4.7 — **hanya gunakan ikon yang ada di versi 4.7** (cek [fontawesome.com/v4.7/icons](https://fontawesome.com/v4.7/icons/)); ikon FA5+ seperti `fa-mosque`/`fa-award`/`fa-clock` tidak akan tampil sama sekali karena tidak ada definisi `:before`-nya
- **Berita**: RSS feed publik Hashnode (`src/utils/hashnodeApi.js`) — API GraphQL Hashnode kini berbayar, dimigrasikan ke RSS pada Mei 2026
- **Image Optimization**: dimatikan (`images.unoptimized: true` di `next.config.mjs`); banyak komponen masih memakai `<img>` mentah, bukan `next/image`
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/suhendararyadi/iaipi-web-nextjs.git

# Masuk ke direktori
cd iaipi-web-nextjs

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Jalankan production server
npm start
```

## 🌐 Environment Variables

Tidak ada environment variables yang required untuk development. Untuk production, pastikan mengupdate:

- Google Analytics ID di `/src/app/layout.js`
- Contact information di `/src/components/Footer/Footer.js`
- Social media links

## 📁 Struktur Proyek

```
iaipi-web-nextjs/
├── public/
│   ├── css/
│   │   └── custom.css          # Custom styles (~6,000+ lines)
│   ├── images/
│   │   └── dosen/
│   │       └── avatar/         # Crop wajah 320x320 untuk kartu pimpinan
│   └── js/                      # JavaScript libraries (jQuery, Slick, dll.)
├── src/
│   ├── app/                     # Next.js App Router (43 route)
│   │   ├── fakultas/           # Fakultas & prodi detail pages
│   │   ├── magister/           # Magister overview + mpai/mih detail
│   │   ├── pimpinan/           # Leadership grid + ~19 halaman detail per orang
│   │   ├── layanan/            # Layanan page
│   │   ├── lembaga-departemen/ # Lembaga page
│   │   ├── tentang/            # About page
│   │   ├── kontak/             # Contact page
│   │   ├── pmb/                # PMB page
│   │   ├── api/news/           # Route handler (proxy ke RSS Hashnode)
│   │   └── layout.js           # Root layout
│   ├── components/             # React components
│   │   ├── Fakultas/           # Faculty overview components
│   │   ├── Prodi/              # 10 komponen detail prodi S1
│   │   ├── Magister/           # MpaiContent, MihContent, MagisterContent
│   │   ├── Pimpinan/           # Rektor/Warek/Dekan/Kaprodi (per orang)
│   │   ├── Teachers2/3/4/      # Grid pimpinan (homepage & /pimpinan)
│   │   ├── Lembaga/            # Institution components
│   │   ├── Layanan/            # Services components
│   │   ├── Header2/            # Navigation aktif (Header/Header3 tidak dipakai)
│   │   └── ...
│   ├── data/                    # Data files (lembagaData, jurnalData)
│   └── utils/
│       └── hashnodeApi.js       # Fetch & parse RSS feed berita
└── CHANGELOG.md                 # Version history
```

## 🎨 Design System

### Colors
```css
Primary Green:   #006739
Light Green:     #008749
Yellow Accent:   #ffc600
Blue:            #3498db
Purple:          #9b59b6
Orange:          #e67e22
```

### Typography
- Headings: Poppins/System Font
- Body: 15-16px, line-height 1.6-1.8
- Section Titles: 32px bold
- Card Titles: 20-24px bold

### Spacing
- Section Padding: 70px top/bottom
- Card Padding: 25-50px
- Border Radius: 10-16px

## 📄 Halaman Utama

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Landing page with all sections |
| Tentang | `/tentang` | About, Vision/Mission, Accreditation |
| Kontak | `/kontak` | Contact information |
| Fakultas | `/fakultas` | 3 Faculties overview |
| Fakultas Detail | `/fakultas/{slug}` | Faculty detail (3 pages) |
| Prodi Detail | `/fakultas/{faculty}/{prodi}` | Study program detail (10 pages) |
| Magister | `/magister` | Master programs overview (list, not single card) |
| Magister Detail | `/magister/{mpai\|mih}` | MPAI & MIH program detail (2 pages) |
| Layanan | `/layanan` | Services & Information Systems |
| Lembaga | `/lembaga-departemen` | Institutions & Departments |
| PMB | `/pmb` | Student Registration (TA 2026/2027) |
| Pimpinan | `/pimpinan` | Leadership Structure (grid) + detail per orang (~19 pages) |

**Total: 43 routes** (termasuk `/api/news` dan halaman `not-found`; lihat output `npm run build` untuk daftar lengkap dan terkini)

## 🔧 Development Guidelines

### Adding New Study Program

1. Buat komponen prodi di `/src/components/Prodi/`, contoh paling lengkap: `Pgmi.js`/`Pai.js` (bersumber dokumen resmi) — pola tab: Profil, Kurikulum, Fasilitas, Prospek Karir
2. Beri class `info-box--akreditasi` pada kotak Akreditasi di header agar ikut ter-highlight (CSS di `public/css/custom.css`)
3. Kalau belum ada data kurikulum resmi, isi konten generik tapi **wajib** tandai dengan komentar `// DRAFT: ... BUKAN data resmi kampus` di baris atas file
4. Buat halaman di `/src/app/fakultas/{faculty}/{prodi}/page.js`
5. Tambahkan entri prodi ke komponen overview fakultas terkait (`/src/components/Fakultas/{Faculty}.js`) dan ke `Fakultas.js` (halaman `/fakultas`)
6. Update angka statistik total prodi di `Fakultas.js` dan `Akreditasi.js` jika berubah
7. Jalankan `npm run build` dan verifikasi tidak ada ikon FA5+ yang lolos (lihat Icon Guidelines)

### Adding New Service

1. Edit `/src/components/Layanan/LayananContent.js`
2. Add to `layananData` array:
```javascript
{
  id: 13,
  name: "Service Name",
  shortName: "SHORT",
  category: "akademik", // or penelitian, publikasi, etc.
  description: "Brief description",
  url: "https://...",
  icon: "fa-icon-name",
  color: "#hexcolor",
  status: "active" // or "coming"
}
```

### Icon Guidelines

- **Always use FontAwesome 4.7 icons** — validasi dulu di https://fontawesome.com/v4.7/icons/ sebelum dipakai
- Format: `<i className="fa fa-icon-name"></i>`
- Ikon FA5+ (mis. `fa-mosque`, `fa-award`, `fa-clock`, `fa-lightbulb-o` yang salah eja) tidak error saat build, tapi tampil sebagai elemen kosong tanpa simbol — bug ini pernah lolos ke produksi di beberapa halaman prodi (lihat CHANGELOG [3.0.0])
- Verifikasi cepat: `grep -o 'fa-[a-z-]*' <file> | sort -u`, lalu cek tiap nama muncul sebagai `.fa-xxx:before` di `public/css/font-awesome.min.css`

## 🎯 Performance

- **Build Time**: ~45 seconds
- **Pages Generated**: 39 pages
- **First Load JS**: ~100-122 kB
- **Lighthouse Score**: 
  - Performance: 85+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 95+

## 📱 Responsive Breakpoints

- **Desktop**: >992px (full layouts)
- **Tablet**: 768-991px (2-column grids)
- **Mobile**: <768px (stacked layouts)

## 🐛 Known Issues

- Build warnings about `<img>` tags (non-critical, consider migrating to Next.js Image) — image optimization juga dimatikan total via `images.unoptimized: true`
- Beberapa halaman prodi (Ekosy, MKS, BKPI, IAT, ILHA, SPI, PBA, MPAI, MIH) masih berisi konten kurikulum/fasilitas/karir generik yang ditandai `DRAFT` di source code — bukan data resmi kampus
- Kaprodi yang baru ditambahkan (Hasan Ansori/PBA, Imam Sofyan Abas/SPI, Kinkin Syamsudin/ILHA) belum punya data pendidikan, Sinta ID, atau Google Scholar
- **Data kontak tidak konsisten antar sumber**: alamat & telepon di JSON-LD (`src/app/layout.js`) berbeda dari yang ditampilkan di Footer/`/kontak` — perlu diverifikasi mana yang benar dan disatukan, karena JSON-LD ini yang dibaca Google untuk hasil pencarian
- Sejumlah komponen (`Header`, `Header3`, `Category`, `About`, `Teachers` tunggal, `PatnarLogo`) sudah tidak dirender di halaman manapun tapi filenya masih ada di `src/components/`
- `package.json` masih bernama `edubin-nextjs` (sisa nama template awal proyek sebelum jadi situs IAIPI Garut); `version` di dalamnya baru mulai disinkronkan dengan README mulai rilis 3.0.0 — sebelumnya kedua angka versi tidak pernah cocok
- Beberapa halaman detail pimpinan lama masih memuat placeholder teks garis bawah (`______`) di bagian "Tentang" yang belum pernah diisi

## 🔄 Version History

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

### Current Version: 3.0.0
- Konten prodi PGMI & PAI disinkronkan penuh dengan dokumen kurikulum resmi FTK 2024 (kurikulum per semester, CPL, Visi/Misi/Tujuan)
- 3 program studi baru: PBA (S1), SPI (S1), Magister Ilmu Hadis (S2) — total 10 prodi S1 + 2 Magister
- Restrukturisasi kepemimpinan (Warek III/IV, Kaprodi ILHA/MIH) beserta redirect URL lama
- Highlight visual untuk kotak akreditasi di seluruh halaman prodi, diverifikasi terhadap dokumen resmi
- Perbaikan bug konten salin-tempel di 5 halaman prodi, ikon FontAwesome yang tidak tampil, dan ukuran avatar pimpinan yang tidak konsisten
- Migrasi sumber berita dari GraphQL Hashnode (berbayar) ke RSS feed publik

Lihat [CHANGELOG.md](./CHANGELOG.md) untuk rincian versi 2.1.0 dan 2.2.0 (branding, slider modern, bottom navigation) yang dirilis di antara 2.0.0 dan 3.0.0.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Team

- **Development**: Institut Agama Islam PERSIS Garut
- **Maintained by**: IT Team IAIPI Garut

## 📞 Contact

Sumber: Footer & halaman `/kontak` (lihat catatan ketidaksesuaian dengan JSON-LD di Known Issues).

- **Website**: https://iaipersisgarut.ac.id
- **Email**: rektorat@iaipersisgarut.ac.id
- **Phone / WhatsApp**: +62 851 2312 3670
- **Address**: Jl. Aruji Kartawinata No. 2, Tarogong Kidul, Kabupaten Garut, Jawa Barat 44151

## 🙏 Acknowledgments

- Next.js Team for the amazing framework
- React Team for the UI library
- FontAwesome for the icons
- All contributors and maintainers

---

**Built with ❤️ by IAI PERSIS Garut** | **Version 3.0.0** | **Juli 2026**
