'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import MihContent from '@/components/Magister/MihContent'

export default function MihPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner
        title="Magister Ilmu Hadis"
        backgroundImage="/images/page-banner-1.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Magister', url: '/magister' },
          { text: 'Ilmu Hadis', url: null }
        ]}
      />
      <MihContent />
      <Footer />
    </>
  )
}
