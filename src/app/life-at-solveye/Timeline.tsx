import s from './page.module.scss'
import TimelineClient, { type TimelineTab } from './TimelineClient'

const DAY: TimelineTab['items'] = [
  {
    time: '7:30 AM', timeLabel: 'Soft start',
    title: 'Coffee, queues, and quiet focus',
    desc: "Most ops teammates ease in between 7:30 and 9:00. The first 45 minutes are protected — no meetings, just a look at overnight queues, payer responses, and anything flagged by the team in APAC who's wrapping their day.",
    tags: [{ label: 'Async', color: 'blue' }, { label: 'No-meeting window' }],
  },
  {
    time: '9:15 AM', timeLabel: 'Pod standup',
    title: '15 minutes. Three questions. Every day.',
    desc: "Each 6-person pod gathers for a hard 15-minute standup. What's blocked, what's at risk, what does the pod need from leadership today? We don't read status — we surface friction. Pod leads roll patterns up to ops directors by 10:00.",
    tags: [{ label: 'Pod ritual', color: 'blue' }, { label: '15 min hard cap' }],
    milestone: true,
  },
  {
    time: '10:00 AM', timeLabel: 'Deep work',
    title: 'Two-hour focus block — calendars are red',
    desc: 'Calendars are protected company-wide from 10:00–12:00. Specialists work claims, coders close encounters, engineers ship features. No 1:1s, no internal meetings, no exceptions. We measured this — output in this block is 2.3× the rest of the day.',
    tags: [{ label: '+2.3× output', color: 'green' }, { label: 'Focus block' }],
  },
  {
    time: '12:00 PM', timeLabel: 'Lunch',
    title: 'Lunch is sacred — and free three days a week',
    desc: "Cafeteria opens at noon. Tuesday is North Indian, Wednesday is South Indian, Thursday is \"chef's choice\" (which is almost always biryani). Friday is potluck-by-team. Lunch is paid for three days; the other two we BYO or order in.",
    tags: [{ label: '3 free / week', color: 'amber' }, { label: 'No working lunch' }],
  },
  {
    time: '1:30 PM', timeLabel: 'Client time',
    title: 'The window when US clients are awake',
    desc: "Most US client calls land between 1:30 and 5:30 PM IST — morning hours on their coast. Pod leads handle 80% of these directly so the work doesn't get filtered through three layers of management before reaching the people doing it.",
    tags: [{ label: 'Direct contact' }],
  },
  {
    time: '4:30 PM', timeLabel: 'Wrap & handover',
    title: 'Document, hand off, log out',
    desc: "Last 30 minutes are for handover notes to overlapping shifts and posting any blockers to the pod channel. If you're still working at 6:00 PM something has gone wrong — and we treat that as a process problem, not a personal one.",
    tags: [{ label: 'Hard stop 5:30', color: 'green' }],
    milestone: true,
  },
  {
    time: '5:30 PM', timeLabel: 'Off',
    title: 'Go home. Or stay — your call.',
    desc: 'Office stays open until 8 PM for folks who want quiet space, library access, or to catch the on-site gym (which is busiest around 6 PM). Slack notifications are paused company-wide from 7 PM to 7 AM. No exceptions for managers.',
  },
]

