import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedNumber from '@/components/AnimatedNumber'
import FaqAccordion from './FaqAccordion'
import s from './page.module.scss'

export const metadata: Metadata = {
  title: 'Training & Workshops — Solveye',
  description:
    'Every Solveye specialist completes 96+ hours of structured training their first year. Six tracks, live in-person workshops, open enrollment — here\'s how it works.',
}

const TRACKS = [
  {
    n: '01',
    cat: 'Compliance',
    title: 'HIPAA & Healthcare Compliance',
    desc: 'Day-one mandatory for every teammate, regardless of role. Covers PHI handling, breach protocols, BAAs, and the situations that get even seasoned operators in trouble.',
    modules: [
      { n: '1.', title: 'PHI & minimum-necessary rule', hr: '2 hr' },
      { n: '2.', title: 'Breach detection & response', hr: '3 hr' },
      { n: '3.', title: 'Real-case dilemmas (workshop)', hr: '2 hr' },
      { n: '4.', title: 'Compliance certification exam', hr: '1 hr' },
    ],
    meta: '8 hrs · 2 days',
    roles: 'All roles',
  },
  {
    n: '02',
    cat: 'Coding',
    title: 'CPT & ICD-10 Mastery',
    desc: 'For coders and anyone touching encounter documentation. Includes specialty modules — cardiology, ortho, peds, behavioral — taught by AAPC-certified internal trainers.',
    modules: [
      { n: '1.', title: 'CPT structure & modifiers', hr: '6 hr' },
      { n: '2.', title: 'ICD-10-CM coding logic', hr: '8 hr' },
      { n: '3.', title: 'HCC & risk adjustment', hr: '4 hr' },
      { n: '4.', title: 'Specialty deep-dives (elective)', hr: '8 hr' },
      { n: '5.', title: 'CPC exam prep', hr: '12 hr' },
    ],
    meta: '38 hrs · 6 weeks',
    roles: 'Coding · Audit',
  },
  {
    n: '03',
    cat: 'Denials & AR',
    title: 'Denial Management Playbook',
    desc: "The bread and butter. Every payer has a personality; every denial has a root cause. This track teaches you both — and the appeal patterns that actually overturn them.",
    modules: [
      { n: '1.', title: 'Top 20 denial categories', hr: '5 hr' },
      { n: '2.', title: 'Payer personality profiles', hr: '4 hr' },
      { n: '3.', title: 'Appeals that win (case studies)', hr: '6 hr' },
      { n: '4.', title: 'Root-cause logging in our system', hr: '3 hr' },
    ],
    meta: '18 hrs · 3 weeks',
    roles: 'Specialists · AR',
  },
  {
    n: '04',
    cat: 'Client',
    title: 'Client Communication Lab',
    desc: "Hard-won lessons on writing email that doesn't get misread, running a QBR that earns trust, and saying \"no\" to a client without losing them. Required for anyone touching client calls.",
    modules: [
      { n: '1.', title: 'Tone, hedging, ambiguity', hr: '3 hr' },
      { n: '2.', title: 'Running a QBR', hr: '4 hr' },
      { n: '3.', title: 'Difficult conversations (workshop)', hr: '3 hr' },
      { n: '4.', title: 'Mock client review (graded)', hr: '2 hr' },
    ],
    meta: '12 hrs · 2 weeks',
    roles: 'Pod leads · CSM',
  },
  {
    n: '05',
    cat: 'Analytics',
    title: 'Practice Analytics & Looker',
    desc: "Hands-on. By the end you've built a working denial-trend dashboard for a real (anonymized) client, learned to spot the queries that mislead, and presented your findings to a panel of three.",
    modules: [
      { n: '1.', title: 'RCM data model', hr: '4 hr' },
      { n: '2.', title: 'SQL fundamentals (no prior req\'d)', hr: '8 hr' },
      { n: '3.', title: 'Building in Looker', hr: '6 hr' },
      { n: '4.', title: 'Capstone: real-client dashboard', hr: '8 hr' },
    ],
    meta: '26 hrs · 4 weeks',
    roles: 'Analysts · ops',
  },
  {
    n: '06',
    cat: 'Leadership',
    title: 'Pod Lead Foundations',
    desc: "For people stepping into their first management role. Less \"leadership theory,\" more \"how to run a Monday planning that actually works.\" Run cohort-style, max 8 per cohort.",
    modules: [
      { n: '1.', title: 'Running standups people like', hr: '2 hr' },
      { n: '2.', title: 'Feedback that lands', hr: '4 hr' },
      { n: '3.', title: 'Hiring & structured interviews', hr: '4 hr' },
      { n: '4.', title: '1:1s, retros, performance', hr: '6 hr' },
      { n: '5.', title: 'Capstone: 90-day plan presentation', hr: '4 hr' },
    ],
    meta: '20 hrs · 5 weeks',
    roles: 'New managers',
  },
]

