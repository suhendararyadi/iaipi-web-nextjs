'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import PgmiContent from '@/components/Prodi/Pgmi'

export default function PgmiPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Program Studi Pendidikan Guru Madrasah Ibtidaiyah" 
        backgroundImage="/images/page-banner-1.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Fakultas', url: '/fakultas' },
          { text: 'Tarbiyah', url: '/fakultas/tarbiyah' },
          { text: 'PGMI', url: null }
        ]}
      />
      <PgmiContent />
      <Footer />
    </>
  )
}