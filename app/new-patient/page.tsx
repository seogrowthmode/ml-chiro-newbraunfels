'use client'
import Grain from '@/components/Grain'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PageHero from '@/components/PageHero'
import ConversionCTA from '@/components/ConversionCTA'
import ScrollReveal from '@/components/ScrollReveal'
import PhoneFormatter from '@/components/PhoneFormatter'
import FaqAccordion from '@/components/FaqAccordion'
import Link from 'next/link'

const faqItems = [
  { q: 'How long is the first visit?', a: 'Plan for about 45-60 minutes. We take our time to understand your health history, perform a thorough exam, and discuss your care plan.' },
  { q: 'Do I need a referral?', a: 'No referral needed. You can book directly with either Dr. Rachel or Dr. Travis.' },
  { q: 'What should I bring?', a: 'Photo ID, insurance card (if applicable), and any recent imaging or medical records related to your condition.' },
  { q: 'Can my whole family be seen?', a: 'Absolutely. Dr. Rachel treats from infancy through seniors, and Dr. Travis works with all ages. Many families book back-to-back appointments.' },
  { q: 'Do you accept CareCredit?', a: 'Yes! CareCredit helps make care affordable with flexible payment plans. Apply online or ask our front desk.' },
  { q: 'What if I\'m nervous?', a: 'That\'s completely normal. Our team is warm, welcoming, and will walk you through every step. No surprises.' },
]

