'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import KaprodiMKS from '@/components/Pimpinan/KaprodiMKS'


export default function KaprodiMKSPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Kaprodi MKS - Mumad Nurjaman, S.Sy., M.H." 
        backgroundImage="/images/page-banner-7.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Pimpinan', url: '/pimpinan' },
          { text: 'Kaprodi MKS', url: null }
        ]}
      />
      <KaprodiMKS/>
      <Footer />
    </>
  )
}