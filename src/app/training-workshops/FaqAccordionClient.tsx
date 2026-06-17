'use client'

import { useState } from 'react'
import s from './page.module.scss'

export interface FaqItem {
  q: string
  a: string
}

interface Props {
  items: FaqItem[]
}

export default function FaqAccordionClient({ items }: Props) {
  const [open, setOpen] = useState<number>(0)

  return (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          className={`${s.faqItem} ${open === i ? s.faqOpen : ''}`}
        >
          <button
            className={s.faqQ}
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <span className={s.plus}>{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <p className={s.faqA}>{item.a}</p>}
        </div>
      ))}
    </div>
  )
}