export default function NewPatientPage() {
  return (
    <>
      <Grain /><ScrollReveal /><PhoneFormatter />
      <NavInner activeLink="New Patients" />
      <PageHero breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'New Patients' }]} title={<><span style={{ fontWeight: 400, fontSize: '36px' }}>Your first visit. </span><em style={{ fontWeight: 800, fontSize: '48px' }}>Two doctors. One family.</em></>} sub="Everything you need to know about starting care at MaxLiving Chiropractic - New Braunfels." />

      {/* WHAT TO EXPECT */}
      <section className="page-section page-section--cream">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }} className="reveal">
            <span className="eyebrow">What To Expect</span>
            <h2><span style={{ display: 'block', fontSize: '32px', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3 }}>Three steps</span><span style={{ display: 'block', fontSize: '42px', fontWeight: 800, color: 'var(--charcoal)', lineHeight: 1.2 }}>to a new you.</span></h2>
          </div>
          <div className="np-steps">
            <div className="np-step reveal"><div className="np-step__num">01</div><div className="np-step__body"><p className="np-step__title">Book Your Visit</p><p className="np-step__text">Call <a href="tel:8302554350" style={{ color: 'var(--steel)', fontWeight: 600 }}>(830) 255-4350</a> or use our <Link href="/schedule" style={{ color: 'var(--steel)', fontWeight: 600 }}>online form</Link>. You&apos;ll choose Dr. Rachel, Dr. Travis, or let us match you to the right doctor based on your needs. We accept CareCredit and work with most insurance providers.</p></div></div>
            <div className="np-step reveal" data-delay="100"><div className="np-step__num">02</div><div className="np-step__body"><p className="np-step__title">Your Assessment</p><p className="np-step__text">Your first visit includes a comprehensive consultation where we listen to your full health story. We&apos;ll perform a thorough examination, take X-rays if needed, and identify the root cause of your condition. Both doctors collaborate on complex cases &mdash; you get two expert perspectives for the price of one.</p></div></div>
            <div className="np-step reveal" data-delay="200"><div className="np-step__num">03</div><div className="np-step__body"><p className="np-step__title">Your 5 Essentials Plan</p><p className="np-step__text">Based on your assessment, we create a personalized care plan built around the MaxLiving 5 Essentials: Core Chiropractic, Nutrition, Mindset, Oxygen &amp; Exercise, and Minimizing Toxins. This isn&apos;t symptom management &mdash; it&apos;s a complete roadmap to lasting health.</p></div></div>
          </div>
        </div>
      </section>

      {/* NEW PATIENT SPECIAL */}
      <section className="page-section page-section--charcoal">
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span className="eyebrow reveal">New Patient Special</span>
          <p className="reveal" style={{ fontSize: '56px', fontWeight: 900, color: 'var(--gold)', marginBottom: '12px', lineHeight: 1.1 }}>[PRICE &mdash; CONFIRM]</p>
          <p className="reveal" style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '8px' }}>Includes consultation, comprehensive exam, X-rays (if needed), and your first adjustment.</p>
          <p className="reveal" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '.5px', marginBottom: '36px', opacity: .55 }}>CareCredit accepted &middot; Most insurance welcome</p>
          <div className="reveal"><Link href="/schedule" className="btn btn--gold">Book My First Visit &rarr;</Link></div>
        </div>
      </section>

      {/* CHOOSE YOUR DOCTOR */}
      <section className="page-section page-section--stone">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }} className="reveal">
            <span className="eyebrow">Choose Your Doctor</span>
            <h2><span style={{ display: 'block', fontSize: '32px', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3 }}>Two experts.</span><span style={{ display: 'block', fontSize: '42px', fontWeight: 800, color: 'var(--charcoal)', lineHeight: 1.2 }}>Your choice.</span></h2>
          </div>
          <div className="doc-compare">
            <div className="doc-card doc-card--rachel reveal">
              <div className="doc-card__photo">Dr. Rachel</div>
              <p className="doc-card__name">Dr. Rachel Diestel, D.C.</p>
              <p className="doc-card__specs">Prenatal &middot; Pediatric &middot; Nutrition &middot; Detox</p>
              <p className="doc-card__desc">Choose Dr. Rachel if you&apos;re pregnant, have children who need care, or want a gentle, nurturing approach to whole-family wellness.</p>
              <Link href="/team" className="doc-card__link doc-card__link--blue">Learn More About Dr. Rachel &rarr;</Link>
            </div>
            <div className="doc-card doc-card--travis reveal" data-delay="100">
              <div className="doc-card__photo">Dr. Travis</div>
              <p className="doc-card__name">Dr. Travis Diestel, D.C.</p>
              <p className="doc-card__specs">Corrective Exercise &middot; Military/First Responder &middot; Activator</p>
              <p className="doc-card__desc">Choose Dr. Travis if you&apos;re a veteran, first responder, athlete, or need corrective exercise and structural rehabilitation.</p>
              <Link href="/team" className="doc-card__link doc-card__link--gold">Learn More About Dr. Travis &rarr;</Link>
            </div>
          </div>
          <p className="reveal" style={{ textAlign: 'center', fontSize: '15px', color: 'var(--text-secondary)', marginTop: '32px', fontStyle: 'italic' }}>Not sure? Select &ldquo;No Preference&rdquo; when booking &mdash; we&apos;ll match you.</p>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="page-section page-section--cream">
        <div className="container">
          <div className="split split--50-50 reveal">
            <div>
              <span className="eyebrow">Insurance &amp; Payment</span>
              <h2 className="split__headline"><span className="line1">We make it</span><span className="line2">simple.</span></h2>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '8px' }}>We believe finances should never stand between you and your health. Our team verifies your insurance benefits before your visit so there are no surprises. We accept CareCredit financing and offer flexible payment options for every family.</p>
              <ul className="check-list"><li>CareCredit accepted</li><li>Most insurance plans</li><li>We verify your benefits</li><li>Flexible payment options</li></ul>
            </div>
            <div className="form-card">
              <p className="form-card__title" style={{ fontSize: '22px', fontWeight: 800, color: 'var(--charcoal)', marginBottom: '20px', letterSpacing: 0, textTransform: 'none' }}>Verify Your Benefits</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-row"><div className="form-field"><label>First Name</label><input type="text" placeholder="First name" required /></div><div className="form-field"><label>Last Name</label><input type="text" placeholder="Last name" required /></div></div>
                <div className="form-row"><div className="form-field"><label>Phone</label><input type="tel" className="phone-input" placeholder="(555) 555-5555" required /></div><div className="form-field"><label>Email</label><input type="email" placeholder="you@email.com" required /></div></div>
                <div className="form-row"><div className="form-field form-field--full"><label>Insurance Provider</label><input type="text" placeholder="e.g. Blue Cross, Aetna, United" /></div></div>
                <div className="form-row"><div className="form-field form-field--full"><label>Preferred Doctor</label><select><option value="no-preference">No Preference</option><option value="dr-rachel">Dr. Rachel Diestel</option><option value="dr-travis">Dr. Travis Diestel</option></select></div></div>
                <button type="submit" className="form-submit">Check My Coverage &rarr;</button>
              </form>
              <p className="form-note">We&apos;ll contact you within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-section page-section--stone">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal"><span className="eyebrow">New Patient FAQ</span></div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <ConversionCTA line1="Your health" line2="starts here." sub="" />
      <FooterInner />
    </>
  )
}
