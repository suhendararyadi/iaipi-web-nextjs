'use client'
import { useEffect, useState } from 'react'

const PatnarLogo = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const initPatnarSlider = () => {
      if (window.jQuery) {
        const $ = window.jQuery
        
        if ($('.patnar-slied').length && !$('.patnar-slied').hasClass('slick-initialized')) {
          try {
            $('.patnar-slied').slick({
              dots: false,
              infinite: true,
              autoplay: true,
              speed: 800,
              slidesToShow: 4,
              slidesToScroll: 1,
              arrows: false,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 2,
                  }
                }
              ]
            })
          } catch (error) {
            console.log('PatnarLogo slider init error:', error)
          }
        }
      }
    }
    
    setTimeout(initPatnarSlider, 300)

    return () => {
      if (window.jQuery && $('.patnar-slied').length && $('.patnar-slied').hasClass('slick-initialized')) {
        try {
          window.jQuery('.patnar-slied').slick('unslick')
        } catch (e) {
          console.log('PatnarLogo slider cleanup error:', e)
        }
      }
    }
  }, [isMounted])

  if (!isMounted) return null

  return (
    <div id="patnar-logo" className="pt-40 pb-80 gray-bg">
      <div className="container">
        <div className="row patnar-slied">
          <div className="col-lg-12">
            <div className="singel-patnar text-center mt-40">
            <a href="https://staipersisgarut.pmb.siakad.tech" target="_blank" rel="noopener noreferrer">
              <img src="/images/patnar-logo/pl-1.png" alt="Logo" />
            </a>
              
            </div>
          </div>
          <div className="col-lg-12">
            <div className="singel-patnar text-center mt-40">
              <img src="/images/patnar-logo/pl-2.png" alt="Logo" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="singel-patnar text-center mt-40">
              <img src="/images/patnar-logo/pl-3.png" alt="Logo" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="singel-patnar text-center mt-40">
              <img src="/images/patnar-logo/pl-4.png" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatnarLogo