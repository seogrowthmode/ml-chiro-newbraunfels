import Link from 'next/link'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  breadcrumbs?: Breadcrumb[]
  title: React.ReactNode
  sub?: string
  short?: boolean
}

export default function PageHero({ breadcrumbs, title, sub, short }: PageHeroProps) {
  return (
    <section className={`page-hero${short ? ' page-hero--short' : ''}`}>
      <div className="page-hero__bg"></div>
      <div className="container page-hero__content">
        {breadcrumbs && (
          <div className="page-hero__breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {i > 0 && <span>/</span>}
                {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}
              </span>
            ))}
          </div>
        )}
        <h1 className="page-hero__title">{title}</h1>
        {sub && <p className="page-hero__sub">{sub}</p>}
      </div>
    </section>
  )
}
