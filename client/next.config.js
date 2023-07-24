/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['cdn.sanity.io'],
        // remotePatterns: [
        //     { hostname: 'cdn.sanity.io' },
        //     { hostname: 'source.unsplash.com' },
        // ],
    },
}

module.exports = nextConfig
