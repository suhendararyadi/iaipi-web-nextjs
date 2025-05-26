'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

// Import komponen Swiper dan modul yang diperlukan
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

// Import CSS Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade' // Untuk efek transisi yang lebih halus

// Import komponen-komponen Anda
import Header2 from '@/components/Header2/Header2' // Pastikan path ini benar
import Footer from '@/components/Footer/Footer'     // Pastikan path ini benar
import PageBanner from '@/components/PageBanner/PageBanner' // Pastikan path ini benar

// Sangat disarankan untuk mengganti nama komponen agar sesuai dengan nama file/rute
export default function PmbPage() { 
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
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
        <div className="container mx-auto px-4 max-w-5xl"> {/* max-w-5xl untuk kontainer yang lebih lebar */}
          
          <div className='text-center mb-10 md:mb-12'>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
               Bergabunglah Bersama Kami!
             </h2>
             <p className="text-gray-600 mt-3 text-lg md:text-xl max-w-2xl mx-auto">
               Jelajahi informasi lengkap pendaftaran mahasiswa baru tahun 2025 melalui poster interaktif kami.
             </p>
          </div>
         
          {/* Carousel Poster PMB */}
          <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              effect="fade" // Efek transisi fade
              fadeEffect={{ crossFade: true }}
              spaceBetween={0} // Tidak ada jarak jika menggunakan fade
              slidesPerView={1} // Selalu 1 slide terlihat untuk efek fade
              navigation={{ // Kustomisasi tombol navigasi
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{ clickable: true, dynamicBullets: true }} // Pagination dinamis
              loop={true}
              autoplay={{
                delay: 4000, // Ganti slide setiap 4 detik
                disableOnInteraction: false, // Tetap autoplay setelah interaksi user
                pauseOnMouseEnter: true, // Jeda autoplay saat mouse di atas slider
              }}
              className="aspect-[3/4] md:aspect-[4/3]" // Atur rasio aspek untuk konsistensi
                                                    // Sesuaikan rasio aspek ini dengan gambar Anda
                                                    // Contoh: 3/4 untuk poster potrait, 4/3 atau 16/9 untuk landscape
            >
              {posterImages.map((poster, index) => (
                <SwiperSlide key={index} className="bg-gray-100">
                  <div className="relative w-full h-full">
                    <Image
                      src={poster.src}
                      alt={poster.alt}
                      fill // Mengisi seluruh area SwiperSlide
                      style={{ objectFit: 'contain' }} // 'contain' agar gambar utuh, 'cover' untuk mengisi & crop
                      priority={index === 0} // Prioritaskan loading gambar pertama
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimasi untuk Next/Image
                    />
                  </div>
                  {/* Anda bisa menambahkan caption di sini jika perlu */}
                  {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center">
                    {poster.alt}
                  </div> */}
                </SwiperSlide>
              ))}
              {/* Tombol Navigasi Kustom (Opsional, jika ingin styling berbeda) */}
              <div className="swiper-button-prev-custom absolute top-1/2 left-2 sm:left-4 z-10 transform -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-full shadow-md cursor-pointer transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </div>
              <div className="swiper-button-next-custom absolute top-1/2 right-2 sm:right-4 z-10 transform -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-full shadow-md cursor-pointer transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </Swiper>
          </div>
        
          {/* Tombol Call to Action */}
          <div className="text-center mt-10 md:mt-12">
            <a
              href="https://staipersisgarut.pmbonline.siakad.tech/" // Pastikan URL ini benar
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Daftar Sekarang!
            </a>
          </div>
        </div>
      </section>
      {/* Anda bisa menambahkan section lain di sini jika perlu, misal:
          - Keunggulan Program Studi
          - Testimoni Alumni
          - FAQ
      */}
      <Footer />
    </>
  )
}

