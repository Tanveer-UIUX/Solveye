'use client'

import { useState } from 'react'
import s from './page.module.scss'

export default function ContactForm() {
  const [done, setDone] = useState(false)

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    setDone(true)
  }

  return (
    <div id="form" className={s.formCard}>
      {done ? (
        <form className={s.form}>
          <h3>Send us a note</h3>
          <div className={s.success}>
            ✓ Thank you. We&rsquo;ll respond within one business day.
          </div>
        </form>
      ) : (
        <form className={s.form} onSubmit={handleSubmit} noValidate>
          <h3>Send us a note</h3>
          <p className={s.formLead}>
            Anything else — partnerships, media, compliance questions, or just curiosity.
          </p>

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
            Send Us a Message
          </button>
        </form>
      )}
    </div>
  )
}
