'use client'

import { useState } from 'react'
import s from './page.module.scss'

interface Props {
  col1: string[]
  col2: string[]
}

export default function HeroScrollClient({ col1, col2 }: Props) {
  const [paused, setPaused] = useState(false)

  return (
    <div className={s.hsVisual}>
      <div className={`${s.hsTrack} ${paused ? s.hsPaused : ''}`}>
        <div className={s.hsCol}>
          {[...col1, ...col1].map((url, i) => (
            <div
              key={i}
              className={s.hsCard}
              style={{ backgroundImage: `url('${url}')` }}
            />
          ))}
        </div>
        <div className={`${s.hsCol} ${s.hsColOffset}`}>
          {[...col2, ...col2].map((url, i) => (
            <div
              key={i}
              className={s.hsCard}
              style={{ backgroundImage: `url('${url}')` }}
            />
          ))}
        </div>
      </div>

      <button
        className={s.hsPauseBtn}
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? 'Play' : 'Pause'}
      >
        {paused ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        )}
      </button>
    </div>
  )
}
