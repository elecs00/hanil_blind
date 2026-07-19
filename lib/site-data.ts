export const company = {
  name: '한일우드블라인드',
  tagline: '30년 전통, 자체 제조공장의 프리미엄 우드블라인드',
  ceo: '박재덕',
  bizNo: '610-12-34567',
  address: '울산광역시 남구 달동 1234-5',
  phone: '052-265-0492',
  phoneHref: 'tel:010-5378-9396',
  hours: '평일 09:00 ~ 18:00 (일요일 휴무)',
  kakao: 'https://pf.kakao.com/',
  established: 1994,
}

export const nav = [
  {
    label: '회사소개',
    href: '/about',
    children: [
      { label: '인사말', href: '/about#greeting' },
      { label: '공장·설비 소개', href: '/about#factory' },
      { label: '연혁', href: '/about#history' },
      { label: '오시는길', href: '/location' },
    ],
  },
  {
    label: '제품소개',
    href: '/products',
    children: [
      { label: '우드블라인드', href: '/products?cat=wood' },
      { label: '맞춤 제작', href: '/products?cat=custom' },
    ],
  },
  {
    label: '시공사례',
    href: '/references',
    children: [
      { label: '주거공간', href: '/references?cat=home' },
      { label: '상업공간', href: '/references?cat=biz' },
      { label: '관공서·기관', href: '/references?cat=public' },
    ],
  },
  {
    label: '견적문의',
    href: '/inquiry',
    children: [
      { label: '온라인 견적 신청', href: '/inquiry' },
      { label: '전화·카톡 상담', href: '/inquiry#contact' },
    ],
  },
  {
    label: '고객센터',
    href: '/support',
    children: [
      { label: '공지사항', href: '/support#notice' },
      { label: '자주 묻는 질문', href: '/support#faq' },
    ],
  },
] as const

export const strengths = [
  {
    title: '30년 제조 경력',
    desc: '1994년 창업 이래 오직 우드블라인드 한 길, 축적된 노하우로 변형 없는 최고 품질을 완성합니다.',
    icon: 'award',
  },
  {
    title: '울산 자체 공장 직영',
    desc: '중간 유통 없는 자체 제조공장 직영 방식으로 합리적인 가격과 빠른 제작 기간을 보장합니다.',
    icon: 'factory',
  },
  {
    title: '맞춤 제작 · 직접 시공',
    desc: '창의 크기와 공간에 꼭 맞는 1:1 맞춤 제작부터 전문 기사의 직접 시공까지 원스톱으로 진행합니다.',
    icon: 'ruler',
  },
] as const

export type Product = {
  slug: string
  name: string
  category: 'wood' | 'custom'
  categoryLabel: string
  tagline: string
  image: string
  features: string[]
  specs: { label: string; value: string }[]
  description: string
}

export const products: Product[] = [
  {
    slug: 'natural-oak',
    name: '내추럴 오크 우드블라인드',
    category: 'wood',
    categoryLabel: '우드블라인드',
    tagline: '따뜻한 원목 질감의 스테디셀러',
    image: '/images/product-natural.png',
    features: ['천연 오크 원목 사용', '햇빛을 은은하게 조절하는 채광', '거실·서재에 어울리는 밝은 톤'],
    specs: [
      { label: '소재', value: '천연 오크 원목' },
      { label: '슬랫 폭', value: '25 / 35 / 50mm' },
      { label: '컬러', value: '내추럴 / 라이트오크' },
      { label: '제작 기간', value: '약 5~7일' },
    ],
    description:
      '천연 오크 원목의 결을 그대로 살린 대표 제품입니다. 밝고 따뜻한 톤으로 거실, 서재, 카페 등 다양한 공간에 잘 어울리며, 슬랫 각도 조절로 채광과 프라이버시를 동시에 확보할 수 있습니다.',
  },
  {
    slug: 'dark-walnut',
    name: '다크 월넛 우드블라인드',
    category: 'wood',
    categoryLabel: '우드블라인드',
    tagline: '고급스러운 딥 브라운 컬러',
    image: '/images/product-walnut.png',
    features: ['깊고 진한 월넛 컬러', '모던·클래식 인테리어에 조화', '중후한 분위기 연출'],
    specs: [
      { label: '소재', value: '천연 원목 (월넛 도장)' },
      { label: '슬랫 폭', value: '25 / 35 / 50mm' },
      { label: '컬러', value: '월넛 / 다크브라운' },
      { label: '제작 기간', value: '약 5~7일' },
    ],
    description:
      '깊고 진한 월넛 컬러로 공간에 중후하고 고급스러운 분위기를 더합니다. 침실, 서재, 사무공간 등 차분한 무드가 필요한 곳에 특히 인기가 높습니다.',
  },
  {
    slug: 'pure-white',
    name: '퓨어 화이트 우드블라인드',
    category: 'wood',
    categoryLabel: '우드블라인드',
    tagline: '깔끔하고 밝은 화이트 톤',
    image: '/images/product-white.png',
    features: ['화이트 도장 마감', '공간을 넓고 밝게 연출', '어떤 인테리어와도 무난'],
    specs: [
      { label: '소재', value: '천연 원목 (화이트 도장)' },
      { label: '슬랫 폭', value: '25 / 35 / 50mm' },
      { label: '컬러', value: '화이트 / 아이보리' },
      { label: '제작 기간', value: '약 5~7일' },
    ],
    description:
      '깨끗한 화이트 도장 마감으로 공간을 한층 넓고 밝게 보이게 합니다. 화이트·모던 인테리어와 잘 어울리며 관리가 쉬운 것이 장점입니다.',
  },
  {
    slug: 'wide-teak',
    name: '와이드 티크 맞춤 블라인드',
    category: 'custom',
    categoryLabel: '맞춤 제작',
    tagline: '대형 창을 위한 와이드 슬랫',
    image: '/images/product-custom.png',
    features: ['50mm 와이드 슬랫', '대형 창·통창 맞춤 제작', '개방감 있는 채광'],
    specs: [
      { label: '소재', value: '천연 티크 원목' },
      { label: '슬랫 폭', value: '50mm (와이드)' },
      { label: '컬러', value: '티크 / 미디엄브라운' },
      { label: '제작 기간', value: '약 7~10일' },
    ],
    description:
      '거실 통창, 상업공간의 대형 창을 위한 와이드 슬랫 맞춤 제품입니다. 넓은 슬랫으로 개방감 있는 채광과 시원한 조망을 제공하며, 창 크기에 맞춘 1:1 제작이 가능합니다.',
  },
]

