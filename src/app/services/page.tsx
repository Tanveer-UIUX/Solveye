import type { Metadata } from 'next'
import Link from 'next/link'
import Subnav from './Subnav'
import AnimatedNumber from '@/components/AnimatedNumber'
import s from './page.module.scss'

export const metadata: Metadata = {
  title: 'Services — Solveye',
  description:
    'Full-cycle healthcare RCM services: medical billing, coding, credentialing, AR recovery, prior auth & analytics — delivered by specialist pods for clinics & hospitals.',
  alternates: {
    canonical: 'https://www.solveye.com/services',
  },
  robots: 'index,follow',
}

interface Service {
  id: string
  num: string
  title: string
  lead: string
  features: string[]
  kpis: { num: string; label: string }[]
  img: string
  cta: { href: string; label: string; style: 'primary' | 'link' }
}

const SERVICES: Service[] = [
  {
    id: 'billing',
    num: 'Service 01 / 08',
    title: 'Medical Billing',
    lead: 'Charge entry, claim scrubbing, electronic submission, payment posting, and denial workdown — managed end-to-end by a billing pod that knows your specialty.',
    features: [
      '837/835 EDI submissions',
      'Real-time claim scrubbing',
      'ERA & EOB posting',
      'Secondary & tertiary claims',
      'Refund & adjustment audits',
      'Patient responsibility reconciliation',
    ],
    kpis: [
      { num: '98.4%', label: 'First-pass clean rate' },
      { num: '28 days', label: 'Avg days in AR' },
      { num: '+32%', label: 'Net collection lift' },
    ],
    img: '/Picture/services/medical-billing.jpg',
    cta: { href: '/services', label: 'See full service detail', style: 'primary' },
  },
  {
    id: 'coding',
    num: 'Service 02 / 08',
    title: 'Medical Coding',
    lead: "AAPC- and AHIMA-certified coders for CPT, ICD-10-CM/PCS, HCPCS, HCC, and risk adjustment. Computer-assisted coding tools backed by humans who know your specialty's nuances.",
    features: [
      '30+ specialties supported',
      'CPC, CCS, CRC, CIC certified',
      'HCC & risk adjustment coding',
      'Inpatient & outpatient (E/M, surgery, ancillary)',
      'NLP-assisted chart review',
      '≤24 hr turnaround on 95% of charts',
    ],
    kpis: [
      { num: '99.1%', label: 'Coding accuracy (audited)' },
      { num: '≤ 24 hr', label: 'Chart-to-claim turnaround' },
    ],
    img: '/Picture/services/medical-coding.jpg',
    cta: { href: '/contact', label: 'Talk to a coding lead', style: 'link' },
  },
  {
    id: 'credentialing',
    num: 'Service 03 / 08',
    title: 'Provider Credentialing',
    lead: 'CAQH attestation, payer enrollment, re-credentialing, NPI/PECOS, and Medicare/Medicaid — managed against a tracked SLA so your providers actually start billing on the day you expected.',
    features: [
      'Initial enrollment & re-credentialing',
      'CAQH ProView management',
      'Medicare PECOS, Medicaid, TRICARE',
      'Hospital privileges',
      'License & DEA renewals',
      'Live tracker dashboard per provider',
    ],
    kpis: [
      { num: '52 days', label: 'Avg payer enrollment' },
      { num: '100%', label: 'CAQH attestations on time' },
    ],
    img: '/Picture/services/medical-credentialing.jpg',
    cta: { href: '/contact', label: 'Talk to credentialing', style: 'link' },
  },
  {
    id: 'ar',
    num: 'Service 04 / 08',
    title: 'AR Recovery',
    lead: 'Aged claim follow-up, payer appeals, dispute resolution, and write-off audits. We work down balances older than 90 days with a denial taxonomy that actually prioritizes recoverability.',
    features: [
      'Aged AR triage (90/120/180+)',
      'Payer-specific appeal templates',
      'Underpayment recovery',
      'Write-off & adjustment audits',
      'Denial root-cause feedback loop',
      'Weekly recovery reporting',
    ],
    kpis: [
      { num: '$3.2M', label: 'Avg yr-1 recovery' },
      { num: '-41%', label: 'Days in AR reduction' },
    ],
    img: '/Picture/services/accounts-receivable-recovery.jpg',
    cta: { href: '/contact', label: 'Audit my AR', style: 'link' },
  },
  {
    id: 'priorauth',
    num: 'Service 05 / 08',
    title: 'Prior Authorization & Eligibility',
    lead: "Real-time eligibility checks, benefits verification, and prior auth — for procedures, imaging, infusions, DME, and elective surgery. We handle the phone trees so your front desk doesn't have to.",
    features: [
      'Real-time 270/271 eligibility',
      'Benefit verification with copay/deductible',
      'Prior auth submission & follow-up',
      'Peer-to-peer scheduling support',
      'Auth status alerts to schedulers',
      'Retro-auth recovery',
    ],
    kpis: [
      { num: '2.4 hr', label: 'Median auth turnaround' },
      { num: '96%', label: 'First-attempt approval' },
    ],
    img: '/Picture/services/prior-authorization.jpg',
    cta: { href: '/contact', label: 'Talk to prior auth', style: 'link' },
  },
  {
    id: 'statements',
    num: 'Service 06 / 08',
    title: 'Patient Statements & Collections',
    lead: 'Itemized digital and print statements, payment plans, and respectful early-out collections. Patients understand what they owe and pay sooner — without your team becoming a call center.',
    features: [
      'Plain-English itemized statements',
      'Text & email pay-by-link',
      'Hardship & payment plan workflows',
      'Compassionate early-out outreach',
      'Bad-debt vendor handoff',
      'HSA/FSA receipt generation',
    ],
    kpis: [
      { num: '+47%', label: 'Patient self-service pay' },
      { num: '11 days', label: 'Avg time to patient pay' },
    ],
    img: '/Picture/services/patient-statements.jpg',
    cta: { href: '/contact', label: 'See statements demo', style: 'link' },
  },
  {
    id: 'analytics',
    num: 'Service 07 / 08',
    title: 'Practice Analytics & Reporting',
    lead: 'Live dashboards on collections, denials, AR aging, payer mix, and provider productivity. Everything you used to wait a month for, refreshed every 15 minutes.',
    features: [
      'Real-time KPI dashboards',
      'Payer mix & contract performance',
      'Denial heat map by reason code',
      'Provider productivity (RVU, encounters)',
      'Custom reporting on request',
      'Quarterly business reviews',
    ],
    kpis: [
      { num: '15 min', label: 'Dashboard refresh' },
      { num: '40+', label: 'Pre-built reports' },
    ],
    img: '/Picture/services/practice-analytics.jpg',
    cta: { href: '/contact', label: 'See dashboards', style: 'link' },
  },
  {
    id: 'compliance',
    num: 'Service 08 / 08',
    title: 'Compliance & HIPAA',
    lead: 'Risk assessments, OIG/CMS audit prep, HIPAA training, internal coding audits, and BAA management. Built into every engagement, not sold as an upsell.',
    features: [
      'HIPAA Privacy & Security audits',
      'OIG, RAC, and TPE audit support',
      'Quarterly internal coding audits',
      'Workforce HIPAA training',
      'BAA & subcontractor governance',
      'Incident response runbooks',
    ],
    kpis: [
      { num: 'SOC 2 II', label: 'Annually re-attested' },
      { num: 'HITRUST', label: 'r2 certified' },
    ],
    img: '/Picture/services/compliance-HIPAA.jpg',
    cta: { href: '/contact', label: 'Compliance overview', style: 'link' },
  },
]

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 500 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Insurance verification illustration"
    >
      <defs>
        <linearGradient id="heroBlobGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--se-color-blue-600)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--se-color-teal-500)" stopOpacity="0.16" />
        </linearGradient>

        <linearGradient id="heroShieldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--se-color-blue-500)" />
          <stop offset="100%" stopColor="var(--se-color-blue-700)" />
        </linearGradient>

        <pattern
          id="heroDotPattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.6" fill="var(--se-color-blue-100)" />
        </pattern>

        <filter id="heroCardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#0F172A" floodOpacity="0.14" />
        </filter>

        <filter id="heroBadgeShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#185ED4" floodOpacity="0.32" />
        </filter>

        <filter id="heroChipShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.1" />
        </filter>
      </defs>

      {/* decorative dot grid (top-left) */}
      <rect x="0" y="0" width="180" height="160" fill="url(#heroDotPattern)" opacity="0.65" />

      {/* soft gradient blob (background, top-right) */}
      <ellipse cx="380" cy="170" rx="170" ry="150" fill="url(#heroBlobGrad)" />

      {/* dashed connector (claim → shield) */}
      <path
        d="M280 340 Q330 370 370 400"
        stroke="var(--se-color-blue-400)"
        strokeWidth="2"
        strokeDasharray="5 7"
        fill="none"
        opacity="0.55"
      />

      {/* MAIN CLAIM CARD (tilted) */}
      <g transform="translate(60 95) rotate(-3.5 150 200)" filter="url(#heroCardShadow)">
        <rect width="300" height="380" rx="18" fill="white" />

        {/* card eyebrow */}
        <rect x="24" y="26" width="56" height="6" rx="3" fill="var(--se-color-blue-100)" />
        {/* card title */}
        <rect x="24" y="42" width="200" height="14" rx="4" fill="var(--se-color-blue-900)" />
        {/* card sub */}
        <rect x="24" y="62" width="140" height="8" rx="2" fill="var(--se-color-slate-300)" />

        {/* divider */}
        <line x1="24" y1="92" x2="276" y2="92" stroke="var(--se-color-line)" strokeWidth="1" />

        {/* form field (full) */}
        <g transform="translate(24 108)">
          <rect width="252" height="48" rx="8" fill="var(--se-color-slate-50)" stroke="var(--se-color-line)" strokeWidth="1" />
          <rect x="14" y="12" width="60" height="6" rx="2" fill="var(--se-color-slate-400)" />
          <rect x="14" y="26" width="120" height="10" rx="2" fill="var(--se-color-blue-900)" />
        </g>

        {/* form fields (split) */}
        <g transform="translate(24 168)">
          <rect width="120" height="48" rx="8" fill="var(--se-color-slate-50)" stroke="var(--se-color-line)" strokeWidth="1" />
          <rect x="14" y="12" width="50" height="6" rx="2" fill="var(--se-color-slate-400)" />
          <rect x="14" y="26" width="80" height="10" rx="2" fill="var(--se-color-blue-900)" />

          <rect x="132" y="0" width="120" height="48" rx="8" fill="var(--se-color-slate-50)" stroke="var(--se-color-line)" strokeWidth="1" />
          <rect x="146" y="12" width="50" height="6" rx="2" fill="var(--se-color-slate-400)" />
          <rect x="146" y="26" width="70" height="10" rx="2" fill="var(--se-color-blue-900)" />
        </g>

        {/* VERIFIED pill */}
        <g transform="translate(24 240)">
          <rect width="120" height="32" rx="16" fill="var(--se-color-green-500)" fillOpacity="0.14" />
          <circle cx="18" cy="16" r="8" fill="var(--se-color-green-500)" />
          <path
            d="M14 16 L17 19 L23 12"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <text
            x="34"
            y="20"
            fill="var(--se-color-green-500)"
            fontSize="11"
            fontWeight="700"
            letterSpacing="0.06em"
          >
            VERIFIED
          </text>
        </g>

        {/* CTA button mockup */}
        <g transform="translate(24 290)">
          <rect width="130" height="42" rx="8" fill="var(--se-color-blue-900)" />
          <rect x="20" y="17" width="70" height="8" rx="2" fill="white" fillOpacity="0.9" />
          <path
            d="M104 21 L114 21 M110 17 L114 21 L110 25"
            stroke="white"
            strokeOpacity="0.9"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </g>

      {/* FLOATING SHIELD + CHECK badge (bottom-right) */}
      <g transform="translate(380 400)" filter="url(#heroBadgeShadow)">
        <circle r="74" fill="white" />
        <circle r="74" fill="url(#heroBlobGrad)" opacity="0.35" />

        {/* inner shield */}
        <path
          d="M-32 -28 L0 -42 L32 -28 L32 6 C32 28 0 44 0 44 C0 44 -32 28 -32 6 Z"
          fill="url(#heroShieldGrad)"
        />

        {/* checkmark */}
        <path
          d="M-14 0 L-3 11 L16 -10"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* FLOATING KPI CHIP (top-right) */}
      <g transform="translate(330 50)" filter="url(#heroChipShadow)">
        <rect width="160" height="62" rx="14" fill="white" stroke="var(--se-color-line)" strokeWidth="1" />

        {/* mini circular icon */}
        <circle cx="22" cy="31" r="12" fill="var(--se-color-blue-100)" />
        <path
          d="M16 31 L20 35 L28 24"
          stroke="var(--se-color-blue-700)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* big number */}
        <text
          x="44"
          y="30"
          fill="var(--se-color-blue-900)"
          fontSize="16"
          fontWeight="700"
          letterSpacing="-0.01em"
        >
          96%
        </text>
        {/* label */}
        <text
          x="44"
          y="46"
          fill="var(--se-color-slate-500)"
          fontSize="9.5"
          fontWeight="600"
          letterSpacing="0.08em"
        >
          FIRST-PASS APPROVED
        </text>
      </g>
    </svg>
  )
}

