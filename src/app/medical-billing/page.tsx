import type { Metadata } from 'next'
import Link from 'next/link'
import Faq from './Faq'
import AnimatedNumber from '@/components/AnimatedNumber'
import s from './page.module.scss'

export const metadata: Metadata = {
  title: 'Medical Billing — Solveye',
  description:
    'End-to-end medical billing run by named pods: claim creation, scrubbing, submission, posting, and denial workdown. 98.4% first-pass clean rate, 28-day AR target.',
}

const BENEFITS = [
  {
    num: '+32%',
    title: 'Higher net collection rate',
    desc: 'The average Solveye customer recovers 32% more of contractually-owed revenue within 90 days.',
  },
  {
    num: '28 days',
    title: 'Lower days in AR',
    desc: "Pods work to a 28-day target. Claims aren't sitting; they're either being paid or being appealed.",
  },
  {
    num: '98.4%',
    title: 'First-pass clean rate',
    desc: 'Pre-submission scrubbing catches 98% of errors before the claim ever leaves the clearinghouse.',
  },
  {
    num: '-65%',
    title: 'Denial volume',
    desc: 'A closed-loop denial taxonomy feeds back into coding and front-end intake to prevent recurrence.',
  },
  {
    num: '-40%',
    title: 'Billing cost as % of NPR',
    desc: 'Replace fragmented vendors with one accountable pod and watch billing overhead come down.',
  },
  {
    num: '15 min',
    title: 'Real-time visibility',
    desc: "Your KPIs update every 15 minutes. No more waiting until the 10th of next month for last month's reality.",
  },
]

const PROCESS = [
  {
    n: '01',
    title: 'Charge capture & coding',
    desc: 'Encounters flow from your EHR into our queue.',
    items: ['NLP-assisted code review', 'Modifier validation', 'Specialty-specific edits'],
  },
  {
    n: '02',
    title: 'Claim scrubbing',
    desc: 'Pre-submission edits across payer, plan, and CMS rules.',
    items: ['1,400+ rule library', 'Eligibility re-check', 'Auth verification'],
  },
  {
    n: '03',
    title: 'Electronic submission',
    desc: 'EDI 837 to clearinghouse, with same-day acknowledgement tracking.',
    items: [
      'Primary, secondary, tertiary',
      'Paper claims when required',
      'Acknowledgement reconciliation',
    ],
  },
  {
    n: '04',
    title: 'Payment posting',
    desc: 'ERA & EOB posting, with adjustment audits.',
    items: ['835 auto-posting', 'Manual EOB posting', 'Underpayment flagging'],
  },
  {
    n: '05',
    title: 'Denial workdown',
    desc: 'Triaged by recoverability, not just age.',
    items: [
      'Payer-specific appeal templates',
      'Peer-to-peer support',
      'Root-cause feedback to step 1',
    ],
  },
  {
    n: '06',
    title: 'Patient responsibility',
    desc: 'Statements, plans, and respectful follow-up.',
    items: ['Plain-English statements', 'Pay-by-text & email', 'Hardship & plan workflows'],
  },
]

