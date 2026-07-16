import PageClient from './PageClient'

export const metadata = {
  title: 'Program Studi Pendidikan Guru Madrasah Ibtidaiyah (PGMI)',
  description: 'Program Studi S1 PGMI IAI PERSIS Garut mencetak guru MI/SD profesional dengan kurikulum berbasis dokumen resmi FTK, kompetensi pedagogik dan keislaman.',
  alternates: {
    canonical: '/fakultas/tarbiyah/pgmi',
  },
  openGraph: {
    title: 'Program Studi Pendidikan Guru Madrasah Ibtidaiyah (PGMI) | IAI PERSIS Garut',
    description: 'Program Studi S1 PGMI IAI PERSIS Garut mencetak guru MI/SD profesional dengan kurikulum berbasis dokumen resmi FTK, kompetensi pedagogik dan keislaman.',
    url: '/fakultas/tarbiyah/pgmi',
  },
}

export default function Page() {
  return <PageClient />
}
