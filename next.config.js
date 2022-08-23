/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["icon-library.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
