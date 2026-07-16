import PageClient from './PageClient'

export const metadata = {
  title: 'Program Studi Pendidikan Bahasa Arab (PBA)',
  description: 'Program Studi S1 Pendidikan Bahasa Arab IAI PERSIS Garut mencetak pendidik bahasa Arab profesional dengan kompetensi linguistik dan keislaman.',
  alternates: {
    canonical: '/fakultas/tarbiyah/pba',
  },
  openGraph: {
    title: 'Program Studi Pendidikan Bahasa Arab (PBA) | IAI PERSIS Garut',
    description: 'Program Studi S1 Pendidikan Bahasa Arab IAI PERSIS Garut mencetak pendidik bahasa Arab profesional dengan kompetensi linguistik dan keislaman.',
    url: '/fakultas/tarbiyah/pba',
  },
}

export default function Page() {
  return <PageClient />
}
