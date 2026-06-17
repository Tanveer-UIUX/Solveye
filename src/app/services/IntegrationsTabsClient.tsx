'use client'

import { useState } from 'react'
import s from './IntegrationsTabs.module.scss'

export interface Tile {
  mark: string
  label: string
}

export interface IntegrationsTab {
  id: string
  label: string
  tiles: Tile[]
}

interface Props {
  tabs: IntegrationsTab[]
}

export default function IntegrationsTabsClient({ tabs }: Props) {
  const [active, setActive] = useState(tabs[0].id)
  const tab = tabs.find((t) => t.id === active) ?? tabs[0]

  return (
    <div>
      <div className={s.tabs} role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            className={`${s.tab} ${active === t.id ? s.active : ''}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={s.grid} role="tabpanel">
        {tab.tiles.map((tile, i) => (
          <div key={`${tab.id}-${i}`} className={s.tile}>
            <span className={s.mark}>{tile.mark}</span>
            {tile.label}
          </div>
        ))}
      </div>
    </div>
  )
}
