'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import KaprodiMIH from '@/components/Pimpinan/KaprodiMIH'


export default function KaprodiMIHPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner
        title="Kaprodi Magister Ilmu Hadis - Azis Asmana, Lc., M.Ag."
        backgroundImage="/images/page-banner-7.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Pimpinan', url: '/pimpinan' },
          { text: 'Kaprodi Magister Ilmu Hadis', url: null }
        ]}
      />
      <KaprodiMIH/>
      <Footer />
    </>
  )
}
