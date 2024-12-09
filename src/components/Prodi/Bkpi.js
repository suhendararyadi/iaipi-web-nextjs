'use client'
import { useState } from 'react'

const BkpiContent = () => {
  const [activeTab, setActiveTab] = useState('profil')

  const kurikulum = [
    { semester: "1", matkul: [
      { kode: "IAI2410601", nama: "Pancasila dan Kewarganegaraan", sks: 3 },
      { kode: "IAI2410602", nama: "Bahasa Indonesia", sks: 2 },
      { kode: "IAI2410605", nama: "Ilmu Tauhid", sks: 2 },
      { kode: "IAI2410607", nama: "Fiqh Ibadah", sks: 2 },
      { kode: "IAI2410612", nama: "Ulumul Qur'an", sks: 2 },
      { kode: "IAI2410615", nama: "Filsafat Umum", sks: 2 },
      { kode: "IAI2410617", nama: "Bahasa Arab", sks: 2 },
      { kode: "IAI2410618", nama: "Bahasa Inggris", sks: 2 },
      { kode: "BKP2410625", nama: "Wawasan dan Landasan BKPI", sks: 2 }
    ]},
    { semester: "3", matkul: [
      { kode: "BKPI1006", nama: "English-Translating and Writing", sks: 2 },
      { kode: "BKPI2013", nama: "Pengantar Ilmu Dakwah", sks: 2 },
      { kode: "BKPI2016", nama: "Lughatul-Arabiyyah Lit-Tarjamah wal Kitabah", sks: 2 },
      { kode: "BKPI3020", nama: "Psikologi Perkembangan Remaja", sks: 2 },
      { kode: "BKPI3021", nama: "Psikologi Pendidikan", sks: 2 },
      { kode: "BKPI3023", nama: "Evaluasi Pendidikan Islam", sks: 2 },
      { kode: "BKPI3025", nama: "Manajemen Pendidikan Islam", sks: 2 },
      { kode: "BKPI4032", nama: "Orientasi Profesi BKPI", sks: 2 },
      { kode: "BKPI4033", nama: "Psikologi Kepribadian", sks: 2 },
      { kode: "BKPI4052", nama: "Asesemen Individu Teknik Tes", sks: 2 },
      { kode: "BKPI6066", nama: "Sejarah Dakwah dan Pendidikan Persatuan Islam", sks: 2 }
    ]},
    { semester: "5", matkul: [
      { kode: "BKPI3028", nama: "Inovasi Pendidikan Islam", sks: 2 },
      { kode: "BKPI4036", nama: "Layanan Bimbingan Karier", sks: 2 },
      { kode: "BKPI4041", nama: "Pengembangan Kepribadian Konselor Muslim", sks: 2 },
      { kode: "BKPI4043", nama: "Manajemen Keluarga", sks: 2 },
      { kode: "BKPI4046", nama: "Konseling Anak Berkebutuhan Khusus", sks: 2 },
      { kode: "BKPI4051", nama: "Aplikasi Teknologi Informasi dalam BKPI", sks: 2 },
      { kode: "BKPI4054", nama: "Praktikum Diagnosis Kesulitan Belajar", sks: 3 },
      { kode: "BKPI4055", nama: "Praktikum Bimbingan Klasikal", sks: 3 },
      { kode: "BKPI4058", nama: "Metodologi Penelitian Kualitatif dalam BKPI", sks: 2 },
      { kode: "BKPI6068", nama: "Eduprenership", sks: 2 },
      { kode: "BKPI5063", nama: "Quranic Guidance and Counseling (BK Qurani)", sks: 2 }
    ]},
    { semester: "7", matkul: [
      { kode: "BKPI4061", nama: "Praktek Lapangan Persekolahan 2", sks: 4 },
      { kode: "BKPI6069", nama: "MPM", sks: 4 },
      { kode: "BKPI4063", nama: "Publikasi Karya Tulis Ilmiah", sks: 2 },
      { kode: "BKPI5065", nama: "Praktikum BK Qurani untuk Kelompok", sks: 4 },
      { kode: "BKPI4064", nama: "SKRIPSI / Tugas Akhir", sks: 6 },
      { kode: "BKPI7015", nama: "Ujian Komprehensif", sks: 0 },
      { kode: "BKPI7016", nama: "Seminar Proposal", sks: 0 }
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
                  <h4 className="tab-title">Program Studi Bimbingan Konseling Pendidikan Islam (BKPI)</h4>
                  <p className="mb-4">Program Studi BKPI mengembangkan kompetensi profesional dalam bidang bimbingan dan konseling dengan pendekatan Islam. Program ini mempersiapkan konselor pendidikan yang memiliki wawasan keislaman dan keterampilan konseling untuk membantu perkembangan optimal peserta didik.</p>
                  
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <h5>Profil Lulusan</h5>
                      <ul className="list-unstyled">
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Konselor Pendidikan Islam</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Guru BK/Konselor Sekolah</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Konselor Keluarga</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Peneliti Bimbingan Konseling</li>
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
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Konseling</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Asesmen Psikologi</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Praktikum BK</li>
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
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Koleksi Buku BK</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Jurnal Konseling</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Alat Tes Psikologi</li>
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

export default BkpiContent