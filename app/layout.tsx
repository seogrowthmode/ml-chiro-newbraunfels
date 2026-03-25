import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MaxLiving Chiropractic - New Braunfels | Dr. Rachel & Dr. Travis Diestel',
  description: 'Husband-wife chiropractor team in New Braunfels, TX. Dr. Rachel specializes in prenatal & pediatric care. Dr. Travis, a US Army veteran, focuses on corrective exercise & military wellness. 5.0 Perfect Google Rating.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        {children}
      </body>
    </html>
  )
}
