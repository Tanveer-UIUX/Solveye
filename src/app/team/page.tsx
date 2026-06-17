import type { Metadata } from 'next'
import Link from 'next/link'
import TeamClient, { type TeamMember, type FilterItem, type DeptSection } from './TeamClient'
import s from './page.module.scss'

const TEAM: TeamMember[] = [
  // EXEC
  { g: 'exec', nm: 'Maya Patel', ti: 'Co-founder & CEO', loc: 'Philadelphia, PA', since: '2014', prev: 'VP RCM, Mercy Cardiology Group', img: '/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', bio: 'Maya spent a decade running revenue cycle inside a multi-state cardiology group before co-founding Solveye in 2014. She wrote the original pod operating model on a whiteboard above a pharmacy in Philadelphia. She holds a BS from Penn and an MBA from Wharton, and serves on the board of HFMA Mid-Atlantic.' },
  { g: 'exec', nm: 'Daniel Roth', ti: 'Co-founder & President', loc: 'Philadelphia, PA', since: '2014', prev: 'Director of Operations, ClearLab Diagnostics', img: '/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80', bio: "Daniel runs day-to-day operations across all four delivery hubs. Before Solveye, he led operations at a mid-market clinical lab where he reduced denied claims by 38% over two years. He is the company's cultural anchor and writes the quarterly all-hands letter." },
  { g: 'exec', nm: 'Ravi Krishnan', ti: 'Co-founder & CTO', loc: 'Austin, TX', since: '2014', prev: 'Staff Engineer, athenahealth', img: '/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80', bio: "Ravi built the first version of Solveye's platform himself. He now leads engineering and security across two countries. Before Solveye he spent six years at athenahealth working on claims and payer integrations." },
  { g: 'exec', nm: 'Elena Sandoval', ti: 'Chief Financial Officer', loc: 'Philadelphia, PA', since: '2019', prev: 'VP Finance, Privia Health', img: '/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80', bio: 'Elena leads finance, FP&A, and corporate development. She joined Solveye after seven years at Privia Health where she scaled the finance org from 12 to 80. CPA, ex-Deloitte audit.' },
  { g: 'exec', nm: 'Dr. Aaron Whitfield', ti: 'Chief Medical Officer', loc: 'Boston, MA (remote)', since: '2021', prev: 'CMIO, Boston Medical Center', img: '/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80', bio: 'Aaron is a practicing internist who joined as our first physician hire. He leads clinical advisory, coding integrity oversight, and clinician engagement programs. MD from Yale, MPH from Hopkins.' },
  { g: 'exec', nm: 'Olukemi Adebayo', ti: 'Chief People Officer', loc: 'Austin, TX', since: '2020', prev: 'VP People, R1 RCM', img: '/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80', bio: "Kemi runs all things people: hiring, comp, learning, DEI, and culture. She came from R1 where she led people ops for the company's 6,000-person ops org. She is the architect of our 4-week minimum PTO policy and our pay equity audit." },
  // OPERATIONS
  { g: 'ops', nm: 'Suresh Iyer', ti: 'SVP, Global Operations', loc: 'Hyderabad, India', since: '2017', prev: 'GM, Optum India', img: '/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', bio: 'Suresh runs the Hyderabad and Manila delivery hubs combined — about 1,000 specialists. He joined as our first international hire when the Hyderabad office was 12 people.' },
  { g: 'ops', nm: 'Linh Nguyen', ti: 'VP, Coding Operations', loc: 'Hyderabad, India', since: '2018', prev: 'Senior Coder, Cognizant Healthcare', img: '/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80', bio: 'Linh leads coding operations across all specialties. She started as a junior coder, became a pod lead in two years, and now manages 400+ certified coders. CCS, CCS-P, CRC.' },
  { g: 'ops', nm: 'Marcus Johnson', ti: 'VP, AR & Denials', loc: 'Manila, Philippines', since: '2019', prev: 'Director, GeBBS Healthcare', img: '/photo-1463453091185-61582044d556?auto=format&fit=crop&w=600&q=80', bio: "Marcus owns aged AR recovery and denial workdown for the entire customer base. He authored our internal denial taxonomy that's now used across 480+ accounts." },
  { g: 'ops', nm: 'Priya Iyer', ti: 'Director, Specialty Coding', loc: 'Manila, Philippines', since: '2020', prev: 'Senior Coder, EXL Healthcare', img: '/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80', bio: "Priya runs cardiology, EP, and interventional coding pods. CPC, CIRCC, and the company's subject-matter expert on structural heart procedures." },
  // ENGINEERING
  { g: 'eng', nm: 'Marcus Thompson', ti: 'VP, Engineering', loc: 'Atlanta, GA (remote)', since: '2021', prev: 'Staff Eng, Stripe', img: '/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80', bio: "Marcus leads platform engineering, infrastructure, and security engineering. Before Solveye he was a staff engineer on Stripe's billing systems. He sets the technical direction across two countries." },
  { g: 'eng', nm: 'Jiwoo Park', ti: 'Head of Product', loc: 'Austin, TX', since: '2022', prev: 'Product Lead, Olive AI', img: '/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=600&q=80', bio: "Jiwoo runs product across the customer-facing dashboards and the internal ops platform. Her team builds with operations as the primary user, not customers." },
  { g: 'eng', nm: 'Sam Reilly', ti: 'Director, Security', loc: 'Philadelphia, PA', since: '2022', prev: 'Senior Security Eng, One Medical', img: '/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80', bio: 'Sam owns SOC 2, HITRUST, and ISO 27001 evidence pipelines. CISSP, CCSP, and a quietly-relentless advocate for least-privilege everywhere.' },
  // GTM
  { g: 'gtm', nm: 'Rebecca Stein', ti: 'CRO', loc: 'New York, NY', since: '2020', prev: 'VP Sales, Cedar', img: '/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=600&q=80', bio: 'Rebecca leads sales, customer success, and partnerships. She joined Solveye when ARR was $8M; today the GTM org is 80+ across four functions.' },
  { g: 'gtm', nm: "James O'Connor", ti: 'VP, Customer Success', loc: 'Boston, MA', since: '2021', prev: 'Director CS, R1 RCM', img: '/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80', bio: "James runs customer success across the hospital and large-group segments. Past hospital revenue cycle leader; comfortable in a CFO's office." },
  { g: 'gtm', nm: 'Anya Volkov', ti: 'Head of Marketing', loc: 'Austin, TX', since: '2023', prev: 'Marketing Lead, Notable Health', img: '/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80', bio: 'Anya leads brand, demand, and content. She wrote the RCM playbook our SEs use in customer audits.' },
  // PEOPLE
  { g: 'ppl', nm: 'Tariq Hassan', ti: 'Director, Talent', loc: 'Hyderabad, India', since: '2019', prev: 'Senior Recruiter, Wipro', img: '/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80', bio: 'Tariq leads recruiting across India and Philippines. Built the sourcing engine that hires 200+ coders and billers a year without dropping candidate experience.' },
  { g: 'ppl', nm: 'Naomi Brooks', ti: 'Head of L&D', loc: 'Philadelphia, PA', since: '2022', prev: 'L&D Lead, Cohere Health', img: '/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80', bio: 'Naomi runs the certification sponsorship program and our internal academy. Sponsored 380+ employees through CPC, CCS, RHIA, or CRCR last year.' },
]

