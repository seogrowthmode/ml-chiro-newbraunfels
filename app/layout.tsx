import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import SchemaOrg from '@/components/SchemaOrg'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font',
  display: 'swap',
})

const BASE_URL = 'https://ml-chiro-newbraunfels.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Chiropractor New Braunfels TX | MaxLiving',
    template: '%s | MaxLiving New Braunfels',
  },
  description: 'Husband-wife chiropractor team in New Braunfels, TX. Dr. Rachel and Dr. Travis Diestel offer prenatal, pediatric, and corrective chiropractic care. Both certified in structural correction. 5.0 Perfect Google Rating. (830) 255-4350.',
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: 'Chiropractor New Braunfels TX | MaxLiving',
    description: 'Husband-wife chiropractor team in New Braunfels, TX. Prenatal, pediatric, corrective exercise, veteran care. 5.0 stars, 67 reviews. New Patient Special: $185.',
    url: BASE_URL,
    siteName: 'MaxLiving Chiropractic New Braunfels',
    locale: 'en_US',
    type: 'website',
    images: [{ url: `${BASE_URL}/images/clinic-hero.png`, width: 1200, height: 630, alt: 'MaxLiving Chiropractic New Braunfels clinic' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MaxLiving Chiropractic New Braunfels',
    description: 'Husband-wife chiropractor team. Prenatal, pediatric, corrective exercise, veteran care. 5.0 stars.',
    images: [`${BASE_URL}/images/clinic-hero.png`],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <SchemaOrg />
        {children}
      </body>
    </html>
  )
}
