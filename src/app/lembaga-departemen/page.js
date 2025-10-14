import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'
import LembagaDepartemen from '@/components/LembagaDepartemen/LembagaDepartemen'

export const metadata = {
  title: 'Lembaga dan Departemen - Institut Agama Islam PERSIS Garut',
  description: 'Struktur organisasi lembaga dan departemen IAIPI Garut yang mendukung Tri Dharma Perguruan Tinggi: LPM, LPPM, Perpustakaan, Ma\'had, Pusat Studi Islam, dan unit pendukung lainnya.',
  keywords: 'lembaga iaipi, lpm iaipi garut, lppm iaipi garut, perpustakaan iaipi, mahad iaipi, pusat studi islam, upt tik, career center, lembaga dakwah',
  openGraph: {
    title: 'Lembaga dan Departemen - Institut Agama Islam PERSIS Garut',
    description: 'Berbagai lembaga dan unit yang mendukung operasional IAIPI Garut dalam menjalankan Tri Dharma Perguruan Tinggi',
    type: 'website',
  }
}

export default function LembagaDepartemenPage() {
  return (
    <>
      <Header2 />
      <PageBanner 
        title="Lembaga dan Departemen"
        backgroundImage="/images/page-banner-1.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Profil', url: '#' },
          { text: 'Lembaga dan Departemen', url: null }
        ]}
      />
      <LembagaDepartemen />
      <Footer />
    </>
  )
}
