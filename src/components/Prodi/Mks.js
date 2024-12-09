'use client'
import { useState } from 'react'

const MksContent = () => {
  const [activeTab, setActiveTab] = useState('profil')

  const kurikulum = [
    { semester: "1", matkul: [
      { kode: "IAI2410701", nama: "Pancasila dan Kewarganegaraan", sks: 3 },
      { kode: "IAI2410702", nama: "Bahasa Indonesia", sks: 2 },
      { kode: "IAI2410705", nama: "Ilmu Tauhid/Aqidah", sks: 2 },
      { kode: "IAI2410706", nama: "Fiqh Ibadah", sks: 2 },
      { kode: "IAI2410712", nama: "Ulumul Qur'an", sks: 2 },
      { kode: "IAI2410713", nama: "Filsafat Umum", sks: 2 },
      { kode: "IAI2410717", nama: "Bahasa Arab", sks: 2 },
      { kode: "IAI2410718", nama: "Bahasa Inggris", sks: 2 },
      { kode: "EBI2410720", nama: "Pengantar Ilmu Ekonomi Islam", sks: 3 }
    ]},
    { semester: "2", matkul: [
      { kode: "IAI2430709", nama: "Kepersisan", sks: 2 },
      { kode: "IAI2440710", nama: "Ushul ad-Dakwah", sks: 2 },
      { kode: "IAI2430715", nama: "Ushul Fiqh", sks: 2 },
      { kode: "IAI2430716", nama: "Pandangan Hidup Islam", sks: 2 },
      { kode: "EBI2430725", nama: "Studi Ayat dan Hadits Ekonomi", sks: 2 },
      { kode: "EBI2430726", nama: "Pengantar Bisnis Modern", sks: 2 },
      { kode: "EBI2430727", nama: "Pengantar Statistik", sks: 2 },
      { kode: "EBI2430728", nama: "Etika dan Norma Ekonomi Islam", sks: 2 }
    ]},
    { semester: "3", matkul: [
      { kode: "EBI2430729", nama: "Kewirausahaan dan Bisnis Islam", sks: 2 },
      { kode: "MKS2430733", nama: "Teori Ekonomi Mikro", sks: 2 },
      { kode: "MKS2430734", nama: "Manajemen Keuangan", sks: 3 },
      { kode: "IAI2450711", nama: "Sejarah Peradaban Islam", sks: 2 },
      { kode: "EBI2450730", nama: "Perpajakan", sks: 2 }
    ]},
    { semester: "4", matkul: [
      { kode: "MKS2440745", nama: "Bank dan Lembaga Keuangan Bukan Bank", sks: 2 },
      { kode: "MKS2450746", nama: "Perencanaan Keuangan Syariah", sks: 2 },
      { kode: "MKS2450747", nama: "Manajemen ZISWAF", sks: 2 },
      { kode: "MKS2450748", nama: "Desaign Produk Keuangan Syariah", sks: 2 },
      { kode: "MKS2450749", nama: "Manajemen Perbankan Syariah", sks: 2 },
      { kode: "MKS2450750", nama: "Sistem Informasi Manajemen", sks: 2 },
      { kode: "MKS2450751", nama: "Manajemen Pemasaran Islam", sks: 2 },
      { kode: "MKS2450752", nama: "Manjemen Investasi dan Pasar modal Syariah", sks: 2 },
      { kode: "MKS2450753", nama: "Penganggaran (Budgeting)", sks: 2 }
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
                  <h4 className="tab-title">Program Studi Manajemen Keuangan Syariah (MKS)</h4>
                  <p className="mb-4">Program Studi Manajemen Keuangan Syariah fokus pada pengembangan kompetensi dalam pengelolaan keuangan berbasis syariah. Mahasiswa dibekali pengetahuan dan keterampilan dalam manajemen keuangan Islam, perbankan syariah, dan lembaga keuangan syariah.</p>
                  
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <h5>Profil Lulusan</h5>
                      <ul className="list-unstyled">
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Manajer Keuangan Syariah</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Praktisi Perbankan Syariah</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Analis Keuangan Syariah</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Konsultan Keuangan Syariah</li>
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
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Manajemen Keuangan</li>
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
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Koleksi Buku Manajemen Keuangan</li>
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

export default MksContent