'use client'
import { useEffect, useState } from 'react'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import AboutContent from '@/components/About/AboutContent'
import Counter from '@/components/Counter/Counter'
import VisiMisi from '@/components/About/VisiMisi'
import Akreditasi from '@/components/Akreditasi/Akreditasi'
import Header3 from '@/components/Header3/Header3'
import Image from 'next/image'

export default function TentangPage() {
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

      {/* ✅ Tambahan Poster PMB */}
      <section className="py-10 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Poster Penerimaan Mahasiswa Baru</h2>
          <Image
            src="/images/pmb/poster-pmb.jpeg"
            alt="Poster PMB"
            width={800}
            height={1200}
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      <Footer />
    </>
  )
}