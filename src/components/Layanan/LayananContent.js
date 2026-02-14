'use client'
import { useState } from 'react'
import Link from 'next/link'

const LayananContent = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const layananData = [
    {
      id: 1,
      name: "Sistem Informasi Akademik",
      shortName: "SIAKAD",
      category: "akademik",
      description: "Portal akademik untuk mahasiswa dan dosen, meliputi KRS, KHS, jadwal kuliah, dan informasi akademik lainnya.",
      url: "https://siakad.iaipersisgarut.ac.id/",
      icon: "fa-graduation-cap",
      color: "#006739",
      status: "active"
    },
    {
      id: 2,
      name: "Sistem Informasi Manajemen LPPM",
      shortName: "SIM LPPM",
      category: "penelitian",
      description: "Sistem manajemen penelitian, publikasi, dan administrasi lembaga penelitian.",
      url: "https://sim-lppm.iaipersisgarut.ac.id",
      icon: "fa-flask",
      color: "#3498db",
      status: "active"
    },
    {
      id: 3,
      name: "Sistem Informasi Pengabdian Mahasiswa",
      shortName: "SIM P2M",
      category: "penelitian",
      description: "Platform untuk mengelola kegiatan pengabdian kepada masyarakat oleh mahasiswa.",
      url: "https://sim-lppm-p2m.iaipersisgarut.ac.id/",
      icon: "fa-users",
      color: "#27ae60",
      status: "active"
    },
    {
      id: 4,
      name: "Portal Jurnal Ilmiah",
      shortName: "Jurnal",
      category: "publikasi",
      description: "Akses ke jurnal-jurnal ilmiah yang diterbitkan oleh IAIPI Garut.",
      url: "https://jurnal.iaipigarut.ac.id/",
      icon: "fa-book",
      color: "#9b59b6",
      status: "active"
    },
    {
      id: 7,
      name: "Repository Institusional",
      shortName: "Repository",
      category: "publikasi",
      description: "Pusat arsip digital untuk karya ilmiah, skripsi, tesis, dan publikasi penelitian akademik Institut Agama Islam Persis Garut.",
      url: "https://repository.iaipersisgarut.ac.id",
      icon: "fa-database",
      color: "#34495e",
      status: "active"
    },
    {
      id: 13,
      name: "IAIPI Press",
      shortName: "Press",
      category: "publikasi",
      description: "Lembaga penerbitan kampus yang memfasilitasi publikasi buku ajar, monograf, dan karya ilmiah dalam bentuk cetak maupun digital.",
      url: "https://press.iaipersisgarut.ac.id",
      icon: "fa-print",
      color: "#e67e22",
      status: "active"
    },
    {
      id: 6,
      name: "Sistem Informasi Perpustakaan",
      shortName: "SIPERPUS",
      category: "akademik",
      description: "Layanan perpustakaan digital dengan koleksi buku, jurnal, dan referensi ilmiah yang mendukung pembelajaran.",
      url: "https://library.iaipersisgarut.ac.id",
      icon: "fa-book",
      color: "#e74c3c",
      status: "active"
    },
    {
      id: 5,
      name: "Portal E-Learning",
      shortName: "E-Learning",
      category: "akademik",
      description: "Platform pembelajaran online untuk kuliah jarak jauh dan materi digital.",
      url: "#",
      icon: "fa-laptop",
      color: "#2980b9",
      status: "coming"
    },
    {
      id: 8,
      name: "Portal Tracer Study",
      shortName: "Tracer Study",
      category: "alumni",
      description: "Sistem pelacakan alumni untuk mengukur kualitas lulusan dan penyerapan kerja.",
      url: "#",
      icon: "fa-line-chart",
      color: "#16a085",
      status: "coming"
    },
    {
      id: 9,
      name: "Sistem Informasi Keuangan",
      shortName: "SIKEU",
      category: "administrasi",
      description: "Portal pembayaran UKT, SPP, dan informasi keuangan mahasiswa.",
      url: "#",
      icon: "fa-money",
      color: "#f39c12",
      status: "coming"
    },
    {
      id: 10,
      name: "Portal Beasiswa",
      shortName: "Beasiswa",
      category: "mahasiswa",
      description: "Informasi beasiswa, pendaftaran, dan monitoring status penerima beasiswa.",
      url: "#",
      icon: "fa-trophy",
      color: "#d35400",
      status: "coming"
    },
    {
      id: 11,
      name: "Sistem Penjaminan Mutu",
      shortName: "SPMI",
      category: "administrasi",
      description: "Sistem monitoring dan evaluasi penjaminan mutu internal institusi.",
      url: "#",
      icon: "fa-certificate",
      color: "#8e44ad",
      status: "coming"
    },
    {
      id: 12,
      name: "Portal Alumni",
      shortName: "Alumni",
      category: "alumni",
      description: "Platform komunikasi dan networking alumni IAIPI Garut.",
      url: "#",
      icon: "fa-users",
      color: "#c0392b",
      status: "coming"
    }
  ]

  const categories = [
    { id: 'all', name: 'Semua Layanan', icon: 'fa-th' },
    { id: 'akademik', name: 'Akademik', icon: 'fa-graduation-cap' },
    { id: 'penelitian', name: 'Penelitian & P2M', icon: 'fa-flask' },
    { id: 'publikasi', name: 'Publikasi', icon: 'fa-book' },
    { id: 'mahasiswa', name: 'Kemahasiswaan', icon: 'fa-users' },
    { id: 'alumni', name: 'Alumni', icon: 'fa-user-plus' },
    { id: 'administrasi', name: 'Administrasi', icon: 'fa-cog' }
  ]

  const filteredLayanan = activeCategory === 'all' 
    ? layananData 
    : layananData.filter(item => item.category === activeCategory)

  return (
    <section id="layanan-section" className="pt-70 pb-70">
      <div className="container">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="section-title text-center">
              <h5>Layanan Digital</h5>
              <h2>Sistem Informasi IAIPI Garut</h2>
              <p className="mt-3">Akses berbagai layanan dan sistem informasi untuk mendukung aktivitas akademik, penelitian, dan administrasi.</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="category-filter">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <i className={`fa ${cat.icon}`}></i>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Layanan Cards */}
        <div className="row">
          {filteredLayanan.map((layanan, index) => (
            <div key={layanan.id} className="col-lg-4 col-md-6 mb-4">
              <div className="layanan-card">
                {/* Status Badge */}
                {layanan.status === 'coming' && (
                  <div className="status-badge coming-soon">
                    <i className="fa fa-clock-o"></i>
                    <span>Coming Soon</span>
                  </div>
                )}
                {layanan.status === 'active' && (
                  <div className="status-badge active">
                    <i className="fa fa-check-circle"></i>
                    <span>Aktif</span>
                  </div>
                )}

                {/* Card Header */}
                <div className="layanan-card-header">
                  <div className="layanan-icon" style={{ backgroundColor: layanan.color }}>
                    <i className={`fa ${layanan.icon}`}></i>
                  </div>
                </div>

                {/* Card Body */}
                <div className="layanan-card-body">
                  <h4>{layanan.shortName}</h4>
                  <h5>{layanan.name}</h5>
                  <p>{layanan.description}</p>
                </div>

                {/* Card Footer */}
                <div className="layanan-card-footer">
                  {layanan.status === 'active' ? (
                    <a
                      href={layanan.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="access-btn"
                      style={{ backgroundColor: layanan.color }}
                    >
                      <span>Akses Sistem</span>
                      <i className="fa fa-external-link"></i>
                    </a>
                  ) : (
                    <button className="access-btn disabled" disabled>
                      <span>Segera Hadir</span>
                      <i className="fa fa-lock"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="row mt-5">
          <div className="col-lg-10 mx-auto">
            <div className="layanan-info-box">
              <div className="info-icon">
                <i className="fa fa-info-circle"></i>
              </div>
              <div className="info-content">
                <h4>Butuh Bantuan?</h4>
                <p>Jika mengalami kesulitan dalam mengakses sistem atau memerlukan bantuan teknis, silakan hubungi <strong>Help Desk TI</strong> melalui WhatsApp di <a href="https://wa.me/62085123123670" target="_blank" rel="noopener noreferrer">085123123670</a> atau email ke <a href="mailto:rektorat@iaipersisgarut.ac.id">rektorat@iaipersisgarut.ac.id</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LayananContent
