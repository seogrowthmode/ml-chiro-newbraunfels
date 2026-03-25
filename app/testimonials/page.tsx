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

const reviews = [
  { variant: 'masonry__item--rachel', text: '"Dr. Rachel made my third trimester bearable. I was in so much pain and she was gentle, knowledgeable, and genuinely caring."', author: 'Michelle T.', tag: 'About Dr. Rachel' },
  { variant: 'masonry__item--travis', text: '"As a retired Army sergeant, I was skeptical about chiropractic. Dr. Travis changed my mind in one visit. He gets it."', author: 'James R.', tag: 'About Dr. Travis' },
  { variant: '', text: '"The whole office is warm and welcoming. From the front desk to both doctors -- you feel like family the moment you walk in."', author: 'Laura S.', tag: 'Google Review' },
  { variant: 'masonry__item--rachel', text: '"My daughter had colic for months. Two visits with Dr. Rachel and she was sleeping through the night. I cried."', author: 'Amanda K.', tag: 'About Dr. Rachel' },
  { variant: 'masonry__item--travis', text: '"I\'m a firefighter and my body takes a beating. Dr. Travis understands the demands of the job and has helped me stay on the truck."', author: 'Carlos M.', tag: 'About Dr. Travis' },
  { variant: '', text: '"We drive from San Marcos every week because the care is that good. Worth every mile."', author: 'David & Kim H.', tag: 'Google Review' },
  { variant: 'masonry__item--rachel', text: '"I was told I\'d need surgery for my back. Dr. Rachel suggested we try correction first. Six months later -- no surgery, no pain."', author: 'Patricia W.', tag: 'About Dr. Rachel' },
  { variant: 'masonry__item--travis', text: '"Dr. Travis designed an exercise program that finally fixed my posture after 20 years of desk work. The guy is precise."', author: 'Michael B.', tag: 'About Dr. Travis' },
  { variant: '', text: '"The 5 Essentials approach changed how our family thinks about health. It\'s not just adjustments -- it\'s a lifestyle."', author: 'The Garcia Family', tag: 'Google Review' },
  { variant: 'masonry__item--rachel', text: '"Being pregnant with twins was incredibly hard on my body. Dr. Rachel\'s care made the difference between suffering and comfort."', author: 'Jessica L.', tag: 'About Dr. Rachel' },
]

export default function TestimonialsPage() {
  return (
    <>
      <Grain /><ScrollReveal />
      <NavInner activeLink="Reviews" />
      <PageHero breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]} title={<><span style={{ fontWeight: 400, fontSize: '36px' }}>Perfect 5.0. </span><em style={{ fontWeight: 800, fontSize: '48px' }}>67 families.</em></>} sub="Real stories from real patients in New Braunfels, San Marcos, and the Hill Country." />

      <section className="page-section page-section--cream">
        <div className="container">
          <div className="featured-review reveal">
            <div className="featured-review__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="featured-review__quote">&ldquo;We came to Dr. Rachel during my wife&apos;s pregnancy and never left. Now our whole family &mdash; including our two kids &mdash; sees both doctors. Dr. Travis helped me with years of back pain from my time in the service, and Dr. Rachel has been incredible with our children. This isn&apos;t just a chiropractor&apos;s office &mdash; it&apos;s where our family goes to stay healthy.&rdquo;</p>
            <p className="featured-review__author">&mdash; The Martinez Family</p>
            <p className="featured-review__source">Google Review &middot; Verified</p>
            <div className="featured-review__line"></div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--stone">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }} className="reveal">
            <span className="eyebrow">Patient Stories</span>
            <h2><span style={{ display: 'block', fontSize: '32px', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3 }}>What our families</span><span style={{ display: 'block', fontSize: '42px', fontWeight: 800, color: 'var(--charcoal)', lineHeight: 1.2 }}>are saying.</span></h2>
          </div>
          <div className="masonry reveal">
            {reviews.map((r, i) => (
              <div key={i} className={`masonry__item ${r.variant}`}>
                <div className="masonry__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="masonry__text">{r.text}</p>
                <p className="masonry__author">&mdash; {r.author}</p>
                <p className="masonry__tag">{r.tag}</p>
              </div>
            ))}
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
