'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import MagisterContent from '@/components/Magister/MagisterContent'

export default function MagisterPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Program Magister (S2)" 
        backgroundImage="/images/page-banner-7.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Program Magister', url: null }
        ]}
      />
      <MagisterContent />
      <Footer />
    </>
  )
}