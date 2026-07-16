'use client'
import { useState } from 'react'

// Sumber: Dokumen Kurikulum Program Studi PGMI FTK IAI Persis Garut Tahun 2024
// (SK Dekan FTK No. 00253/B.3-E.5/IAIPI-G/2024), 150 SKS/8 semester. Struktur mata
// kuliah, profil lulusan, dan visi diambil langsung dari dokumen resmi tersebut.
// Fasilitas fisik tidak dirinci di dokumen kurikulum sehingga masih bersifat perkiraan
// berdasarkan nama mata kuliah (mis. Micro Teaching, ICT Pendidikan) — perlu dikonfirmasi
// ke prodi sebelum publish.
const PgmiContent = () => {
  const [activeTab, setActiveTab] = useState('profil')

  const kurikulumSingkat = [
    {
      semester: "Semester 1",
      totalSKS: 19,
      fokus: "Penguatan Dasar Kebangsaan, Keislaman & Fondasi Akademik",
      matkul: [
        { nama: "Pendidikan Pancasila dan Kewarganegaraan", sks: 3 },
        { nama: "Bahasa Indonesia", sks: 2 },
        { nama: "Ilmu Tauhid/Aqidah", sks: 2 },
        { nama: "Fiqh Ibadah", sks: 2 },
        { nama: "Ulumul Qur'an", sks: 2 },
        { nama: "Filsafat Umum", sks: 2 },
        { nama: "Bahasa Arab", sks: 2 },
        { nama: "Bahasa Inggris", sks: 2 },
        { nama: "Filsafat dan Landasan Pendidikan", sks: 2 }
      ]
    },
    {
      semester: "Semester 2",
      totalSKS: 20,
      fokus: "Penguatan Dasar Kependidikan & Wawasan Global",
      matkul: [
        { nama: "Bahasa dan Budaya Sunda", sks: 2 },
        { nama: "Ilmu Akhlak dan Adab", sks: 2 },
        { nama: "Praktik Ibadah dan Baca Tulis Al-Qur'an", sks: 2 },
        { nama: "Ulumul Hadis", sks: 2 },
        { nama: "Islamic Worldview", sks: 2 },
        { nama: "Perkembangan Peserta Didik", sks: 2 },
        { nama: "Psikologi Pendidikan", sks: 2 },
        { nama: "Ilmu Sosial Budaya Dasar", sks: 2 },
        { nama: "Hadits Tarbawi", sks: 2 },
        { nama: "Tafsir Tarbawi", sks: 2 }
      ]
    },
    {
      semester: "Semester 3",
      totalSKS: 24,
      fokus: "Pendalaman Keilmuan Inti Program Studi & Materi MI/SD",
      matkul: [
        { nama: "Kepersisan", sks: 2 },
        { nama: "Ushul Fiqh", sks: 2 },
        { nama: "Dunia Islam Kontemporer", sks: 2 },
        { nama: "Manajemen dan Administrasi Pendidikan", sks: 2 },
        { nama: "Sosiologi", sks: 2 },
        { nama: "Konsep Dasar Bahasa dan Sastra Indonesia MI/SD", sks: 2 },
        { nama: "Konsep Dasar IPS MI/SD", sks: 2 },
        { nama: "Konsep Dasar PKN", sks: 2 },
        { nama: "Konsep Dasar IPA MI/SD", sks: 2 },
        { nama: "Konsep Dasar Matematika", sks: 2 },
        { nama: "Pendidikan Jasmani, Kesehatan, dan Rekreasi MI/SD", sks: 2 },
        { nama: "Kepramukaan", sks: 2 }
      ]
    },
    {
      semester: "Semester 4",
      totalSKS: 24,
      fokus: "Penguatan Pembelajaran, Tematik & Pengembangan Profesional Awal",
      matkul: [
        { nama: "Ushul ad-Dakwah", sks: 2 },
        { nama: "Keterampilan Berbahasa dan Kesusastraan Indonesia MI/SD", sks: 2 },
        { nama: "Materi IPS MI/SD", sks: 2 },
        { nama: "Materi PKN MI/SD", sks: 2 },
        { nama: "IPA MI/SD", sks: 2 },
        { nama: "Matematika MI/SD", sks: 2 },
        { nama: "Pembelajaran Seni dan Budaya MI/SD", sks: 2 },
        { nama: "Pembelajaran Pendidikan Jasmani MI/SD", sks: 2 },
        { nama: "Strategi Pembelajaran MI/SD", sks: 2 },
        { nama: "Perencanaan Pembelajaran MI/SD", sks: 2 },
        { nama: "Telaah Kurikulum MI/SD", sks: 2 },
        { nama: "Komunikasi Pembelajaran MI/SD", sks: 2 }
      ]
    },
    {
      semester: "Semester 5",
      totalSKS: 24,
      fokus: "Pendalaman Inovasi Pembelajaran, Evaluasi & Praktik Pendidikan",
      matkul: [
        { nama: "Sejarah Kebudayaan Islam", sks: 2 },
        { nama: "Statistika Pendidikan", sks: 2 },
        { nama: "Pembelajaran IPS MI/SD", sks: 2 },
        { nama: "Pembelajaran PKN MI/SD", sks: 2 },
        { nama: "Pembelajaran IPA MI/SD", sks: 2 },
        { nama: "Pembelajaran Matematika MI/SD", sks: 2 },
        { nama: "Pembelajaran Prakarya MI/SD", sks: 2 },
        { nama: "Kajian Kearifan Lokal", sks: 2 },
        { nama: "Pengembangan Bahan Ajar MI/SD", sks: 2 },
        { nama: "Inovasi Pendidikan", sks: 2 },
        { nama: "Metodologi Penelitian Pendidikan", sks: 2 },
        { nama: "Pengenalan Lapangan Pendidikan (PLP) 1", sks: 2 }
      ]
    },
    {
      semester: "Semester 6",
      totalSKS: 24,
      fokus: "Penguatan Micro Teaching, PLP, Penelitian & Kesiapan Tugas Akhir",
      matkul: [
        { nama: "Edupreneurship", sks: 2 },
        { nama: "Akhlak dan Etika Profesi Guru", sks: 2 },
        { nama: "Pembelajaran Tematik", sks: 2 },
        { nama: "Pendidikan Inklusi", sks: 2 },
        { nama: "Inovasi Pendidikan Aqidah-Akhlak di MI", sks: 2 },
        { nama: "Inovasi Pendidikan Qur'an-Hadist di MI", sks: 2 },
        { nama: "Pengembangan Media dan Sumber Pembelajaran MI/SD", sks: 2 },
        { nama: "Evaluasi Pembelajaran MI/SD", sks: 2 },
        { nama: "Micro Teaching", sks: 2 },
        { nama: "ICT/Teknologi Informasi dan Komunikasi Pendidikan", sks: 2 },
        { nama: "Edutainment Pembelajaran di MI/SD", sks: 2 },
        { nama: "Multimedia Pembelajaran di MI/SD", sks: 2 }
      ]
    },
    {
      semester: "Semester 7",
      totalSKS: 9,
      fokus: "Penyelesaian Seminar Proposal, PLP Lanjutan & Persiapan Skripsi",
      matkul: [
        { nama: "Masa Pengabdian pada Masyarakat", sks: 3 },
        { nama: "Bimbingan Konseling", sks: 2 },
        { nama: "Pengenalan Lapangan Pendidikan (PLP) 2", sks: 2 },
        { nama: "Seminar Proposal", sks: 2 }
      ]
    },
    {
      semester: "Semester 8",
      totalSKS: 6,
      fokus: "Tugas Akhir dan Komprehensif",
      matkul: [
        { nama: "Tugas Akhir (Skripsi)", sks: 6 },
        { nama: "Komprehensif", sks: 0 }
      ]
    }
  ]

  const fasilitasData = [
    {
      icon: "fa-desktop",
      title: "Lab Microteaching",
      items: ["Ruang Simulasi Mengajar", "Kamera & Perekam Pembelajaran", "Alat Peraga Pendidikan"]
    },
    {
      icon: "fa-book",
      title: "Perpustakaan Khusus",
      items: ["Koleksi Buku Pendidikan & Psikologi Anak", "Jurnal Nasional & Internasional", "E-Library 24/7"]
    },
    {
      icon: "fa-flask",
      title: "Lab Penelitian",
      items: ["Ruang Diskusi Kelompok", "Software Analisis Data", "Bimbingan Penelitian"]
    },
    {
      icon: "fa-laptop",
      title: "Lab ICT & Media Pembelajaran",
      items: ["Alat Peraga Edukatif", "Media Digital & Multimedia Pembelajaran", "Perangkat Edutainment MI/SD"]
    }
  ]

  const profilLulusan = [
    { icon: "fa-graduation-cap", title: "Guru Kelas MI", desc: "Merancang, melaksanakan, dan mengevaluasi pembelajaran tematik-integratif di kelas MI yang bermakna dan kontekstual" },
    { icon: "fa-institution", title: "Pendidik Al-Qur'an dan Nilai Keislaman", desc: "Menanamkan nilai-nilai Islam melalui pembelajaran Al-Qur'an, hadis, akidah akhlak, dan pembiasaan ibadah sehari-hari" },
    { icon: "fa-lightbulb-o", title: "Pengembang Pembelajaran dan Bahan Ajar", desc: "Mengembangkan bahan ajar inovatif berbasis pendekatan ilmiah, literasi, dan pemanfaatan teknologi" },
    { icon: "fa-book", title: "Penggerak Literasi dan Numerasi", desc: "Menumbuhkan budaya baca, tulis, berpikir kritis, dan numerasi pada peserta didik MI secara kreatif" },
    { icon: "fa-users", title: "Pengelola/Kepemimpinan Pendidikan Dasar", desc: "Memimpin pembelajaran dengan kapasitas manajerial, kolaboratif, dan kewirausahaan di madrasah" }
  ]

  return (
    <section id="prodi-detail-section" className="pt-70 pb-70">
      <div className="container">
        {/* Prodi Header */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="prodi-header-card">
              <div className="prodi-header-left">
                <div className="prodi-badge">PGMI</div>
                <div className="prodi-title-wrapper">
                  <h2>Program Studi Pendidikan Guru Madrasah Ibtidaiyah</h2>
                  <p className="prodi-subtitle">Fakultas Tarbiyah</p>
                </div>
              </div>
              <div className="prodi-header-right">
                <div className="quick-info">
                  <div className="info-box info-box--akreditasi">
                    <i className="fa fa-certificate"></i>
                    <div>
                      <span className="label">Akreditasi</span>
                      <strong>B (Baik)</strong>
                    </div>
                  </div>
                  <div className="info-box">
                    <i className="fa fa-trophy"></i>
                    <div>
                      <span className="label">Gelar</span>
                      <strong>S.Pd.</strong>
                    </div>
                  </div>
                  <div className="info-box">
                    <i className="fa fa-calendar"></i>
                    <div>
                      <span className="label">Durasi</span>
                      <strong>4 Tahun</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="prodi-tabs-modern">
              <button 
                className={`tab-btn-modern ${activeTab === 'profil' ? 'active' : ''}`}
                onClick={() => setActiveTab('profil')}
              >
                <i className="fa fa-user"></i>
                <span>Profil</span>
              </button>
              <button 
                className={`tab-btn-modern ${activeTab === 'kurikulum' ? 'active' : ''}`}
                onClick={() => setActiveTab('kurikulum')}
              >
                <i className="fa fa-book"></i>
                <span>Kurikulum</span>
              </button>
              <button 
                className={`tab-btn-modern ${activeTab === 'fasilitas' ? 'active' : ''}`}
                onClick={() => setActiveTab('fasilitas')}
              >
                <i className="fa fa-building"></i>
                <span>Fasilitas</span>
              </button>
              <button 
                className={`tab-btn-modern ${activeTab === 'karir' ? 'active' : ''}`}
                onClick={() => setActiveTab('karir')}
              >
                <i className="fa fa-briefcase"></i>
                <span>Prospek Karir</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="row">
          <div className="col-lg-12">
            {/* PROFIL TAB */}
            {activeTab === 'profil' && (
              <div className="tab-content-modern fade-in">
                <div className="content-card">
                  <h3 className="content-title">Tentang Program Studi</h3>
                  <p className="lead-text">Program Studi Pendidikan Guru Madrasah Ibtidaiyah (PGMI) adalah program sarjana (S1) di bawah Fakultas Tarbiyah dan Keguruan IAI Persis Garut yang menyiapkan calon guru kelas madrasah ibtidaiyah yang profesional, religius, dan adaptif, dengan landasan turats Islam, penguasaan ilmu kependidikan, serta kemampuan pedagogik yang adaptif terhadap perubahan zaman.</p>
                  <p><strong>Kekhasan:</strong> Integrasi nilai keislaman dan turats Islam dengan kompetensi pedagogik guru MI dan literasi digital.</p>

                  {/* Profil Lulusan Grid */}
                  <h4 className="mt-5 mb-4">Profil Lulusan</h4>
                  <div className="row">
                    {profilLulusan.map((profil, idx) => (
                      <div key={idx} className="col-lg-4 col-md-6 mb-4">
                        <div className="profil-lulusan-card">
                          <div className="profil-icon">
                            <i className={`fa ${profil.icon}`}></i>
                          </div>
                          <h5>{profil.title}</h5>
                          <p>{profil.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Kompetensi */}
                  <h4 className="mt-5 mb-4">Kompetensi Lulusan</h4>
                  <div className="kompetensi-list">
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Sikap dan Tata Nilai</h6>
                        <p>Beriman, bertakwa, dan berakhlak mulia; menjunjung tinggi adab, integritas, dan tanggung jawab sebagai pendidik</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Pengetahuan Pedagogik dan Keislaman</h6>
                        <p>Menguasai konsep dasar pendidikan, psikologi perkembangan anak, kurikulum MI/SD, serta dasar keislaman (Al-Qur'an, Hadis, fikih, akidah akhlak, SKI)</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Keterampilan Umum</h6>
                        <p>Mampu berpikir kritis, berkomunikasi efektif, berkolaborasi, dan belajar mandiri sepanjang hayat</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Keterampilan Khusus</h6>
                        <p>Mampu merancang, melaksanakan, dan mengevaluasi pembelajaran tematik-integratif MI/SD secara kreatif dan berbasis teknologi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* KURIKULUM TAB */}
            {activeTab === 'kurikulum' && (
              <div className="tab-content-modern fade-in">
                <div className="content-card">
                  <h3 className="content-title">Struktur Kurikulum</h3>
                  <p className="mb-4">Kurikulum dirancang untuk menghasilkan lulusan yang kompeten sebagai guru madrasah ibtidaiyah dengan total 150 SKS yang tersebar dalam 8 semester (Dokumen Kurikulum PGMI Tahun 2024).</p>
                  
                  <div className="kurikulum-timeline">
                    {kurikulumSingkat.map((sem, idx) => (
                      <div key={idx} className="timeline-item">
                        <div className="timeline-marker">{idx + 1}</div>
                        <div className="timeline-content">
                          <div className="semester-header">
                            <h4>{sem.semester}</h4>
                            <div className="semester-meta">
                              <span className="sks-badge">{sem.totalSKS} SKS</span>
                              <span className="fokus-badge">{sem.fokus}</span>
                            </div>
                          </div>
                          <div className="matkul-grid">
                            {sem.matkul.map((mk, midx) => (
                              <div key={midx} className="matkul-chip">
                                <span className="mk-name">{mk.nama}</span>
                                <span className="mk-sks">{mk.sks} SKS</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* FASILITAS TAB */}
            {activeTab === 'fasilitas' && (
              <div className="tab-content-modern fade-in">
                <div className="content-card">
                  <h3 className="content-title">Fasilitas Program Studi</h3>
                  <p className="mb-5">Didukung oleh fasilitas modern untuk menunjang pembelajaran dan penelitian mahasiswa.</p>
                  
                  <div className="row">
                    {fasilitasData.map((fasilitas, idx) => (
                      <div key={idx} className="col-lg-6 mb-4">
                        <div className="fasilitas-card-modern">
                          <div className="fasilitas-icon-modern">
                            <i className={`fa ${fasilitas.icon}`}></i>
                          </div>
                          <div className="fasilitas-content-modern">
                            <h5>{fasilitas.title}</h5>
                            <ul>
                              {fasilitas.items.map((item, iidx) => (
                                <li key={iidx}>
                                  <i className="fa fa-check"></i>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* KARIR TAB */}
            {activeTab === 'karir' && (
              <div className="tab-content-modern fade-in">
                <div className="content-card">
                  <h3 className="content-title">Prospek Karir</h3>
                  <p className="mb-5">Lulusan Program Studi Pendidikan Guru Madrasah Ibtidaiyah memiliki peluang karir yang luas di berbagai sektor.</p>
                  
                  <div className="karir-sectors">
                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-university"></i>
                      </div>
                      <h5>Pendidikan Formal</h5>
                      <ul>
                        <li>Guru Kelas MI</li>
                        <li>Guru Madrasah Ibtidaiyah</li>
                        <li>Guru SD Islam Terpadu</li>
                        <li>Wali Kelas</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-institution"></i>
                      </div>
                      <h5>Pendidikan Keislaman</h5>
                      <ul>
                        <li>Pengajar Al-Qur'an</li>
                        <li>Pembina Keagamaan Madrasah</li>
                        <li>Fasilitator Pembiasaan Keislaman</li>
                        <li>Pengelola PAUD/TPQ</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-lightbulb-o"></i>
                      </div>
                      <h5>Pengembangan Pembelajaran & Literasi</h5>
                      <ul>
                        <li>Pengembang Bahan Ajar & Media Digital MI</li>
                        <li>Koordinator Literasi/Numerasi Sekolah</li>
                        <li>Pendamping Klub Baca/Tulis</li>
                        <li>Wirausahawan Pendidikan</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-university"></i>
                      </div>
                      <h5>Pemerintahan & Organisasi</h5>
                      <ul>
                        <li>Kementerian Agama</li>
                        <li>Dinas Pendidikan</li>
                        <li>Pengawas Madrasah</li>
                        <li>Lembaga Pendidikan Persis</li>
                      </ul>
                    </div>
                  </div>

                  <div className="alumni-note mt-3">
                    <i className="fa fa-graduation-cap"></i>
                    <p><strong>Studi lanjut:</strong> lulusan PGMI juga dapat melanjutkan pendidikan Magister (S2) di bidang pendidikan dasar/keislaman.</p>
                  </div>

                  <div className="alumni-note mt-3">
                    <i className="fa fa-info-circle"></i>
                    <p><strong>Alumni kami</strong> telah bekerja di berbagai institusi pendidikan, lembaga penelitian, dan organisasi Islam di seluruh Indonesia.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Visi, Misi & Tujuan */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="visi-misi-faculty">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="vm-card">
                    <div className="vm-icon">
                      <i className="fa fa-eye"></i>
                    </div>
                    <div className="vm-content">
                      <h4>Visi</h4>
                      <p>Menjadi program studi unggul dalam menyiapkan guru madrasah ibtidaiyah yang berilmu, religius, dan profesional, dengan landasan turats Islam, penguasaan ilmu kependidikan, serta kemampuan pedagogik yang adaptif terhadap perubahan zaman.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="vm-card">
                    <div className="vm-icon">
                      <i className="fa fa-bullseye"></i>
                    </div>
                    <div className="vm-content">
                      <h4>Misi</h4>
                      <ul>
                        <li>Menyelenggarakan pendidikan dan pembelajaran bermutu berbasis capaian pembelajaran</li>
                        <li>Mengembangkan penelitian pendidikan dasar Islam yang relevan dan bermanfaat</li>
                        <li>Melaksanakan pengabdian kepada masyarakat berbasis pendidikan dan dakwah</li>
                        <li>Memperkuat kerja sama dengan madrasah, lembaga pendidikan, alumni, dan pemangku kepentingan</li>
                        <li>Mengembangkan sumber daya manusia dosen dan mahasiswa yang kompeten dan berkarakter</li>
                        <li>Membangun budaya akademik yang religius, ilmiah, dan produktif</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="vm-card">
                    <div className="vm-icon">
                      <i className="fa fa-flag"></i>
                    </div>
                    <div className="vm-content">
                      <h4>Tujuan</h4>
                      <ul>
                        <li>Menghasilkan lulusan yang mampu menjadi guru madrasah ibtidaiyah profesional</li>
                        <li>Membentuk lulusan yang berakhlak mulia, beradab, dan berdaya saing</li>
                        <li>Memastikan lulusan memiliki kompetensi nyata untuk mengajar, membimbing, dan mendidik</li>
                        <li>Memperkuat mutu proses pendidikan dan pembelajaran di lingkungan prodi</li>
                        <li>Meningkatkan relevansi kurikulum dengan kebutuhan dunia kerja dan perkembangan ilmu pendidikan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="prodi-cta-footer">
              <div className="cta-left">
                <i className="fa fa-graduation-cap"></i>
                <div>
                  <h4>Tertarik Bergabung?</h4>
                  <p>Daftar sekarang dan jadilah ahli dalam bidang Pendidikan Guru Madrasah Ibtidaiyah</p>
                </div>
              </div>
              <div className="cta-right">
                <a href="/pmb" className="btn-daftar">
                  <i className="fa fa-edit"></i>
                  Daftar Sekarang
                </a>
                <a href="/contact" className="btn-info">
                  <i className="fa fa-info-circle"></i>
                  Info Lebih Lanjut
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PgmiContent
