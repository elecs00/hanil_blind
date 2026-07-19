import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, ArrowRight, List } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ProductGallery } from '@/components/products/product-gallery'
import { products } from '@/lib/site-data'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return { title: '제품을 찾을 수 없습니다 | 한일우드블라인드' }
  return {
    title: `${product.name} | 한일우드블라인드`,
    description: product.description,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const galleryImages = [product.image, '/images/slat-detail.png', '/images/hero-2.png', '/images/factory.png']

  return (
    <>
      <PageHero
        title="제품 상세"
        image="/images/product-natural.png"
        crumbs={[{ label: '제품소개', href: '/products' }, { label: product.name }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <ProductGallery images={galleryImages} alt={product.name} />

          <div>
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              {product.categoryLabel}
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold text-foreground text-balance">{product.name}</h1>
            <p className="mt-2 text-muted-foreground">{product.tagline}</p>

            <ul className="mt-6 space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground md:text-base">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Specs */}
            <div className="mt-8 overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <tbody>
                  {product.specs.map((s, i) => (
                    <tr key={s.label} className={i % 2 === 0 ? 'bg-card' : 'bg-secondary/40'}>
                      <th scope="row" className="w-32 border-r border-border px-4 py-3 text-left font-medium text-muted-foreground">
                        {s.label}
                      </th>
                      <td className="px-4 py-3 text-foreground">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/inquiry?product=${encodeURIComponent(product.name)}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                이 제품으로 견적문의 <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <List className="size-4" />
                목록으로
              </Link>
            </div>
          </div>
        </div>

        {/* Detail content */}
        <div className="mt-16 border-t border-border pt-12">
          <h2 className="font-serif text-2xl font-bold text-foreground">제품 상세 설명</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{product.description}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <img src="/images/slat-detail.png" alt="슬랫 디테일" className="aspect-video w-full rounded-lg object-cover" />
            <img src="/images/hero-1.png" alt="시공 예시" className="aspect-video w-full rounded-lg object-cover" />
          </div>
        </div>
      </section>
    </>
  )
}
