import Link from 'next/link'
import { useState } from 'react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="navigation">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-9 col-8">
            <nav className="navbar navbar-expand-lg">
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
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link href="/" className="active">
                      Home
                    </Link>
                    <ul className="sub-menu">
                      <li><Link href="/">Home 01</Link></li>
                      <li><Link href="/home-2">Home 02</Link></li>
                      <li><Link href="/home-3">Home 03</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/about">About us</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/courses">Courses</Link>
                    <ul className="sub-menu">
                      <li><Link href="/courses">Courses</Link></li>
                      <li><Link href="/courses-single">Course Single</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/events">Events</Link>
                    <ul className="sub-menu">
                      <li><Link href="/events">Events</Link></li>
                      <li><Link href="/events-single">Event Single</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/teachers">Our teachers</Link>
                    <ul className="sub-menu">
                      <li><Link href="/teachers">teachers</Link></li>
                      <li><Link href="/teachers-single">teacher Single</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/blog">Blog</Link>
                    <ul className="sub-menu">
                      <li><Link href="/blog">Blog</Link></li>
                      <li><Link href="/blog-single">Blog Single</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/shop">Shop</Link>
                    <ul className="sub-menu">
                      <li><Link href="/shop">Shop</Link></li>
                      <li><Link href="/shop-single">Shop Single</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact">Contact</Link>
                    <ul className="sub-menu">
                      <li><Link href="/contact">Contact Us</Link></li>
                      <li><Link href="/contact-2">Contact Us 2</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-3 col-4">
            <div className="right-icon text-right">
              <ul>
                <li><a href="#" id="search"><i className="fa fa-search"></i></a></li>
                <li><a href="#"><i className="fa fa-shopping-bag"></i><span>0</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation