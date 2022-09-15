/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['upload.wikimedia.org', 'flagcdn.com'],
  },
}

module.exports = nextConfig
