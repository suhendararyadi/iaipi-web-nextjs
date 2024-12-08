'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import AboutContent from '@/components/About/AboutContent'
import Counter from '@/components/Counter/Counter'
import VisiMisi from '@/components/About/VisiMisi'
import Akreditasi from '@/components/Akreditasi/Akreditasi'

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Tentang IAI Persis Garut" 
        backgroundImage="/images/page-banner-7.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Tentang Kami', url: null }
        ]}
      />
      <AboutContent />
      <VisiMisi/>
      <Counter />
      <Akreditasi/>
      <Footer />
    </>
  )
}