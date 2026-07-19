import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageHero } from '@/components/page-hero'
import { ReferenceGallery } from '@/components/references/reference-gallery'

export const metadata: Metadata = {
  title: '시공사례 | 한일우드블라인드',
  description: '주거공간, 상업공간, 관공서까지. 30년간 축적된 한일우드블라인드의 다양한 우드블라인드 시공사례를 확인하세요.',
}

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        title="시공사례"
        subtitle="30년간 함께한 공간들"
        image="/images/ref-cafe.png"
        crumbs={[{ label: '시공사례' }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <Suspense fallback={null}>
          <ReferenceGallery />
        </Suspense>
      </section>
    </>
  )
}
