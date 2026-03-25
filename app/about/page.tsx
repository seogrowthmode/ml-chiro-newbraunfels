import Grain from '@/components/Grain'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PageHero from '@/components/PageHero'
import ConversionCTA from '@/components/ConversionCTA'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Dr. Rachel and Dr. Travis Diestel -- husband-wife chiropractor team in New Braunfels, TX. Parker University graduates serving families with the MaxLiving 5 Essentials. Call (830) 255-4350.',
  alternates: { canonical: 'https://ml-chiro-newbraunfels.vercel.app/about' },
  openGraph: {
    title: 'About MaxLiving Chiropractic New Braunfels',
    description: 'Dr. Rachel and Dr. Travis Diestel -- husband-wife chiropractor team in New Braunfels, TX. Parker University graduates.',
    url: 'https://ml-chiro-newbraunfels.vercel.app/about',
    siteName: 'MaxLiving Chiropractic New Braunfels',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <Grain />
      <ScrollReveal />
      <NavInner activeLink="Our Story" />

      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        title={<><span style={{ fontWeight: 400, fontSize: '36px' }}>About </span><em style={{ fontWeight: 800, fontSize: '48px' }}>MaxLiving New Braunfels.</em></>}
        sub="A husband-wife team changing New Braunfels -- one family at a time."
      />

      {/* OUR STORY */}
      <section className="page-section page-section--cream">
        <div className="container">
          <div className="split split--55-45 reveal">
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="split__headline">
                <span className="line1">His journey started</span>
                <span className="line2">by watching hers.</span>
              </h2>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '16px' }}>Rachel was sick. For years, she struggled with kidney issues and reproductive health challenges that no doctor could explain. Conventional medicine offered prescriptions and uncertainty -- but never real answers. When she discovered chiropractic care, everything changed. Her nervous system began functioning the way it was designed to. Her body healed. Her life transformed.</p>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '16px' }}>Travis watched it happen. He was serving in the United States Army at the time -- five years of disciplined service, pushing bodies to their absolute limits. But watching Rachel&apos;s transformation shook something loose. He realized he wanted to help people heal the way she had been healed. He left the Army.</p>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '16px' }}>They both enrolled at Parker University. They studied together, earned their Doctor of Chiropractic degrees together, and in 2020, they opened MaxLiving Chiropractic in New Braunfels -- a Hill Country town they chose because it felt like home.</p>
              <p style={{ fontSize: '17px', color: 'var(--charcoal)', lineHeight: 1.75, fontWeight: 600 }}>Today, Dr. Rachel focuses on what changed her life: prenatal and pediatric care. Dr. Travis brings military precision to corrective exercise and whole-body wellness. Together, they&apos;re not just business partners -- they&apos;re proof that chiropractic changes everything.</p>
            </div>
            <div className="img-placeholder img-placeholder--landscape img-placeholder--editorial">
              <span className="img-placeholder__label">Dr. Rachel &amp; Dr. Travis -- Their Story</span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="page-section page-section--charcoal">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="eyebrow reveal">Our Mission</span>
          <h2 className="reveal" style={{ marginBottom: '24px', lineHeight: 1.3 }}>
            <span style={{ display: 'block', fontSize: '40px', fontWeight: 400 }}>A life free</span>
            <span style={{ display: 'block', fontSize: '52px', fontWeight: 800, color: 'var(--gold)' }}>from interference.</span>
          </h2>
          <p className="reveal" style={{ fontSize: '17px', lineHeight: 1.75, marginBottom: '32px' }}>We believe the body has an innate intelligence -- a wisdom that knows how to heal, adapt, and thrive when free from interference. Our mission is to empower you and your family to live that life. Through principled chiropractic care and the MaxLiving 5 Essentials, we address the root cause -- not just the symptoms.</p>
          <div className="trust-strip trust-strip--dark reveal">
            <span><span className="trust-strip__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 5.0 Rating</span>
            <span>67 Google Reviews</span>
            <span>Parker University</span>
            <span>MaxLiving Certified</span>
            <span>US Army Veteran</span>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="page-section page-section--stone">
        <div className="container">
          <div className="split split--45-55 reveal">
            <div className="img-placeholder img-placeholder--landscape img-placeholder--warm">
              <span className="img-placeholder__label">Community Workshop -- New Braunfels</span>
            </div>
            <div>
              <span className="eyebrow">Rooted in Community</span>
              <h2 className="split__headline">
                <span className="line1">More than a clinic.</span>
                <span className="line2">A gathering place.</span>
              </h2>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '16px' }}>MaxLiving New Braunfels isn&apos;t just a place you visit when something hurts. We&apos;re a community partner. We host regular workshops, lunch-and-learns for local businesses, and health talks at schools and organizations across the Hill Country. We believe health education should be free and accessible -- not locked behind a co-pay.</p>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '16px' }}>We proudly serve families across New Braunfels, San Marcos, Seguin, Canyon Lake, Kyle, Wimberley, and north San Antonio. Whether you&apos;re a river-floating family or a ranching family, a first responder or a first-time parent -- we&apos;re your health team.</p>
              <Link href="/contact" className="btn btn--gold" style={{ marginTop: '8px' }}>Get In Touch &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="page-section page-section--cream">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow reveal">By The Numbers</span>
          <div className="stats-row reveal" style={{ marginTop: '40px' }}>
            <div className="stats-row__item"><p className="stats-row__number">5.0&#9733;</p><p className="stats-row__label">Perfect Rating</p></div>
            <div className="stats-row__item"><p className="stats-row__number">67</p><p className="stats-row__label">5-Star Reviews</p></div>
            <div className="stats-row__item"><p className="stats-row__number">2</p><p className="stats-row__label">Doctors</p></div>
            <div className="stats-row__item"><p className="stats-row__number">5 Yr</p><p className="stats-row__label">US Army Veteran</p></div>
          </div>
        </div>
      </section>

      <ConversionCTA line1="Ready to start?" line2="Your family deserves this." sub="Two doctors. One mission. Your health." />
      <FooterInner variant="inner-hours" />
    </>
  )
}
