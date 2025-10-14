'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import MpaiContent from '@/components/Magister/MpaiContent'

export default function MpaiPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Magister Pendidikan Agama Islam" 
        backgroundImage="/images/page-banner-1.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Magister', url: '/magister' },
          { text: 'MPAI', url: null }
        ]}
      />
      <MpaiContent />
      <Footer />
    </>
  )
}
