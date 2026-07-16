'use client'
import { useState } from 'react'

// DRAFT: kurikulum/fasilitas/kompetensi/karir di bawah ini bersifat generik (pola umum
// prodi BKPI PTAI), BUKAN data resmi kampus. Data resmi kemungkinan tersedia di
// bkpi.iaipersisgarut.ac.id — wajib direview & disamakan sebelum publish.
const BkpiContent = () => {
  const [activeTab, setActiveTab] = useState('profil')

  const kurikulumSingkat = [
    {
      semester: "Semester 1",
      totalSKS: 19,
      fokus: "Dasar Keilmuan Islam & Psikologi",
      matkul: [
        { nama: "Pancasila dan Kewarganegaraan", sks: 3 },
        { nama: "Bahasa Indonesia", sks: 2 },
        { nama: "Ilmu Tauhid", sks: 2 },
        { nama: "Fiqih Ibadah", sks: 2 },
        { nama: "Ulumul Quran", sks: 2 },
        { nama: "Pengantar Bimbingan Konseling", sks: 2 },
        { nama: "Psikologi Umum", sks: 2 },
        { nama: "Psikologi Perkembangan", sks: 2 },
        { nama: "Bahasa Arab", sks: 2 }
      ]
    },
    {
      semester: "Semester 3",
      totalSKS: 24,
      fokus: "Pendalaman Konseling & Metodologi",
      matkul: [
        { nama: "Teori Konseling", sks: 2 },
        { nama: "Fiqih Muamalah", sks: 2 },
        { nama: "Psikologi Kepribadian", sks: 2 },
        { nama: "Teknik Bimbingan Kelompok", sks: 2 },
        { nama: "Asesmen Psikologis", sks: 2 },
        { nama: "Ushul Fiqih", sks: 2 },
        { nama: "Bimbingan Konseling Islami", sks: 2 },
        { nama: "Kepersisan", sks: 2 },
        { nama: "Psikologi Sosial", sks: 2 },
        { nama: "Bahasa Inggris Konseling", sks: 2 },
        { nama: "Etika Profesi Konseling", sks: 2 }
      ]
    },
    {
      semester: "Semester 5",
      totalSKS: 24,
      fokus: "Spesialisasi & Penelitian Bimbingan Konseling",
      matkul: [
        { nama: "Konseling Individual", sks: 2 },
        { nama: "Konseling Krisis & Trauma", sks: 2 },
        { nama: "Metodologi Penelitian Konseling", sks: 2 },
        { nama: "Bimbingan Karir", sks: 2 },
        { nama: "Konseling Keluarga Islami", sks: 2 },
        { nama: "Psikoterapi Islam", sks: 2 },
        { nama: "Statistik Konseling", sks: 2 },
        { nama: "Manajemen BK di Sekolah", sks: 2 },
        { nama: "Konseling Anak Berkebutuhan Khusus", sks: 2 },
        { nama: "Supervisi Konseling", sks: 2 }
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
      title: "Lab Konseling",
      items: ["Ruang Konseling Individual & Kelompok", "Kamera Observasi & Perekam Sesi", "Alat Tes Psikologi"]
    },
    {
      icon: "fa-book",
      title: "Perpustakaan Khusus",
      items: ["Koleksi Buku Konseling & Psikologi Islam", "Jurnal Nasional & Internasional", "E-Library 24/7"]
    },
    {
      icon: "fa-flask",
      title: "Lab Penelitian",
      items: ["Ruang Diskusi Kelompok", "Software Analisis Data", "Bimbingan Penelitian"]
    },
    {
      icon: "fa-heart",
      title: "Klinik Konseling Mahasiswa",
      items: ["Layanan Konseling Praktik Mahasiswa", "Pendampingan Kasus Nyata", "Supervisi Dosen Pembimbing"]
    }
  ]

  const profilLulusan = [
    { icon: "fa-graduation-cap", title: "Konselor Sekolah", desc: "Memberi layanan bimbingan konseling di satuan pendidikan" },
    { icon: "fa-heart", title: "Konselor Islami", desc: "Mendampingi klien dengan pendekatan psikologi berbasis nilai Islam" },
    { icon: "fa-user", title: "Konsultan Pengembangan Diri", desc: "Membantu individu mengembangkan potensi dan mengatasi masalah pribadi" },
    { icon: "fa-search", title: "Peneliti Bimbingan Konseling", desc: "Mengkaji isu konseling dan psikologi pendidikan" }
  ]

  return (
    <section id="prodi-detail-section" className="pt-70 pb-70">
      <div className="container">
        {/* Website Prodi Notice */}
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="prodi-website-notice">
              <div className="notice-icon">
                <i className="fa fa-globe"></i>
              </div>
              <div className="notice-content">
                <h5>Website Resmi Program Studi BKPI</h5>
                <p>Untuk informasi lebih lengkap dan terbaru tentang Program Studi Bimbingan Konseling Pendidikan Islam, kunjungi website resmi kami.</p>
              </div>
              <div className="notice-action">
                <a 
                  href="https://bkpi.iaipersisgarut.ac.id/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-visit-website"
                >
                  <span>Kunjungi Website</span>
                  <i className="fa fa-external-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Prodi Header */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="prodi-header-card">
              <div className="prodi-header-left">
                <div className="prodi-badge">BKPI</div>
                <div className="prodi-title-wrapper">
                  <h2>Program Studi Bimbingan Konseling Pendidikan Islam</h2>
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
                  <p className="lead-text">Program Studi Bimbingan Konseling Pendidikan Islam menyiapkan konselor pendidikan yang kompeten dalam layanan bimbingan dan konseling dengan pendekatan Islam. Program studi ini mempersiapkan mahasiswa untuk menjadi konselor yang mampu memahami, mendampingi, dan mengembangkan layanan bimbingan konseling secara komprehensif.</p>
                  
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
                        <h6>Penguasaan Teori Konseling</h6>
                        <p>Mampu menerapkan pendekatan konseling secara profesional dan etis</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Asesmen Psikologis</h6>
                        <p>Menguasai teknik asesmen untuk memahami kebutuhan klien</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Penelitian Bimbingan Konseling</h6>
                        <p>Mampu melakukan penelitian ilmiah dalam bidang bimbingan konseling</p>
                      </div>
                    </div>
                    <div className="kompetensi-item">
                      <div className="kompetensi-icon">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <div className="kompetensi-content">
                        <h6>Konseling Berbasis Nilai Islam</h6>
                        <p>Menguasai integrasi pendekatan psikologi dengan nilai-nilai keislaman</p>
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
                  <p className="mb-4">Kurikulum dirancang untuk menghasilkan lulusan yang kompeten dalam bidang bimbingan konseling pendidikan Islam dengan total 144 SKS.</p>
                  
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
                  <p className="mb-5">Lulusan Program Studi Bimbingan Konseling Pendidikan Islam memiliki peluang karir yang luas di berbagai sektor.</p>
                  
                  <div className="karir-sectors">
                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-university"></i>
                      </div>
                      <h5>Pendidikan Formal</h5>
                      <ul>
                        <li>Guru BK/Konselor Sekolah</li>
                        <li>Konselor Madrasah</li>
                        <li>Wali Kelas Pendamping</li>
                        <li>Koordinator BK</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-heart"></i>
                      </div>
                      <h5>Klinis & Layanan Masyarakat</h5>
                      <ul>
                        <li>Konselor di Puskesmas/Klinik</li>
                        <li>Konselor Pusat Rehabilitasi</li>
                        <li>Konselor Lembaga Sosial</li>
                        <li>Pendamping Psikososial</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-building"></i>
                      </div>
                      <h5>Korporasi & Organisasi</h5>
                      <ul>
                        <li>HR Development</li>
                        <li>Konsultan SDM</li>
                        <li>Trainer Pengembangan Diri</li>
                        <li>Employee Assistance Counselor</li>
                      </ul>
                    </div>

                    <div className="sector-card">
                      <div className="sector-icon">
                        <i className="fa fa-university"></i>
                      </div>
                      <h5>Pemerintahan & Lembaga Keagamaan</h5>
                      <ul>
                        <li>Kementerian Agama</li>
                        <li>Kementerian Sosial</li>
                        <li>Lembaga Dakwah</li>
                        <li>Konselor Pranikah KUA</li>
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
                  <p>Daftar sekarang dan jadilah ahli dalam bidang Bimbingan Konseling Pendidikan Islam</p>
                </div>
              </div>
              <div className="cta-right">
                <a 
                  href="https://bkpi.iaipersisgarut.ac.id/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-website"
                >
                  <i className="fa fa-globe"></i>
                  Website Prodi
                </a>
                <a href="/pmb" className="btn-daftar">
                  <i className="fa fa-edit"></i>
                  Daftar Sekarang
                </a>
                <a href="/kontak" className="btn-info">
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

export default BkpiContent
