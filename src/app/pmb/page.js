'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

// Import komponen-komponen Anda
import Header2 from '@/components/Header2/Header2' // Pastikan path ini benar
import Footer from '@/components/Footer/Footer'     // Pastikan path ini benar
import PageBanner from '@/components/PageBanner/PageBanner' // Pastikan path ini benar

// Sangat disarankan untuk mengganti nama komponen agar sesuai dengan nama file/rute
export default function PmbPage() { 
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Hook ini memastikan kode di dalamnya hanya berjalan di sisi client
    setIsMounted(true)
  }, [])

  // Daftar path gambar poster Anda
  // Pastikan gambar-gambar ini ada di folder public/images/pmb/
  const posterImages = [
    { src: '/images/pmb/poster-pmb-1.jpeg', alt: 'Poster PMB 1 - Informasi Umum' },
    { src: '/images/pmb/poster-pmb-2.jpeg', alt: 'Poster PMB 2 - Jadwal Penting' },
    { src: '/images/pmb/poster-pmb-3.jpeg', alt: 'Poster PMB 3 - Program Studi' },
    { src: '/images/pmb/poster-pmb-4.jpeg', alt: 'Poster PMB 4 - Cara Pendaftaran' },
  ]

  // Guard clause untuk mencegah rendering di server jika komponen hanya client-side
  if (!isMounted) {
    return null 
  }

  return (
    <>
      <Header2 />
      <PageBanner 
        title="Penerimaan Mahasiswa Baru" 
        backgroundImage="/images/page-banner-7.jpg" // Pastikan path ini benar
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Penerimaan Mahasiswa Baru', url: '#' } // URL PMB Page bisa '#' atau path aktual
        ]}
      />

      {/* Bagian Utama Konten PMB */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className='text-center mb-10 md:mb-12'>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
               Informasi Pendaftaran Mahasiswa Baru 2025
             </h2>
             <p className="text-gray-600 mt-3 text-lg md:text-xl max-w-2xl mx-auto">
               Lihat detail informasi pada poster-poster berikut.
             </p>
          </div>
         
          {/* Kontainer untuk Gambar Poster */}
          {/* Gambar sudah diatur untuk tampil di tengah (center) dengan mx-auto pada div pembungkus */}
          <div className="space-y-8 md:space-y-12">
            {posterImages.map((poster, index) => (
              <div key={index} className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-xl border border-gray-200">
                {/* Kontainer div di atas (max-w-2xl mx-auto) akan membatasi lebar gambar di layar besar 
                  dan membuatnya terpusat. Di layar kecil, gambar akan mengambil lebar penuh kontainer.
                */}
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  width={800} // Lebar asli gambar (atau lebar yang Anda inginkan sebagai basis)
                  height={1000} // Tinggi asli gambar (atau tinggi yang sesuai dengan lebar di atas untuk rasio aspek)
                  className="w-full h-auto object-contain" // Membuat gambar responsif
                                                          // w-full: lebar gambar 100% dari parentnya
                                                          // h-auto: tinggi gambar menyesuaikan proporsional
                                                          // object-contain: memastikan seluruh gambar terlihat
                  priority={index < 2} // Prioritaskan loading untuk dua gambar pertama
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 640px" // Beri tahu browser ukuran gambar
                  onError={(e) => {
                    console.error(`Error loading image: ${poster.src}`);
                    // Anda bisa mengganti src ke gambar placeholder jika terjadi error
                    // e.target.src = '/images/placeholder-image.png'; 
                  }}
                />
              </div>
            ))}
          </div>
        
          {/* Tombol Call to Action */}
          <div className="text-center mt-10 md:mt-12">
            <a
              href="https://staipersisgarut.pmbonline.siakad.tech/" // Pastikan URL ini benar
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Daftar Sekarang!
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
