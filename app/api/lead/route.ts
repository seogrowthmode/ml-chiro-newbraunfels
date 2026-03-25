import { NextRequest, NextResponse } from 'next/server'
import { leadConfig } from '@/lib/lead-config'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, reason, doctor, message, insuranceProvider } = body

    const fullName = `${firstName || ''} ${lastName || ''}`.trim()

    const payload = {
      // Standard fields
      firstName,
      lastName,
      name: fullName,
      email,
      phone,
      reason: reason || '',
      doctor: doctor || 'no-preference',
      message: message || '',
      insuranceProvider: insuranceProvider || '',
      source: leadConfig.source,
      workflowId: leadConfig.workflowId,
      funnelId: leadConfig.funnelId,
      // Legacy JotForm aliases for backward compatibility
      q5_name: fullName,
      q6_whatsYour: email,
      q7_bestCell: phone,
      q3_whereIs: reason || 'New Patient',
    }

    const res = await fetch(leadConfig.webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('Webhook error:', res.status, text)
      return NextResponse.json({ success: false, error: 'Webhook failed' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Lead API error:', err)
    return NextResponse.json({ success: false, error: 'Internal error' }, { status: 500 })
  }
}
