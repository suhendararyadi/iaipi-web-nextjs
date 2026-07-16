import PageClient from './PageClient'

export const metadata = {
  title: 'Program Studi Sejarah Peradaban Islam (SPI)',
  description: 'Program Studi S1 Sejarah Peradaban Islam IAI PERSIS Garut mengkaji sejarah dan peradaban Islam untuk mencetak sejarawan dan peneliti profesional.',
  alternates: {
    canonical: '/fakultas/ushuluddin/spi',
  },
  openGraph: {
    title: 'Program Studi Sejarah Peradaban Islam (SPI) | IAI PERSIS Garut',
    description: 'Program Studi S1 Sejarah Peradaban Islam IAI PERSIS Garut mengkaji sejarah dan peradaban Islam untuk mencetak sejarawan dan peneliti profesional.',
    url: '/fakultas/ushuluddin/spi',
  },
}

export default function Page() {
  return <PageClient />
}
