'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import EkosyContent from '@/components/Prodi/Ekosy'

export default function EkosyPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Program Studi Ekonomi Syariah" 
        backgroundImage="/images/page-banner-1.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Fakultas', url: '/fakultas' },
          { text: 'FEBI', url: '/fakultas/ekonomi' },
          { text: 'Ekonomi Syariah', url: null }
        ]}
      />
      <EkosyContent />
      <Footer />
    </>
  )
}