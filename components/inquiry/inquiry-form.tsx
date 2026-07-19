'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Upload, CheckCircle2, Paperclip } from 'lucide-react'

const MAX_SIZE = 10 * 1024 * 1024 // 10MB

const inputClass =
  'w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/30'
const labelClass = 'mb-1.5 block text-sm font-medium text-foreground'

export function InquiryForm() {
  const params = useSearchParams()
  const presetProduct = params.get('product') ?? ''

  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string>('')
  const [fileError, setFileError] = useState<string>('')

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    setFileError('')
    if (!file) {
      setFileName('')
      return
    }
    if (file.size > MAX_SIZE) {
      setFileError('파일 용량은 최대 10MB까지 첨부할 수 있습니다.')
      setFileName('')
      e.target.value = ''
      return
    }
    setFileName(file.name)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
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

      {/* File attach */}
      <div className="mt-5">
        <span className={labelClass}>현장 사진 · 도면 첨부</span>
        <label
          htmlFor="file"
          className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-border bg-background px-4 py-4 text-sm text-muted-foreground transition-colors hover:border-primary/50"
        >
          <Upload className="size-5 shrink-0 text-primary" />
          <span className="flex-1">
            {fileName ? (
              <span className="flex items-center gap-1.5 text-foreground">
                <Paperclip className="size-4" /> {fileName}
              </span>
            ) : (
              '파일 선택 (jpg, png, pdf / 최대 10MB)'
            )}
          </span>
          <input id="file" name="file" type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={handleFile} className="sr-only" />
        </label>
        {fileError && <p className="mt-1.5 text-xs text-destructive">{fileError}</p>}
      </div>

      {/* Consent */}
      <label className="mt-6 flex items-start gap-2.5 rounded-md bg-secondary/50 p-4 text-sm text-muted-foreground">
        <input type="checkbox" required className="mt-0.5 size-4 accent-primary" />
        <span>
          <span className="font-medium text-foreground">[필수]</span> 개인정보 수집·이용에 동의합니다. 수집한 정보는 견적 상담
          목적으로만 사용되며 관련 법령에 따라 보관 후 파기됩니다.
        </span>
      </label>

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-primary py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        견적 문의 신청하기
      </button>
    </form>
  )
}
