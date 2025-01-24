'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import warek4 from '@/components/Pimpinan/Warek4'
import Warek4 from '@/components/Pimpinan/Warek4'


export default function Warek4Page() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Wakil Rektor IV - Dr. Heri Mohamad Tohari, M.Pd." 
        backgroundImage="/images/page-banner-7.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Pimpinan', url: '/pimpinan' },
          { text: 'Wakil Rektor', url: null }
        ]}
      />
      <Warek4/>
      <Footer />
    </>
  )
}