import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageHero } from '@/components/page-hero'
import { ProductList } from '@/components/products/product-list'

export const metadata: Metadata = {
  title: '제품소개 | 한일블라인드&커튼',
  description: '내추럴 오크, 다크 월넛, 퓨어 화이트, 와이드 맞춤 제작까지. 한일블라인드&커튼의 프리미엄 우드블라인드 제품을 소개합니다.',
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="제품소개"
        subtitle="천연 원목으로 만드는 프리미엄 우드블라인드"
        image="/images/product-natural.png"
        crumbs={[{ label: '제품소개' }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <Suspense fallback={null}>
          <ProductList />
        </Suspense>
      </section>
    </>
  )
}
