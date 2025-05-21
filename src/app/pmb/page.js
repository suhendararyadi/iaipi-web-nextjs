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
        title="Penerimaan Mahasiswa Baru" 
        backgroundImage="/images/page-banner-7.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Penerimaan Mahasiswa Baru', url: null }
        ]}
      />

      {/* ✅ Tambahan Poster PMB */}
      <section className="py-10 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Penerimaan Mahasiswa Baru tahun 2025</h2>
          <Image
            src="/images/pmb/poster-pmb-1.jpeg"
            alt="Poster PMB"
            width={800}
            height={1000}
            className="mx-auto rounded-lg shadow-lg"
          />
          <Image
            src="/images/pmb/poster-pmb-2.jpeg"
            alt="Poster PMB"
            width={800}
            height={1000}
            className="mx-auto rounded-lg shadow-lg"
          />
          <Image
            src="/images/pmb/poster-pmb-3.jpeg"
            alt="Poster PMB"
            width={800}
            height={1000}
            className="mx-auto rounded-lg shadow-lg"
          />
          <Image
            src="/images/pmb/poster-pmb-4.jpeg"
            alt="Poster PMB"
            width={800}
            height={1000}
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
        
          
      </section>

      <div className="text-center">
          <a
            href="https://staipersisgarut.pmbonline.siakad.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
          >
            Daftar Sekarang
          </a>
        </div>
      <Footer />
    </>
  )
}