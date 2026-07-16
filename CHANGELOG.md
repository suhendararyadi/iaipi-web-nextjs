# Changelog

All notable changes to the IAI PERSIS Garut website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [3.0.0] - 2026-07-16

### 🎉 Major Release - Data Integrity, Program Baru & Restrukturisasi Pimpinan

Version 3.0 berfokus pada akurasi data institusional: memperbaiki konten yang salah tempel, menyinkronkan halaman prodi dengan dokumen kurikulum resmi, menambah program studi yang sebelumnya belum punya halaman, dan menerapkan perubahan struktur kepemimpinan.

### ✨ Added

**Program Studi Baru**
- **Pendidikan Bahasa Arab (PBA)** — S1, Fakultas Tarbiyah — `/fakultas/tarbiyah/pba`
- **Sejarah Peradaban Islam (SPI)** — S1, Fakultas Ushuluddin — `/fakultas/ushuluddin/spi`
- **Magister Ilmu Hadis (MIH)** — S2 — `/magister/mih`, serta halaman `MagisterContent` diubah dari kartu tunggal menjadi daftar (mendukung MPAI + MIH)

**Halaman Kaprodi Baru**
- Kaprodi PBA (Hasan Ansori), Kaprodi SPI (Imam Sofyan Abas), Kaprodi ILHA (Kinkin Syamsudin, M.Ag.) — melengkapi kursi yang sebelumnya kosong di struktur pimpinan

**Highlight Akreditasi**
- Kotak "Akreditasi" di seluruh 11 halaman prodi/magister kini ditonjolkan (gradient hijau, teks putih) agar berbeda dari kotak Gelar/Durasi. Nilai akreditasi PAI ("Baik Sekali", SK BAN-PT No. 10528/SK/BAN-PT/Ak-PPJ/S/VIII/2021) diverifikasi langsung terhadap dokumen kurikulum resminya

**Redirect**
- `/pimpinan/warek4` → `/pimpinan/warek3` (permanent) ditambahkan di `next.config.mjs` setelah jabatan Wakil Rektor IV dihapus dari struktur

### 🔄 Changed

**Konten Prodi Disinkronkan dengan Dokumen Resmi**
- **PGMI**: kurikulum 8 semester (150 SKS), profil lulusan, Visi/Misi/Tujuan, dan kompetensi (CPL) ditulis ulang mengikuti *Dokumen Kurikulum Prodi PGMI FTK Tahun 2024* (SK Dekan FTK No. 00253/B.3-E.5/IAIPI-G/2024)
- **PAI**: kurikulum 8 semester (150 SKS — mengoreksi angka 144 SKS yang sempat salah dipakai), profil lulusan A–E, CPL, dan Visi/Misi/Tujuan ditulis ulang mengikuti *Dokumen Kurikulum Prodi PAI FTK Tahun 2024* (SK Dekan FTK No. 00255/B.3-E.5/IAIPI-G/2024); akreditasi diperbarui ke "Baik Sekali" sesuai SK BAN-PT
- Konten kurikulum/fasilitas/karir prodi yang belum berdokumen resmi (Ekosy, MKS, BKPI, IAT, ILHA, SPI, PBA, MPAI, MIH) ditandai `DRAFT` langsung di source code, generik berbasis pola umum PTAI — perlu direview dengan data resmi sebelum publish

**Restrukturisasi Kepemimpinan**
- Dr. Pepen Irpan Fauzan (mantan Wakil Rektor III) dihapus dari seluruh halaman
- Dr. Heri Mohamad Tohari pindah dari Wakil Rektor IV → **Wakil Rektor III** (Bidang Kemahasiswaan, Kerjasama dan Alumni)
- Dr. Azis Asmana, Lc., M.Ag. pindah dari Kaprodi S1 Ilmu Hadis → **Kaprodi Magister Ilmu Hadis**; gelar dikoreksi menjadi "Dr. Azis Asmana, Lc., M.Ag."
- 4 foto pimpinan diganti dengan foto formal beserta bertoga (Riyan Nuryadin, Aip Zaenal Mutaqin, Leni Layinah, Mumad Nurjaman)

**Halaman PMB & Homepage**
- Halaman `/pmb` diperbarui ke data Tahun Akademik 2026/2027 (poster resmi, jadwal Gelombang 5, biaya kuliah)
- Section "Pendaftaran Mahasiswa Baru" di homepage disinkronkan dengan `/pmb`: tahun akademik, target countdown, dan teks tenggat pendaftaran reguler/beasiswa

**Sumber Berita**
- `hashnodeApi.js` dipindah dari GraphQL API Hashnode (kini berbayar) ke feed RSS publik blog, dengan bentuk data yang identik agar komponen News tidak perlu diubah

### 🔧 Fixed

**Bug Konten**
- 5 halaman prodi (Ekosy, MKS, PGMI, BKPI, IAT) sebelumnya menampilkan seluruh isi (kurikulum, kompetensi, prospek karir) hasil salin-tempel dari halaman Ilmu Hadis tanpa diedit — sehingga misalnya halaman Ekonomi Syariah menyatakan lulusannya akan menjadi "ahli hadis". Paragraf utama diperbaiki menggunakan deskripsi yang sudah benar di halaman overview fakultas

**Ikon Rusak**
- `fa-mosque`, `fa-award`, dan `fa-clock` (ikon FontAwesome 5+) tidak memiliki definisi di FontAwesome 4.7 yang dipakai situs ini, sehingga tampil sebagai bulatan kosong tanpa simbol di *setiap* kartu info Gelar/Durasi pada halaman prodi. Diganti dengan `fa-trophy`, `fa-clock-o`, dan `fa-institution` yang valid di FA 4.7

**Konsistensi Ukuran Avatar**
- 3 foto Wakil Rektor di homepage & grid pimpinan (`Teachers2`/`Teachers4`) sebelumnya berupa file 80×80px tanpa `width`/`height`/`flex-shrink` di CSS, sehingga ukurannya berbeda-beda (47–64px) tergantung panjang nama di sebelahnya. Diganti dengan crop avatar 320×320 fokus wajah dan CSS ukuran tetap (90×90 desktop, 72×72 mobile)

**Tata Letak**
- Dua kartu di section "Pendaftaran Mahasiswa Baru" (PMB & Beasiswa) kini disamakan tinggi (`height: 100%` + `flex-column`) — sebelumnya kartu PMB lebih tinggi karena ada countdown timer
- Kartu kosong bekas placeholder "Konfimasi / Vice chencelor" (wrapper `<div>` tanpa isi) dibuang dari grid pimpinan, menghilangkan lubang di grid
- Beberapa ketidaksesuaian nama antara kartu grid dan halaman detail dirapikan (mis. "Oragnisasi" → "Organisasi", "Iimu Hadis" → "Ilmu Hadis", serta beberapa gelar akademik yang tidak konsisten)

---

## [2.2.0] - 2026-02-15

### 🎉 Navigasi & Slider Modern

#### 1. **Modern Hybrid Slider**
- Slider hero diimplementasikan ulang dengan navigasi progress-bar bergaya teks, menggantikan panah kustom yang sebelumnya bermasalah visibilitasnya di berbagai breakpoint
- Beberapa iterasi perbaikan warna (hijau IAIPI untuk nav, kuning untuk progress bar), tinggi slider, dan z-index

#### 2. **Mobile Bottom Navigation**
- Navigasi bawah (bottom nav) baru untuk perangkat mobile dengan branding tersentralisasi
- Menu "Berita" pada bottom nav diganti menjadi "Fakultas"

#### 3. **Reorganisasi Lembaga & Layanan**
- Tautan Repository dan Press dipindah dari section Lembaga ke halaman Layanan; Perpustakaan tetap di Lembaga karena berstatus badan institusional
- IAIPI Press ditambahkan ke data Lembaga

#### 4. **Lainnya**
- Pembaruan keamanan dependensi, penyesuaian teks Visi/Misi, dan pembaruan feed berita

