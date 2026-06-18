import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedNumber from '@/components/AnimatedNumber'
import s from './page.module.scss'

export const metadata: Metadata = {
  title: 'About — Solveye',
  description:
    "Learn how Solveye's pod-based RCM model serves 480+ practices across 38 states. 1,200+ HIPAA-certified billing & coding specialists since 2014.",
  alternates: {
    canonical: 'https://www.solveye.com/about',
  },
  robots: 'index,follow',
}

const TIMELINE = [
  {
    year: '2014',
    title: 'Founded',
    desc: 'Three operators, one cardiology customer, a 600 sq ft office above a pharmacy.',
  },
  {
    year: '2017',
    title: 'SOC 2 Type II',
    desc: 'Re-attested annually since. First major hospital client signed.',
  },
  {
    year: '2019',
    title: 'Hyderabad delivery hub',
    desc: 'Opened our first international delivery hub to support 24-hour coding turnaround.',
  },
  {
    year: '2022',
    title: 'HITRUST r2',
    desc: 'Achieved HITRUST r2 certification. Crossed 200 customer milestone.',
  },
  {
    year: '2025',
    title: '1,000+ team',
    desc: 'Crossed 1,000 specialists across Philadelphia, Austin, Hyderabad, and Manila.',
  },
]

const PRINCIPLES = [
  {
    n: '01',
    title: 'Patient privacy is sacred',
    desc: 'Every action on a chart is logged. Every employee passes annual HIPAA certification. Every contractor signs a BAA. There is no "almost compliant."',
    means:
      'Single sign-on, role-based access, monthly access reviews, immediate offboarding.',
  },
  {
    n: '02',
    title: 'Outcomes over effort',
    desc: 'Hours billed are not the goal. Claims paid are. Pods are measured on net collection lift, not headcount or activity.',
    means:
      'Compensation is tied to customer KPIs. Pods see their own scorecard daily.',
  },
  {
    n: '03',
    title: 'Transparency by default',
    desc: 'Every customer gets read access to our platform. Every internal review is shared with the pod. Bad news travels fastest.',
    means:
      'Customer dashboards mirror internal ops dashboards. No special "client view."',
  },
  {
    n: '04',
    title: 'Specialists, not seats',
    desc: 'You learn one specialty deeply before touching a second. Coders are matched to specialty before day one, not after onboarding.',
    means:
      'Career ladders are specialty-aware. Generalist roles do not exist below VP.',
  },
  {
    n: '05',
    title: 'We pick up the phone',
    desc: 'If a customer calls, an actual human on their pod answers — not a queue, not a ticket. Response SLAs are tracked weekly.',
    means:
      'Pod leads carry direct lines. After-hours rotation across all four delivery hubs.',
  },
  {
    n: '06',
    title: 'Bias for the boring',
    desc: "The hardest problems in RCM aren't the flashy ones. They're consistent execution at scale. We celebrate the work nobody else wants.",
    means:
      'Internal awards for cleanest pod, lowest denial rate, fastest credentialing turnaround.',
  },
  {
    n: '07',
    title: 'Disagree, then commit',
    desc: "Strong opinions, weak grip. Push back hard during the decision. Once it's made, row in the same direction or speak up clearly.",
    means:
      'Decision docs require dissenting view captured. Quarterly retros are blameless.',
  },
  {
    n: '08',
    title: 'Teach, then ship',
    desc: 'Every senior team member writes runbooks. Every promotion requires a documented teach. Knowledge belongs to the company, not a person.',
    means:
      'Internal knowledge base of 2,400+ runbooks. Promotion review reads docs you wrote.',
  },
  {
    n: '09',
    title: 'Take care of each other',
    desc: 'Healthcare back-office work is taxing. We protect rest, mental health, and time off — because tired people make compliance mistakes.',
    means:
      'Mandatory 4-week minimum PTO. Mental health leave is paid. No after-hours expectations.',
  },
]


