'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import KaprodiBKPI from '@/components/Pimpinan/KaprodiBKPI'


export default function KaprodiBKPIPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Kaprodi BKPI - Yanti Sam Amir, S.Pd., M.Pd." 
        backgroundImage="/images/page-banner-7.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Pimpinan', url: '/pimpinan' },
          { text: 'Kaprodi BKPI', url: null }
        ]}
      />
      <KaprodiBKPI/>
      <Footer />
    </>
  )
}