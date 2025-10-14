'use client'
import { useEffect, useState } from 'react'

const Testimonial = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const initTestimonialSlider = () => {
      if (window.jQuery) {
        const $ = window.jQuery
        
        if ($('.testimonial-slied').length && !$('.testimonial-slied').hasClass('slick-initialized')) {
          try {
            $('.testimonial-slied').slick({
              dots: true,
              infinite: true,
              speed: 800,
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 5000,
              pauseOnHover: true,
              arrows: true,
              prevArrow: '<button type="button" class="slick-prev" aria-label="Previous testimonial"><i class="fa fa-angle-left"></i></button>',
              nextArrow: '<button type="button" class="slick-next" aria-label="Next testimonial"><i class="fa fa-angle-right"></i></button>',
              responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 1,
                    arrows: false
                  }
                }
              ]
            })
          } catch (error) {
            console.log('Testimonial slider init error:', error)
          }
        }
      }
    }
    
    setTimeout(initTestimonialSlider, 300)

    return () => {
      if (window.jQuery && $('.testimonial-slied').length && $('.testimonial-slied').hasClass('slick-initialized')) {
        try {
          window.jQuery('.testimonial-slied').slick('unslick')
        } catch (e) {
          console.log('Testimonial slider cleanup error:', e)
        }
      }
    }
  }, [isMounted])

  if (!isMounted) return null

  const testimonials = [
    {
      name: "Ahmad Fauzi",
      program: "Ilmu Al-Qur'an dan Tafsir",
      year: "Alumni 2023",
      photo: "/images/testimonial/t-1.jpg",
      testimony: "Alhamdulillah, IAIPI Garut memberikan pengalaman belajar yang luar biasa. Dosen-dosen yang berkompeten dan lingkungan Islami membuat saya semakin mencintai ilmu Al-Qur'an."
    },
    {
      name: "Siti Nurhaliza",
      program: "Ekonomi Syariah",
      year: "Mahasiswa Aktif",
      photo: "/images/testimonial/t-2.jpg",
      testimony: "Kampus yang nyaman dengan sistem pembelajaran modern. Program beasiswa sangat membantu saya dalam menuntut ilmu. Recommended untuk yang ingin kuliah di kampus Islami!"
    },
    {
      name: "Muhammad Rizki",
      program: "Ilmu Hadits",
      year: "Alumni 2022",
      photo: "/images/testimonial/t-3.jpg",
      testimony: "Terima kasih IAIPI Garut telah membimbing saya menjadi pribadi yang lebih baik. Ilmu yang didapat tidak hanya akademis tapi juga pembinaan karakter Islami."
    }
  ]

  return (
    <section id="testimonial" className="section pt-115 pb-115 bg_cover" style={{backgroundImage: "url('/images/bg-2.jpg')"}} data-overlay="8">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-40">
              <h5>Testimonial</h5>
              <h2>Kata Mereka Tentang IAIPI</h2>
            </div>
          </div>
        </div>
        <div className="row testimonial-slied mt-40">
          {testimonials.map((item, index) => (
            <div key={index} className="col-lg-6">
              <div className="singel-testimonial">
                <div className="testimonial-thum">
                  <img src={item.photo} alt={`Testimonial ${item.name}`} />
                  <div className="quote">
                    <i className="fa fa-quote-right"></i>
                  </div>
                </div>
                <div className="testimonial-cont">
                  <p>{item.testimony}</p>
                  <h6>{item.name}</h6>
                  <span>{item.program} - {item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial