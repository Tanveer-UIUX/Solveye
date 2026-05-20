'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode, FormEvent, DragEvent, ChangeEvent } from 'react'
import s from './JobBoard.module.scss'

export interface Job {
  id: string
  title: string
  dept: string
  loc: string
  type: string
  comp: string
  level: string
  summary: string
  do: string[]
  need: string[]
  bonus: string[]
}

interface JobBoardProps {
  jobs: Job[]
}

const DEPTS = ['All', 'Operations', 'Engineering', 'Customer Success', 'People'] as const

const ACCEPTED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

export default function JobBoard({ jobs }: JobBoardProps) {
  const [dept, setDept] = useState<string>('All')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Job | null>(null)
  const [view, setView] = useState<'detail' | 'apply'>('detail')
  const [submitted, setSubmitted] = useState(false)

  const q = query.trim().toLowerCase()
  const filtered = jobs.filter((j) => {
    const matchDept = dept === 'All' || j.dept === dept
    const matchQuery =
      !q ||
      j.title.toLowerCase().includes(q) ||
      j.dept.toLowerCase().includes(q) ||
      j.loc.toLowerCase().includes(q)
    return matchDept && matchQuery
  })

  const closeModal = () => {
    setSelected(null)
    setView('detail')
    setSubmitted(false)
  }

  const openJob = (job: Job) => {
    setSelected(job)
    setView('detail')
    setSubmitted(false)
  }

  return (
    <div>
      {/* ---- Filter bar ---- */}
      <div className={s.bar}>
        <span className={s.label}>Department</span>
        {DEPTS.map((d) => (
          <button
            key={d}
            type="button"
            className={`${s.chip} ${dept === d ? s.active : ''}`}
            onClick={() => setDept(d)}
          >
            {d}
          </button>
        ))}
        <input
          type="search"
          className={s.search}
          placeholder="Search roles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search roles"
        />
      </div>

      {/* ---- Jobs list ---- */}
      {filtered.length === 0 ? (
        <div className={s.empty}>
          No roles match your filter — try clearing it or{' '}
          <a href="mailto:talent@solveye.health">send us a note</a>.
        </div>
      ) : (
        <div className={s.list}>
          {filtered.map((j) => (
            <button
              key={j.id}
              type="button"
              className={s.row}
              onClick={() => openJob(j)}
            >
              <div>
                <div className={s.title}>{j.title}</div>
                <div className={s.dept}>{j.dept}</div>
              </div>
              <div className={s.meta}>{j.loc}</div>
              <div className={s.metaMono}>
                {j.type} &middot; {j.level}
              </div>
              <span className={s.arrowBtn} aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      )}

      {/* ---- Modal ---- */}
      <Modal open={selected !== null} onClose={closeModal} apply={view === 'apply'}>
        {selected && view === 'detail' && (
          <JobDetail
            job={selected}
            onApply={() => setView('apply')}
            onClose={closeModal}
          />
        )}
        {selected && view === 'apply' && (
          <ApplyForm
            jobTitle={selected.title}
            submitted={submitted}
            onSubmit={() => setSubmitted(true)}
            onBack={() => setView('detail')}
            onClose={closeModal}
          />
        )}
      </Modal>
    </div>
  )
}

// =====================================================
// Modal — generic overlay + ESC + body scroll lock
// =====================================================
function Modal({
  open,
  onClose,
  apply,
  children,
}: {
  open: boolean
  onClose: () => void
  apply?: boolean
  children: ReactNode
}) {
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className={s.overlay}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={apply ? s.modalApply : s.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className={s.modalScroll}>
          {children}
        </div>
      </div>
    </div>
  )
}

// =====================================================
// Job Detail panel
// =====================================================
function JobDetail({
  job,
  onApply,
  onClose,
}: {
  job: Job
  onApply: () => void
  onClose: () => void
}) {
  return (
    <>
      <div className={s.modalHeader}>
        <div>
          <span className={s.modalEyebrow}>{job.dept}</span>
          <h3>{job.title}</h3>
        </div>
        <button
          type="button"
          className={s.modalClose}
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className={s.modalBody}>
        <div className={s.jmMeta}>
          <span>
            <em>Location</em>
            <strong>{job.loc}</strong>
          </span>
          <span>
            <em>Type</em>
            <strong>{job.type}</strong>
          </span>
          <span>
            <em>Compensation</em>
            <strong>{job.comp}</strong>
          </span>
          <span>
            <em>Level</em>
            <strong>{job.level}</strong>
          </span>
        </div>

        <p className={s.summary}>{job.summary}</p>

        <h4>What you&rsquo;ll do</h4>
        <ul>
          {job.do.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h4>What we&rsquo;re looking for</h4>
        <ul>
          {job.need.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h4>Bonus points</h4>
        <ul>
          {job.bonus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className={s.modalActions}>
          <button type="button" className={s.btnPrimary} onClick={onApply}>
            Apply for this role <span className={s.arrow}>&rarr;</span>
          </button>
          <button type="button" className={s.btnSecondary} onClick={onClose}>
            Back to roles
          </button>
        </div>
      </div>
    </>
  )
}

// =====================================================
// Apply Form panel
// =====================================================
function ApplyForm({
  jobTitle,
  submitted,
  onSubmit,
  onBack,
  onClose,
}: {
  jobTitle: string
  submitted: boolean
  onSubmit: () => void
  onBack: () => void
  onClose: () => void
}) {
  const [file, setFile] = useState<File | null>(null)
  const [dragging, setDragging] = useState(false)
  const [consent, setConsent] = useState<'yes' | 'no' | ''>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFile(f: File | null) {
    if (!f) return
    if (ACCEPTED_TYPES.includes(f.type)) setFile(f)
  }

  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setDragging(false)
    handleFile(e.dataTransfer.files[0] ?? null)
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    handleFile(e.target.files?.[0] ?? null)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (consent !== 'yes') return
    onSubmit()
  }

  const CloseIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )

  return (
    <>
      <div className={s.modalHeader}>
        <div>
          <span className={s.modalEyebrow}>Apply &middot; {jobTitle}</span>
          <h3>Tell us about yourself.</h3>
          <p>A human reads every application. We&rsquo;ll reply within 5 business days.</p>
        </div>
        <button type="button" className={s.modalClose} onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>
      </div>

      <div className={s.modalBody}>
        {submitted ? (
          <div className={s.success}>
            <strong>&#10003; Application received</strong>
            We&rsquo;ll be in touch within 5 business days at the email you provided.
            <div className={s.modalActions} style={{ justifyContent: 'center', marginTop: 16 }}>
              <button type="button" className={s.btnSecondary} onClick={onClose}>Close</button>
            </div>
          </div>
        ) : (
          <form className={s.form} onSubmit={handleSubmit}>

            <div className={s.formRow}>
              <div className={s.field}>
                <label htmlFor="apply-first">First name</label>
                <input id="apply-first" name="first" required />
              </div>
              <div className={s.field}>
                <label htmlFor="apply-last">Last name</label>
                <input id="apply-last" name="last" required />
              </div>
            </div>

            <div className={s.formRow}>
              <div className={s.field}>
                <label htmlFor="apply-email">Email</label>
                <input id="apply-email" name="email" type="email" required />
              </div>
              <div className={s.field}>
                <label htmlFor="apply-phone">Contact number</label>
                <input id="apply-phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required />
              </div>
            </div>

            <div className={s.field}>
              <label htmlFor="apply-link">LinkedIn profile</label>
              <input id="apply-link" name="linkedin" placeholder="https://linkedin.com/in/…" />
            </div>

            <div className={s.field}>
              <label htmlFor="apply-title">Current job title</label>
              <input id="apply-title" name="title" placeholder="e.g. Senior Medical Biller" required />
            </div>

            <div className={s.field}>
              <label htmlFor="apply-why">What draws you to Solveye?</label>
              <textarea id="apply-why" name="why" rows={4} required />
            </div>

            <div
              className={`${s.dropZone} ${dragging ? s.dragging : ''} ${file ? s.hasFile : ''}`}
              onDragOver={e => { e.preventDefault(); setDragging(true) }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click() }}
              aria-label="Upload resume — PDF, DOC or DOCX"
            >
              <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className={s.fileInput} onChange={onChange} />
              <div className={s.dropIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              {file ? (
                <div className={s.fileName}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {file.name}
                </div>
              ) : (
                <>
                  <div className={s.dropTitle}>Drag &amp; drop your resume here</div>
                  <div className={s.dropSub}>or <span className={s.browse}>click to browse</span></div>
                  <div className={s.dropHint}>PDF, DOC, DOCX — max 10 MB</div>
                </>
              )}
            </div>

            <div className={s.consent}>
              <p className={s.consentText}>
                I consent to Solveye collecting and storing my personal data for recruitment purposes, in accordance with the{' '}
                <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
              </p>
              <div className={s.radioGroup}>
                <label className={`${s.radioLabel} ${consent === 'yes' ? s.radioSelected : ''}`}>
                  <input type="radio" name="apply-consent" value="yes" checked={consent === 'yes'} onChange={() => setConsent('yes')} />
                  <span className={s.radioDot} />
                  Yes, I agree
                </label>
              </div>
            </div>

            <div className={s.modalActions}>
              <button type="submit" className={s.btnPrimary} disabled={consent !== 'yes'}>
                Submit application <span className={s.arrow}>&rarr;</span>
              </button>
              <button type="button" className={s.btnSecondary} onClick={onBack}>
                Back to role
              </button>
            </div>

          </form>
        )}
      </div>
    </>
  )
}
