import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dazzling-flame-4eb49ac86c.media.strapiapp.com',
      },
    ],
  },
}

export default nextConfig
