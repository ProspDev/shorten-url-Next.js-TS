/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    CURRENT_ENV: process.env.CURRENT_ENV,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    SITE_URL: process.env.SITE_URL,
  },
};

module.exports = nextConfig;
