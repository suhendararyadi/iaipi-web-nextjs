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
                  <li><Link href="https://facebook.com/iaipigarut" target="_blank" rel="noopener noreferrer" aria-label="Facebook IAIPI Garut"><i className="fa fa-facebook-f"></i></Link></li>
                  <li><Link href="https://instagram.com/iaipi_garut" target="_blank" rel="noopener noreferrer" aria-label="Instagram IAIPI Garut"><i className="fa fa-instagram"></i></Link></li>
                  <li><Link href="https://youtube.com/@iaipigarut" target="_blank" rel="noopener noreferrer" aria-label="YouTube IAIPI Garut"><i className="fa fa-youtube"></i></Link></li>
                  <li><Link href="https://wa.me/62085123123670?text=Halo,%20saya%20ingin%20bertanya%20tentang%20IAIPI%20Garut" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp IAIPI Garut"><i className="fa fa-whatsapp"></i></Link></li>
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
                  <li><Link href="/tentang"><i className="fa fa-angle-right"></i>Tentang</Link></li>
                  <li><Link href="/fakultas"><i className="fa fa-angle-right"></i>Fakultas</Link></li>
                  <li><Link href="/magister"><i className="fa fa-angle-right"></i>Magister</Link></li>
                  <li><Link href="/lembaga-departemen"><i className="fa fa-angle-right"></i>Lembaga</Link></li>
                </ul>
                <ul>
                  <li><Link href="/layanan"><i className="fa fa-angle-right"></i>Layanan & Sistem</Link></li>
                  <li><Link href="/kontak"><i className="fa fa-angle-right"></i>Kontak</Link></li>
                  <li><Link href="/pimpinan"><i className="fa fa-angle-right"></i>Pimpinan</Link></li>
                  <li><Link href="/pmb"><i className="fa fa-angle-right"></i>PMB</Link></li>
                  <li><Link href="https://news.iaipersisgarut.ac.id" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-right"></i>Berita</Link></li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-link support mt-40">
                <div className="footer-title pb-25">
                  <h6>Layanan</h6>
                </div>
                <ul>
                  <li><Link href="https://siakad.iaipersisgarut.ac.id" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-right"></i>SIAKAD</Link></li>
                  <li><Link href="https://library.iaipersisgarut.ac.id" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-right"></i>Perpustakaan</Link></li>
                  <li><Link href="https://repository.iaipersisgarut.ac.id" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-right"></i>Repository</Link></li>
                  <li><Link href="https://lpm.iaipersisgarut.ac.id" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-right"></i>LPM</Link></li>
                  <li><Link href="https://lppm.iaipersisgarut.ac.id" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-right"></i>LPPM</Link></li>
                  <li><Link href="https://jurnal.iaipigarut.ac.id" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-right"></i>Jurnal</Link></li>
                  <li><Link href="https://news.iaipersisgarut.ac.id" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-right"></i>Berita</Link></li>
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
                      <p>Jl. Aruji Kartawinata No. 2, Tarogong Kidul, Kabupaten Garut, Jawa Barat 44151</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="cont">
                      <p><a href="tel:+62085123123670" style={{ color: 'inherit' }}>+62 851 2312 3670</a></p>
                      <p><a href="https://wa.me/62085123123670" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>+62 851 2312 3670 (WhatsApp)</a></p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-envelope-o"></i>
                    </div>
                    <div className="cont">
                      <p><a href="mailto:rektorat@iaipersisgarut.ac.id" style={{ color: 'inherit' }}>rektorat@iaipersisgarut.ac.id</a></p>
                      <p><a href="mailto:pmb@iaipersisgarut.ac.id" style={{ color: 'inherit' }}>pmb@iaipersisgarut.ac.id</a></p>
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
                  © 2024 Institut Agama Islam PERSIS Garut. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="copyright text-md-right text-center pt-15">
                <p>Dikembangkan Oleh Direktorat IT IAIPI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer