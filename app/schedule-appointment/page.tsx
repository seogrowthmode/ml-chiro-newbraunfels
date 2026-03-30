import Grain from '@/components/Grain'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Online',
  description: 'Book your chiropractic appointment online with Dr. Rachel or Dr. Travis Diestel in New Braunfels, TX. New patient special: $185. Call (830) 255-4350.',
  alternates: { canonical: 'https://ml-chiro-newbraunfels.vercel.app/schedule-appointment' },
  openGraph: {
    title: 'Book Online | MaxLiving New Braunfels',
    description: 'Book your appointment online. New patient special: $185. Consultation, exam, X-rays if needed, and first adjustment.',
    url: 'https://ml-chiro-newbraunfels.vercel.app/schedule-appointment',
    siteName: 'MaxLiving Chiropractic New Braunfels',
    type: 'website',
  },
}

export default function ScheduleAppointmentPage() {
  return (
    <>
      <Grain /><ScrollReveal />
      <NavInner />

      <section className="page-hero page-hero--short">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__content">
          <h1 className="page-hero__title" style={{ paddingTop: '100px' }}>
            <span style={{ fontWeight: 400 }}>Book</span> <em>your appointment.</em>
          </h1>
          <p className="page-hero__sub">Choose your preferred time with Dr. Rachel or Dr. Travis.</p>
        </div>
      </section>

      <section className="page-section page-section--cream" style={{ padding: '40px 0 80px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="eyebrow">Online Booking</span>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginTop: '8px' }}>
              New Patient Special: <strong style={{ color: 'var(--charcoal)' }}>$185</strong> -- Consultation, exam, X-rays (if needed), and first adjustment.
            </p>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 16px rgba(0,0,0,.06)', minHeight: '600px' }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/ychhdjmugfocipqo9ypl"
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
              scrolling="no"
              title="Book an appointment at MaxLiving Chiropractic New Braunfels"
            />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--cream)', padding: '0 0 60px' }}>
        <div className="container">
          <div className="trust-strip reveal">
            <span><span className="trust-strip__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 5.0 Perfect</span>
            <span>67 Reviews</span><span>2 Doctors</span><span>US Army Veteran</span><span>CareCredit</span>
          </div>
        </div>
      </section>

      <section className="page-section page-section--stone" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="call-section reveal">
            <p style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '12px' }}>Prefer to Call?</p>
            <a href="tel:8302554350" className="call-section__phone">(830) 255-4350</a>
            <p className="call-section__hours">Mon-Thu: 7:45 AM - 6:00 PM</p>
            <p className="call-section__address">741 Generations Dr, Suite 200, New Braunfels, TX 78130</p>
          </div>
        </div>
      </section>

      <FooterInner variant="inner-hours" />
    </>
  )
}
