import PageClient from './PageClient'

export const metadata = {
  title: 'Program Studi Ekonomi Syariah',
  description: 'Program Studi S1 Ekonomi Syariah IAI PERSIS Garut mencetak praktisi dan analis ekonomi syariah yang kompeten untuk industri keuangan Islam.',
  alternates: {
    canonical: '/fakultas/ekonomi/ekosy',
  },
  openGraph: {
    title: 'Program Studi Ekonomi Syariah | IAI PERSIS Garut',
    description: 'Program Studi S1 Ekonomi Syariah IAI PERSIS Garut mencetak praktisi dan analis ekonomi syariah yang kompeten untuk industri keuangan Islam.',
    url: '/fakultas/ekonomi/ekosy',
  },
}

export default function Page() {
  return <PageClient />
}
