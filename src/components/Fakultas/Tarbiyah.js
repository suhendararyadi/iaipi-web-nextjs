'use client'
import Link from 'next/link'

const Tarbiyah = () => {
  return (
    <section id="course-part" className="pt-115 pb-120">
      <div className="container">
        {/* Penjelasan Fakultas */}
        <div className="row">
          <div className="col-lg-8">
            <div className="section-title mt-50">
              <h5>Pendidikan Sarjana</h5>
              <h2>Fakultas Tarbiyah</h2>
            </div>
            <div className="about-cont pb-50">
              <p>Fakultas Tarbiyah merupakan fakultas yang berfokus pada pengembangan pendidikan Islam dan pembentukan tenaga pendidik profesional yang memiliki basis keislaman yang kuat. Fakultas ini berkomitmen menghasilkan pendidik yang kompeten, berkarakter, dan siap berkontribusi dalam dunia pendidikan.</p>
            </div>
          </div>
        </div>

        {/* Program Studi */}
        <div className="row">
          {/* Prodi PAI */}
          <div className="col-lg-4">
            <div className="singel-course mt-30">
              <div className="thum">
                <div className="image">
                  <img src="/images/prodi/ilha.jpg" alt="PAI" />
                </div>
              </div>
              <div className="cont border">
                <h4>Pendidikan Agama Islam (PAI)</h4>
                <div className="course-teacher mt-3">
                  <div className="description">
                    <p>Program Studi Pendidikan Agama Islam menyiapkan tenaga pendidik profesional dalam bidang Pendidikan Agama Islam yang memiliki kompetensi pedagogik dan keislaman yang mumpuni.</p>
                  </div>
                  <div className="info-list mt-3">
                    <ul className="list-unstyled">
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Gelar: S.Pd. (Sarjana Pendidikan)</li>
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Masa Studi: 8 Semester</li>
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Akreditasi: A</li>
                    </ul>
                  </div>
                  <div className="text-center mt-4">
                    <Link href="/fakultas/tarbiyah/pai" className="main-btn">Detail Program</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prodi PGMI */}
          <div className="col-lg-4">
            <div className="singel-course mt-30">
              <div className="thum">
                <div className="image">
                  <img src="/images/prodi/fak-2.jpg" alt="PGMI" />
                </div>
              </div>
              <div className="cont border">
                <h4>Pendidikan Guru Madrasah Ibtidaiyah (PGMI)</h4>
                <div className="course-teacher mt-3">
                  <div className="description">
                    <p>Program Studi PGMI fokus pada penyiapan guru profesional untuk tingkat Madrasah Ibtidaiyah/Sekolah Dasar yang memiliki kompetensi dalam pembelajaran terpadu berbasis nilai-nilai Islam.</p>
                  </div>
                  <div className="info-list mt-3">
                    <ul className="list-unstyled">
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Gelar: S.Pd. (Sarjana Pendidikan)</li>
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Masa Studi: 8 Semester</li>
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Akreditasi: A</li>
                    </ul>
                  </div>
                  <div className="text-center mt-4">
                    <Link href="/fakultas/tarbiyah/pgmi" className="main-btn">Detail Program</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prodi BKPI */}
          <div className="col-lg-4">
            <div className="singel-course mt-30">
              <div className="thum">
                <div className="image">
                  <img src="/images/prodi/iat.jpg" alt="BKPI" />
                </div>
              </div>
              <div className="cont border">
                <h4>Bimbingan Konseling Pendidikan Islam (BKPI)</h4>
                <div className="course-teacher mt-3">
                  <div className="description">
                    <p>Program Studi BKPI menyiapkan konselor pendidikan yang kompeten dalam memberikan layanan bimbingan dan konseling dengan pendekatan Islam untuk membantu perkembangan peserta didik.</p>
                  </div>
                  <div className="info-list mt-3">
                    <ul className="list-unstyled">
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Gelar: S.Pd. (Sarjana Pendidikan)</li>
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Masa Studi: 8 Semester</li>
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Akreditasi: A</li>
                    </ul>
                  </div>
                  <div className="text-center mt-4">
                    <Link href="/fakultas/tarbiyah/bkpi" className="main-btn">Detail Program</Link>
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
                    <p>Menjadi Fakultas terkemuka dalam menghasilkan tenaga pendidik yang profesional dan berkarakter Islami.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-singel-items mt-30">
                    <h4>Misi</h4>
                    <ul>
                      <li>Menyelenggarakan pendidikan dan pembelajaran berbasis nilai-nilai Islam</li>
                      <li>Mengembangkan penelitian dalam bidang pendidikan Islam</li>
                      <li>Melaksanakan pengabdian kepada masyarakat dalam bidang pendidikan</li>
                      <li>Menjalin kerjasama dengan berbagai lembaga pendidikan</li>
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

export default Tarbiyah