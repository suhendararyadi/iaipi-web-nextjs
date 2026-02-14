'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Slider = () => {
  const [isMounted, setIsMounted] = useState(false)
  const progressRef = useRef(null)
  const AUTOPLAY_SPEED = 5000

  useEffect(() => {
    setIsMounted(true)
    
    const initSlider = () => {
      if (window.jQuery) {
        const $ = window.jQuery
        const $slider = $('.slider-active')
        
        if ($slider.length && !$slider.hasClass('slick-initialized')) {
          try {
            // Animasi progress bar
            const startProgress = () => {
              if (progressRef.current) {
                $(progressRef.current).css('width', '0%')
                $(progressRef.current).stop().animate({ width: '100%' }, AUTOPLAY_SPEED, 'linear')
              }
            }

            $slider.on('init', function() {
              startProgress()
            })

            $slider.on('beforeChange', function() {
              if (progressRef.current) {
                $(progressRef.current).stop().css('width', '0%')
              }
            })

            $slider.on('afterChange', function() {
              startProgress()
            })

            $slider.slick({
              dots: true,
              infinite: true,
              speed: 800,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              autoplay: true,
              autoplaySpeed: AUTOPLAY_SPEED,
              pauseOnHover: false, // Dimatikan agar progres bar sinkron
              pauseOnFocus: false,
              fade: true,
              cssEase: 'ease-in-out',
              prevArrow: '<button type="button" class="custom-slider-prev" aria-label="Previous slide"><span>❮</span></button>',
              nextArrow: '<button type="button" class="custom-slider-next" aria-label="Next slide"><span>❯</span></button>',
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
    <div style={{ position: 'relative' }}>
      <section id="slider-part" className="slider-active">
        {/* Slide 1 */}
        <div className="single-slider slider-wrapper">
          <Image 
            src="/images/slider/slider-iaipi-4.jpeg"
            alt="Pendaftaran Mahasiswa Baru IAIPI Garut"
            fill
            priority
            quality={90}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {/* Slide 2 */}
        <div className="single-slider slider-wrapper">
          <Image 
            src="/images/slider/slider-iaipi-1a.jpg"
            alt="Kampus Institut Agama Islam PERSIS Garut"
            fill
            quality={90}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Slide 3 */}
        <div className="single-slider slider-wrapper">
          <Image 
            src="/images/slider/slider-iaipi-2.jpg"
            alt="Kegiatan Mahasiswa IAIPI Garut"
            fill
            quality={90}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Slide 4 */}
        <div className="single-slider slider-wrapper">
          <Image 
            src="/images/slider/slider-iaipi-3.jpg"
            alt="Suasana Kampus IAIPI Garut"
            fill
            quality={90}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Slide 5 */}
        <div className="single-slider slider-wrapper">
          <Image 
            src="/images/slider/slider-iaipi-1.jpg"
            alt="Aktivitas Kampus IAIPI Garut"
            fill
            quality={90}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>
      
      {/* Loading Indicator / Progress Bar */}
      <div className="slider-progress">
        <div ref={progressRef} className="progress-bar"></div>
      </div>
    </div>
  )
}

export default Slider