const FAQ = [
  {
    q: 'How long does onboarding take?',
    a: 'Most practices are live in 21–30 days. Week 1 is EHR connectivity and pod assignment, weeks 2–3 are parallel billing and audit, week 4 is full cutover with daily check-ins.',
  },
  {
    q: 'Do we keep our existing PM/EHR?',
    a: 'Yes. We work natively inside Epic, Cerner, athenahealth, eClinicalWorks, NextGen, Kareo, AdvancedMD, and 20+ others. We do not require a platform migration.',
  },
  {
    q: 'How is pricing structured?',
    a: 'Two models: a percentage of net collections (typically 4–7%, depending on volume and specialty), or a transparent per-claim fee. Most practices choose percent-of-collections — we win when you win.',
  },
  {
    q: 'Who actually does the work?',
    a: "A named pod assigned to your account: a billing lead, two senior billers, a coder, an AR analyst, and a customer success manager. They sit on a US-aligned shift and you'll meet them on day one.",
  },
  {
    q: 'How do you handle PHI and HIPAA?',
    a: 'SOC 2 Type II re-attested annually, HITRUST r2 certified, BAAs in place with every customer and subcontractor, role-based access, and audit logging on every chart access. Full compliance documentation is shared during diligence.',
  },
  {
    q: 'Can we audit your work?',
    a: "Yes — and we encourage it. You get full read access to our platform, including every claim's lifecycle. We also run quarterly internal coding audits and share the results with you.",
  },
  {
    q: "What happens if we're not seeing results?",
    a: "Contracts include a 90-day performance review. If pre-agreed KPIs (clean rate, days in AR, net collection lift) aren't trending in the right direction, you can exit without penalty.",
  },
]

export default function MedicalBillingPage() {
  return (
    <>
      {/* ===== 1. HERO ===== */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.crumb}>
            <Link href="/">Home</Link> /{' '}
            <Link href="/services">Services</Link> / Medical Billing
          </div>

          <div className={s.heroGrid}>
            <div>
              <span className={s.eyebrow}>Service &middot; Medical Billing</span>
              <h1>Get every cleanly-billed claim paid the first time.</h1>
              <p className={s.lead}>
                Our billing pods run claim creation, scrubbing, submission,
                posting, and denial workdown end-to-end. You see the same
                dashboard we do — every charge, every claim, every dollar —
                refreshed in 15 minutes.
              </p>
              <div className={s.heroCta}>
                <Link href="/contact#demo" className={s.btnPrimary}>
                  Book a demo <span className={s.arrow}>&rarr;</span>
                </Link>
                <Link href="#process" className={s.btnSecondary}>
                  See how it works
                </Link>
              </div>
            </div>

            <div className={s.heroImg} role="img" aria-label="Medical billing illustration" />
          </div>
        </div>
      </section>

      {/* ===== 2. BENEFITS ===== */}
      <section className={s.section}>
        <div className="container">
          <div className={s.secHead}>
            <span className={s.eyebrow}>What it delivers</span>
            <h2>More cash, faster — with less headcount.</h2>
          </div>

          <div className={s.benefits}>
            {BENEFITS.map((b) => (
              <article key={b.title} className={s.benefit}>
                <strong className={s.num}>
                  <AnimatedNumber value={b.num} />
                </strong>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. PROCESS ===== */}
      <section id="process" className={s.process}>
        <div className="container">
          <span className={s.eyebrow}>How it works</span>
          <h2>A six-step revenue cycle, run on your behalf.</h2>
          <p className={s.lead}>
            Each step is owned by a named member of your pod. Hand-offs are
            tracked in our platform; you can audit every transition.
          </p>

          <div className={s.procGrid}>
            {PROCESS.map((step) => (
              <article key={step.n} className={s.procStep}>
                <div className={s.num}>Step {step.n}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                <ul>
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. FAQ ===== */}
      <section className={s.faqSection}>
        <div className={s.faqInner}>
          <span className={s.eyebrow}>FAQ</span>
          <h2>Common questions from billing managers.</h2>
          <Faq items={FAQ} />
        </div>
      </section>

      {/* ===== 5. CTA ===== */}
      <section className={s.sectionSm}>
        <div className="container">
          <div className={s.ctaBand}>
            <div>
              <h3>See your numbers, modeled.</h3>
              <p>
                Send us 90 days of claim data and we&rsquo;ll model the
                recovery opportunity, denial breakdown, and likely AR reduction
                — typically within five business days.
              </p>
            </div>
            <div className={s.ctaButtons}>
              <Link href="/contact#demo" className={s.ctaBtnLight}>
                Get my model <span className={s.arrow}>&rarr;</span>
              </Link>
              <Link href="/services" className={s.ctaBtnOutline}>
                All services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
