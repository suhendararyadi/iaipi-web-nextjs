'use client'
import Link from 'next/link'
import Image from 'next/image'

const MagisterContent = () => {
  const prodiData = {
    id: 1,
    name: "Magister Pendidikan Agama Islam",
    code: "MPAI",
    slug: "mpai",
    image: "/images/prodi/ilha.jpg",
    description: "Program Magister PAI dirancang untuk menghasilkan ahli dan praktisi pendidikan Islam yang memiliki kedalaman ilmu, kemampuan riset, dan kepemimpinan dalam bidang pendidikan Islam.",
    akreditasi: "B",
    gelar: "M.Pd.",
    durasi: "4 Semester",
    color: "#006739",
    highlights: [
      "Riset & Publikasi",
      "Kelas Regular & Weekend",
      "Beasiswa Tersedia"
    ]
  }

  return (
    <section id="magister-section" className="pt-70 pb-70">
      <div className="container">
        {/* Program Overview */}
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto">
            <div className="faculty-overview-card">
              <div className="overview-icon">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="overview-content">
                <h3>Program Pascasarjana - Magister (S2)</h3>
                <p className="lead">Program Magister IAI PERSIS Garut merupakan jenjang pendidikan lanjutan yang dirancang untuk mengembangkan kompetensi dan keahlian profesional dalam bidang pendidikan Islam. Program ini menawarkan pendidikan berkualitas dengan kurikulum yang komprehensif dan relevan dengan kebutuhan pendidikan modern.</p>

                <div className="overview-stats">
                  <div className="stat-box">
                    <i className="fa fa-graduation-cap"></i>
                    <div>
                      <h5>1</h5>
                      <p>Program Studi</p>
                    </div>
                  </div>
                  <div className="stat-box">
                    <i className="fa fa-users"></i>
                    <div>
                      <h5>100+</h5>
                      <p>Mahasiswa</p>
                    </div>
                  </div>
                  <div className="stat-box">
                    <i className="fa fa-user"></i>
                    <div>
                      <h5>10+</h5>
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
              <h5>Program Studi Pascasarjana</h5>
              <h2>Magister Pendidikan Agama Islam</h2>
            </div>
          </div>
        </div>

        {/* MPAI Card */}
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-4">
            <div className="prodi-card-modern">
              {/* Akreditasi Badge */}
              <div className="akreditasi-badge" style={{ backgroundColor: prodiData.color }}>
                <span className="badge-grade">{prodiData.akreditasi}</span>
                <span className="badge-label">Akreditasi</span>
              </div>

              {/* Image */}
              <div className="prodi-image-wrapper">
                <Image
                  src={prodiData.image}
                  alt={prodiData.name}
                  width={700}
                  height={400}
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
                <div className="prodi-overlay">
                  <div className="prodi-code">{prodiData.code}</div>
                </div>
              </div>

              {/* Content */}
              <div className="prodi-content">
                <h4>{prodiData.name}</h4>
                <p className="prodi-description">{prodiData.description}</p>

                {/* Info Grid */}
                <div className="prodi-info-grid">
                  <div className="info-item">
                    <i className="fa fa-award"></i>
                    <div>
                      <span className="label">Gelar</span>
                      <span className="value">{prodiData.gelar}</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <i className="fa fa-clock"></i>
                    <div>
                      <span className="label">Durasi</span>
                      <span className="value">{prodiData.durasi}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="prodi-highlights">
                  {prodiData.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag" style={{ borderColor: prodiData.color }}>
                      <i className="fa fa-check"></i>
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Info Boxes */}
                <div className="row mt-4">
                  <div className="col-md-6 mb-3">
                    <div className="info-box-small">
                      <h6>Prospek Karir:</h6>
                      <ul>
                        <li><i className="fa fa-check-circle"></i> Dosen PAI</li>
                        <li><i className="fa fa-check-circle"></i> Peneliti Pendidikan</li>
                        <li><i className="fa fa-check-circle"></i> Konsultan Pendidikan</li>
                        <li><i className="fa fa-check-circle"></i> Pengembang Kurikulum</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="info-box-small">
                      <h6>Keunggulan:</h6>
                      <ul>
                        <li><i className="fa fa-check-circle"></i> Kurikulum Komprehensif</li>
                        <li><i className="fa fa-check-circle"></i> Dosen Berkualitas</li>
                        <li><i className="fa fa-check-circle"></i> Riset Terstruktur</li>
                        <li><i className="fa fa-check-circle"></i> Jaringan Alumni Luas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/magister/${prodiData.slug}`}
                  className="prodi-detail-btn"
                  style={{ backgroundColor: prodiData.color }}
                >
                  <span>Lihat Detail Program</span>
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
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
                      <p>Menjadi Prodi Magister Pendidikan Agama Islam (MPAI) yang unggul berbasis turats Islam di Jawa Barat pada Tahun 2033.</p>
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
                        <li>Menyelenggarakan perkuliahan dengan acuan turats Islam.</li>
                        <li>Melakukan riset dengan referensi utama turats Islam.</li>
                        <li>Menyelenggarakan pengabdian kepada masyarakat berbasis turats Islam.</li>
                        <li>Melakukan publikasi kepada masyarakat berbasis turats Islam.</li>
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
                <h4>Siap Melanjutkan Studi ke Jenjang Magister?</h4>
                <p>Daftarkan diri Anda sekarang dan raih gelar Magister Pendidikan Agama Islam!</p>
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

export default MagisterContent
