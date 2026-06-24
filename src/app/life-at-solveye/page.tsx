import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedNumber from '@/components/AnimatedNumber'
import Timeline from './Timeline'
import s from './page.module.scss'

export const metadata: Metadata = {
  title: 'Life at Solveye — Culture & a Typical Week',
  description:
    "Inside Solveye's healthcare BPO culture: pod teams, no-meeting focus blocks, weekly demos & 92% team satisfaction. See what a day and first year really look like.",
  alternates: {
    canonical: 'https://www.solveye.com/life-at-solveye',
  },
  robots: 'index,follow',
}

const KPI_STRIP = [
  { value: '92%', suffix: null,   label: 'Would recommend' },
  { value: '4.7', suffix: '/5',   label: 'Glassdoor' },
  { value: '3.8', suffix: ' yrs', label: 'Avg tenure' },
  { value: '87%', suffix: null,   label: 'Internal promotions' },
]

const VALUES = [
  {
    n: '01 / 04',
    title: 'Bias toward the smallest fix.',
    desc: 'If a 2-step change unblocks a client today, ship that — and write the 6-step long-term fix into next sprint. Slow, "right" solutions cost more than ugly, fast ones that get refactored.',
  },
  {
    n: '02 / 04',
    title: 'Bring receipts.',
    desc: 'We argue from numbers, not narratives. Every claim, every dashboard, every QBR has a source-of-truth link. Opinions are welcome — but they don\'t get to override data.',
  },
  {
    n: '03 / 04',
    title: 'The work is human.',
    desc: 'A denied claim is somebody\'s MRI. A late call is somebody\'s afternoon. We talk about clients and patients by name in QBRs, not as account IDs. It changes how the work feels.',
  },
  {
    n: '04 / 04',
    title: 'Disagree, then commit.',
    desc: "Anyone can challenge anything in a meeting. Once a decision lands, we move as one team. We don't relitigate in Slack and we don't ghost-execute the opposite plan.",
  },
]

const RITUALS = [
  {
    when: 'Weekly · Thursday 4:30 PM',
    title: 'All-hands demo',
    body: 'Every pod, 5 minutes, real work in real hands. Leadership watches. No slides without a live screen behind them.',
  },
  {
    when: 'Monthly · First Friday',
    title: 'Skip-level coffee',
    body: 'Every teammate gets a 30-minute coffee with someone two levels up, once a quarter. Calendar-scheduled, no agenda. Just talk.',
  },
  {
    when: 'Monthly · Last Wednesday',
    title: '"Bad week" share',
    body: 'One leader walks through a recent failure — what broke, what they learned, what they\'d do again. Helps de-armor everyone else.',
  },
  {
    when: 'Quarterly · Off-site',
    title: 'Pod retro & planning',
    body: 'Each pod takes 1.5 days off-site to review the quarter (what worked, what didn\'t) and lock the next 90 days. Always pod-led, never HR-led.',
  },
  {
    when: 'Quarterly · Town hall',
    title: 'Numbers, naked',
    body: 'Revenue, runway, churn, NPS, hiring plan, biggest open risks. CEO presents. Q&A runs until questions stop, not until time runs out.',
  },
  {
    when: 'Annual · December',
    title: 'Promotion week',
    body: 'One full week, every promotion in the company, written up and presented to the full leadership team. Public, transparent, no surprises.',
  },
]

