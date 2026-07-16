import PageClient from './PageClient'

export const metadata = {
  title: 'Magister Pendidikan Agama Islam (MPAI)',
  description: 'Program Magister Pendidikan Agama Islam IAI PERSIS Garut mencetak akademisi dan praktisi pendidikan Islam tingkat lanjut.',
  alternates: {
    canonical: '/magister/mpai',
  },
  openGraph: {
    title: 'Magister Pendidikan Agama Islam (MPAI) | IAI PERSIS Garut',
    description: 'Program Magister Pendidikan Agama Islam IAI PERSIS Garut mencetak akademisi dan praktisi pendidikan Islam tingkat lanjut.',
    url: '/magister/mpai',
  },
}

export default function Page() {
  return <PageClient />
}
