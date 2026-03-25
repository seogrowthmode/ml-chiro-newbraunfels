import { NextRequest, NextResponse } from 'next/server'
import { leadConfig } from '@/lib/lead-config'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { event, email, phone, name } = body

    const payload = {
      event: event || 'appointment-booked',
      funnelId: leadConfig.funnelId,
      source: leadConfig.source,
      email: email || '',
      phone: phone || '',
      name: name || '',
      timestamp: new Date().toISOString(),
    }

    const res = await fetch(leadConfig.funnelStatsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('Funnel stats error:', res.status, text)
      return NextResponse.json({ success: false, error: 'Stats endpoint failed' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Funnel event API error:', err)
    return NextResponse.json({ success: false, error: 'Internal error' }, { status: 500 })
  }
}