export type Reference = {
  id: number
  title: string
  category: 'home' | 'biz' | 'public'
  categoryLabel: string
  place: string
  product: string
  date: string
  image: string
}

export const references: Reference[] = [
  { id: 1, title: '남구 신정동 아파트 거실', category: 'home', categoryLabel: '주거공간', place: '울산 남구 신정동', product: '내추럴 오크 25mm', date: '2026.06', image: '/images/ref-home.png' },
  { id: 2, title: '중구 감성 카페 창가', category: 'biz', categoryLabel: '상업공간', place: '울산 중구', product: '다크 월넛 35mm', date: '2026.06', image: '/images/ref-cafe.png' },
  { id: 3, title: '남구 사무실 회의실', category: 'biz', categoryLabel: '상업공간', place: '울산 남구 삼산동', product: '퓨어 화이트 25mm', date: '2026.05', image: '/images/ref-office.png' },
  { id: 4, title: '구청 민원실 리모델링', category: 'public', categoryLabel: '관공서·기관', place: '울산 동구', product: '내추럴 오크 50mm', date: '2026.05', image: '/images/ref-public.png' },
  { id: 5, title: '북구 신축 아파트 침실', category: 'home', categoryLabel: '주거공간', place: '울산 북구', product: '다크 월넛 25mm', date: '2026.04', image: '/images/ref-bedroom.png' },
  { id: 6, title: '레스토랑 통창 시공', category: 'biz', categoryLabel: '상업공간', place: '울산 남구 달동', product: '와이드 티크 50mm', date: '2026.04', image: '/images/ref-restaurant.png' },
]

export const history = [
  { year: '1994', text: '한일우드블라인드 창업, 울산 남구 소재 공장 설립' },
  { year: '2001', text: '자체 도장 설비 도입, 원목 가공 라인 확장' },
  { year: '2008', text: '관공서·기관 납품 실적 확대, 시공팀 정규화' },
  { year: '2015', text: '공장 이전 및 증설 (울산 남구 달동)' },
  { year: '2020', text: '누적 시공 10,000건 돌파' },
  { year: '2026', text: '자체 온라인 견적 시스템 오픈, 브랜드 리뉴얼' },
]

export const notices = [
  { id: 1, title: '여름 성수기 제작 기간 안내 (7~8월)', date: '2026.07.10' },
  { id: 2, title: '천연 원목 신규 컬러 4종 출시 안내', date: '2026.06.22' },
  { id: 3, title: '추석 연휴 상담 및 배송 일정 공지', date: '2026.06.01' },
  { id: 4, title: '우드블라인드 관리·청소 방법 가이드', date: '2026.05.15' },
]

export const faqs = [
  {
    q: '견적은 어떻게 받을 수 있나요?',
    a: '홈페이지 견적문의 페이지에서 창 크기와 수량, 설치 위치를 남겨주시면 담당자가 확인 후 연락드립니다. 전화(052-123-4567) 또는 카카오톡 상담도 가능합니다.',
  },
  {
    q: '제작 기간은 얼마나 걸리나요?',
    a: '제품과 수량에 따라 다르지만 일반 우드블라인드는 약 5~7일, 맞춤 제작은 약 7~10일 소요됩니다. 성수기에는 다소 지연될 수 있습니다.',
  },
  {
    q: '직접 시공까지 해주시나요?',
    a: '네, 자체 시공팀이 제작부터 설치까지 원스톱으로 진행합니다. 울산 및 인근 지역은 방문 실측 후 정확한 견적을 드립니다.',
  },
  {
    q: '슬랫 폭은 어떤 것을 선택하면 좋나요?',
    a: '25mm는 작은 창과 아기자기한 공간, 35mm는 가장 무난한 표준, 50mm는 대형 창과 개방감 있는 공간에 적합합니다. 상담 시 창 크기에 맞춰 추천해 드립니다.',
  },
  {
    q: 'A/S는 어떻게 진행되나요?',
    a: '제조사 직영이므로 시공 후 사용 중 발생하는 문제에 대해 신속하게 A/S를 진행합니다. 대표번호로 연락 주시면 안내해 드립니다.',
  },
]
