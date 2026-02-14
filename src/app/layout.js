'use client'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import WhatsAppFloat from '@/components/WhatsAppFloat/WhatsAppFloat'
import BottomNav from '@/components/Navigation/BottomNav'

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Sembunyikan preloader lebih cepat untuk better UX
    const timer = setTimeout(() => {
      setLoading(false)
    }, 200)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en">
      <head>
        <title>Institut Agama Islam PERSIS Garut | Kampus Saintek Dakwah Turats Islam</title>
        <meta name="description" content="IAIPI Garut - Perguruan Tinggi Islam terkemuka di Jawa Barat. Tersedia program S1 dan S2 dengan akreditasi B. Beasiswa penuh untuk hafidz Al-Qur'an. Daftar sekarang!" />
        <meta name="keywords" content="kampus islam garut, iaipi garut, perguruan tinggi islam, kuliah di garut, beasiswa kuliah, ekonomi syariah, ilmu alquran, ilmu hadits, fakultas tarbiyah, magister iaipi" />
        <meta name="author" content="Institut Agama Islam PERSIS Garut" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iaipersisgarut.ac.id/" />
        <meta property="og:title" content="Institut Agama Islam PERSIS Garut | Kampus Saintek Dakwah" />
        <meta property="og:description" content="Perguruan Tinggi Islam terkemuka dengan program S1 & S2. Beasiswa penuh tersedia!" />
        <meta property="og:image" content="https://iaipersisgarut.ac.id/images/logo.jpeg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://iaipersisgarut.ac.id/" />
        <meta property="twitter:title" content="Institut Agama Islam PERSIS Garut" />
        <meta property="twitter:description" content="Kampus Islam terkemuka di Garut dengan beasiswa penuh" />
        <meta property="twitter:image" content="https://iaipersisgarut.ac.id/images/logo.jpeg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://iaipersisgarut.ac.id/" />
        
        {/* Favicon - Multiple formats for best compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
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

        <link rel="stylesheet" href="/css/tabs.css" />

        {/* Custom CSS */}
        <link rel="stylesheet" href="/css/custom.css" />
        
        {/* Slider Fix CSS - Must load last */}
        <link rel="stylesheet" href="/css/slider-fix.css" />
        
        {/* Islamic Header CSS - Switch between v1, v2, and v3 */}
        {/* <link rel="stylesheet" href="/css/header-islamic.css" /> */}
        {/* <link rel="stylesheet" href="/css/header-islamic-v2.css" /> */}
        <link rel="stylesheet" href="/css/header-islamic-v3.css" />
      </head>

      <body>
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

        {/* Structured Data - Organization */}
        <Script id="structured-data-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Institut Agama Islam PERSIS Garut",
              "alternateName": "IAIPI Garut",
              "url": "https://iaipersisgarut.ac.id",
              "logo": "https://iaipersisgarut.ac.id/images/logo.jpeg",
              "description": "Institut Agama Islam PERSIS Garut adalah perguruan tinggi Islam yang menyelenggarakan pendidikan akademik dan profesional",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Pramuka No.13, Jayawaras",
                "addressLocality": "Garut",
                "addressRegion": "Jawa Barat",
                "postalCode": "44151",
                "addressCountry": "ID"
              },
              "telephone": "+62-262-232891",
              "email": "info@iaipersisgarut.ac.id",
              "sameAs": [
                "https://facebook.com/iaipigarut",
                "https://instagram.com/iaipi_garut",
                "https://youtube.com/@iaipigarut"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  )
}