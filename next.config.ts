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
      { source: '/services/spinal-correction', destination: '/spinal-correction-new-braunfels', statusCode: 301 },
      { source: '/services/prenatal', destination: '/prenatal-chiropractic-care-new-braunfels', statusCode: 301 },
      { source: '/services/pediatric', destination: '/pediatric-chiropractic-care-new-braunfels', statusCode: 301 },
      { source: '/services/nutrition', destination: '/nutritional-coaching-new-braunfels', statusCode: 301 },
      { source: '/services/corrective-exercises', destination: '/corrective-exercises-new-braunfels', statusCode: 301 },
      { source: '/services/detox', destination: '/detoxification-programs-new-braunfels', statusCode: 301 },
      // Old condition short URLs
      { source: '/conditions/back-pain', destination: '/back-pain-relief-new-braunfels', statusCode: 301 },
      { source: '/conditions/neck-pain', destination: '/neck-pain-relief-new-braunfels', statusCode: 301 },
      { source: '/conditions/sciatica', destination: '/sciatica-care-new-braunfels', statusCode: 301 },
      { source: '/conditions/headaches', destination: '/headache-relief-new-braunfels', statusCode: 301 },
      // 301 redirects from old "treatment" URLs to new "relief/care" URLs
      { source: '/back-pain-treatment-new-braunfels', destination: '/back-pain-relief-new-braunfels', statusCode: 301 },
      { source: '/neck-pain-treatment-new-braunfels', destination: '/neck-pain-relief-new-braunfels', statusCode: 301 },
      { source: '/sciatica-treatment-new-braunfels', destination: '/sciatica-care-new-braunfels', statusCode: 301 },
      { source: '/headache-treatment-new-braunfels', destination: '/headache-relief-new-braunfels', statusCode: 301 },
      // Massage removed -- redirect to homepage
      { source: '/massage-therapy-new-braunfels', destination: '/', statusCode: 301 },
      { source: '/services/massage', destination: '/', statusCode: 301 },
    ]
  },
}

export default nextConfig
