'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header id="header-part" className="header-3">
      {/* Top Header */}
      <div className="header-top d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="header-contact text-lg-left">
                <ul>
                  <li>
                    <Link href="/staff">Staff</Link>
                  </li>
                  <li>
                    <Link href="/students">Students</Link>
                  </li>
                  <li>
                    <Link href="/alumni">Alumni</Link>
                  </li>
                  <li>
                    <Link href="/community">Local Community</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="header-social text-lg-right">
                <ul>
                  <li><Link href="#"><i className="fa fa-search"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="navigation-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                {/* Logo */}
                <Link className="navbar-brand" href="/">
                  <Image 
                    src="/images/logo.jpeg" 
                    alt="Logo"
                    width={180}
                    height={60}
                    style={{
                      objectFit: 'contain',
                    }}
                    priority
                  />
                </Link>

                {/* Mobile Toggle */}
                <button 
                  className="navbar-toggler" 
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>

                {/* Main Menu */}
                <div className={`collapse navbar-collapse main-menu ${isMenuOpen ? 'show' : ''}`}>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                      <Link href="#" className="nav-link">ADMISSIONS</Link>
                      <ul className="sub-menu">
                        <li><Link href="/undergraduate">Undergraduate</Link></li>
                        <li><Link href="/graduate">Graduate</Link></li>
                        <li><Link href="/international">International</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link href="#" className="nav-link">RESEARCH</Link>
                      <ul className="sub-menu">
                        <li><Link href="/research-areas">Research Areas</Link></li>
                        <li><Link href="/publications">Publications</Link></li>
                        <li><Link href="/facilities">Facilities</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link href="#" className="nav-link">NEWS & EVENTS</Link>
                      <ul className="sub-menu">
                        <li><Link href="/news">News</Link></li>
                        <li><Link href="/events">Events</Link></li>
                        <li><Link href="/blogs">Blogs</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link href="#" className="nav-link">ABOUT</Link>
                      <ul className="sub-menu">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/vision-mission">Vision & Mission</Link></li>
                        <li><Link href="/leadership">Leadership</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Quick Links */}
                <div className="right-nav ml-4">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <Link href="#" className="nav-link">Colleges</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link href="#" className="nav-link">Departments</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header3