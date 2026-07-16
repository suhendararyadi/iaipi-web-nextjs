import PageClient from './PageClient'

export const metadata = {
  title: 'Program Studi Ilmu Al-Qur\'an dan Tafsir (IAT)',
  description: 'Program Studi S1 Ilmu Al-Qur\'an dan Tafsir IAI PERSIS Garut mencetak ahli tafsir dan pengkaji Al-Qur\'an yang kompeten dan berakhlak mulia.',
  alternates: {
    canonical: '/fakultas/ushuluddin/iat',
  },
  openGraph: {
    title: 'Program Studi Ilmu Al-Qur\'an dan Tafsir (IAT) | IAI PERSIS Garut',
    description: 'Program Studi S1 Ilmu Al-Qur\'an dan Tafsir IAI PERSIS Garut mencetak ahli tafsir dan pengkaji Al-Qur\'an yang kompeten dan berakhlak mulia.',
    url: '/fakultas/ushuluddin/iat',
  },
}

export default function Page() {
  return <PageClient />
}
