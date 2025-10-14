'use client'
import Link from 'next/link'
import Image from 'next/image'

const Ushuluddin = () => {
  const prodiData = [
    {
      id: 1,
      name: "Ilmu Hadis",
      code: "ILHA",
      slug: "ilha",
      image: "/images/prodi/ilha.jpg",
      description: "Fokus pada pengkajian dan penelitian hadis Nabi Muhammad SAW sebagai sumber kedua ajaran Islam.",
      akreditasi: "B",
      gelar: "S.Ag.",
      durasi: "8 Semester",
      color: "#006739",
      highlights: [
        "Lab Digital Hadis",
        "Perpustakaan Khusus Hadis",
        "Riset & Publikasi"
      ]
    },
    {
      id: 2,
      name: "Ilmu Al-Quran dan Tafsir",
      code: "IAT",
      slug: "iat",
      image: "/images/prodi/iat.jpg",
      description: "Berfokus pada pengkajian dan penelitian Al-Quran sebagai sumber utama ajaran Islam.",
      akreditasi: "B",
      gelar: "S.Ag.",
      durasi: "8 Semester",
      color: "#3498db",
      highlights: [
        "Kajian Tafsir Kontemporer",
        "Metode Tahfidz",
        "Qira'at Sab'ah"
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
                <i className="fa fa-book-open"></i>
              </div>
              <div className="overview-content">
                <h3>Fakultas Ushuluddin</h3>
                <p className="lead">Fakultas Ushuluddin merupakan fakultas yang fokus pada studi keislaman fundamental, khususnya dalam bidang Ilmu Hadis dan Ilmu Al-Quran Tafsir. Fakultas ini bertujuan menghasilkan sarjana muslim yang kompeten dalam bidang kajian sumber utama agama Islam.</p>
                
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
                    <i className="fa fa-user-tie"></i>
                    <div>
                      <h5>15+</h5>
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
                    href={`/fakultas/ushuluddin/${prodi.slug}`} 
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
                      <p>Menjadi pusat pengembangan ilmu-ilmu keislaman yang unggul dan terpercaya dalam bidang hadis dan Al-Quran pada tahun 2028.</p>
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
                        <li>Menyelenggarakan pendidikan berkualitas dalam bidang ilmu hadis dan Al-Quran</li>
                        <li>Melakukan penelitian untuk pengembangan ilmu-ilmu keislaman</li>
                        <li>Melaksanakan pengabdian kepada masyarakat berbasis keilmuan</li>
                        <li>Mengembangkan kerjasama dengan institusi dalam dan luar negeri</li>
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
                <h4>Siap Bergabung dengan Fakultas Ushuluddin?</h4>
                <p>Daftarkan diri Anda sekarang dan jadilah bagian dari generasi cendekiawan Muslim yang unggul!</p>
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

export default Ushuluddin
