'use client'
import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Sembunyikan preloader setelah semua konten dimuat
    setLoading(false)
  }, [])

  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        
        {/* Bootstrap */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        
        {/* Slick CSS */}
        <link rel="stylesheet" href="/css/slick.css" />
        
        {/* Magnific Popup */}
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        
        {/* Main Style */}
        <link rel="stylesheet" href="/css/style.css" />
        
        {/* Default CSS */}
        <link rel="stylesheet" href="/css/default.css" />

         {/* Header 3 CSS */}
        <link rel="stylesheet" href="/css/header3.css" />
      
      </head>

      <body>
        {/* Preloader */}
        {loading && (
          <div className="preloader">
            <div className="loader rubix-cube">
              <div className="layer layer-1"></div>
              <div className="layer layer-2"></div>
              <div className="layer layer-3"></div>
              <div className="layer layer-4"></div>
              <div className="layer layer-5"></div>
              <div className="layer layer-6"></div>
              <div className="layer layer-7"></div>
              <div className="layer layer-8"></div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Back to top button */}
        <a href="#" className="back-to-top">
          <i className="fa fa-angle-up"></i>
        </a>

        {/* Vendor Scripts */}
        <Script 
          src="/js/vendor/modernizr-3.6.0.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="/js/vendor/jquery-1.12.4.min.js" 
          strategy="beforeInteractive"
        />

        {/* Bootstrap Scripts */}
        <Script 
          src="/js/bootstrap.min.js" 
          strategy="afterInteractive"
        />
        
        {/* Slick Slider */}
        <Script 
          src="/js/slick.min.js" 
          strategy="afterInteractive"
        />

        {/* Counter Up */}
        <Script 
          src="/js/waypoints.min.js" 
          strategy="afterInteractive"
        />
        <Script 
          src="/js/jquery.counterup.min.js" 
          strategy="afterInteractive"
        />

        {/* Nice Select */}
        <Script 
          src="/js/jquery.nice-select.min.js" 
          strategy="afterInteractive"
        />

        {/* Magnific Popup */}
        <Script 
          src="/js/jquery.magnific-popup.min.js" 
          strategy="afterInteractive"
        />

        {/* Custom Scripts */}
        <Script 
          src="/js/main.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}