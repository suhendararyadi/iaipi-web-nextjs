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
                Berdasarkan <strong>SK Direktur Dewan Eksekutif BAN-PT No. 732/SK/BAN-PT/Akred/PT/VIII/2021</strong>, 
                STAI Persis Garut, Kabupaten Garut mendapatkan akreditasi institusi dengan <strong>peringkat BAIK</strong>.
              </p>

              <h5 className="mb-3">Unduh Sertifikat Akreditasi:</h5>
              <ul className="akreditasi-list">
                <li>
                  <i className="fa fa-file-pdf-o text-danger me-2"></i>
                  <a href="https://drive.google.com/file/d/1WvHV5I-NWmfpsLy3f019_KhhThKby4iU/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Sertifikat Akreditasi STAI Persis Garut Tahun 2021</a>
                </li>
                <li>
                  <i className="fa fa-file-pdf-o text-danger me-2"></i>
                  <a href="https://drive.google.com/file/d/1uVstElurjfxnvJzI-PXXemYVo8No1Dg2/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Sertifikat Akreditasi Ekosy 2021</a>
                </li>
                <li>
                  <i className="fa fa-file-pdf-o text-danger me-2"></i>
                  <a href="https://drive.google.com/file/d/1N47EAZs4DtEaAtKWioSyw-9l8jtCVAUR/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Sertifikat Akreditasi PAI 2021</a>
                </li>
                <li>
                  <i className="fa fa-file-pdf-o text-danger me-2"></i>
                  <a href="https://drive.google.com/file/d/1EfR67I0cg15HZWtD7Doz42v17zJjgqXg/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Sertifikat Akreditasi ILHA 2021</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bagian Kanan - Gambar Sertifikat */}
          <div className="col-lg-6">
            <div className="certificate-preview mt-50">
              <div className="certificate-card">
                <img 
                  src="/images/akreditasi/sertifikat-2021.png" 
                  alt="Sertifikat Akreditasi 2021 - 2026" 
                  className="img-fluid"
                />
                <div className="certificate-caption text-center mt-3">
                  <p>Sertifikat Akreditasi STAI PERSIS Garut Tahun 2021-2026</p>
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