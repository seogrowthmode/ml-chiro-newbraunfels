'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface NavInnerProps {
  variant?: 'homepage' | 'solid'
  activeLink?: string
}

export default function NavInner({ variant = 'solid', activeLink }: NavInnerProps) {
  useEffect(() => {
    const nav = document.getElementById('nav')
    if (!nav) return

    const handleScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const toggle = document.getElementById('navToggle')
    if (!toggle) return

    const handleClick = () => {
      const links = document.querySelector('.nav__links') as HTMLElement
      if (!links) return
      if (links.style.display === 'flex') {
        links.style.display = 'none'
      } else {
        links.style.display = 'flex'
        links.style.flexDirection = 'column'
        links.style.position = 'absolute'
        links.style.top = '100%'
        links.style.left = '0'
        links.style.right = '0'
        links.style.background = 'rgba(249,244,241,.98)'
        links.style.padding = '24px'
        links.style.gap = '16px'
        links.style.boxShadow = '0 8px 24px rgba(0,0,0,.08)'
      }
    }
    toggle.addEventListener('click', handleClick)
    return () => toggle.removeEventListener('click', handleClick)
  }, [])

  const isHomepage = variant === 'homepage'

  const navLinks = isHomepage
    ? [
        { href: '/#empathy', label: 'Conditions' },
        { href: '/#team-split', label: 'Our Doctors' },
        { href: '/#services', label: 'Services' },
        { href: '/#essentials', label: '5 Essentials' },
        { href: '/#testimonials', label: 'Reviews' },
        { href: '/#faq', label: 'FAQ' },
      ]
    : [
        { href: '/about', label: 'Our Story' },
        { href: '/team', label: 'Doctors' },
        { href: '/#services', label: 'Services' },
        { href: '/new-patient', label: 'New Patients' },
        { href: '/contact', label: 'Contact' },
      ]

  return (
    <nav className={`nav${isHomepage ? '' : ' nav--solid'}`} id="nav">
      <div className="container">
        <div className="nav__inner">
          <Link href="/" className="nav__brand">
            {isHomepage ? (
              <>Max<span>Living</span> &mdash; New Braunfels</>
            ) : (
              <>MaxLiving <span>New Braunfels</span></>
            )}
          </Link>
          <div className="nav__links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav__link"
                style={activeLink === link.label ? { color: 'var(--gold)' } : undefined}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:8302554350" className="nav__phone">(830) 255-4350</a>
            <Link href="/schedule" className="btn btn--gold nav__cta">Schedule Your Visit</Link>
          </div>
          <button className="nav__toggle" id="navToggle" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
