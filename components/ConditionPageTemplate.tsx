import Grain from '@/components/Grain'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PageHero from '@/components/PageHero'
import ConversionCTA from '@/components/ConversionCTA'
import ScrollReveal from '@/components/ScrollReveal'
import FaqAccordion from '@/components/FaqAccordion'
import Link from 'next/link'

interface FaqItem { q: string; a: string }
interface RelatedCondition { name: string; href: string }

interface ConditionPageProps {
  heroTitle: React.ReactNode
  heroSub: string
  breadcrumbLabel: string
  stat: string
  statText: string
  statSub: string
  overviewEyebrow: string
  overviewLine1: string
  overviewLine2: string
  overviewParagraphs: string[]
  rachelText: string
  rachelBadge: string
  travisText: string
  travisBadge: string
  benefits: { title: string; text: string }[]
  conditions: string[]
  processSteps: { title: string; text: string }[]
  faqItems: FaqItem[]
  relatedConditions: RelatedCondition[]
  ctaLine1: string
  ctaLine2: string
  ctaSub: string
}

export default function ConditionPageTemplate(props: ConditionPageProps) {
  return (
    <>
      <Grain /><ScrollReveal />
      <NavInner />
      <PageHero breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Conditions' }, { label: props.breadcrumbLabel }]} title={props.heroTitle} sub={props.heroSub} />

      <section className="page-section page-section--cream">
        <div className="container">
          <div className="split split--55-45 reveal">
            <div>
              <span className="eyebrow">{props.overviewEyebrow}</span>
              <h2 className="split__headline"><span className="line1">{props.overviewLine1}</span><span className="line2">{props.overviewLine2}</span></h2>
              {props.overviewParagraphs.map((p, i) => <p key={i} style={{ fontSize: '17px', color: i === props.overviewParagraphs.length - 1 ? 'var(--charcoal)' : 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '16px', fontWeight: i === props.overviewParagraphs.length - 1 ? 600 : 400 }}>{p}</p>)}
            </div>
            <div className="img-placeholder img-placeholder--landscape img-placeholder--editorial"><span className="img-placeholder__label">{props.breadcrumbLabel} Relief -- New Braunfels</span></div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--charcoal">
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <p className="reveal" style={{ fontSize: '72px', fontWeight: 900, color: 'var(--gold)', lineHeight: 1, marginBottom: '16px' }}>{props.stat}</p>
          <p className="reveal" style={{ fontSize: '22px', fontWeight: 400, lineHeight: 1.5, marginBottom: '12px' }} data-delay="100">{props.statText}</p>
          <p className="reveal" style={{ fontSize: '16px', color: 'rgba(245,243,240,.5)', fontWeight: 500 }} data-delay="200">{props.statSub}</p>
        </div>
      </section>

      <section className="page-section page-section--stone">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }} className="reveal">
            <span className="eyebrow">Your {props.breadcrumbLabel} Specialists</span>
            <h2 style={{ fontSize: '32px', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3 }}>Two doctors. <span style={{ fontWeight: 800, fontSize: '40px', display: 'block' }}>Two specialties.</span></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
            <div className="doctor-callout doctor-callout--rachel reveal">
              <div className="doctor-callout__photo">Dr. Rachel</div>
              <div>
                <p className="doctor-callout__name">Dr. Rachel Diestel, D.C.</p>
                <p className="doctor-callout__text">{props.rachelText}</p>
                <p className="doctor-callout__badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> {props.rachelBadge}</p>
              </div>
            </div>
            <div className="doctor-callout doctor-callout--travis reveal" data-delay="100">
              <div className="doctor-callout__photo">Dr. Travis</div>
              <div>
                <p className="doctor-callout__name">Dr. Travis Diestel, D.C.</p>
                <p className="doctor-callout__text">{props.travisText}</p>
                <p className="doctor-callout__badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> {props.travisBadge}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--cream">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }} className="reveal">
            <span className="eyebrow">Why Chiropractic</span>
            <h2 style={{ fontSize: '32px', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3 }}>A better approach <span style={{ fontWeight: 800, fontSize: '40px', display: 'block' }}>to lasting relief.</span></h2>
          </div>
          <div className="benefits-grid reveal">
            {props.benefits.map((b, i) => (
              <div key={i} className="benefits-grid__item">
                <div className="benefits-grid__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg></div>
                <p className="benefits-grid__title">{b.title}</p>
                <p className="benefits-grid__text">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--stone">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal">
            <span className="eyebrow">Conditions We Treat</span>
            <h2 style={{ fontSize: '32px', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3 }}>Many forms of <span style={{ fontWeight: 800, fontSize: '40px', display: 'block' }}>this condition.</span></h2>
          </div>
          <div className="tag-cloud reveal" style={{ justifyContent: 'center' }}>{props.conditions.map((c, i) => <span key={i} className="tag">{c}</span>)}</div>
        </div>
      </section>

      <section className="page-section page-section--cream">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }} className="reveal">
            <span className="eyebrow">Your Path to Relief</span>
            <h2 style={{ fontSize: '32px', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3 }}>Three steps to <span style={{ fontWeight: 800, fontSize: '40px', display: 'block' }}>a pain-free life.</span></h2>
          </div>
          <div className="process-steps" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {props.processSteps.map((s, i) => (
              <div key={i} className="process-step reveal" data-delay={i > 0 ? String(i * 100) : undefined}><div></div><div><p className="process-step__title">{s.title}</p><p className="process-step__text">{s.text}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--stone">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal"><span className="eyebrow">{props.breadcrumbLabel} FAQ</span><h2 style={{ fontSize: '32px', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3 }}>Common <span style={{ fontWeight: 800 }}>questions.</span></h2></div>
          <FaqAccordion items={props.faqItems} />
        </div>
      </section>

      <section className="page-section page-section--cream">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal"><span className="eyebrow">Related Conditions</span><h2 style={{ fontSize: '32px', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3 }}>We also <span style={{ fontWeight: 800 }}>treat.</span></h2></div>
          <div className="related-grid reveal">
            {props.relatedConditions.map((r, i) => (
              <Link key={i} href={r.href} className="related-card">
                <div className="related-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg></div>
                <p className="related-card__name">{r.name}</p>
                <p className="related-card__link">Learn More &rarr;</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConversionCTA line1={props.ctaLine1} line2={props.ctaLine2} sub={props.ctaSub} />
      <FooterInner variant="inner-hours" />
    </>
  )
}
