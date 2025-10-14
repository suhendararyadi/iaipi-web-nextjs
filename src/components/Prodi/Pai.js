'use client'
import { useState } from 'react'

const PaiContent = () => {
  const [activeTab, setActiveTab] = useState('profil')

  const profilLulusan = [
    { icon: "fa-graduation-cap", title: "Guru PAI", desc: "Pendidik PAI di sekolah/madrasah" },
    { icon: "fa-user", title: "Tenaga Kependidikan", desc: "Staff akademik dan administrasi" },
    { icon: "fa-mosque", title: "Penyuluh Agama", desc: "Da&apos;i dan mubaligh profesional" },
    { icon: "fa-book", title: "Peneliti Pendidikan", desc: "Ahli penelitian pendidikan Islam" }
  ]

  const fasilitasData = [
    {
      icon: "fa-laptop",
      title: "Lab Micro Teaching",
      items: ["Simulasi Pembelajaran", "Recording System", "Smart Classroom"]
    },
    {
      icon: "fa-book",
      title: "Perpustakaan PAI",
      items: ["Koleksi Buku PAI", "Jurnal Pendidikan", "Digital Library"]
    },
    {
      icon: "fa-desktop",
      title: "Lab Komputer",
      items: ["ICT Learning", "E-Learning Tools", "Internet 24/7"]
    },
    {
      icon: "fa-flask",
      title: "Ruang PPL",
      items: ["Praktek Mengajar", "Lesson Study", "Peer Teaching"]
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
                      <strong>B (Baik)</strong>
                    </div>
                  </div>
                  <div className="info-box">
                    <i className="fa fa-award"></i>
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
                  <p className="lead-text">Program Studi Pendidikan Agama Islam menyiapkan tenaga pendidik profesional dalam bidang PAI yang memiliki kompetensi pedagogik, kepribadian, sosial, dan profesional dengan basis keislaman yang kuat.</p>
                  
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

                  <h4 className="mt-5 mb-4">Kompetensi Lulusan</h4>
                  <div className="kompetensi-list">
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Kompetensi Pedagogik</h6>
                        <p>Menguasai metodologi pembelajaran PAI yang efektif dan inovatif</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Penguasaan Materi PAI</h6>
                        <p>Memahami materi Al-Quran, Hadis, Fiqih, Akidah Akhlak, dan SKI</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Teknologi Pembelajaran</h6>
                        <p>Mampu mengintegrasikan ICT dalam pembelajaran PAI</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Kepribadian Guru</h6>
                        <p>Memiliki akhlak mulia dan menjadi teladan bagi peserta didik</p>
                      </div>
                    </div>
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
                        <li>Kepala Sekolah/Madrasah</li>
                        <li>Wakil Kepala Sekolah</li>
                      </ul>
                    </div>
                    
                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-mosque"></i>
                      </div>
                      <h5>Lembaga Keagamaan</h5>
                      <ul>
                        <li>Penyuluh Agama</li>
                        <li>Da&apos;i dan Mubaligh</li>
                        <li>Ustadz/Ustadzah</li>
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
                      <h5>Media & Penelitian</h5>
                      <ul>
                        <li>Peneliti Pendidikan Islam</li>
                        <li>Penulis Buku PAI</li>
                        <li>Content Creator Islami</li>
                        <li>Editor Materi PAI</li>
                      </ul>
                    </div>
                  </div>

                  <div className="alumni-note mt-5">
                    <i className="fa fa-info-circle"></i>
                    <p><strong>Alumni kami</strong> telah bekerja di berbagai sekolah, madrasah, dan lembaga pendidikan Islam di seluruh Indonesia.</p>
                  </div>
                </div>
              </div>
            )}
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
