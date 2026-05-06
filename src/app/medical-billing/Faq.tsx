'use client'

import { useState } from 'react'
import s from './Faq.module.scss'

interface FaqItem {
  q: string
  a: string
}

interface FaqProps {
  items: FaqItem[]
}

export default function Faq({ items }: FaqProps) {
  const [open, setOpen] = useState<Set<number>>(new Set())

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div className={s.list}>
      {items.map((item, i) => {
        const isOpen = open.has(i)
        return (
          <div key={i} className={`${s.item} ${isOpen ? s.open : ''}`}>
            <button
              type="button"
              className={s.q}
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={`faq-a-${i}`}
            >
              <span>{item.q}</span>
              <span className={s.toggle} aria-hidden="true">
                +
              </span>
            </button>
            <div id={`faq-a-${i}`} className={s.a} role="region">
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
