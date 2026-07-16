const BASE_URL = 'https://iaipersisgarut.ac.id'

const topLevelRoutes = [
  '',
  '/fakultas',
  '/magister',
  '/pimpinan',
  '/layanan',
  '/lembaga-departemen',
  '/pmb',
  '/tentang',
  '/kontak',
]

const fakultasRoutes = [
  '/fakultas/tarbiyah',
  '/fakultas/ushuluddin',
  '/fakultas/ekonomi',
]

const prodiRoutes = [
  '/fakultas/tarbiyah/pai',
  '/fakultas/tarbiyah/pgmi',
  '/fakultas/tarbiyah/bkpi',
  '/fakultas/tarbiyah/pba',
  '/fakultas/ushuluddin/ilha',
  '/fakultas/ushuluddin/iat',
  '/fakultas/ushuluddin/spi',
  '/fakultas/ekonomi/ekosy',
  '/fakultas/ekonomi/mks',
  '/magister/mpai',
  '/magister/mih',
]

const pimpinanRoutes = [
  '/pimpinan/rektor',
  '/pimpinan/warek1',
  '/pimpinan/warek2',
  '/pimpinan/warek3',
  '/pimpinan/dekan1',
  '/pimpinan/dekan2',
  '/pimpinan/dekan3',
  '/pimpinan/kaprodi-pai',
  '/pimpinan/kaprodi-pgmi',
  '/pimpinan/kaprodi-bkpi',
  '/pimpinan/kaprodi-pba',
  '/pimpinan/kaprodi-ilha',
  '/pimpinan/kaprodi-iat',
  '/pimpinan/kaprodi-spi',
  '/pimpinan/kaprodi-ekosy',
  '/pimpinan/kaprodi-mks',
  '/pimpinan/kaprodi-mpai',
  '/pimpinan/kaprodi-mih',
]

export default function sitemap() {
  const lastModified = new Date()

  const buildEntries = (routes, priority, changeFrequency) =>
    routes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified,
      changeFrequency,
      priority,
    }))

  return [
    ...buildEntries(topLevelRoutes, 0.8, 'monthly'),
    ...buildEntries(fakultasRoutes, 0.7, 'monthly'),
    ...buildEntries(prodiRoutes, 0.9, 'monthly'),
    ...buildEntries(pimpinanRoutes, 0.5, 'yearly'),
  ].map((entry) => (entry.url === BASE_URL ? { ...entry, priority: 1.0 } : entry))
}
