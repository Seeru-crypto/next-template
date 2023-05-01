/** @type {import('next').NextConfig} */

const securityHeaders = [
    {
        key: 'Origin',
        value: 'http://localhost:3000'
    }]

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async headers(){
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ]
  }
}

module.exports = nextConfig