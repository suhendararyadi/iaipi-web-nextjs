'use client'
import { useState } from 'react'

const PgmiContent = () => {
  const [activeTab, setActiveTab] = useState('profil')

  const kurikulum = [
    { semester: "1", matkul: [
      { kode: "IAI2410401", nama: "Pancasila dan Kewarganegaraan", sks: 3 },
      { kode: "IAI2410402", nama: "Bahasa Indonesia", sks: 2 },
      { kode: "IAI2410405", nama: "Ilmu Tauhid", sks: 2 },
      { kode: "IAI2410407", nama: "Fiqh Ibadah", sks: 2 },
      { kode: "IAI2410412", nama: "Ulumul Qur'an", sks: 2 },
      { kode: "IAI2410415", nama: "Filsafat Umum", sks: 2 },
      { kode: "TRB2410420", nama: "Bahasa Arab", sks: 2 },
      { kode: "IAI2410417", nama: "Bahasa Inggris", sks: 2 },
      { kode: "IAI2410418", nama: "Filsafat dan Landasan Pendidikan Islam", sks: 2 }
    ]},
    { semester: "3", matkul: [
      { kode: "20PGM1303", nama: "Matematika I (Aljabar dan Bilangan)", sks: 2 },
      { kode: "20PGM2336", nama: "Konsep Sejarah Peradaban Islam", sks: 2 },
      { kode: "20STP1106", nama: "Ulumul Hadits", sks: 2 },
      { kode: "20PGM1302", nama: "Pembelajaran Bahasa dan Sastera Indonesia", sks: 2 },
      { kode: "20STP1312", nama: "Kewirausahaan", sks: 2 },
      { kode: "20TRB1304", nama: "Hadits Tarbawi", sks: 2 },
      { kode: "20TRB3305", nama: "Sosiologi", sks: 2 },
      { kode: "20TRB3306", nama: "Psikologi Pendidikan", sks: 2 },
      { kode: "20PGM1312", nama: "Pembelajaran PKn MI/SD", sks: 2 },
      { kode: "20PGM1316", nama: "Kepramukaan/ Syubbaanul Yaum", sks: 2 },
      { kode: "20PGM1317", nama: "Pengembangan Media dan Sumber Pembelajaran MI/SD", sks: 2 },
      { kode: "20PGM1206", nama: "Kajian IPA MI/SD", sks: 2 }
    ]},
    { semester: "5", matkul: [
      { kode: "20STP1613", nama: "Ushul al-Dakwah", sks: 2 },
      { kode: "20TRB2509", nama: "Filsafat Pendidikan", sks: 2 },
      { kode: "20TRB1510", nama: "Komunikasi Pembelajaran", sks: 2 },
      { kode: "20PGM1504", nama: "Matematika II (Geometri dan Pengukuran)", sks: 2 },
      { kode: "20PGM2426", nama: "Manajemen Pendidikan Dasar (MI/SD)", sks: 2 },
      { kode: "20PGM1519", nama: "Penjasorkes", sks: 2 },
      { kode: "20PGM1520", nama: "Pengembangan Sistem Evaluasi/Penilaian Autentik MI/SD", sks: 2 },
      { kode: "20PGM2528", nama: "Pembelajaran Tematik/Pembelajaran Terpadu", sks: 2 },
      { kode: "20PGM2529", nama: "Pendidikan Inklusi", sks: 2 },
      { kode: "20PGM3539", nama: "Reaktualisasi Kearifan Lokal", sks: 2 },
      { kode: "20PGM1424", nama: "Pengenalan Lapangan Pendidikan (PLP) 1", sks: 2 }
    ]},
    { semester: "7", matkul: [
      { kode: "20STP1714", nama: "Pengenalan Lapangan Pendidikan (PLP) 2", sks: 4 },
      { kode: "20STP1715", nama: "MPM/KKN", sks: 4 },
      { kode: "20STP1716", nama: "Komprehensif", sks: 2 },
      { kode: "20TRB2716", nama: "Seminar Proposal", sks: 2 }
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
                  <h4 className="tab-title">Program Studi Pendidikan Guru Madrasah Ibtidaiyah (PGMI)</h4>
                  <p className="mb-4">Program Studi PGMI mempersiapkan mahasiswa untuk menjadi guru profesional di tingkat Madrasah Ibtidaiyah/Sekolah Dasar yang memiliki kompetensi dalam pembelajaran terpadu dan nilai-nilai keislaman. Program ini dirancang untuk menghasilkan guru MI/SD yang mampu mengintegrasikan berbagai mata pelajaran dengan pendekatan tematik.</p>
                  
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <h5>Profil Lulusan</h5>
                      <ul className="list-unstyled">
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Guru Kelas MI/SD</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Peneliti Pendidikan Dasar</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Pengembang Media Pembelajaran</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Konsultan Pendidikan Dasar</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Informasi Program</h5>
                      <ul className="list-unstyled">
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Gelar: S.Pd. (Sarjana Pendidikan)</li>
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
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Micro Teaching</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab IPA</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Multimedia</li>
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
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Koleksi Buku SD/MI</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Media Pembelajaran</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Modul Praktikum</li>
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

export default PgmiContent