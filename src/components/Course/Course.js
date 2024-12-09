'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Course = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Inisialisasi slider course
    const initCourseSlider = () => {
      if (window.jQuery) {
        const $ = window.jQuery
        $('.course-slied').slick({
          dots: false,
          infinite: true,
          speed: 800,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          arrows: true,
          prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
          nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        })
      }
    }

    // Tunggu sebentar untuk memastikan jQuery sudah dimuat
    setTimeout(initCourseSlider, 100)
  }, [])

  if (!isMounted) return null

  return (
    <section id="course-part" className="section pt-115 pb-120 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-45">
              <h5>Pendidikan</h5>
              <h2>Fakultas</h2>
            </div>
          </div>
        </div>
        <div className="row course-slied mt-30">
          {/* Course Item 1 */}
          <div className="col-lg-4">
            <div className="singel-course">
              <div className="thum">
                <div className="image">
                  <img src="/images/course/fak-1.jpg" alt="Course" />
                </div>
              </div>
              <div className="cont">
                <Link href="fakultas/ushuluddin"><h4>FAKULTAS USULUDIN</h4></Link>
              </div>
            </div>
          </div>

          {/* Course Item 2 */}
          <div className="col-lg-4">
            <div className="singel-course">
              <div className="thum">
                <div className="image">
                  <img src="/images/course/fak-2.jpg" alt="Course" />
                </div>
                
              </div>
              <div className="cont">
                
                
                <Link href="/fakultas/tarbiyah"><h4>FAKULTAS TARBIYAH</h4></Link>
                
              </div>
            </div>
          </div>

          {/* Course Item 3 */}
          <div className="col-lg-4">
            <div className="singel-course">
              <div className="thum">
                <div className="image">
                  <img src="/images/course/fak-3.jpg" alt="Course" />
                </div>
                
              </div>
              <div className="cont">
                
                <Link href="/fakultas/ekonomi"><h4>EKONOMI & BISNIS ISLAM</h4></Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Course