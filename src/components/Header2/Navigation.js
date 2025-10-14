'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      {/* Overlay untuk close menu di mobile */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <div className="navigation navigation-2">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-11 col-md-10 col-sm-9 col-9">
              <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" href="/" style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
                  <Image 
                    src="/images/logo.jpeg" 
                    alt="Logo Institut Agama Islam PERSIS Garut"
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
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isMenuOpen}
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>

                <div className={`collapse navbar-collapse sub-menu-bar ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="active" href="/" onClick={closeMenu}>Home</Link>
                    {/* <ul className="sub-menu">
                      <li><Link href="/index-2">Home 01</Link></li>
                      <li><Link href="/index-3">Home 02</Link></li>
                      <li><Link href="/index-4">Home 03</Link></li>
                    </ul> */}
                  </li>
                  <li className="nav-item">
                    <Link href="#">Profil</Link>
                    <ul className="sub-menu">
                      <li><Link href="/tentang" onClick={closeMenu}>Tentang Institut</Link></li>
                      <li><Link href="/pimpinan" onClick={closeMenu}>Pimpinan Institut</Link></li>
                      <li><Link href="/lembaga-departemen" onClick={closeMenu}>Lembaga dan Departemen</Link></li>
                      <li><Link href="/layanan" onClick={closeMenu}>Layanan & Sistem Informasi</Link></li>
                      <li><Link href="/kontak" onClick={closeMenu}>Kontak</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="#">Pendidikan</Link>
                    <ul className="sub-menu">
                      <li><Link href="/fakultas" onClick={closeMenu}>Fakultas</Link></li>
                      <li><Link href="/magister" onClick={closeMenu}>Magister S2</Link></li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#">Mahasiswa</Link>
                    <ul className="sub-menu">
                      <li><Link href="#" onClick={closeMenu}>Kehidupan Kampus</Link></li>
                      <li><Link href="#" onClick={closeMenu}>Unit Kegiatan Mahasiswa</Link></li>
                      <li><Link href="#" onClick={closeMenu}>Prestasi Mahasiswa</Link></li>
                      <li><Link href="#" onClick={closeMenu}>Beasiswa</Link></li>
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
                  {/* Tombol Pendaftaran Khusus */}
                  <li className="nav-item nav-item-register">
                    <Link 
                      href="/pmb" 
                      className="btn-register"
                      onClick={closeMenu}
                    >
                      <i className="fa fa-edit"></i>
                      <span>Daftar Sekarang</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-3 col-3">
            {/* Tombol Pendaftaran Mobile */}
            <div className="register-btn-wrapper">
              <Link href="/pmb" className="btn-register-mobile">
                <i className="fa fa-edit"></i>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
