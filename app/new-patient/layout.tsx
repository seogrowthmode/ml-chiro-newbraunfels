import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Patients',
  description: 'New patient information for MaxLiving Chiropractic in New Braunfels, TX. $49 new patient special includes consultation, exam, X-rays if needed, and first adjustment. Call (830) 255-4350.',
  alternates: { canonical: 'https://ml-chiro-newbraunfels.vercel.app/new-patient' },
  openGraph: {
    title: 'New Patients | MaxLiving New Braunfels',
    description: '$49 new patient special. Consultation, exam, X-rays if needed, and first adjustment.',
    url: 'https://ml-chiro-newbraunfels.vercel.app/new-patient',
    siteName: 'MaxLiving Chiropractic New Braunfels',
    type: 'website',
  },
}

export default function NewPatientLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
