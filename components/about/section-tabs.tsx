'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const tabs = [
  { id: 'greeting', label: '인사말' },
  { id: 'factory', label: '공장·설비 소개' },
  { id: 'history', label: '연혁' },
]

export function SectionTabs() {
  const [active, setActive] = useState('greeting')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    tabs.forEach((t) => {
      const el = document.getElementById(t.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur md:top-20">
      <div className="mx-auto flex max-w-7xl gap-1 px-4 md:px-6">
        {tabs.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className={cn(
              'border-b-2 px-4 py-4 text-sm font-medium transition-colors md:text-base',
              active === t.id
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground',
            )}
          >
            {t.label}
          </a>
        ))}
        <Link
          href="/location"
          className="border-b-2 border-transparent px-4 py-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:text-base"
        >
          오시는길
        </Link>
      </div>
    </div>
  )
}
