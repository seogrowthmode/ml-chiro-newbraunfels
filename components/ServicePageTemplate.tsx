import Grain from '@/components/Grain'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PageHero from '@/components/PageHero'
import ConversionCTA from '@/components/ConversionCTA'
import ScrollReveal from '@/components/ScrollReveal'
import FaqAccordion from '@/components/FaqAccordion'
import Link from 'next/link'

interface Benefit { title: string; text: string }
interface ProcessStep { title: string; text: string }
interface FaqItem { q: string; a: string }
interface RelatedService { name: string; href: string; text: string }

interface ServicePageProps {
  heroTitle: React.ReactNode
  heroSub: string
  breadcrumbLabel: string
  overviewEyebrow: string
  overviewLine1: string
  overviewLine2: string
  overviewParagraphs: string[]
  doctorCallout: { name: string; text: string; badge: string; variant: 'rachel' | 'travis' }
  benefits: Benefit[]
  conditions: string[]
  processSteps: ProcessStep[]
  faqItems: FaqItem[]
  relatedServices: RelatedService[]
  ctaLine1: string
  ctaLine2: string
  ctaSub: string
}

export default function ServicePageTemplate(props: ServicePageProps) {
  return (
    <>
      <Grain /><ScrollReveal />
      <NavInner />
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/#services' }, { label: props.breadcrumbLabel }]}
        title={props.heroTitle}
        sub={props.heroSub}
      />

      {/* Overview */}
      <section className="page-section page-section--cream">
        <div className="container">
          <div className="split split--55-45 reveal">
            <div>
              <span className="eyebrow">{props.overviewEyebrow}</span>
              <h2 className="split__headline"><span className="line1">{props.overviewLine1}</span><span className="line2">{props.overviewLine2}</span></h2>
              {props.overviewParagraphs.map((p, i) => (
                <p key={i} style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: i < props.overviewParagraphs.length - 1 ? '16px' : 0 }}>{p}</p>
              ))}
            </div>
            <div style={{ borderRadius: '18px', overflow: 'hidden', background: 'linear-gradient(135deg, var(--cream) 0%, var(--stone) 100%)', aspectRatio: '3/4', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(45,42,38,0.15) 100%)' }} />
              <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.6, textAlign: 'center', padding: '24px' }}>{props.breadcrumbLabel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Callout */}
      <section className="page-section page-section--stone">
        <div className="container">
          <div className={`doctor-callout doctor-callout--${props.doctorCallout.variant} reveal`}>
            <div className="doctor-callout__photo">Photo</div>
            <div>
              <p className="doctor-callout__name">{props.doctorCallout.name}</p>
              <p className="doctor-callout__text">{props.doctorCallout.text}</p>
              <p className="doctor-callout__badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> {props.doctorCallout.badge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="page-section page-section--cream">
        <div className="container">
          <span className="eyebrow reveal">Benefits</span>
          <h2 className="reveal" style={{ fontSize: '42px', color: 'var(--charcoal)', marginBottom: '40px', lineHeight: 1.2 }}><span style={{ fontWeight: 400 }}>What this service</span><br /><span style={{ fontWeight: 800 }}>does for you.</span></h2>
          <div className="benefits-grid reveal">
            {props.benefits.map((b, i) => (
              <div key={i} className="benefits-grid__item">
                <div className="benefits-grid__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg></div>
                <p className="benefits-grid__title">{b.title}</p>
                <p className="benefits-grid__text">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="page-section page-section--stone">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow reveal">Conditions We Treat</span>
          <h2 className="reveal" style={{ fontSize: '42px', fontWeight: 800, color: 'var(--charcoal)', marginBottom: '32px' }}>Common conditions.</h2>
          <div className="tag-cloud reveal" style={{ justifyContent: 'center' }}>
            {props.conditions.map((c, i) => <span key={i} className="tag">{c}</span>)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="page-section page-section--cream">
        <div className="container">
          <span className="eyebrow reveal">What To Expect</span>
          <h2 className="reveal" style={{ fontSize: '42px', color: 'var(--charcoal)', marginBottom: '40px', lineHeight: 1.2 }}><span style={{ fontWeight: 400 }}>Your care</span><br /><span style={{ fontWeight: 800 }}>journey.</span></h2>
          <div className="process-steps reveal" style={{ maxWidth: '720px' }}>
            {props.processSteps.map((s, i) => (
              <div key={i} className="process-step"><div><p className="process-step__title">{s.title}</p><p className="process-step__text">{s.text}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-section page-section--stone">
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="eyebrow reveal">Common Questions</span>
          <h2 className="reveal" style={{ fontSize: '42px', fontWeight: 800, color: 'var(--charcoal)', marginBottom: '32px' }}>Frequently asked questions.</h2>
          <FaqAccordion items={props.faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="page-section page-section--cream">
        <div className="container">
          <span className="eyebrow reveal">Related Services</span>
          <h2 className="reveal" style={{ fontSize: '42px', fontWeight: 800, color: 'var(--charcoal)', marginBottom: '32px' }}>Explore more care.</h2>
          <div className="related-grid reveal">
            {props.relatedServices.map((r, i) => (
              <Link key={i} href={r.href} className="related-card">
                <div className="related-card__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg></div>
                <p className="related-card__name">{r.name}</p>
                <p className="benefits-grid__text" style={{ marginBottom: '10px' }}>{r.text}</p>
                <span className="related-card__link">Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConversionCTA line1={props.ctaLine1} line2={props.ctaLine2} sub={props.ctaSub} />
      <FooterInner />
    </>
  )
}
