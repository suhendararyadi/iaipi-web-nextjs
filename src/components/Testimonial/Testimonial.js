'use client'
import { useEffect, useState } from 'react'

const Testimonial = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Inisialisasi slider testimonial
    const initTestimonialSlider = () => {
      if (window.jQuery) {
        const $ = window.jQuery
        $('.testimonial-slied').slick({
          dots: false,
          infinite: true,
          speed: 800,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          arrows: true,
          prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
          nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
          responsive: [
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
    setTimeout(initTestimonialSlider, 100)
  }, [])

  if (!isMounted) return null

  return (
    <section id="testimonial" className="section pt-115 pb-115 bg_cover" style={{backgroundImage: "url('/images/bg-2.jpg')"}} data-overlay="8">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-40">
              <h5>Testimonial</h5>
              <h2>What they say</h2>
            </div>
          </div>
        </div>
        <div className="row testimonial-slied mt-40">
          {/* Testimonial Item 1 */}
          <div className="col-lg-6">
            <div className="singel-testimonial">
              <div className="testimonial-thum">
                <img src="/images/testimonial/t-1.jpg" alt="Testimonial" />
                <div className="quote">
                  <i className="fa fa-quote-right"></i>
                </div>
              </div>
              <div className="testimonial-cont">
                <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                <h6>Rubina Helen</h6>
                <span>Bsc, Engineering</span>
              </div>
            </div>
          </div>

          {/* Testimonial Item 2 */}
          <div className="col-lg-6">
            <div className="singel-testimonial">
              <div className="testimonial-thum">
                <img src="/images/testimonial/t-2.jpg" alt="Testimonial" />
                <div className="quote">
                  <i className="fa fa-quote-right"></i>
                </div>
              </div>
              <div className="testimonial-cont">
                <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                <h6>Rubina Helen</h6>
                <span>Bsc, Engineering</span>
              </div>
            </div>
          </div>

          {/* Testimonial Item 3 */}
          <div className="col-lg-6">
            <div className="singel-testimonial">
              <div className="testimonial-thum">
                <img src="/images/testimonial/t-3.jpg" alt="Testimonial" />
                <div className="quote">
                  <i className="fa fa-quote-right"></i>
                </div>
              </div>
              <div className="testimonial-cont">
                <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                <h6>Rubina Helen</h6>
                <span>Bsc, Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial