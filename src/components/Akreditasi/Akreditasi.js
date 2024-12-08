'use client'
const Akreditasi = () => {
  return (
    <section id="akreditasi-part" className="pt-70 pb-110 gray-bg">
      <div className="container">
        <div className="row">
          {/* Bagian Kiri - Text */}
          <div className="col-lg-6">
            <div className="section-title mt-50">
              <h5>Akreditasi</h5>
              <h2>Akreditasi IAI PERSIS Garut</h2>
            </div>
            <div className="about-cont">
              <p className="mb-4">
                Berdasarkan <strong>SK Direktur Dewan Eksekutif BAN-PT Nomor 1089/SK/BAN-PT/Ak.Ppj/PT/XII/2023</strong>, 
                IAI PERSIS Garut mendapatkan akreditasi institusi dengan <strong>peringkat Unggul</strong>.
              </p>

              <h5 className="mb-3">Unduh Sertifikat Akreditasi:</h5>
              <ul className="akreditasi-list">
                <li>
                  <i className="fa fa-file-pdf-o text-danger me-2"></i>
                  <a href="#" target="_blank" rel="noopener noreferrer">Sertifikat Akreditasi Tahun 2023</a>
                </li>
                <li>
                  <i className="fa fa-file-pdf-o text-danger me-2"></i>
                  <a href="#" target="_blank" rel="noopener noreferrer">Sertifikat Akreditasi Tahun 2018</a>
                </li>
                <li>
                  <i className="fa fa-file-pdf-o text-danger me-2"></i>
                  <a href="#" target="_blank" rel="noopener noreferrer">Sertifikat Akreditasi Tahun 2014</a>
                </li>
                <li>
                  <i className="fa fa-file-pdf-o text-danger me-2"></i>
                  <a href="#" target="_blank" rel="noopener noreferrer">Sertifikat Akreditasi Tahun 2008</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bagian Kanan - Gambar Sertifikat */}
          <div className="col-lg-6">
            <div className="certificate-preview mt-50">
              <div className="certificate-card">
                <img 
                  src="/images/akreditasi/sertifikat-2023.jpg" 
                  alt="Sertifikat Akreditasi 2023" 
                  className="img-fluid"
                />
                <div className="certificate-caption text-center mt-3">
                  <p>Sertifikat Akreditasi IAI PERSIS Garut Tahun 2023-2028</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Akreditasi