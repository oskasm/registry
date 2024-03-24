/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'OneSystems GmbH Kasm Registry',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://www.onesystems.ch/wp-content/uploads/2018/01/Favicon.png',
    listUrl: 'https://kasmregistry.onesystems.ch/',
    contactUrl: 'https://www.onesystems.ch/kontakt/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
