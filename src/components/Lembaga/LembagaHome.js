'use client'
import Link from 'next/link'

const LembagaHome = () => {
  const lembagaData = [
    {
      id: 1,
      name: "Lembaga Penjaminan Mutu",
      shortName: "LPM",
      description: "Menjamin kualitas pendidikan dan akreditasi institusi",
      icon: "fa-certificate",
      url: "https://lpm.iaipersisgarut.ac.id",
      color: "#006739",
      isExternal: true
    },
    {
      id: 2,
      name: "Lembaga Penelitian dan Pengabdian Masyarakat",
      shortName: "LPPM",
      description: "Mengelola penelitian dan pengabdian kepada masyarakat",
      icon: "fa-flask",
      url: "https://lppm.iaipersisgarut.ac.id",
      color: "#3498db",
      isExternal: true
    },
    {
      id: 3,
      name: "Perpustakaan",
      shortName: "Perpustakaan",
      description: "Pusat sumber belajar dan informasi digital kampus",
      icon: "fa-book",
      url: "#",
      color: "#9b59b6",
      isExternal: false
    },
    {
      id: 4,
      name: "Sistem Informasi Akademik",
      shortName: "SIAKAD",
      description: "Portal akademik mahasiswa dan dosen",
      icon: "fa-desktop",
      url: "#",
      color: "#e67e22",
      isExternal: false
    }
  ]

  return (
    <section id="lembaga-section" className="pt-70 pb-70 gray-bg">
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center pb-50">
              <h5>Lembaga & Layanan</h5>
              <h2>Layanan Institusi</h2>
              <p className="mt-3">Akses cepat ke berbagai lembaga dan layanan akademik IAIPI Garut</p>
            </div>
          </div>
        </div>

        {/* Lembaga Cards */}
        <div className="row">
          {lembagaData.map((lembaga, index) => (
            <div key={lembaga.id} className="col-lg-3 col-md-6 mb-4">
              <Link 
                href={lembaga.url}
                className="lembaga-card-home"
                target={lembaga.isExternal ? "_blank" : "_self"}
                rel={lembaga.isExternal ? "noopener noreferrer" : undefined}
                style={{ '--lembaga-color': lembaga.color }}
              >
                <div className="lembaga-card-header">
                  <div className="lembaga-icon" style={{ backgroundColor: lembaga.color }}>
                    <i className={`fa ${lembaga.icon}`}></i>
                  </div>
                  {lembaga.isExternal && (
                    <span className="external-badge">
                      <i className="fa fa-external-link"></i>
                    </span>
                  )}
                </div>
                
                <div className="lembaga-card-body">
                  <h4>{lembaga.shortName}</h4>
                  <h5>{lembaga.name}</h5>
                  <p>{lembaga.description}</p>
                </div>

                <div className="lembaga-card-footer">
                  <span className="access-link">
                    {lembaga.isExternal ? 'Kunjungi Website' : 'Akses Layanan'}
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="row mt-4">
          <div className="col-lg-12">
            <div className="lembaga-cta text-center">
              <p>Lihat semua lembaga dan unit kerja di IAIPI Garut</p>
              <Link href="/lembaga-departemen" className="main-btn">
                Lihat Semua Lembaga
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LembagaHome
