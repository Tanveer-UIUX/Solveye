'use client'
import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { DragEvent, ChangeEvent } from 'react'
import s from './SubmitResumeModal.module.scss'


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
  linkedin: string
  jobTitle: string
  consent: 'yes' | 'no' | ''
  file: File | null
}

const INITIAL: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  linkedin: '',
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
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = prev
    }
  }, [open])

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

  async function onSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    if (form.consent !== 'yes') return
    setError('')
    setLoading(true)
    try {
      const fd = new FormData()
      fd.append('firstName', form.firstName)
      fd.append('lastName',  form.lastName)
      fd.append('email',     form.email)
      fd.append('phone',     form.phone)
      fd.append('linkedin',  form.linkedin)
      fd.append('jobTitle',  form.jobTitle)
      fd.append('consent',   form.consent)
      if (form.file) fd.append('file', form.file)

      const res = await fetch('/api/resume', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) { setError(data.error ?? 'Submission failed.'); return }
      setSubmitted(true)
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const canSubmit =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.phone &&
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
          role="presentation"
          onClick={e => { if (e.target === e.currentTarget) close() }}
        >
          <div
            className={s.modal}
            role="dialog"
            aria-modal="true"
            aria-label="Submit Your Resume"
          >
          <div className={s.modalScroll}>
            {/* ── Header ── */}
            <div className={s.modalHeader}>
              <div>
                <span className={s.modalEyebrow}>Join Solveye</span>
                <h3>Submit your resume.</h3>
                <p>A human reads every application. We&rsquo;ll reply within 5 business days.</p>
              </div>
              <button className={s.modalClose} onClick={close} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* ── Body ── */}
            <div className={s.modalBody}>
              {submitted ? (
                <div className={s.success}>
                  <strong>&#10003; Resume received</strong>
                  We&rsquo;ll review your profile and get back to you within 5 business days at the email you provided.
                  <div className={s.modalActions} style={{ justifyContent: 'center', marginTop: '1rem' }}>
                    <button type="button" className={s.btnSecondary} onClick={close}>Close</button>
                  </div>
                </div>
              ) : (
                <form className={s.form} onSubmit={onSubmit} noValidate>

                  <div className={s.formRow}>
                    <div className={s.field}>
                      <label htmlFor="sr-fname">First name <span className={s.req}>*</span></label>
                      <input id="sr-fname" type="text" placeholder="Jane" value={form.firstName} onChange={field('firstName')} required />
                    </div>
                    <div className={s.field}>
                      <label htmlFor="sr-lname">Last name <span className={s.req}>*</span></label>
                      <input id="sr-lname" type="text" placeholder="Smith" value={form.lastName} onChange={field('lastName')} required />
                    </div>
                  </div>

                  <div className={s.formRow}>
                    <div className={s.field}>
                      <label htmlFor="sr-email">Email <span className={s.req}>*</span></label>
                      <input id="sr-email" type="email" placeholder="jane@example.com" value={form.email} onChange={field('email')} required />
                    </div>
                    <div className={s.field}>
                      <label htmlFor="sr-phone">Contact number <span className={s.req}>*</span></label>
                      <input id="sr-phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={field('phone')} required />
                    </div>
                  </div>

                  <div className={s.field}>
                    <label htmlFor="sr-linkedin">LinkedIn profile</label>
                    <input id="sr-linkedin" type="url" placeholder="https://linkedin.com/in/…" value={form.linkedin} onChange={field('linkedin')} />
                  </div>

                  <div className={s.field}>
                    <label htmlFor="sr-title">Current job title <span className={s.req}>*</span></label>
                    <input id="sr-title" type="text" placeholder="e.g. Senior Medical Biller" value={form.jobTitle} onChange={field('jobTitle')} required />
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
                    <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className={s.fileInput} onChange={e => handleFile(e.target.files?.[0] ?? null)} />
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
                      <label className={`${s.radioLabel} ${form.consent === 'yes' ? s.radioSelected : ''}`}>
                        <input type="radio" name="sr-consent" value="yes" checked={form.consent === 'yes'} onChange={() => setForm(f => ({ ...f, consent: 'yes' }))} />
                        <span className={s.radioDot} />
                        Yes, I agree
                      </label>
                    </div>
                  </div>

                  {error && <p className={s.consentWarning}>{error}</p>}

                  <div className={s.modalActions}>
                    <button type="submit" className={s.btnPrimary} disabled={!canSubmit || loading}>
                      {loading ? 'Submitting…' : <> Submit resume <span className={s.arrow}>&rarr;</span></>}
                    </button>
                    <button type="button" className={s.btnSecondary} onClick={close} disabled={loading}>
                      Cancel
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
