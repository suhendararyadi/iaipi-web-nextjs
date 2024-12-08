'use client'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="footer-top pt-40 pb-70">
        <div className="container">
          <div className="row">
            {/* About */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-about mt-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo.jpeg" alt="Logo"
                      width={100}  // sesuaikan ukuran yang diinginkan
                      height={100}  // sesuaikan ukuran yang diinginkan
                      style={{
                        objectFit: 'contain',
                        width: 'auto',
                        maxHeight: '90px'  // sesuaikan ukuran yang diinginkan
                      }}
                    />
                  </Link>
                </div>
                <p>Institut Agama Islam PERSIS Garut adalah perguruan tinggi yang menyelenggarakan pendidikan akademik, profesional dalam kelompok disiplin agama, ilmu pengetahuan, teknologi dan kesenian.</p>
                <ul className="mt-20">
                  <li><Link href="#"><i className="fa fa-facebook-f"></i></Link></li>
                  <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                  <li><Link href="#"><i className="fa fa-google-plus"></i></Link></li>
                  <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                </ul>
              </div>
            </div>

            {/* Sitemap */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-link mt-40">
                <div className="footer-title pb-25">
                  <h6>Sitemap</h6>
                </div>
                <ul>
                  <li><Link href="/"><i className="fa fa-angle-right"></i>Home</Link></li>
                  <li><Link href="/about"><i className="fa fa-angle-right"></i>About us</Link></li>
                  <li><Link href="/courses"><i className="fa fa-angle-right"></i>Courses</Link></li>
                  <li><Link href="/blog"><i className="fa fa-angle-right"></i>News</Link></li>
                  <li><Link href="/events"><i className="fa fa-angle-right"></i>Event</Link></li>
                </ul>
                <ul>
                  <li><Link href="#"><i className="fa fa-angle-right"></i>Gallery</Link></li>
                  <li><Link href="/shop"><i className="fa fa-angle-right"></i>Shop</Link></li>
                  <li><Link href="/teachers"><i className="fa fa-angle-right"></i>Teachers</Link></li>
                  <li><Link href="#"><i className="fa fa-angle-right"></i>Support</Link></li>
                  <li><Link href="/contact"><i className="fa fa-angle-right"></i>Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Support */}
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-link support mt-40">
                <div className="footer-title pb-25">
                  <h6>Support</h6>
                </div>
                <ul>
                  <li><Link href="#"><i className="fa fa-angle-right"></i>FAQS</Link></li>
                  <li><Link href="#"><i className="fa fa-angle-right"></i>Privacy</Link></li>
                  <li><Link href="#"><i className="fa fa-angle-right"></i>Policy</Link></li>
                  <li><Link href="#"><i className="fa fa-angle-right"></i>Support</Link></li>
                  <li><Link href="#"><i className="fa fa-angle-right"></i>Documentation</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-address mt-40">
                <div className="footer-title pb-25">
                  <h6>Contact Us</h6>
                </div>
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fa fa-home"></i>
                    </div>
                    <div className="cont">
                      <p>Tarogong Kidul, Garut. Indonesia</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="cont">
                      <p>+3 123 456 789</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-envelope-o"></i>
                    </div>
                    <div className="cont">
                      <p>info@iaipersisgarut.ac.id</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="footer-copyright pt-10 pb-25">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="copyright text-md-left text-center pt-15">
                <p>
                  Departemen IT
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="copyright text-md-right text-center pt-15"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer