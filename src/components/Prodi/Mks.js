'use client'
import { useState } from 'react'

const MksContent = () => {
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
        { nama: "Pengantar Manajemen Keuangan Syariah", sks: 2 },
        { nama: "Ilmu Nahwu", sks: 2 },
        { nama: "Hadis Ilmu", sks: 2 },
        { nama: "Hadis Thaharah", sks: 2 }
      ]
    },
    {
      semester: "Semester 3",
      totalSKS: 24,
      fokus: "Pendalaman Manajemen Keuangan Syariah & Metodologi",
      matkul: [
        { nama: "Ulumul Hadits 3", sks: 2 },
        { nama: "Takhrij Hadits 1", sks: 2 },
        { nama: "Ilmu Ma'ajim", sks: 2 },
        { nama: "Tadwin Sunnah 1", sks: 2 },
        { nama: "Hadits 3", sks: 2 },
        { nama: "Ushul Tafsir", sks: 2 },
        { nama: "Tafsir 3", sks: 2 },
        { nama: "Ushul Fiqih", sks: 2 },
        { nama: "Hadits Ahkam 3", sks: 2 },
        { nama: "Fiqih 3", sks: 2 },
        { nama: "Kepersisan", sks: 2 }
      ]
    },
    {
      semester: "Semester 5",
      totalSKS: 24,
      fokus: "Spesialisasi & Penelitian Hadis",
      matkul: [
        { nama: "Sejarah dan Perkembangan Hadits di Indonesia", sks: 2 },
        { nama: "Digitalisasi Hadits", sks: 2 },
        { nama: "Model-Model Penelitian Hadits", sks: 2 },
        { nama: "Inkar Sunnah", sks: 2 },
        { nama: "Hadits dan Isu-isu Kontemporer", sks: 2 },
        { nama: "Hermeneutika dan Al-Quran", sks: 2 },
        { nama: "Ilmu Jarh Ta'dil 1", sks: 2 },
        { nama: "Hadits Ahkam 5", sks: 2 },
        { nama: "Metode Kritik Matan", sks: 2 },
        { nama: "Hadits 5", sks: 2 }
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
      icon: "fa-desktop",
      title: "Lab Digital Hadis",
      items: ["Software Maktabah Syamilah", "Akses Database Hadis Online", "Komputer & Internet"]
    },
    {
      icon: "fa-book",
      title: "Perpustakaan Khusus",
      items: ["Koleksi 500+ Kitab Hadis", "Jurnal Nasional & Internasional", "E-Library 24/7"]
    },
    {
      icon: "fa-flask",
      title: "Lab Penelitian",
      items: ["Ruang Diskusi Kelompok", "Software Analisis Data", "Bimbingan Penelitian"]
    },
    {
      icon: "fa-language",
      title: "Lab Bahasa Arab",
      items: ["Multimedia Learning", "Native Speaker", "Conversation Practice"]
    }
  ]

  const profilLulusan = [
    { icon: "fa-search", title: "Peneliti Hadis", desc: "Ahli dalam riset dan kajian hadis" },
    { icon: "fa-chalkboard-teacher", title: "Akademisi", desc: "Dosen dan pengajar ilmu hadis" },
    { icon: "fa-mosque", title: "Da'i & Mubaligh", desc: "Penyebar ajaran Islam berbasis hadis" },
    { icon: "fa-user-tie", title: "Konsultan Syariah", desc: "Ahli konsultasi hukum Islam" }
  ]

  return (
    <section id="prodi-detail-section" className="pt-70 pb-70">
      <div className="container">
        {/* Prodi Header */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="prodi-header-card">
              <div className="prodi-header-left">
                <div className="prodi-badge">MKS</div>
                <div className="prodi-title-wrapper">
                  <h2>Program Studi Manajemen Keuangan Syariah</h2>
                  <p className="prodi-subtitle">Fakultas Ekonomi & Bisnis Islam</p>
                </div>
              </div>
              <div className="prodi-header-right">
                <div className="quick-info">
                  <div className="info-box">
                    <i className="fa fa-certificate"></i>
                    <div>
                      <span className="label">Akreditasi</span>
                      <strong>B (Baik)</strong>
                    </div>
                  </div>
                  <div className="info-box">
                    <i className="fa fa-award"></i>
                    <div>
                      <span className="label">Gelar</span>
                      <strong>S.E.</strong>
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
                  <p className="lead-text">Program Studi Manajemen Keuangan Syariah fokus pada pengkajian dan penelitian hadis Nabi Muhammad SAW sebagai sumber kedua ajaran Islam. Program studi ini mempersiapkan mahasiswa untuk menjadi ahli dalam bidang hadis yang mampu memahami, meneliti, dan mengembangkan kajian hadis secara komprehensif.</p>
                  
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
                        <h6>Penguasaan Manajemen Keuangan Syariah</h6>
                        <p>Mampu memahami dan menganalisis hadis dengan metodologi yang tepat</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Kritik Sanad dan Matan</h6>
                        <p>Menguasai metode kritik hadis baik dari sisi sanad maupun matan</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Penelitian Hadis</h6>
                        <p>Mampu melakukan penelitian ilmiah dalam bidang ilmu hadis</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Bahasa Arab</h6>
                        <p>Menguasai bahasa Arab untuk memahami teks-teks hadis original</p>
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
                  <p className="mb-4">Kurikulum dirancang untuk menghasilkan lulusan yang kompeten dalam bidang ilmu hadis dengan total 144 SKS.</p>
                  
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
                  <p className="mb-5">Lulusan Program Studi Manajemen Keuangan Syariah memiliki peluang karir yang luas di berbagai sektor.</p>
                  
                  <div className="karir-sectors">
                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-university"></i>
                      </div>
                      <h5>Akademisi & Pendidikan</h5>
                      <ul>
                        <li>Dosen Manajemen Keuangan Syariah</li>
                        <li>Guru PAI</li>
                        <li>Peneliti Hadis</li>
                        <li>Asisten Riset</li>
                      </ul>
                    </div>
                    
                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-mosque"></i>
                      </div>
                      <h5>Lembaga Keagamaan</h5>
                      <ul>
                        <li>Mubaligh & Da'i</li>
                        <li>Konsultan Syariah</li>
                        <li>Pengurus Masjid</li>
                        <li>Lembaga Dakwah</li>
                      </ul>
                    </div>
                    
                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-landmark"></i>
                      </div>
                      <h5>Pemerintahan</h5>
                      <ul>
                        <li>Kementerian Agama</li>
                        <li>MUI (Majelis Ulama)</li>
                        <li>BAZNAS</li>
                        <li>Kantor Urusan Agama</li>
                      </ul>
                    </div>
                    
                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-book-reader"></i>
                      </div>
                      <h5>Media & Publikasi</h5>
                      <ul>
                        <li>Penulis Buku Islam</li>
                        <li>Editor Jurnal</li>
                        <li>Content Creator</li>
                        <li>Jurnalis Islami</li>
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
                  <p>Daftar sekarang dan jadilah ahli dalam bidang Manajemen Keuangan Syariah</p>
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

export default MksContent
