'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import PbaContent from '@/components/Prodi/Pba'

export default function PbaPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner
        title="Program Studi Pendidikan Bahasa Arab"
        backgroundImage="/images/page-banner-1.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Fakultas', url: '/fakultas' },
          { text: 'Tarbiyah', url: '/fakultas/tarbiyah' },
          { text: 'Pendidikan Bahasa Arab', url: null }
        ]}
      />
      <PbaContent />
      <Footer />
    </>
  )
}
