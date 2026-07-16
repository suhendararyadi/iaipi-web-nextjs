import PageClient from './PageClient'

export const metadata = {
  title: 'Program Studi Ilmu Hadis (ILHA)',
  description: 'Program Studi S1 Ilmu Hadis IAI PERSIS Garut mengkaji sanad dan matan hadis secara mendalam untuk mencetak ahli hadis dan peneliti keislaman.',
  alternates: {
    canonical: '/fakultas/ushuluddin/ilha',
  },
  openGraph: {
    title: 'Program Studi Ilmu Hadis (ILHA) | IAI PERSIS Garut',
    description: 'Program Studi S1 Ilmu Hadis IAI PERSIS Garut mengkaji sanad dan matan hadis secara mendalam untuk mencetak ahli hadis dan peneliti keislaman.',
    url: '/fakultas/ushuluddin/ilha',
  },
}

export default function Page() {
  return <PageClient />
}
