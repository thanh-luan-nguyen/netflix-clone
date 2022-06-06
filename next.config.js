/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
};
