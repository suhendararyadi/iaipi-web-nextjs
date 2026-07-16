/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true
    },
    async redirects() {
      return [
        // Warek IV dihapus dari struktur; Dr. Heri Mohamad Tohari kini Wakil Rektor III.
        {
          source: '/pimpinan/warek4',
          destination: '/pimpinan/warek3',
          permanent: true,
        },
        // Azis Asmana pindah dari Kaprodi S1 Ilmu Hadis ke Kaprodi Magister Ilmu Hadis.
        {
          source: '/pimpinan/kaprodi-ilha',
          destination: '/pimpinan/kaprodi-mih',
          permanent: true,
        },
      ]
    },
  };

  export default nextConfig;
