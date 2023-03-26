/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/s/files/**',
      },
      {
        protocol: 'https',
        hostname: 'monophy.com',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'media.tenor.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
//https://cdn.shopify.com/s/files/1/0212/4102/products/DV1199-100_4.jpg?v=1677377655
module.exports = nextConfig
