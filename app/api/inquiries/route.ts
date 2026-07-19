import { NextResponse } from 'next/server'
import { getDb } from '@/lib/mongodb'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, phone, region, location, product, size, message, consent } = body

  if (!name || !phone || !consent) {
    return NextResponse.json({ error: '이름, 연락처, 개인정보 동의는 필수입니다.' }, { status: 400 })
  }

  const db = await getDb()
  await db.collection('inquiries').insertOne({
    name,
    phone,
    region: region ?? '',
    location: location ?? '',
    product: product ?? '',
    size: size ?? '',
    message: message ?? '',
    createdAt: new Date(),
  })

  return NextResponse.json({ ok: true })
}
