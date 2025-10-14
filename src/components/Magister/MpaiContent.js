'use client'
import { useState } from 'react'

const MpaiContent = () => {
  const [activeTab, setActiveTab] = useState('profil')

  const profilLulusan = [
    { icon: "fa-graduation-cap", title: "Dosen PAI", desc: "Pendidik tingkat perguruan tinggi" },
    { icon: "fa-search", title: "Peneliti", desc: "Ahli penelitian pendidikan Islam" },
    { icon: "fa-user", title: "Konsultan Pendidikan", desc: "Ahli konsultasi pendidikan" },
    { icon: "fa-book", title: "Pengembang Kurikulum", desc: "Ahli pengembangan kurikulum PAI" }
  ]

  const fasilitasData = [
    {
      icon: "fa-book",
      title: "Perpustakaan Pascasarjana",
      items: ["Koleksi Buku S2", "Jurnal Internasional", "Digital Library"]
    },
    {
      icon: "fa-desktop",
      title: "Lab Penelitian",
      items: ["Ruang Riset", "Software Analisis Data", "Bimbingan Penelitian"]
    },
    {
      icon: "fa-laptop",
      title: "Ruang Kuliah Modern",
      items: ["Smart Classroom", "AC & Proyektor", "Free WiFi"]
    },
    {
      icon: "fa-users",
      title: "Diskusi & Seminar",
      items: ["Ruang Seminar", "Forum Diskusi", "Kuliah Tamu"]
    }
  ]

  return (
    <section id="prodi-detail-section" className="pt-70 pb-70">
      <div className="container">
        {/* Prodi Header */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="prodi-header-card">
              <div className="prodi-header-left">
                <div className="prodi-badge">MPAI</div>
                <div className="prodi-title-wrapper">
                  <h2>Magister Pendidikan Agama Islam</h2>
                  <p className="prodi-subtitle">Program Pascasarjana</p>
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
                      <strong>M.Pd.</strong>
                    </div>
                  </div>
                  <div className="info-box">
                    <i className="fa fa-calendar"></i>
                    <div>
                      <span className="label">Durasi</span>
                      <strong>2 Tahun</strong>
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
                  <p className="lead-text">Program Magister Pendidikan Agama Islam dirancang untuk menghasilkan ahli dan praktisi pendidikan Islam yang memiliki kedalaman ilmu, kemampuan riset, dan kepemimpinan dalam bidang pendidikan Islam. Program ini menggabungkan teori pendidikan modern dengan nilai-nilai Islam autentik.</p>
                  
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
                        <h6>Penguasaan Teori Pendidikan Islam</h6>
                        <p>Memahami konsep dan teori pendidikan Islam secara mendalam</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Kemampuan Penelitian</h6>
                        <p>Mampu melakukan penelitian ilmiah dengan metodologi yang tepat</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Kepemimpinan Pendidikan</h6>
                        <p>Memiliki kemampuan memimpin dan mengelola lembaga pendidikan</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Publikasi Ilmiah</h6>
                        <p>Mampu menulis dan mempublikasikan karya ilmiah di jurnal nasional/internasional</p>
                      </div>
                    </div>
                  </div>

                  {/* Keunggulan Program */}
                  <h4 className="mt-5 mb-4">Keunggulan Program</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="info-box-small">
                        <h6><i className="fa fa-star"></i> Fleksibilitas Waktu</h6>
                        <p>Tersedia kelas regular (weekday) dan kelas weekend untuk profesional yang bekerja</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="info-box-small">
                        <h6><i className="fa fa-star"></i> Dosen Berkualitas</h6>
                        <p>Dosen berpendidikan doktor (S3) dengan pengalaman riset yang luas</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="info-box-small">
                        <h6><i className="fa fa-star"></i> Beasiswa Tersedia</h6>
                        <p>Program beasiswa untuk mahasiswa berprestasi dan kurang mampu</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="info-box-small">
                        <h6><i className="fa fa-star"></i> Jaringan Alumni</h6>
                        <p>Akses ke jaringan alumni yang bekerja di berbagai institusi pendidikan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FASILITAS TAB */}
            {activeTab === 'fasilitas' && (
              <div className="tab-content-modern fade-in">
                <div className="content-card">
                  <h3 className="content-title">Fasilitas Program Studi</h3>
                  <p className="mb-5">Didukung oleh fasilitas modern untuk menunjang pembelajaran dan penelitian mahasiswa pascasarjana.</p>
                  
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
                  <p className="mb-5">Lulusan Magister PAI memiliki peluang karir yang luas di berbagai sektor pendidikan dan penelitian.</p>
                  
                  <div className="karir-sectors">
                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-university"></i>
                      </div>
                      <h5>Perguruan Tinggi</h5>
                      <ul>
                        <li>Dosen PAI</li>
                        <li>Dosen Pendidikan Islam</li>
                        <li>Asisten Profesor</li>
                        <li>Peneliti Senior</li>
                      </ul>
                    </div>
                    
                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-search"></i>
                      </div>
                      <h5>Lembaga Penelitian</h5>
                      <ul>
                        <li>Peneliti Pendidikan</li>
                        <li>Konsultan Riset</li>
                        <li>Analis Kebijakan</li>
                        <li>Editor Jurnal</li>
                      </ul>
                    </div>
                    
                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-briefcase"></i>
                      </div>
                      <h5>Manajemen Pendidikan</h5>
                      <ul>
                        <li>Kepala Sekolah/Madrasah</li>
                        <li>Pengawas Pendidikan</li>
                        <li>Konsultan Pendidikan</li>
                        <li>Trainer Professional</li>
                      </ul>
                    </div>
                    
                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-book"></i>
                      </div>
                      <h5>Pengembangan & Penulisan</h5>
                      <ul>
                        <li>Pengembang Kurikulum</li>
                        <li>Penulis Buku Pendidikan</li>
                        <li>Content Developer</li>
                        <li>Editor Materi Ajar</li>
                      </ul>
                    </div>
                  </div>

                  <div className="alumni-note mt-5">
                    <i className="fa fa-info-circle"></i>
                    <p><strong>Alumni kami</strong> telah bekerja sebagai dosen, peneliti, dan pemimpin di berbagai perguruan tinggi dan lembaga pendidikan di seluruh Indonesia.</p>
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
                  <p>Daftar sekarang dan raih gelar Magister Pendidikan Agama Islam</p>
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

export default MpaiContent
