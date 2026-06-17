import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from './ContactForm'
import s from './page.module.scss'

export const metadata: Metadata = {
  title: 'Contact — Solveye',
  description:
    'Contact Solveye for a free AR audit, medical billing demo, or RCM inquiry. HIPAA-compliant. Real humans respond within one business day.',
  alternates: {
    canonical: 'https://www.solveye.com/contact',
  },
  robots: 'index,follow',
}

const CHANNELS = [
  {
    title: 'Sales',
    desc: 'For new customer conversations, demos, and the free AR audit.',
    links: [
      { label: 'sales@solveye.health', href: 'mailto:sales@solveye.health' },
      { label: '+1 (855) 465-5639 · ext 1', href: 'tel:+18554655639' },
    ],
  },
  {
    title: 'Customer support',
    desc: 'Existing customers: your CSM is your fastest path. For everything else:',
    links: [
      { label: 'support@solveye.health', href: 'mailto:support@solveye.health' },
      { label: '+1 (855) 465-5639 · ext 2', href: 'tel:+18554655639' },
    ],
  },
  {
    title: 'Compliance & security',
    desc: 'SOC 2 reports, HITRUST letters, BAA, and security questionnaires.',
    links: [{ label: 'security@solveye.health', href: 'mailto:security@solveye.health' }],
  },
  {
    title: 'Talent & careers',
    desc: "Even if you don't see your role on the careers page.",
    links: [
      { label: 'talent@solveye.health', href: 'mailto:talent@solveye.health' },
      { label: 'See open roles', href: '/careers' },
    ],
  },
]

const OFFICES = [
  
  {
    city: 'Hyderabad',
    country: 'Pakistan',
    addr: 'Mindspace IT Park, Building 12\nHyderabad, Sindh 500081',
  },
  {
    city: 'Lahore',
    country: 'Pakistan',
    addr: 'Coding Crafts, 50 C, Sector G DHA Phase 6\nLahore, 54000',
  },
]

const FAQ = [
  {
    q: 'How fast will someone get back to me?',
    a: 'Within one US business day, often same-day. Sales inquiries route directly to a regional rep — not a queue.',
  },
  {
    q: 'Do you sign NDAs before the AR audit?',
    a: "Always. We'll send a mutual NDA and BAA on the first reply, before any data leaves your environment.",
  },
  {
    q: 'Will you talk to me if we have under 10 providers?',
    a: "Absolutely. Roughly 30% of our customers are independent practices and small groups — we have a dedicated pod model for them.",
  },
  {
    q: "I'm a vendor — can we partner?",
    a: (
      <>
        Yes; we partner with EHRs, clearinghouses, and adjacent BPOs regularly. Email{' '}
        <a href="mailto:partners@solveye.health" className={s.faqLink}>
          partners@solveye.health
        </a>
        .
      </>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.heroGrid}>

            {/* Left: copy */}
            <div>
              <div className={s.crumb}>
                <Link href="/">Home</Link> / Contact
              </div>
              <span className={s.eyebrow}>Talk to Solveye</span>
              <h1>Real humans. Fast replies.</h1>
              <p className={s.lead}>
                Whether you want a 30-minute demo, a free 90-day AR audit, or just have a question
                about HIPAA — pick a channel below and we&rsquo;ll get back to you within one
                business day.
              </p>
            </div>

            {/* Right: illustration */}
            <div className={s.heroViz}>
              <svg
                viewBox="0 0 480 400"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className={s.heroSvg}
              >
                <defs>
                  <radialGradient id="ct-bg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#e8f1fb" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#e8f1fb" stopOpacity="0" />
                  </radialGradient>
                  {/* Filter bounds are tall enough to keep shadow in-frame during float */}
                  <filter id="ct-env" x="-14%" y="-16%" width="128%" height="140%">
                    <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#0f172a" floodOpacity="0.18" />
                  </filter>
                  <filter id="ct-bub" x="-20%" y="-22%" width="140%" height="148%">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0f172a" floodOpacity="0.10" />
                  </filter>
                </defs>

                {/* ─── Background glow ─── */}
                <circle cx="240" cy="200" r="185" fill="url(#ct-bg)" />
                <circle cx="240" cy="200" r="170" fill="none" stroke="rgba(24,94,212,0.06)" strokeWidth="1.5" />

                {/* ─── Monogram "S" ─── */}
                <text
                  x="240" y="258"
                  textAnchor="middle"
                  fontSize="258"
                  fontWeight="900"
                  fill="rgba(11,46,104,0.065)"
                  fontFamily="Arial Black, Arial, sans-serif"
                >S</text>

                {/* ─── Signal arcs (breathe behind envelope) ─── */}
                <path className={s.ctArcInner} d="M212 143 C212 120 229 111 240 111 C251 111 268 120 268 143" stroke="#185ed4" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path className={s.ctArcOuter} d="M193 132 C193 98 218 84 240 84 C262 84 287 98 287 132" stroke="#185ed4" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5 4" fill="none" />

                {/* ─── Envelope + badge (float together) ─── */}
                <g className={s.ctEnvelope}>
                  <g filter="url(#ct-env)">
                    <rect x="128" y="155" width="224" height="150" rx="14" fill="#0b2e68" />
                    <line x1="128" y1="305" x2="240" y2="248" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                    <line x1="352" y1="305" x2="240" y2="248" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                    <path d="M128 155 L240 228 L352 155 Z" fill="#185ed4" />
                    <path d="M128 155 L240 228 L352 155" fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1" />
                  </g>
                  {/* Badge pulses independently inside the floating group */}
                  <g className={s.ctBadge}>
                    <circle cx="326" cy="160" r="18" fill="#ef4444" />
                    <text x="326" y="166" textAnchor="middle" fontSize="13" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">3</text>
                  </g>
                </g>

                {/* ─── Left chat bubble (float, offset phase) ─── */}
                <g className={s.ctBubbleLeft}>
                  <g filter="url(#ct-bub)">
                    <rect x="18" y="84" width="130" height="84" rx="18" fill="white" />
                  </g>
                  <path d="M44 168 L22 194 L64 168 Z" fill="white" />
                  <circle cx="40" cy="112" r="10" fill="#e8f1fb" />
                  <circle cx="40" cy="112" r="5.5" fill="#185ed4" opacity="0.55" />
                  <rect x="58" y="107" width="76" height="5" rx="2.5" fill="#94a3b8" />
                  <rect x="58" y="119" width="58" height="5" rx="2.5" fill="#cbd5e1" />
                  <rect x="58" y="131" width="68" height="5" rx="2.5" fill="#e2e8f0" />
                </g>

                {/* ─── Right chat bubble with typing dots (float + staggered dot bounce) ─── */}
                <g className={s.ctBubbleRight}>
                  <rect x="326" y="60" width="140" height="82" rx="18" fill="#185ed4" />
                  <path d="M438 142 L462 167 L422 142 Z" fill="#185ed4" />
                  <circle className={s.ctDot1} cx="362" cy="101" r="8" fill="rgba(255,255,255,0.9)" />
                  <circle className={s.ctDot2} cx="396" cy="101" r="8" fill="rgba(255,255,255,0.65)" />
                  <circle className={s.ctDot3} cx="430" cy="101" r="8" fill="rgba(255,255,255,0.38)" />
                </g>

                {/* ─── Headset icon ─── */}
                <circle cx="76" cy="322" r="30" fill="#10b981" />
                <path d="M64 318 C64 308 71 301 80 301 C89 301 96 308 96 318" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <rect x="62" y="316" width="8" height="13" rx="4" fill="white" />
                <rect x="90" y="316" width="8" height="13" rx="4" fill="white" />

                {/* ─── Decorative dots ─── */}
                <circle cx="434" cy="293" r="5.5" fill="#185ed4" opacity="0.22" />
                <circle cx="450" cy="274" r="3.5" fill="#185ed4" opacity="0.15" />
                <circle cx="420" cy="318" r="3" fill="#0b2e68" opacity="0.14" />
                <circle cx="44" cy="258" r="4.5" fill="#10b981" opacity="0.28" />
                <circle cx="58" cy="278" r="6" fill="#185ed4" opacity="0.13" />
                <circle cx="28" cy="46" r="4" fill="#185ed4" opacity="0.18" />
                <circle cx="452" cy="38" r="5" fill="#0b2e68" opacity="0.12" />
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* ===== MAIN GRID ===== */}
      <section id="form" className={s.mainGrid}>
        <div className="container">
          <div className={s.grid}>
            {/* Contact channels */}
            <aside className={s.side}>
              {CHANNELS.map((ch) => (
                <div key={ch.title} className={s.channel}>
                  <h4>{ch.title}</h4>
                  <p>{ch.desc}</p>
                  <div className={s.channelLinks}>
                    {ch.links.map((l) => (
                      <a key={l.href} href={l.href} className={s.channelLink}>
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </aside>

            {/* Tabbed form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ===== OFFICES ===== */}
      <section className={s.offices}>
        <div className="container">
          <span className={s.eyebrow}>Visit us</span>
          <h2>Our offices.</h2>
          <p className={s.officeLead}>
            Pop in for coffee — we mean it. Let your CSM or sales contact know you&rsquo;re coming.
          </p>
          <div className={s.officeGrid}>
            {OFFICES.map((o) => (
              <div key={o.city} className={s.officeCard}>
                <div className={s.officeCity}>{o.city}</div>
                <div className={s.officeCountry}>{o.country}</div>
                <div className={s.officeAddr}>
                  {o.addr.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < o.addr.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ MINI ===== */}
      <section className={s.faqSection}>
        <div className="container">
          <span className={s.eyebrow}>Common questions</span>
          <h2>Before you reach out.</h2>
          <div className={s.faqGrid}>
            {FAQ.map((item) => (
              <div key={item.q} className={s.faqItem}>
                <h5>{item.q}</h5>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
