'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import { products } from '@/lib/site-data'

const filters = [
  { id: 'all', label: '전체' },
  { id: 'wood', label: '우드블라인드' },
  { id: 'custom', label: '맞춤 제작' },
] as const

export function ProductList() {
  const params = useSearchParams()
  const initial = params.get('cat')
  const [active, setActive] = useState<string>(
    initial === 'wood' || initial === 'custom' ? initial : 'all',
  )

  const filtered = active === 'all' ? products : products.filter((p) => p.category === active)

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

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {filtered.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md"
          >
            <div className="aspect-4/5 overflow-hidden">
              <img
                src={p.image || '/placeholder.svg'}
                alt={p.name}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <span className="text-xs text-accent">{p.categoryLabel}</span>
              <h3 className="mt-1 font-medium text-foreground group-hover:text-primary">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">해당 카테고리의 제품이 없습니다.</p>
      )}
    </div>
  )
}
