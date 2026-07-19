import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Phone, MessageCircle, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { InquiryForm } from '@/components/inquiry/inquiry-form'
import { company } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '견적문의 | 한일블라인드&커튼',
  description: '온라인으로 간편하게 우드블라인드 견적을 문의하세요. 전화 및 카카오톡 상담도 가능합니다.',
}

export default function InquiryPage() {
  return (
    <>
      <PageHero
        title="견적문의"
        subtitle="창 크기와 스타일만 알려주시면 무료로 안내해 드립니다"
        image="/images/product-walnut.png"
        crumbs={[{ label: '견적문의' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.8fr_1fr]">
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground">온라인 견적 신청</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="text-destructive">*</span> 표시는 필수 입력 항목입니다.
            </p>
            <div className="mt-6">
              <Suspense fallback={null}>
                <InquiryForm />
              </Suspense>
            </div>
          </div>

          {/* Contact box */}
          <aside id="contact" className="scroll-mt-32">
            <div className="sticky top-28 rounded-lg border border-border bg-card p-6">
              <h3 className="font-serif text-xl font-bold text-foreground">전화 · 카톡 상담</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                빠른 상담을 원하시면 아래로 연락 주세요.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">대표번호</p>
                    <a href={company.phoneHref} className="text-lg font-bold text-foreground hover:text-primary">
                      {company.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">상담시간</p>
                    <p className="text-sm text-foreground">{company.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Phone className="size-4" /> 전화 상담
                </a>
                <a
                  href={company.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  <MessageCircle className="size-4" /> 카카오톡 채널 상담
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
