'use client'
import { useState } from 'react'

const VisiMisi = () => {
  const [activeTab, setActiveTab] = useState('visi')

  return (
    <section id="visi-misi-section" className="pt-70 pb-70 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center pb-40">
              <h5>Identitas Institusi</h5>
              <h2>Visi, Misi, dan Tujuan</h2>
              <p>Fondasi dan arah pengembangan Institut Agama Islam PERSIS Garut</p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="visi-misi-tabs">
              <button 
                className={`tab-btn ${activeTab === 'visi' ? 'active' : ''}`}
                onClick={() => setActiveTab('visi')}
              >
                <i className="fa fa-eye"></i>
                <span>Visi</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'misi' ? 'active' : ''}`}
                onClick={() => setActiveTab('misi')}
              >
                <i className="fa fa-bullseye"></i>
                <span>Misi</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'tujuan' ? 'active' : ''}`}
                onClick={() => setActiveTab('tujuan')}
              >
                <i className="fa fa-flag"></i>
                <span>Tujuan</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'motto' ? 'active' : ''}`}
                onClick={() => setActiveTab('motto')}
              >
                <i className="fa fa-star"></i>
                <span>Moto & Nilai</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="row">
          <div className="col-lg-12">
            {/* Visi Tab */}
            {activeTab === 'visi' && (
              <div className="tab-content-wrapper animate-fade-in">
                <div className="visi-card">
                  <div className="card-icon-large">
                    <i className="fa fa-eye"></i>
                  </div>
                  <h3 className="text-center mb-4">VISI</h3>
                  <div className="visi-statement">
                    <h4>Menjadi Kampus Unggul Pengemban Turats Islam pada Tahun 2028 di Indonesia</h4>
                  </div>
                  <div className="visi-description mt-4">
                    <p>Visi ini menegaskan komitmen IAI PERSIS Garut untuk menjadi institusi pendidikan tinggi Islam yang unggul dalam pelestarian, pengembangan, dan penyebaran turats (warisan) Islam yang autentik di Indonesia.</p>
                  </div>
                </div>
              </div>
            )}

        {/* Misi */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="section-title">
              <h3>MISI</h3>
            </div>
            <div className="about-cont">
              <ol type="a" className="mission-list">
                <p></p>
                <li>a. Menjaga turats Islam sebagaimana telah dijalankan oleh pendiri dan aktivis gerakan PERSIS dan mensyiarkannya pada masyarakat lokal, nasional, dan internasional;</li>
                <li>b. Turut aktif dalam menjaga dan meningkatkan harkat manusia dalam upaya meneguhkan nilai-nilai kemanusiaan yang beradab;</li>
                <li>c. Ikut berperan sebagai pusat pengembangan dakwah PERSIS untuk membina umat yang beradab, berilmu dan memiliki kemandirian;</li>
                <li>d. Mendukung pengembangan Jawa Barat sebagai wilayah yang harmonis, berbudaya Sunda, serta religius;</li>
                <li>e. Menyelenggarakan pendidikan, penelitian dan pengabdian masyarakat secara profesional dengan menerapkan pembelajaran blended learning, serta mengembangkan peserta didik agar menjadi lulusan yang beriman, bertaqwa dan berakhlak mulia, berwawasan dan berkemampuan dalam ilmu pengetahuan dan teknologi mutakhir.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Tujuan */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="section-title">
              <h3>TUJUAN</h3>
            </div>
            <div className="about-cont">
              <ol type="a" className="mission-list">
                <p></p>
                <li>a. Menghasilkan dan mengembangkan kajian khusus turats Islam yang relevan dengan perkembangan zaman, serta turut serta menyebarluaskannya pada masyarakat lokal, nasional, dan internasional;</li>
                <li>b. Mewujudkan civitas akademika yang berdakwah kemanusiaan dalam menjaga dan meningkatkan harkat manusia untuk meneguhkan nilai-nilai kemanusiaan yang beradab;</li>
                <li>c. Mewujudkan kampus sebagai pusat pengembangan dakwah PERSIS untuk membina umat yang beradab, berilmu dan memiliki kemandirian;</li>
                <li>d. Mewujudkan Jawa Barat sebagai wilayah yang harmonis, berbudaya Sunda, serta religius;</li>
                <li>e. Menghasilkan lulusan yang beriman, bertaqwa dan berakhlak mulia, berwawasan dan berkemampuan dalam ilmu pengetahuan dan teknologi mutakhir, dengan menerapkan pembelajaran blended learning.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Motto & Nilai */}
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title">
              <h3>MOTO</h3>
            </div>
            <div className="about-cont">
              <p className="motto-text">
                Kampus Saintek Dakwah dalam Bidang Keilmuan Turats
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title">
            <h3>Nilai-nilai</h3>
            </div>
            <div className="about-cont">
              <ol type="a" className="value-list">
                <li>a. Alquran dan Sunah;</li>
                <li>b. Regulasi pemerintah;</li>
                <li>c. Budaya lokal;</li>
                <li>d. Perkembangan ilmu pengetahuan dan teknologi mutakhir;</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisiMisi