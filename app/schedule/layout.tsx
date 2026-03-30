import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Schedule Your Visit',
  description: 'Schedule your chiropractic appointment with Dr. Rachel or Dr. Travis Diestel in New Braunfels, TX. New Patient Special: $185. Call (830) 255-4350.',
  alternates: { canonical: 'https://ml-chiro-newbraunfels.vercel.app/schedule' },
  openGraph: {
    title: 'Schedule Your Visit | MaxLiving New Braunfels',
    description: 'Book your appointment. New Patient Special: $185. Choose Dr. Rachel or Dr. Travis.',
    url: 'https://ml-chiro-newbraunfels.vercel.app/schedule',
    siteName: 'MaxLiving Chiropractic New Braunfels',
    type: 'website',
  },
}

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
