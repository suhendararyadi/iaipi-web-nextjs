'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="navigation navigation-2">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-11 col-md-10 col-sm-9 col-9">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand" href="/" style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
                <Image 
                  src="/images/logo.jpeg" 
                  alt="Logo"
                  width={110}
                  height={110}
                  style={{
                    objectFit: 'contain',
                  }}
                  priority
                />
              </Link>
              <button 
                className="navbar-toggler" 
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div className={`collapse navbar-collapse sub-menu-bar ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="active" href="/">Home</Link>
                    {/* <ul className="sub-menu">
                      <li><Link href="/index-2">Home 01</Link></li>
                      <li><Link href="/index-3">Home 02</Link></li>
                      <li><Link href="/index-4">Home 03</Link></li>
                    </ul> */}
                  </li>
                  <li className="nav-item">
                    <Link href="/tentang">Tentang</Link>
                    <ul className="sub-menu">
                      <li><Link href="/tentang">Tentang Institut</Link></li>
                      <li><Link href="/pimpinan">Pimpinan Institut</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="#">Pendidikan</Link>
                    <ul className="sub-menu">
                      <li><Link href="/fakultas">Fakultas</Link></li>
                      <li><Link href="/magister">Magister S2</Link></li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/events">Mahasiswa</Link>
                    <ul className="sub-menu">
                      <li><Link href="#">Kehidupan Kampus</Link></li>
                      <li><Link href="#">Unit Kegiatan Mahasiswa</Link></li>
                      <li><Link href="#">Prestasi Mahasiswa</Link></li>
                      <li><Link href="#">Beasiswa</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="https://iaipi-garut.hashnode.dev"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                      Berita & Agenda
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link 
                          href="https://news.iaipersisgarut.ac.id" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Berita
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="https://news.iaipersisgarut.ac.id/series/agenda" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Agenda
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="https://staipersisgarut.pmb.siakad.tech">Penerimaan</Link>
                    {/* <ul className="sub-menu">
                      <li><Link href="/contact">Contact Us</Link></li>
                      <li><Link href="/contact-2">Contact Us 2</Link></li>
                    </ul> */}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* <div className="col-lg-1 col-md-2 col-sm-3 col-3">
            <div className="right-icon text-right">
              <ul>
                <li><Link href="#" id="search"><i className="fa fa-search"></i></Link></li>
                <li><Link href="#"><i className="fa fa-shopping-bag"></i><span>0</span></Link></li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Navigation