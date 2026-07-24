import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, Calendar, Package, List } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { references } from '@/lib/site-data'

export function generateStaticParams() {
  return references.filter((r) => r.slug).map((r) => ({ slug: r.slug as string }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const reference = references.find((r) => r.slug === slug)
  if (!reference) return { title: '시공사례를 찾을 수 없습니다 | 한일블라인드&커튼' }
  return {
    title: `${reference.title} | 한일블라인드&커튼`,
    description: reference.body?.find((b) => b.type === 'text')?.text ?? reference.title,
  }
}

export default async function ReferenceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const reference = references.find((r) => r.slug === slug)
  if (!reference || !reference.body) notFound()

  return (
    <>
      <PageHero
        title={reference.title}
        image={reference.image}
        crumbs={[{ label: '시공사례', href: '/references' }, { label: reference.title }]}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <dl className="flex flex-wrap gap-x-6 gap-y-2 border-b border-border pb-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" /> {reference.place}
          </div>
          <div className="flex items-center gap-2">
            <Package className="size-4 text-primary" /> {reference.product}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="size-4 text-primary" /> {reference.date}
          </div>
        </dl>

        <div className="mt-8 space-y-6">
          {reference.body.map((block, i) =>
            block.type === 'text' ? (
              <p key={i} className="leading-relaxed text-foreground md:text-lg">
                {block.text}
              </p>
            ) : (
              <figure key={i}>
                <img src={block.src} alt={block.caption ?? reference.title} className="w-full rounded-lg object-cover" />
                {block.caption && (
                  <figcaption className="mt-2 text-center text-sm text-muted-foreground">{block.caption}</figcaption>
                )}
              </figure>
            ),
          )}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row">
          <Link
            href={`/inquiry?product=${encodeURIComponent(reference.product)}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            비슷한 시공 견적문의
          </Link>
          <Link
            href="/references"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <List className="size-4" />
            시공사례 목록
          </Link>
        </div>
      </article>
    </>
  )
}
