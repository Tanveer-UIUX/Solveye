'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedNumberProps {
  value: string
  duration?: number
}

interface Parsed {
  prefix: string
  num: number
  suffix: string
  decimals: number
  hasCommas: boolean
}

// Pulls a numeric chunk out of the value: "+32%" / "$3.2M" / "1,247" / "28 days" / "≤ 24 hr"
function parseValue(value: string): Parsed | null {
  const match = value.match(/^([^\d.-]*)(-?[\d,]+(?:\.\d+)?)(.*)$/)
  if (!match) return null
  const [, prefix, numStr, suffix] = match
  const hasCommas = numStr.includes(',')
  const cleaned = numStr.replace(/,/g, '')
  const num = parseFloat(cleaned)
  if (isNaN(num)) return null
  const decimals = (cleaned.split('.')[1] || '').length
  return { prefix, num, suffix, decimals, hasCommas }
}

// Formats a number back into the original surface form (commas/decimals preserved)
function formatNumber(n: number, decimals: number, hasCommas: boolean): string {
  const fixed = n.toFixed(decimals)
  if (!hasCommas) return fixed
  const [intPart, decPart] = fixed.split('.')
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return decPart ? `${withCommas}.${decPart}` : withCommas
}

export default function AnimatedNumber({ value, duration = 1200 }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(() => {
    const parsed = parseValue(value)
    if (!parsed) return value
    return `${parsed.prefix}${formatNumber(0, parsed.decimals, parsed.hasCommas)}${parsed.suffix}`
  })

  useEffect(() => {
    const parsed = parseValue(value)
    if (!parsed) {
      setDisplay(value)
      return
    }
    const el = ref.current
    if (!el) return

    const { prefix, num, suffix, decimals, hasCommas } = parsed

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect()
          const start = performance.now()

          function step(now: number) {
            const t = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - t, 3)
            const v = num * eased
            setDisplay(`${prefix}${formatNumber(v, decimals, hasCommas)}${suffix}`)
            if (t < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} style={{ fontFeatureSettings: '"tnum"' }}>
      {display}
    </span>
  )
}
