'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import s from './page.module.scss'

export type Group = 'exec' | 'ops' | 'eng' | 'gtm' | 'ppl'
export type Filter = 'all' | Group

export interface TeamMember {
  g: Group
  nm: string
  ti: string
  loc: string
  since: string
  prev: string
  img: string
  bio: string
}

export interface FilterItem {
  key: Filter
  label: string
}

export interface DeptSection {
  key: Group
  label: string
}

interface Props {
  team: TeamMember[]
  filters: FilterItem[]
  deptSections: DeptSection[]
}

const BASE = 'https://images.unsplash.com'

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

export default function TeamClient({ team, filters, deptSections }: Props) {
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
  const execMembers = team.filter(t => t.g === 'exec')

  return (
    <>
      {/* Filter chips */}
      <div className={s.filtersWrap}>
        <div className="container">
          <div className={s.filters}>
            <span className={s.filterLabel}>Filter</span>
            {filters.map(f => (
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
              <h2>Founders &amp; C-Suite</h2>
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
        {deptSections.map(dept => showGroup(dept.key) && (
          <div key={dept.key} className={s.deptSection}>
            <h3>{dept.label}</h3>
            <div className={s.deptGrid}>
              {team.filter(t => t.g === dept.key).map(m => (
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
              <h2>Want To Add Your Name To This List?</h2>
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
