'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import AboutContent from '@/components/About/AboutContent'
import Counter from '@/components/Counter/Counter'
import Teachers3 from '@/components/Teachers3/Teachers3'
import Testimonial from '@/components/Testimonial/Testimonial'
import PatnarLogo from '@/components/PatnarLogo/PatnarLogo'

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
        title="About Us" 
        backgroundImage="/images/page-banner-1.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'About Us', url: null }
        ]}
      />
      <AboutContent />
      <Counter />
      <Teachers3/>
      <Testimonial />
      <PatnarLogo />
      <Footer />
    </>
  )
}