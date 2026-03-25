import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | MaxLiving Chiropractic - New Braunfels',
  description: 'Contact MaxLiving Chiropractic New Braunfels. 741 Generations Dr Suite 200, New Braunfels TX 78130. Call (830) 255-4350. Dr. Rachel and Dr. Travis Diestel.',
  alternates: { canonical: 'https://ml-chiro-newbraunfels.vercel.app/contact' },
  openGraph: {
    title: 'Contact Us | MaxLiving Chiropractic - New Braunfels',
    description: '741 Generations Dr Suite 200, New Braunfels TX 78130. Call (830) 255-4350.',
    url: 'https://ml-chiro-newbraunfels.vercel.app/contact',
    siteName: 'MaxLiving Chiropractic New Braunfels',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
