'use client'
import Link from 'next/link'
import TopHeader from './TopHeader'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header id="header-part">
      {/* Top Header */}
      {/* <TopHeader /> */}
      
      {/* Logo & Support */}
      <div className="header-logo-support pt-30 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="support-button float-right d-none d-md-block">
                <div className="support float-left">
                  <div className="icon">
                    <img src="/images/all-icon/support.png" alt="icon" />
                  </div>
                  <div className="cont">
                    <p>Need Help? call us free</p>
                    <span>321 325 5678</span>
                  </div>
                </div>
                <div className="button float-left">
                  <Link href="#" className="main-btn">Apply Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <Navigation />

      {/* Search Box */}
      <div className="search-box">
        <div className="serach-form">
          <div className="closebtn">
            <span></span>
            <span></span>
          </div>
          <form action="#">
            <input type="text" placeholder="Search by keyword" />
            <button><i className="fa fa-search"></i></button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header