---

## [2.1.0] - 2025-10-14 s/d 2025-11-05

### 🎉 Penyegaran Branding & Penyempurnaan Konten

#### 1. **Identitas Visual**
- Logo IAIPI baru dipasang di seluruh situs (favicon, header, footer)
- Header akademik bernuansa Islami diimplementasikan (3 opsi desain dieksplorasi, dipilih dan disempurnakan dengan ornamen geometris)
- Tombol "Daftar Sekarang" didesain ulang beberapa kali (bentuk pill, kombinasi warna hijau/kuning, ukuran ringkas satu baris) hingga versi final

#### 2. **Halaman Baru & Konten**
- Halaman Kontak (`/kontak`) ditambahkan beserta pembaruan informasi kontak di seluruh situs
- Prodi BKPI ditambahkan ke data Lembaga dengan tautan resminya
- Halaman Lembaga & Departemen diperbarui (integrasi LPM)

#### 3. **Perbaikan**
- Foto testimonial diganti avatar placeholder berbentuk bulat
- Tenggat pendaftaran PMB dan jumlah penerima beasiswa diperbarui
- Footer diterjemahkan sepenuhnya ke Bahasa Indonesia
- Ikon Program Studi Ilmu Al-Quran dan Tafsir disesuaikan

---

## [2.0.0] - 2024-12-XX

### 🎉 Major Release - Complete UI/UX Redesign

Version 2.0 merupakan redesign komprehensif dari website IAI PERSIS Garut dengan fokus pada user experience, modern design, dan kemudahan akses informasi.

---

## ✨ Added

### **Halaman Utama**

#### 1. **Section Lembaga & Layanan** (Homepage)
- **Replaced** PatnarLogo section dengan modern Lembaga cards
- **4 Lembaga cards** dengan color-coding:
  - 🟢 LPM (Lembaga Penjaminan Mutu) - Green
  - 🔵 LPPM (Penelitian & Pengabdian Masyarakat) - Blue
  - 🟣 Perpustakaan - Purple
  - 🟠 SIAKAD - Orange
- Icon dengan rotate animation on hover
- External link badges
- CTA button ke halaman Lembaga lengkap

#### 2. **Tombol Pendaftaran Khusus** (Navigation)
- **Yellow gradient button** di navigation bar
- Icon dengan pulse animation
- Prominent positioning di kanan menu
- Hover lift + glow shadow effects
- Responsive: Full button (desktop), Icon only (mobile)
- Centered vertically dengan menu items

---

### **Halaman Tentang** (`/tentang`)

#### 1. **AboutContent + Why Choose Us Section**
- Modern 2-column layout dengan feature items
- **3 Feature cards** dengan icons:
  - 📖 Berbasis Alquran & Sunah
  - 🎓 Akreditasi B BAN-PT
  - 👥 Lingkungan Islami
- **Image badge overlay**: "Kampus Saintek Dakwah"
- **NEW: Why Choose Us section** dengan 6 cards:
  - 🏆 Beasiswa Penuh (100% untuk hafidz)
  - 📜 Program S1 & S2
  - 🏛️ Fasilitas Modern
  - 🔬 Penelitian Aktif (8 jurnal SINTA)
  - 💼 Career Development
  - 📍 Lokasi Strategis

#### 2. **Visi/Misi - Tabbed Interface**
- **4 interactive tabs**:
  - 👁️ Visi - Large centered statement
  - 🎯 Misi - 5 icon cards (2-col grid)
  - 🚩 Tujuan - 5 icon cards (2-col grid)
  - ⭐ Moto & Nilai - 2 cards side-by-side
- Fade-in animations on tab switch
- Numbered items untuk better readability
- Icon untuk setiap poin

#### 3. **Akreditasi - Interactive Certificate Display**
- **Clickable certificate list** (4 certificates):
  - Institusi (STAI Persis Garut)
  - Ekonomi Syariah
  - Pendidikan Agama Islam
  - Ilmu Hadits
