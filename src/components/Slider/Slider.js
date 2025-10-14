'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Slider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const initSlider = () => {
      if (window.jQuery) {
        const $ = window.jQuery
        
        if ($('.slider-active').length && !$('.slider-active').hasClass('slick-initialized')) {
          try {
            $('.slider-active').slick({
              dots: false,
              infinite: true,
              speed: 1500,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              autoplay: true,
              autoplaySpeed: 5000,
              prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
              nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
            })
          } catch (error) {
            console.log('Slider init error:', error)
          }
        }
      }
    }

    setTimeout(initSlider, 300)

    return () => {
      if (window.jQuery && $('.slider-active').length && $('.slider-active').hasClass('slick-initialized')) {
        try {
          window.jQuery('.slider-active').slick('unslick')
        } catch (e) {
          console.log('Slider cleanup error:', e)
        }
      }
    }
  }, [isMounted])

  // Jangan render apa pun sampai mounted
  if (!isMounted) {
    return null
  }

  return (
    <section id="slider-part" className="slider-active">
      <a 
          href="https://staipersisgarut.pmbonline.siakad.tech/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div 
            className="single-slider bg_cover pt-150" 
            style={{ backgroundImage: "url('/images/slider/slider-iaipi-4.jpeg')" }}
          >
            <div className="container">
              {/* Konten tambahan di sini kalau ada */}
            </div>
          </div>
        </a>
      
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