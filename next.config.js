/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/team-building-treasure-hunt',
        destination: '/',
        permanent: true,
      },
      {
        source: '/team-building-treasure-hunt/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
