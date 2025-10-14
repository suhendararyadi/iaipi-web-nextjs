# 🎓 Website Institut Agama Islam PERSIS Garut

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.0.4-black.svg)
![React](https://img.shields.io/badge/React-19.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Website resmi Institut Agama Islam PERSIS Garut yang dibangun dengan Next.js 15 dan React 19. Website ini menampilkan informasi lengkap tentang institusi, program studi, layanan akademik, dan sistem informasi.

## 🌟 Fitur Utama

### 📚 **Program Pendidikan**
- **Fakultas Sarjana (S1)**: 3 Fakultas dengan 8 Program Studi
  - Fakultas Ushuluddin (ILHA, IAT)
  - Fakultas Tarbiyah (PAI, PGMI, BKPI)
  - Fakultas Ekonomi & Bisnis Islam (Ekosy, MKS)
- **Program Magister (S2)**: MPAI (Magister Pendidikan Agama Islam)

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

- **Framework**: Next.js 15.0.4 (App Router)
- **UI Library**: React 19.0.0
- **Styling**: CSS Custom + Bootstrap Grid
- **Icons**: FontAwesome 4.7
- **Image Optimization**: Next.js Image
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
│   │   └── custom.css          # Custom styles (~6,000 lines)
│   ├── images/                  # Image assets
│   └── js/                      # JavaScript libraries
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── fakultas/           # Fakultas pages
│   │   ├── magister/           # Magister pages
│   │   ├── layanan/            # Layanan page
│   │   ├── tentang/            # About page
│   │   ├── pmb/                # PMB page
│   │   └── layout.js           # Root layout
│   ├── components/             # React components
│   │   ├── Fakultas/          # Faculty components
│   │   ├── Prodi/             # Study program components
│   │   ├── Magister/          # Master program components
│   │   ├── Lembaga/           # Institution components
│   │   ├── Layanan/           # Services components
│   │   ├── Header2/           # Navigation
│   │   └── ...
│   └── data/                   # Data files (journal, etc.)
└── CHANGELOG.md                # Version history
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
| Fakultas | `/fakultas` | 3 Faculties overview |
| Fakultas Detail | `/fakultas/{slug}` | Faculty detail (8 pages) |
| Prodi Detail | `/fakultas/{faculty}/{prodi}` | Study program detail (8 pages) |
| Magister | `/magister` | Master program overview |
| MPAI Detail | `/magister/mpai` | MPAI program detail |
| Layanan | `/layanan` | Services & Information Systems |
| Lembaga | `/lembaga-departemen` | Institutions & Departments |
| PMB | `/pmb` | Student Registration |
| Pimpinan | `/pimpinan` | Leadership Structure |

**Total: 39 pages**

## 🔧 Development Guidelines

### Adding New Study Program

1. Create data in appropriate faculty component
2. Create prodi component in `/src/components/Prodi/`
3. Create page in `/src/app/fakultas/{faculty}/{prodi}/page.js`
4. Follow existing design pattern (tabs, cards, colors)

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

- **Always use FontAwesome 4.7 icons**
- Check: https://fontawesome.com/v4.7/icons/
- Format: `<i className="fa fa-icon-name"></i>`
- Compatible icons documented in `ICON_REFERENCE.md`

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

- Build warnings about `<img>` tags (non-critical, consider migrating to Next.js Image)
- Some images need optimization for better performance

## 🔄 Version History

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

### Current Version: 2.0.0
- Complete UI/UX redesign
- 8 fakultas & prodi pages modernized
- Magister program pages added
- Layanan & Sistem Informasi page
- Registration button enhancement
- Lembaga section on homepage

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

- **Website**: https://iaipersisgarut.ac.id
- **Email**: admin@iaipersisgarut.ac.id
- **Phone**: (0262) 232891
- **WhatsApp**: 082118282828
- **Address**: Jl. Pembangunan No. 34, Tarogong Kidul, Garut 44151

## 🙏 Acknowledgments

- Next.js Team for the amazing framework
- React Team for the UI library
- FontAwesome for the icons
- All contributors and maintainers

---

**Built with ❤️ by IAI PERSIS Garut** | **Version 2.0.0** | **December 2024**
