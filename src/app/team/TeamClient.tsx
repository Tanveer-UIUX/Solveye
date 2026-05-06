'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import s from './page.module.scss'

type Group = 'exec' | 'ops' | 'eng' | 'gtm' | 'ppl'
type Filter = 'all' | Group

interface TeamMember {
  g: Group
  nm: string
  ti: string
  loc: string
  since: string
  prev: string
  img: string
  bio: string
}

const BASE = 'https://images.unsplash.com'

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
  { g: 'ops', nm: 'Priya Iyer', ti: 'Director, Specialty Coding', loc: 'Manila, Philippines', since: '2020', prev: 'Senior Coder, EXL Healthcare', img: '/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80', bio: 'Priya runs cardiology, EP, and interventional coding pods. CPC, CIRCC, and the company\'s subject-matter expert on structural heart procedures.' },

  // ENGINEERING
  { g: 'eng', nm: 'Marcus Thompson', ti: 'VP, Engineering', loc: 'Atlanta, GA (remote)', since: '2021', prev: 'Staff Eng, Stripe', img: '/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80', bio: 'Marcus leads platform engineering, infrastructure, and security engineering. Before Solveye he was a staff engineer on Stripe\'s billing systems. He sets the technical direction across two countries.' },
  { g: 'eng', nm: 'Jiwoo Park', ti: 'Head of Product', loc: 'Austin, TX', since: '2022', prev: 'Product Lead, Olive AI', img: '/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=600&q=80', bio: 'Jiwoo runs product across the customer-facing dashboards and the internal ops platform. Her team builds with operations as the primary user, not customers.' },
  { g: 'eng', nm: 'Sam Reilly', ti: 'Director, Security', loc: 'Philadelphia, PA', since: '2022', prev: 'Senior Security Eng, One Medical', img: '/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80', bio: 'Sam owns SOC 2, HITRUST, and ISO 27001 evidence pipelines. CISSP, CCSP, and a quietly-relentless advocate for least-privilege everywhere.' },

  // GTM
  { g: 'gtm', nm: 'Rebecca Stein', ti: 'CRO', loc: 'New York, NY', since: '2020', prev: 'VP Sales, Cedar', img: '/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=600&q=80', bio: 'Rebecca leads sales, customer success, and partnerships. She joined Solveye when ARR was $8M; today the GTM org is 80+ across four functions.' },
  { g: 'gtm', nm: "James O'Connor", ti: 'VP, Customer Success', loc: 'Boston, MA', since: '2021', prev: 'Director CS, R1 RCM', img: '/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80', bio: "James runs customer success across the hospital and large-group segments. Past hospital revenue cycle leader; comfortable in a CFO's office." },
  { g: 'gtm', nm: 'Anya Volkov', ti: 'Head of Marketing', loc: 'Austin, TX', since: '2023', prev: 'Marketing Lead, Notable Health', img: '/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80', bio: 'Anya leads brand, demand, and content. She wrote the RCM playbook our SEs use in customer audits.' },

  // PEOPLE
  { g: 'ppl', nm: 'Tariq Hassan', ti: 'Director, Talent', loc: 'Hyderabad, India', since: '2019', prev: 'Senior Recruiter, Wipro', img: '/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80', bio: 'Tariq leads recruiting across India and Philippines. Built the sourcing engine that hires 200+ coders and billers a year without dropping candidate experience.' },
  { g: 'ppl', nm: 'Naomi Brooks', ti: 'Head of L&D', loc: 'Philadelphia, PA', since: '2022', prev: 'L&D Lead, Cohere Health', img: '/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80', bio: 'Naomi runs the certification sponsorship program and our internal academy. Sponsored 380+ employees through CPC, CCS, RHIA, or CRCR last year.' },
]

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'Everyone' },
  { key: 'exec', label: 'Executive' },
  { key: 'ops', label: 'Operations' },
  { key: 'eng', label: 'Engineering & Product' },
  { key: 'gtm', label: 'Go-to-market' },
  { key: 'ppl', label: 'People & Culture' },
]

const DEPT_SECTIONS: { key: Group; label: string }[] = [
  { key: 'ops', label: 'Operations' },
  { key: 'eng', label: 'Engineering & Product' },
  { key: 'gtm', label: 'Go-to-market' },
  { key: 'ppl', label: 'People & Culture' },
]

