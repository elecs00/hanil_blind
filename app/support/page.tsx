import type { Metadata } from 'next'
import { Bell } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FaqAccordion } from '@/components/support/faq-accordion'
import { notices } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '고객센터 | 한일블라인드&커튼',
  description: '한일블라인드&커튼 공지사항과 자주 묻는 질문을 확인하세요.',
}

export default function SupportPage() {
  return (
    <>
      <PageHero
        title="고객센터"
        subtitle="궁금한 점을 확인하세요"
        image="/images/hero-2.png"
        crumbs={[{ label: '고객센터' }]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
        {/* Notices */}
        <div id="notice" className="scroll-mt-32">
          <h2 className="font-serif text-2xl font-bold text-foreground">공지사항</h2>
          <ul className="mt-6 divide-y divide-border rounded-lg border border-border bg-card">
            {notices.map((n) => (
              <li key={n.id} className="flex items-center gap-4 px-5 py-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Bell className="size-4" />
                </span>
                <span className="flex-1 text-sm font-medium text-foreground md:text-base">{n.title}</span>
                <span className="shrink-0 text-xs text-muted-foreground md:text-sm">{n.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div id="faq" className="mt-16 scroll-mt-32">
          <h2 className="font-serif text-2xl font-bold text-foreground">자주 묻는 질문</h2>
          <div className="mt-6">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  )
}
