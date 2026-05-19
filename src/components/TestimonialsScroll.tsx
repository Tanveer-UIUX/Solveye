'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import s from './TestimonialsScroll.module.scss'

const TESTIMONIALS = [
  {
    quote:
      'We moved from a multi-vendor mess to one team. Days in AR dropped from 54 to 28 in a single quarter, and we finally have a real-time view of what payers owe us.',
    name: 'Dr. Priya Mehta',
    role: 'CFO, Apex Cardiology Group',
    detail: '38 providers',
  },
  {
    quote:
      "Solveye's credentialing team cut our enrollment timeline in half. We had six new providers billing within 52 days — a first in ten years of practice growth.",
    name: 'James Whitfield',
    role: 'COO, Coastal Ortho',
    detail: '12 locations',
  },
  {
    quote:
      "Our denial rate was 18% when we started. Twelve weeks in, it's under 4%. The denial root-cause loop they run changed how we document procedures.",
    name: 'Rachel Torres',
    role: 'Revenue Cycle Director, Northstar Peds',
    detail: '22 providers',
  },
]

export default function TestimonialsScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  /* Center the target card in the scroll container (clamped to valid range).
     Edge cards (first/last) are pushed to min/max scroll, leaving adjacent
     cards peeking on the opposite side. */
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

  /* Update the active dot as the user swipes manually */
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Array.from(el.children).indexOf(
              entry.target as HTMLElement,
            )
            if (i !== -1) setActive(i)
          }
        })
      },
      { root: el, threshold: 0.5 },
    )
    Array.from(el.children).forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={scrollRef} className={s.scroll}>
        {TESTIMONIALS.map((t) => (
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
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            className={`${s.dot} ${i === active ? s.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </>
  )
}
