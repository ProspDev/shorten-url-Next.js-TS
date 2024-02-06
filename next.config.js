/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    CURRENT_ENV: process.env.CURRENT_ENV,
  },
};

module.exports = nextConfig;