const COLLAGE = [
  { url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80', tall: true },
  { url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80' },
  { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80' },
  { url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=700&q=80' },
  { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80' },
]

const PERKS = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z"/></svg>,
    title: 'Health that covers the whole house',
    desc: 'Family floater up to ₹10 lakh including parents, day-one. Outpatient + dental + mental health. No riders, no exclusions on pre-existing.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    title: '4 weeks PTO, minimum',
    desc: '20 days off + 10 holidays + your birthday. Not a "discretionary" policy. We enforce it — managers can\'t approve under 4 weeks taken.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
    title: 'Learning budget — paid time, paid course',
    desc: '₹50,000 per year, plus 8 working hours per month carved out for it. Use it for certifications, conferences, a course your manager hasn\'t heard of.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18M3 12h18M3 17h12"/></svg>,
    title: 'Hybrid, not theatrical',
    desc: '2 days in office, 3 from home. We picked the days (Tue/Thu) so collaboration lands together. The other 3 are genuinely flexible — no surprise office days, no manager guilt-tripping.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11H1l8-8 8 8h-8z"/><path d="M9 11v10"/></svg>,
    title: 'Maternity & paternity that mean it',
    desc: '6 months maternity, 12 weeks paternity, fully paid. Plus a guaranteed 4-day week for the first 90 days back. Not a perk — a re-onboarding ramp.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8a6 6 0 0 1-3.7 5.7"/><path d="M14 14l4 4"/></svg>,
    title: 'Stock for everyone',
    desc: 'Every full-time teammate gets equity from day 90. It\'s not life-changing for entry-level — but it\'s real, vests over 4 years, and we explain the math at orientation.',
  },
]

export default function LifeAtSolveyePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.heroGrid}>

            {/* Left: text */}
            <div className={s.heroLeft}>
              <div className={s.crumb}>
                <Link href="/">Home</Link> / Life at Solveye
              </div>
              <span className={s.eyebrow}>Culture &amp; rhythm</span>
              <h1>Life At Solveye Isn&rsquo;t A Vibe. It&rsquo;s A Rhythm.</h1>
              <p className={s.lead}>
                We move in cycles — daily standups that actually clear blockers, weekly demos that show real work,
                quarterly retros that close loops. Most teammates can describe their week before it starts. That&rsquo;s
                not boring. That&rsquo;s how 1,200+ specialists ship for 480+ clients without burning out.
              </p>
              <div className={s.heroCta}>
                <Link href="/careers#roles" className={s.btnPrimary}>
                  Drop Your Resume <span className={s.arrow}>&rarr;</span>
                </Link>
                <Link href="/contact#form" className={s.btnSecondary}>
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right: team photo */}
            <div className={s.heroPhoto}>
              <Image fill src="/Picture/header-life-atsolveye.jpg" alt="Life at Solveye" style={{ objectFit: 'cover' }} priority />
            </div>

          </div>

          {/* Stats strip — full width below the grid */}
          <div className={s.strip}>
            {KPI_STRIP.map((kpi) => (
              <div key={kpi.label} className={s.stripItem}>
                <div className={s.statNum}>
                  <AnimatedNumber value={kpi.value} />
                  {kpi.suffix && <span className={s.statDenom}>{kpi.suffix}</span>}
                </div>
                <div className={s.statLabel}>{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE (client) ===== */}
      <Timeline />

      {/* ===== VALUES ===== */}
      <section className={s.values}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>What we hire for</span>
              <h2>Four Operating Principles, Written In Plain English.</h2>
            </div>
          </div>

          <div className={s.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.n} className={s.value}>
                <span className={s.valueNum}>{v.n}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RITUALS (dark glass) ===== */}
      <section className={s.rituals}>
        <div className="container">
          <span className={s.eyebrow}>Rituals</span>
          <h2>The Handful Of Things We Do — Every Time, Without Fail.</h2>
          <p className={s.lead}>
            Culture is what you actually do, repeatedly. These six rituals show up on every calendar, every quarter.
          </p>

          <div className={s.ritualsGrid}>
            {RITUALS.map((r) => (
              <div key={r.title} className={s.ritual}>
                <span className={s.ritualWhen}>{r.when}</span>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHOTO COLLAGE ===== */}
      <section className={s.collage}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>Around the office</span>
              <h2>A Few Moments From The Last Quarter.</h2>
            </div>
          </div>
          <div className={s.colGrid}>
            {COLLAGE.map((img, i) => (
              <div
                key={i}
                className={`${s.colImg} ${img.tall ? s.colTall : ''}`}
                style={{ backgroundImage: `url('${img.url}')` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== PERKS ===== */}
      <section className={s.perks}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>Practical stuff</span>
              <h2>The Benefits We Lead With — Because They Actually Matter.</h2>
            </div>
          </div>

          <div className={s.perksGrid}>
            {PERKS.map((perk) => (
              <div key={perk.title} className={s.perk}>
                <div className={s.perkIcon}>{perk.icon}</div>
                <div>
                  <h4>{perk.title}</h4>
                  <p>{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className={s.testimonial}>
        <div className="container">
          <div className={s.testiGrid}>
            <div>
              <span className={s.eyebrow}>In their words</span>
              <h2>Real Voices.</h2>
              <blockquote className={s.quote}>
                &ldquo;I came in expecting a typical BPO. What I got was a place where my pod lead asked me — on day
                three — what I thought about a workflow change. I&rsquo;d been there 72 hours. The change shipped two
                weeks later, mostly the way I&rsquo;d argued for it.&rdquo;
              </blockquote>
              <cite className={s.cite}>
                <strong>Priya Subramaniam</strong>
                Senior Specialist, AR Recovery · 2.5 years at Solveye
              </cite>
            </div>
            <div className={s.testiPhoto} />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={s.ctaWrap}>
        <div className="container">
          <div className={s.ctaBand}>
            <div>
              <h2>If This Feels Like The Rhythm You&rsquo;re Looking For —</h2>
              <p>
                We&rsquo;re hiring across ops, engineering, clinical, and go-to-market. Open roles update weekly.
              </p>
            </div>
            <div className={s.ctaButtons}>
              <Link href="/careers#roles" className={s.ctaBtnLight}>
                See open roles <span className={s.arrow}>&rarr;</span>
              </Link>
              <Link href="/training-workshops" className={s.ctaBtnOutline}>
                How we train people
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
