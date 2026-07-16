'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import MksContent from '@/components/Prodi/Mks'

export default function MksPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Program Studi Manajemen Keuangan Syariah" 
        backgroundImage="/images/page-banner-1.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Fakultas', url: '/fakultas' },
          { text: 'FEBI', url: '/fakultas/ekonomi' },
          { text: 'Manajemen Keuangan Syariah', url: null }
        ]}
      />
      <MksContent />
      <Footer />
    </>
  )
}