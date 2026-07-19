import type { Metadata } from 'next'
import Link from 'next/link'
import { Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: '관리자 | 한일우드블라인드',
  robots: { index: false, follow: false },
}

const inputClass =
  'w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/30'

export default function AdminPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-16">
      <div className="rounded-lg border border-border bg-card p-8">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
          <Lock className="size-6" />
        </div>
        <h1 className="mt-5 text-center font-serif text-2xl font-bold text-foreground">관리자 로그인</h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          공지사항, 제품, 시공사례, 견적문의를 관리합니다.
        </p>
        <form className="mt-6 space-y-4">
          <input type="text" className={inputClass} placeholder="아이디" aria-label="아이디" />
          <input type="password" className={inputClass} placeholder="비밀번호" aria-label="비밀번호" />
          <button
            type="button"
            className="w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            로그인
          </button>
        </form>
        <Link href="/" className="mt-6 block text-center text-sm text-muted-foreground hover:text-primary">
          홈으로 돌아가기
        </Link>
      </div>
    </section>
  )
}
