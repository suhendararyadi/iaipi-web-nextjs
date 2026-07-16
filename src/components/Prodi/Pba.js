'use client'
import { useState } from 'react'

// DRAFT: seluruh konten di bawah ini (kurikulum, fasilitas, kompetensi, karir, gelar)
// bersifat generik (pola umum prodi Pendidikan Bahasa Arab PTAI), BUKAN data resmi
// kampus. Wajib direview & diganti dengan data asli sebelum publish.
const PbaContent = () => {
  const [activeTab, setActiveTab] = useState('profil')

  const kurikulumSingkat = [
    {
      semester: "Semester 1",
      totalSKS: 19,
      fokus: "Dasar Keilmuan Islam & Bahasa Arab",
      matkul: [
        { nama: "Pancasila dan Kewarganegaraan", sks: 3 },
        { nama: "Bahasa Indonesia", sks: 2 },
        { nama: "Ilmu Tauhid", sks: 2 },
        { nama: "Fiqih Ibadah", sks: 2 },
        { nama: "Ulumul Quran", sks: 2 },
        { nama: "Pengantar Pendidikan Bahasa Arab", sks: 2 },
        { nama: "Nahwu Dasar", sks: 2 },
        { nama: "Sharaf Dasar", sks: 2 },
        { nama: "Muhadatsah 1 (Percakapan)", sks: 2 }
      ]
    },
    {
      semester: "Semester 3",
      totalSKS: 24,
      fokus: "Pendalaman Bahasa Arab & Metodologi",
      matkul: [
        { nama: "Nahwu Lanjutan", sks: 2 },
        { nama: "Sharaf Lanjutan", sks: 2 },
        { nama: "Balaghah", sks: 2 },
        { nama: "Muhadatsah 2", sks: 2 },
        { nama: "Qawaid Bahasa Arab", sks: 2 },
        { nama: "Ushul Fiqih", sks: 2 },
        { nama: "Metodologi Pembelajaran Bahasa Arab", sks: 2 },
        { nama: "Kepersisan", sks: 2 },
        { nama: "Tarjamah (Terjemahan)", sks: 2 },
        { nama: "Bahasa Inggris", sks: 2 },
        { nama: "Psikologi Pendidikan", sks: 2 }
      ]
    },
    {
      semester: "Semester 5",
      totalSKS: 24,
      fokus: "Spesialisasi & Penelitian Bahasa Arab",
      matkul: [
        { nama: "Perencanaan Pembelajaran Bahasa Arab", sks: 2 },
        { nama: "Media Pembelajaran Bahasa Arab", sks: 2 },
        { nama: "Evaluasi Pembelajaran Bahasa Arab", sks: 2 },
        { nama: "Ilmu Lughah (Linguistik Arab)", sks: 2 },
        { nama: "Adab Arabi (Sastra Arab)", sks: 2 },
        { nama: "Metodologi Penelitian Bahasa", sks: 2 },
        { nama: "Muhadatsah 3 (Lanjutan)", sks: 2 },
        { nama: "Tarjamah Lanjutan", sks: 2 },
        { nama: "Manajemen Kelas Bahasa Arab", sks: 2 },
        { nama: "Kaligrafi Arab", sks: 2 }
      ]
    },
    {
      semester: "Semester 7",
      totalSKS: 10,
      fokus: "Ujian Komprehensif & Praktek Profesi",
      matkul: [
        { nama: "Ujian Komprehensif", sks: 2 },
        { nama: "Metodologi Penelitian Mahasiswa (MPM)", sks: 4 },
        { nama: "PPL/Praktek Profesi", sks: 4 }
      ]
    }
  ]

  const fasilitasData = [
    {
      icon: "fa-language",
      title: "Lab Bahasa Arab",
      items: ["Multimedia Learning", "Program Native Speaker", "Language Lab Digital"]
    },
    {
      icon: "fa-book",
      title: "Perpustakaan Khusus",
      items: ["Koleksi Buku & Kamus Bahasa Arab", "Jurnal Nasional & Internasional", "E-Library 24/7"]
    },
    {
      icon: "fa-desktop",
      title: "Lab Microteaching",
      items: ["Ruang Simulasi Mengajar", "Kamera & Perekam Pembelajaran", "Alat Peraga Bahasa"]
    },
    {
      icon: "fa-flask",
      title: "Lab Penelitian",
      items: ["Ruang Diskusi Kelompok", "Software Analisis Data", "Bimbingan Penelitian"]
    }
  ]

  const profilLulusan = [
    { icon: "fa-graduation-cap", title: "Guru Bahasa Arab", desc: "Mendidik dan mengajar Bahasa Arab di sekolah/madrasah" },
    { icon: "fa-exchange", title: "Penerjemah Bahasa Arab", desc: "Menerjemahkan teks Arab-Indonesia secara profesional" },
    { icon: "fa-book", title: "Pengembang Materi Ajar", desc: "Merancang materi dan media pembelajaran Bahasa Arab" },
    { icon: "fa-search", title: "Peneliti Kebahasaan", desc: "Mengkaji linguistik dan pembelajaran Bahasa Arab" }
  ]

  return (
    <section id="prodi-detail-section" className="pt-70 pb-70">
      <div className="container">
        {/* Prodi Header */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="prodi-header-card">
              <div className="prodi-header-left">
                <div className="prodi-badge">PBA</div>
                <div className="prodi-title-wrapper">
                  <h2>Program Studi Pendidikan Bahasa Arab</h2>
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
                  <p className="lead-text">Program Studi Pendidikan Bahasa Arab menyiapkan guru profesional yang mampu mengajar Bahasa Arab dengan pendekatan pedagogik modern berbasis nilai-nilai Islam. Program studi ini mempersiapkan mahasiswa untuk menjadi pendidik yang mampu memahami, mengajarkan, dan mengembangkan pembelajaran Bahasa Arab secara komprehensif.</p>

                  {/* Profil Lulusan Grid */}
                  <h4 className="mt-5 mb-4">Profil Lulusan</h4>
                  <div className="row">
                    {profilLulusan.map((profil, idx) => (
                      <div key={idx} className="col-lg-3 col-md-6 mb-4">
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
                        <h6>Penguasaan Bahasa Arab</h6>
                        <p>Mampu berkomunikasi aktif dan pasif dalam Bahasa Arab</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Pedagogi Bahasa Arab</h6>
                        <p>Menguasai metode dan strategi pengajaran Bahasa Arab</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Penelitian Kebahasaan</h6>
                        <p>Mampu melakukan penelitian ilmiah dalam bidang pembelajaran bahasa</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Penerjemahan</h6>
                        <p>Menguasai teknik penerjemahan teks Arab-Indonesia dan sebaliknya</p>
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
                  <p className="mb-4">Kurikulum dirancang untuk menghasilkan lulusan yang kompeten sebagai guru Bahasa Arab dengan total 144 SKS.</p>

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
                  <p className="mb-5">Lulusan Program Studi Pendidikan Bahasa Arab memiliki peluang karir yang luas di berbagai sektor.</p>

                  <div className="karir-sectors">
                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-university"></i>
                      </div>
                      <h5>Pendidikan Formal</h5>
                      <ul>
                        <li>Guru Bahasa Arab MI/MTs/MA</li>
                        <li>Guru Bahasa Arab Pesantren</li>
                        <li>Dosen Bahasa Arab</li>
                        <li>Instruktur Bahasa Arab</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-exchange"></i>
                      </div>
                      <h5>Penerjemahan & Bahasa</h5>
                      <ul>
                        <li>Penerjemah Dokumen Arab</li>
                        <li>Interpreter</li>
                        <li>Editor Naskah Arab</li>
                        <li>Content Writer Bahasa Arab</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-institution"></i>
                      </div>
                      <h5>Lembaga Keagamaan & Dakwah</h5>
                      <ul>
                        <li>Pembimbing Haji & Umrah</li>
                        <li>Staf Kedutaan/Konsuler</li>
                        <li>Lembaga Dakwah</li>
                        <li>Pengurus Pesantren</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-university"></i>
                      </div>
                      <h5>Pemerintahan & Organisasi</h5>
                      <ul>
                        <li>Kementerian Agama</li>
                        <li>Lembaga Bahasa</li>
                        <li>Pusat Studi Timur Tengah</li>
                        <li>Lembaga Pendidikan Persis</li>
                      </ul>
                    </div>
                  </div>

                  <div className="alumni-note mt-5">
                    <i className="fa fa-info-circle"></i>
                    <p><strong>Alumni kami</strong> telah bekerja di berbagai institusi pendidikan, lembaga penelitian, dan organisasi Islam di seluruh Indonesia.</p>
                  </div>
                </div>
              </div>
            )}
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
                  <p>Daftar sekarang dan jadilah ahli dalam bidang Bahasa Arab</p>
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

export default PbaContent
