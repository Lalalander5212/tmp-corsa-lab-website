// On GitHub Actions, serve from /<repo-name> so the same config works for any fork/mirror's Pages site
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'corsa-lab-revamp'
const basePath = process.env.NODE_ENV === 'production' ? `/${repoName}` : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 1,
  },
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

module.exports = nextConfig
