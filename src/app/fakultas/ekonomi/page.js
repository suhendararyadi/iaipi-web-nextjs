'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import EkonomiContent from '@/components/Fakultas/Ekonomi'

export default function EkonomiPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Fakultas Ekonomi dan Bisnis Islam" 
        backgroundImage="/images/page-banner-1.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Fakultas', url: '/fakultas' },
          { text: 'Fakultas Ekonomi dan Bisnis Islam', url: null }
        ]}
      />
      <EkonomiContent />
      <Footer />
    </>
  )
}