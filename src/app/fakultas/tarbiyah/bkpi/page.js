import PageClient from './PageClient'

export const metadata = {
  title: 'Program Studi Bimbingan Konseling Pendidikan Islam (BKPI)',
  description: 'Program Studi S1 BKPI IAI PERSIS Garut mencetak konselor pendidikan Islam profesional dengan kompetensi bimbingan konseling berbasis nilai keislaman.',
  alternates: {
    canonical: '/fakultas/tarbiyah/bkpi',
  },
  openGraph: {
    title: 'Program Studi Bimbingan Konseling Pendidikan Islam (BKPI) | IAI PERSIS Garut',
    description: 'Program Studi S1 BKPI IAI PERSIS Garut mencetak konselor pendidikan Islam profesional dengan kompetensi bimbingan konseling berbasis nilai keislaman.',
    url: '/fakultas/tarbiyah/bkpi',
  },
}

export default function Page() {
  return <PageClient />
}
