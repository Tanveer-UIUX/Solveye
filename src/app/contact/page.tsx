import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from './ContactForm'
import s from './page.module.scss'

export const metadata: Metadata = {
  title: 'Contact — Solveye',
  description:
    'Reach out to Solveye for a demo, free AR audit, or general inquiry. Real humans, same-day replies.',
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
    title: 'Press & partnerships',
    desc: 'Media inquiries, podcast bookings, partner programs.',
    links: [{ label: 'press@solveye.health', href: 'mailto:press@solveye.health' }],
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
    city: 'Philadelphia',
    country: 'UNITED STATES · HQ',
    addr: '2120 Market Street, Suite 400\nPhiladelphia, PA 19103',
  },
  {
    city: 'Austin',
    country: 'UNITED STATES',
    addr: '501 Congress Avenue, Floor 14\nAustin, TX 78701',
  },
  {
    city: 'Hyderabad',
    country: 'INDIA',
    addr: 'Mindspace IT Park, Building 12\nHyderabad, Telangana 500081',
  },
  {
    city: 'Manila',
    country: 'PHILIPPINES',
    addr: 'BGC Corporate Center, Tower 2\nBonifacio Global City 1634',
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
          <div className={s.crumb}>
            <Link href="/">Home</Link> / Contact
          </div>
          <span className={s.eyebrow}>Talk to Solveye</span>
          <h1>Real humans. Fast replies.</h1>
          <p className={s.lead}>
            Whether you want a 30-minute demo, a free 90-day AR audit, or just have a question
            about HIPAA — pick a channel below and we&rsquo;ll get back to you within one business
            day.
          </p>
        </div>
      </section>

      {/* ===== MAIN GRID ===== */}
      <section className={s.mainGrid}>
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
