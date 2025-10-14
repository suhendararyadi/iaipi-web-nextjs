'use client'
import Link from 'next/link'
import Image from 'next/image'

const Tarbiyah = () => {
  const prodiData = [
    {
      id: 1,
      name: "Pendidikan Agama Islam",
      code: "PAI",
      slug: "pai",
      image: "/images/prodi/ilha.jpg",
      description: "Menyiapkan tenaga pendidik profesional dalam bidang Pendidikan Agama Islam dengan kompetensi pedagogik dan keislaman yang mumpuni.",
      akreditasi: "B",
      gelar: "S.Pd.",
      durasi: "8 Semester",
      color: "#3498db",
      highlights: [
        "Metodologi Pembelajaran",
        "Kurikulum PAI",
        "PPL Terintegrasi"
      ]
    },
    {
      id: 2,
      name: "Pendidikan Guru Madrasah Ibtidaiyah",
      code: "PGMI",
      slug: "pgmi",
      image: "/images/prodi/fak-2.jpg",
      description: "Fokus pada penyiapan guru profesional untuk tingkat MI/SD dengan kompetensi pembelajaran terpadu berbasis nilai-nilai Islam.",
      akreditasi: "B",
      gelar: "S.Pd.",
      durasi: "8 Semester",
      color: "#27ae60",
      highlights: [
        "Pembelajaran Terpadu",
        "Media Pembelajaran",
        "Micro Teaching"
      ]
    },
    {
      id: 3,
      name: "Bimbingan Konseling Pendidikan Islam",
      code: "BKPI",
      slug: "bkpi",
      image: "/images/prodi/iat.jpg",
      description: "Menyiapkan konselor pendidikan kompeten dalam layanan bimbingan dan konseling dengan pendekatan Islam.",
      akreditasi: "B",
      gelar: "S.Pd.",
      durasi: "8 Semester",
      color: "#9b59b6",
      highlights: [
        "Psikologi Pendidikan",
        "Teknik Konseling",
        "Konseling Islami"
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
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="overview-content">
                <h3>Fakultas Tarbiyah</h3>
                <p className="lead">Fakultas Tarbiyah merupakan fakultas yang berfokus pada pengembangan pendidikan Islam dan pembentukan tenaga pendidik profesional yang memiliki basis keislaman yang kuat. Fakultas ini berkomitmen menghasilkan pendidik yang kompeten, berkarakter, dan siap berkontribusi dalam dunia pendidikan.</p>
                
                <div className="overview-stats">
                  <div className="stat-box">
                    <i className="fa fa-graduation-cap"></i>
                    <div>
                      <h5>3</h5>
                      <p>Program Studi</p>
                    </div>
                  </div>
                  <div className="stat-box">
                    <i className="fa fa-users"></i>
                    <div>
                      <h5>400+</h5>
                      <p>Mahasiswa</p>
                    </div>
                  </div>
                  <div className="stat-box">
                    <i className="fa fa-user-tie"></i>
                    <div>
                      <h5>20+</h5>
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

        <div className="row">
          {prodiData.map((prodi, index) => (
            <div key={prodi.id} className="col-lg-4 mb-4">
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
                    href={`/fakultas/tarbiyah/${prodi.slug}`} 
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
                      <p>Menjadi Fakultas terkemuka dalam menghasilkan tenaga pendidik yang profesional dan berkarakter Islami pada tahun 2028.</p>
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
                        <li>Menyelenggarakan pendidikan dan pembelajaran berbasis nilai-nilai Islam</li>
                        <li>Mengembangkan penelitian dalam bidang pendidikan Islam</li>
                        <li>Melaksanakan pengabdian kepada masyarakat dalam bidang pendidikan</li>
                        <li>Menjalin kerjasama dengan berbagai lembaga pendidikan</li>
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
                <h4>Siap Bergabung dengan Fakultas Tarbiyah?</h4>
                <p>Daftarkan diri Anda sekarang dan jadilah pendidik profesional yang berkarakter Islami!</p>
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

export default Tarbiyah
