'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Teachers2 = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Inisialisasi slider untuk testimonial siswa
    const initStudentSlider = () => {
      if (window.jQuery) {
        const $ = window.jQuery
        $('.student-slied').slick({
          dots: false,
          infinite: true,
          autoplay: true,
          arrows: false,
          speed: 800,
          slidesToShow: 1,
          slidesToScroll: 1
        })
      }
    }
    setTimeout(initStudentSlider, 100)
  }, [])

  if (!isMounted) return null

  return (
    <section id="teachers-part" className="pt-65 pb-120 gray-bg">
      <div className="container">
        <div className="row">
          {/* Teachers Section */}
          <div className="col-lg-6">
            <div className="section-title mt-50 pb-25">
              <h5>Dosen dan Peneliti</h5>
              <h2>Pimpinan</h2>
            </div>
            <div className="teachers-2">
              <div className="row">
                {/* Teacher 1 */}
                <div className="col-md-6">
                  <div className="teachers-2-singel mt-30">
                    <div className="thum">
                      <img src="/images/teachers/teacher-2/warek-1.jpg" alt="Teacher" />
                    </div>
                    <div className="cont">
                      <Link href="/teachers-singel"><h5>Dr. Daris Tamin</h5></Link>
                      <p>Wakil Rektor 1</p>
                      {/* <span><i className="fa fa-book"></i></span> */}
                    </div>
                  </div>
                </div>

                {/* Teacher 2 */}
                <div className="col-md-6">
                  <div className="teachers-2-singel mt-30">
                    <div className="thum">
                      <img src="/images/teachers/teacher-2/warek-2.jpg" alt="Teacher" />
                    </div>
                    <div className="cont">
                      <Link href="/teachers-singel"><h5>Dr. Nurul Irfan</h5></Link>
                      <p>Wakil Rektor 2</p>
                      {/* <span><i className="fa fa-book"></i>05 Courses</span> */}
                    </div>
                  </div>
                </div>

                {/* Teacher 3 */}
                <div className="col-md-6">
                  <div className="teachers-2-singel mt-30">
                    <div className="thum">
                      <img src="/images/teachers/teacher-2/warek-3.jpg" alt="Teacher" />
                    </div>
                    <div className="cont">
                      <Link href="/teachers-singel"><h5>Dr. Pepen Irpan F</h5></Link>
                      <p>Wakil Rektor 3</p>
                      {/* <span><i className="fa fa-book"></i>10 Courses</span> */}
                    </div>
                  </div>
                </div>

                {/* Teacher 4 */}
                <div className="col-md-6">
                  <div className="teachers-2-singel mt-30">
                    <div className="thum">
                      <img src="/images/teachers/teacher-2/warek-4.jpg" alt="Teacher" />
                    </div>
                    <div className="cont">
                      <Link href="/teachers-singel"><h5>Dr. Heri M. Tohari</h5></Link>
                      <p>Wakil Rektor 4</p>
                      {/* <span><i className="fa fa-book"></i>05 Courses</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Happy Students Section */}
          <div className="col-lg-6">
            <div className="happy-student mt-55">
              <div className="happy-title">
                <h3>Sambutan Rektor</h3>
              </div>
              <div className="student-slied">
                {/* Student 1 */}
                <div className="singel-student">
                  <img src="/images/teachers/teacher-2/quote.png" alt="Quote" />
                  <p>“Selamat datang di website resmi kampus kami, Institut Agama Islam Persis Garut”</p>
                  <h6>Dr. Tiar Anwar Bachtiar, M.Hum.</h6>
                  <span>Rektor</span>
                </div>
              </div>
              <div className="student-image">
                <img src="/images/teachers/teacher-2/rektor.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teachers2