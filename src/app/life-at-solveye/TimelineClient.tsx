'use client'

import { useState } from 'react'
import s from './page.module.scss'

type TagColor = 'blue' | 'green' | 'amber' | 'default'

export type Tag = { label: string; color?: TagColor }
export type TimelineItem = {
  time: string
  timeLabel: string
  title: string
  desc: string
  tags?: Tag[]
  milestone?: boolean
}
export type TimelineTab = {
  id: string
  label: string
  items: TimelineItem[]
}

interface Props {
  tabs: TimelineTab[]
}

const tagClass: Record<TagColor, string> = {
  blue: s.tagBlue,
  green: s.tagGreen,
  amber: s.tagAmber,
  default: s.tag,
}

function TimelineItems({ items }: { items: TimelineItem[] }) {
  return (
    <div className={s.timeline}>
      {items.map((item, i) => (
        <div key={i} className={`${s.tlItem} ${item.milestone ? s.milestone : ''}`}>
          <div className={s.tlTime}>
            <span className={s.tlTimeNum}>{item.time}</span>
            {item.timeLabel}
          </div>
          <div className={s.tlNode}>
            <span className={s.dot} />
          </div>
          <div className={s.tlBody}>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            {item.tags && item.tags.length > 0 && (
              <div className={s.tlTags}>
                {item.tags.map((tag) => (
                  <span key={tag.label} className={tagClass[tag.color ?? 'default']}>
                    {tag.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function TimelineClient({ tabs }: Props) {
  const [active, setActive] = useState(tabs[0].id)

  return (
    <>
      <div className={s.tlTabs} role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            className={`${s.tlTab} ${active === tab.id ? s.tlTabActive : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div key={tab.id} hidden={active !== tab.id}>
          <TimelineItems items={tab.items} />
        </div>
      ))}
    </>
  )
}
