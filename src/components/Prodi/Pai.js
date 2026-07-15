'use client'
import { useState } from 'react'

// Sumber: Dokumen Kurikulum Program Studi PAI FTK IAI Persis Garut Tahun 2024
// (SK Dekan FTK No. 00255/B.3-E.5/IAIPI-G/2024), 150 SKS/8 semester. Identitas, visi,
// misi, tujuan, profil lulusan, CPL, dan struktur mata kuliah diambil langsung dari
// dokumen resmi tersebut (Bagian II & VII). Fasilitas fisik tidak dirinci di dokumen
// kurikulum sehingga masih bersifat perkiraan berdasarkan nama mata kuliah — perlu
// dikonfirmasi ke prodi sebelum publish.
const PaiContent = () => {
  const [activeTab, setActiveTab] = useState('profil')

  const profilLulusan = [
    { icon: "fa-graduation-cap", title: "Pendidik PAI Profesional", desc: "Mengajar Pendidikan Agama Islam di sekolah, madrasah, pesantren, dan lembaga pendidikan Islam" },
    { icon: "fa-lightbulb-o", title: "Pengembang Pendidikan Islam", desc: "Mengembangkan kurikulum, media, dan program pendidikan Islam yang inovatif" },
    { icon: "fa-search", title: "Peneliti Pendidikan Islam", desc: "Melakukan penelitian dalam bidang pendidikan agama Islam, pembelajaran, dan kajian keislaman" },
    { icon: "fa-institution", title: "Penggerak Dakwah & Pemberdayaan", desc: "Membina masyarakat, menggerakkan dakwah, dan mengembangkan literasi keislaman" },
    { icon: "fa-rocket", title: "Edupreneur Pendidikan Islam", desc: "Mengembangkan lembaga, media, pelatihan, dan usaha kreatif berbasis pendidikan Islam" }
  ]

  const kurikulumSingkat = [
    {
      semester: "Semester 1",
      totalSKS: 19,
      fokus: "Penguatan Dasar Keislaman, Akademik & Literasi",
      matkul: [
        { nama: "Pancasila dan Kewarganegaraan", sks: 3 },
        { nama: "Bahasa Indonesia", sks: 2 },
        { nama: "Ilmu Tauhid", sks: 2 },
        { nama: "Fiqh Ibadah", sks: 2 },
        { nama: "Ulumul Qur'an", sks: 2 },
        { nama: "Filsafat Umum", sks: 2 },
        { nama: "Bahasa Arab", sks: 2 },
        { nama: "Bahasa Inggris", sks: 2 },
        { nama: "Filsafat dan Landasan Pendidikan Islam", sks: 2 }
      ]
    },
    {
      semester: "Semester 2",
      totalSKS: 20,
      fokus: "Penguatan Dasar Keislaman, Akademik & Literasi",
      matkul: [
        { nama: "Bahasa dan Budaya Sunda", sks: 2 },
        { nama: "Ilmu Akhlak dan Adab", sks: 2 },
        { nama: "Praktik Ibadah dan Baca Tulis Al-Qur'an", sks: 2 },
        { nama: "Ulumul Hadis", sks: 2 },
        { nama: "Panduan Hidup Islam", sks: 2 },
        { nama: "Psikologi Pendidikan", sks: 2 },
        { nama: "Fiqih Muamalah dan Jinayah", sks: 2 },
        { nama: "Tafsir Tarbawi", sks: 2 },
        { nama: "Hadis Tarbawi", sks: 2 },
        { nama: "Ilmu Alamiah Sosial Budaya Dasar (IASBD)", sks: 2 }
      ]
    },
    {
      semester: "Semester 3",
      totalSKS: 24,
      fokus: "Penguatan Pedagogik & Penguasaan Materi PAI",
      matkul: [
        { nama: "Kepersisan", sks: 2 },
        { nama: "Ushul Fiqh", sks: 2 },
        { nama: "Dunia Islam Kontemporer", sks: 2 },
        { nama: "Perkembangan Peserta Didik", sks: 2 },
        { nama: "Manajemen dan Administrasi Pendidikan", sks: 2 },
        { nama: "Ilmu Nahwu dan Sharaf", sks: 2 },
        { nama: "English for Academic Purposes", sks: 2 },
        { nama: "Ilmu Pendidikan Islam", sks: 2 },
        { nama: "Belajar dan Pembelajaran PAI", sks: 2 },
        { nama: "Bimbingan Konseling", sks: 2 },
        { nama: "Sosiologi Pendidikan", sks: 2 },
        { nama: "Fiqih Munakahat dan Mawarits", sks: 2 }
      ]
    },
    {
      semester: "Semester 4",
      totalSKS: 24,
      fokus: "Penguatan Pedagogik & Penguasaan Materi PAI",
      matkul: [
        { nama: "Ushul ad-Dakwah", sks: 2 },
        { nama: "Komunikasi Pembelajaran", sks: 2 },
        { nama: "Penelitian Tindakan Kelas", sks: 2 },
        { nama: "Kapita Selekta dan Perbandingan Pendidikan", sks: 2 },
        { nama: "Pengembangan Kurikulum Pendidikan", sks: 2 },
        { nama: "Model dan Metode Pembelajaran PAI", sks: 2 },
        { nama: "Pendidikan Karakter dan Nilai (Pilihan)", sks: 2 },
        { nama: "Materi Pembelajaran SKI MTs/SMP", sks: 2 },
        { nama: "Materi Pembelajaran Akidah Akhlak MTs/SMP", sks: 2 },
        { nama: "Materi Pembelajaran Fikih MTs/SMP", sks: 2 },
        { nama: "Materi Pembelajaran Al-Qur'an Hadis MTs/SMP", sks: 2 },
        { nama: "Teknik Penulisan Karya Ilmiah", sks: 2 }
      ]
    },
    {
      semester: "Semester 5",
      totalSKS: 24,
      fokus: "Penguatan Teknologi Pembelajaran & Penelitian",
      matkul: [
        { nama: "Sejarah Peradaban Islam", sks: 2 },
        { nama: "Statistika Pendidikan", sks: 2 },
        { nama: "Perencanaan Pembelajaran PAI", sks: 2 },
        { nama: "Inovasi Pendidikan", sks: 2 },
        { nama: "Metodologi Penelitian Pendidikan", sks: 2 },
        { nama: "Media dan Strategi Pembelajaran PAI", sks: 2 },
        { nama: "Materi Pembelajaran SKI MA/SMA", sks: 2 },
        { nama: "Materi Pembelajaran Akidah Akhlak MA/SMA", sks: 2 },
        { nama: "Materi Pembelajaran Fikih MA/SMA", sks: 2 },
        { nama: "Materi Pembelajaran Al-Qur'an Hadis MA/SMA", sks: 2 },
        { nama: "Pembelajaran Bahasa Arab di Madrasah/Sekolah", sks: 2 },
        { nama: "Manajemen Lembaga Pendidikan Madrasah dan Pesantren", sks: 2 }
      ]
    },
    {
      semester: "Semester 6",
      totalSKS: 23,
      fokus: "Penguatan Teknologi Pembelajaran & Penelitian",
      matkul: [
        { nama: "Evaluasi Pembelajaran", sks: 2 },
        { nama: "Pembelajaran PAI Anak Berkebutuhan Khusus (ABK)", sks: 2 },
        { nama: "Edupreneurship", sks: 2 },
        { nama: "Studi Naskah Arab", sks: 2 },
        { nama: "Pendidikan Agama Islam Luar Sekolah", sks: 2 },
        { nama: "Computational Thinking", sks: 2 },
        { nama: "Pengelolaan Kelas", sks: 2 },
        { nama: "Microteaching", sks: 2 },
        { nama: "Akhlak dan Etika Profesi Guru", sks: 2 },
        { nama: "E-Learning PAI", sks: 2 },
        { nama: "Masa Pengabdian pada Masyarakat", sks: 3 }
      ]
    },
    {
      semester: "Semester 7",
      totalSKS: 10,
      fokus: "Praktik Lapangan & Implementasi Pembelajaran",
      matkul: [
        { nama: "Telaah Pendidikan dan Pembelajaran Pesantren", sks: 2 },
        { nama: "Artificial Intelligence (AI) for Islamic Education", sks: 2 },
        { nama: "Seminar PAI", sks: 2 },
        { nama: "Praktik Pengalaman Lapangan (PPL)", sks: 4 },
        { nama: "Ujian Komprehensif", sks: 0 },
        { nama: "Sidang Proposal", sks: 0 }
      ]
    },
    {
      semester: "Semester 8",
      totalSKS: 6,
      fokus: "Penelitian & Penyelesaian Tugas Akhir",
      matkul: [
        { nama: "Tugas Akhir (Skripsi)", sks: 6 }
      ]
    }
  ]

  const fasilitasData = [
    {
      icon: "fa-laptop",
      title: "Lab Micro Teaching & Keagamaan",
      items: ["Simulasi Pembelajaran", "Recording System", "Smart Classroom"]
    },
    {
      icon: "fa-book",
      title: "Perpustakaan PAI",
      items: ["Koleksi Turats & Buku PAI", "Jurnal Pendidikan", "Digital Library"]
    },
    {
      icon: "fa-desktop",
      title: "Sarana Teknologi Pembelajaran",
      items: ["ICT Learning", "E-Learning Tools", "Internet 24/7"]
    },
    {
      icon: "fa-institution",
      title: "Masjid/Mushola sebagai Lab Keagamaan",
      items: ["Praktik Ibadah & Khutbah", "Kajian Keislaman", "Pembinaan Dakwah"]
    },
    {
      icon: "fa-flask",
      title: "Ruang PPL",
      items: ["Praktek Mengajar", "Lesson Study", "Peer Teaching"]
    },
    {
      icon: "fa-handshake-o",
      title: "Jejaring Mitra Praktik",
      items: ["Sekolah & Madrasah Mitra", "Pesantren Mitra", "Lembaga Pengabdian Masyarakat"]
    }
  ]

  return (
    <section id="prodi-detail-section" className="pt-70 pb-70">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="prodi-header-card">
              <div className="prodi-header-left">
                <div className="prodi-badge">PAI</div>
                <div className="prodi-title-wrapper">
                  <h2>Program Studi Pendidikan Agama Islam</h2>
                  <p className="prodi-subtitle">Fakultas Tarbiyah</p>
                </div>
              </div>
              <div className="prodi-header-right">
                <div className="quick-info">
                  <div className="info-box">
                    <i className="fa fa-certificate"></i>
                    <div>
                      <span className="label">Akreditasi</span>
                      <strong>Baik Sekali</strong>
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

        <div className="row">
          <div className="col-lg-12">
            {activeTab === 'profil' && (
              <div className="tab-content-modern fade-in">
                <div className="content-card">
                  <h3 className="content-title">Tentang Program Studi</h3>
                  <p className="lead-text">Program Studi Pendidikan Agama Islam (PAI) adalah program sarjana (S1) di bawah Fakultas Tarbiyah dan Keguruan IAI Persis Garut yang menghasilkan pendidik Pendidikan Agama Islam yang profesional, religius, berakhlakul karimah, memiliki kemampuan dakwah, dan adaptif terhadap teknologi.</p>
                  <p>Program studi ini berdiri berdasarkan Keputusan Dirjen Kelembagaan Agama Islam No. Dj.II/77/03 tanggal 1 Mei 2003.</p>

                  <div className="alumni-note mt-4 mb-4">
                    <i className="fa fa-eye"></i>
                    <p><strong>Visi:</strong> &ldquo;Menjadi Program Studi Pendidikan Agama Islam yang unggul dalam pengembangan pendidikan Islam berbasis turats, teknologi pembelajaran, dan nilai-nilai Persatuan Islam untuk menghasilkan pendidik profesional, religius, dan berdaya saing pada tahun 2028.&rdquo;</p>
                  </div>

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

                  <h4 className="mt-5 mb-4">Kompetensi Lulusan</h4>
                  <div className="kompetensi-list">
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Sikap dan Tata Nilai</h6>
                        <p>Bertakwa kepada Allah Swt., menjunjung tinggi akhlakul karimah, integritas, dan mengembangkan semangat dakwah serta kepedulian sosial</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Pengetahuan Keislaman & Kependidikan</h6>
                        <p>Menguasai konsep dasar pendidikan Islam, kajian Al-Qur'an, Hadis, Fikih, Akhlak, SKI, turats Islam, serta teknologi pembelajaran</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Keterampilan Umum</h6>
                        <p>Mampu berpikir kritis, menyusun karya ilmiah, berkomunikasi efektif, dan memanfaatkan teknologi informasi</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Keterampilan Khusus</h6>
                        <p>Mampu merancang, melaksanakan, dan mengevaluasi pembelajaran PAI berbasis OBE dan teknologi, serta mengintegrasikan turats Islam dalam pembelajaran</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'kurikulum' && (
              <div className="tab-content-modern fade-in">
                <div className="content-card">
                  <h3 className="content-title">Struktur Kurikulum</h3>
                  <p className="mb-4">Kurikulum PAI 2024 dikembangkan dengan paradigma integratif — memadukan ilmu pendidikan Islam, penguatan turats, dan ilmu pengetahuan modern — berbasis Outcome-Based Education (OBE) dan mengacu pada KKNI, SN-Dikti, serta kebijakan Merdeka Belajar Kampus Merdeka (MBKM), dengan total 150 SKS.</p>

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

            {activeTab === 'fasilitas' && (
              <div className="tab-content-modern fade-in">
                <div className="content-card">
                  <h3 className="content-title">Fasilitas Program Studi</h3>
                  <p className="mb-5">Didukung oleh fasilitas modern untuk menunjang pembelajaran dan praktek mengajar mahasiswa.</p>
                  
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

            {activeTab === 'karir' && (
              <div className="tab-content-modern fade-in">
                <div className="content-card">
                  <h3 className="content-title">Prospek Karir</h3>
                  <p className="mb-5">Lulusan PAI memiliki peluang karir yang luas di berbagai sektor pendidikan dan keagamaan.</p>
                  
                  <div className="karir-sectors">
                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-university"></i>
                      </div>
                      <h5>Lembaga Pendidikan</h5>
                      <ul>
                        <li>Guru PAI SMP/SMA/SMK</li>
                        <li>Guru Madrasah Tsanawiyah/Aliyah</li>
                        <li>Guru PAI Pesantren</li>
                        <li>Kepala Sekolah/Madrasah</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-institution"></i>
                      </div>
                      <h5>Dakwah & Pemberdayaan Masyarakat</h5>
                      <ul>
                        <li>Penyuluh Agama</li>
                        <li>Da&apos;i dan Mubaligh</li>
                        <li>Fasilitator Pemberdayaan Masyarakat</li>
                        <li>Konsultan Pendidikan Islam</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-university"></i>
                      </div>
                      <h5>Instansi Pemerintah</h5>
                      <ul>
                        <li>PNS Kementerian Agama</li>
                        <li>Dinas Pendidikan</li>
                        <li>Kantor Urusan Agama</li>
                        <li>Pengawas Sekolah</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-book"></i>
                      </div>
                      <h5>Pengembangan & Penelitian</h5>
                      <ul>
                        <li>Pengembang Kurikulum & Program PAI</li>
                        <li>Peneliti Pemula Pendidikan Islam</li>
                        <li>Penulis Buku PAI</li>
                        <li>Editor Materi PAI</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-rocket"></i>
                      </div>
                      <h5>Edupreneur Pendidikan Islam</h5>
                      <ul>
                        <li>Pendiri Lembaga Kursus/TPQ</li>
                        <li>Trainer Pendidikan Islam</li>
                        <li>Content Creator Dakwah Digital</li>
                        <li>Pengelola Bisnis Pendidikan Islam</li>
                      </ul>
                    </div>
                  </div>

                  <div className="alumni-note mt-3">
                    <i className="fa fa-graduation-cap"></i>
                    <p><strong>Studi lanjut:</strong> lulusan PAI juga dapat melanjutkan pendidikan Magister (S2) di bidang PAI/pendidikan Islam.</p>
                  </div>

                  <div className="alumni-note mt-3">
                    <i className="fa fa-info-circle"></i>
                    <p><strong>Alumni kami</strong> telah bekerja di berbagai sekolah, madrasah, dan lembaga pendidikan Islam di seluruh Indonesia.</p>
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
                      <p>Menjadi Program Studi Pendidikan Agama Islam yang unggul dalam pengembangan pendidikan Islam berbasis turats, teknologi pembelajaran, dan nilai-nilai Persatuan Islam untuk menghasilkan pendidik profesional, religius, dan berdaya saing pada tahun 2028.</p>
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
                        <li>Menyelenggarakan pendidikan dan pembelajaran PAI yang unggul dan berbasis turats</li>
                        <li>Mengembangkan penelitian dalam bidang pendidikan agama Islam</li>
                        <li>Melaksanakan pengabdian kepada masyarakat</li>
                        <li>Mengembangkan budaya akademik Islami</li>
                        <li>Mengembangkan kerja sama strategis dengan sekolah, madrasah, pesantren, dan lembaga dakwah</li>
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
                      <p>Menghasilkan sarjana Pendidikan Agama Islam yang:</p>
                      <ul>
                        <li>Unggul dalam bidang pendidikan Islam</li>
                        <li>Profesional dalam pembelajaran</li>
                        <li>Menguasai turats Islam</li>
                        <li>Berakhlakul karimah</li>
                        <li>Adaptif terhadap perkembangan teknologi</li>
                        <li>Memiliki kemampuan dakwah serta kepemimpinan sosial</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="prodi-cta-footer">
              <div className="cta-left">
                <i className="fa fa-graduation-cap"></i>
                <div>
                  <h4>Tertarik Bergabung?</h4>
                  <p>Daftar sekarang dan jadilah pendidik PAI yang profesional</p>
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

export default PaiContent
