'use client'
import { useState } from 'react'

const VisiMisi = () => {
  const [activeTab, setActiveTab] = useState('visi')

  const misiItems = [
    { icon: "fa-book-open", text: "Menjaga turats Islam sebagaimana telah dijalankan oleh pendiri dan aktivis gerakan PERSIS dan mensyiarkannya pada masyarakat lokal, nasional, dan internasional" },
    { icon: "fa-users", text: "Turut aktif dalam menjaga dan meningkatkan harkat manusia dalam upaya meneguhkan nilai-nilai kemanusiaan yang beradab" },
    { icon: "fa-bullhorn", text: "Ikut berperan sebagai pusat pengembangan dakwah PERSIS untuk membina umat yang beradab, berilmu dan memiliki kemandirian" },
    { icon: "fa-map", text: "Mendukung pengembangan Jawa Barat sebagai wilayah yang harmonis, berbudaya Sunda, serta religius" },
    { icon: "fa-graduation-cap", text: "Menyelenggarakan pendidikan, penelitian dan pengabdian masyarakat secara profesional dengan menerapkan pembelajaran blended learning" }
  ]

  const tujuanItems = [
    { icon: "fa-lightbulb", text: "Menghasilkan dan mengembangkan kajian khusus turats Islam yang relevan dengan perkembangan zaman" },
    { icon: "fa-heart", text: "Mewujudkan civitas akademika yang berdakwah kemanusiaan dalam menjaga dan meningkatkan harkat manusia" },
    { icon: "fa-home", text: "Mewujudkan kampus sebagai pusat pengembangan dakwah PERSIS untuk membina umat yang beradab" },
    { icon: "fa-globe", text: "Mewujudkan Jawa Barat sebagai wilayah yang harmonis, berbudaya Sunda, serta religius" },
    { icon: "fa-trophy", text: "Menghasilkan lulusan yang beriman, bertaqwa dan berakhlak mulia, berwawasan dan berkemampuan dalam ilmu pengetahuan dan teknologi mutakhir" }
  ]

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

            {/* Misi Tab */}
            {activeTab === 'misi' && (
              <div className="tab-content-wrapper animate-fade-in">
                <div className="misi-card">
                  <h3 className="text-center mb-5">MISI</h3>
                  <div className="row">
                    {misiItems.map((item, index) => (
                      <div key={index} className="col-lg-6 mb-4">
                        <div className="misi-item">
                          <div className="misi-icon">
                            <i className={`fa ${item.icon}`}></i>
                          </div>
                          <div className="misi-content">
                            <span className="misi-number">{index + 1}</span>
                            <p>{item.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tujuan Tab */}
            {activeTab === 'tujuan' && (
              <div className="tab-content-wrapper animate-fade-in">
                <div className="tujuan-card">
                  <h3 className="text-center mb-5">TUJUAN</h3>
                  <div className="row">
                    {tujuanItems.map((item, index) => (
                      <div key={index} className="col-lg-6 mb-4">
                        <div className="tujuan-item">
                          <div className="tujuan-icon">
                            <i className={`fa ${item.icon}`}></i>
                          </div>
                          <div className="tujuan-content">
                            <span className="tujuan-number">{index + 1}</span>
                            <p>{item.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Moto & Nilai Tab */}
            {activeTab === 'motto' && (
              <div className="tab-content-wrapper animate-fade-in">
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="motto-card">
                      <div className="card-icon-medium">
                        <i className="fa fa-star"></i>
                      </div>
                      <h3 className="text-center mb-4">MOTO</h3>
                      <div className="motto-statement">
                        <h4>Kampus Saintek Dakwah dalam Bidang Keilmuan Turats</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="nilai-card">
                      <div className="card-icon-medium">
                        <i className="fa fa-check-circle"></i>
                      </div>
                      <h3 className="text-center mb-4">NILAI-NILAI</h3>
                      <div className="nilai-list">
                        <div className="nilai-item">
                          <i className="fa fa-quran"></i>
                          <span>Alquran dan Sunah</span>
                        </div>
                        <div className="nilai-item">
                          <i className="fa fa-gavel"></i>
                          <span>Regulasi Pemerintah</span>
                        </div>
                        <div className="nilai-item">
                          <i className="fa fa-leaf"></i>
                          <span>Budaya Lokal</span>
                        </div>
                        <div className="nilai-item">
                          <i className="fa fa-flask"></i>
                          <span>Perkembangan IPTEK Mutakhir</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisiMisi
