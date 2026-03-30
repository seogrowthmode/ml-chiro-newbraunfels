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
      // Old service short URLs
      { source: '/services/spinal-correction', destination: '/spinal-correction-new-braunfels', permanent: true },
      { source: '/services/prenatal', destination: '/prenatal-chiropractic-care-new-braunfels', permanent: true },
      { source: '/services/pediatric', destination: '/pediatric-chiropractic-care-new-braunfels', permanent: true },
      { source: '/services/nutrition', destination: '/nutritional-coaching-new-braunfels', permanent: true },
      { source: '/services/corrective-exercises', destination: '/corrective-exercises-new-braunfels', permanent: true },
      { source: '/services/detox', destination: '/detoxification-programs-new-braunfels', permanent: true },
      // Old condition short URLs
      { source: '/conditions/back-pain', destination: '/back-pain-relief-new-braunfels', permanent: true },
      { source: '/conditions/neck-pain', destination: '/neck-pain-relief-new-braunfels', permanent: true },
      { source: '/conditions/sciatica', destination: '/sciatica-care-new-braunfels', permanent: true },
      { source: '/conditions/headaches', destination: '/headache-relief-new-braunfels', permanent: true },
      // 301 redirects from old "treatment" URLs to new "relief/care" URLs
      { source: '/back-pain-treatment-new-braunfels', destination: '/back-pain-relief-new-braunfels', permanent: true },
      { source: '/neck-pain-treatment-new-braunfels', destination: '/neck-pain-relief-new-braunfels', permanent: true },
      { source: '/sciatica-treatment-new-braunfels', destination: '/sciatica-care-new-braunfels', permanent: true },
      { source: '/headache-treatment-new-braunfels', destination: '/headache-relief-new-braunfels', permanent: true },
      // Massage removed -- redirect to homepage
      { source: '/massage-therapy-new-braunfels', destination: '/', permanent: true },
      { source: '/services/massage', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
