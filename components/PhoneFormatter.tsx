'use client'

import { useEffect } from 'react'

export default function PhoneFormatter() {
  useEffect(() => {
    document.querySelectorAll('.phone-input').forEach((input) => {
      const el = input as HTMLInputElement
      el.addEventListener('input', function () {
        let val = this.value.replace(/\D/g, '')
        if (val.length > 10) val = val.slice(0, 10)
        if (val.length >= 6) {
          this.value = '(' + val.slice(0, 3) + ') ' + val.slice(3, 6) + '-' + val.slice(6)
        } else if (val.length >= 3) {
          this.value = '(' + val.slice(0, 3) + ') ' + val.slice(3)
        } else if (val.length > 0) {
          this.value = '(' + val
        }
      })
    })
  }, [])

  return null
}
