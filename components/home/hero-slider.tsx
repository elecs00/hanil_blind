'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react'
import { company } from '@/lib/site-data'

const slides = [
  {
    image: '/images/hero-1.png',
    eyebrow: 'SINCE 1994',
    title: '30년 전통, 자체 제조공장의\n프리미엄 우드블라인드',
    desc: '중간 유통 없이 공장에서 직접 만들고 직접 시공합니다.',
  },
  {
    image: '/images/hero-2.png',
    eyebrow: '자체 제조 · 장인의 손끝',
    title: '한 장 한 장 정성으로\n완성하는 천연 원목',
    desc: '숙련된 기술자가 변형 없는 최고 품질을 만듭니다.',
  },
  {
    image: '/images/hero-3.png',
    eyebrow: '주거 · 상업 · 관공서',
    title: '어떤 공간에도 어울리는\n맞춤 제작 블라인드',
    desc: '창 크기에 꼭 맞는 1:1 맞춤 제작으로 완성도를 높입니다.',
  },
]

export function HeroSlider() {
  const [index, setIndex] = useState(0)

  const go = useCallback((n: number) => setIndex((prev) => (n + slides.length) % slides.length), [])

  useEffect(() => {
    const t = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== index}
        >
          <img src={slide.image || '/placeholder.svg'} alt="" className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/45 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
        <div className="max-w-xl text-background">
          <p className="mb-3 inline-block rounded-full border border-background/40 px-3 py-1 text-xs tracking-widest">
            {slides[index].eyebrow}
          </p>
          <h1 className="whitespace-pre-line font-serif text-3xl font-bold leading-tight text-balance md:text-5xl md:leading-tight">
            {slides[index].title}
          </h1>
          <p className="mt-4 text-sm text-background/85 md:text-lg">{slides[index].desc}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/inquiry"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              무료 견적 문의
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 rounded-md border border-background/50 px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-background/10"
            >
              <Phone className="size-4" />
              {company.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(index - 1)}
          className="flex size-9 items-center justify-center rounded-full bg-background/20 text-background backdrop-blur transition-colors hover:bg-background/30"
          aria-label="이전 슬라이드"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-background' : 'w-2 bg-background/50'}`}
              aria-label={`${i + 1}번째 슬라이드`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(index + 1)}
          className="flex size-9 items-center justify-center rounded-full bg-background/20 text-background backdrop-blur transition-colors hover:bg-background/30"
          aria-label="다음 슬라이드"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </section>
  )
}
