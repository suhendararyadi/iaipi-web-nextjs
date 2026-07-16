import PageClient from './PageClient'

export const metadata = {
  title: 'Magister Ilmu Hadis (MIH)',
  description: 'Program Magister Ilmu Hadis IAI PERSIS Garut mencetak peneliti dan akademisi hadis tingkat lanjut dengan kompetensi keilmuan mendalam.',
  alternates: {
    canonical: '/magister/mih',
  },
  openGraph: {
    title: 'Magister Ilmu Hadis (MIH) | IAI PERSIS Garut',
    description: 'Program Magister Ilmu Hadis IAI PERSIS Garut mencetak peneliti dan akademisi hadis tingkat lanjut dengan kompetensi keilmuan mendalam.',
    url: '/magister/mih',
  },
}

export default function Page() {
  return <PageClient />
}
