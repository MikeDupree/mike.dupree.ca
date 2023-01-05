/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  reactStrictMode: true,
  swcMinify: true,
})
module.exports = withBundleAnalyzer({})