const WEEK: TimelineTab['items'] = [
  {
    time: 'Monday', timeLabel: 'Plan',
    title: 'Weekly planning at the pod level',
    desc: "Mondays start with a 45-minute pod planning session. We look at the week's queues, payer deadlines, denials in flight, and any client check-ins. Each teammate leaves with a written plan for what they're owning that week.",
    tags: [{ label: 'Pod planning', color: 'blue' }, { label: 'Written plan' }],
    milestone: true,
  },
  {
    time: 'Tuesday', timeLabel: 'Build',
    title: 'Heads-down day',
    desc: 'Tuesday is our quietest meeting day by design. No company-wide events, no client QBRs scheduled, no all-hands. Just the work. Pods who need cross-functional sync use 30-minute working sessions instead of meetings.',
    tags: [{ label: 'Low-meeting day', color: 'green' }],
  },
  {
    time: 'Wednesday', timeLabel: 'Learn',
    title: 'Lunch & learn — every Wednesday at 12:30',
    desc: 'One teammate (any level) presents for 30 minutes on something they learned. Last month: ICD-10 updates from CMS, a denial-prediction model an analyst built in Looker, and how a new hire restructured a 14-step payer follow-up into 5 steps.',
    tags: [{ label: 'Any level presents', color: 'blue' }],
  },
  {
    time: 'Thursday', timeLabel: 'Demo',
    title: 'Thursday demo day — real work, real numbers',
    desc: "Every pod gets 5 minutes to show what they shipped. Coders show a tricky case they cleaned up; engineers demo a feature in staging; analysts walk through a new client dashboard. Leadership watches but doesn't grade. We just clap when something's good.",
    tags: [{ label: 'All-company', color: 'blue' }, { label: '5 min per pod' }],
    milestone: true,
  },
  {
    time: 'Friday', timeLabel: 'Close',
    title: 'Friday is for closing loops & sharpening saws',
    desc: 'Half the day is for closing the week cleanly — finishing work-in-progress, sending status to clients, updating dashboards. The afternoon is open: training, certifications, side projects, or the optional "Friday social" — a 1-hour potluck on the 6th-floor terrace.',
    tags: [{ label: 'Half-day rituals', color: 'amber' }],
  },
]

const YEAR: TimelineTab['items'] = [
  {
    time: 'Day 1', timeLabel: 'Welcome',
    title: 'Onboarding starts before you start',
    desc: "Your laptop, badge, swag, and first-week schedule arrive 5 days before Day 1. On Day 1 you meet your pod, your buddy, and your manager — in that order. No PowerPoints. You spend the afternoon shadowing a real workflow.",
    tags: [{ label: 'Buddy system', color: 'blue' }],
    milestone: true,
  },
  {
    time: 'Week 2', timeLabel: 'First case',
    title: 'You touch real client work in week 2',
    desc: "Specialists handle their first low-risk claim by day 10, with their buddy reviewing every action. Engineers ship a code change to staging by day 14. We've found people learn faster from real consequences than simulations.",
  },
  {
    time: 'Month 1', timeLabel: 'Cert',
    title: 'Role-specific certification',
    desc: "By the end of month 1 you've completed Solveye Foundations (HIPAA, compliance, payer rules, the platform) and one role-specific track. Cost: paid by us. Time: on the clock. Outcome: a credential you can take anywhere.",
    tags: [{ label: 'Paid time', color: 'green' }, { label: 'Portable cert' }],
  },
  {
    time: 'Month 3', timeLabel: 'First retro',
    title: '90-day check-in — both directions',
    desc: "At day 90 we run a structured conversation: how's the work, the pod, the manager, the company? You grade us on a 5-point scale across 12 dimensions. We also give you our honest read. If something's off — for either side — we fix it now, not in year 2.",
    tags: [{ label: 'Two-way', color: 'blue' }],
    milestone: true,
  },
  {
    time: 'Month 6', timeLabel: 'Own a thing',
    title: 'By month 6, you own something real',
    desc: "Could be a payer relationship, a client account segment, a coding specialty, or a slice of the product. Whatever it is — you're the one people ask. Ownership is how careers compound here, and we set it up early on purpose.",
  },
  {
    time: 'Month 12', timeLabel: 'Path',
    title: 'Year-one review and the 3-year map',
    desc: "Your first year closes with a structured promo discussion. We don't grade on a curve — if you've earned a step, you take a step. We also draft a 3-year map: where you want to go, what you need to learn, what stretch assignments unlock it. Plans get rewritten yearly; that's expected.",
    tags: [{ label: '3-yr career map', color: 'green' }],
    milestone: true,
  },
]

const TABS: TimelineTab[] = [
  { id: 'day', label: 'A typical day', items: DAY },
  { id: 'week', label: 'A typical week', items: WEEK },
  { id: 'year', label: 'A first year', items: YEAR },
]

export default function Timeline() {
  return (
    <section className={s.timelineSec}>
      <div className="container">
        <div className={s.secHead}>
          <div>
            <span className={s.eyebrow}>A typical day, week &amp; year</span>
            <h2>If you joined tomorrow, here&rsquo;s the cadence you&rsquo;d settle into.</h2>
          </div>
        </div>
        <TimelineClient tabs={TABS} />
      </div>
    </section>
  )
}
