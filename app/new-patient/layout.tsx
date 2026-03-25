import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Patients | MaxLiving Chiropractic - New Braunfels',
  description: 'New patient information for MaxLiving Chiropractic New Braunfels. $49 new patient special includes consultation, exam, X-rays if needed, and first adjustment.',
  alternates: { canonical: 'https://ml-chiro-newbraunfels.vercel.app/new-patient' },
  openGraph: {
    title: 'New Patients | MaxLiving Chiropractic - New Braunfels',
    description: '$49 new patient special. Consultation, exam, X-rays if needed, and first adjustment.',
    url: 'https://ml-chiro-newbraunfels.vercel.app/new-patient',
    siteName: 'MaxLiving Chiropractic New Braunfels',
    type: 'website',
  },
}

export default function NewPatientLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
