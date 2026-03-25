'use client'

import { useEffect } from 'react'

export default function HomepageClient() {
  useEffect(() => {
    // Service accordion
    document.querySelectorAll('[data-svc] .svc-accordion__header').forEach((header) => {
      header.addEventListener('click', () => {
        const item = (header as HTMLElement).closest('[data-svc]')
        if (!item) return
        const wasOpen = item.classList.contains('open')
        document.querySelectorAll('[data-svc]').forEach((s) => s.classList.remove('open'))
        if (!wasOpen) item.classList.add('open')
      })
    })

    // FAQ accordion (homepage variant)
    document.querySelectorAll('[data-faq] .faq-item__q').forEach((q) => {
      q.addEventListener('click', () => {
        const item = (q as HTMLElement).closest('[data-faq]')
        if (!item) return
        const wasOpen = item.classList.contains('open')
        document.querySelectorAll('[data-faq]').forEach((f) => f.classList.remove('open'))
        if (!wasOpen) item.classList.add('open')
      })
    })

    // Mobile menu
    const navToggle = document.getElementById('navToggle')
    const navMenu = document.getElementById('navMenu')
    const navClose = document.getElementById('navClose')
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => navMenu.classList.add('open'))
    }
    if (navClose && navMenu) {
      navClose.addEventListener('click', () => navMenu.classList.remove('open'))
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', function (e) {
        const href = (a as HTMLAnchorElement).getAttribute('href')
        if (!href) return
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          navMenu?.classList.remove('open')
        }
      })
    })
  }, [])

  return null
}
