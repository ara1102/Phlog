/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['images.unsplash.com'],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    QUERY_KEY: process.env.QUERY_KEY,
  },
}

module.exports = nextConfig