const AWARDS = [
  {
    yr: '2025',
    title: 'KLAS Category Leader',
    desc: 'End-to-end RCM Outsourcing — Mid-market segment.',
  },
  {
    yr: '2025',
    title: 'Best Places to Work',
    desc: 'Modern Healthcare, top 100 for the third year running.',
  },
  {
    yr: '2024',
    title: 'Inc. 5000',
    desc: 'Fastest-growing private companies, ranked #847.',
  },
  {
    yr: '2024',
    title: 'HFMA MAP Award',
    desc: 'Patient financial communication excellence.',
  },
  {
    yr: '2024',
    title: 'Healthcare Innovation 25',
    desc: "Top 25 healthcare BPOs by Becker's Hospital Review.",
  },
  {
    yr: '2023',
    title: 'Great Place to Work',
    desc: 'Certified across all four delivery hubs.',
  },
  {
    yr: '2023',
    title: "HITRUST CSF Assessor's Choice",
    desc: 'Top tier for quality of evidence and remediation.',
  },
  {
    yr: '2022',
    title: "Forbes America's Best Startup Employers",
    desc: 'Ranked top 10 in healthcare services category.',
  },
]

const CERTS = [
  {
    badge: 'SOC2',
    title: 'SOC 2 Type II',
    desc: 'Re-attested annually since 2017. Covers security, availability, processing integrity, confidentiality, and privacy.',
    det: 'Auditor: A-LIGN · Last attested: Q4 2025',
  },
  {
    badge: 'HITR',
    title: 'HITRUST r2',
    desc: "Industry's most rigorous healthcare security framework. Annual review with quarterly evidence checks.",
    det: 'Validated assessor · Renewed 2025',
  },
  {
    badge: 'HIPAA',
    title: 'HIPAA Privacy & Security',
    desc: 'Full BAA program, role-based access, immediate offboarding, encryption at rest and in transit (AES-256 / TLS 1.3).',
    det: 'Risk assessment refreshed annually',
  },
  {
    badge: 'ISO',
    title: 'ISO 27001:2022',
    desc: 'Information security management system — applies to all four delivery hubs, including Hyderabad and Manila.',
    det: 'Certified body: BSI · Renewed 2024',
  },
  {
    badge: 'PCI',
    title: 'PCI-DSS Level 1',
    desc: 'For our patient payment processing pipeline. Quarterly ASV scans, annual on-site QSA assessment.',
    det: 'QSA: Coalfire · Last assessed: Q3 2025',
  },
  {
    badge: 'CMMC',
    title: 'CMMC Level 2 Ready',
    desc: 'For VA and DoD healthcare contracts. Pre-assessment complete; formal certification scheduled Q2 2026.',
    det: 'In progress · target: Q2 2026',
  },
]

const LOCATIONS = [
  {
    city: 'Philadelphia, PA',
    country: 'United States · Headquarters',
    addr: ['2120 Market Street, Suite 400', 'Philadelphia, PA 19103'],
    meta: ['148 employees', 'Opened 2014'],
  },
  {
    city: 'Austin, TX',
    country: 'United States · Growth Hub',
    addr: ['501 Congress Avenue, Floor 14', 'Austin, TX 78701'],
    meta: ['112 employees', 'Opened 2020'],
  },
  {
    city: 'Hyderabad',
    country: 'India · Delivery Hub',
    addr: ['Mindspace IT Park, Building 12', 'Hyderabad, Telangana 500081'],
    meta: ['684 employees', 'Opened 2019'],
  },
 
]

