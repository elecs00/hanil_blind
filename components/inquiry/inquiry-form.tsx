'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'

const inputClass =
  'w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/30'
const labelClass = 'mb-1.5 block text-sm font-medium text-foreground'

export function InquiryForm() {
  const params = useSearchParams()
  const presetProduct = params.get('product') ?? ''

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      region: formData.get('region'),
      location: formData.get('location'),
      product: formData.get('product'),
      size: formData.get('size'),
      message: formData.get('message'),
      consent: formData.get('consent') === 'on',
    }

    const res = await fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    setSubmitting(false)

    if (!res.ok) {
      setError('문의 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.')
      return
    }

    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-lg border border-border bg-card p-10 text-center">
        <CheckCircle2 className="size-14 text-accent" />
        <h3 className="mt-5 font-serif text-2xl font-bold text-foreground">견적 문의가 접수되었습니다</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          담당자가 내용을 확인한 후 남겨주신 연락처로 빠르게 연락드리겠습니다. 빠른 상담이 필요하시면 대표전화로 문의해 주세요.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-md border border-border bg-background px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          새 문의 작성
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            이름 <span className="text-destructive">*</span>
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="성함을 입력해 주세요" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            연락처 <span className="text-destructive">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            inputMode="tel"
            className={inputClass}
            placeholder="010-0000-0000"
          />
        </div>
        <div>
          <label htmlFor="region" className={labelClass}>
            시공 지역
          </label>
          <input id="region" name="region" className={inputClass} placeholder="예) 울산 남구" />
        </div>
        <div>
          <label htmlFor="location" className={labelClass}>
            설치 위치
          </label>
          <input id="location" name="location" className={inputClass} placeholder="예) 거실 / 침실 / 사무실" />
        </div>
        <div>
          <label htmlFor="product" className={labelClass}>
            관심 제품
          </label>
          <input id="product" name="product" defaultValue={presetProduct} className={inputClass} placeholder="예) 내추럴 오크 우드블라인드" />
        </div>
        <div>
          <label htmlFor="size" className={labelClass}>
            창 크기 · 수량
          </label>
          <input id="size" name="size" className={inputClass} placeholder="예) 가로 2000 x 세로 1500, 2창" />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          문의 내용
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClass + ' resize-none'}
          placeholder="문의하실 내용을 자유롭게 남겨주세요."
        />
      </div>

      {/* Consent */}
      <label className="mt-6 flex items-start gap-2.5 rounded-md bg-secondary/50 p-4 text-sm text-muted-foreground">
        <input type="checkbox" name="consent" required className="mt-0.5 size-4 accent-primary" />
        <span>
          <span className="font-medium text-foreground">[필수]</span> 개인정보 수집·이용에 동의합니다. 수집한 정보는 견적 상담
          목적으로만 사용되며 관련 법령에 따라 보관 후 파기됩니다.
        </span>
      </label>

      {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full rounded-md bg-primary py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
      >
        {submitting ? '접수 중...' : '견적 문의 신청하기'}
      </button>
    </form>
  )
}
