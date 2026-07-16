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
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
            { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
            { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          ],
        },
      ]
    },
  };

  export default nextConfig;
