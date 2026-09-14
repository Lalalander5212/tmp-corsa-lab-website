/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 1,
  },
  output: 'export',
  basePath: '/tmp-corsa-lab-website',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
