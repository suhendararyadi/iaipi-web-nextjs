'use client'
import { useState } from 'react'

const IlhaContent = () => {
  const [activeTab, setActiveTab] = useState('profil')

  const kurikulum = [
    { semester: "1", matkul: [
      { kode: "IAI2410101", nama: "Pancasila dan Kewarganegaraan", sks: 3 },
      { kode: "IAI2410102", nama: "Bahasa Indonesia", sks: 2 },
      { kode: "IAI2410105", nama: "Ilmu Tauhid", sks: 2 },
      { kode: "IAI2410107", nama: "Fiqih Ibadah", sks: 2 },
      { kode: "IAI2410112", nama: "Ulumul Quran", sks: 2 },
      { kode: "IAI2410113", nama: "Pengantar Ilmu Hadis", sks: 2 },
      { kode: "IAI2410117", nama: "Ilmu Nahwu", sks: 2 },
      { kode: "USH2410120", nama: "Hadis Ilmu", sks: 2 },
      { kode: "ILH2410138", nama: "Hadis Thaharah", sks: 2 }
    ]},
    { semester: "3", matkul: [
      { kode: "20STP1105", nama: "Ulumul Quran", sks: 2 },
      { kode: "20STP2311", nama: "Kepersisan", sks: 2 },
      { kode: "20USH2204", nama: "Ushul Tafsir", sks: 2 },
      { kode: "20IHA2323", nama: "Tafsir 3", sks: 2 },
      { kode: "20USH2202", nama: "Ushul Fiqih", sks: 2 },
      { kode: "20IHA2318", nama: "Hadits Ahkam 3", sks: 2 },
      { kode: "20IHA2325", nama: "Fiqih 3", sks: 2 },
      { kode: "20IHA2302", nama: "Ulumul Hadits 3", sks: 2 },
      { kode: "20USH1301", nama: "Takhrij Hadits 1", sks: 2 },
      { kode: "20IHA2301", nama: "Ilmu Ma'ajim", sks: 2 },
      { kode: "20IHA1305", nama: "Tadwin Sunnah 1", sks: 2 },
      { kode: "20IHA1309", nama: "Hadits 3", sks: 2 }
    ]},
    { semester: "5", matkul: [
      { kode: "20IHA2510", nama: "Sejarah dan Perkembangan Hadits di Indonesia", sks: 2 },
      { kode: "20IHA2507", nama: "Digitalisasi Hadits", sks: 2 },
      { kode: "20IHA2508", nama: "Model-Model Penelitian Hadits", sks: 2 },
      { kode: "20IHA2513", nama: "Inkar Sunnah", sks: 2 },
      { kode: "20IHA2511", nama: "Hadits dan Isu-isu Kontemporer", sks: 2 },
      { kode: "20USH1510", nama: "Hermeneutika dan Al-Quran", sks: 2 },
      { kode: "20IHA1507", nama: "Ilmu Jarh Ta'dil 1", sks: 2 },
      { kode: "20IHA2520", nama: "Hadits Ahkam 5", sks: 2 },
      { kode: "20STP1513", nama: "Ilmu Qira'at", sks: 2 },
      { kode: "20IHA1508", nama: "Metode Kritik Matan", sks: 2 },
      { kode: "20IHA1511", nama: "Hadits 5", sks: 2 },
      { kode: "20STP1513", nama: "Ushul Dakwah", sks: 2 }
    ]},
    { semester: "7", matkul: [
      { kode: "20STP1716", nama: "Ujian Komprehensif", sks: 2 },
      { kode: "20STP1715", nama: "MPM", sks: 4 },
      { kode: "20STP1714", nama: "PPL/Praktek Profesi", sks: 4 }
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
                  <h4 className="tab-title">Program Studi Ilmu Hadis (ILHA)</h4>
                  <p className="mb-4">Program Studi Ilmu Hadis fokus pada pengkajian dan penelitian hadis Nabi Muhammad SAW sebagai sumber kedua ajaran Islam. Program studi ini mempersiapkan mahasiswa untuk menjadi ahli dalam bidang hadis yang mampu memahami, meneliti, dan mengembangkan kajian hadis secara komprehensif.</p>
                  
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <h5>Profil Lulusan</h5>
                      <ul className="list-unstyled">
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Peneliti Hadis</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Akademisi Ilmu Hadis</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Pengajar Hadis</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Konsultan Kajian Hadis</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Informasi Program</h5>
                      <ul className="list-unstyled">
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Gelar: S.Ag. (Sarjana Agama)</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Masa Studi: 8 Semester</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Akreditasi: B</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Bahasa Pengantar: Indonesia & Arab</li>
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
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Digital Hadis</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Bahasa Arab</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Penelitian Hadis</li>
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
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Koleksi Kitab Hadis</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Jurnal Nasional & Internasional</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Digital Library Hadis</li>
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

export default IlhaContent