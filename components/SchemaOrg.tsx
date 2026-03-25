export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Chiropractor',
    name: 'MaxLiving Chiropractic New Braunfels',
    image: 'https://ml-chiro-newbraunfels.vercel.app/images/clinic-hero.png',
    url: 'https://ml-chiro-newbraunfels.vercel.app',
    telephone: '(830) 255-4350',
    email: 'info@maxlivingnewbraunfels.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '741 Generations Dr Suite 200',
      addressLocality: 'New Braunfels',
      addressRegion: 'TX',
      postalCode: '78130',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.7030,
      longitude: -98.1245,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '67',
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '07:45', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '07:45', closes: '10:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '07:45', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '07:45', closes: '18:00' },
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, CareCredit, Insurance',
    areaServed: [
      { '@type': 'City', name: 'New Braunfels' },
      { '@type': 'City', name: 'San Marcos' },
      { '@type': 'City', name: 'Seguin' },
      { '@type': 'City', name: 'Canyon Lake' },
      { '@type': 'City', name: 'Kyle' },
      { '@type': 'City', name: 'Wimberley' },
    ],
    sameAs: [],
    founder: [
      {
        '@type': 'Person',
        name: 'Dr. Rachel Diestel',
        jobTitle: 'Doctor of Chiropractic',
        alumniOf: 'Parker University',
      },
      {
        '@type': 'Person',
        name: 'Dr. Travis Diestel',
        jobTitle: 'Doctor of Chiropractic',
        alumniOf: 'Parker University',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Chiropractic Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chiropractic Adjustments' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Advanced Spinal Correction' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Prenatal Chiropractic' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pediatric Chiropractic' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corrective Exercises' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Massage Therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nutritional Coaching' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Detoxification' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
