import type { Metadata } from 'next'
import Link from 'next/link'
import JobBoard, { type Job } from './JobBoard'
import AnimatedNumber from '@/components/AnimatedNumber'
import SubmitResumeModal from '@/components/careers/SubmitResumeModal'
import s from './page.module.scss'

export const metadata: Metadata = {
  title: 'Careers — Solveye',
  description:
    "Join Solveye's healthcare RCM team. Open roles in medical billing, coding, AR recovery, engineering & customer success — Philadelphia, Austin, Hyderabad, Manila & remote.",
  alternates: {
    canonical: 'https://www.solveye.com/careers',
  },
  robots: 'index,follow',
}

const REASONS = [
  {
    title: 'Real ownership, on day one',
    desc: "You own a customer's outcome, not a piece of a process. Your name is on the scorecard.",
  },
  {
    title: 'Actual career ladders',
    desc: 'Documented levels, transparent comp bands, sponsored certifications (CPC, CCS, RHIA, CRCR), and twice-a-year promotion cycles.',
  },
  {
    title: 'Comp tied to outcomes',
    desc: "Every pod member sees their pod's quarterly bonus pool. We don't pay for activity; we pay for results.",
  },
  {
    title: 'Rest is non-negotiable',
    desc: 'Four-week minimum PTO, paid mental health leave, no after-hours expectations. Tired people make compliance mistakes.',
  },
  {
    title: 'Work that matters',
    desc: 'Every dollar we recover is a dollar a clinic uses to take care of patients. Boring on the surface, meaningful underneath.',
  },
]

const BENEFITS = [
  {
    title: 'Premium health',
    desc: 'Medical, dental, vision — 100% employer-paid for employee, 80% for dependents. PPO and HDHP options.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: '4-week minimum PTO',
    desc: 'Plus 12 paid holidays, sick leave, bereavement, and a sabbatical at year 5 (4 paid weeks).',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: '401(k) + 6% match',
    desc: 'Vested immediately. No waiting period. Plus profit-sharing bonus pool tied to company performance.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Mental health',
    desc: 'Headspace, Spring Health, and 12 fully-paid therapy sessions per year. Mental health leave is paid like sick leave.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: 'Family leave',
    desc: '16 weeks fully paid for primary caregivers, 8 weeks for secondary. Plus a 2-week ramp-back at full salary.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
  },
  {
    title: 'Learning stipend',
    desc: '$2,500/yr for certifications, conferences, books, courses. CPC, CCS, RHIA, CRCR fully sponsored.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: 'WFH stipend',
    desc: '$1,000 home office setup on hire. $75/mo internet & utilities. Yearly upgrade budget.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="13" width="20" height="8" rx="1" />
        <path d="M5 13V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6" />
        <circle cx="12" cy="6" r="2" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Equity',
    desc: 'Stock options for every full-time hire. Refreshes at every promotion. 4-year vest, 1-year cliff.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="3" x2="12" y2="21" />
        <path d="M3 7h2c2 0 4.5-1 7-1s5 1 7 1h2" />
        <path d="M9 21h6" />
        <path d="m2 10 3 6a3 3 0 0 0 6 0l-3-6" />
        <path d="m13 10 3 6a3 3 0 0 0 6 0l-3-6" />
      </svg>
    ),
  },
  {
    title: 'SolveCon retreat',
    desc: 'Annual all-company retreat. Three days, one city, no agenda after 5pm. 2025: New Orleans. 2026: Lisbon.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Wellness benefit',
    desc: '$100/mo for gym, fitness apps, ergonomics, or mental wellness — your choice, no receipts required.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 10c0-1.66-1.34-3-3-3S6 8.34 6 10c0 2.5 3.5 5.5 6 7.32C14.5 15.5 18 12.5 18 10c0-1.66-1.34-3-3-3s-3 1.34-3 3z" />
        <path d="M8 18c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2" />
        <path d="M6 20h12" />
      </svg>
    ),
  },
  {
    title: 'Tuition reimbursement',
    desc: 'Up to $5,250/yr for accredited degree programs in healthcare, business, or computer science.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Volunteer time',
    desc: '2 paid volunteer days/yr + $500 charitable donation match. Many pods volunteer together.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
]

