'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'

const inputClass =
  'w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/30'

export function AdminLoginForm() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    setLoading(false)

    if (!res.ok) {
      setError('비밀번호가 올바르지 않습니다.')
      return
    }

    router.refresh()
  }

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-16">
      <div className="rounded-lg border border-border bg-card p-8">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
          <Lock className="size-6" />
        </div>
        <h1 className="mt-5 text-center font-serif text-2xl font-bold text-foreground">관리자 로그인</h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">견적문의 내역을 확인합니다.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
            placeholder="비밀번호"
            aria-label="비밀번호"
            required
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
          >
            {loading ? '확인 중...' : '로그인'}
          </button>
        </form>
      </div>
    </section>
  )
}
