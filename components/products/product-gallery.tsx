'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(images[0])

  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-border">
        <img src={current || '/placeholder.svg'} alt={alt} className="aspect-square w-full object-cover" />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(img)}
            className={cn(
              'overflow-hidden rounded-md border-2 transition-colors',
              current === img ? 'border-primary' : 'border-transparent hover:border-border',
            )}
            aria-label={`${alt} 썸네일 ${i + 1}`}
          >
            <img src={img || '/placeholder.svg'} alt="" className="aspect-square w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