const PROCESS = [
  {
    n: '01',
    title: 'Application review',
    desc: 'Resume read by a human (no ATS keyword filter). Reply within 5 business days.',
  },
  {
    n: '02',
    title: 'Recruiter chat',
    desc: '30 min. Background, motivations, comp expectations. We answer your questions too.',
  },
  {
    n: '03',
    title: 'Hiring manager',
    desc: "45 min. Role-specific work-style conversation with the person you'd report to.",
  },
  {
    n: '04',
    title: 'Work sample',
    desc: 'Real, paid, time-boxed (2–4 hr). No homework that benefits us.',
  },
  {
    n: '05',
    title: 'Final round',
    desc: '2–3 conversations on the same day. Decision and offer within 48 hours.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      "I came to Solveye as a junior coder. Three years later I'm leading the cardiology pod and just finished my CCS-P with the company paying for it. The career ladder is real.",
    name: 'Linh Nguyen',
    title: 'Senior Coding Lead · Hyderabad',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      "What surprised me most: leadership actually takes the principle docs seriously. When something breaks, we write the runbook before we move on. That's rare.",
    name: 'Marcus Thompson',
    title: 'Staff Engineer · Remote (Atlanta)',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      "After eight years in healthcare BPOs, this is the first place I've worked where 'mandatory PTO' actually meant mandatory. Burned out twice in past jobs. Not here.",
    name: 'Priya Iyer',
    title: 'AR Pod Lead · Manila',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
  },
]

