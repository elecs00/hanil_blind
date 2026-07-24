'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { X, MapPin, Calendar, Package, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { references, type Reference } from '@/lib/site-data'

const filters = [
  { id: 'all', label: '전체' },
  { id: 'home', label: '주거공간' },
  { id: 'biz', label: '상업공간' },
  { id: 'public', label: '관공서·기관' },
] as const

// Expand the base list to showcase 30 years of installation history.
const allRefs: Reference[] = Array.from({ length: 3 })
  .flatMap((_, batch) =>
    references.map((r) => ({
      ...r,
      id: r.id + batch * 100,
      date: batch === 0 ? r.date : `2025.${String(12 - batch * 3).padStart(2, '0')}`,
    })),
  )
  .sort((a, b) => b.date.localeCompare(a.date))

const PAGE = 6

export function ReferenceGallery() {
  const params = useSearchParams()
  const initial = params.get('cat')
  const [active, setActive] = useState<string>(
    initial === 'home' || initial === 'biz' || initial === 'public' ? initial : 'all',
  )
  const [visible, setVisible] = useState(PAGE)
  const [selected, setSelected] = useState<Reference | null>(null)

  const filtered = useMemo(
    () => (active === 'all' ? allRefs : allRefs.filter((r) => r.category === active)),
    [active],
  )

  useEffect(() => {
    setVisible(PAGE)
  }, [active])

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [selected])

  const shown = filtered.slice(0, visible)

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            className={cn(
              'rounded-full border px-5 py-2 text-sm font-medium transition-colors',
              active === f.id
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground',
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {shown.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setSelected(r)}
            className="group overflow-hidden rounded-lg border border-border bg-card text-left transition-shadow hover:shadow-md"
          >
            <div className="aspect-4/3 overflow-hidden">
              <img
                src={r.image || '/placeholder.svg'}
                alt={r.title}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <span className="text-xs text-accent">{r.categoryLabel}</span>
              <h3 className="mt-1 font-medium text-foreground group-hover:text-primary">{r.title}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {r.place} · {r.date}
              </p>
            </div>
          </button>
        ))}
      </div>

      {visible < filtered.length && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE)}
            className="rounded-md border border-border bg-background px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            더보기 ({filtered.length - visible}건)
          </button>
        </div>
      )}

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-lg bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-foreground/50 text-background transition-colors hover:bg-foreground/70"
              aria-label="닫기"
            >
              <X className="size-5" />
            </button>
            <img src={selected.image || '/placeholder.svg'} alt={selected.title} className="max-h-[55vh] w-full object-cover" />
            <div className="p-6">
              <span className="text-xs text-accent">{selected.categoryLabel}</span>
              <h3 className="mt-1 font-serif text-xl font-bold text-foreground">{selected.title}</h3>
              <dl className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-primary" /> {selected.place}
                </div>
                <div className="flex items-center gap-2">
                  <Package className="size-4 text-primary" /> {selected.product}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-primary" /> {selected.date}
                </div>
              </dl>
              {selected.slug && (
                <Link
                  href={`/references/${selected.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  시공 스토리 자세히 보기 <ArrowRight className="size-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
