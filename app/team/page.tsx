import Grain from '@/components/Grain'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PageHero from '@/components/PageHero'
import ConversionCTA from '@/components/ConversionCTA'
import ScrollReveal from '@/components/ScrollReveal'
import FaqAccordion from '@/components/FaqAccordion'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet the Doctors | MaxLiving Chiropractic - New Braunfels',
  description: 'Meet Dr. Rachel and Dr. Travis Diestel -- a husband-wife chiropractic team in New Braunfels, TX. Prenatal, pediatric, corrective exercise, and veteran care.',
  alternates: { canonical: 'https://ml-chiro-newbraunfels.vercel.app/team' },
  openGraph: {
    title: 'Meet the Doctors | MaxLiving Chiropractic - New Braunfels',
    description: 'Meet Dr. Rachel and Dr. Travis Diestel. Prenatal, pediatric, corrective exercise, and veteran care.',
    url: 'https://ml-chiro-newbraunfels.vercel.app/team',
    siteName: 'MaxLiving Chiropractic New Braunfels',
    type: 'website',
  },
}

export default function TeamPage() {
  return (
    <>
      <Grain />
      <ScrollReveal />
      <FaqAccordion items={[]} />
      <NavInner activeLink="Doctors" />

      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Our Doctors' }]}
        title={<><span style={{ fontWeight: 400 }}>Two doctors.</span> <em>One mission.</em></>}
        sub="Dr. Rachel and Dr. Travis Diestel -- a husband-wife team united by a single health transformation."
      />

      {/* DOCTORS SPLIT */}
      <section className="doctors-split">
        <div className="doctors-split__divider"></div>
        <div className="doctors-split__half doctors-split__half--rachel">
          <div className="reveal">
            <span className="eyebrow">Her Specialty</span>
            <div className="doctors-split__photo doctors-split__photo--rachel">
              <span className="doctors-split__photo-label">Dr. Rachel &mdash; Warm, Maternal, Professional</span>
            </div>
            <h2 className="doctors-split__name">Dr. Rachel Diestel, D.C.</h2>
            <p className="doctors-split__creds">Parker University &middot; Pre/Peri-Natal Certified &middot; Advanced Spinal Correction &middot; Nutrition &middot; Detox</p>
            <div className="doctors-split__bio">
              <p>Rachel&apos;s story begins where so many patients&apos; stories begin &mdash; with frustration, exhaustion, and a body that wouldn&apos;t cooperate. Kidney and reproductive health issues plagued her for years. Doctor after doctor offered the same thing: prescriptions that masked symptoms and uncertainty that eroded hope. She was losing faith that anyone could help her.</p>
              <p>Then she found chiropractic. The transformation was profound &mdash; her kidney function improved, her reproductive health restored, and she felt like a completely different person. That experience didn&apos;t just heal her body &mdash; it redirected her entire life. She enrolled at Parker University, earned her D.C., and dedicated her career to helping other women and children experience the same transformation she&apos;d lived through.</p>
              <p>Today, Dr. Rachel is certified in pre- and peri-natal techniques, advanced spinal correction, nutrition, exercise, and detoxification. She treats patients from infancy through their senior years, with a special focus on prenatal and pediatric care. Her approach is gentle, thorough, and deeply personal &mdash; because she knows exactly what it feels like to be the patient who&apos;s been told &ldquo;there&apos;s nothing we can do.&rdquo;</p>
            </div>
            <div className="doctors-split__tags">
              <span className="doctors-split__tag doctors-split__tag--rachel">Prenatal</span>
              <span className="doctors-split__tag doctors-split__tag--rachel">Pediatric</span>
              <span className="doctors-split__tag doctors-split__tag--rachel">Nutrition</span>
              <span className="doctors-split__tag doctors-split__tag--rachel">Detoxification</span>
              <span className="doctors-split__tag doctors-split__tag--rachel">Advanced Spinal Correction</span>
            </div>
          </div>
        </div>
        <div className="doctors-split__half doctors-split__half--travis">
          <div className="reveal" data-delay="150">
            <span className="eyebrow" style={{ color: 'var(--charcoal)' }}>His Strength</span>
            <div className="doctors-split__photo doctors-split__photo--travis">
              <span className="doctors-split__photo-label">Dr. Travis &mdash; Strong, Confident, Military Bearing</span>
            </div>
            <h2 className="doctors-split__name">Dr. Travis Diestel, D.C.</h2>
            <p className="doctors-split__creds">Parker University &middot; US Army &mdash; 5 Years &middot; Certified Personal Trainer &middot; Corrective Exercise Specialist &middot; Level 2 Activator</p>
            <div className="doctors-split__bio">
              <p>Travis served 5 years in the U.S. Army. Military life taught him discipline, structure, and the value of mission-driven purpose. But it was watching his wife Rachel &mdash; suffering from kidney and reproductive health issues &mdash; transform through chiropractic that changed everything. He saw her go from hopeless to healed. He saw what principled care could do when nothing else worked. That was his turning point.</p>
              <p>He left the Army, enrolled at Parker University alongside Rachel, and earned his D.C. But he didn&apos;t stop there &mdash; he became a certified personal trainer, corrective exercise specialist, and Level 2 Activator. His military background gives him a unique perspective on physical rehabilitation and the toll that service takes on the body.</p>
              <p>Today, Dr. Travis focuses on corrective exercise, advanced spinal correction, and whole-body wellness &mdash; with a special commitment to veterans and first responders. He understands the aches, the injuries, and the pride that keeps service members from asking for help. His door is always open.</p>
            </div>
            <div className="doctors-split__tags">
              <span className="doctors-split__tag doctors-split__tag--travis">Spinal Correction</span>
              <span className="doctors-split__tag doctors-split__tag--travis">Corrective Exercise</span>
              <span className="doctors-split__tag doctors-split__tag--travis">Military / First Responder</span>
              <span className="doctors-split__tag doctors-split__tag--travis">Activator</span>
              <span className="doctors-split__tag doctors-split__tag--travis">Nutrition</span>
            </div>
          </div>
        </div>
      </section>

      {/* TOGETHER */}
      <section className="page-section page-section--cream">
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <span className="eyebrow reveal">Together</span>
          <h2 className="together__headline reveal">
            <span className="line1">Different strengths.</span>
            <span className="line2">Same mission.</span>
          </h2>
          <p className="reveal" style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '32px' }}>Rachel brings gentleness, intuition, and a mother&apos;s perspective. Travis brings discipline, precision, and a warrior&apos;s commitment. Together, they cover every member of your family &mdash; from your newborn to your grandmother, from the expecting mother to the veteran who served. They met through healing. They built a practice on healing. And they&apos;re not done yet.</p>
          <a href="/schedule" className="btn btn--gold reveal">Schedule With Our Team &rarr;</a>
        </div>
      </section>

      {/* PATIENT STORIES */}
      <section className="page-section page-section--stone">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="eyebrow reveal">Patient Stories</span>
            <h2 className="stories__headline reveal">
              <span className="line1">What families say</span>
              <span className="line2">about their doctors.</span>
            </h2>
          </div>
          <div className="masonry reveal">
            {[
              { variant: 'masonry__item--rachel', text: '"Dr. Rachel made my third pregnancy the most comfortable one yet. She\'s gentle, knowledgeable, and genuinely cares about every patient who walks through the door."', author: 'Michelle T.', tag: 'About Dr. Rachel' },
              { variant: 'masonry__item--travis', text: '"As a firefighter, my body takes a beating. Dr. Travis gets it -- he\'s been through the physical demands himself. He doesn\'t just treat the pain, he builds a plan to keep it from coming back."', author: 'Carlos M.', tag: 'About Dr. Travis' },
              { variant: '', text: '"We bring our whole family. The kids love Dr. Rachel and my husband sees Dr. Travis for his back. It\'s rare to find a practice that genuinely serves everyone under one roof."', author: 'The Garcia Family', tag: 'About Both Doctors' },
              { variant: 'masonry__item--travis', text: '"Dr. Travis helped me recover from injuries I got during deployment. No one else understood what I was dealing with. He\'s the first doctor who actually listened."', author: 'Staff Sgt. Williams', tag: 'About Dr. Travis' },
              { variant: 'masonry__item--rachel', text: '"My daughter had colic for months. After two visits with Dr. Rachel, she was a different baby. I wish I had found this practice sooner."', author: 'Amanda K.', tag: 'About Dr. Rachel' },
            ].map((r, i) => (
              <div key={i} className={`masonry__item ${r.variant}`}>
                <div className="masonry__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="masonry__text">{r.text}</p>
                <p className="masonry__author">{r.author}</p>
                <p className="masonry__tag">{r.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConversionCTA line1="Meet your doctors." line2="Start your journey." sub="Two doctors. One family. A complete approach to health." />
      <FooterInner />
    </>
  )
}
