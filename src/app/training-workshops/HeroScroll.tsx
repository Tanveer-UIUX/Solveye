'use client'
import { useState } from 'react'
import s from './page.module.scss'

const COL1 = [
  'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80',
]

const COL2 = [
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=80',
]

export default function HeroScroll() {
  const [paused, setPaused] = useState(false)

  return (
    <div className={s.hsVisual}>
      <div className={`${s.hsTrack} ${paused ? s.hsPaused : ''}`}>
        <div className={s.hsCol}>
          {[...COL1, ...COL1].map((url, i) => (
            <div
              key={i}
              className={s.hsCard}
              style={{ backgroundImage: `url('${url}')` }}
            />
          ))}
        </div>
        <div className={`${s.hsCol} ${s.hsColOffset}`}>
          {[...COL2, ...COL2].map((url, i) => (
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
