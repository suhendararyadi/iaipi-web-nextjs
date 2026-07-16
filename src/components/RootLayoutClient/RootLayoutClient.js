'use client'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import BottomNav from '@/components/Navigation/BottomNav'
import { Analytics } from "@vercel/analytics/react"

// Google Analytics ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

export default function RootLayoutClient({ children }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Sembunyikan preloader lebih cepat untuk better UX
    const timer = setTimeout(() => {
      setLoading(false)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Skip to main content - Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

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
      <main id="main-content">
        {children}
        <Analytics />
        <BottomNav />
      </main>

      {/* Back to top button */}
      <a href="#" className="back-to-top">
        <i className="fa fa-angle-up"></i>
      </a>

      {/* Vendor Scripts - Modernizr disabled to prevent hydration errors */}
      {/* <Script
        src="/js/vendor/modernizr-3.6.0.min.js"
        strategy="beforeInteractive"
      /> */}
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

      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}
