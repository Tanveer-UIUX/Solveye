'use client'

import { useState, useEffect } from 'react'
import s from './Gallery.module.scss'

interface Props {
  images: string[]
}

export default function GalleryClient({ images }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div className={s.gallery}>
        {images.map((src, i) => (
          <div
            key={i}
            className={s.galleryItem}
            onClick={() => setOpen(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setOpen(i)}
          >
            <div
              className={s.galleryPhoto}
              style={{ backgroundImage: `url('${src}')` }}
            />
          </div>
        ))}
      </div>

      {open !== null && (
        <div className={s.lightbox} onClick={() => setOpen(null)}>
          <div
            className={s.lightboxImg}
            style={{ backgroundImage: `url('${images[open]}')` }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className={s.lightboxClose}
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </>
  )
}
