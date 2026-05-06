'use client'

import { useState } from 'react'
import s from './page.module.scss'

type Tab = 'demo' | 'audit' | 'general'

function DemoForm() {
  const [done, setDone] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setDone(true)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit} noValidate>
      <h3>Book a 30-min demo</h3>
      <p className={s.formLead}>
        A real person from our team will walk you through the platform and answer your questions.
        No pre-recorded videos, no decks for the sake of decks.
      </p>

      {done ? (
        <div className={s.success}>
          ✓ Got it. A member of our team will be in touch within one business day to schedule your demo.
        </div>
      ) : (
        <>
          <div className={s.fieldRow}>
            <div className={s.field}>
              <label htmlFor="d-first">First name</label>
              <input id="d-first" name="first" required />
            </div>
            <div className={s.field}>
              <label htmlFor="d-last">Last name</label>
              <input id="d-last" name="last" required />
            </div>
          </div>
          <div className={s.field}>
            <label htmlFor="d-email">Work email</label>
            <input id="d-email" name="email" type="email" required />
          </div>
          <div className={s.fieldRow}>
            <div className={s.field}>
              <label htmlFor="d-org">Organization</label>
              <input id="d-org" name="org" required />
            </div>
            <div className={s.field}>
              <label htmlFor="d-role">Role</label>
              <input id="d-role" name="role" placeholder="e.g. CFO, RCM Director" />
            </div>
          </div>
          <div className={s.field}>
            <label htmlFor="d-provs">Provider count</label>
            <select id="d-provs" name="provs">
              <option value="">Select…</option>
              <option>1–5 providers</option>
              <option>6–25 providers</option>
              <option>26–100 providers</option>
              <option>100+ providers</option>
              <option>Hospital / health system</option>
            </select>
          </div>
          <div className={s.field}>
            <label htmlFor="d-notes">What would you like to discuss? (optional)</label>
            <textarea id="d-notes" name="notes" rows={3} placeholder="Specialty, current vendor, biggest pain point…" />
          </div>
          <div className={s.consent}>
            <input type="checkbox" id="c1" name="consent" required />
            <label htmlFor="c1">
              I agree to Solveye&rsquo;s privacy policy and to be contacted about this inquiry.
            </label>
          </div>
          <button className={s.submitBtn} type="submit">
            Request demo <span className={s.arrow}>&rarr;</span>
          </button>
        </>
      )}
    </form>
  )
}

function AuditForm() {
  const [done, setDone] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setDone(true)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit} noValidate>
      <h3>Free 90-day AR audit</h3>
      <p className={s.formLead}>
        Send us 90 days of claim data (de-identified or under NDA) and we&rsquo;ll model the recovery
        opportunity, denial breakdown, and likely AR reduction. Typical turnaround: 5 business days.
      </p>

      {done ? (
        <div className={s.success}>
          ✓ Got it. We&rsquo;ll reach out within one business day with NDA + secure data transfer instructions.
        </div>
      ) : (
        <>
          <div className={s.field}>
            <label htmlFor="a-name">Full name</label>
            <input id="a-name" name="name" required />
          </div>
          <div className={s.field}>
            <label htmlFor="a-email">Work email</label>
            <input id="a-email" name="email" type="email" required />
          </div>
          <div className={s.field}>
            <label htmlFor="a-org">Organization &amp; role</label>
            <input id="a-org" name="org" required />
          </div>
          <div className={s.field}>
            <label htmlFor="a-npr">Approximate annual NPR</label>
            <select id="a-npr" name="npr">
              <option>Under $5M</option>
              <option>$5M – $25M</option>
              <option>$25M – $100M</option>
              <option>$100M+</option>
            </select>
          </div>
          <div className={s.field}>
            <label htmlFor="a-ehr">Current EHR / PM</label>
            <input id="a-ehr" name="ehr" placeholder="Epic, athena, eClinicalWorks…" />
          </div>
          <div className={s.field}>
            <label htmlFor="a-pain">What&rsquo;s your biggest AR pain point?</label>
            <textarea id="a-pain" name="pain" rows={3} required />
          </div>
          <div className={s.consent}>
            <input type="checkbox" id="c2" name="consent" required />
            <label htmlFor="c2">
              I agree to Solveye&rsquo;s privacy policy and BAA-grade handling of any data shared.
            </label>
          </div>
          <button className={s.submitBtn} type="submit">
            Start my audit <span className={s.arrow}>&rarr;</span>
          </button>
        </>
      )}
    </form>
  )
}

function GeneralForm() {
  const [done, setDone] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setDone(true)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit} noValidate>
      <h3>Send us a note</h3>
      <p className={s.formLead}>
        Anything else — partnerships, media, compliance questions, or just curiosity.
      </p>

      {done ? (
        <div className={s.success}>
          ✓ Thank you. We&rsquo;ll respond within one business day.
        </div>
      ) : (
        <>
          <div className={s.field}>
            <label htmlFor="g-name">Full name</label>
            <input id="g-name" name="name" required />
          </div>
          <div className={s.field}>
            <label htmlFor="g-email">Email</label>
            <input id="g-email" name="email" type="email" required />
          </div>
          <div className={s.field}>
            <label htmlFor="g-topic">Topic</label>
            <select id="g-topic" name="topic">
              <option>Partnership</option>
              <option>Press / media</option>
              <option>Compliance / security</option>
              <option>General question</option>
            </select>
          </div>
          <div className={s.field}>
            <label htmlFor="g-msg">Message</label>
            <textarea id="g-msg" name="msg" rows={5} required />
          </div>
          <button className={s.submitBtn} type="submit">
            Send <span className={s.arrow}>&rarr;</span>
          </button>
        </>
      )}
    </form>
  )
}

export default function ContactForm() {
  const [tab, setTab] = useState<Tab>('demo')

  return (
    <div id="demo" className={s.formCard}>
      <div className={s.tabs}>
        <button
          className={`${s.tab} ${tab === 'demo' ? s.tabActive : ''}`}
          onClick={() => setTab('demo')}
        >
          Book a demo
        </button>
        <button
          className={`${s.tab} ${tab === 'audit' ? s.tabActive : ''}`}
          onClick={() => setTab('audit')}
        >
          Free AR audit
        </button>
        <button
          className={`${s.tab} ${tab === 'general' ? s.tabActive : ''}`}
          onClick={() => setTab('general')}
        >
          General inquiry
        </button>
      </div>

      {tab === 'demo' && <DemoForm />}
      {tab === 'audit' && <AuditForm />}
      {tab === 'general' && <GeneralForm />}
    </div>
  )
}