function MemberCard({ member, onClick }: { member: TeamMember; onClick: () => void }) {
  return (
    <div className={s.member} onClick={onClick} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}>
      <div
        className={s.memberPhoto}
        style={{ backgroundImage: `url('${BASE}${member.img}')` }}
        aria-hidden="true"
      />
      <div className={s.memberName}>{member.nm}</div>
      <div className={s.memberTitle}>{member.ti}</div>
    </div>
  )
}

function LeaderCard({ member, onClick }: { member: TeamMember; onClick: () => void }) {
  return (
    <div className={s.leader} onClick={onClick} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}>
      <div
        className={s.leaderPhoto}
        style={{ backgroundImage: `url('${BASE}${member.img}')` }}
        aria-hidden="true"
      />
      <div>
        <div className={s.leaderName}>{member.nm}</div>
        <div className={s.leaderTitle}>{member.ti}</div>
      </div>
    </div>
  )
}

export default function TeamClient() {
  const [filter, setFilter] = useState<Filter>('all')
  const [active, setActive] = useState<TeamMember | null>(null)

  const closeModal = useCallback(() => {
    setActive(null)
    document.body.style.overflow = ''
  }, [])

  const openModal = useCallback((member: TeamMember) => {
    setActive(member)
    document.body.style.overflow = 'hidden'
  }, [])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, closeModal])

  const showGroup = (g: Group) => filter === 'all' || filter === g
  const execMembers = TEAM.filter(t => t.g === 'exec')

  return (
    <>
      {/* Filter chips */}
      <div className={s.filtersWrap}>
        <div className="container">
          <div className={s.filters}>
            <span className={s.filterLabel}>Filter</span>
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={`${s.chip} ${filter === f.key ? s.chipActive : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Executive / Leadership */}
      {showGroup('exec') && (
        <section className={s.leadership}>
          <div className="container">
            <div className={s.secHead}>
              <span className={s.eyebrow}>Executive</span>
              <h2>Founders &amp; C-suite</h2>
            </div>
            <div className={s.leaderGrid}>
              {execMembers.map(m => (
                <LeaderCard key={m.nm} member={m} onClick={() => openModal(m)} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dept sections */}
      <div className="container">
        {DEPT_SECTIONS.map(dept => showGroup(dept.key) && (
          <div key={dept.key} className={s.deptSection}>
            <h3>{dept.label}</h3>
            <div className={s.deptGrid}>
              {TEAM.filter(t => t.g === dept.key).map(m => (
                <MemberCard key={m.nm} member={m} onClick={() => openModal(m)} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA band */}
      <section className={s.ctaWrap}>
        <div className="container">
          <div className={s.ctaBand}>
            <div>
              <h2>Want to add your name to this list?</h2>
              <p>We&rsquo;re hiring across operations, engineering, customer success, and people roles in five locations.</p>
            </div>
            <div className={s.ctaButtons}>
              <Link href="/careers" className={s.ctaBtnLight}>
                See open roles <span className={s.arrow}>&rarr;</span>
              </Link>
              <Link href="/about" className={s.ctaBtnOutline}>
                Read about culture
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {active && (
        <div
          className={s.overlay}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={active.nm}
        >
          <div className={s.modal} onClick={e => e.stopPropagation()}>
            <div className={s.modalHeader}>
              <button className={s.modalClose} onClick={closeModal} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className={s.modalBody}>
              <div className={s.modalTop}>
                <div
                  className={s.modalPhoto}
                  style={{ backgroundImage: `url('${BASE}${active.img}')` }}
                />
                <div className={s.modalInfo}>
                  <h3>{active.nm}</h3>
                  <p className={s.modalTi}>{active.ti}</p>
                  <a href="#" className={s.liLink} target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className={s.modalMeta}>
                <div>
                  <strong>Based in</strong>
                  <span>{active.loc}</span>
                </div>
                <div>
                  <strong>At Solveye since</strong>
                  <span>{active.since}</span>
                </div>
                <div>
                  <strong>Previously</strong>
                  <span>{active.prev}</span>
                </div>
              </div>
              <div className={s.modalBio}>
                <p>{active.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
