'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { company, nav } from '@/lib/site-data'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/95 shadow-sm backdrop-blur border-b border-border' : 'bg-background/80 backdrop-blur',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="한일블라인드&커튼 홈">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-serif text-lg font-bold md:size-10">
            한
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base font-bold text-foreground md:text-lg">한일블라인드&커튼</span>
            <span className="text-[10px] tracking-wide text-muted-foreground md:text-xs">SINCE {company.established} · 울산 자체공장</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="주요 메뉴">
          {nav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={cn(
                  'inline-flex h-20 items-center px-4 text-[15px] font-medium text-foreground/80 transition-colors hover:text-primary',
                  pathname === item.href && 'text-primary',
                )}
              >
                {item.label}
              </Link>
              <div className="invisible absolute left-0 top-full z-50 min-w-44 -translate-y-1 rounded-md border border-border bg-popover p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {item.children.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block rounded px-3 py-2 text-sm text-popover-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Right: phone */}
        <div className="flex items-center gap-2">
          <a
            href={company.phoneHref}
            className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
          >
            <Phone className="size-4" />
            {company.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-3" aria-label="모바일 메뉴">
            {nav.map((item) => (
              <div key={item.href} className="border-b border-border/60 py-1 last:border-0">
                <Link href={item.href} className="block px-2 py-2.5 text-base font-semibold text-foreground">
                  {item.label}
                </Link>
                <div className="flex flex-wrap gap-x-4 gap-y-1 px-2 pb-2">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} className="py-1 text-sm text-muted-foreground">
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
