import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; href?: string }

export function PageHero({
  title,
  subtitle,
  image = '/images/factory.png',
  crumbs = [],
}: {
  title: string
  subtitle?: string
  image?: string
  crumbs?: Crumb[]
}) {
  return (
    <section className="relative flex h-52 items-center justify-center overflow-hidden md:h-64">
      <img src={image || '/placeholder.svg'} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-foreground/55" />
      <div className="relative z-10 px-4 text-center text-background">
        <h1 className="font-serif text-3xl font-bold text-balance md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 text-sm text-background/80 md:text-base">{subtitle}</p>}
        <nav aria-label="현재 위치" className="mt-4 flex items-center justify-center gap-1 text-xs text-background/70">
          <Link href="/" className="hover:text-background">
            HOME
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight className="size-3" />
              {c.href ? (
                <Link href={c.href} className="hover:text-background">
                  {c.label}
                </Link>
              ) : (
                <span className="text-background">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  )
}
