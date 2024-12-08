'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import Teachers2 from '@/components/Teachers2/Teachers2'
import Teachers3 from '@/components/Teachers3/Teachers3'
import Teachers4 from '@/components/Teachers4/Teachers4'

export default function PimpinanPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Pimpinan Institut" 
        backgroundImage="/images/page-banner-1.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Pimpinan Institut', url: null }
        ]}
      />
      <Teachers4/>
      <Teachers3/>
      <Footer />
    </>
  )
}