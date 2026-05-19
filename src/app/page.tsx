import Link from 'next/link'
import StatCounter from '@/components/StatCounter'
import SubmitResumeModal from '@/components/careers/SubmitResumeModal'
import Gallery3D from '@/components/Gallery3D'
import TestimonialsScroll from '@/components/TestimonialsScroll'
import s from './page.module.scss'

/* ---- tiny SVG helpers (inline, no extra deps) ---- */
const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const SERVICES = [
  {
    href: '/medical-billing',
    title: 'Medical Billing',
    desc: 'Claim creation, scrubbing, submission, posting, and denials — handled end-to-end with full transparency.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="15" x2="14" y2="15" />
      </svg>
    ),
  },
  {
    href: '/services#coding',
    title: 'Medical Coding',
    desc: 'AAPC- and AHIMA-certified coders for CPT, ICD-10-CM/PCS, HCC, and risk adjustment across 30+ specialties.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    href: '/services#credentialing',
    title: 'Provider Credentialing',
    desc: 'Payer enrollment, re-credentialing, CAQH, and Medicare/Medicaid — done in 45–60 days, not 6 months.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    href: '/services#ar',
    title: 'AR Recovery',
    desc: 'Aged claim follow-up, payer appeals, and dispute resolution. We work down balances older than 90 days.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
      </svg>
    ),
  },
  {
    href: '/services#priorauth',
    title: 'Prior Authorization',
    desc: 'Real-time eligibility, benefits verification, and prior auth for procedures, imaging, and infusions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    href: '/services#analytics',
    title: 'Practice Analytics',
    desc: 'Real-time dashboards on collections, denials, AR aging, payer mix, and provider productivity.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
]

const DIFF_ITEMS = [
  {
    title: 'Pod-based, US-aligned hours',
    desc: 'Same humans, same time zone overlap. No tickets disappearing into a queue.',
  },
  {
    title: 'Specialty-trained from day one',
    desc: 'Coders and billers are matched to your specialty before they ever touch a claim.',
  },
  {
    title: 'EHR-native, not screen-scraping',
    desc: 'Direct integrations with Epic, Cerner, athenahealth, eClinicalWorks, NextGen, Kareo, and 20+ more.',
  },
  {
    title: 'Outcome pricing available',
    desc: 'Pay a percentage of collected, not a flat retainer. We win when you win.',
  },
]

const INSIGHTS = [
  {
    img: '/picture/index/denial-taxonomy.jpg',
    tag: 'Playbook',
    time: '8 min read',
    title: 'The 2026 denial taxonomy: 14 codes that move the needle most.',
    desc: 'A working categorization our AR team uses to triage denials by recoverability and effort.',
  },
  {
    img: '/picture/index/HITRUST.png',
    tag: 'Compliance',
    time: '12 min read',
    title: 'HIPAA, SOC 2, HITRUST: which one actually matters for your vendor.',
    desc: 'Three frameworks, three different promises. Here\u2019s how to read what your BPO is selling you.',
  },
  {
    img: '/picture/index/credentialing.jpg',
    tag: 'Case study',
    time: '6 min read',
    title: 'How Coastal Ortho cut credentialing from 184 to 52 days.',
    desc: 'Inside the operational re-design that recovered $1.4M in delayed provider revenue.',
  },
]

