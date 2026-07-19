'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { faqs } from '@/lib/site-data'

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-card">
      {faqs.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3 font-medium text-foreground">
                <span className="font-serif text-lg font-bold text-accent">Q</span>
                {f.q}
              </span>
              <ChevronDown className={cn('size-5 shrink-0 text-muted-foreground transition-transform', isOpen && 'rotate-180')} />
            </button>
            <div
              className={cn(
                'grid overflow-hidden transition-all duration-300',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <p className="flex gap-3 px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-serif text-lg font-bold text-primary">A</span>
                  <span className="pt-0.5">{f.a}</span>
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
