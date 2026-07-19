import Link from 'next/link'
import { Award, Factory, Ruler, ArrowRight, ChevronRight } from 'lucide-react'
import { HeroSlider } from '@/components/home/hero-slider'
import { products, references, strengths } from '@/lib/site-data'

const iconMap = { award: Award, factory: Factory, ruler: Ruler }

export default function HomePage() {
  const recentRefs = references.slice(0, 3)
  const previewProducts = products.slice(0, 4)

  return (
    <>
      <HeroSlider />

      {/* Strengths */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold tracking-widest text-accent">WHY 한일우드블라인드</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-3xl text-balance">
            30년을 이어온 세 가지 약속
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {strengths.map((s) => {
            const Icon = iconMap[s.icon]
            return (
              <div key={s.title} className="rounded-lg border border-border bg-card p-8 text-center transition-shadow hover:shadow-md">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Product preview */}
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold tracking-widest text-accent">PRODUCTS</p>
              <h2 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-3xl">대표 제품</h2>
            </div>
            <Link href="/products" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              전체 보기 <ChevronRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {previewProducts.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group overflow-hidden rounded-lg border border-border bg-card">
                <div className="aspect-4/5 overflow-hidden">
                  <img
                    src={p.image || '/placeholder.svg'}
                    alt={p.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-accent">{p.categoryLabel}</span>
                  <h3 className="mt-1 font-medium text-foreground">{p.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent references */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold tracking-widest text-accent">REFERENCES</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-3xl">최근 시공사례</h2>
          </div>
          <Link href="/references" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            더 보기 <ChevronRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {recentRefs.map((r) => (
            <Link key={r.id} href="/references" className="group overflow-hidden rounded-lg">
              <div className="aspect-4/3 overflow-hidden rounded-lg">
                <img
                  src={r.image || '/placeholder.svg'}
                  alt={r.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3">
                <span className="text-xs text-accent">{r.categoryLabel}</span>
                <h3 className="mt-1 font-medium text-foreground group-hover:text-primary">{r.title}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {r.place} · {r.product}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src="/images/hero-1.png" alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 py-16 text-center text-primary-foreground md:py-24">
          <h2 className="font-serif text-2xl font-bold text-balance md:text-4xl">
            우리 집, 우리 매장에 딱 맞는 우드블라인드
          </h2>
          <p className="mt-4 max-w-xl text-sm text-primary-foreground/85 md:text-base">
            창 크기와 원하는 스타일만 알려주세요. 30년 경력의 전문가가 무료로 견적을 안내해 드립니다.
          </p>
          <Link
            href="/inquiry"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            무료 견적 문의하기 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
