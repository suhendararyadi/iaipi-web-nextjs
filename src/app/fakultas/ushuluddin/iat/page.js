'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import IatContent from '@/components/Prodi/Iat' // Pastikan Anda membuat komponen ini

export default function IatPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Program Studi Ilmu Aqidah dan Tafsir" 
        backgroundImage="/images/page-banner-2.jpg" // Ganti dengan gambar yang sesuai
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Fakultas', url: '/fakultas' },
          { text: 'Ushuluddin', url: '/fakultas/ushuluddin' },
          { text: 'Ilmu Aqidah dan Tafsir', url: null }
        ]}
      />
      <IatContent />
      <Footer />
    </>
  )
}
