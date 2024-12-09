'use client'
import { useState } from 'react'

const EkosyContent = () => {
  const [activeTab, setActiveTab] = useState('profil')

  const kurikulum = [
    { semester: "1", matkul: [
      { kode: "IAI2410501", nama: "Pancasila dan Kewarganegaraan", sks: 3 },
      { kode: "IAI2410502", nama: "Bahasa Indonesia", sks: 2 },
      { kode: "IAI2410505", nama: "Ilmu Tauhid/Aqidah", sks: 2 },
      { kode: "IAI2410506", nama: "Fiqh Ibadah", sks: 2 },
      { kode: "IAI2410512", nama: "Ulumul Qur'an", sks: 2 },
      { kode: "IAI2410513", nama: "Filsafat Umum", sks: 2 },
      { kode: "IAI2410517", nama: "Bahasa Arab", sks: 2 },
      { kode: "IAI2410518", nama: "Bahasa Inggris", sks: 2 },
      { kode: "EBI2410520", nama: "Pengantar Ilmu Ekonomi Islam", sks: 3 }
    ]},
    { semester: "2", matkul: [
      { kode: "IAI2430508", nama: "Praktik Ibadah dan Baca Tulis Al-Quran", sks: 2 },
      { kode: "IAI2430509", nama: "Kepersisan", sks: 2 },
      { kode: "IAI2430515", nama: "Ushul Fiqh", sks: 2 },
      { kode: "EBI2430525", nama: "Studi Ayat dan Hadits Ekonomi", sks: 2 },
      { kode: "EBI2430526", nama: "Pengantar Bisnis Modern", sks: 2 },
      { kode: "EBI2430527", nama: "Pengantar Statistik", sks: 2 },
      { kode: "EBI2430528", nama: "Etika dan Norma Ekonomi Islam", sks: 2 }
    ]},
    { semester: "3", matkul: [
      { kode: "ESY2430533", nama: "Manajemen Keuangan", sks: 3 },
      { kode: "ESY2430534", nama: "Akuntansi Keuangan dan Perbankan Syariah", sks: 2 },
      { kode: "ESY2430535", nama: "Fiqh ZISWAF", sks: 2 },
      { kode: "20STE2510", nama: "Bahasa Sunda", sks: 2 },
      { kode: "20SYR2516", nama: "Fiqih Ahwal Syakhsiyah", sks: 2 },
      { kode: "20SYR2517", nama: "Ekonometrika", sks: 2 }
    ]},
    { semester: "4", matkul: [
      { kode: "20EKS1517", nama: "Kompilasi Hukum Ekonomi Syari'ah", sks: 2 },
      { kode: "20EKS2518", nama: "Ekonomi Internasional", sks: 2 },
      { kode: "20EKS1519", nama: "Komputer Akuntansi dan Bank Syari'ah", sks: 2 },
      { kode: "20EKS1520", nama: "Ekonomi Pembangunan Islam", sks: 2 },
      { kode: "20EKS1521", nama: "Manajemen Koperasi dan Usaha Kecil", sks: 2 },
      { kode: "20EKS1522", nama: "Ekonomi Moneter Islam", sks: 2 },
      { kode: "20EKS1523", nama: "Manajemen Keuangan Syari'ah", sks: 2 }
    ]},
    { semester: "5", matkul: [
      { kode: "ESY2470567", nama: "Manajemen Strategi Pengembangan Bisnis Syariah", sks: 2 },
      { kode: "20EKS1732", nama: "Komunikasi Bisnis Islam", sks: 2 },
      { kode: "20EKS1733", nama: "Seminar Ekonomi Islam", sks: 2 },
      { kode: "20EKS1734", nama: "Halal Industri", sks: 2 },
      { kode: "ESY2470566", nama: "Studi Kelayakan Bisnis Islam", sks: 2 }
    ]}
  ]

  return (
    <section id="prodi-part" className="pt-115 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Tab Navigation */}
            <ul className="nav custom-tabs" role="tablist">
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'profil' ? 'active' : ''}`}
                  onClick={() => setActiveTab('profil')}
                >
                  <i className="fa fa-user mr-2"></i>
                  Profil
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'kurikulum' ? 'active' : ''}`}
                  onClick={() => setActiveTab('kurikulum')}
                >
                  <i className="fa fa-book mr-2"></i>
                  Kurikulum
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'fasilitas' ? 'active' : ''}`}
                  onClick={() => setActiveTab('fasilitas')}
                >
                  <i className="fa fa-building mr-2"></i>
                  Fasilitas
                </button>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="tab-content">
              {/* Profil Content */}
              <div className={`tab-pane fade ${activeTab === 'profil' ? 'show active' : ''}`}>
                <div className="tab-content-card">
                  <h4 className="tab-title">Program Studi Ekonomi Syariah (EKOSY)</h4>
                  <p className="mb-4">Program Studi Ekonomi Syariah mempersiapkan mahasiswa untuk menjadi profesional di bidang ekonomi yang berbasis prinsip-prinsip syariah. Lulusan dibekali pemahaman mendalam tentang teori ekonomi Islam dan aplikasinya dalam sistem ekonomi modern.</p>
                  
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <h5>Profil Lulusan</h5>
                      <ul className="list-unstyled">
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Praktisi Ekonomi Syariah</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Analis Keuangan Syariah</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Konsultan Ekonomi Syariah</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Pengusaha/Entrepreneur</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Informasi Program</h5>
                      <ul className="list-unstyled">
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Gelar: S.E. (Sarjana Ekonomi)</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Masa Studi: 8 Semester</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Akreditasi: B</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Bahasa Pengantar: Indonesia</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kurikulum Content */}
              <div className={`tab-pane fade ${activeTab === 'kurikulum' ? 'show active' : ''}`}>
                <div className="tab-content-card">
                  <h4 className="tab-title">Kurikulum Program Studi</h4>
                  
                  {kurikulum.map((sem, index) => (
                    <div key={index} className="mb-4">
                      <h5 className="mb-3">Semester {sem.semester}</h5>
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead className="bg-primary text-white">
                            <tr>
                              <th>Kode</th>
                              <th>Mata Kuliah</th>
                              <th>SKS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sem.matkul.map((mk, idx) => (
                              <tr key={idx}>
                                <td>{mk.kode}</td>
                                <td>{mk.nama}</td>
                                <td>{mk.sks}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fasilitas Content */}
              <div className={`tab-pane fade ${activeTab === 'fasilitas' ? 'show active' : ''}`}>
                <div className="tab-content-card">
                  <h4 className="tab-title">Fasilitas Program Studi</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card mb-4">
                        <div className="card-body">
                          <h5 className="card-title">
                            <i className="fa fa-desktop text-primary mr-2"></i>
                            Laboratorium
                          </h5>
                          <ul className="list-unstyled">
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Komputer Akuntansi</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Pasar Modal Syariah</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Bank Mini Syariah</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card mb-4">
                        <div className="card-body">
                          <h5 className="card-title">
                            <i className="fa fa-book text-primary mr-2"></i>
                            Perpustakaan
                          </h5>
                          <ul className="list-unstyled">
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Koleksi Buku Ekonomi Islam</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Jurnal Nasional & Internasional</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> E-Library</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EkosyContent