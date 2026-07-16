import PageClient from './PageClient'

export const metadata = {
  title: 'Program Studi Manajemen Keuangan Syariah',
  description: 'Program Studi S1 Manajemen Keuangan Syariah IAI PERSIS Garut mencetak manajer keuangan syariah profesional untuk perbankan dan lembaga keuangan Islam.',
  alternates: {
    canonical: '/fakultas/ekonomi/mks',
  },
  openGraph: {
    title: 'Program Studi Manajemen Keuangan Syariah | IAI PERSIS Garut',
    description: 'Program Studi S1 Manajemen Keuangan Syariah IAI PERSIS Garut mencetak manajer keuangan syariah profesional untuk perbankan dan lembaga keuangan Islam.',
    url: '/fakultas/ekonomi/mks',
  },
}

export default function Page() {
  return <PageClient />
}
