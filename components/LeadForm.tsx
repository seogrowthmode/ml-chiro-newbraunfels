'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

interface LeadFormProps {
  formId?: string
  className?: string
  variant?: 'homepage' | 'schedule' | 'contact' | 'insurance'
  children?: React.ReactNode
}

export default function LeadForm({ formId, className, variant = 'homepage', children }: LeadFormProps) {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)

    const payload: Record<string, string> = {}
    data.forEach((val, key) => {
      payload[key] = val.toString()
    })

    // Map form field names to API expected names
    const body = {
      firstName: payload.firstName || payload.fname || payload.first_name || '',
      lastName: payload.lastName || payload.lname || payload.last_name || '',
      email: payload.email || '',
      phone: payload.phone || '',
      reason: payload.reason || payload.reason_for_visit || '',
      doctor: payload.doctor || payload.preferred_doctor || '',
      message: payload.message || payload.notes || '',
      insuranceProvider: payload.insuranceProvider || payload.insurance_provider || '',
    }

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (res.ok) {
        setSubmitted(true)
        // Also fire funnel event
        fetch('/api/funnel/event', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'form-submitted',
            email: body.email,
            phone: body.phone,
            name: `${body.firstName} ${body.lastName}`.trim(),
          }),
        }).catch(() => {})
        // Redirect to confirmation/scheduling page
        router.push('/schedule-appointment')
      } else {
        setError('Something went wrong. Please call us at (830) 255-4350.')
      }
    } catch {
      setError('Something went wrong. Please call us at (830) 255-4350.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className={className} style={{ textAlign: 'center', padding: '40px 20px' }}>
        <p style={{ fontSize: '24px', fontWeight: 800, color: 'var(--charcoal)', marginBottom: '8px' }}>Thank you!</p>
        <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>We received your information and will be in touch within 24 hours.</p>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '12px' }}>Or call us now: <a href="tel:8302554350" style={{ fontWeight: 700, color: 'var(--steel)' }}>(830) 255-4350</a></p>
      </div>
    )
  }

  return (
    <form id={formId} className={className} onSubmit={handleSubmit}>
      {children}
      {error && <p style={{ color: '#c00', fontSize: '14px', marginTop: '8px' }}>{error}</p>}
      {submitting && <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '8px' }}>Submitting...</p>}
    </form>
  )
}
