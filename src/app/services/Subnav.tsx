'use client'

import { useEffect, useState } from 'react'
import s from './Subnav.module.scss'

interface SubnavItem {
  id: string
  label: string
}

interface SubnavProps {
  items: SubnavItem[]
}

export default function Subnav({ items }: SubnavProps) {
  const [active, setActive] = useState(items[0]?.id ?? '')

  useEffect(() => {
    if (items.length === 0) return

    const onScroll = () => {
      let current = items[0].id
      for (const { id } of items) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top - 200 <= 0) {
          current = id
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])

  return (
    <div className={s.bar}>
      <div className="container">
        <nav className={s.row} aria-label="Service sections">
          <span className={s.label}>Jump to</span>
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={`${s.item} ${active === it.id ? s.active : ''}`}
            >
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
