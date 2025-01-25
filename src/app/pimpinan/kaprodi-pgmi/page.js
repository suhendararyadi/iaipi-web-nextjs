'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import KaprodiPGMI from '@/components/Pimpinan/KaprodiPGMI'


export default function KaprodiPGMIPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Kaprodi PGMI - Nuraeni Sugih Pramukti, M.Pd." 
        backgroundImage="/images/page-banner-7.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Pimpinan', url: '/pimpinan' },
          { text: 'Kaprodi PGMI', url: null }
        ]}
      />
      <KaprodiPGMI/>
      <Footer />
    </>
  )
}