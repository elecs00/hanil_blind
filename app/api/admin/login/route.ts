import { NextResponse } from 'next/server'
import { checkAdminPassword, adminSessionCookieValue, ADMIN_COOKIE } from '@/lib/admin-auth'

export async function POST(request: Request) {
  const { password } = await request.json()

  if (!checkAdminPassword(password)) {
    return NextResponse.json({ error: '비밀번호가 올바르지 않습니다.' }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set(ADMIN_COOKIE, adminSessionCookieValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8, // 8시간
  })
  return response
}
