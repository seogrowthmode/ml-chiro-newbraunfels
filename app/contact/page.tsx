'use client'
import Grain from '@/components/Grain'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PageHero from '@/components/PageHero'
import ConversionCTA from '@/components/ConversionCTA'
import ScrollReveal from '@/components/ScrollReveal'
import PhoneFormatter from '@/components/PhoneFormatter'
import FaqAccordion from '@/components/FaqAccordion'
import LeadForm from '@/components/LeadForm'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <>
      <Grain /><ScrollReveal /><PhoneFormatter /><FaqAccordion items={[]} />
      <NavInner activeLink="Contact" />
      <PageHero short breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} title="Get in touch." sub="We'd love to hear from you." />

      <section className="page-section page-section--cream">
        <div className="container">
          <div className="split split--50-50 reveal">
            <div>
              <div className="form-card">
                <p className="form-card__title" style={{ fontSize: '22px', fontWeight: 800, color: 'var(--charcoal)', marginBottom: '20px', letterSpacing: 0, textTransform: 'none' }}>Send Us a Message</p>
                <LeadForm>
                  <div className="form-row">
                    <div className="form-field"><label htmlFor="c-fname">First Name</label><input type="text" id="c-fname" name="firstName" placeholder="First name" required /></div>
                    <div className="form-field"><label htmlFor="c-lname">Last Name</label><input type="text" id="c-lname" name="lastName" placeholder="Last name" required /></div>
                  </div>
                  <div className="form-row">
                    <div className="form-field"><label htmlFor="c-phone">Phone</label><input type="tel" id="c-phone" name="phone" className="phone-input" placeholder="(830) 255-4350" /></div>
                    <div className="form-field"><label htmlFor="c-email">Email</label><input type="email" id="c-email" name="email" placeholder="you@email.com" required /></div>
                  </div>
                  <div className="form-field" style={{ marginBottom: '12px' }}>
                    <label htmlFor="c-doctor">Preferred Doctor</label>
                    <select id="c-doctor" name="doctor"><option value="no-preference">No Preference</option><option value="dr-rachel">Dr. Rachel Diestel</option><option value="dr-travis">Dr. Travis Diestel</option></select>
                  </div>
                  <div className="form-field" style={{ marginBottom: '12px' }}>
                    <label htmlFor="c-reason">Reason for Visit</label>
                    <select id="c-reason" name="reason"><option value="new-patient">New Patient</option><option value="existing-patient">Existing Patient</option><option value="prenatal">Prenatal Care</option><option value="pediatric">Pediatric Care</option><option value="military">Military / First Responder</option><option value="general">General Question</option><option value="other">Other</option></select>
                  </div>
                  <div className="form-field" style={{ marginBottom: '12px' }}>
                    <label htmlFor="c-message">Message</label>
                    <textarea id="c-message" name="message" placeholder="Tell us about your condition or question..." rows={5}></textarea>
                  </div>
                  <button type="submit" className="form-submit">Send Message &rarr;</button>
                  <p className="form-note">We&apos;ll respond within 24 hours.</p>
                </LeadForm>
              </div>
            </div>
            <div>
              <div className="contact-info">
                <div className="contact-block">
                  <p className="contact-block__label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Visit Us</p>
                  <p className="contact-block__text">741 Generations Dr, Suite 200<br />New Braunfels, TX 78130</p>
                  <div className="map-placeholder">Google Maps &mdash; New Braunfels</div>
                </div>
                <div className="contact-block">
                  <p className="contact-block__label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>Call Us</p>
                  <a href="tel:8302554350" className="contact-block__phone">(830) 255-4350</a>
                </div>
                <div className="contact-block">
                  <p className="contact-block__label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>Email Us</p>
                  <p className="contact-block__text"><a href="mailto:dr.rachel@maxlivingnewbraunfels.com">dr.rachel@maxlivingnewbraunfels.com</a><br /><a href="mailto:info@maxlivingnewbraunfels.com">info@maxlivingnewbraunfels.com</a></p>
                </div>
                <div className="contact-block">
                  <p className="contact-block__label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Office Hours</p>
                  <table className="hours-table"><tbody>
                    <tr><td>Mon</td><td>7:45&ndash;10:30 AM, 3:00&ndash;6:00 PM</td></tr>
                    <tr><td>Tue</td><td>7:45&ndash;10:30 AM</td></tr>
                    <tr><td>Wed</td><td>7:45&ndash;10:30 AM, 3:00&ndash;6:00 PM</td></tr>
                    <tr><td>Thu</td><td>7:45&ndash;10:30 AM, 3:00&ndash;6:00 PM</td></tr>
                    <tr className="closed"><td>Fri</td><td>Closed</td></tr>
                    <tr className="closed"><td>Sat</td><td>Closed</td></tr>
                    <tr className="closed"><td>Sun</td><td>Closed</td></tr>
                  </tbody></table>
                </div>
                <div className="contact-block">
                  <p className="contact-block__label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>We Serve</p>
                  <p className="serving-list">New Braunfels &middot; San Marcos &middot; Seguin &middot; Canyon Lake &middot; Kyle &middot; Wimberley &middot; North San Antonio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--stone">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal">
            <span className="eyebrow">YOUR DOCTORS</span>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--charcoal)' }}>Two doctors. One mission.</h2>
          </div>
          <div className="doc-quick-grid">
            <div className="doc-quick-card doc-quick-card--rachel reveal">
              <p className="doc-quick-card__name">Dr. Rachel Diestel, D.C.</p>
              <p className="doc-quick-card__specialties">Prenatal &middot; Pediatric &middot; Nutrition</p>
              <a href="mailto:dr.rachel@maxlivingnewbraunfels.com" className="doc-quick-card__email">dr.rachel@maxlivingnewbraunfels.com</a>
              <Link href="/schedule" className="doc-quick-card__link">Book with Dr. Rachel &rarr;</Link>
            </div>
            <div className="doc-quick-card doc-quick-card--travis reveal" data-delay="100">
              <p className="doc-quick-card__name">Dr. Travis Diestel, D.C.</p>
              <p className="doc-quick-card__specialties">Corrective Exercise &middot; Military &middot; Activator</p>
              <a href="mailto:info@maxlivingnewbraunfels.com" className="doc-quick-card__email">info@maxlivingnewbraunfels.com</a>
              <Link href="/schedule" className="doc-quick-card__link">Book with Dr. Travis &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <ConversionCTA line1="Ready to start?" line2="Call us today." sub="(830) 255-4350 &middot; CareCredit Accepted" />
      <FooterInner />
    </>
  )
}
