'use client'
import Link from 'next/link'
import Image from 'next/image'

const Ekonomi = () => {
  const prodiData = [
    {
      id: 1,
      name: "Ekonomi Syariah",
      code: "EKOSY",
      slug: "ekosy",
      image: "/images/prodi/ilha.jpg",
      description: "Mempersiapkan profesional dalam bidang ekonomi berbasis prinsip-prinsip syariah dengan pemahaman mendalam tentang teori ekonomi Islam dan aplikasinya.",
      akreditasi: "B",
      gelar: "S.E.",
      durasi: "8 Semester",
      color: "#e67e22",
      highlights: [
        "Perbankan Syariah",
        "Pasar Modal Syariah",
        "Ekonomi Makro Islam"
      ]
    },
    {
      id: 2,
      name: "Manajemen Keuangan Syariah",
      code: "MKS",
      slug: "mks",
      image: "/images/prodi/iat.jpg",
      description: "Fokus pada pengembangan kompetensi dalam pengelolaan keuangan berbasis syariah, perbankan syariah, dan lembaga keuangan syariah.",
      akreditasi: "B",
      gelar: "S.E.",
      durasi: "8 Semester",
      color: "#f39c12",
      highlights: [
        "Manajemen Investasi",
        "Keuangan Syariah",
        "Akuntansi Syariah"
      ]
    }
  ]

  return (
    <section id="fakultas-detail-section" className="pt-70 pb-70">
      <div className="container">
        {/* Faculty Overview */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="faculty-overview-card">
              <div className="overview-icon">
                <i className="fa fa-briefcase"></i>
              </div>
              <div className="overview-content">
                <h3>Fakultas Ekonomi dan Bisnis Islam</h3>
                <p className="lead">Fakultas Ekonomi dan Bisnis Islam merupakan fakultas yang fokus pada pengembangan ilmu ekonomi dan bisnis yang berlandaskan nilai-nilai Islam. Fakultas ini berkomitmen untuk menghasilkan lulusan yang kompeten dalam bidang ekonomi syariah dan keuangan Islam.</p>
                
                <div className="overview-stats">
                  <div className="stat-box">
                    <i className="fa fa-graduation-cap"></i>
                    <div>
                      <h5>2</h5>
                      <p>Program Studi</p>
                    </div>
                  </div>
                  <div className="stat-box">
                    <i className="fa fa-users"></i>
                    <div>
                      <h5>300+</h5>
                      <p>Mahasiswa</p>
                    </div>
                  </div>
                  <div className="stat-box">
                    <i className="fa fa-user"></i>
                    <div>
                      <h5>12+</h5>
                      <p>Dosen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program Studi Section */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="section-title text-center pb-40">
              <h5>Program Studi</h5>
              <h2>Pilih Program Studi Anda</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {prodiData.map((prodi, index) => (
            <div key={prodi.id} className="col-lg-6 mb-4">
              <div className="prodi-card-modern">
                {/* Akreditasi Badge */}
                <div className="akreditasi-badge" style={{ backgroundColor: prodi.color }}>
                  <span className="badge-grade">{prodi.akreditasi}</span>
                  <span className="badge-label">Akreditasi</span>
                </div>

                {/* Image */}
                <div className="prodi-image-wrapper">
                  <Image
                    src={prodi.image}
                    alt={prodi.name}
                    width={500}
                    height={350}
                    style={{
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
                  <div className="prodi-overlay">
                    <div className="prodi-code">{prodi.code}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="prodi-content">
                  <h4>{prodi.name}</h4>
                  <p className="prodi-description">{prodi.description}</p>

                  {/* Info Grid */}
                  <div className="prodi-info-grid">
                    <div className="info-item">
                      <i className="fa fa-award"></i>
                      <div>
                        <span className="label">Gelar</span>
                        <span className="value">{prodi.gelar}</span>
                      </div>
                    </div>
                    <div className="info-item">
                      <i className="fa fa-clock"></i>
                      <div>
                        <span className="label">Durasi</span>
                        <span className="value">{prodi.durasi}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="prodi-highlights">
                    {prodi.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-tag" style={{ borderColor: prodi.color }}>
                        <i className="fa fa-check"></i>
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href={`/fakultas/ekonomi/${prodi.slug}`} 
                    className="prodi-detail-btn"
                    style={{ backgroundColor: prodi.color }}
                  >
                    <span>Lihat Detail Program</span>
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visi Misi Section */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="visi-misi-faculty">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="vm-card">
                    <div className="vm-icon">
                      <i className="fa fa-eye"></i>
                    </div>
                    <div className="vm-content">
                      <h4>Visi</h4>
                      <p>Menjadi Fakultas terkemuka dalam pengembangan ilmu ekonomi dan bisnis berbasis nilai-nilai Islam yang unggul dan berdaya saing global pada tahun 2028.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="vm-card">
                    <div className="vm-icon">
                      <i className="fa fa-bullseye"></i>
                    </div>
                    <div className="vm-content">
                      <h4>Misi</h4>
                      <ul>
                        <li>Menyelenggarakan pendidikan ekonomi dan bisnis berbasis syariah</li>
                        <li>Mengembangkan riset dalam bidang ekonomi dan keuangan syariah</li>
                        <li>Melaksanakan pengabdian masyarakat melalui pemberdayaan ekonomi</li>
                        <li>Menjalin kerjasama dengan lembaga keuangan syariah</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="faculty-cta-footer">
              <div className="cta-content">
                <h4>Siap Bergabung dengan Fakultas Ekonomi & Bisnis Islam?</h4>
                <p>Daftarkan diri Anda sekarang dan jadilah profesional ekonomi syariah yang kompeten!</p>
              </div>
              <Link href="/pmb" className="cta-button">
                <i className="fa fa-edit"></i>
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ekonomi
