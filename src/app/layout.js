import RootLayoutClient from '@/components/RootLayoutClient/RootLayoutClient'

export const metadata = {
  metadataBase: new URL('https://iaipersisgarut.ac.id'),
  title: {
    default: 'Institut Agama Islam PERSIS Garut | Kampus Saintek Dakwah Turats Islam',
    template: '%s | IAI PERSIS Garut',
  },
  description: "IAIPI Garut - Perguruan Tinggi Islam terkemuka di Jawa Barat. Tersedia program S1 dan S2 dengan akreditasi B. Beasiswa penuh untuk hafidz Al-Qur'an. Daftar sekarang!",
  keywords: ['kampus islam garut', 'iaipi garut', 'perguruan tinggi islam', 'kuliah di garut', 'beasiswa kuliah', 'ekonomi syariah', 'ilmu alquran', 'ilmu hadits', 'fakultas tarbiyah', 'magister iaipi'],
  authors: [{ name: 'Institut Agama Islam PERSIS Garut' }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Institut Agama Islam PERSIS Garut | Kampus Saintek Dakwah',
    description: 'Perguruan Tinggi Islam terkemuka dengan program S1 & S2. Beasiswa penuh tersedia!',
    images: ['/images/logo.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Institut Agama Islam PERSIS Garut',
    description: 'Kampus Islam terkemuka di Garut dengan beasiswa penuh',
    images: ['/images/logo.jpeg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
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

        <link rel="stylesheet" href="/css/tabs.css" />

        {/* Custom CSS */}
        <link rel="stylesheet" href="/css/custom.css" />
        
        {/* Slider Fix CSS - Must load last */}
        <link rel="stylesheet" href="/css/slider-fix.css" />
        
        {/* Islamic Header CSS - Switch between v1, v2, and v3 */}
        {/* <link rel="stylesheet" href="/css/header-islamic.css" /> */}
        {/* <link rel="stylesheet" href="/css/header-islamic-v2.css" /> */}
        <link rel="stylesheet" href="/css/header-islamic-v3.css" />

        {/* Structured Data - Organization */}
        <script
          id="structured-data-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Institut Agama Islam PERSIS Garut',
              alternateName: 'IAIPI Garut',
              url: 'https://iaipersisgarut.ac.id',
              logo: 'https://iaipersisgarut.ac.id/images/logo.jpeg',
              description: 'Institut Agama Islam PERSIS Garut adalah perguruan tinggi Islam yang menyelenggarakan pendidikan akademik dan profesional',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Jl. Aruji Kartawinata No. 2, Tarogong Kidul',
                addressLocality: 'Garut',
                addressRegion: 'Jawa Barat',
                postalCode: '44151',
                addressCountry: 'ID',
              },
              telephone: '+62-851-2312-3670',
              email: 'rektorat@iaipersisgarut.ac.id',
              sameAs: [
                'https://facebook.com/iaipigarut',
                'https://instagram.com/iaipi_garut',
                'https://youtube.com/@iaipigarut',
              ],
            }),
          }}
        />
      </head>

      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  )
}