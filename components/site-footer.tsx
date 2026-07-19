import Link from 'next/link'
import { company, nav } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-md bg-primary font-serif text-lg font-bold text-primary-foreground">
                한
              </span>
              <span className="font-serif text-lg font-bold text-foreground">{company.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              1994년부터 오직 우드블라인드 한 길.
              <br />
              울산 자체 제조공장에서 맞춤 제작과 직접 시공을 원스톱으로 제공합니다.
            </p>
            <dl className="mt-5 space-y-1 text-sm text-muted-foreground">
              <div className="flex gap-2">
                <dt className="text-foreground/70">주소</dt>
                <dd>{company.address}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-foreground/70">대표자</dt>
                <dd>{company.ceo}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-foreground/70">사업자번호</dt>
                <dd>{company.bizNo}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-foreground/70">연락처</dt>
                <dd>
                  <a href={company.phoneHref} className="hover:text-primary">
                    {company.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <nav aria-label="바로가기" className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 md:grid-cols-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <Link href="/admin" className="hover:text-primary">
            관리자
          </Link>
        </div>
      </div>
    </footer>
  )
}