const FILTERS: FilterItem[] = [
  { key: 'all', label: 'Everyone' },
  { key: 'exec', label: 'Executive' },
  { key: 'ops', label: 'Operations' },
  { key: 'eng', label: 'Engineering & Product' },
  { key: 'gtm', label: 'Go-to-market' },
  { key: 'ppl', label: 'People & Culture' },
]

const DEPT_SECTIONS: DeptSection[] = [
  { key: 'ops', label: 'Operations' },
  { key: 'eng', label: 'Engineering & Product' },
  { key: 'gtm', label: 'Go-to-market' },
  { key: 'ppl', label: 'People & Culture' },
]

export const metadata: Metadata = {
  title: 'Team — Solveye',
  description:
    'Meet the operators, clinicians & engineers behind Solveye\'s healthcare RCM platform — leadership across medical billing, coding, engineering & customer success.',
  alternates: {
    canonical: 'https://www.solveye.com/team',
  },
  robots: 'index,follow',
}

export default function TeamPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.crumb}>
            <Link href="/">Home</Link> / Team
          </div>

          <div className={s.heroGrid}>
            {/* Left: copy */}
            <div>
              <span className={s.eyebrow}>Leadership &amp; department heads</span>
              <h1>
                The people who<br />
                actually run Solveye.
              </h1>
              <p className={s.lead}>
                A mix of operators, clinicians, and engineers — most spent the first decade of their
                career inside the back office of a hospital, lab, or insurance company. They picked
                up the phone before they led a department.
              </p>
            </div>

            {/* Right: hall-of-fame animated stack */}
            <div className={s.hofStage} aria-label="Solveye team highlights">
              <div className={s.hofDeco} aria-hidden="true" />

              {/* Card 1 — large feature, leftmost */}
              <div className={`${s.hofCard} ${s.hof1}`}>
                <div className={s.hofSlides}>
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=900&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=80')" }} />
                </div>
              </div>

              {/* Card 2 — mid, center-right (offset by 1 photo) */}
              <div className={`${s.hofCard} ${s.hof2}`}>
                <div className={s.hofSlides}>
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=600&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80')" }} />
                </div>
              </div>

              {/* Card 3 — small trailing, far right (offset by 2 photos) */}
              <div className={`${s.hofCard} ${s.hof3}`}>
                <div className={s.hofSlides}>
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=400&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80')" }} />
                </div>
              </div>

              <div className={s.hofCaption}>
                <span className={s.hofBar} />
                <span>Solveye &middot; hall of fame</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLIENT: filters + grids + CTA + modal ===== */}
      <TeamClient team={TEAM} filters={FILTERS} deptSections={DEPT_SECTIONS} />
    </>
  )
}
