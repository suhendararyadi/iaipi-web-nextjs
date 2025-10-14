'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { jurnalData } from '@/data/jurnalData'

const Publication = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const initSlider = () => {
      if (window.jQuery) {
        const $ = window.jQuery
        
        if ($('.publication-slick').length && !$('.publication-slick').hasClass('slick-initialized')) {
          try {
            $('.publication-slick').slick({
              dots: false,
              infinite: true,
              speed: 800,
              slidesToShow: 4,
              slidesToScroll: 1,
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
                    arrows: false,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    arrows: false,
                  }
                }
              ]
            })
          } catch (error) {
            console.log('Publication slider init error:', error)
          }
        }
      }
    }

    setTimeout(initSlider, 300)

    return () => {
      if (window.jQuery && $('.publication-slick').length && $('.publication-slick').hasClass('slick-initialized')) {
        try {
          window.jQuery('.publication-slick').slick('unslick')
        } catch (e) {
          console.log('Publication slider cleanup error:', e)
        }
      }
    }
  }, [isMounted])

  if (!isMounted) {
    return null
  }

  return (
    <section id="publication-part" className="section pt-115 pb-120 gray-bg">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6 col-md-8 col-sm-7">
            <div className="section-title pb-60">
              <h5>Publikasi</h5>
              <h2>Jurnal IAIPI Garut</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-5">
            <div className="products-btn text-right pb-60">
              <Link href="https://jurnal.iaipigarut.ac.id" target="_blank" rel="noopener noreferrer" className="main-btn">Selengkapnya</Link>
            </div>
          </div>
        </div>

        <div className="row publication-slick">
          {jurnalData.map((jurnal) => (
            <div key={jurnal.id} className="col-lg-3">
              <div className="singel-publication mt-30">
                <div className="image">
                  <img src={jurnal.image} alt={jurnal.title} />
                </div>
                <div className="cont">
                  <div className="name">
                    <Link href={jurnal.url} target="_blank" rel="noopener noreferrer">
                      <h6>{jurnal.title}</h6>
                    </Link>
                    <span>{jurnal.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publication