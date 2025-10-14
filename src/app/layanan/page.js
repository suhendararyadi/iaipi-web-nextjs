'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import LayananContent from '@/components/Layanan/LayananContent'

export default function LayananPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Layanan dan Sistem Informasi" 
        backgroundImage="/images/page-banner-2.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Layanan', url: null }
        ]}
      />
      <LayananContent />
      <Footer />
    </>
  )
}
