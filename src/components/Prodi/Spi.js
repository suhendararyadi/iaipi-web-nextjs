'use client'
import { useState } from 'react'

// DRAFT: seluruh konten di bawah ini (kurikulum, fasilitas, kompetensi, karir, gelar)
// bersifat generik (pola umum prodi Sejarah Peradaban Islam PTAI), BUKAN data resmi
// kampus. Wajib direview & diganti dengan data asli sebelum publish.
const SpiContent = () => {
  const [activeTab, setActiveTab] = useState('profil')

  const kurikulumSingkat = [
    {
      semester: "Semester 1",
      totalSKS: 19,
      fokus: "Dasar Keilmuan Islam & Sejarah",
      matkul: [
        { nama: "Pancasila dan Kewarganegaraan", sks: 3 },
        { nama: "Bahasa Indonesia", sks: 2 },
        { nama: "Ilmu Tauhid", sks: 2 },
        { nama: "Fiqih Ibadah", sks: 2 },
        { nama: "Ulumul Quran", sks: 2 },
        { nama: "Pengantar Sejarah Peradaban Islam", sks: 2 },
        { nama: "Ilmu Nahwu", sks: 2 },
        { nama: "Historiografi Islam", sks: 2 },
        { nama: "Sejarah Arab Pra-Islam", sks: 2 }
      ]
    },
    {
      semester: "Semester 3",
      totalSKS: 24,
      fokus: "Pendalaman Sejarah Peradaban Islam & Metodologi",
      matkul: [
        { nama: "Sejarah Islam Klasik", sks: 2 },
        { nama: "Sejarah Islam Pertengahan", sks: 2 },
        { nama: "Sejarah Islam Modern", sks: 2 },
        { nama: "Metodologi Sejarah", sks: 2 },
        { nama: "Arkeologi Islam", sks: 2 },
        { nama: "Ushul Fiqih", sks: 2 },
        { nama: "Peradaban Islam di Nusantara", sks: 2 },
        { nama: "Kepersisan", sks: 2 },
        { nama: "Sejarah Kebudayaan Arab", sks: 2 },
        { nama: "Bahasa Inggris Sejarah", sks: 2 },
        { nama: "Filsafat Sejarah", sks: 2 }
      ]
    },
    {
      semester: "Semester 5",
      totalSKS: 24,
      fokus: "Spesialisasi & Penelitian Peradaban Islam",
      matkul: [
        { nama: "Sejarah Dinasti Islam", sks: 2 },
        { nama: "Sejarah Pemikiran Islam", sks: 2 },
        { nama: "Metodologi Penelitian Sejarah", sks: 2 },
        { nama: "Sejarah Islam Kontemporer", sks: 2 },
        { nama: "Diplomatik & Paleografi Islam", sks: 2 },
        { nama: "Manuskrip & Naskah Kuno", sks: 2 },
        { nama: "Museologi Islam", sks: 2 },
        { nama: "Sejarah Peradaban Islam di Indonesia", sks: 2 },
        { nama: "Kajian Warisan Budaya Islam", sks: 2 },
        { nama: "Sejarah Sosial Politik Islam", sks: 2 }
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
      icon: "fa-university",
      title: "Lab Sejarah & Arkeologi",
      items: ["Koleksi Replika Artefak Islam", "Alat Dokumentasi Lapangan", "Software Analisis Sumber Sejarah"]
    },
    {
      icon: "fa-book",
      title: "Perpustakaan Khusus",
      items: ["Koleksi Manuskrip & Naskah Kuno", "Jurnal Nasional & Internasional", "E-Library 24/7"]
    },
    {
      icon: "fa-flask",
      title: "Lab Penelitian",
      items: ["Ruang Diskusi Kelompok", "Software Analisis Data", "Bimbingan Penelitian"]
    },
    {
      icon: "fa-map",
      title: "Ruang Kajian Peradaban",
      items: ["Koleksi Peta Sejarah Islam", "Multimedia Dokumenter", "Diskusi Kelompok Kajian"]
    }
  ]

  const profilLulusan = [
    { icon: "fa-book", title: "Sejarawan Islam", desc: "Ahli dalam riset dan penulisan sejarah peradaban Islam" },
    { icon: "fa-university", title: "Kurator Museum/Arsip", desc: "Mengelola koleksi sejarah dan budaya Islam" },
    { icon: "fa-graduation-cap", title: "Guru Sejarah Kebudayaan Islam", desc: "Mengajar SKI di sekolah/madrasah" },
    { icon: "fa-search", title: "Peneliti Peradaban Islam", desc: "Mengkaji perkembangan peradaban dan pemikiran Islam" }
  ]

  return (
    <section id="prodi-detail-section" className="pt-70 pb-70">
      <div className="container">
        {/* Prodi Header */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="prodi-header-card">
              <div className="prodi-header-left">
                <div className="prodi-badge">SPI</div>
                <div className="prodi-title-wrapper">
                  <h2>Program Studi Sejarah Peradaban Islam</h2>
                  <p className="prodi-subtitle">Fakultas Ushuluddin</p>
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
                    <i className="fa fa-trophy"></i>
                    <div>
                      <span className="label">Gelar</span>
                      <strong>S.Hum.</strong>
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
                  <p className="lead-text">Program Studi Sejarah Peradaban Islam mengkaji perkembangan sejarah, pemikiran, dan kebudayaan Islam dari masa klasik hingga kontemporer. Program studi ini mempersiapkan mahasiswa untuk menjadi ahli dalam bidang sejarah dan peradaban Islam yang mampu memahami, meneliti, dan mengembangkan kajian sejarah Islam secara komprehensif.</p>

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
                        <h6>Penguasaan Historiografi Islam</h6>
                        <p>Mampu menganalisis sumber dan penulisan sejarah Islam secara ilmiah</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Metodologi Penelitian Sejarah</h6>
                        <p>Menguasai metode penelitian sejarah dan kajian sumber primer</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Penelitian Peradaban Islam</h6>
                        <p>Mampu melakukan penelitian ilmiah dalam bidang sejarah dan peradaban Islam</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Bahasa Arab</h6>
                        <p>Menguasai bahasa Arab untuk memahami sumber sejarah dan manuskrip klasik</p>
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
                  <p className="mb-4">Kurikulum dirancang untuk menghasilkan lulusan yang kompeten dalam bidang sejarah peradaban Islam dengan total 144 SKS.</p>

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
                  <p className="mb-5">Lulusan Program Studi Sejarah Peradaban Islam memiliki peluang karir yang luas di berbagai sektor.</p>

                  <div className="karir-sectors">
                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-university"></i>
                      </div>
                      <h5>Akademisi & Pendidikan</h5>
                      <ul>
                        <li>Dosen Sejarah Peradaban Islam</li>
                        <li>Guru Sejarah Kebudayaan Islam</li>
                        <li>Peneliti Sejarah</li>
                        <li>Asisten Riset</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-archive"></i>
                      </div>
                      <h5>Warisan Budaya & Kearsipan</h5>
                      <ul>
                        <li>Kurator Museum Islam</li>
                        <li>Arsiparis</li>
                        <li>Pengelola Cagar Budaya</li>
                        <li>Konservator Naskah Kuno</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-book"></i>
                      </div>
                      <h5>Media & Publikasi</h5>
                      <ul>
                        <li>Penulis Buku Sejarah</li>
                        <li>Editor Jurnal Sejarah</li>
                        <li>Content Creator Sejarah Islam</li>
                        <li>Jurnalis Budaya</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-university"></i>
                      </div>
                      <h5>Pemerintahan & Lembaga</h5>
                      <ul>
                        <li>Kementerian Agama</li>
                        <li>Kementerian Kebudayaan</li>
                        <li>Lembaga Kearsipan Nasional</li>
                        <li>Lembaga Kajian Islam</li>
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
                  <p>Daftar sekarang dan jadilah ahli dalam bidang Sejarah Peradaban Islam</p>
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

export default SpiContent
