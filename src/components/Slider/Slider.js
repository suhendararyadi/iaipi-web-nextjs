'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Slider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Inisialisasi slider setelah komponen benar-benar di-mount
    const initSlider = () => {
      if (window.jQuery) {
        const $ = window.jQuery
        $('.slider-active').slick({
          dots: false,
          infinite: true,
          speed: 1500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
          nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
        })
      }
    }

    // Tunggu sebentar untuk memastikan jQuery sudah dimuat
    setTimeout(initSlider, 100)
  }, [])

  // Jangan render apa pun sampai mounted
  if (!isMounted) {
    return null
  }

  return (
    <section id="slider-part" className="slider-active">
      <div 
        className="single-slider bg_cover pt-150" 
        style={{ backgroundImage: "url('/images/slider/s-1.jpg')" }} 
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-9">
              <div className="slider-cont">
                <h1>Choose the right theme for education</h1>
                <p>
                  Donec vitae sapien ut libearo venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt Sed fringilla mauri amet nibh.
                </p>
                <ul>
                  <li>
                    <Link className="main-btn" href="#">
                      Read More
                    </Link>
                  </li>
                  <li>
                    <Link className="main-btn main-btn-2" href="#">
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="single-slider bg_cover pt-150" 
        style={{ backgroundImage: "url('/images/slider/s-2.jpg')" }} 
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-9">
              <div className="slider-cont">
                <h1>Choose the right theme for education</h1>
                <p>
                  Donec vitae sapien ut libearo venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt Sed fringilla mauri amet nibh.
                </p>
                <ul>
                  <li>
                    <Link className="main-btn" href="#">
                      Read More
                    </Link>
                  </li>
                  <li>
                    <Link className="main-btn main-btn-2" href="#">
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="single-slider bg_cover pt-150" 
        style={{ backgroundImage: "url('/images/slider/s-3.jpg')" }} 
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-9">
              <div className="slider-cont">
                <h1>Choose the right theme for education</h1>
                <p>
                  Donec vitae sapien ut libearo venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt Sed fringilla mauri amet nibh.
                </p>
                <ul>
                  <li>
                    <Link className="main-btn" href="#">
                      Read More
                    </Link>
                  </li>
                  <li>
                    <Link className="main-btn main-btn-2" href="#">
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider