'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import Course from '@/components/Course/Course'
import Fakultas from '@/components/Fakultas/Fakultas'
import Head from 'next/head'

export default function FakultasPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Head>
        <title>Nama Halaman | Institut Agama Islam PERSIS Garut</title>
      </Head>
      <Header2 />
      <PageBanner 
        title="Fakultas" 
        backgroundImage="/images/page-banner-2.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Fakultas', url: null }
        ]}
      />
      <Fakultas/>
      <Footer />
    </>
  )
}