import type { MetadataRoute } from 'next'

const BASE_URL = 'https://ml-chiro-newbraunfels.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  return [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/team`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/schedule`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/new-patient`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/testimonials`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Services
    { url: `${BASE_URL}/spinal-correction-new-braunfels`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/prenatal-chiropractic-care-new-braunfels`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/pediatric-chiropractic-care-new-braunfels`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/corrective-exercises-new-braunfels`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/nutritional-coaching-new-braunfels`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/detoxification-programs-new-braunfels`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Conditions
    { url: `${BASE_URL}/back-pain-relief-new-braunfels`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/neck-pain-relief-new-braunfels`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/sciatica-care-new-braunfels`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/headache-relief-new-braunfels`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Schedule appointment (calendar embed)
    { url: `${BASE_URL}/schedule-appointment`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]
}
