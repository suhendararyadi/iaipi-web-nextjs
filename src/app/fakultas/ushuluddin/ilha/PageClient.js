'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import IlhaContent from '@/components/Prodi/Ilha'

export default function IlhaPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Program Studi Ilmu Hadis" 
        backgroundImage="/images/page-banner-1.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Fakultas', url: '/fakultas' },
          { text: 'Ushuluddin', url: '/fakultas/ushuluddin' },
          { text: 'Ilmu Hadis', url: null }
        ]}
      />
      <IlhaContent />
      <Footer />
    </>
  )
}