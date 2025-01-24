'use client'
import Link from 'next/link'
import Image from 'next/image'

const Teachers3 = () => {
  return (
    <section id="teachers-part" className="pt-65 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-title mt-50 pb-35">
              <h5>Oragnisasi</h5>
              <h2>Staf Pimpinan</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Teacher 1 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/dosen/d-2.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/pimpinan/warek1"><h6>Dr. Daris Tamin, M.Pd.</h6></Link>
                <span>Wakil Rektor I</span>
              </div>
            </div>
          </div>

          {/* Teacher 2 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/dosen/d-3.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/pimpinan/warek2"><h6>Dr. Nurul Irfan, M.Ag.</h6></Link>
                <span>Wakil Rektor 2</span>
              </div>
            </div>
          </div>

          {/* Teacher 3 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/dosen/d-4.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/pimpinan/warek3"><h6>Dr. Pepen Irpan Fauzan, M.Hum.</h6></Link>
                <span>Wakil Rektor 3</span>
              </div>
            </div>
          </div>

          {/* Teacher 4 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/dosen/d-5.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/pimpinan/warek4"><h6>Dr. Heri Mohamad Tohari, M.Pd.</h6></Link>
                <span>Wakil Rektor 4</span>
              </div>
            </div>
          </div>

          {/* Teacher 5 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/dosen/d-6.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/pimpinan/dekan1"><h6>Dr. Gun Gun A. Basith</h6></Link>
                <span>Dekan Fakultas Ushuluddin</span>
              </div>
            </div>
          </div>

          {/* Teacher 7 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/dosen/d-13.jpeg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Riyan Nuryadin, S.HI., M.Pd.I.</h6></Link>
                <span>Dekan Fakultas Tarbiyah</span>
              </div>
            </div>
          </div>

          {/* Teacher 7 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/dosen/d-14.jpeg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Aip Zaenal Mutaqin, S.E., M.E.</h6></Link>
                <span>Dekan Fakultas Ekonomi dan Bisnis Islam</span>
              </div>
            </div>
          </div>

          {/* Teacher 6 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              {/* <div className="image">
                <img src="/images/dosen/d-7.jpg" alt="Teachers" />
              </div> */}
              {/* <div className="cont">
                <Link href="/teachers-singel"><h6>Konfimasi</h6></Link>
                <span>Vice chencelor</span>
              </div> */}
            </div>
          </div>


          {/* Teacher 6 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/dosen/d-7.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Dr. Yusup Tajri, M.Pd.</h6></Link>
                <span>Kaprodi Magister Pendidikan Agama Islam (MPAI)</span>
              </div>
            </div>
          </div>

          {/* Teacher 8 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/dosen/d-9.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Azis Asmana, Lc., M.Ag.</h6></Link>
                <span>Kaprodi Iimu Hadis (ILHA)</span>
              </div>
            </div>
          </div>

          {/* Teacher 11 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/dosen/d-16.jpeg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Yan Yan Nurdin, S.Ud., M.Ag.</h6></Link>
                <span>Ketua Prodi Ilmu Alquran dan Tafsir (IAT)</span>
              </div>
            </div>
          </div>

          {/* Teacher 9 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/dosen/d-17.jpeg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Mumad Nurjaman, S.Sy., M.H.</h6></Link>
                <span>Ketua Prodi Manajemen Keuangan Syariah (MKS)</span>
              </div>
            </div>
          </div>

          {/* Teacher 11 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/dosen/d-15.jpeg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Leni Layinah, S.Pd.I., M.Pd.</h6></Link>
                <span>Ketua Prodi Pendidikan Agama Islam (PAI)</span>
              </div>
            </div>
          </div>

          {/* Teacher 11 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/dosen/d-12.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Nuraini S. Pramukti, S,Pd., M.Pd.</h6></Link>
                <span>Kaprodi Pendidikan Guru Madrasah Ibtidaiyah (PGMI)</span>
              </div>
            </div>
          </div>

          {/* Teacher 10 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/dosen/d-11.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Yanti Syam Amir, S.Pd., M.Pd.</h6></Link>
                <span>Kaprodi Bimbingan Konseling Pendidikan Islam (BKPI)</span>
              </div>
            </div>
          </div>

          {/* Teacher 9 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/dosen/d-10.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Nurfaedah, S.E, M.E.</h6></Link>
                <span>Kaprodi Ekonomi Syariah (EKOSY)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Teachers3