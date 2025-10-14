'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
              dots: true,
              infinite: true,
              speed: 800,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              autoplay: true,
              autoplaySpeed: 5000,
              pauseOnHover: true,
              pauseOnFocus: true,
              fade: true,
              cssEase: 'ease-in-out',
              prevArrow: '<button type="button" class="slick-prev" aria-label="Previous slide"><i class="fa fa-angle-left"></i></button>',
              nextArrow: '<button type="button" class="slick-next" aria-label="Next slide"><i class="fa fa-angle-right"></i></button>',
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
      {/* Slide 1 - PMB Link */}
      <div className="single-slider slider-wrapper">
        <Image 
          src="/images/slider/slider-iaipi-4.jpeg"
          alt="Pendaftaran Mahasiswa Baru IAIPI Garut - Daftar Sekarang"
          fill
          priority
          quality={85}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="slider-overlay"></div>
        <div className="container slider-content">
          <div className="slider-text">
            <h2 className="slider-title">Pendaftaran Mahasiswa Baru 2025</h2>
            <p className="slider-subtitle">Wujudkan Impianmu Kuliah di Kampus Islami Terbaik</p>
            <Link 
              href="https://staipersisgarut.pmbonline.siakad.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="main-btn slider-btn"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
      
      {/* Slide 2 */}
      <div className="single-slider slider-wrapper">
        <Image 
          src="/images/slider/slider-iaipi-1a.jpg"
          alt="Kampus Institut Agama Islam PERSIS Garut - Gedung Utama"
          fill
          quality={85}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="slider-overlay"></div>
        <div className="container slider-content">
          <div className="slider-text">
            <h2 className="slider-title">Institut Agama Islam PERSIS Garut</h2>
            <p className="slider-subtitle">Kampus Saintek Dakwah Berbasis Turats Islam</p>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="single-slider slider-wrapper">
        <Image 
          src="/images/slider/slider-iaipi-2.jpg"
          alt="Kegiatan Mahasiswa IAIPI Garut - Pembelajaran Aktif"
          fill
          quality={85}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="slider-overlay"></div>
        <div className="container slider-content">
          <div className="slider-text">
            <h2 className="slider-title">Pendidikan Berkualitas</h2>
            <p className="slider-subtitle">Dosen Berkompeten & Fasilitas Modern</p>
          </div>
        </div>
      </div>

      {/* Slide 4 */}
      <div className="single-slider slider-wrapper">
        <Image 
          src="/images/slider/slider-iaipi-3.jpg"
          alt="Suasana Kampus IAIPI Garut - Lingkungan Belajar Nyaman"
          fill
          quality={85}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="slider-overlay"></div>
        <div className="container slider-content">
          <div className="slider-text">
            <h2 className="slider-title">Lingkungan Islami</h2>
            <p className="slider-subtitle">Kampus dengan Nuansa Religius yang Kental</p>
          </div>
        </div>
      </div>

      {/* Slide 5 */}
      <div className="single-slider slider-wrapper">
        <Image 
          src="/images/slider/slider-iaipi-1.jpg"
          alt="Aktivitas Kampus IAIPI Garut"
          fill
          quality={85}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="slider-overlay"></div>
      </div>
    </section>
  )
}

export default Slider