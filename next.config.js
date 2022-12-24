/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites () {
    return [
        {
          source: '/api/:path*',
          destination: `${process.env.API_URL}/api/:path*`
          // destination: `http://localhost:3500/api/:path*`
        },
        {
          source: '/',
          destination: '/dashboard'
        }
      ]
  }
}
