'use client'
import Image from 'next/image'
import Link from 'next/link'

const AboutContent = () => {
  return (
    <section id="about-page" className="pt-70 pb-70">
      <div className="container">
        {/* Main About Content */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <div className="about-content-modern">
              <div className="section-title">
                <h5>Tentang Kami</h5>
                <h2>Institut Agama Islam PERSIS Garut</h2>
              </div>
              <div className="about-text-modern">
                <p className="lead-text">
                  IAI PERSIS Garut adalah perguruan tinggi Islam yang menyelenggarakan pendidikan akademik dan profesional dalam kelompok disiplin agama, ilmu pengetahuan, teknologi dan kesenian.
                </p>
                <p>
                  Berdiri di kota Garut, Jawa Barat, kami berkomitmen untuk mencetak lulusan yang tidak hanya unggul dalam ilmu pengetahuan, tetapi juga memiliki akhlak mulia dan pemahaman Islam yang mendalam.
                </p>
                
                {/* Key Points */}
                <div className="about-features mt-4">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fa fa-book"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Berbasis Alquran & Sunah</h5>
                      <p>Pendidikan yang berlandaskan pada Alquran, Sunah, dan tidak bertentangan dengan keduanya.</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fa fa-graduation-cap"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Akreditasi B BAN-PT</h5>
                      <p>Terakreditasi B oleh Badan Akreditasi Nasional Perguruan Tinggi.</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fa fa-users"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Lingkungan Islami</h5>
                      <p>Kampus dengan nuansa religius yang mendukung pengembangan karakter Islami.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image-modern">
              <div className="image-wrapper">
                <Image 
                  src="/images/about/about-2.jpg" 
                  alt="Kampus IAI PERSIS Garut"
                  width={600}
                  height={500}
                  className="main-image"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '12px'
                  }}
                />
                <div className="image-badge">
                  <div className="badge-content">
                    <i className="fa fa-star"></i>
                    <h4>Kampus Saintek Dakwah</h4>
                    <p>Turats Islam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="section-title text-center pb-40">
              <h5>Keunggulan Kami</h5>
              <h2>Mengapa Memilih IAI PERSIS Garut?</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="why-choose-card">
              <div className="card-icon">
                <i className="fa fa-trophy"></i>
              </div>
              <h4>Beasiswa Penuh</h4>
              <p>Program beasiswa hingga 100% untuk hafidz Al-Qur&apos;an minimal 15 juz dan prestasi akademik.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="why-choose-card">
              <div className="card-icon">
                <i className="fa fa-certificate"></i>
              </div>
              <h4>Program S1 & S2</h4>
              <p>Tersedia program Sarjana (S1) dan Magister (S2) dengan konsentrasi keilmuan yang beragam.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="why-choose-card">
              <div className="card-icon">
                <i className="fa fa-university"></i>
              </div>
              <h4>Fasilitas Modern</h4>
              <p>Kampus dengan fasilitas lengkap: perpustakaan digital, lab komputer, dan ruang kelas ber-AC.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="why-choose-card">
              <div className="card-icon">
                <i className="fa fa-flask"></i>
              </div>
              <h4>Penelitian Aktif</h4>
              <p>8 jurnal ilmiah terindex SINTA dan Google Scholar untuk mendukung penelitian mahasiswa.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="why-choose-card">
              <div className="card-icon">
                <i className="fa fa-briefcase"></i>
              </div>
              <h4>Career Development</h4>
              <p>Program pelatihan soft skill dan career center untuk persiapan dunia kerja.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="why-choose-card">
              <div className="card-icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <h4>Lokasi Strategis</h4>
              <p>Terletak di Garut, Jawa Barat dengan akses mudah dan lingkungan yang kondusif.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent