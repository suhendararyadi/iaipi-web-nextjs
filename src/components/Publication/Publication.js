'use client'
import Link from 'next/link'

const Publication = () => {
  return (
    <section id="publication-part" className="section pt-115 pb-120 gray-bg">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6 col-md-8 col-sm-7">
            <div className="section-title pb-60">
              <h5>Publications</h5>
              <h2>From Store</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-5">
            <div className="products-btn text-right pb-60">
              <Link href="#" className="main-btn">All Products</Link>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Publication 1 */}
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="singel-publication mt-30">
              <div className="image">
                <img src="/images/publication/p-1.jpg" alt="Publication" />
                <div className="add-cart">
                  <ul>
                    <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                    <li><Link href="#"><i className="fa fa-heart-o"></i></Link></li>
                  </ul>
                </div>
              </div>
              <div className="cont">
                <div className="name">
                  <Link href="/shop-singel"><h6>Set for life </h6></Link>
                  <span>By Scott Trench</span>
                </div>
                <div className="button text-right">
                  <Link href="#" className="main-btn">Buy Now ($50)</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Publication 2 */}
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="singel-publication mt-30">
              <div className="image">
                <img src="/images/publication/p-2.jpg" alt="Publication" />
                <div className="add-cart">
                  <ul>
                    <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                    <li><Link href="#"><i className="fa fa-heart-o"></i></Link></li>
                  </ul>
                </div>
              </div>
              <div className="cont">
                <div className="name">
                  <Link href="/shop-singel"><h6>A Daughters </h6></Link>
                  <span>By Scott Trench</span>
                </div>
                <div className="button text-right">
                  <Link href="#" className="main-btn">Buy Now ($30)</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Publication 3 */}
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="singel-publication mt-30">
              <div className="image">
                <img src="/images/publication/p-3.jpg" alt="Publication" />
                <div className="add-cart">
                  <ul>
                    <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                    <li><Link href="#"><i className="fa fa-heart-o"></i></Link></li>
                  </ul>
                </div>
              </div>
              <div className="cont">
                <div className="name">
                  <Link href="/shop-singel"><h6>A Magnet </h6></Link>
                  <span>By Scott Trench</span>
                </div>
                <div className="button text-right">
                  <Link href="#" className="main-btn">Buy Now ($20)</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Publication 4 */}
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="singel-publication mt-30">
              <div className="image">
                <img src="/images/publication/p-4.jpg" alt="Publication" />
                <div className="add-cart">
                  <ul>
                    <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                    <li><Link href="#"><i className="fa fa-heart-o"></i></Link></li>
                  </ul>
                </div>
              </div>
              <div className="cont">
                <div className="name">
                  <Link href="/shop-singel"><h6>Pices of light</h6></Link>
                  <span>By Scott Trench</span>
                </div>
                <div className="button text-right">
                  <Link href="#" className="main-btn">Buy Now ($75)</Link>
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