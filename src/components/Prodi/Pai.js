'use client'
import { useState } from 'react'

const PaiContent = () => {
  const [activeTab, setActiveTab] = useState('profil')

  const kurikulum = [
    { semester: "1", matkul: [
      { kode: "IAI2410201", nama: "Pancasila dan Kewarganegaraan", sks: 3 },
      { kode: "IAI2410202", nama: "Bahasa Indonesia", sks: 2 },
      { kode: "IAI2410205", nama: "Ilmu Tauhid", sks: 2 },
      { kode: "IAI2410207", nama: "Fiqh Ibadah", sks: 2 },
      { kode: "IAI2410212", nama: "Ulumul Qur'an", sks: 2 },
      { kode: "IAI2410215", nama: "Filsafat Umum", sks: 2 },
      { kode: "IAI2410217", nama: "Bahasa Arab", sks: 2 },
      { kode: "IAI2410218", nama: "Bahasa Inggris", sks: 2 },
      { kode: "TRB2410220", nama: "Filsafat dan Landasan Pendidikan Islam", sks: 2 }
    ]},
    { semester: "3", matkul: [
      { kode: "20TRB3305", nama: "Tafsir Tarbawi", sks: 2 },
      { kode: "20TRB3306", nama: "Hadits Tarbawi", sks: 2 },
      { kode: "20PAI1305", nama: "Materi SKI MA/SMA", sks: 2 },
      { kode: "20PAI1306", nama: "Materi Aqidah Akhlak MA/SMA", sks: 2 },
      { kode: "20PAI1307", nama: "Materi Quran Hadits MA/SMA", sks: 2 },
      { kode: "20PAI1308", nama: "Materi Fiqih MA/SMA", sks: 2 },
      { kode: "20PAI1309", nama: "Ilmu Pendidikan Islam", sks: 2 },
      { kode: "20PAI2304", nama: "Bahasa Arab III", sks: 2 },
      { kode: "20PAI2305", nama: "Bahasa Inggris III", sks: 2 },
      { kode: "20PAI2306", nama: "Fiqh Muamalah dan Jinayat", sks: 2 }
    ]},
    { semester: "5", matkul: [
      { kode: "20TRB2509", nama: "Sosiologi", sks: 2 },
      { kode: "20TRB1510", nama: "Psikologi Pendidikan", sks: 2 },
      { kode: "20TRB1511", nama: "Bimbingan Konseling", sks: 2 },
      { kode: "20TRB1512", nama: "Akhlak & Etika Profesi Guru", sks: 2 },
      { kode: "20TRB1513", nama: "Penelitian Tindakan Kelas", sks: 2 },
      { kode: "20PAI1516", nama: "Administrasi Pendidikan", sks: 2 },
      { kode: "20PAI1517", nama: "Kapita Selekta Pendidikan", sks: 2 },
      { kode: "20PAI1518", nama: "Evaluasi Pembelajaran PAI", sks: 2 },
      { kode: "20PAI1519", nama: "ICT Pembelajaran PAI", sks: 2 },
      { kode: "20PAI1520", nama: "Perencanaan Pembelajaran PAI", sks: 2 }
    ]},
    { semester: "7", matkul: [
      { kode: "20PAI1750", nama: "PPL", sks: 4 },
      { kode: "20PAI1751", nama: "MPM", sks: 4 },
      { kode: "20PAI1752", nama: "Ujian Komprehensif", sks: 2 },
      { kode: "20PAI2612", nama: "Seminar Proposal", sks: 2 },
      { kode: "20PAI1753", nama: "Skripsi", sks: 6 }
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
                  <h4 className="tab-title">Program Studi Pendidikan Agama Islam (PAI)</h4>
                  <p className="mb-4">Program Studi Pendidikan Agama Islam mempersiapkan mahasiswa untuk menjadi pendidik profesional yang memiliki kompetensi dalam bidang Pendidikan Agama Islam. Program ini mengintegrasikan ilmu pendidikan modern dengan nilai-nilai keislaman untuk menghasilkan guru PAI yang berkualitas.</p>
                  
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <h5>Profil Lulusan</h5>
                      <ul className="list-unstyled">
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Guru PAI di Sekolah/Madrasah</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Peneliti Pendidikan Islam</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Pengembang Kurikulum PAI</li>
                        <li><i className="fa fa-check-circle text-primary mr-2"></i> Konsultan Pendidikan Islam</li>
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
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Multimedia Pembelajaran</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Lab Bahasa</li>
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
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Koleksi Buku Pendidikan Islam</li>
                            <li><i className="fa fa-check-circle text-primary mr-2"></i> Jurnal Pendidikan</li>
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

export default PaiContent