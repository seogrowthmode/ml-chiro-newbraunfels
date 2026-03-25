'use client'

import LeadForm from '@/components/LeadForm'

interface FormCardProps {
  children: React.ReactNode
  className?: string
}

export function FormWrapper({ children, className }: FormCardProps) {
  return (
    <LeadForm className={className}>
      {children}
    </LeadForm>
  )
}
