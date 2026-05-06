'use client'

import { useState } from 'react'
import s from './IntegrationsTabs.module.scss'

interface Tile {
  mark: string
  label: string
}

interface Tab {
  id: string
  label: string
  tiles: Tile[]
}

const TABS: Tab[] = [
  {
    id: 'ehr',
    label: 'EHR / EMR',
    tiles: [
      { mark: 'E', label: 'Epic' },
      { mark: 'C', label: 'Cerner' },
      { mark: 'A', label: 'athenahealth' },
      { mark: 'e', label: 'eClinicalWorks' },
      { mark: 'N', label: 'NextGen' },
      { mark: 'M', label: 'Meditech' },
      { mark: 'A', label: 'Allscripts' },
      { mark: 'G', label: 'Greenway' },
      { mark: 'P', label: 'Practice Fusion' },
      { mark: 'D', label: 'DrChrono' },
      { mark: 'E', label: 'Elation' },
      { mark: '+', label: '20 more' },
    ],
  },
  {
    id: 'pm',
    label: 'Practice Management',
    tiles: [
      { mark: 'K', label: 'Kareo' },
      { mark: 'A', label: 'AdvancedMD' },
      { mark: 'N', label: 'NextGen PM' },
      { mark: 'C', label: 'CollaborateMD' },
      { mark: 'M', label: 'MedEvolve' },
      { mark: '+', label: '15 more' },
    ],
  },
  {
    id: 'clearing',
    label: 'Clearinghouses',
    tiles: [
      { mark: 'W', label: 'Waystar' },
      { mark: 'C', label: 'Change Healthcare' },
      { mark: 'A', label: 'Availity' },
      { mark: 'T', label: 'Trizetto' },
      { mark: 'O', label: 'Office Ally' },
      { mark: '+', label: '8 more' },
    ],
  },
  {
    id: 'payers',
    label: 'Payers',
    tiles: [
      { mark: 'UHG', label: 'UnitedHealth' },
      { mark: 'A', label: 'Aetna' },
      { mark: 'H', label: 'Humana' },
      { mark: 'BCBS', label: 'Blue Cross' },
      { mark: 'C', label: 'Cigna' },
      { mark: 'CMS', label: 'Medicare/Medicaid' },
    ],
  },
]

export default function IntegrationsTabs() {
  const [active, setActive] = useState(TABS[0].id)
  const tab = TABS.find((t) => t.id === active) ?? TABS[0]

  return (
    <div>
      <div className={s.tabs} role="tablist">
        {TABS.map((t) => (
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
