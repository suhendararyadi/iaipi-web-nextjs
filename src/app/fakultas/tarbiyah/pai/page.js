import PageClient from './PageClient'

export const metadata = {
  title: 'Program Studi Pendidikan Agama Islam (PAI)',
  description: 'Program Studi S1 Pendidikan Agama Islam IAI PERSIS Garut, terakreditasi Baik Sekali BAN-PT. Kurikulum berbasis CPL, kompetensi pendidik profesional, dan prospek karir luas.',
  alternates: {
    canonical: '/fakultas/tarbiyah/pai',
  },
  openGraph: {
    title: 'Program Studi Pendidikan Agama Islam (PAI) | IAI PERSIS Garut',
    description: 'Program Studi S1 Pendidikan Agama Islam IAI PERSIS Garut, terakreditasi Baik Sekali BAN-PT. Kurikulum berbasis CPL, kompetensi pendidik profesional, dan prospek karir luas.',
    url: '/fakultas/tarbiyah/pai',
  },
}

export default function Page() {
  return <PageClient />
}
