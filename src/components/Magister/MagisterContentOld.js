'use client'
import Link from 'next/link'

const MagisterContent = () => {
  return (
    <section id="course-part" className="pt-115 pb-120">
      <div className="container">
        {/* Penjelasan Program Magister */}
        <div className="row">
          <div className="col-lg-8">
            <div className="section-title mt-50">
              <h5>Program Pascasarjana</h5>
              <h2>Program Magister (S2)</h2>
            </div>
            <div className="about-cont pb-50">
              <p>Program Magister IAI PERSIS Garut merupakan jenjang pendidikan lanjutan yang dirancang untuk mengembangkan kompetensi dan keahlian profesional dalam bidang pendidikan Islam. Program ini menawarkan pendidikan berkualitas dengan kurikulum yang komprehensif dan relevan dengan kebutuhan pendidikan modern.</p>
            </div>
          </div>
        </div>

        {/* Program Studi S2 */}
        <div className="row justify-content-center">
          {/* MPAI */}
          <div className="col-lg-8">
            <div className="singel-course mt-30">
              <div className="thum">
                <div className="image">
                  <img src="/images/prodi/ilha.jpg" alt="Magister PAI" />
                </div>
              </div>
              <div className="cont border">
                <h4>Magister Pendidikan Agama Islam (MPAI)</h4>
                <div className="course-teacher mt-3">
                  <div className="description">
                    <p>Program Magister Pendidikan Agama Islam (MPAI) dirancang untuk menghasilkan ahli dan praktisi pendidikan Islam yang memiliki kedalaman ilmu dan kemampuan riset. Program ini mempersiapkan lulusan untuk menjadi pendidik profesional, peneliti, dan pemimpin dalam bidang pendidikan Islam.</p>
                  </div>
                  
                  <div className="info-list mt-4">
                    <div className="row">
                      <div className="col-md-6">
                        <h5>Informasi Program:</h5>
                        <ul className="list-unstyled">
                          <li><i className="fa fa-check-circle text-primary mr-2"></i> Gelar: M.Pd. (Magister Pendidikan)</li>
                          <li><i className="fa fa-check-circle text-primary mr-2"></i> Masa Studi: 4 Semester</li>
                          <li><i className="fa fa-check-circle text-primary mr-2"></i> Akreditasi: B</li>
                          <li><i className="fa fa-check-circle text-primary mr-2"></i> Kelas: Regular & Weekend</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h5>Prospek Karir:</h5>
                        <ul className="list-unstyled">
                          <li><i className="fa fa-arrow-right text-primary mr-2"></i> Dosen PAI</li>
                          <li><i className="fa fa-arrow-right text-primary mr-2"></i> Peneliti Pendidikan Islam</li>
                          <li><i className="fa fa-arrow-right text-primary mr-2"></i> Konsultan Pendidikan</li>
                          <li><i className="fa fa-arrow-right text-primary mr-2"></i> Pengembang Kurikulum</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <Link href="/magister/mpai" className="main-btn">Detail Program</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visi Misi Program */}
        <div className="row mt-50">
          <div className="col-lg-12">
            <div className="about-items">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-singel-items mt-30">
                    <h4>Visi</h4>
                    <p>Menjadi program pascasarjana unggulan dalam pengembangan pendidikan Islam yang berbasis riset dan keilmuan modern dengan tetap berpegang pada nilai-nilai Islam.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-singel-items mt-30">
                    <h4>Misi</h4>
                    <ul>
                      <li>Menyelenggarakan pendidikan pascasarjana yang berkualitas</li>
                      <li>Mengembangkan penelitian dalam bidang pendidikan Islam</li>
                      <li>Menghasilkan lulusan yang kompeten dan profesional</li>
                      <li>Menjalin kerjasama dengan berbagai institusi pendidikan tinggi</li>
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

export default MagisterContent