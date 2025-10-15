'use client'
import Link from 'next/link'

const TopInfoBar = () => {
  return (
    <div className="islamic-top-info-bar">
      <div className="container">
        <div className="islamic-info-content">
          <div className="islamic-info-left">
            {/* Institution Name - Hidden on smaller screens */}
            <div className="islamic-institution-name">
              <i className="fa fa-university"></i>
              <span>Institut Agama Islam PERSIS Garut</span>
            </div>
            
            {/* Phone */}
            <div className="islamic-info-item">
              <i className="fa fa-phone"></i>
              <a href="tel:+6285123123670">085123123670</a>
            </div>
            
            {/* Email */}
            <div className="islamic-info-item">
              <i className="fa fa-envelope"></i>
              <a href="mailto:rektorat@iaipersisgarut.ac.id">rektorat@iaipersisgarut.ac.id</a>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="islamic-social-links">
            <Link href="https://facebook.com/iaipigarut" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link href="https://instagram.com/iaipi_garut" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa fa-instagram"></i>
            </Link>
            <Link href="https://youtube.com/@iaipigarut" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fa fa-youtube"></i>
            </Link>
            <Link href="https://wa.me/6285123123670" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fa fa-whatsapp"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopInfoBar
