'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NavInnerProps {
  variant?: 'homepage' | 'solid'
  activeLink?: string
}

const serviceItems = [
  { href: '/spinal-correction-new-braunfels', label: 'Spinal Correction' },
  { href: '/prenatal-chiropractic-care-new-braunfels', label: 'Prenatal Chiropractic' },
  { href: '/pediatric-chiropractic-care-new-braunfels', label: 'Pediatric Chiropractic' },
  { href: '/nutritional-coaching-new-braunfels', label: 'Nutrition' },
  { href: '/corrective-exercises-new-braunfels', label: 'Corrective Exercises' },
  { href: '/massage-therapy-new-braunfels', label: 'Massage Therapy' },
  { href: '/detoxification-programs-new-braunfels', label: 'Detoxification' },
]

export default function NavInner({ variant = 'solid', activeLink }: NavInnerProps) {
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isHomepage = variant === 'homepage'

  const navLinks = isHomepage
    ? [
        { href: '/#empathy', label: 'Conditions' },
        { href: '/#team-split', label: 'Our Doctors' },
        { href: '/#services', label: 'Services', hasDropdown: true },
        { href: '/#essentials', label: '5 Essentials' },
        { href: '/#testimonials', label: 'Reviews' },
        { href: '/#faq', label: 'FAQ' },
      ]
    : [
        { href: '/about', label: 'About' },
        { href: '/team', label: 'Doctors' },
        { href: '/#services', label: 'Services', hasDropdown: true },
        { href: '/new-patient', label: 'New Patients' },
        { href: '/contact', label: 'Contact' },
      ]

  return (
    <nav className={`nav${isHomepage ? '' : ' nav--solid'}`} id="nav">
      <div className="container">
        <div className="nav__inner">
          <Link href="/" className="nav__brand">
            <Image src="/images/maxliving-logo.svg" alt="MaxLiving Chiropractic New Braunfels" width={180} height={48} priority style={{ height: 'auto' }} />
          </Link>
          <div className="nav__links">
            {navLinks.map((link) => (
              'hasDropdown' in link && link.hasDropdown ? (
                <div
                  key={link.href}
                  className="nav__dropdown"
                  ref={dropdownRef}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="nav__link nav__link--dropdown"
                    style={activeLink === link.label ? { color: 'var(--gold)' } : undefined}
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        e.preventDefault() // mobile nav toggle, not a form submit
                        setServicesOpen(!servicesOpen)
                      }
                    }}
                  >
                    {link.label}
                    <svg className="nav__dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 1l4 4 4-4" /></svg>
                  </Link>
                  {servicesOpen && (
                    <div className="nav__dropdown-menu">
                      {serviceItems.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="nav__dropdown-item"
                          onClick={() => setServicesOpen(false)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav__link"
                  style={activeLink === link.label ? { color: 'var(--gold)' } : undefined}
                >
                  {link.label}
                </Link>
              )
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