- **Grade badge**: B (BAIK) - prominent display
- Certificate info card dengan metadata
- Download & view buttons
- **Stats cards**: 1 institusi, 8 program studi
- Help/info footer section

---

### **Halaman Fakultas & Prodi**

#### 1. **Halaman Utama Fakultas** (`/fakultas`)
- Modern card-based design
- **3 Fakultas cards** dengan:
  - Color-coded design per fakultas
  - Icons (Book, Graduation Cap, Briefcase)
  - Program studi list dengan checkmarks
  - Hover image zoom effect
  - External link animation
- **Stats section**: 3 fakultas, 8 prodi, B akreditasi, 1000+ mahasiswa
- CTA footer untuk info lebih lanjut

#### 2. **Halaman Fakultas Detail** (3 pages)
- **Fakultas Ushuluddin** (`/fakultas/ushuluddin`)
- **Fakultas Tarbiyah** (`/fakultas/tarbiyah`)
- **Fakultas Ekonomi & Bisnis Islam** (`/fakultas/ekonomi`)

**Features per fakultas:**
- Faculty overview card dengan 3 stats
- Modern prodi cards:
  - Akreditasi badge (top-right)
  - Image dengan hover zoom
  - Prodi code overlay
  - Info grid (Gelar, Durasi)
  - Highlight tags (3 per prodi)
  - Color-coded CTA buttons
- Visi/Misi cards dengan icons
- CTA footer untuk pendaftaran

#### 3. **Halaman Detail Prodi** (8 pages)

**All prodi pages include:**
- **Prodi header card** dengan quick info:
  - Badge (code name)
  - Akreditasi, Gelar, Durasi
- **3-4 Modern tabs**:
  - 👤 Profil
  - 📚 Kurikulum (untuk ILHA & IAT)
  - 🏢 Fasilitas
  - 💼 Prospek Karir
- **Profil tab**:
  - 4 Profil lulusan cards
  - 4 Kompetensi items
  - Keunggulan program (untuk Magister)
- **Kurikulum tab** (ILHA, IAT):
  - Timeline-based display
  - Semester cards dengan SKS dan focus area
  - Matkul chips grid
- **Fasilitas tab**:
  - 4 Facility cards dengan icons
  - Lab, Perpustakaan, dll.
- **Karir tab**:
  - 4 Career sector cards
  - Alumni note
- **Dual CTA buttons**: Daftar + Info

**Prodi yang dioptimasi:**
1. ILHA (Ilmu Hadis)
2. IAT (Ilmu Al-Quran dan Tafsir)
3. PAI (Pendidikan Agama Islam)
4. PGMI (Pendidikan Guru MI)
5. BKPI (Bimbingan Konseling)
6. Ekosy (Ekonomi Syariah)
7. MKS (Manajemen Keuangan Syariah)

---

### **Program Magister (S2)**

#### 1. **Halaman Utama Magister** (`/magister`)
- Program overview card dengan stats
- Modern MPAI card dengan:
  - Akreditasi badge (B)
  - Image dengan hover effects
  - Info grid dan highlights
  - Info boxes (Prospek Karir, Keunggulan)
- Visi/Misi cards
- CTA footer untuk pendaftaran

#### 2. **Halaman Detail MPAI** (`/magister/mpai`)
- Prodi header dengan quick info
- **3 modern tabs**:
  - Profil: 4 profil lulusan, 4 kompetensi, 4 keunggulan
  - Fasilitas: 4 facility cards
  - Karir: 4 career sectors
- Flexible study options (Regular & Weekend)
- Research & publication focus
- Dual CTA buttons

---

### **Halaman Layanan & Sistem Informasi** (`/layanan`)

#### 1. **Category Filter System**
- **7 kategori**:
  - Semua Layanan
  - Akademik
  - Penelitian & P2M
  - Publikasi
  - Kemahasiswaan
  - Alumni
  - Administrasi
- Filter buttons dengan icons
- Active state highlighting

#### 2. **12 Sistem Informasi**

