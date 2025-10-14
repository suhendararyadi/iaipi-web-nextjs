'use client'
import Link from 'next/link'
import Image from 'next/image'

const Fakultas = () => {
  const fakultasData = [
    {
      id: 1,
      name: "Fakultas Ushuluddin",
      slug: "ushuluddin",
      image: "/images/course/fak-1.jpg",
      description: "Fakultas yang fokus pada studi keislaman fundamental dalam bidang Ilmu Hadis dan Ilmu Al-Quran Tafsir.",
      prodi: ["Ilmu Hadis (ILHA)", "Ilmu Al-Quran dan Tafsir (IAT)"],
      icon: "fa-book",
      color: "#006739"
    },
    {
      id: 2,
      name: "Fakultas Tarbiyah",
      slug: "tarbiyah",
      image: "/images/course/fak-2.jpg",
      description: "Fakultas pendidikan Islam yang mencetak guru dan pendidik profesional dengan kompetensi pedagogik dan keilmuan yang solid.",
      prodi: ["Pendidikan Agama Islam (PAI)", "Pendidikan Guru MI (PGMI)", "Bimbingan Konseling Islam (BKPI)"],
      icon: "fa-graduation-cap",
      color: "#3498db"
    },
    {
      id: 3,
      name: "Fakultas Ekonomi & Bisnis Islam",
      slug: "ekonomi",
      image: "/images/course/fak-3.jpg",
      description: "Fakultas yang menggabungkan ilmu ekonomi modern dengan prinsip-prinsip syariah Islam.",
      prodi: ["Ekonomi Syariah", "Manajemen Keuangan Syariah (MKS)"],
      icon: "fa-briefcase",
      color: "#e67e22"
    }
  ]

  return (
    <section id="fakultas-section" className="pt-70 pb-70">
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center pb-50">
              <h5>Pendidikan Sarjana</h5>
              <h2>Fakultas di IAI PERSIS Garut</h2>
              <p className="mt-3">3 Fakultas dengan 8 Program Studi Terakreditasi BAN-PT</p>
            </div>
          </div>
        </div>

        {/* Fakultas Cards */}
        <div className="row">
          {fakultasData.map((fakultas, index) => (
            <div key={fakultas.id} className="col-lg-4 col-md-6 mb-4">
              <div className="fakultas-card" data-aos="fade-up" data-aos-delay={index * 100}>
                {/* Card Image */}
                <div className="fakultas-image-wrapper">
                  <Image
                    src={fakultas.image}
                    alt={fakultas.name}
                    width={400}
                    height={300}
                    style={{
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
                  <div className="fakultas-overlay">
                    <div className="fakultas-icon" style={{ backgroundColor: fakultas.color }}>
                      <i className={`fa ${fakultas.icon}`}></i>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="fakultas-content">
                  <h3>{fakultas.name}</h3>
                  <p className="fakultas-description">{fakultas.description}</p>

                  {/* Program Studi List */}
                  <div className="prodi-list">
                    <h6>Program Studi:</h6>
                    <ul>
                      {fakultas.prodi.map((prodi, idx) => (
                        <li key={idx}>
                          <i className="fa fa-check-circle"></i>
                          <span>{prodi}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link href={`/fakultas/${fakultas.slug}`} className="fakultas-btn">
                    <span>Lihat Detail</span>
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>

                {/* Badge */}
                <div className="fakultas-badge" style={{ backgroundColor: fakultas.color }}>
                  {fakultas.prodi.length} Prodi
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Stats */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="fakultas-stats-wrapper">
              <div className="fakultas-stat-item">
                <div className="stat-icon">
                  <i className="fa fa-university"></i>
                </div>
                <div className="stat-content">
                  <h4>3</h4>
                  <p>Fakultas</p>
                </div>
              </div>
              <div className="fakultas-stat-item">
                <div className="stat-icon">
                  <i className="fa fa-graduation-cap"></i>
                </div>
                <div className="stat-content">
                  <h4>8</h4>
                  <p>Program Studi</p>
                </div>
              </div>
              <div className="fakultas-stat-item">
                <div className="stat-icon">
                  <i className="fa fa-certificate"></i>
                </div>
                <div className="stat-content">
                  <h4>B</h4>
                  <p>Akreditasi</p>
                </div>
              </div>
              <div className="fakultas-stat-item">
                <div className="stat-icon">
                  <i className="fa fa-users"></i>
                </div>
                <div className="stat-content">
                  <h4>1000+</h4>
                  <p>Mahasiswa Aktif</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="fakultas-cta">
              <div className="cta-icon">
                <i className="fa fa-info-circle"></i>
              </div>
              <div className="cta-content">
                <h4>Butuh Informasi Lebih Lanjut?</h4>
                <p>Hubungi bagian akademik untuk konsultasi program studi yang sesuai dengan minat Anda.</p>
              </div>
              <div className="cta-action">
                <Link href="/contact" className="cta-btn">
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fakultas
