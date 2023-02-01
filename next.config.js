/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  async rewrites () {
    return [
        {
          source: '/api/:path*',
          // destination: `${process.env.API_URL}/api/:path*`
          destination: `http://localhost:8000/api/:path*`
        },
        {
          source: '/',
          destination: '/dashboard'
        }
      ]
  }
}
