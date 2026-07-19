import type { Metadata } from 'next'
import { getDb } from '@/lib/mongodb'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import { AdminLoginForm } from '@/components/admin/login-form'
import { LogoutButton } from '@/components/admin/logout-button'

export const metadata: Metadata = {
  title: '관리자 | 한일블라인드&커튼',
  robots: { index: false, follow: false },
}

type Inquiry = {
  _id: unknown
  name: string
  phone: string
  region: string
  location: string
  product: string
  size: string
  message: string
  createdAt: Date
}

export default async function AdminPage() {
  const authed = await isAdminAuthenticated()

  if (!authed) {
    return <AdminLoginForm />
  }

  const db = await getDb()
  const inquiries = (await db
    .collection<Inquiry>('inquiries')
    .find({})
    .sort({ createdAt: -1 })
    .toArray()) as Inquiry[]

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground md:text-3xl">견적문의 내역</h1>
          <p className="mt-1 text-sm text-muted-foreground">총 {inquiries.length}건</p>
        </div>
        <LogoutButton />
      </div>

      <div className="mt-8 overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-muted/50 text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">접수일시</th>
              <th className="px-4 py-3 font-medium">이름</th>
              <th className="px-4 py-3 font-medium">연락처</th>
              <th className="px-4 py-3 font-medium">지역</th>
              <th className="px-4 py-3 font-medium">위치</th>
              <th className="px-4 py-3 font-medium">관심 제품</th>
              <th className="px-4 py-3 font-medium">크기/수량</th>
              <th className="px-4 py-3 font-medium">문의 내용</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {inquiries.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-muted-foreground">
                  아직 접수된 견적문의가 없습니다.
                </td>
              </tr>
            )}
            {inquiries.map((inquiry) => (
              <tr key={String(inquiry._id)} className="text-foreground">
                <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                  {new Date(inquiry.createdAt).toLocaleString('ko-KR')}
                </td>
                <td className="px-4 py-3 font-medium">{inquiry.name}</td>
                <td className="whitespace-nowrap px-4 py-3">{inquiry.phone}</td>
                <td className="px-4 py-3">{inquiry.region}</td>
                <td className="px-4 py-3">{inquiry.location}</td>
                <td className="px-4 py-3">{inquiry.product}</td>
                <td className="px-4 py-3">{inquiry.size}</td>
                <td className="max-w-xs px-4 py-3 whitespace-pre-wrap">{inquiry.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
