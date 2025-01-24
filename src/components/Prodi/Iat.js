'use client'
import { useState } from 'react'

const IatContent = () => {
  const [activeTab, setActiveTab] = useState('profil')

  const kurikulum = [
    { semester: "1", matkul: [
      { kode: "TAF2410101", nama: "Tafsir Akhlak", sks: 2 },
      { kode: "TAF2410102", nama: "Tafsir Tarbawi", sks: 2 },
      { kode: "USH2410103", nama: "Ushul Fiqh", sks: 2 },
      { kode: "BAH2410104", nama: "Bahasa Arab III", sks: 2 },
      { kode: "TAF2410105", nama: "Takhrij Hadist", sks: 2 },
      { kode: "TAF2410106", nama: "Tafsir Fi Kutub Al-Hadist", sks: 2 },
      { kode: "FIS2410107", nama: "Filsafat Ilmu", sks: 2 },
      { kode: "MET2410108", nama: "Metodologi Penelitian", sks: 2 }
    ]},
    { semester: "3", matkul: [
      { kode: "PEN2410201", nama: "Pengantar Ilmu Filologi", sks: 2 },
      { kode: "QUR2410202", nama: "Ulumul Quran III", sks: 2 },
      { kode: "TAF2410203", nama: "Sejarah Mazhab Tafsir", sks: 2 },
      { kode: "TAF2410204", nama: "Studi Kitab Tafsir II", sks: 2 },
      { kode: "TAF2410205", nama: "Ushul Al-Tafsir", sks: 2 },
      { kode: "QUR2410206", nama: "Ijaz Al-Qur'an", sks: 2 },
      { kode: "QUR2410207", nama: "Ulumul Qur'an", sks: 2 },
      { kode: "QIR2410208", nama: "Ilmu Qira'at II", sks: 2 }
    ]},
    { semester: "5", matkul: [
      { kode: "BAL2410301", nama: "Ilmu Balaghah", sks: 2 },
      { kode: "TAF2410302", nama: "Tafsir Akhlak", sks: 2 },
      { kode: "TAF2410303", nama: "Tafsir Tarbawi", sks: 2 },
      { kode: "TAF2410304", nama: "Tafsir Al-Qur'an di Pesantren", sks: 2 },
      { kode: "TAF2410305", nama: "Al-Dakhil Fi Al-Tafsir", sks: 2 },
      { kode: "TAF2410306", nama: "Kewirausahaan", sks: 2 },
      { kode: "TAF2410307", nama: "Filsafat Islam", sks: 2 },
      { kode: "TAF2410308", nama: "Ilmu Tahfidz", sks: 2 }
    ]},
    { semester: "7", matkul: [
      { kode: "QUR2410401", nama: "Semiotika Al-Qur'an", sks: 2 },
      { kode: "TAF2410402", nama: "Pancasila dan Kewarganegaraan", sks: 2 },
      { kode: "BAH2410403", nama: "Bahasa Indonesia", sks: 2 },
      { kode: "TAF2410404", nama: "Ujian Komprehensif", sks: 4 }
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
                  <h4 className="tab-title">Program Studi Ilmu Aqidah dan Tafsir (IAT)</h4>
                  <p className="mb-4">Program Studi Ilmu Aqidah dan Tafsir fokus pada pengkajian dan penelitian tafsir Al-Quran serta pemahaman aqidah Islam. Program studi ini mempersiapkan mahasiswa untuk menjadi ahli dalam bidang tafsir yang mampu memahami, meneliti, dan mengembangkan kajian tafsir secara komprehensif.</p>
                  
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <h5>Profil Lulusan</h5>
                      <ul className="list-unstyled">
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Peneliti Tafsir</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Akademisi Ilmu Tafsir</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Pengajar Tafsir</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Konsultan Kajian Islam</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Informasi Program</h5>
                      <ul className="list-unstyled">
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Gelar: S.Ag. (Sarjana Agama)</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Masa Studi: 8 Semester</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Akreditasi: A</li>
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
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Tafsir</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Bahasa Arab</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Penelitian Aqidah</li>
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
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Koleksi Kitab Tafsir</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Jurnal Nasional & Internasional</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Digital Library Aqidah</li>
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

export default IatContent
