import { createHmac } from 'crypto'
import { cookies } from 'next/headers'

export const ADMIN_COOKIE = 'admin_session'

function expectedToken() {
  const password = process.env.ADMIN_PASSWORD
  if (!password) {
    throw new Error('ADMIN_PASSWORD 환경변수가 설정되지 않았습니다.')
  }
  return createHmac('sha256', password).update('hanil-blind-admin').digest('hex')
}

export function checkAdminPassword(input: string) {
  return input === process.env.ADMIN_PASSWORD
}

export function adminSessionCookieValue() {
  return expectedToken()
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get(ADMIN_COOKIE)?.value
  return !!session && session === expectedToken()
}
