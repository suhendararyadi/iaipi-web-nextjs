'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Category = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Inisialisasi slider kategori
    const initCategorySlider = () => {
      if (window.jQuery) {
        const $ = window.jQuery
        $('.category-slied').slick({
          dots: false,
          infinite: true,
          speed: 800,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
          nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
          responsive: [
            {
              breakpoint: 922,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        })
      }
    }

    // Tunggu sebentar untuk memastikan jQuery sudah dimuat
    setTimeout(initCategorySlider, 100)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section id="category-part" className="section">
      <div className="container">
        <div className="category pt-40 pb-80">
          <div className="row">
            <div className="col-lg-4">
              <div className="category-text pt-40">
                <h2>Best platform to learn everything</h2>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2">
              <div className="row category-slied mt-40">
                <div className="col-lg-4">
                  <Link href="#" className="singel-category text-center color-1">
                    <span className="icon">
                      <img src="/images/all-icon/ctg-1.png" alt="Icon" />
                    </span>
                    <span className="cont">
                      <span>Language</span>
                    </span>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <Link href="#" className="singel-category text-center color-2">
                    <span className="icon">
                      <img src="/images/all-icon/ctg-2.png" alt="Icon" />
                    </span>
                    <span className="cont">
                      <span>Business</span>
                    </span>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <Link href="#" className="singel-category text-center color-3">
                    <span className="icon">
                      <img src="/images/all-icon/ctg-3.png" alt="Icon" />
                    </span>
                    <span className="cont">
                      <span>Literature</span>
                    </span>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <Link href="#" className="singel-category text-center color-1">
                    <span className="icon">
                      <img src="/images/all-icon/ctg-1.png" alt="Icon" />
                    </span>
                    <span className="cont">
                      <span>Language</span>
                    </span>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <Link href="#" className="singel-category text-center color-2">
                    <span className="icon">
                      <img src="/images/all-icon/ctg-2.png" alt="Icon" />
                    </span>
                    <span className="cont">
                      <span>Business</span>
                    </span>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <Link href="#" className="singel-category text-center color-3">
                    <span className="icon">
                      <img src="/images/all-icon/ctg-3.png" alt="Icon" />
                    </span>
                    <span className="cont">
                      <span>Literature</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category