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
      ]
    },
  };

  export default nextConfig;
