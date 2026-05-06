'use client'

import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  end: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
}

export default function StatCounter({
  end,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 1200,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(`${prefix}0${suffix}`)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect()
          const start = performance.now()

          function step(now: number) {
            const t = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - t, 3)
            setDisplay(`${prefix}${(end * eased).toFixed(decimals)}${suffix}`)
            if (t < 1) requestAnimationFrame(step)
          }

          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, suffix, prefix, decimals, duration])

  return <span ref={ref}>{display}</span>
}
