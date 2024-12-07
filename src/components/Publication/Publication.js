'use client'
import Link from 'next/link'

const Publication = () => {
  return (
    <section id="publication-part" className="section pt-115 pb-120 gray-bg">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6 col-md-8 col-sm-7">
            <div className="section-title pb-60">
              <h5>Publikasi</h5>
              <h2>Jurnal dan Buku</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-5">
            <div className="products-btn text-right pb-60">
              <Link href="#" className="main-btn">Selengkapnya</Link>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Publication 1 */}
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="singel-publication mt-30">
              <div className="image">
                <img src="/images/publication/p-1.jpg" alt="Publication" />
                
              </div>
              <div className="cont">
                <div className="name">
                  <Link href="/shop-singel"><h6>Jurnal Irsyada </h6></Link>
                  <span>BKPI</span>
                </div>
                
              </div>
            </div>
          </div>

          {/* Publication 2 */}
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="singel-publication mt-30">
              <div className="image">
                <img src="/images/publication/p-2.jpg" alt="Publication" />
                
              </div>
              <div className="cont">
                <div className="name">
                  <Link href="/shop-singel"><h6>Jurnal Hadits </h6></Link>
                  <span>Ilmu Haidts</span>
                </div>
                
              </div>
            </div>
          </div>

          {/* Publication 3 */}
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="singel-publication mt-30">
              <div className="image">
                <img src="/images/publication/p-3.jpg" alt="Publication" />
                
              </div>
              <div className="cont">
                <div className="name">
                  <Link href="/shop-singel"><h6>Jurnal Tarbiyah </h6></Link>
                  <span>PGMI</span>
                </div>
                
              </div>
            </div>
          </div>

          {/* Publication 4 */}
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="singel-publication mt-30">
              <div className="image">
                <img src="/images/publication/p-4.jpg" alt="Publication" />
                
              </div>
              <div className="cont">
                <div className="name">
                  <Link href="/shop-singel"><h6>Jurnal Bisnis </h6></Link>
                  <span>Ekonomi Syariah</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publication