**Active Systems (4):**
1. ✅ **SIAKAD** - Portal akademik mahasiswa & dosen
2. ✅ **SIM LPPM** - Manajemen penelitian & publikasi
3. ✅ **SIM P2M** - Pengabdian mahasiswa
4. ✅ **Jurnal** - Portal jurnal ilmiah

**Coming Soon (8):**
5. 🔒 **E-Learning** - Platform pembelajaran online
6. 🔒 **SIPERPUS** - Sistem informasi perpustakaan
7. 🔒 **Repository** - Karya ilmiah & publikasi
8. 🔒 **Tracer Study** - Pelacakan alumni
9. 🔒 **SIKEU** - Sistem informasi keuangan
10. 🔒 **Portal Beasiswa** - Informasi & pendaftaran beasiswa
11. 🔒 **SPMI** - Sistem penjaminan mutu
12. 🔒 **Portal Alumni** - Networking alumni

#### 3. **Features**
- Color-coded cards per system
- Status badges (Active/Coming Soon)
- Icon rotate animation on hover
- External link buttons
- Help Desk info box
- Fully responsive design

#### 4. **Menu Integration**
- Added under **Profil** menu
- Menu: Profil → Layanan & Sistem Informasi

---

## 🎨 Improved

### **Design System**
- **Color palette**:
  - Primary Green: #006739
  - Yellow: #ffc600 (registration button)
  - Blue: #3498db
  - Purple: #9b59b6
  - Orange: #e67e22
- **Typography improvements**:
  - Better hierarchy (h1-h6)
  - Improved line-height (1.6-1.8)
  - Better font-weight distribution
- **Spacing system**:
  - Consistent padding/margins
  - Section padding: 70px
  - Card padding: 25-50px
  - Border radius: 10-16px

### **Navigation**
- Registration button added
- Improved menu structure
- Layanan menu added under Profil
- Better mobile menu experience
- Smooth transitions

### **Animations & Interactions**
- Hover lift effects on cards
- Icon rotate animations
- Smooth tab transitions
- Fade-in animations
- Pulse effects on buttons
- Shadow enhancements on hover

### **Responsive Design**
- Improved mobile layouts
- Better tablet experience
- Touch-friendly buttons
- Optimized images
- Stacked layouts on small screens

---

## 🔧 Fixed

### **Icon Compatibility**
- **Replaced FontAwesome 5+ icons** with FA4 compatible alternatives:
  - `fa-book-open` → `fa-book`
  - `fa-user-tie` → `fa-user`
  - `fa-chalkboard-teacher` → `fa-graduation-cap`
  - `fa-book-reader` → `fa-book`
  - `fa-landmark` → `fa-university`
  - `fa-school` → `fa-university`
- Created `ICON_REFERENCE.md` for guidelines
- All icons now display correctly

### **Build Issues**
- Fixed apostrophe escape issues (`Da'i` → `Da&apos;i`)
- Removed backup files causing parse errors
- Cleared corrupted Next.js cache
- Build now successful: 39/39 pages

### **UI Alignment**
- Fixed registration button vertical alignment
- Button now centered with menu items
- Proper flexbox alignment
- Responsive adjustments

### **Component Issues**
- Fixed slider initialization errors
- Improved error handling
- Better cleanup on unmount

---

## 📝 Documentation

### **Created Documentation**
1. **README.md** - Complete project documentation
2. **CHANGELOG.md** - Version history (this file)
3. **ICON_REFERENCE.md** - FontAwesome 4 icon guidelines
4. **RECOMMENDATIONS.md** - UI/UX optimization recommendations
5. **NEWS_OPTIMIZATION.md** - News section documentation
6. **LEMBAGA_DEPARTEMEN.md** - Lembaga page documentation
7. **SLIDER_ARROW_FINAL_FIX.md** - Slider arrow fix analysis
8. **UI_FIXES.md** - UI fixes documentation
9. **TENTANG_PAGE_OPTIMIZATION.md** - Tentang page recommendations
10. **TENTANG_OPTIMIZATION_COMPLETE.md** - Complete optimization guide
11. **AKREDITASI_OPTIMIZATION.md** - Akreditasi section details
12. **BUILD_FIX_SUMMARY.md** - Build error resolution

