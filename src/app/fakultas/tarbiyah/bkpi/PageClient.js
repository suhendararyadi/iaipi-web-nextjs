'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import BkpiContent from '@/components/Prodi/Bkpi'

export default function BkpiPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Program Studi Bimbingan Konseling Pendidikan Islam" 
        backgroundImage="/images/page-banner-1.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Fakultas', url: '/fakultas' },
          { text: 'Tarbiyah', url: '/fakultas/tarbiyah' },
          { text: 'BKPI', url: null }
        ]}
      />
      <BkpiContent />
      <Footer />
    </>
  )
}