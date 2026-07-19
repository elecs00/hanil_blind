'use client'

import { useEffect, useState } from 'react'
import { Phone, MessageCircle, ChevronUp } from 'lucide-react'
import { company } from '@/lib/site-data'

export function QuickMenu() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Desktop floating quick menu */}
      <div className="fixed right-4 bottom-6 z-40 hidden flex-col gap-2 md:flex">
        <a
          href={company.phoneHref}
          className="flex size-14 flex-col items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
          aria-label="전화 상담"
        >
          <Phone className="size-5" />
          <span className="mt-0.5 text-[10px]">전화</span>
        </a>
        <a
          href={company.kakao}
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-14 flex-col items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105"
          aria-label="카카오톡 상담"
        >
          <MessageCircle className="size-5" />
          <span className="mt-0.5 text-[10px]">카톡</span>
        </a>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={cnShow(showTop)}
          aria-label="맨 위로"
        >
          <ChevronUp className="size-5" />
          <span className="mt-0.5 text-[10px]">TOP</span>
        </button>
      </div>

      {/* Mobile bottom fixed call bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 md:hidden">
        <a href={company.phoneHref} className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-primary-foreground">
          <Phone className="size-4" />
          전화 상담
        </a>
        <a
          href={company.kakao}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-accent py-3.5 text-sm font-semibold text-accent-foreground"
        >
          <MessageCircle className="size-4" />
          카톡 상담
        </a>
      </div>
    </>
  )
}

function cnShow(show: boolean) {
  return `flex size-14 flex-col items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg transition-all hover:scale-105 ${
    show ? 'opacity-100' : 'pointer-events-none opacity-0'
  }`
}