const INDUSTRIES = [
  { name: 'Cardiology', desc: 'EP, interventional, structural heart' },
  { name: 'Orthopedics', desc: 'Sports medicine, spine, joint replacement' },
  { name: 'Pediatrics', desc: 'Primary care, behavioral, specialty peds' },
  { name: 'Behavioral Health', desc: 'Psychiatry, therapy, SUD' },
  { name: 'Radiology', desc: 'Diagnostic, interventional, teleradiology' },
  { name: 'Pathology & Lab', desc: 'Anatomic, clinical, molecular' },
  { name: 'OB/GYN', desc: 'Obstetrics, fertility, gynecologic surgery' },
  { name: 'Oncology', desc: 'Med onc, rad onc, infusion' },
  { name: 'Surgery (Multi)', desc: 'General, plastics, ENT, urology, vascular' },
  { name: 'Family & Internal Medicine', desc: 'Primary care, geriatrics' },
  { name: 'Hospitals & Health Systems', desc: 'Inpatient, outpatient, employed groups' },
  { name: 'FQHCs & RHCs', desc: 'Encounter-based billing, HRSA reporting' },
]

export default function ServicesPage() {
  const subnavItems = SERVICES.map((s) => ({
    id: s.id,
    label: s.title.replace(/ &.*/, '').replace(/Provider /, ''),
  }))

  return (
    <>
      {/* ===== HERO ===== */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.heroGrid}>
            <div>
              <div className={s.crumb}>
                <Link href="/">Home</Link> / Services
              </div>
              <span className={s.eyebrow}>Eight services. One pod.</span>
              <h1>
                Everything That Turns Documentation Into Deposits — Under One
                Roof.
              </h1>
              <p className={s.lead}>
                From eligibility to appeals, Solveye runs the operational
                backbone of healthcare practices. Pick a single service or hand
                us the whole revenue cycle. Either way, you get the same pod,
                platform, and SLAs.
              </p>
            </div>

            <div className={s.heroVisual}>
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STICKY SCROLLSPY SUBNAV ===== */}
      <Subnav items={subnavItems} />

      {/* ===== 8 SERVICE DETAIL BLOCKS ===== */}
      <div className={s.serviceList}>
        {SERVICES.map((svc) => (
          <section key={svc.id} id={svc.id} className={s.svcDetail}>
            <div className="container">
              <div className={s.grid}>
                <div>
                  <div className={s.num}>{svc.num}</div>
                  <h2 className={s.svcTitle}>{svc.title}</h2>
                  <p className={s.svcLead}>{svc.lead}</p>

                  <ul className={s.feats}>
                    {svc.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <div className={s.kpis}>
                    {svc.kpis.map((k) => (
                      <div key={k.label}>
                        <strong>
                          <AnimatedNumber value={k.num} />
                        </strong>
                        <span className={s.kpiLabel}>{k.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={svc.cta.href}
                    className={svc.cta.style === 'primary' ? s.btnPrimary : s.detailLink}
                  >
                    {svc.cta.label}{' '}
                    <span className={s.arrow}>&rarr;</span>
                  </Link>
                </div>

                <div
                  className={s.img}
                  style={{ backgroundImage: `url('${svc.img}')` }}
                  role="img"
                  aria-label={`${svc.title} illustration`}
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ===== INDUSTRIES (dark glass) ===== */}
      <section className={s.industries}>
        <div className="container">
          <span className={s.eyebrow}>Specialties we know cold</span>
          <h2>30+ Specialties. One Operating Model.</h2>
          <p className={s.lead}>
            Each Solveye pod is staffed with coders and billers who already know
            your specialty&rsquo;s payer behavior, modifier traps, and
            documentation gotchas.
          </p>
          <div className={s.indGrid}>
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className={s.indCard}>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={s.ctaWrap}>
        <div className="container">
          <div className={s.ctaBand}>
            <div>
              <span className={s.eyebrow}>Free 30-day audit</span>
              <h2>Send Us 90 Days Of Claim Data. We&rsquo;ll Send Back A Recovery Model.</h2>
              <p>
                No fluff. No 60-page deck. Just a clear view of where dollars
                are leaking and how a Solveye pod would plug them.
              </p>
            </div>
            <div className={s.ctaButtons}>
              <Link href="/contact#demo" className={s.ctaBtnLight}>
                Start the audit <span className={s.arrow}>&rarr;</span>
              </Link>
              <Link href="/services" className={s.ctaBtnOutline}>
                See billing in detail
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
