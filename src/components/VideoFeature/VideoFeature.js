'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const VideoFeature = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Inisialisasi magnific popup untuk video
    const initMagnificPopup = () => {
      if (window.jQuery) {
        const $ = window.jQuery
        $('.Video-popup').magnificPopup({
          type: 'iframe'
        })
      }
    }

    setTimeout(initMagnificPopup, 100)
  }, [])

  if (!isMounted) return null

  return (
    <section id="video-feature" className="bg_cover pt-60 pb-110" style={{backgroundImage: "url('/images/slider/slider-iaipi-3.jpg')"}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-last order-lg-first">
            <div className="video text-lg-left text-center pt-50">
              <Link className="Video-popup" href="https://www.youtube.com/watch?v=bRRtdzJH1oE">
                <i className="fa fa-play"></i>
              </Link>
            </div>
          </div>
          
          <div className="col-lg-5 offset-lg-1 order-first order-lg-last">
            <div className="feature pt-50">
              <div className="feature-title">
                <h3>Tentang Kami</h3>
              </div>
              <ul>
                <li>
                  <div className="singel-feature">
                    <div className="icon">
                      <img src="/images/all-icon/f-1.png" alt="icon" />
                    </div>
                    <div className="cont">
                      <h4>Visi</h4>
                      <p>Menjadi Kampus Unggul Pengemban Turats Islam pada Tahun 2028 di Indonesia.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="singel-feature">
                    <div className="icon">
                      <img src="/images/all-icon/f-2.png" alt="icon" />
                    </div>
                    <div className="cont">
                      <h4>Moto</h4>
                      <p>Kampus Saintek Dakwah dalam Bidang Keilmuan Turats</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="singel-feature">
                    <div className="icon">
                      <img src="/images/all-icon/f-3.png" alt="icon" />
                    </div>
                    <div className="cont">
                      <h4>Fasilitas</h4>
                      <p>Fasilitas Pendidikan yang Lengkap Untuk Menunjang Perkuliahan.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-bg"></div>
    </section>
  )
}

export default VideoFeature