const JOBS: Job[] = [
  {
    id: 'srbiller',
    title: 'Senior Medical Biller — Cardiology',
    dept: 'Operations',
    loc: 'Hyderabad, India',
    type: 'Full-time',
    comp: '₹9–14 LPA',
    level: 'Senior (4+ yrs)',
    summary:
      'Lead a billing pod for a multi-state cardiology customer. Own claim creation, scrubbing, submission, and denial workdown end-to-end.',
    do: [
      'Manage daily claim queue across 4 sub-specialties',
      'Resolve high-complexity denials and underpayments',
      'Mentor 2–3 junior billers in your pod',
      'Run weekly KPI review with the customer',
    ],
    need: [
      '4+ years US medical billing, ideally cardiology or surgical',
      'Deep familiarity with CMS, Aetna, UHG, BCBS',
      'CPB or equivalent (CPC bonus)',
      'Comfortable inside Epic and athenahealth',
    ],
    bonus: [
      'CPMA or CCS-P',
      'Past pod-lead or supervisor experience',
      'Working knowledge of EP procedure billing',
    ],
  },
  {
    id: 'coder',
    title: 'Medical Coder — HCC / Risk Adjustment',
    dept: 'Operations',
    loc: 'Hyderabad or Manila',
    type: 'Full-time',
    comp: 'Local market + bonus',
    level: 'Mid (2–4 yrs)',
    summary:
      'Code HCC and risk-adjustment charts for value-based-care customers. NLP-assisted workflow with senior reviewer support.',
    do: [
      'Code 80–110 charts/day with 95%+ accuracy',
      'Flag documentation gaps for clinician feedback',
      'Participate in weekly inter-rater reliability',
      'Pursue CRC certification (sponsored)',
    ],
    need: [
      'CPC required; CRC strongly preferred',
      '2+ years HCC or risk adjustment coding',
      'Understanding of CMS-HCC v24/v28 models',
      'Experience with chart review tools (Optum, Edifecs, etc.)',
    ],
    bonus: [
      'Experience with retrospective and prospective programs',
      'AHIMA CCS',
      'Spanish bilingual',
    ],
  },
  {
    id: 'aranalyst',
    title: 'AR Analyst — Denial Recovery',
    dept: 'Operations',
    loc: 'Manila, Philippines',
    type: 'Full-time',
    comp: 'PHP 55K–80K + bonus',
    level: 'Mid (2+ yrs)',
    summary:
      'Work down aged AR for a portfolio of mid-size hospital customers. Triage by recoverability, file appeals, and feed root-cause data back to billing.',
    do: [
      'Triage and work daily denial queue (90+ days)',
      'Draft and file payer-specific appeals',
      'Coordinate peer-to-peer scheduling for medical necessity denials',
      'Maintain denial taxonomy and feedback loop',
    ],
    need: [
      '2+ years US healthcare AR/denial experience',
      'Strong English written communication (appeal letters)',
      'Familiarity with payer portals: Availity, UHC, BCBS',
      'Detail orientation and persistent follow-through',
    ],
    bonus: [
      'CRCR certification',
      'Hospital outpatient appeal experience',
      'Comfort with SQL or Excel pivots',
    ],
  },
  {
    id: 'sweng',
    title: 'Senior Software Engineer — Platform',
    dept: 'Engineering',
    loc: 'Remote (US)',
    type: 'Full-time',
    comp: '$160K–210K + equity',
    level: 'Senior (5+ yrs)',
    summary:
      'Build the internal platform our pods run on: claim workflow, denial triage, dashboards, and EHR integrations. Stack: TypeScript, Postgres, AWS, Temporal.',
    do: [
      'Own a major platform domain end-to-end',
      'Design and ship features with operations as primary user',
      'Build EHR integrations (FHIR, HL7v2, custom APIs)',
      'Mentor 1–2 mid-level engineers',
    ],
    need: [
      '5+ years building production systems in TypeScript or Go',
      'Strong relational database fundamentals',
      'Comfort with high-trust operational tools (audit logs, RBAC, BAA-grade infra)',
      'Pragmatic over dogmatic',
    ],
    bonus: [
      'Healthcare or fintech background',
      'Experience with HL7v2, FHIR, or X12 EDI',
      'Hands-on with Temporal, Inngest, or similar workflow engines',
    ],
  },
  {
    id: 'sec',
    title: 'Security Engineer — Compliance',
    dept: 'Engineering',
    loc: 'Philadelphia or Austin',
    type: 'Full-time',
    comp: '$155K–195K + equity',
    level: 'Senior (5+ yrs)',
    summary:
      'Run our SOC 2, HITRUST, and ISO 27001 evidence pipelines. Help engineering ship securely without slowing them down.',
    do: [
      'Operate the evidence-collection pipeline for SOC 2 and HITRUST',
      'Lead annual auditor walkthroughs',
      'Design RBAC and audit logging for new product surfaces',
      'Coordinate quarterly access reviews',
    ],
    need: [
      '5+ years applied security engineering',
      'Hands-on SOC 2, HIPAA, HITRUST, or ISO 27001',
      'AWS/GCP cloud security fundamentals',
      'You can write a runbook AND a Terraform module',
    ],
    bonus: [
      'CISSP, CCSP, or AWS Security Specialty',
      'Healthcare compliance background',
      'Past experience as the "first security hire"',
    ],
  },
  {
    id: 'csm',
    title: 'Customer Success Manager — Hospital Accounts',
    dept: 'Customer Success',
    loc: 'Remote (US)',
    type: 'Full-time',
    comp: '$110K–145K + bonus',
    level: 'Mid–Senior (4+ yrs)',
    summary:
      'Own the relationship for 6–8 mid-size hospital customers. Translate operational performance into business outcomes their CFO cares about.',
    do: [
      'Run weekly and quarterly business reviews with finance leaders',
      'Coordinate with pod leads to triage escalations',
      'Identify expansion opportunities (additional services, specialties)',
      'Own renewal and reference management',
    ],
    need: [
      '4+ years healthcare CSM, RCM, or consulting',
      'Comfort presenting to CFO/COO audiences',
      'Ability to read a denial report and tell a story',
      'High emotional intelligence under operational stress',
    ],
    bonus: [
      'Background as a former hospital revenue cycle leader',
      'CRCR or similar credential',
      'Experience with QBR frameworks at scale',
    ],
  },
  {
    id: 'recruiter',
    title: 'Senior Recruiter — Coding & Billing',
    dept: 'People',
    loc: 'Hyderabad, India',
    type: 'Full-time',
    comp: '₹14–22 LPA',
    level: 'Senior (5+ yrs)',
    summary:
      'Lead hiring for our largest functions: coding, billing, AR. Build a sourcing engine that is faster than the market and kinder than the market.',
    do: [
      'Own full-cycle hiring across 3–4 functions',
      'Build proactive talent pools by specialty',
      'Run debrief and decision meetings',
      'Coach hiring managers on interview craft',
    ],
    need: [
      '5+ years US healthcare BPO recruiting',
      'Track record hiring volume without dropping the candidate experience',
      'Strong sourcing fundamentals (Boolean, LinkedIn Recruiter, networks)',
      'Calm, organized, candidate-first',
    ],
    bonus: [
      'Past in-house at an RCM or BPO at scale',
      'Experience hiring across India + Philippines',
      'Familiarity with Greenhouse or Ashby',
    ],
  },
]

