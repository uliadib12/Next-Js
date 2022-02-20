require('dotenv').config()

module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_URL: process.env.API_URL,
  },
  reactStrictMode: true,
  swcMinify: false,
}