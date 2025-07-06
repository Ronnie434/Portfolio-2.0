/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
  },
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
}

module.exports = nextConfig 