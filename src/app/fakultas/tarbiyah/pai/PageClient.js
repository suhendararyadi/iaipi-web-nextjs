'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import PaiContent from '@/components/Prodi/Pai'

export default function PaiPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Program Studi Pendidikan Agama Islam" 
        backgroundImage="/images/page-banner-1.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Fakultas', url: '/fakultas' },
          { text: 'Tarbiyah', url: '/fakultas/tarbiyah' },
          { text: 'Pendidikan Agama Islam', url: null }
        ]}
      />
      <PaiContent />
      <Footer />
    </>
  )
}