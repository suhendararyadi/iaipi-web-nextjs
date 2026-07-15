'use client'
import { useState } from 'react'

// Profil, visi, SK pendirian, status akreditasi, dan kerangka kurikulum di bawah ini
// disampaikan langsung oleh pengelola prodi (bukan hasil ekstraksi dokumen PDF seperti
// PGMI). Rincian fasilitas belum tercantum spesifik di sumbernya dan masih berupa
// kerangka umum — perlu disesuaikan/diverifikasi dengan data sarana FTK sebelum publish.
const PaiContent = () => {
  const [activeTab, setActiveTab] = useState('profil')

  const profilLulusan = [
    { icon: "fa-graduation-cap", title: "Pendidik PAI Profesional", desc: "Mengajar Pendidikan Agama Islam di sekolah, madrasah, dan lembaga pendidikan Islam" },
    { icon: "fa-lightbulb-o", title: "Pengembang Pendidikan Islam", desc: "Mengembangkan kurikulum, media, dan program pendidikan Islam yang inovatif" },
    { icon: "fa-search", title: "Peneliti Pemula Pendidikan Islam", desc: "Melakukan penelitian awal dalam bidang pendidikan agama Islam" },
    { icon: "fa-institution", title: "Penggerak Dakwah & Pemberdayaan", desc: "Menggerakkan dakwah dan pemberdayaan masyarakat berbasis nilai Islam" },
    { icon: "fa-rocket", title: "Edupreneur Pendidikan Islam", desc: "Merintis lembaga pendidikan, pelatihan, atau konten dakwah digital" }
  ]

  const kurikulumHighlight = [
    { label: "Beban Studi", value: "144 SKS", icon: "fa-list-alt" },
    { label: "Masa Studi", value: "8 Semester", icon: "fa-calendar" },
    { label: "Pendekatan", value: "OBE (Outcome-Based Education)", icon: "fa-bullseye" },
    { label: "Acuan", value: "KKNI, SN-Dikti & MBKM", icon: "fa-balance-scale" }
  ]

  const strukturKurikulum = [
    { icon: "fa-institution", title: "Penguatan Keislaman & Turats", desc: "Pendalaman Al-Qur'an, Hadis, Fiqih, Akidah Akhlak, SKI, dan khazanah turats Islam" },
    { icon: "fa-child", title: "Ilmu Kependidikan & Pedagogik PAI", desc: "Teori pendidikan, psikologi belajar, dan metodologi pembelajaran PAI" },
    { icon: "fa-laptop", title: "Metodologi Pembelajaran & Teknologi Pendidikan", desc: "Strategi pembelajaran aktif serta pemanfaatan teknologi dalam pengajaran PAI" },
    { icon: "fa-flask", title: "Penelitian Pendidikan", desc: "Metodologi penelitian dan penulisan karya ilmiah bidang pendidikan Islam" },
    { icon: "fa-users", title: "Dakwah & Pemberdayaan Masyarakat", desc: "Praktik dakwah, pengabdian, dan pemberdayaan masyarakat berbasis nilai Islam" }
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
                        <h6>Kompetensi Pedagogik</h6>
                        <p>Menguasai metodologi pembelajaran PAI yang efektif dan inovatif</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Kompetensi Profesional</h6>
                        <p>Memahami materi Al-Quran, Hadis, Fiqih, Akidah Akhlak, SKI, dan mengintegrasikan teknologi dalam pembelajaran PAI</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Kompetensi Sosial</h6>
                        <p>Mampu berdakwah, berkomunikasi, dan memberdayakan masyarakat berbasis nilai Islam</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Kompetensi Kepribadian</h6>
                        <p>Memiliki akhlak mulia dan menjadi teladan bagi peserta didik</p>
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
                  <p className="mb-4">Kurikulum PAI 2024 dikembangkan dengan paradigma integratif — memadukan ilmu pendidikan Islam, penguatan turats, dan ilmu pengetahuan modern — berbasis Outcome-Based Education (OBE) dan mengacu pada KKNI, SN-Dikti, serta kebijakan Merdeka Belajar Kampus Merdeka (MBKM).</p>

                  <div className="row">
                    {kurikulumHighlight.map((item, idx) => (
                      <div key={idx} className="col-lg-3 col-md-6 mb-4">
                        <div className="info-box-small text-center">
                          <h6><i className={`fa ${item.icon}`}></i> {item.label}</h6>
                          <p>{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h4 className="mt-5 mb-4">Kelompok Mata Kuliah</h4>
                  <div className="row">
                    {strukturKurikulum.map((item, idx) => (
                      <div key={idx} className="col-lg-6 mb-4">
                        <div className="fasilitas-card-modern">
                          <div className="fasilitas-icon-modern">
                            <i className={`fa ${item.icon}`}></i>
                          </div>
                          <div className="fasilitas-content-modern">
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="alumni-note mt-4">
                    <i className="fa fa-info-circle"></i>
                    <p>Setiap mata kuliah diturunkan dari profil lulusan dan Capaian Pembelajaran Lulusan (CPL) yang mencakup sikap, pengetahuan, keterampilan umum, dan keterampilan khusus, sehingga membentuk kompetensi pedagogik, profesional, sosial, dan kepribadian yang seimbang.</p>
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