export default function AboutPage() {
  return (
    <>
      {/* ===== 1. HERO ===== */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.heroGrid}>

            {/* Left: copy */}
            <div className={s.heroCopy}>
              <div className={s.crumb}>
                <Link href="/">Home</Link> / About
              </div>
              <span className={s.eyebrow}>About Solveye</span>
              <h1>
                We&rsquo;re Rebuilding The Back Office Of Healthcare, One Pod At A Time.
              </h1>
              <p className={s.lead}>
                Solveye is a healthcare BPO and IT services company that runs the
                operational backbone — billing, coding, credentialing, AR,
                analytics, compliance — for clinics, hospitals, and labs across 38
                states. We started as five operators and a hypothesis. Today
                we&rsquo;re 1,200+ specialists serving 480+ customers.
              </p>
            </div>

            {/* Right: photo composition with floating cards */}
            <div className={s.heroMedia}>
              <div className={s.heroPhoto}>
                {/* Top-right floating card — AI Insight */}
                <div className={s.floatCardRight}>
                  <div className={s.cardHead}>
                    <span className={s.cardIcon}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#185ed4">
                        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                      </svg>
                    </span>
                    <strong>AI Insight</strong>
                  </div>
                  <div className={s.cardSub}>Best Productivity Today:</div>
                  <div className={s.cardVal}>Wednesday</div>
                </div>

                {/* Bottom-left floating card — Team Update */}
                <div className={s.floatCardLeft}>
                  <div className={s.cardHead}>
                    <span className={s.cardIcon} style={{ background: '#f0fdf4', color: '#16a34a' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </span>
                    <strong>Team Update</strong>
                  </div>
                  <div className={s.cardSub}>Sarah completed 3 tasks today</div>
                </div>
              </div>
            </div>

          </div>

          {/* KPI strip — full width below the grid */}
          <div className={s.strip}>
            <div>
              <strong><AnimatedNumber value="2014" /></strong>
              <span className={s.kpiLabel}>Founded</span>
            </div>
            <div>
              <strong><AnimatedNumber value="1,247" /></strong>
              <span className={s.kpiLabel}>Team members</span>
            </div>
            <div>
              <strong><AnimatedNumber value="480+" /></strong>
              <span className={s.kpiLabel}>Active customers</span>
            </div>
            <div>
              <strong><AnimatedNumber value="38" /></strong>
              <span className={s.kpiLabel}>US states served</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. ORIGIN + TIMELINE ===== */}
      <section className={s.sectionAlt}>
        <div className="container">
          <div className={s.originGrid}>
            <div className={s.originImg} />
            <div>
              <span className={s.eyebrow}>Origin</span>
              <h2>
                Built By Operators Who&rsquo;d Run The Back Office And Knew It
                Could Be Better.
              </h2>
              <p>
                Solveye started in 2014 in a small office above a pharmacy in
                Philadelphia. Our founders — Maya Patel, Daniel Roth, and Ravi
                Krishnan — had spent the previous decade inside a multi-state
                cardiology group, watching brilliant clinicians lose 12% of
                their revenue to administrative friction.
              </p>
              <p>
                The diagnosis was clear: BPOs sold labor by the hour with no
                skin in the outcome, software vendors sold tools with no humans
                behind them, and the hospital&rsquo;s own AR team had no
                leverage with payers. Nobody was accountable for the dollar
                that went out the door.
              </p>
              <p>
                We built Solveye on a different premise: pods of named
                specialists, paid on outcomes, working inside the
                customer&rsquo;s existing EHR, with full transparency. Twelve
                years later, that&rsquo;s still the operating model.
              </p>
            </div>
          </div>

          <div className={s.timeline}>
            {TIMELINE.map((item) => (
              <div key={item.year} className={s.tlItem}>
                <div className={s.year}>{item.year}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. MISSION / VISION / VALUES ===== */}
      <section className={s.section}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>What we stand for</span>
              <h2>Mission. Vision. Values.</h2>
            </div>
          </div>

          <div className={s.mvvGrid}>
            <article className={s.mvvCard}>
              <div className={s.label}>Mission</div>
              <h3>Make every dollar earned in healthcare make it home.</h3>
              <p>
                An estimated $250 billion in legitimately-earned healthcare
                revenue gets lost to administrative friction every year.
                That&rsquo;s the gap we exist to close — claim by claim, code
                by code, denial by denial.
              </p>
            </article>

            <article className={s.mvvCard}>
              <div className={s.label}>Vision</div>
              <h3>
                The default operating partner for every healthcare provider in
                America.
              </h3>
              <p>
                From a solo physician in Tulsa to a 12-hospital system in
                California — the same pod model, the same platform, the same
                SLAs. One trustworthy partner that scales with you instead of
                against you.
              </p>
            </article>

            <article className={s.mvvCard}>
              <div className={s.label}>Values</div>
              <h3>Five non-negotiables we hire for and fire on.</h3>
              <p>
                Patient privacy is sacred. Outcomes over effort. Transparency
                by default. Specialists, not seats. We pick up the phone.
              </p>
              <p className={s.small}>
                Every value is measured. Every value can get you fired.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== 4. CEO LETTER (dark glass) ===== */}
      <section className={s.ceo}>
        <div className={s.inner}>
          <span className={s.eyebrow}>A letter from our CEO</span>
          <h2>
            &ldquo;The Companies That Own This Decade Will Be The Ones That
            Take Operational Quality Seriously.&rdquo;
          </h2>
          <div className={s.letter}>
            <p>
              Healthcare in America is the most complicated trillion-dollar
              machine we&rsquo;ve built. There are 900+ payer contracts, 70,000
              ICD-10 codes, and 27 different ways for a clean claim to be
              denied — and behind every one of those abstractions sits a
              clinician trying to take care of a patient.
            </p>
            <p>
              When we started Solveye, the operational layer of healthcare was
              already broken: fragmented, outsourced cheaply, and accountable
              to nobody. The cost wasn&rsquo;t just margin loss for providers.
              It was clinicians burning out doing administrative work, patients
              getting surprise bills, and back-office teams stuck firefighting
              instead of fixing root causes.
            </p>
            <p>
              We don&rsquo;t think the answer is more software, or more cheap
              labor, or more dashboards. The answer is a small group of
              accountable operators per customer, the platform to let them work
              fast and audit themselves, and the discipline to measure outcomes
              — not effort.
            </p>
            <p>
              That&rsquo;s the company we&rsquo;re building. If you&rsquo;re a
              provider, we&rsquo;d love to earn your trust. If you&rsquo;re an
              operator who wants to spend your career doing the actual work —
              coding the chart, working the denial, calling the payer —
              we&rsquo;d love to meet you.
            </p>
          </div>

          <div className={s.ceoSign}>
            <div className={s.avatar} />
            <div>
              <div className={s.name}>Maya Patel</div>
              <div className={s.title}>Co-founder &amp; CEO, Solveye Health</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. CULTURE PRINCIPLES ===== */}
      <section id="culture" className={s.section}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>How we work</span>
              <h2>Nine Principles That Shape Every Solveye Day.</h2>
              <div className={s.note}>
              These aren&rsquo;t poster slogans. They&rsquo;re how we make
              hiring decisions, run reviews, and structure compensation.
            </div>            
            </div>
            
          </div>

          <div className={s.principles}>
            {PRINCIPLES.map((p) => (
              <div key={p.n} className={s.principle}>
                <div className={s.pn}>Principle {p.n}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <div className={s.means}>
                  <strong>What this means in practice</strong>
                  {p.means}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. DEI ===== */}
      <section className={s.sectionAlt}>
        <div className="container">
          <div className={s.deiGrid}>
            <div>
              <span className={s.eyebrow}>Diversity, equity &amp; inclusion</span>
              <h2>
                Healthcare&rsquo;s Back Office Should Look Like The Patients It
                Serves.
              </h2>
              <p className={s.lead}>
                Solveye&rsquo;s strength comes from a workforce that spans 14
                countries of origin, 22 first languages, and a near-even gender
                split. We hire for skill and pay for it the same — without
                exceptions.
              </p>
              <p className={s.body}>
                Our DEI strategy is built on four pillars: equitable hiring
                (blind resume review through final round), pay equity
                (third-party audited annually), career mobility (sponsorship
                not mentorship for under-represented roles), and an active ERG
                program with budget and exec sponsors.
              </p>

              <div className={s.deiStats}>
                <div>
                  <strong><AnimatedNumber value="52%" /></strong>
                  <span className={s.kpiLabel}>Women across the company</span>
                </div>
                <div>
                  <strong><AnimatedNumber value="44%" /></strong>
                  <span className={s.kpiLabel}>Women in leadership (Director+)</span>
                </div>
                <div>
                  <strong><AnimatedNumber value="100%" /></strong>
                  <span className={s.kpiLabel}>Pay equity audit pass, 4 years running</span>
                </div>
                <div>
                  <strong><AnimatedNumber value="7" /></strong>
                  <span className={s.kpiLabel}>Active employee resource groups</span>
                </div>
              </div>
            </div>
            <div className={s.deiImg} />
          </div>
        </div>
      </section>

      {/* ===== 8. AWARDS ===== */}
      <section className={s.section}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>Awards &amp; recognition</span>
              <h2>Recognition We&rsquo;re A Little Proud Of.</h2>
            </div>
          </div>

          <div className={s.awards}>
            {AWARDS.map((a) => (
              <article key={a.title} className={s.award}>
                <div className={s.yr}>{a.yr}</div>
                <h5>{a.title}</h5>
                <p>{a.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. COMPLIANCE (dark glass) ===== */}
      <section id="compliance" className={s.compliance}>
        <div className="container">
          <span className={s.eyebrow}>Compliance &amp; certifications</span>
          <h2>Built For The Audits We Hope You Never Have To Do.</h2>
          <p className={s.lead}>
            Compliance isn&rsquo;t a department at Solveye — it&rsquo;s an
            operating principle. We re-attest annually, share evidence on
            request, and treat security as a feature, not a phase.
          </p>

          <div className={s.certGrid}>
            {CERTS.map((c) => (
              <article key={c.title} className={s.cert}>
                <div className={s.badge}>{c.badge}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
                <div className={s.det}>{c.det}</div>
              </article>
            ))}
          </div>

          <div className={s.compFooter}>
            <div>
              <h3>Need our compliance package?</h3>
              <p>
                SOC 2 report, HITRUST letter, BAA template, and security
                questionnaire — sent within 24 hours under NDA.
              </p>
            </div>
            <Link href="/contact" className={s.btnLight}>
              Request package <span className={s.arrow}>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 10. LOCATIONS ===== */}
      <section className={s.sectionLocations}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>Where we work</span>
              <h2>Four Hubs. Twenty-Four-Hour Coverage.</h2>
              <div className={s.note}>
                Pods are anchored in one hub but supported around the clock.
                Coding charts handed off at 8pm ET in Philadelphia are coded by
                morning, US time.
              </div>
            </div>
          </div>

          <div className={s.locations}>
            {LOCATIONS.map((loc) => (
              <article key={loc.city} className={s.location}>
                <div className={s.city}>{loc.city}</div>
                <div className={s.country}>{loc.country}</div>
                <address className={s.addr}>
                  {loc.addr.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < loc.addr.length - 1 && <br />}
                    </span>
                  ))}
                </address>
                <div className={s.meta}>
                  {loc.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 11. CTA ===== */}
      <section className={s.ctaWrap}>
        <div className="container">
          <div className={s.ctaBand}>
            <div>
              <h2>Want To Work Somewhere That Actually Means It?</h2>
              <p>
                We&rsquo;re hiring billers, coders, AR analysts, engineers, and
                customer success leaders across all five locations.
              </p>
            </div>
            <div className={s.ctaButtons}>
              <Link href="/careers" className={s.ctaBtnLight}>
                See open roles <span className={s.arrow}>&rarr;</span>
              </Link>
              <Link href="/team" className={s.ctaBtnOutline}>
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
