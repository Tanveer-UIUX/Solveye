import TestimonialsScrollClient, { type Testimonial } from './TestimonialsScrollClient'

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'We moved from a multi-vendor mess to one team. Days in AR dropped from 54 to 28 in a single quarter, and we finally have a real-time view of what payers owe us.',
    name: 'Dr. Priya Mehta',
    role: 'CFO, Apex Cardiology Group',
    detail: '38 providers',
  },
  {
    quote:
      "Solveye's credentialing team cut our enrollment timeline in half. We had six new providers billing within 52 days — a first in ten years of practice growth.",
    name: 'James Whitfield',
    role: 'COO, Coastal Ortho',
    detail: '12 locations',
  },
  {
    quote:
      "Our denial rate was 18% when we started. Twelve weeks in, it's under 4%. The denial root-cause loop they run changed how we document procedures.",
    name: 'Rachel Torres',
    role: 'Revenue Cycle Director, Northstar Peds',
    detail: '22 providers',
  },
]

export default function TestimonialsScroll() {
  return <TestimonialsScrollClient testimonials={TESTIMONIALS} />
}
