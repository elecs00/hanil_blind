import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { QuickMenu } from '@/components/quick-menu'
import './globals.css'

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

const notoSerifKr = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-serif-kr',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '한일블라인드&커튼 | 30년 전통 울산 우드블라인드 제조공장',
  description:
    '울산 남구 달동에 위치한 30년 전통의 우드블라인드 자체 제조공장. 맞춤 제작부터 직접 시공까지 원스톱으로 프리미엄 우드블라인드를 제공합니다.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#6b4f34',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`bg-background ${notoSansKr.variable} ${notoSerifKr.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main className="min-h-screen pt-16 pb-12 md:pt-20 md:pb-0">{children}</main>
        <SiteFooter />
        <QuickMenu />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
