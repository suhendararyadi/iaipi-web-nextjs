'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import SpiContent from '@/components/Prodi/Spi'

export default function SpiPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner
        title="Program Studi Sejarah Peradaban Islam"
        backgroundImage="/images/page-banner-1.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Fakultas', url: '/fakultas' },
          { text: 'Ushuluddin', url: '/fakultas/ushuluddin' },
          { text: 'Sejarah Peradaban Islam', url: null }
        ]}
      />
      <SpiContent />
      <Footer />
    </>
  )
}