export default function Home() {
  return (
    <>
      {/* ===== 1. HERO ===== */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.heroGrid}>
            <div className={s.heroContent}>
              <span className={s.eyebrow}>Healthcare BPO + IT Services</span>
              <h1>
                Build a healthier{' '}
                <span className={s.accent}>revenue cycle.</span>
              </h1>
              <p className={s.lead}>
                Solveye gives clinics, hospitals, and health systems an
                integrated back-office — billing, coding, credentialing, and
                analytics — backed by a HIPAA-grade platform and 1,200+
                specialists.
              </p>
              <div className={s.heroCta}>
                <SubmitResumeModal
                  label={<>Drop Your Resume <span className={s.arrow}>&rarr;</span></>}
                  triggerClass={s.btnPrimary}
                />
                <Link href="/contact#form" className={s.btnSecondary}>
                  Contact Us
                </Link>
              </div>
              <div className={s.heroProof}>
                <span>
                  &#9733;&#9733;&#9733;&#9733;&#9733;{' '}
                  <strong>4.9/5</strong> on KLAS
                </span>
                <span>SOC 2 Type II &bull; HIPAA &bull; HITRUST</span>
              </div>
            </div>

            <div className={s.heroVisual}>
              <div className={s.heroPhoto} />
            </div>
          </div>
          <div className={s.statsGrid}>
            <div>
              <div className={s.statNum}>
                <StatCounter end={32}  suffix="%" />
              </div>
              <div className={s.statLabel}>Increase in net collection</div>
            </div>
            <div>
              <div className={s.statNum}>
                <StatCounter end={41}  suffix="%" />
              </div>
              <div className={s.statLabel}>Less days in AR</div>
            </div>
            <div>
              <div className={s.statNum}>
                <StatCounter end={98}  suffix="%" />
              </div>
              <div className={s.statLabel}>First-pass acceptance</div>
            </div>
            <div>
              <div className={s.statNum}>
                <StatCounter end={1200} suffix="+" />
              </div>
              <div className={s.statLabel}>Certified specialists</div>
            </div>
          </div>
        </div>
        
      </section>
      
      {/* ===== 2. LOGO STRIP ===== */}
      <section className={s.logos}>
        <div className="container">
          <div className={s.logosLabel}>
            Trusted by 480+ practices, hospitals, and labs across 38 states
          </div>
          <div className={s.logosRow}>
            <span>&#9650; Mercy Health</span>
            <span>&#9670; Apex Cardiology</span>
            <span>&#9675; Northstar Peds</span>
            <span>&#11042; ClearLab</span>
            <span>&#9635; Coastal Ortho</span>
            <span>&#10010; Vivere Health</span>
          </div>
        </div>
      </section>

      {/* ===== 3. STATS BAND ===== */}
      <section className={s.stats}>
        <div className="container">
          <div className={s.statsHead}>
            <div className={s.statsIntro}>
              <span className={s.eyebrow}>By the numbers</span>
              <h2>The numbers behind the work.</h2>
              <p className={s.lead}>
                A modern RCM partner is judged by what shows up in the bank
                account. Here&rsquo;s what our customers see, on average, after
                90&nbsp;days.
              </p>
            </div>

            <ul className={s.trustBadges} aria-label="Compliance certifications">
            <li className={s.badge}>
              <span className={s.badgeIcon} aria-hidden="true">
                <img src="/Picture/Index/SOC 2.png" alt="SOC 2" width="48" height="48" style={{ objectFit: 'contain' }} />
              </span>
              <div>
                <strong>SOC 2 Type II</strong>
                <span>Independently audited security controls</span>
              </div>
            </li>

            <li className={s.badge}>
               <span className={s.badgeIcon} aria-hidden="true">
                <img src="/Picture/Index/HIPAA-logo.png" alt="Hippa" width="48" height="48" style={{ objectFit: 'contain' }} />
              </span>
              <div>
                <strong>HIPAA Compliant</strong>
                <span>Patient data privacy &amp; PHI safeguards</span>
              </div>
            </li>

            <li className={s.badge}>
              <span className={s.badgeIcon} aria-hidden="true">
                <img src="/Picture/Index/HITRUST-logo.png" alt="Hitrust" width="48" height="48" style={{ objectFit: 'contain' }} />
              </span>
              <div>
                <strong>HITRUST CSF</strong>
                <span>Risk-based healthcare security framework</span>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </section>

      {/* ===== 4. SERVICES PREVIEW ===== */}
      <section className={s.section}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>What we do</span>
              <h2>A complete back-office, run as one team.</h2>
            </div>
            <Link href="/services" className={s.btnGhost}>
              All services <span className={s.arrow}>&rarr;</span>
            </Link>
          </div>

          <div className={s.svcGrid}>
            {SERVICES.map((svc) => (
              <Link key={svc.title} href={svc.href} className={s.svcCard}>
                <div className={s.svcIcon}>{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <span className={s.arrowLink}>
                  Learn more <span className={s.arrow}>&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. THE SOLVEYE DIFFERENCE ===== */}
      <section className={s.difference}>
        <div className="container">
          <div className={s.diffGrid}>
            <div className={s.diffContent}>
              <span className={s.eyebrow}>The Solveye difference</span>
              <h2>Specialists, not seats. Outcomes, not effort.</h2>
              <p className={s.lead}>
                Most BPOs sell labor by the hour. We&rsquo;re staffed and
                incentivized differently — every account gets a named pod with a
                billing lead, a coder, an AR analyst, and a CSM. They learn your
                specialty, your payers, and your providers.
              </p>

              <ul className={s.howList}>
                {DIFF_ITEMS.map((item) => (
                  <li key={item.title}>
                    <span className={s.check}>
                      <ChevronIcon />
                    </span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.diffImage} />
          </div>
        </div>
      </section>

      {/* ===== 6. OFFICE GALLERY ===== */}
      <section className={s.sectionGallery}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>Office life &amp; rituals</span>
              <h2>The things that make Solveye, Solveye.</h2>
            </div>
            <Link href="/life-at-solveye" className={s.btnGhostLight}>
              Life at Solveye <span className={s.arrow}>&rarr;</span>
            </Link>
          </div>

          <Gallery3D />
        </div>
      </section>

      {/* ===== 7. TESTIMONIALS ===== */}
      <section className={s.sectionTestimonials}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>What clients say</span>
              <h2>Trusted by practices across 38 states.</h2>
            </div>
          </div>
          <TestimonialsScroll />
        </div>
      </section>

      {/* ===== 7. INSIGHTS ===== */}
      <section className={s.section}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>Insights</span>
              <h2>Sharp thinking on RCM, compliance, and operations.</h2>
            </div>
            <Link href="#" className={s.btnGhost}>
              All articles <span className={s.arrow}>&rarr;</span>
            </Link>
          </div>

          <div className={s.insightGrid}>
            {INSIGHTS.map((item) => (
              <Link key={item.title} href="#" className={s.insightCard}>
                <div
                  className={s.insightPhoto}
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                <div className={s.meta}>
                  <span>{item.tag}</span>
                  <span>&middot; {item.time}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. CTA BAND ===== */}
      <section className={s.section}>
        <div className="container">
          <div className={s.ctaBand}>
            <div>
              <span className={s.eyebrow}>Ready when you are</span>
              <h2>See what 30 days with Solveye looks like.</h2>
              <p>
                We&rsquo;ll audit a slice of your AR, model the recovery
                opportunity, and walk through how a Solveye pod would integrate
                with your EHR — all in one 30-minute call.
              </p>
            </div>
            <div className={s.ctaButtons}>
              <SubmitResumeModal
                label={<>Drop Your Resume <span className={s.arrow}>&rarr;</span></>}
                triggerClass={s.ctaBtnLight}
              />
              <Link href="/contact" className={s.ctaBtnOutline}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
