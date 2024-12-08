'use client'
import Link from 'next/link'

const Ekonomi = () => {
  return (
    <section id="course-part" className="pt-115 pb-120">
      <div className="container">
        {/* Penjelasan Fakultas */}
        <div className="row">
          <div className="col-lg-8">
            <div className="section-title mt-50">
              <h5>Pendidikan Sarjana</h5>
              <h2>Fakultas Ekonomi dan Bisnis Islam</h2>
            </div>
            <div className="about-cont pb-50">
              <p>Fakultas Ekonomi dan Bisnis Islam merupakan fakultas yang fokus pada pengembangan ilmu ekonomi dan bisnis yang berlandaskan nilai-nilai Islam. Fakultas ini berkomitmen untuk menghasilkan lulusan yang kompeten dalam bidang ekonomi syariah dan keuangan Islam.</p>
            </div>
          </div>
        </div>

        {/* Program Studi */}
        <div className="row justify-content-center">
          {/* Prodi Ekonomi Syariah */}
          <div className="col-lg-6">
            <div className="singel-course mt-30">
              <div className="thum">
                <div className="image">
                  <img src="/images/prodi/ilha.jpg" alt="Ekonomi Syariah" />
                </div>
              </div>
              <div className="cont border">
                <h4>Ekonomi Syariah (EKOSY)</h4>
                <div className="course-teacher mt-3">
                  <div className="description">
                    <p>Program Studi Ekonomi Syariah mempersiapkan mahasiswa untuk menjadi profesional dalam bidang ekonomi yang berbasis prinsip-prinsip syariah. Lulusan dibekali pemahaman mendalam tentang teori ekonomi Islam dan aplikasinya dalam sistem ekonomi modern.</p>
                  </div>
                  <div className="info-list mt-3">
                    <ul className="list-unstyled">
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Gelar: S.E. (Sarjana Ekonomi)</li>
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Masa Studi: 8 Semester</li>
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Akreditasi: B</li>
                    </ul>
                  </div>
                  <div className="text-center mt-4">
                    <Link href="/fakultas/ekonomi/ekosy" className="main-btn">Detail Program</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prodi Manajemen Keuangan Syariah */}
          <div className="col-lg-6">
            <div className="singel-course mt-30">
              <div className="thum">
                <div className="image">
                  <img src="/images/prodi/iat.jpg" alt="Manajemen Keuangan Syariah" />
                </div>
              </div>
              <div className="cont border">
                <h4>Manajemen Keuangan Syariah (MKS)</h4>
                <div className="course-teacher mt-3">
                  <div className="description">
                    <p>Program Studi Manajemen Keuangan Syariah fokus pada pengembangan kompetensi dalam pengelolaan keuangan berbasis syariah. Mahasiswa dibekali pengetahuan dan keterampilan dalam manajemen keuangan Islam, perbankan syariah, dan lembaga keuangan syariah.</p>
                  </div>
                  <div className="info-list mt-3">
                    <ul className="list-unstyled">
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Gelar: S.E. (Sarjana Ekonomi)</li>
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Masa Studi: 8 Semester</li>
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Akreditasi: B</li>
                    </ul>
                  </div>
                  <div className="text-center mt-4">
                    <Link href="/fakultas/ekonomi/mks" className="main-btn">Detail Program</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visi Misi Fakultas */}
        <div className="row mt-50">
          <div className="col-lg-12">
            <div className="about-items">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-singel-items mt-30">
                    <h4>Visi</h4>
                    <p>Menjadi Fakultas terkemuka dalam pengembangan ilmu ekonomi dan bisnis berbasis nilai-nilai Islam yang unggul dan berdaya saing global.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-singel-items mt-30">
                    <h4>Misi</h4>
                    <ul>
                      <li>Menyelenggarakan pendidikan ekonomi dan bisnis berbasis syariah</li>
                      <li>Mengembangkan riset dalam bidang ekonomi dan keuangan syariah</li>
                      <li>Melaksanakan pengabdian masyarakat melalui pemberdayaan ekonomi</li>
                      <li>Menjalin kerjasama dengan lembaga keuangan syariah</li>
                    </ul>
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

export default Ekonomi