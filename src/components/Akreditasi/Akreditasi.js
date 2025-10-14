'use client'
import { useState } from 'react'
import Image from 'next/image'

const Akreditasi = () => {
  const [activeDoc, setActiveDoc] = useState(0)

  const certificates = [
    {
      id: 1,
      title: "Akreditasi Institusi",
      program: "STAI Persis Garut",
      grade: "B",
      gradeLabel: "BAIK",
      year: "2021-2026",
      sk: "732/SK/BAN-PT/Akred/PT/VIII/2021",
      image: "/images/akreditasi/sertifikat-2021.png",
      downloadUrl: "https://drive.google.com/file/d/1WvHV5I-NWmfpsLy3f019_KhhThKby4iU/view?usp=sharing",
      color: "#006739"
    },
    {
      id: 2,
      title: "Akreditasi Program Studi",
      program: "Ekonomi Syariah",
      grade: "B",
      gradeLabel: "BAIK",
      year: "2021-2026",
      sk: "Ekosy 2021",
      image: "/images/akreditasi/sertifikat-2021.png",
      downloadUrl: "https://drive.google.com/file/d/1uVstElurjfxnvJzI-PXXemYVo8No1Dg2/view?usp=sharing",
      color: "#ffc600"
    },
    {
      id: 3,
      title: "Akreditasi Program Studi",
      program: "Pendidikan Agama Islam",
      grade: "B",
      gradeLabel: "BAIK",
      year: "2021-2026",
      sk: "PAI 2021",
      image: "/images/akreditasi/sertifikat-2021.png",
      downloadUrl: "https://drive.google.com/file/d/1N47EAZs4DtEaAtKWioSyw-9l8jtCVAUR/view?usp=sharing",
      color: "#3498db"
    },
    {
      id: 4,
      title: "Akreditasi Program Studi",
      program: "Ilmu Hadits",
      grade: "B",
      gradeLabel: "BAIK",
      year: "2021-2026",
      sk: "ILHA 2021",
      image: "/images/akreditasi/sertifikat-2021.png",
      downloadUrl: "https://drive.google.com/file/d/1EfR67I0cg15HZWtD7Doz42v17zJjgqXg/view?usp=sharing",
      color: "#e74c3c"
    }
  ]

  const activeCert = certificates[activeDoc]

  return (
    <section id="akreditasi-part" className="pt-70 pb-70">
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center pb-50">
              <h5>Jaminan Kualitas</h5>
              <h2>Akreditasi BAN-PT</h2>
              <p className="mt-3">Terakreditasi <strong>BAIK (B)</strong> dari Badan Akreditasi Nasional Perguruan Tinggi</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row align-items-center">
          {/* Left Side - Certificate Display */}
          <div className="col-lg-6 mb-4">
            <div className="akreditasi-preview-card">
              {/* Grade Badge */}
              <div className="grade-badge">
                <div className="badge-content">
                  <div className="grade-letter">{activeCert.grade}</div>
                  <div className="grade-label">{activeCert.gradeLabel}</div>
                </div>
              </div>

              {/* Certificate Image */}
              <div className="certificate-image-wrapper">
                <div className="certificate-frame">
                  <Image
                    src={activeCert.image}
                    alt={`Sertifikat ${activeCert.program}`}
                    width={600}
                    height={800}
                    style={{
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
              </div>

              {/* Certificate Info */}
              <div className="certificate-info-card">
                <div className="info-icon">
                  <i className="fa fa-certificate"></i>
                </div>
                <div className="info-content">
                  <h5>{activeCert.title}</h5>
                  <h4>{activeCert.program}</h4>
                  <div className="info-meta">
                    <span><i className="fa fa-calendar"></i> {activeCert.year}</span>
                    <span><i className="fa fa-file-text"></i> SK: {activeCert.sk}</span>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="certificate-actions">
                <a 
                  href={activeCert.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn"
                >
                  <i className="fa fa-download"></i>
                  <span>Unduh Sertifikat</span>
                </a>
                <a 
                  href={activeCert.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  <i className="fa fa-eye"></i>
                  <span>Lihat Detail</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Certificate List */}
          <div className="col-lg-6">
            <div className="akreditasi-content">
              {/* Info Box */}
              <div className="akreditasi-info-box">
                <div className="info-icon-large">
                  <i className="fa fa-shield"></i>
                </div>
                <div className="info-text">
                  <h4>Terakreditasi BAN-PT</h4>
                  <p>Institut Agama Islam PERSIS Garut telah mendapatkan akreditasi institusi dan program studi dengan peringkat <strong>BAIK (B)</strong> dari Badan Akreditasi Nasional Perguruan Tinggi.</p>
                </div>
              </div>

              {/* Certificate List */}
              <div className="certificates-list">
                <h5 className="list-title">Pilih Sertifikat:</h5>
                {certificates.map((cert, index) => (
                  <div 
                    key={cert.id}
                    className={`certificate-item ${activeDoc === index ? 'active' : ''}`}
                    onClick={() => setActiveDoc(index)}
                  >
                    <div className="item-icon" style={{ backgroundColor: cert.color }}>
                      <i className="fa fa-certificate"></i>
                    </div>
                    <div className="item-content">
                      <h6>{cert.title}</h6>
                      <p>{cert.program}</p>
                      <div className="item-meta">
                        <span className="grade-mini">{cert.grade}</span>
                        <span className="year-mini">{cert.year}</span>
                      </div>
                    </div>
                    <div className="item-arrow">
                      <i className="fa fa-chevron-right"></i>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Cards */}
              <div className="akreditasi-stats">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fa fa-university"></i>
                  </div>
                  <div className="stat-content">
                    <h4>1</h4>
                    <p>Akreditasi Institusi</p>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fa fa-graduation-cap"></i>
                  </div>
                  <div className="stat-content">
                    <h4>8</h4>
                    <p>Program Studi Terakreditasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="akreditasi-footer-info">
              <div className="footer-icon">
                <i className="fa fa-info-circle"></i>
              </div>
              <div className="footer-content">
                <h5>Informasi Akreditasi</h5>
                <p>
                  Akreditasi merupakan bentuk pengakuan terhadap kualitas institusi dan program studi. 
                  IAI PERSIS Garut berkomitmen untuk terus meningkatkan kualitas pendidikan dan pelayanan. 
                  Untuk informasi lebih lanjut, hubungi <a href="mailto:admin@iaipersisgarut.ac.id">admin@iaipersisgarut.ac.id</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Akreditasi
