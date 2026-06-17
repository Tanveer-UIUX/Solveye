'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import s from './TestimonialsScroll.module.scss'

export interface Testimonial {
  quote: string
  name: string
  role: string
  detail: string
}

interface Props {
  testimonials: Testimonial[]
}

export default function TestimonialsScrollClient({ testimonials }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const goTo = useCallback((i: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.children[i] as HTMLElement
    const left =
      card.offsetLeft + card.offsetWidth / 2 - el.clientWidth / 2
    el.scrollTo({
      left: Math.max(0, Math.min(left, el.scrollWidth - el.clientWidth)),
      behavior: 'smooth',
    })
    setActive(i)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const intersecting = new Set<number>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const i = Array.from(el.children).indexOf(entry.target as HTMLElement)
          if (i === -1) return
          if (entry.isIntersecting) intersecting.add(i)
          else intersecting.delete(i)
        })
        if (intersecting.size > 0) setActive(Math.min(...intersecting))
      },
      { root: el, threshold: 0.5 },
    )
    Array.from(el.children).forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={scrollRef} className={s.scroll}>
        {testimonials.map((t) => (
          <div key={t.name} className={s.card}>
            <div className={s.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote className={s.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
            <cite className={s.cite}>
              <span className={s.avatar} />
              <span>
                <strong>{t.name}</strong>
                <span className={s.citeRole}>
                  {t.role} &middot; {t.detail}
                </span>
              </span>
            </cite>
          </div>
        ))}
      </div>

      <div className={s.dots} role="tablist" aria-label="Testimonials">
        {[0, 2].map((target, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === 0 ? active === 0 : active >= 1}
            className={`${s.dot} ${(i === 0 ? active === 0 : active >= 1) ? s.dotActive : ''}`}
            onClick={() => goTo(target)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </>
  )
}
