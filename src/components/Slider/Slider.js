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
        style={{ backgroundImage: "url('/images/slider/slider-iaipi-4.jpeg')" }} 
        >
        <div className="container">
        </div>
      </div>
      
      <div 
        className="single-slider bg_cover pt-150" 
        style={{ backgroundImage: "url('/images/slider/slider-iaipi-1a.jpg')" }} 
        >
        <div className="container">
        </div>
      </div>

      <div 
        className="single-slider bg_cover pt-150" 
        style={{ backgroundImage: "url('/images/slider/slider-iaipi-2.jpg')" }} 
        >
        <div className="container">
        </div>
      </div>

      <div 
        className="single-slider bg_cover pt-150" 
        style={{ backgroundImage: "url('/images/slider/slider-iaipi-3.jpg')" }} 
        >
        <div className="container">
        </div>
      </div>

      <div 
        className="single-slider bg_cover pt-150" 
        style={{ backgroundImage: "url('/images/slider/slider-iaipi-1.jpg')" }} 
        >
      </div>
    </section>
  )
}

export default Slider