'use client'
import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { DragEvent, ChangeEvent } from 'react'
import s from './SubmitResumeModal.module.scss'

const SECTORS = [
  'Medical Billing & Coding',
  'AR & Denial Management',
  'Revenue Cycle Management',
  'Healthcare IT & Engineering',
  'Customer Success',
  'People & Talent',
  'Finance & Operations',
  'Other',
]

const COUNTRIES = [
  'United States',
  'India',
  'Philippines',
  'United Kingdom',
  'Canada',
  'Australia',
  'Other',
]

const ACCEPTED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

interface ModalProps {
  label?: React.ReactNode
  triggerClass?: string
}

interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  sector: string
  country: string
  jobTitle: string
  consent: 'yes' | 'no' | ''
  file: File | null
}

const INITIAL: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  sector: '',
  country: '',
  jobTitle: '',
  consent: '',
  file: null,
}

export default function SubmitResumeModal({ label = 'Submit Resume', triggerClass }: ModalProps = {}) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [form, setForm] = useState<FormState>(INITIAL)
  const [dragging, setDragging] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { setMounted(true) }, [])

  function close() {
    setOpen(false)
    setForm(INITIAL)
    setSubmitted(false)
  }

  function field(key: keyof FormState) {
    return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [key]: e.target.value }))
  }

  function handleFile(file: File | null) {
    if (!file) return
    if (ACCEPTED_TYPES.includes(file.type)) setForm(f => ({ ...f, file }))
  }

  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setDragging(false)
    handleFile(e.dataTransfer.files[0] ?? null)
  }

  function onSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    if (form.consent !== 'yes') return
    setSubmitted(true)
  }

  const canSubmit =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.phone &&
    form.sector &&
    form.country &&
    form.jobTitle &&
    form.file &&
    form.consent === 'yes'

  return (
    <>
      <button className={triggerClass ?? s.trigger} onClick={() => setOpen(true)}>
        {label}
      </button>

      {mounted && open && createPortal(
        <div
          className={s.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Submit Your Resume"
          onClick={e => { if (e.target === e.currentTarget) close() }}
        >
          <div className={s.modal}>
            <div className={s.header}>
              <div>
                <span className={s.eyebrow}>Join Solveye</span>
                <h2>Submit Your Resume</h2>
              </div>
              <button className={s.closeBtn} onClick={close} aria-label="Close modal">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {submitted ? (
              <div className={s.success}>
                <div className={s.successIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>Resume received!</h3>
                <p>We&rsquo;ll review your application and get back to you within 5 business days.</p>
                <button className={s.submitBtn} onClick={close}>Done</button>
              </div>
            ) : (
              <form className={s.form} onSubmit={onSubmit} noValidate>

                <div className={s.row2}>
                  <div className={s.field}>
                    <label htmlFor="sr-fname">First Name <span className={s.req}>*</span></label>
                    <input
                      id="sr-fname"
                      type="text"
                      placeholder="Jane"
                      value={form.firstName}
                      onChange={field('firstName')}
                      required
                    />
                  </div>
                  <div className={s.field}>
                    <label htmlFor="sr-lname">Last Name <span className={s.req}>*</span></label>
                    <input
                      id="sr-lname"
                      type="text"
                      placeholder="Smith"
                      value={form.lastName}
                      onChange={field('lastName')}
                      required
                    />
                  </div>
                </div>

                <div className={s.row2}>
                  <div className={s.field}>
                    <label htmlFor="sr-email">Email <span className={s.req}>*</span></label>
                    <input
                      id="sr-email"
                      type="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={field('email')}
                      required
                    />
                  </div>
                  <div className={s.field}>
                    <label htmlFor="sr-phone">Contact Number <span className={s.req}>*</span></label>
                    <input
                      id="sr-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={field('phone')}
                      required
                    />
                  </div>
                </div>

                <div className={s.row2}>
                  <div className={s.field}>
                    <label htmlFor="sr-sector">Select Sector <span className={s.req}>*</span></label>
                    <div className={s.selectWrap}>
                      <select id="sr-sector" value={form.sector} onChange={field('sector')} required>
                        <option value="">Choose a sector…</option>
                        {SECTORS.map(sec => <option key={sec} value={sec}>{sec}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className={s.field}>
                    <label htmlFor="sr-country">Select Country <span className={s.req}>*</span></label>
                    <div className={s.selectWrap}>
                      <select id="sr-country" value={form.country} onChange={field('country')} required>
                        <option value="">Choose a country…</option>
                        {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div className={s.field}>
                  <label htmlFor="sr-title">Current Job Title <span className={s.req}>*</span></label>
                  <input
                    id="sr-title"
                    type="text"
                    placeholder="e.g. Senior Medical Biller"
                    value={form.jobTitle}
                    onChange={field('jobTitle')}
                    required
                  />
                </div>

                <div
                  className={`${s.dropZone} ${dragging ? s.dragging : ''} ${form.file ? s.hasFile : ''}`}
                  onDragOver={e => { e.preventDefault(); setDragging(true) }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={onDrop}
                  onClick={() => fileInputRef.current?.click()}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click() }}
                  aria-label="Upload resume — PDF, DOC or DOCX"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className={s.fileInput}
                    onChange={e => handleFile(e.target.files?.[0] ?? null)}
                  />
                  <div className={s.dropIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                  {form.file ? (
                    <div className={s.fileName}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {form.file.name}
                    </div>
                  ) : (
                    <>
                      <div className={s.dropTitle}>Drag &amp; Drop your resume here</div>
                      <div className={s.dropSub}>or <span className={s.browse}>click to browse</span></div>
                      <div className={s.dropHint}>PDF, DOC, DOCX — max 10 MB</div>
                    </>
                  )}
                </div>

                <div className={s.consent}>
                  <p className={s.consentText}>
                    I consent to Solveye collecting and storing my personal data for recruitment purposes,
                    in accordance with the{' '}
                    <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                  </p>
                  <div className={s.radioGroup}>
                    <label className={`${s.radioLabel} ${form.consent === 'yes' ? s.radioSelected : ''}`}>
                      <input
                        type="radio"
                        name="sr-consent"
                        value="yes"
                        checked={form.consent === 'yes'}
                        onChange={() => setForm(f => ({ ...f, consent: 'yes' }))}
                      />
                      <span className={s.radioDot} />
                      Yes, I agree
                    </label>
                    <label className={`${s.radioLabel} ${form.consent === 'no' ? s.radioDenied : ''}`}>
                      <input
                        type="radio"
                        name="sr-consent"
                        value="no"
                        checked={form.consent === 'no'}
                        onChange={() => setForm(f => ({ ...f, consent: 'no' }))}
                      />
                      <span className={s.radioDot} />
                      No, I decline
                    </label>
                  </div>
                  {form.consent === 'no' && (
                    <p className={s.consentWarning}>Consent is required to submit your application.</p>
                  )}
                </div>

                <button type="submit" className={s.submitBtn} disabled={!canSubmit}>
                  Submit Resume <span className={s.arrow}>→</span>
                </button>

              </form>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
