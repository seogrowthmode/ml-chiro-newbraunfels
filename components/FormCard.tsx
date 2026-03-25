'use client'

import { FormEvent } from 'react'

interface FormCardProps {
  children: React.ReactNode
  className?: string
}

export function FormWrapper({ children, className }: FormCardProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  )
}
