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
  async redirects() {
    return [
      { source: '/services/spinal-correction', destination: '/spinal-correction-new-braunfels', permanent: true },
      { source: '/services/prenatal', destination: '/prenatal-chiropractic-care-new-braunfels', permanent: true },
      { source: '/services/pediatric', destination: '/pediatric-chiropractic-care-new-braunfels', permanent: true },
      { source: '/services/nutrition', destination: '/nutritional-coaching-new-braunfels', permanent: true },
      { source: '/services/corrective-exercises', destination: '/corrective-exercises-new-braunfels', permanent: true },
      { source: '/services/massage', destination: '/massage-therapy-new-braunfels', permanent: true },
      { source: '/services/detox', destination: '/detoxification-programs-new-braunfels', permanent: true },
      { source: '/conditions/back-pain', destination: '/back-pain-treatment-new-braunfels', permanent: true },
      { source: '/conditions/neck-pain', destination: '/neck-pain-treatment-new-braunfels', permanent: true },
      { source: '/conditions/sciatica', destination: '/sciatica-treatment-new-braunfels', permanent: true },
      { source: '/conditions/headaches', destination: '/headache-treatment-new-braunfels', permanent: true },
    ]
  },
}

export default nextConfig
