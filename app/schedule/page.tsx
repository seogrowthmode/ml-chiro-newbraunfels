'use client'
import Grain from '@/components/Grain'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import PhoneFormatter from '@/components/PhoneFormatter'
import LeadForm from '@/components/LeadForm'

export default function SchedulePage() {
  return (
    <>
      <Grain /><ScrollReveal /><PhoneFormatter />
      <NavInner />
      <section className="page-hero page-hero--short">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__content">
          <h1 className="page-hero__title" style={{ paddingTop: '100px' }}><span style={{ fontWeight: 400 }}>Schedule</span> <em>your visit.</em></h1>
          <p className="page-hero__sub">Choose your doctor. Tell us what&apos;s going on. We&apos;ll take it from there.</p>
        </div>
      </section>

      <section className="page-section page-section--cream">
        <div className="container">
          <div className="schedule-form-wrap">
            <span className="eyebrow reveal">Book Your Appointment</span>
            <div className="form-card form-card--gold reveal" data-delay="100">
              <p className="form-card__title" style={{ fontSize: '24px', fontWeight: 800, color: 'var(--charcoal)', marginBottom: '6px', letterSpacing: 0, textTransform: 'none' }}>New Patient Appointment</p>
              <p className="form-card__subtitle">New Patient Special &mdash; $49</p>
              <LeadForm>
                <div className="form-row"><div className="form-field"><label>First Name</label><input type="text" name="firstName" placeholder="Jane" required /></div><div className="form-field"><label>Last Name</label><input type="text" name="lastName" placeholder="Doe" required /></div></div>
                <div className="form-row"><div className="form-field"><label>Phone</label><input type="tel" name="phone" className="phone-input" placeholder="(830) 555-1234" required /></div><div className="form-field"><label>Email</label><input type="email" name="email" placeholder="jane@email.com" required /></div></div>
                <div className="form-row"><div className="form-field form-field--full"><label>Preferred Doctor</label><select name="doctor"><option value="">No Preference</option><option value="rachel">Dr. Rachel Diestel -- Prenatal, Pediatric</option><option value="travis">Dr. Travis Diestel -- Corrective Exercise, Military</option></select></div></div>
                <div className="form-row"><div className="form-field form-field--full"><label>Reason for Visit</label><select name="reason" required><option value="">Select a reason...</option><option value="general">General Chiropractic</option><option value="back-pain">Back Pain</option><option value="neck-pain">Neck Pain</option><option value="headaches">Headaches / Migraines</option><option value="prenatal">Prenatal Care</option><option value="pediatric">Pediatric Care</option><option value="sciatica">Sciatica</option><option value="military">Military / First Responder Wellness</option><option value="corrective">Corrective Exercise</option><option value="nutrition">Nutrition Coaching</option><option value="other">Other</option></select></div></div>
                <div className="form-row"><div className="form-field form-field--full"><label>Preferred Day</label><select name="preferred_day"><option value="">No Preference</option><option value="monday">Monday</option><option value="tuesday">Tuesday</option><option value="wednesday">Wednesday</option><option value="thursday">Thursday</option></select></div></div>
                <div className="form-row"><div className="form-field form-field--full"><label>Additional Notes</label><textarea name="message" placeholder="Anything else we should know? Previous injuries, concerns, questions..."></textarea></div></div>
                <button className="form-submit form-submit--lg" type="submit">Book My Visit &rarr;</button>
              </LeadForm>
              <p className="form-note">We&apos;ll confirm your appointment within 24 hours. CareCredit accepted.</p>
            </div>
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
            <p className="call-section__hours">Mon&ndash;Thu: 7:45 AM &ndash; 6:00 PM</p>
            <p className="call-section__address">741 Generations Dr, Suite 200, New Braunfels, TX 78130</p>
          </div>
        </div>
      </section>

      <section className="page-section page-section--cream" style={{ padding: '60px 0 80px' }}>
        <div className="container">
          <div className="doc-ref reveal">
            <div className="doc-ref__card doc-ref__card--rachel">
              <p className="doc-ref__name">Dr. Rachel Diestel D.C.</p>
              <p className="doc-ref__focus">Prenatal &middot; Pediatric &middot; Nutrition &middot; Pre/Peri-Natal Certified</p>
              <p className="doc-ref__desc">Her own health transformation through chiropractic led her to specialize in caring for moms, babies, and growing families.</p>
            </div>
            <div className="doc-ref__card doc-ref__card--travis">
              <p className="doc-ref__name">Dr. Travis Diestel D.C.</p>
              <p className="doc-ref__focus">Corrective Exercise &middot; Military &middot; CPT &middot; Level 2 Activator</p>
              <p className="doc-ref__desc">Five years in the U.S. Army taught him discipline and precision &mdash; now he brings that focus to every adjustment and rehab plan.</p>
            </div>
          </div>
        </div>
      </section>

      <FooterInner />
    </>
  )
}
