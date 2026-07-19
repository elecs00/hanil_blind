import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionTabs } from '@/components/about/section-tabs'
import { company, history } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '회사소개 | 한일우드블라인드',
  description: '1994년 창업 이래 30년, 울산 자체 제조공장에서 우드블라인드를 직접 만들고 시공해온 한일우드블라인드를 소개합니다.',
}

const factoryImages = [
  '/images/factory.png',
  '/images/hero-2.png',
  '/images/slat-detail.png',
  '/images/product-natural.png',
  '/images/product-walnut.png',
  '/images/product-custom.png',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="회사소개"
        subtitle="30년 전통, 울산 자체 제조공장"
        image="/images/factory.png"
        crumbs={[{ label: '회사소개' }]}
      />
      <SectionTabs />

      {/* Greeting */}
      <section id="greeting" className="scroll-mt-32 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-6">
          <div className="overflow-hidden rounded-lg">
            <img src="/images/hero-2.png" alt="공장에서 우드블라인드를 제작하는 모습" className="aspect-4/3 w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-widest text-accent">GREETING</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-3xl text-balance">
              한 길만 걸어온 30년,
              <br />
              품질로 증명합니다
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                안녕하십니까. {company.name}을 찾아주신 여러분께 진심으로 감사드립니다. 저희는 {company.established}년 창업 이래
                오직 우드블라인드 한 분야에만 집중해 왔습니다.
              </p>
              <p>
                울산 남구 달동의 자체 제조공장에서 원목 가공부터 도장, 제작, 그리고 직접 시공까지 전 과정을 원스톱으로 진행합니다.
                중간 유통 단계를 없앤 공장 직영 방식으로 합리적인 가격과 변형 없는 품질을 함께 약속드립니다.
              </p>
              <p>
                고객의 공간에 꼭 맞는 블라인드를 정성껏 만들겠습니다. 언제든 편하게 문의해 주십시오.
              </p>
            </div>
            <p className="mt-6 font-serif text-lg font-semibold text-foreground">
              대표 {company.ceo}
            </p>
          </div>
        </div>
      </section>

      {/* Factory */}
      <section id="factory" className="scroll-mt-32 bg-secondary/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold tracking-widest text-accent">FACTORY</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-3xl">공장 · 설비 소개</h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              자체 원목 가공 라인과 도장 설비를 갖춘 울산 직영 제조공장에서 제품이 완성됩니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {factoryImages.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <img src={src || '/placeholder.svg'} alt={`공장 및 설비 사진 ${i + 1}`} className="aspect-4/3 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="scroll-mt-32 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold tracking-widest text-accent">HISTORY</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-3xl">연혁</h2>
          </div>
          <ol className="relative border-l-2 border-border pl-8">
            {history.map((h) => (
              <li key={h.year} className="relative mb-8 last:mb-0">
                <span className="absolute -left-[41px] flex size-5 items-center justify-center rounded-full border-4 border-background bg-primary" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="font-serif text-xl font-bold text-primary">{h.year}</span>
                  <p className="text-sm text-muted-foreground md:text-base">{h.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
