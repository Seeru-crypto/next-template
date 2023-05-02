/** @type {import('next').NextConfig} */

const API_URL = process.env.API_URL

const nextConfig = {
  async rewrites() {
    return [
      {source: '/api/auth/:path*', destination: '/api/auth/:path*'},
      {source: '/api/:path*', destination: `${API_URL}/:path*`,}
    ]
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig