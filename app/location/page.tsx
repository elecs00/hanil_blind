import type { Metadata } from 'next'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { company } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '오시는길 | 한일우드블라인드',
  description: `${company.address}에 위치한 한일우드블라인드 제조공장 오시는길 안내입니다.`,
}

export default function LocationPage() {
  const query = encodeURIComponent('울산광역시 남구 달동')
  const mapSrc = `https://maps.google.com/maps?q=${query}&z=15&output=embed`
  const kakaoDirections = `https://map.kakao.com/link/search/${query}`

  return (
    <>
      <PageHero
        title="오시는길"
        subtitle="울산 남구 달동 제조공장"
        image="/images/hero-3.png"
        crumbs={[{ label: '회사소개', href: '/about' }, { label: '오시는길' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="overflow-hidden rounded-lg border border-border">
          <iframe
            title="한일우드블라인드 위치 지도"
            src={mapSrc}
            className="h-[380px] w-full md:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <MapPin className="size-6 text-primary" />
            <h3 className="mt-4 font-semibold text-foreground">주소</h3>
            <p className="mt-1 text-sm text-muted-foreground">{company.address}</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <Phone className="size-6 text-primary" />
            <h3 className="mt-4 font-semibold text-foreground">대표전화</h3>
            <a href={company.phoneHref} className="mt-1 block text-sm text-muted-foreground hover:text-primary">
              {company.phone}
            </a>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <Clock className="size-6 text-primary" />
            <h3 className="mt-4 font-semibold text-foreground">영업시간</h3>
            <p className="mt-1 text-sm text-muted-foreground">{company.hours}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={kakaoDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Navigation className="size-4" />
            카카오맵으로 길찾기
          </a>
          <a
            href={company.phoneHref}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <Phone className="size-4" />
            전화 걸기
          </a>
        </div>
      </section>
    </>
  )
}