const FORMATS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Classroom · in-person cohort',
    desc: "Held in our Solveye training rooms with 6–12 teammates around one table. Used for everything that needs live Q&A, role-play, or peer feedback — denials, communication, leadership.",
    dur: '1–2 day intensives · scheduled',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Workshop lab · hands-on',
    desc: "Working sessions where everyone brings their laptop and a real (anonymized) case. Half lecture, half do-the-work. Trainer walks the room and reviews live.",
    dur: '48-hour deep dive · on-site',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
      </svg>
    ),
    title: 'Spotlight session',
    desc: "Short, sharp 4-hour intensives on a single topic — a new payer rule, a coding update, a process change. Stand-up format, white-board heavy, room full.",
    dur: 'Half-day spotlight · monthly',
  },
]

const WORKSHOP_GALLERY = [
  {
    year: '2025 · Q1',
    title: 'Denial Management Intensive',
    desc: '2-day deep-dive with 48 specialists across three pods. Resulted in a 38% drop in front-end denials the following quarter.',
    photos: [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    year: '2024 · Q3',
    title: 'Pod Lead Foundations — Cohort 7',
    desc: 'Eight rising managers, 2 days off-site, no slides. Peer-run retros and a capstone presentation to the VP of Ops.',
    photos: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    year: '2024 · Q2',
    title: 'ICD-10 Quarterly Update Workshop',
    desc: 'A 48-hour sprint through the CMS Q2 coding update — 3 specialty tracks running in parallel, 120 coders trained.',
    photos: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    year: '2024 · Q1',
    title: 'HIPAA Compliance Day — All-Hands',
    desc: 'Annual compliance reset for the full company. Live case dilemmas, breach simulations, and a 100% certification pass rate.',
    photos: [
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    ],
  },
]

const SERIES = [
  {
    cat: 'Intermittent workshop',
    title: 'Denials Spotlight Lab',
    desc: 'A working session on the 20 denial categories driving 80% of write-offs this quarter — with live appeal-writing drills.',
    dur: '1-Day Intensive',
    location: 'On-site',
    freq: 'Quarterly',
  },
  {
    cat: 'Skills spotlight',
    title: 'Payer Policy Rapid-Fire',
    desc: 'When a major payer ships a policy update, we react within a week. Walks through what changed, what to flag, and how to brief clients.',
    dur: '1-Day Intensive',
    location: 'On-site',
    freq: 'As-needed',
  },
  {
    cat: 'Skills spotlight',
    title: 'Coding Update Deep-Dive',
    desc: 'Every CMS quarterly update gets its own 2-day workshop — added codes, deleted codes, modifier changes, and the cases each touches.',
    dur: '48-Hour Deep Dive',
    location: 'On-site',
    freq: 'Quarterly',
  },
  {
    cat: 'Intermittent workshop',
    title: 'Leadership Lab',
    desc: "For pod leads and rising managers — feedback, hiring, running a Monday that doesn't drain the room. Cohort of 8, no slides.",
    dur: '48-Hour Deep Dive',
    location: 'On-site',
    freq: 'Twice a year',
  },
  {
    cat: 'Skills spotlight',
    title: 'Technical Sprint',
    desc: "Hands-on with the platform's newest features — AI assist, denial prediction, the new Looker views. Always taught by the engineers who built it.",
    dur: '1-Day Intensive',
    location: 'On-site',
    freq: 'Monthly',
  },
]

export default function TrainingWorkshopsPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.crumb}>
            <Link href="/">Home</Link> / Training &amp; Workshops
          </div>
          <span className={s.eyebrow}>Learning &amp; development</span>
          <h1>Trained on Tuesday. Confident by Friday.</h1>
          <p className={s.lead}>
            In healthcare RCM, a missed payer rule isn&rsquo;t a typo — it&rsquo;s a denied claim and a patient who
            gets billed twice. So we train continuously. Every Solveye specialist completes 96+ hours of structured
            training their first year, and another 40+ every year after. Here&rsquo;s how it works.
          </p>

          <div className={s.strip}>
            <div>
              <div className={s.statNum}><AnimatedNumber value="96+" /></div>
              <div className={s.statLabel}>Hours · year one</div>
            </div>
            <div>
              <div className={s.statNum}><AnimatedNumber value="38" /></div>
              <div className={s.statLabel}>Active programs</div>
            </div>
            <div>
              <div className={s.statNum}><AnimatedNumber value="14" /></div>
              <div className={s.statLabel}>Internal trainers</div>
            </div>
            <div>
              <div className={s.statNum}>
                <AnimatedNumber value="4.8" /><span className={s.statDenom}>/5</span>
              </div>
              <div className={s.statLabel}>Avg session rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRAINING TRACKS ===== */}
      <section className={s.tracks}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>Curriculum</span>
              <h2>Six tracks. Built for the work people actually do.</h2>
              <p className={s.lead}>
                Every specialist completes their core track. Anyone can take any other track on company time.
              </p>
            </div>
          </div>

          <div className={s.tracksGrid}>
            {TRACKS.map((track) => (
              <div key={track.n} className={s.track}>
                <span className={s.trackNum}>{track.n}</span>
                <span className={s.trackCat}>{track.cat}</span>
                <h3>{track.title}</h3>
                <p>{track.desc}</p>
                <div className={s.modules}>
                  {track.modules.map((mod) => (
                    <div key={mod.n} className={s.mod}>
                      <span className={s.modNum}>{mod.n}</span>
                      <span>{mod.title}</span>
                      <span className={s.modHr}>{mod.hr}</span>
                    </div>
                  ))}
                </div>
                <div className={s.trackMeta}>
                  <span>{track.meta}</span>
                  <span>{track.roles}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORMATS ===== */}
      <section className={s.formats}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>Formats · 100% on-site at the Solveye office</span>
              <h2>Live, in-person, face-to-face. That&rsquo;s the whole format philosophy.</h2>
              <p className={s.lead}>
                All workshops run from the Solveye office — no recordings, no async modules, no LMS. We&rsquo;ve
                measured it: the friction of being in the room together is exactly where high-impact learning happens.
              </p>
            </div>
          </div>

          <div className={s.formatsGrid}>
            {FORMATS.map((fmt) => (
              <div key={fmt.title} className={s.fmt}>
                <div className={s.fmtIcon}>{fmt.icon}</div>
                <h4>{fmt.title}</h4>
                <p>{fmt.desc}</p>
                <span className={s.fmtDur}>{fmt.dur}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WORKSHOP SERIES ===== */}
      <section className={s.series}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>Workshop series · Skills spotlights</span>
              <h2>Short, intensive workshops — hosted throughout the year at our Solveye office.</h2>
              <p className={s.lead}>
                No year-long curriculum. No drawn-out modules. Just focused 1–2 day intensives that drop into the
                calendar when a topic is hot and a trainer is sharp. Open to anyone, attended on company time.
              </p>
            </div>
          </div>

          <div className={s.seriesRail}>
            {SERIES.map((card) => (
              <div key={card.title} className={s.seriesCard}>
                <span className={s.scCat}>{card.cat}</span>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
                <span className={s.scDur}>{card.dur}</span>
                <div className={s.scMeta}>
                  <span>{card.location}</span>
                  <span>{card.freq}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAST WORKSHOP GALLERY ===== */}
      <section className={s.workshopGallery}>
        <div className="container">
          <div className={s.secHead}>
            <div>
              <span className={s.eyebrow}>Around the office</span>
              <h2>Workshops that shaped how we train.</h2>
              <p className={s.lead}>
                A look back at recent intensives — the rooms, the people, and what came out of them.
              </p>
            </div>
          </div>

          <div className={s.wgTimeline}>
            {WORKSHOP_GALLERY.map((item, i) => (
              <div key={i} className={s.wgItem}>
                <div className={s.wgDate}>{item.year}</div>
                <div className={s.wgNode}>
                  <span className={s.wgDot} />
                </div>
                <div className={s.wgContent}>
                  <div className={s.wgPhotoGrid}>
                    {item.photos.map((url, j) => (
                      <div
                        key={j}
                        className={`${s.wgPhoto} ${j === 0 ? s.wgPhotoHero : ''}`}
                        style={{ backgroundImage: `url('${url}')` }}
                      />
                    ))}
                  </div>
                  <div className={s.wgCaption}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMPACT ===== */}
      <section className={s.impact}>
        <div className="container">
          <span className={s.eyebrow}>What changes when training is taken seriously</span>
          <h2>Numbers from the last 12 months.</h2>
          <p className={s.lead}>
            Measurable shifts that came out of how we train — not anecdotes.
          </p>
          <div className={s.impactGrid}>
            <div>
              <div className={s.impactNum}><AnimatedNumber value="-42%" /></div>
              <div className={s.impactLabel}>Avoidable denial rate · post-training</div>
            </div>
            <div>
              <div className={s.impactNum}><AnimatedNumber value="2.3×" /></div>
              <div className={s.impactLabel}>Faster ramp · new hires</div>
            </div>
            <div>
              <div className={s.impactNum}><AnimatedNumber value="89%" /></div>
              <div className={s.impactLabel}>Internal promotion rate · trained cohort</div>
            </div>
            <div>
              <div className={s.impactNum}><AnimatedNumber value="612" /></div>
              <div className={s.impactLabel}>Industry certifications earned</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ (client) ===== */}
      <FaqAccordion />

      {/* ===== CTA ===== */}
      <section className={s.cta}>
        <div className="container">
          <h2>Want to know what training looks like for a specific role?</h2>
          <p className={s.lead}>Hop on a call with our L&amp;D team. 20 minutes, no pitch.</p>
          <div className={s.ctaButtons}>
            <Link href="/contact#form" className={s.btnPrimary}>
              Talk to L&amp;D <span className={s.arrow}>&rarr;</span>
            </Link>
            <Link href="/careers" className={s.btnSecondary}>
              See life at Solveye
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
