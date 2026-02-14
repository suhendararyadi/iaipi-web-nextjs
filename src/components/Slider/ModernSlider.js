'use client'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const SLIDE_DATA = [
  {
    id: 1,
    title: "Pendaftaran",
    image: "/images/slider/slider-iaipi-4.jpeg",
    alt: "Pendaftaran Mahasiswa Baru IAIPI Garut"
  },
  {
    id: 2,
    title: "Profil Kampus",
    image: "/images/slider/slider-iaipi-1a.jpg",
    alt: "Kampus Institut Agama Islam PERSIS Garut"
  },
  {
    id: 3,
    title: "Kegiatan",
    image: "/images/slider/slider-iaipi-2.jpg",
    alt: "Kegiatan Mahasiswa IAIPI Garut"
  },
  {
    id: 4,
    title: "Fasilitas",
    image: "/images/slider/slider-iaipi-3.jpg",
    alt: "Suasana Kampus IAIPI Garut"
  },
  {
    id: 5,
    title: "Akademik",
    image: "/images/slider/slider-iaipi-1.jpg",
    alt: "Aktivitas Kampus IAIPI Garut"
  }
]

const AUTOPLAY_DELAY = 5000

const ModernSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiper, setSwiper] = useState(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div className="slider-placeholder" style={{ height: '750px', background: '#07294d' }}></div>

  return (
    <div className="modern-slider-container">
      {/* Main Swiper */}
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: AUTOPLAY_DELAY,
          disableOnInteraction: false,
        }}
        loop={true}
        onSwiper={setSwiper}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        className="main-banner-swiper"
      >
        {SLIDE_DATA.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="single-slide-wrapper" style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={slide.id === 1}
                quality={90}
                sizes="100vw"
                style={{ objectFit: 'cover', zIndex: 1 }}
              />
              <div className="slider-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, background: 'rgba(0,0,0,0.2)' }}></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hybrid Text-Progress Navigation */}
      <div className="slider-nav-container">
        <div className="custom-container">
          <div className="slider-nav-row">
            {SLIDE_DATA.map((slide, index) => (
              <div
                key={slide.id}
                className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => swiper?.slideToLoop(index)}
              >
                <span className="nav-title">{slide.title}</span>
                <div className="progress-line-container">
                  <div 
                    className="progress-line-fill"
                    style={{ 
                      width: activeIndex === index ? '100%' : '0%',
                      transition: activeIndex === index ? `width ${AUTOPLAY_DELAY}ms linear` : 'none'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .modern-slider-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #07294d;
        }
        :global(.main-banner-swiper) {
          height: 750px !important;
          width: 100% !important;
        }
        @media (max-width: 991px) {
          :global(.main-banner-swiper) {
            height: 600px !important;
          }
        }
        @media (max-width: 767px) {
          :global(.main-banner-swiper) {
            height: 450px !important;
          }
        }
        .slider-nav-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          background: rgba(7, 41, 77, 0.85);
          backdrop-filter: blur(10px);
          padding: 25px 0;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .custom-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .slider-nav-row {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        .nav-item {
          flex: 1;
          cursor: pointer;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-title {
          display: block;
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 1.2px;
        }
        .nav-item.active .nav-title {
          color: #ffc600;
          font-weight: 700;
        }
        .progress-line-container {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 2px;
          overflow: hidden;
        }
        .progress-line-fill {
          height: 100%;
          background: #00a651; /* Hijau IAIPI Branding */
          box-shadow: 0 0 12px rgba(0, 166, 81, 0.6);
        }
        @media (max-width: 767px) {
          .nav-title {
            font-size: 10px;
            letter-spacing: 0.5px;
          }
          .slider-nav-container {
            padding: 15px 0;
          }
          .slider-nav-row {
            gap: 8px;
          }
        }
      `}</style>
    </div>
  )
}

export default ModernSlider
