'use client'
import Link from 'next/link'

const Ushuluddin = () => {
  return (
    <section id="course-part" className="pt-115 pb-120">
      <div className="container">
        {/* Penjelasan Fakultas */}
        <div className="row">
          <div className="col-lg-8">
            <div className="section-title mt-50">
              {/* <h5>Fakultas</h5> */}
              <h5>Pendidikan Sarjana</h5>
              <h2>Fakultas Ushuluddin</h2>
            </div>
            <div className="about-cont pb-50">
              <p>Fakultas Ushuluddin merupakan fakultas yang fokus pada studi keislaman fundamental, khususnya dalam bidang Ilmu Hadis dan Ilmu Al-Quran Tafsir. Fakultas ini bertujuan menghasilkan sarjana muslim yang kompeten dalam bidang kajian sumber utama agama Islam.</p>
            </div>
          </div>
        </div>

        {/* Program Studi */}
        <div className="row">
          {/* Program Studi ILHA */}
          <div className="col-lg-6">
            <div className="singel-course mt-30">
              <div className="thum">
                <div className="image">
                  <img src="/images/prodi/ilha.jpg" alt="ILHA" />
                </div>
              </div>
              <div className="cont border">
                <h4>Program Studi Ilmu Hadis (ILHA)</h4>
                <div className="course-teacher mt-3">
                  <div className="description">
                    <p>Program Studi Ilmu Hadis fokus pada pengkajian dan penelitian hadis Nabi Muhammad SAW sebagai sumber kedua ajaran Islam. Lulusan dibekali kemampuan untuk memahami, menganalisis, dan mengembangkan kajian hadis.</p>
                  </div>
                  <div className="info-list mt-3">
                    <ul className="list-unstyled">
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Gelar: S.Ag. (Sarjana Agama)</li>
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Masa Studi: 8 Semester</li>
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Akreditasi: B</li>
                    </ul>
                  </div>
                  <div className="text-center mt-4">
                    <Link href="/fakultas/ushuluddin/ilha" className="main-btn">Detail Program</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Program Studi IAT */}
          <div className="col-lg-6">
            <div className="singel-course mt-30">
              <div className="thum">
                <div className="image">
                  <img src="/images/prodi/iat.jpg" alt="IAT" />
                </div>
              </div>
              <div className="cont border">
                <h4>Program Studi Ilmu Al-Quran dan Tafsir (IAT)</h4>
                <div className="course-teacher mt-3">
                  <div className="description">
                    <p>Program Studi Ilmu Al-Quran dan Tafsir berfokus pada pengkajian dan penelitian Al-Quran sebagai sumber utama ajaran Islam. Lulusan dibekali kemampuan untuk memahami, menafsirkan, dan mengembangkan kajian Al-Quran.</p>
                  </div>
                  <div className="info-list mt-3">
                    <ul className="list-unstyled">
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Gelar: S.Ag. (Sarjana Agama)</li>
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Masa Studi: 8 Semester</li>
                      <li><i className="fa fa-check-circle text-primary mr-2"></i> Akreditasi: B</li>
                    </ul>
                  </div>
                  <div className="text-center mt-4">
                    <Link href="/fakultas/ushuluddin/iat" className="main-btn">Detail Program</Link>
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
                    <p>Menjadi pusat pengembangan ilmu-ilmu keislaman yang unggul dan terpercaya dalam bidang hadis dan Al-Quran.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-singel-items mt-30">
                    <h4>Misi</h4>
                    <ul>
                      <li>Menyelenggarakan pendidikan dan pengajaran dalam bidang ilmu hadis dan Al-Quran</li>
                      <li>Melakukan penelitian untuk pengembangan ilmu-ilmu keislaman</li>
                      <li>Melaksanakan pengabdian kepada masyarakat</li>
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

export default Ushuluddin