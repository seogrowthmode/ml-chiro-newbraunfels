import Grain from '@/components/Grain'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PageHero from '@/components/PageHero'
import ConversionCTA from '@/components/ConversionCTA'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Reviews',
  description: 'Read real reviews from families in New Braunfels, San Marcos, and the Hill Country. 5.0 stars, 67 Google reviews. See what patients say about Dr. Rachel and Dr. Travis.',
  alternates: { canonical: 'https://ml-chiro-newbraunfels.vercel.app/testimonials' },
  openGraph: {
    title: 'Patient Testimonials | MaxLiving Chiropractic - New Braunfels',
    description: '5.0 stars, 67 Google reviews. Real stories from families in New Braunfels and the Hill Country.',
    url: 'https://ml-chiro-newbraunfels.vercel.app/testimonials',
    siteName: 'MaxLiving Chiropractic New Braunfels',
    type: 'website',
  },
}

const reviews: { variant: string; text: string; author: string; tag: string }[] = []

export default function TestimonialsPage() {
  return (
    <>
      <Grain /><ScrollReveal />
      <NavInner activeLink="Reviews" />
      <PageHero breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]} title={<><span style={{ fontWeight: 400, fontSize: '36px' }}>Perfect 5.0. </span><em style={{ fontWeight: 800, fontSize: '48px' }}>67 families.</em></>} sub="Real stories from real patients in New Braunfels, San Marcos, and the Hill Country." />

      <section className="page-section page-section--cream">
        <div className="container">
          <div className="featured-review reveal" style={{ textAlign: 'center' }}>
            <div className="featured-review__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="featured-review__quote" style={{ fontSize: '22px' }}>Verified patient reviews coming soon. We are pulling real reviews from our Google Business Profile to share authentic patient stories. In the meantime, you can read all 67 five-star reviews directly on Google.</p>
            <p className="featured-review__source">5.0 Stars &middot; 67 Google Reviews</p>
            <div className="featured-review__line"></div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--stone">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }} className="reveal">
            <span className="eyebrow">Patient Stories</span>
            <h2><span style={{ display: 'block', fontSize: '32px', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3 }}>What our families</span><span style={{ display: 'block', fontSize: '42px', fontWeight: 800, color: 'var(--charcoal)', lineHeight: 1.2 }}>are saying.</span></h2>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>We are in the process of verifying and importing real patient reviews from our Google Business Profile. Check back soon, or read our reviews directly on Google.</p>
          </div>
        </div>
      </section>

      <section className="page-section page-section--cream">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="stats-row reveal">
            <div className="stats-row__item"><p className="stats-row__number">5.0&#9733;</p><p className="stats-row__label">Perfect Rating</p></div>
            <div className="stats-row__item"><p className="stats-row__number">67</p><p className="stats-row__label">5-Star Reviews</p></div>
            <div className="stats-row__item"><p className="stats-row__number">100%</p><p className="stats-row__label">Would Recommend</p></div>
            <div className="stats-row__item"><p className="stats-row__number">2</p><p className="stats-row__label">Expert Doctors</p></div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--stone">
        <div className="container">
          <div className="review-links reveal">
            <span className="eyebrow">Leave a Review</span>
            <h2 style={{ marginBottom: '16px' }}><span style={{ display: 'block', fontSize: '32px', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3 }}>Your story</span><span style={{ display: 'block', fontSize: '42px', fontWeight: 800, color: 'var(--charcoal)', lineHeight: 1.2 }}>matters.</span></h2>
            <p className="review-links__text">Your experience helps other families find the care they deserve. If we&apos;ve made a difference in your life, we&apos;d love to hear about it.</p>
            <div className="review-links__btns">
              <a href="#" className="btn btn--gold">Leave a Google Review &rarr;</a>
              <Link href="/contact" className="btn btn--steel">Share Your Story &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <ConversionCTA line1="Join 67 families" line2="who gave us 5 stars." />
      <FooterInner variant="inner-hours" />
    </>
  )
}
