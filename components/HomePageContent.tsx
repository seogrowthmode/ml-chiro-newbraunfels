'use client'
import Link from 'next/link'
import Image from 'next/image'
import Grain from '@/components/Grain'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ScrollReveal from '@/components/ScrollReveal'
import PhoneFormatter from '@/components/PhoneFormatter'
import HomepageClient from '@/components/HomepageClient'
import LeadForm from '@/components/LeadForm'

const svcImages: Record<string, { src: string; alt: string } | null> = {
  'Adjustment Photo': { src: '/images/gallery-1.png', alt: 'Chiropractic adjustment at MaxLiving New Braunfels' },
  'Spinal Correction Photo': { src: '/images/gallery-2.png', alt: 'Advanced spinal correction treatment' },
  'Prenatal Care Photo': { src: '/images/gallery-3.png', alt: 'Prenatal chiropractic care' },
  'Pediatric Care Photo': { src: '/images/gallery-4.png', alt: 'Pediatric chiropractic care' },
  'Exercise Rehab Photo': { src: '/images/clinic-content.png', alt: 'Corrective exercise rehabilitation' },
  'Massage Therapy Photo': null,
  'Nutrition Photo': null,
  'Detox Program Photo': null,
}

export default function HomePageContent() {
  return (
    <>
      <Grain />
      <ScrollReveal />
      <PhoneFormatter />
      <HomepageClient />

      {/* NAV */}
      <NavInner variant="homepage" />

      {/* MOBILE MENU */}
      <div className="nav__menu" id="navMenu">
        <button className="nav__menu-close" id="navClose">&times;</button>
        <a href="#empathy" className="nav__link">Conditions</a>
        <a href="#team-split" className="nav__link">Our Doctors</a>
        <a href="#services" className="nav__link">Services</a>
        <a href="#essentials" className="nav__link">5 Essentials</a>
        <a href="#testimonials" className="nav__link">Reviews</a>
        <a href="#faq" className="nav__link">FAQ</a>
        <a href="#form-section" className="btn btn--gold">Schedule Your Visit</a>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero__dark">
          <div className="hero__dark-inner">
            <span className="eyebrow eyebrow--light hero__label">MaxLiving Chiropractic</span>
            <h1 className="hero__headline">
              <span className="line1">Chiropractor in</span>
              <span className="line2">New Braunfels, TX</span>
            </h1>
            <p className="hero__sub">Dr. Rachel&apos;s health transformation inspired Dr. Travis to leave the U.S. Army and become a chiropractor. Today they&apos;re a husband-wife team serving New Braunfels with prenatal care, pediatric specialty, corrective exercise, and the MaxLiving 5 Essentials.</p>
            <a href="#form-section" className="btn btn--gold">Schedule Your Visit &rarr;</a>
            <div className="hero__trust">
              <span className="hero__trust-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span>5.0 &middot; 67 Reviews</span>
              <span className="hero__trust-sep">|</span>
              <span>Parker University</span>
              <span className="hero__trust-sep">|</span>
              <span>US Army Veteran</span>
              <span className="hero__trust-sep">|</span>
              <span>MaxLiving</span>
            </div>
          </div>
        </div>
        <div className="hero__light">
          <div className="hero__photo">
            <Image src="/images/clinic-hero.png" alt="Dr. Rachel Diestel and Dr. Travis Diestel - MaxLiving Chiropractic New Braunfels" width={600} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} priority />
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="form-section" id="form-section">
        <div className="container">
          <div className="form-section__inner reveal">
            <div>
              <span className="eyebrow">Two Doctors, One Family</span>
              <h2 className="form-section__headline">
                <span className="line1">Family Chiropractor in</span>
                <span className="line2">New Braunfels</span>
              </h2>
              <p className="form-section__text">Dr. Rachel specializes in prenatal and pediatric care. Dr. Travis brings military discipline and corrective exercise expertise. Together &mdash; every age, every condition.</p>
              <div className="form-section__checks">
                <div className="form-section__check">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Pre- and peri-natal certified
                </div>
                <div className="form-section__check">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4.5 12.75l6 6 9-13.5" /></svg>
                  5-year US Army veteran
                </div>
                <div className="form-section__check">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Perfect 5.0&#9733; from 67 families
                </div>
              </div>
            </div>
            <div className="form-card">
              <div className="form-card__title">New Patient Special</div>
              <div className="form-card__price">$49</div>
              <LeadForm formId="patientForm">
                <div className="form-card__row">
                  <div className="form-card__field">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstName" placeholder="First name" required />
                  </div>
                  <div className="form-card__field">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastName" placeholder="Last name" required />
                  </div>
                </div>
                <div className="form-card__row">
                  <div className="form-card__field">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder="(___) ___-____" className="phone-input" required />
                  </div>
                  <div className="form-card__field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="form-card__field form-card__field--full" style={{ marginBottom: '20px' }}>
                  <label htmlFor="doctor">Preferred Doctor</label>
                  <select id="doctor" name="doctor">
                    <option value="">No Preference</option>
                    <option value="rachel">Dr. Rachel Diestel</option>
                    <option value="travis">Dr. Travis Diestel</option>
                  </select>
                </div>
                <button type="submit" className="btn btn--charcoal form-card__submit">Book My Visit &rarr;</button>
              </LeadForm>
              <p className="form-card__note">CareCredit accepted</p>
            </div>
          </div>
        </div>
      </section>

      {/* EMPATHY */}
      <section className="empathy" id="empathy">
        <div className="container">
          <div className="empathy__header reveal">
            <span className="eyebrow">You&apos;re Not Alone in This</span>
            <h2 className="empathy__headline">
              <span className="line1">Conditions We Treat in</span>
              <span className="line2">New Braunfels, TX</span>
            </h2>
          </div>
          <div className="empathy__grid">
            {[
              { stat: '80%', title: 'Back Pain', desc: 'of adults experience back pain at some point in life.', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><path d="M24 4c-2 6-4 10-6 16s-2 10 0 14c1 2 3 4 6 6 3-2 5-4 6-6 2-4 2-8 0-14S26 10 24 4Z" /><path d="M18 20h12M17 26h14M19 32h10" /></svg> },
              { stat: '47M', title: 'Migraines & Headaches', desc: 'Americans suffer from migraines or severe headaches.', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="24" cy="18" r="12" /><path d="M16 14c2-2 5-3 8-3s6 1 8 3M12 30c2 4 6 8 12 10 6-2 10-6 12-10" /></svg> },
              { stat: '50%+', title: 'Pregnancy Back Pain', desc: 'of pregnant women experience significant back pain.', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="24" cy="28" rx="10" ry="12" /><path d="M24 16V8M20 10h8" /><circle cx="24" cy="28" r="4" /></svg> },
              { stat: '40%', title: 'Sciatica', desc: 'of sciatica cases involve a herniated disc.', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><path d="M24 8v32M18 12l6-4 6 4M16 20c-4 2-6 6-6 10M32 20c4 2 6 6 6 10M14 34h20" /><path d="M20 24l-4 8M28 24l4 8" strokeDasharray="3 3" /></svg> },
              { stat: '1 in 6', title: 'Childhood Developmental Issues', desc: 'children have a developmental or behavioral disability.', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="24" cy="14" r="8" /><path d="M16 26c-2 4-2 8 0 12h16c2-4 2-8 0-12" /><path d="M20 14v4M28 14v4" /></svg> },
              { stat: '70%+', title: 'Veteran Chronic Pain', desc: 'of military veterans report chronic musculoskeletal pain.', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><path d="M24 8l4 6h8l-4 6 2 8-6-3-4 3-4-3-6 3 2-8-4-6h8l4-6Z" /><path d="M24 42V28" /><path d="M16 42h16" /></svg> },
            ].map((card, i) => (
              <div key={i} className="empathy__card reveal" style={i > 0 ? { transitionDelay: `${(i % 3) * 0.1}s` } : undefined}>
                <div className="empathy__card-icon">{card.icon}</div>
                <div className="empathy__card-stat">{card.stat}</div>
                <div className="empathy__card-title">{card.title}</div>
                <p className="empathy__card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="empathy__bottom reveal">
            <p className="empathy__bottom-text">Dr. Rachel and Dr. Travis see these numbers walk through their door every day. They have answers.</p>
            <a href="#form-section" className="btn btn--gold">Tell Us What&apos;s Going On &rarr;</a>
          </div>
        </div>
      </section>

      {/* SERVICE HEALING */}
      <section className="service-healing" id="service-healing">
        <div className="container">
          <div className="service-healing__inner reveal">
            <div className="service-healing__photo">
              <Image src="/images/clinic-content.png" alt="Dr. Travis Diestel - Military veteran chiropractor New Braunfels" width={500} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
            </div>
            <div>
              <span className="eyebrow eyebrow--light">From Service to Healing</span>
              <h2 className="service-healing__headline">
                <span className="line1">Corrective Exercise Specialist</span>
                <span className="line2">New Braunfels, TX</span>
              </h2>
              <p className="service-healing__text">Dr. Travis served 5 years in the U.S. Army. He was trained for discipline, structure, and mission execution. But when he watched his wife Rachel &mdash; who had suffered from kidney and reproductive health issues for years &mdash; transform her health through chiropractic, he found a new mission.</p>
              <p className="service-healing__text">He enrolled at Parker University. Earned his D.C. He became a certified personal trainer and corrective exercise specialist. Today he brings military-grade precision to every patient &mdash; especially the veterans and first responders who understand what it means to push a body to its limit.</p>
              <p className="service-healing__text">If you&apos;ve served, Dr. Travis speaks your language.</p>
              <div className="service-healing__cta">
                <a href="#form-section" className="btn btn--gold">Book With Dr. Travis &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SPLIT */}
      <section className="team-split" id="team-split">
        <div className="team-split__divider"></div>
        <div className="team-split__half team-split__half--rachel">
          <div className="team-split__content reveal">
            <span className="eyebrow">Her Specialty</span>
            <div className="team-split__photo">
              <Image src="/images/dr-rachel-diestel.png" alt="Dr. Rachel Diestel - Chiropractor New Braunfels TX" width={400} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
            </div>
            <h3 className="team-split__name">Dr. Rachel Diestel, D.C.</h3>
            <p className="team-split__creds">Parker University &middot; Prenatal &middot; Pediatric &middot; Pre/Peri-Natal Certified</p>
            <p className="team-split__bio">Rachel overcame kidney and reproductive health challenges through chiropractic. That transformation became her mission: help every mother, child, and family reclaim their health.</p>
            <div className="team-split__tags">
              <span className="team-split__tag">Prenatal</span>
              <span className="team-split__tag">Pediatric</span>
              <span className="team-split__tag">Nutrition</span>
              <span className="team-split__tag">Detox</span>
            </div>
            <Link href="/about" className="team-split__link">Meet Dr. Rachel &rarr;</Link>
          </div>
        </div>
        <div className="team-split__half team-split__half--travis">
          <div className="team-split__content reveal">
            <span className="eyebrow eyebrow--charcoal">His Strength</span>
            <div className="team-split__photo">
              <Image src="/images/dr-travis-diestel.png" alt="Dr. Travis Diestel - Chiropractor New Braunfels TX" width={400} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
            </div>
            <h3 className="team-split__name">Dr. Travis Diestel, D.C.</h3>
            <p className="team-split__creds">Parker University &middot; US Army 5 Years &middot; CPT &middot; Corrective Exercise Specialist &middot; Level 2 Activator</p>
            <p className="team-split__bio">Travis watched Rachel heal. He left the Army. He found his calling. Now he brings that same discipline to corrective care, exercise rehabilitation, and military/first responder wellness.</p>
            <div className="team-split__tags">
              <span className="team-split__tag">Spinal Correction</span>
              <span className="team-split__tag">Corrective Exercise</span>
              <span className="team-split__tag">Military/First Responder</span>
              <span className="team-split__tag">Activator</span>
            </div>
            <Link href="/about" className="team-split__link">Meet Dr. Travis &rarr;</Link>
          </div>
        </div>
      </section>
      <div className="team-split__footer">Both Parker University. Both MaxLiving certified. Both on a mission.</div>

      {/* SERVICES ACCORDION */}
      <section className="services" id="services">
        <div className="container">
          <div className="services__header reveal">
            <span className="eyebrow">How We Help</span>
            <h2 className="services__headline">
              <span className="line1">Chiropractic Services in</span>
              <span className="line2">New Braunfels, TX</span>
            </h2>
          </div>
          <div className="services__list">
            {[
              { num: '01', title: 'Chiropractic Adjustments', href: '/spinal-correction-new-braunfels', preview: 'Precise spinal adjustments to correct misalignments and restore nervous system function.', desc: 'Your nervous system controls every function in your body. When vertebrae shift out of alignment, they interfere with nerve signals -- leading to pain, dysfunction, and disease. Our adjustments are precise, gentle, and designed to restore your body\'s ability to heal itself.', bullets: ['Back and neck pain relief', 'Headache and migraine reduction', 'Improved mobility and posture', 'Enhanced nervous system function'], icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 4c-2 5-3 9-5 14s-2 9 0 12c1 2 3 4 5 5 2-1 4-3 5-5 2-3 2-7 0-12S22 9 20 4Z" /></svg>, imgLabel: 'Adjustment Photo', open: true },
              { num: '02', title: 'Advanced Spinal Correction', href: '/spinal-correction-new-braunfels', preview: 'Structural correction addressing root causes, not just symptoms.', desc: 'Beyond basic adjustments, advanced spinal correction uses precise imaging and structural analysis to identify and correct the root cause of spinal misalignment. Available with both Dr. Rachel and Dr. Travis -- a personalized plan to restore your spine\'s natural curve and function.', icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="8" y="4" width="24" height="32" rx="4" /><path d="M14 14h12M14 20h12M14 26h8" /><circle cx="20" cy="8" r="2" /></svg>, imgLabel: 'Spinal Correction Photo' },
              { num: '03', title: <>Prenatal Chiropractic<span className="svc-accordion__badge svc-accordion__badge--rachel">Dr. Rachel</span></>, href: '/prenatal-chiropractic-care-new-braunfels', preview: 'Safe, gentle care supporting healthy pregnancy and delivery.', desc: 'Dr. Rachel is pre- and peri-natal certified, trained in Webster technique and advanced pregnancy-specific adjustments. She helps expecting mothers maintain alignment, reduce pain, and prepare their bodies for delivery.', bullets: ['Webster technique certified', 'Lower back and pelvic pain relief', 'Optimal fetal positioning support', 'Postpartum recovery care'], icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="20" cy="22" rx="8" ry="10" /><path d="M20 12V6M17 8h6" /><circle cx="20" cy="22" r="3" /></svg>, imgLabel: 'Prenatal Care Photo' },
              { num: '04', title: <>Pediatric Chiropractic<span className="svc-accordion__badge svc-accordion__badge--rachel">Dr. Rachel</span></>, href: '/pediatric-chiropractic-care-new-braunfels', preview: 'Gentle adjustments for infants through teens.', desc: 'Children respond beautifully to chiropractic. Dr. Rachel uses age-appropriate, gentle techniques to support healthy development, improve nervous system function, and address common childhood issues from colic to scoliosis.', icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="20" cy="12" r="6" /><path d="M14 22c-2 3-2 6 0 10h12c2-4 2-7 0-10" /></svg>, imgLabel: 'Pediatric Care Photo' },
              { num: '05', title: <>Corrective Exercises<span className="svc-accordion__badge svc-accordion__badge--travis">Dr. Travis</span></>, href: '/corrective-exercises-new-braunfels', preview: 'Custom programs to strengthen, correct posture, and maintain results.', desc: 'As a certified personal trainer and corrective exercise specialist, Dr. Travis designs custom rehabilitation and strengthening programs. His military background means precision, structure, and accountability -- especially for veterans and first responders recovering from the physical demands of service.', icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="20" cy="10" r="4" /><path d="M20 14v8M14 28l6-6 6 6M12 34h16" /><path d="M26 18l4 4M14 18l-4 4" /></svg>, imgLabel: 'Exercise Rehab Photo' },
              { num: '06', title: 'Massage Therapy', href: '/massage-therapy-new-braunfels', preview: 'Professional massage complementing chiropractic care.', desc: 'Our licensed massage therapists work alongside your chiropractor to release tension, improve circulation, and accelerate healing. An essential complement to your spinal correction plan.', icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 8c4 4 4 10 0 14M28 8c-4 4-4 10 0 14" /><ellipse cx="20" cy="20" rx="6" ry="10" /></svg>, imgLabel: 'Massage Therapy Photo' },
              { num: '07', title: 'Nutritional Coaching', href: '/nutritional-coaching-new-braunfels', preview: 'Personalized nutrition based on the 5 Essentials.', desc: 'Healing starts from the inside. Both doctors are certified in MaxLiving nutrition protocols, guiding you toward foods and supplements that reduce inflammation, support healing, and fuel your body\'s natural recovery process.', icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 32V16l8-8 8 8v16" /><path d="M18 32v-8h4v8" /><circle cx="20" cy="20" r="3" /></svg>, imgLabel: 'Nutrition Photo' },
              { num: '08', title: 'Detoxification', href: '/detoxification-programs-new-braunfels', preview: 'Guided detox programs to reduce toxic burden.', desc: 'Environmental toxins accumulate in your body over time, contributing to inflammation, fatigue, and disease. Our guided detox programs help you systematically reduce toxic burden and restore your body\'s natural detoxification pathways.', icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 8v24M14 14l6-6 6 6" /><circle cx="20" cy="28" r="6" /><path d="M17 28h6" /></svg>, imgLabel: 'Detox Program Photo' },
            ].map((svc, i) => (
              <div key={i} className={`svc-accordion${svc.open ? ' open' : ''}`} data-svc="">
                <div className="svc-accordion__border-active"></div>
                <div className="svc-accordion__header">
                  <div className="svc-accordion__left">
                    <span className="svc-accordion__num">{svc.num}</span>
                    <div className="svc-accordion__icon">{svc.icon}</div>
                    <div className="svc-accordion__info">
                      <span className="svc-accordion__title">{svc.title}</span>
                      <span className="svc-accordion__preview">{svc.preview}</span>
                    </div>
                  </div>
                  <svg className="svc-accordion__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7" /></svg>
                </div>
                <div className="svc-accordion__body">
                  <div className="svc-accordion__body-inner">
                    <div className="svc-accordion__desc">
                      <p>{svc.desc}</p>
                      {svc.bullets && (
                        <ul>{svc.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                      )}
                    </div>
                    <div className="svc-accordion__image">
                      {svcImages[svc.imgLabel] ? (
                        <Image src={svcImages[svc.imgLabel]!.src} alt={svcImages[svc.imgLabel]!.alt} width={400} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div className="svc-accordion__image-gradient">
                          <span>{svc.title}</span>
                        </div>
                      )}
                      {svc.href && <Link href={svc.href} className="svc-accordion__link" style={{ display: 'inline-block', marginTop: '12px', color: 'var(--gold)', fontWeight: 700, fontSize: '15px' }}>View Full Service Page &rarr;</Link>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ESSENTIALS */}
      <section className="essentials" id="essentials">
        <div className="container">
          <div className="essentials__header reveal">
            <span className="eyebrow eyebrow--light">The MaxLiving Difference</span>
            <h2 className="essentials__headline">
              <span className="line1">MaxLiving 5 Essentials</span>
              <span className="line2">New Braunfels</span>
            </h2>
          </div>
          <div className="essentials__list">
            {[
              { num: '1', title: 'Core Chiropractic', desc: 'Principled care restoring nervous system function. The foundation of everything -- when your spine is aligned, your body can heal, adapt, and thrive.', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><path d="M24 4c-2 6-4 10-6 16s-2 10 0 14c1 2 3 4 6 6 3-2 5-4 6-6 2-4 2-8 0-14S26 10 24 4Z" /></svg> },
              { num: '2', title: 'Nutrition', desc: 'Personalized guidance to fuel healing from the inside out. What you eat either fights disease or feeds it -- we help you choose wisely.', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="24" cy="20" r="8" /><path d="M16 32c0-4 4-8 8-8s8 4 8 8" /><path d="M20 18v4M28 18v4M22 24h4" /></svg> },
              { num: '3', title: 'Mindset', desc: 'Mental wellness. Stress reduction. Mind-body connection. Your thoughts shape your health -- we give you tools to reclaim peace and focus.', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="24" cy="24" r="16" /><path d="M24 12v12l8 8" /></svg> },
              { num: '4', title: 'Oxygen & Exercise', desc: 'Movement and oxygen delivery to strengthen and rebuild. Dr. Travis\'s corrective exercise protocols turn your body into a healing machine.', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="24" cy="10" r="4" /><path d="M24 14v8M18 28l6-6 6 6M14 34h20" /><path d="M28 18l6 4M20 18l-6 4" /></svg> },
              { num: '5', title: 'Minimize Toxins', desc: 'Reduce toxic burden from environment and diet. Your body is constantly under chemical assault -- we help you identify and eliminate the sources.', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><path d="M24 8l4 6h8l-4 6 2 8-6-3-4 3-4-3-6 3 2-8-4-6h8l4-6Z" /></svg> },
            ].map((e, i) => (
              <div key={i} className="essential-card reveal" style={i > 0 ? { transitionDelay: `${i * 0.08}s` } : undefined}>
                <div className="essential-card__watermark">{e.num}</div>
                <div className="essential-card__icon">{e.icon}</div>
                <div className="essential-card__content">
                  <div className="essential-card__title">{e.title}</div>
                  <p className="essential-card__desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <div className="statement__bg"></div>
        <div className="statement__overlay"></div>
        <div className="statement__content reveal">
          <h2 className="statement__headline">
            <span className="line1">A life free</span>
            <span className="line2">from interference.</span>
          </h2>
        </div>
      </section>

      {/* RESULTS */}
      <section className="results" id="results">
        <div className="container">
          <div className="results__inner">
            <div className="reveal">
              <span className="eyebrow">Real Results</span>
              <h2 className="results__headline">
                <span className="line1">Chiropractic Results in</span>
                <span className="line2">New Braunfels</span>
              </h2>
              <div className="results__list">
                {[
                  'Pregnant moms experience comfortable deliveries with Dr. Rachel\'s prenatal expertise',
                  'Veterans and first responders find relief from the toll their service took',
                  'Children develop stronger nervous systems from their very first adjustment',
                  '67 families gave us a perfect 5.0 stars',
                ].map((item, i) => (
                  <div key={i} className="results__item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4.5 12.75l6 6 9-13.5" /></svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a href="#form-section" className="btn btn--gold">Schedule Your Visit &rarr;</a>
            </div>
            <div className="results__image reveal" style={{ transitionDelay: '.15s' }}>
              <Image src="/images/clinic-arch.jpeg" alt="MaxLiving Chiropractic New Braunfels clinic" width={600} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats reveal">
        <div className="container">
          <div className="stats__inner">
            <div className="stats__item"><div className="stats__num">5.0&#9733;</div><div className="stats__label">Perfect Rating</div></div>
            <div className="stats__item"><div className="stats__num">67</div><div className="stats__label">5-Star Reviews</div></div>
            <div className="stats__item"><div className="stats__num">2</div><div className="stats__label">Doctors</div></div>
            <div className="stats__item"><div className="stats__num">5 Yr</div><div className="stats__label">US Army Veteran</div></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="testimonials__header reveal">
            <span className="eyebrow">Patient Stories</span>
            <h2 className="testimonials__headline">
              <span className="line1">New Braunfels Chiropractor</span>
              <span className="line2">Reviews -- 5.0 Stars</span>
            </h2>
          </div>
          <div className="testimonials__grid">
            {[
              { text: '"The entire team is incredible. Dr. Rachel made my pregnancy so much more comfortable, and my delivery was the smoothest of all three kids. This place is special."', author: 'Sarah M.', delay: 0 },
              { text: '"As a veteran, I was skeptical. Dr. Travis gets it -- he understands what years of service do to your body. Best decision I\'ve made for my health in a long time."', author: 'James R.', delay: .1 },
              { text: '"We bring our whole family -- from our 6-month-old to my mother-in-law. The whole-body approach with the 5 Essentials has changed how we think about health."', author: 'The Hernandez Family', delay: .2 },
            ].map((t, i) => (
              <div key={i} className="testi-card reveal" style={t.delay ? { transitionDelay: `${t.delay}s` } : undefined}>
                <div className="testi-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="testi-card__text">{t.text}</p>
                <div className="testi-card__author">{t.author}</div>
                <div className="testi-card__source">Google Review</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="container">
          <div className="process__header reveal">
            <span className="eyebrow">Getting Started</span>
            <h2 className="process__headline">
              <span className="line1">New Patient Visit in</span>
              <span className="line2">New Braunfels</span>
            </h2>
          </div>
          <div className="process__steps">
            {[
              { num: '01', title: 'Book Your Visit', desc: <>Call us at <a href="tel:8302554350" style={{ color: 'var(--steel)', fontWeight: 700 }}>(830) 255-4350</a> or fill out the form above. Choose Dr. Rachel, Dr. Travis, or let us match you to the right doctor. CareCredit accepted.</> },
              { num: '02', title: 'Your Assessment', desc: 'Comprehensive exam, X-rays if needed. Both doctors collaborate on complex cases. We find the root cause -- not symptom management.' },
              { num: '03', title: 'Your 5 Essentials Plan', desc: 'Personalized: chiropractic + nutrition + exercise + mindset + detox. Whatever YOUR body needs. A complete roadmap to lasting health.' },
            ].map((step, i) => (
              <div key={i} className="process__step reveal" style={i > 0 ? { transitionDelay: `${i * 0.1}s` } : undefined}>
                <div className="process__step-num">{step.num}</div>
                <div>
                  <h3 className="process__step-title">{step.title}</h3>
                  <p className="process__step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq__inner">
            <div className="reveal">
              <div className="faq__headline">
                <span className="line1">Questions?</span>
                <span className="line2">We&apos;ve got answers.</span>
              </div>
              <p className="faq__headline-sub">Can&apos;t find what you need? Call us at <a href="tel:8302554350" style={{ color: 'var(--steel)', fontWeight: 700 }}>(830) 255-4350</a>.</p>
            </div>
            <div className="faq__list">
              {[
                { q: "What's included in a new patient visit?", a: 'Your first visit includes a comprehensive consultation, examination, X-rays if needed, and your first adjustment. We take the time to understand your health history, identify root causes, and develop a personalized care plan based on the 5 Essentials framework.' },
                { q: 'Can I choose which doctor I see?', a: 'Absolutely. When you book, you can request Dr. Rachel, Dr. Travis, or select "No Preference" and we\'ll match you based on your needs. Dr. Rachel specializes in prenatal and pediatric care, while Dr. Travis focuses on corrective exercise and military/first responder wellness.' },
                { q: 'Is chiropractic safe during pregnancy?', a: 'Yes -- and highly recommended. Dr. Rachel is pre- and peri-natal certified with advanced training in pregnancy-specific techniques. Gentle adjustments help relieve back pain, improve pelvic alignment, and support optimal fetal positioning for a smoother delivery.' },
                { q: 'Do you treat military members and first responders?', a: 'This is personal to us. Dr. Travis served 5 years in the U.S. Army and understands the physical toll of service. He combines chiropractic with corrective exercise to help veterans and first responders recover from the demands they\'ve placed on their bodies.' },
                { q: 'What are the MaxLiving 5 Essentials?', a: 'The 5 Essentials are the foundation of MaxLiving care: Core Chiropractic, Nutrition, Mindset, Oxygen & Exercise, and Minimizing Toxins. Instead of treating symptoms, we address all five areas to help your body heal, function, and thrive at its best.' },
                { q: 'Do you treat babies and children?', a: 'Yes! Dr. Rachel treats patients from infancy through their senior years. Pediatric adjustments are incredibly gentle -- using no more pressure than you\'d use to test a tomato. Children respond quickly to care and it supports healthy nervous system development from the start.' },
                { q: 'Do you accept insurance? CareCredit?', a: 'We accept CareCredit and work with many insurance providers. Contact our office at (830) 255-4350 to verify your specific coverage. We believe cost should never be a barrier to health, and we\'ll work with you to find a solution.' },
                { q: 'What is advanced spinal correction?', a: 'Advanced spinal correction goes beyond standard adjustments. Using precise imaging and structural analysis, we identify the root cause of spinal misalignment and develop a targeted correction plan. The goal is lasting structural change -- not temporary relief.' },
              ].map((faq, i) => (
                <div key={i} className="faq-item" data-faq="">
                  <div className="faq-item__q">
                    {faq.q}
                    <svg className="faq-item__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  <div className="faq-item__a"><div className="faq-item__a-inner">{faq.a}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta__bg"></div>
        <div className="final-cta__overlay"></div>
        <div className="final-cta__content reveal">
          <h2 className="final-cta__headline">
            <span className="line1">Two doctors</span>
            <span className="line2">who changed each other&apos;s lives</span>
            <span className="line3">are ready to change yours.</span>
          </h2>
          <div className="final-cta__buttons">
            <a href="#form-section" className="btn btn--gold">Schedule My Visit &rarr;</a>
            <a href="tel:8302554350" className="btn btn--outline">Call (830) 255-4350</a>
          </div>
          <p className="final-cta__areas">New Braunfels &middot; San Marcos &middot; Canyon Lake &middot; Seguin &middot; Hill Country</p>
        </div>
      </section>

      <FooterInner variant="homepage" />
    </>
  )
}
