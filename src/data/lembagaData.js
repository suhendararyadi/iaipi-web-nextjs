// Data Lembaga dan Departemen IAIPI Garut

const lembagaData = [
  {
    id: 1,
    name: "LPM",
    fullName: "Lembaga Penjaminan Mutu",
    description: "Lembaga yang bertanggung jawab dalam menjamin dan meningkatkan mutu pendidikan, akreditasi, dan sistem penjaminan mutu internal institusi.",
    url: "https://lpm.iaipersisgarut.ac.id",
    icon: "fa-certificate",
    category: "Lembaga",
    status: "active"
  },
  {
    id: 2,
    name: "LPPM",
    fullName: "Lembaga Penelitian dan Pengabdian kepada Masyarakat",
    description: "Lembaga yang mengelola dan mengkoordinasikan kegiatan penelitian dan pengabdian kepada masyarakat untuk meningkatkan kualitas Tri Dharma Perguruan Tinggi.",
    url: "https://lppm.iaipersisgarut.ac.id",
    icon: "fa-flask",
    category: "Lembaga",
    status: "active"
  },
  {
    id: 3,
    name: "Perpustakaan",
    fullName: "Perpustakaan Institut",
    description: "Unit lembaga yang menyediakan layanan perpustakaan digital dan konvensional dengan koleksi buku, jurnal, dan referensi ilmiah yang mendukung pembelajaran dan penelitian.",
    url: "https://library.iaipersisgarut.ac.id",
    icon: "fa-book",
    category: "Lembaga",
    status: "active"
  },
  {
    id: 4,
    name: "UPT TIK",
    fullName: "Unit Pelaksana Teknis Teknologi Informasi dan Komunikasi",
    description: "Unit yang mengelola infrastruktur teknologi informasi, sistem informasi akademik, website, dan layanan digital kampus.",
    url: "",
    icon: "fa-laptop",
    category: "Unit",
    status: "coming_soon"
  },
  {
    id: 5,
    name: "Ma'had Al-Jami'ah",
    fullName: "Pesantren Mahasiswa",
    description: "Lembaga yang menyelenggarakan pendidikan kepesantrenan bagi mahasiswa dengan program tahfidz Al-Qur'an, kajian kitab kuning, dan pembinaan akhlak.",
    url: "",
    icon: "fa-graduation-cap",
    category: "Lembaga",
    status: "coming_soon"
  },
  {
    id: 6,
    name: "Pusat Studi Islam",
    fullName: "Pusat Studi dan Kajian Islam",
    description: "Pusat penelitian dan kajian mendalam tentang Islam kontemporer, pemikiran Islam, dan isu-isu keislaman terkini.",
    url: "",
    icon: "fa-university",
    category: "Pusat",
    status: "coming_soon"
  },
  {
    id: 7,
    name: "Pusat Bahasa",
    fullName: "Pusat Pengembangan Bahasa",
    description: "Pusat yang menyelenggarakan program pembelajaran bahasa Arab dan Inggris, serta tes kemampuan bahasa bagi mahasiswa dan dosen.",
    url: "",
    icon: "fa-language",
    category: "Pusat",
    status: "coming_soon"
  },
  {
    id: 8,
    name: "Career Center",
    fullName: "Pusat Pengembangan Karir dan Kewirausahaan",
    description: "Lembaga yang memfasilitasi mahasiswa dalam pengembangan soft skill, pelatihan kerja, magang, dan kewirausahaan untuk persiapan karir.",
    url: "",
    icon: "fa-briefcase",
    category: "Pusat",
    status: "coming_soon"
  },
  {
    id: 9,
    name: "Lembaga Dakwah Kampus",
    fullName: "Lembaga Dakwah Kampus",
    description: "Lembaga yang mengkoordinasikan kegiatan dakwah, mentoring, kajian Islam, dan pembinaan rohani mahasiswa di lingkungan kampus.",
    url: "",
    icon: "fa-bullhorn",
    category: "Lembaga",
    status: "coming_soon"
  },
  {
    id: 10,
    name: "Pusat Tahfidz",
    fullName: "Pusat Tahfidz Al-Qur'an",
    description: "Pusat pembinaan hafalan Al-Qur'an dengan metode pembelajaran modern dan pendampingan intensif untuk mahasiswa penghafal Al-Qur'an.",
    url: "",
    icon: "fa-quran",
    category: "Pusat",
    status: "coming_soon"
  },
  {
    id: 11,
    name: "Lembaga Konsultasi Syariah",
    fullName: "Lembaga Konsultasi dan Fatwa Syariah",
    description: "Lembaga yang memberikan layanan konsultasi hukum Islam, fatwa syariah, dan pendampingan dalam masalah keagamaan bagi masyarakat.",
    url: "",
    icon: "fa-balance-scale",
    category: "Lembaga",
    status: "coming_soon"
  },
  {
    id: 12,
    name: "Pusat Gender dan Anak",
    fullName: "Pusat Studi Gender dan Perlindungan Anak",
    description: "Pusat kajian dan advokasi tentang isu gender, kesetaraan, dan perlindungan anak dalam perspektif Islam.",
    url: "",
    icon: "fa-users",
    category: "Pusat",
    status: "coming_soon"
  },
  {
    id: 13,
    name: "ILHA",
    fullName: "Program Studi Ilmu Hadis",
    description: "Fokus pada pengkajian dan penelitian hadis Nabi Muhammad SAW sebagai sumber kedua ajaran Islam dengan metodologi riset yang mendalam.",
    url: "/fakultas/ushuluddin/ilha",
    icon: "fa-book",
    category: "Prodi",
    fakultas: "Ushuluddin",
    status: "active"
  },
  {
    id: 14,
    name: "IAT",
    fullName: "Program Studi Ilmu Al-Quran and Tafsir",
    description: "Berfokus pada pengkajian dan penelitian Al-Quran sebagai sumber utama ajaran Islam dengan kajian tafsir kontemporer.",
    url: "/fakultas/ushuluddin/iat",
    icon: "fa-file-text-o",
    category: "Prodi",
    fakultas: "Ushuluddin",
    status: "active"
  },
  {
    id: 15,
    name: "PAI",
    fullName: "Program Studi Pendidikan Agama Islam",
    description: "Menyiapkan tenaga pendidik profesional dalam bidang Pendidikan Agama Islam dengan kompetensi pedagogik dan keislaman yang mumpuni.",
    url: "/fakultas/tarbiyah/pai",
    icon: "fa-graduation-cap",
    category: "Prodi",
    fakultas: "Tarbiyah",
    status: "active"
  },
  {
    id: 16,
    name: "PGMI",
    fullName: "Program Studi Pendidikan Guru Madrasah Ibtidaiyah",
    description: "Fokus pada penyiapan guru profesional untuk tingkat MI/SD dengan kompetensi pembelajaran terpadu berbasis nilai-nilai Islam.",
    url: "/fakultas/tarbiyah/pgmi",
    icon: "fa-child",
    category: "Prodi",
    fakultas: "Tarbiyah",
    status: "active"
  },
  {
    id: 17,
    name: "BKPI",
    fullName: "Program Studi Bimbingan Konseling Pendidikan Islam",
    description: "Menyiapkan konselor pendidikan kompeten dalam layanan bimbingan dan konseling dengan pendekatan Islam.",
    url: "/fakultas/tarbiyah/bkpi",
    icon: "fa-comments",
    category: "Prodi",
    fakultas: "Tarbiyah",
    status: "active"
  },
  {
    id: 18,
    name: "EKOSY",
    fullName: "Program Studi Ekonomi Syariah",
    description: "Mempersiapkan profesional dalam bidang ekonomi berbasis prinsip-prinsip syariah dengan pemahaman mendalam tentang teori ekonomi Islam.",
    url: "/fakultas/ekonomi/ekosy",
    icon: "fa-money",
    category: "Prodi",
    fakultas: "Ekonomi & Bisnis Islam",
    status: "active"
  },
  {
    id: 19,
    name: "MKS",
    fullName: "Program Studi Manajemen Keuangan Syariah",
    description: "Fokus pada pengembangan kompetensi dalam pengelolaan keuangan berbasis syariah, perbankan syariah, dan lembaga keuangan syariah.",
    url: "/fakultas/ekonomi/mks",
    icon: "fa-bank",
    category: "Prodi",
    fakultas: "Ekonomi & Bisnis Islam",
    status: "active"
  },
  {
    id: 20,
    name: "MPAI",
    fullName: "Program Magister Pendidikan Agama Islam (S2)",
    description: "Program Magister yang dirancang untuk menghasilkan ahli dan praktisi pendidikan Islam dengan kedalaman ilmu, kemampuan riset, dan kepemimpinan.",
    url: "/magister/mpai",
    icon: "fa-mortar-board",
    category: "Prodi",
    fakultas: "Pascasarjana",
    status: "active"
  }
]

export default lembagaData
