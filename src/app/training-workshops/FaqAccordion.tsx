import s from './page.module.scss'
import FaqAccordionClient, { type FaqItem } from './FaqAccordionClient'

const ITEMS: FaqItem[] = [
  {
    q: 'Is training on company time, or my time?',
    a: "Always on company time. Every hour of training — classroom, self-paced, even certification exam prep — is logged as work hours. If a manager pushes back on this, escalate to People Ops; it's policy.",
  },
  {
    q: 'Who pays for external certifications?',
    a: "Solveye pays in full for any certification on our approved list (CPC, CRCR, AAPC specialty certs, AWS Cloud Practitioner, Looker LookML, plus ~20 others). You commit to staying 12 months post-cert — if you leave earlier, you'd reimburse a prorated amount, which we've actually only enforced twice in 6 years.",
  },
  {
    q: 'Can I take a track that\'s not for my role?',
    a: 'Yes — any track, any time, subject to seat availability. A specialist who took our Analytics track is now a senior data analyst. A coder did Pod Lead Foundations on their own initiative and got promoted six months later.',
  },
  {
    q: 'What if I fail a certification exam?',
    a: "Nothing happens. You get a second attempt, paid. We track first-attempt pass rates only to improve the prep program, not as a performance signal. If you fail twice we have a 1:1 to figure out what's blocking you — sometimes it's the format, sometimes it's just the wrong cert.",
  },
  {
    q: 'Do trainers come from outside?',
    a: "Mostly internal. 14 of our specialists/leads are certified trainers and they teach about 80% of sessions. We bring in outside experts for new technology rollouts (e.g., AI/ML, new payer integrations) and for industry certifications we don't internally credential.",
  },
  {
    q: 'Is the training recorded?',
    a: 'Classroom sessions are recorded and live in our LMS for 12 months. Workshops with role-play or sensitive case discussions are not — to keep the room honest. Self-paced modules are always available.',
  },
]

export default function FaqAccordion() {
  return (
    <section className={s.faq}>
      <div className="container">
        <div className={s.faqGrid}>
          <div>
            <span className={s.eyebrow}>FAQ</span>
            <h2>Common questions.</h2>
            <p className={s.faqNote}>
              Got something not covered? Drop a note in #ask-l-and-d on Slack — usually answered the same day.
            </p>
          </div>
          <FaqAccordionClient items={ITEMS} />
        </div>
      </div>
    </section>
  )
}
