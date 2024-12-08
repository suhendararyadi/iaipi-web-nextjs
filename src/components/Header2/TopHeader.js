'use client'
import Link from 'next/link'

const TopHeader = () => {
  return (
    <div className="header-top d-none d-md-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="header-contact text-lg-left text-center">
              <ul>
                <li>
                  <img src="/images/all-icon/call.png" alt="icon" />
                  <span>(124) 123 675 598</span>
                </li>
                <li>
                  <img src="/images/all-icon/email.png" alt="icon" />
                  <span>info@iaipersisgarut.ac.id</span>
                </li>
                <li>
                  <img src="/images/all-icon/map.png" alt="icon" />
                  <span>Tarogong Kidul, Garut</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="header-social text-lg-right text-center">
              <ul>
                <li><Link href="#"><i className="fa fa-facebook-f"></i></Link></li>
                <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                <li><Link href="#"><i className="fa fa-google-plus"></i></Link></li>
                <li><Link href="#"><i className="fa fa-linkedin"></i></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader