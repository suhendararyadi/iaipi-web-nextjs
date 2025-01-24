'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import warek2 from '@/components/Pimpinan/Warek2'
import Warek2 from '@/components/Pimpinan/Warek2'


export default function Warek3Page() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Wakil Rektor II - Dr. Nurul Irfan, M.Ag." 
        backgroundImage="/images/page-banner-7.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Pimpinan', url: '/pimpinan' },
          { text: 'Wakil Rektor II', url: null }
        ]}
      />
      <Warek2/>
      <Footer />
    </>
  )
}