'use client'

import { useEffect } from 'react'

interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: FaqItem[]
  variant?: 'inner' | 'homepage'
}

export default function FaqAccordion({ items, variant = 'inner' }: FaqAccordionProps) {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.currentTarget as HTMLElement
      const item = target.parentElement
      if (!item) return
      const wasOpen = item.classList.contains('open')
      const siblings = item.parentElement?.querySelectorAll('.faq-item')
      siblings?.forEach((s) => s.classList.remove('open'))
      if (!wasOpen) item.classList.add('open')
    }

    document.querySelectorAll('.faq-q').forEach((q) => {
      q.addEventListener('click', handleClick)
    })

    return () => {
      document.querySelectorAll('.faq-q').forEach((q) => {
        q.removeEventListener('click', handleClick)
      })
    }
  }, [])

  if (variant === 'homepage') return null // homepage has its own FAQ

  return (
    <div className="faq-list reveal">
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <div className="faq-q">
            {item.q}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
          </div>
          <div className="faq-a"><p>{item.a}</p></div>
        </div>
      ))}
    </div>
  )
}
