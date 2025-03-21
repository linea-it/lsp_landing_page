/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/lsp',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