const Check = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function CareersPage() {
  return (
    <>
      {/* ===== 1. HERO ===== */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.crumb}>
            <Link href="/">Home</Link> / Careers
          </div>

          <div className={s.heroGrid}>
            <div>
              <span className={s.eyebrow}>Careers at Solveye</span>
              <h1>
                Ready To Make
                <br />
                An Impact?
              </h1>
              <p className={s.lead}>
                Join our team and embark on a journey full of learning,
                ownership, and meaningful work in healthcare. We&rsquo;re
                hiring billers, coders, engineers, and AR specialists across
                Philadelphia, Austin, Hyderabad, Manila, and remote.
              </p>
              <div className={s.heroCta}>
                <SubmitResumeModal />
                <a href="#roles" className={s.btnSecondary}>
                  See open positions
                </a>
              </div>
            </div>

            <div className={s.portraits}>
              <div className={s.deco} aria-hidden="true" />
              <div className={s.deco2} aria-hidden="true" />

              <div className={`${s.floater} ${s.f1}`}>
                <span className={s.dot} aria-hidden="true" />
                <div>
                  <strong>7 roles open</strong>
                  <span className={s.sub}>across 5 locations</span>
                </div>
              </div>

              <div className={`${s.floater} ${s.f2}`}>
                <div className={s.iconBubble} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <strong>94% recommend</strong>
                  <span className={s.sub}>on Glassdoor</span>
                </div>
              </div>

              <div className={`${s.arch} ${s.a1}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Picture/careers/header-pic-1.jpg"
                  alt="Solveye team member"
                />
              </div>
              <div className={`${s.arch} ${s.a2}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Picture/careers/header-pic-2.jpg"
                  alt="Solveye team member"
                />
              </div>
              <div className={`${s.arch} ${s.a3}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Picture/careers/header-pic-3.jpg"
                  alt="Solveye team member"
                />
              </div>
            </div>
          </div>

          <div className={s.strip}>
            <div>
              <strong><AnimatedNumber value="1,247" /></strong>
              <span className={s.kpiLabel}>Team members</span>
              </div>
                <div>
                  <strong><AnimatedNumber value="87%" /></strong>
                  <span className={s.kpiLabel}>Internal mobility (3-yr avg)</span>
                </div>
                <div>
                  <strong><AnimatedNumber value="94%" /></strong>
                  <span className={s.kpiLabel}>Glassdoor recommend rate</span>
                </div>
                <div>
                  <strong><AnimatedNumber value="4 weeks" /></strong>
                  <span className={s.kpiLabel}>Minimum PTO</span>
                </div>
            </div>
        </div>
      </section>

      {/* ===== 2. WHY JOIN ===== */}
      <section id="why" className={s.sectionLight}>
        <div className="container">
          <div className={s.whyGrid}>
            <div className={s.whyImg} />
            <div>
              <span className={s.eyebrow}>Why join us</span>
              <h2>Five Reasons People Stay Seven Years.</h2>
              <p>
                Median tenure at Solveye is 4.2 years — twice the BPO industry
                average. Here&rsquo;s what people tell us in exit interviews
                (when they happen).
              </p>
              <ul className={s.whyList}>
                {REASONS.map((r) => (
                  <li key={r.title}>
                    <span className={s.check}>
                      <Check />
                    </span>
                    <div>
                      <strong>{r.title}</strong>
                      <p>{r.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. BENEFITS ===== */}
      <section className={s.sectionAlt}>
        <div className="container">
          <div className={s.hpIntro}>
            <span className={s.eyebrow}>Benefits &amp; perks</span>
            <h2>The Whole Package, Not Just The Headline.</h2>
            <p className={s.lead}>
              Benefits vary slightly by location and employment type. Below is
              the US full-time package; international hubs are equivalent in
              local market.
            </p>
          </div>

          <div className={s.benGrid}>
            {BENEFITS.map((b) => (
              <article key={b.title} className={s.ben}>
                <div className={s.ic}>{b.icon}</div>
                <h5>{b.title}</h5>
                <p>{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. OPEN ROLES (client) ===== */}
      <section id="roles" className={s.section}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>Open roles</span>
              <h2>{JOBS.length} Open Roles Right Now.</h2>
            </div>
          </div>

          <JobBoard jobs={JOBS} />
        </div>
      </section>

      {/* ===== 5. HIRING PROCESS ===== */}
      <section className={s.sectionAlt}>
        <div className="container">
          <div className={s.hpIntro}>
            <span className={s.eyebrow}>Hiring process</span>
            <h2>Five Steps. Roughly Three Weeks. No Surprises.</h2>
            <p className={s.lead}>
              We tell you the steps, the rough timeline, and what we&rsquo;re
              looking for in each one. If we go silent, we&rsquo;re failing —
              please email{' '}
              <a href="mailto:talent@solveye.health">
                talent@solveye.health
              </a>
              .
            </p>
          </div>

          <div className={s.hpGrid}>
            {PROCESS.map((p) => (
              <article key={p.n} className={s.hpCard}>
                <div className={s.num}>Step {p.n}</div>
                <h5>{p.title}</h5>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. VOICES / TESTIMONIALS ===== */}
      <section className={s.sectionLight}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>Voices from the team</span>
              <h2>In Their Own Words.</h2>
            </div>
          </div>

          <div className={s.testiGrid}>
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className={s.testi}>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <cite>
                  <div
                    className={s.av}
                    style={{ backgroundImage: `url('${t.avatar}')` }}
                    aria-hidden="true"
                  />
                  <div>
                    <div className={s.nm}>{t.name}</div>
                    <div className={s.ti}>{t.title}</div>
                  </div>
                </cite>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. CTA ===== */}
      <section className={s.ctaWrap}>
        <div className="container">
          <div className={s.ctaBand}>
            <div>
              <h2>Don&rsquo;t See The Right Role?</h2>
              <p>
                Send us a note anyway. We&rsquo;re always open to talented
                coders, billers, and engineers — even if the listing isn&rsquo;t
                up yet.
              </p>
            </div>
            <div className={s.ctaButtons}>
              <SubmitResumeModal
                label={<>Send us your resume <span className={s.arrow}>&rarr;</span></>}
                triggerClass={s.ctaBtnLight}
              />
              <Link href="/about" className={s.ctaBtnOutline}>
                Read about our culture
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
