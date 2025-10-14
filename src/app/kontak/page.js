'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import KontakContent from '@/components/Kontak/KontakContent'

export default function KontakPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Hubungi Kami" 
        backgroundImage="/images/page-banner-2.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Kontak', url: null }
        ]}
      />
      <KontakContent />
      <Footer />
    </>
  )
}
