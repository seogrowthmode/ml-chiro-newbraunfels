import Link from 'next/link'

interface ConversionCTAProps {
  line1: string
  line2: string
  sub?: string
}

export default function ConversionCTA({ line1, line2, sub }: ConversionCTAProps) {
  return (
    <section className="conversion-cta">
      <div className="container">
        <h2 className="conversion-cta__headline reveal">
          <span className="line1">{line1}</span>
          <span className="line2">{line2}</span>
        </h2>
        {sub && <p className="conversion-cta__sub reveal">{sub}</p>}
        <div className="conversion-cta__btns reveal">
          <Link href="/schedule" className="btn btn--gold">Schedule Your Visit &rarr;</Link>
          <a href="tel:8302554350" className="btn btn--outline">Call (830) 255-4350</a>
        </div>
      </div>
    </section>
  )
}
