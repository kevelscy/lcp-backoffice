/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites () {
    return [
        {
          source: '/api/:path*',
          destination: process.env.NODE_ENV !== 'production' ? `${process.env.API_URL}/api/:path*` : `http://localhost:8000/api/:path*`
        },
        {
          source: '/',
          destination: '/dashboard'
        }
      ]
  }
}