---

## 📊 Statistics

### **Code Changes**
- **CSS Added**: ~6,000 lines
- **JSX Added**: ~3,500 lines
- **Components Created**: 40+
- **Pages Created**: 3 (magister, mpai, layanan)
- **Pages Optimized**: 40+

### **Build Metrics**
- **Total Pages**: 39 pages (vs 37 pages in v1.x)
- **Build Time**: ~45 seconds
- **First Load JS**: ~100-122 kB
- **Warnings**: 45 (non-critical img tags)
- **Errors**: 0 ✅

### **Performance**
- **Lighthouse Scores**:
  - Performance: 85+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 95+

---

## 🚀 Deployment

- ✅ Build successful
- ✅ All pages generated
- ✅ Vercel ready
- ✅ Production tested

---

## 🔄 Migration Guide (v1.x → v2.0)

### **Breaking Changes**
- `<PatnarLogo />` removed from homepage → replaced with `<LembagaHome />`
- Navigation menu structure updated (added Layanan menu)
- Icon system now strict FA4 only

### **Required Actions**
1. Update any custom components using FA5+ icons
2. Clear `.next` cache before first build
3. Update environment variables (GA4 ID)
4. Test all pages in production

### **Deprecated**
- Old PatnarLogo component
- FontAwesome 5+ icons

---

## 👥 Contributors

- **Development Team**: IAI PERSIS Garut IT Team
- **Design**: UI/UX Team
- **Content**: Academic Affairs

---

## 📅 Release Notes

**Release Date**: December 2024  
**Version**: 2.0.0  
**Codename**: "Modern Redesign"

**Summary**: Complete UI/UX overhaul dengan focus pada modern design, better user experience, dan comprehensive information architecture. Total 39 pages dengan consistent design pattern dan fully responsive layouts.

**Highlights**:
- 8 Fakultas & Prodi pages modernized
- Magister program pages added
- Layanan page dengan 12 systems
- Registration button enhancement
- Lembaga section on homepage
- Complete documentation

---

## 🔮 Belum Dikerjakan (Belum Ada Target Rilis)

Catatan: rencana versi Q1–Q3 2025 pada dokumen sebelumnya sudah usang (nomor versinya kini terpakai untuk rilis nyata di atas). Item di bawah ini masih relevan tapi belum dijadwalkan ke versi tertentu:

- [ ] E-Learning system integration
- [ ] Portal Perpustakaan online
- [ ] Repository institutional
- [ ] Tracer Study system
- [ ] SIKEU integration
- [ ] Portal Beasiswa
- [ ] SPMI system
- [ ] Portal Alumni
- [ ] Data kurikulum resmi untuk prodi yang masih berstatus DRAFT (Ekosy, MKS, BKPI, IAT, ILHA, SPI, PBA, MPAI, MIH)
- [ ] Data akademik (pendidikan, Sinta ID, Google Scholar) untuk kaprodi yang baru ditambahkan (Hasan Ansori, Imam Sofyan Abas, Kinkin Syamsudin)

---

## 📞 Support

For issues, questions, or contributions:
- **Email**: helpdesk@iaipersisgarut.ac.id
- **WhatsApp**: 082118282828
- **Website**: https://iaipersisgarut.ac.id

---

**Built with ❤️ by IAI PERSIS Garut IT Team**

[3.0.0]: https://github.com/suhendararyadi/iaipi-web-nextjs/releases/tag/v3.0.0
[2.2.0]: https://github.com/suhendararyadi/iaipi-web-nextjs/releases/tag/v2.2.0
[2.1.0]: https://github.com/suhendararyadi/iaipi-web-nextjs/releases/tag/v2.1.0
[2.0.0]: https://github.com/suhendararyadi/iaipi-web-nextjs/releases/tag/v2.0.0
