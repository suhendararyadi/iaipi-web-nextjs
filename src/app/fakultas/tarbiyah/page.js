'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import Tarbiyah from '@/components/Fakultas/Tarbiyah'

export default function TarbiyahPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Fakultas Tarbiyah" 
        backgroundImage="/images/page-banner-2.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Fakultas', url: '/fakultas' },
          { text: 'Fakultas Tarbiyah', url: null }
        ]}
      />
      <Tarbiyah />
      <Footer />
    </>
  )
}