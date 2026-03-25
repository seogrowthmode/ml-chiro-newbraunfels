import type { Metadata } from 'next'
import HomePageContent from '@/components/HomePageContent'

export const metadata: Metadata = {
  title: 'Chiropractor New Braunfels TX | MaxLiving',
  description: 'Top-rated chiropractor in New Braunfels, TX. Dr. Rachel and Dr. Travis Diestel offer prenatal, pediatric, and corrective chiropractic care. 5.0 stars, 67 reviews. $49 new patient special. Call (830) 255-4350.',
  alternates: { canonical: 'https://ml-chiro-newbraunfels.vercel.app' },
  openGraph: {
    title: 'Chiropractor New Braunfels TX | MaxLiving',
    description: 'Husband-wife chiropractor team in New Braunfels, TX. Prenatal, pediatric, corrective exercise, veteran care. 5.0 stars, 67 reviews. New Patient Special: $49.',
    url: 'https://ml-chiro-newbraunfels.vercel.app',
    siteName: 'MaxLiving Chiropractic New Braunfels',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://ml-chiro-newbraunfels.vercel.app/images/clinic-hero.png', width: 1200, height: 630, alt: 'MaxLiving Chiropractic New Braunfels clinic' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chiropractor New Braunfels TX | MaxLiving',
    description: 'Husband-wife chiropractor team. Prenatal, pediatric, corrective exercise, veteran care. 5.0 stars.',
    images: ['https://ml-chiro-newbraunfels.vercel.app/images/clinic-hero.png'],
  },
  robots: { index: true, follow: true },
}

export default function HomePage() {
  return <HomePageContent />
}
