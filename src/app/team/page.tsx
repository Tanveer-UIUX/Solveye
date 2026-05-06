import type { Metadata } from 'next'
import Link from 'next/link'
import TeamClient from './TeamClient'
import s from './page.module.scss'

export const metadata: Metadata = {
  title: 'Team — Solveye',
  description:
    'Meet the operators, clinicians, and engineers who built Solveye — the leadership team and department heads behind the platform.',
}

export default function TeamPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.crumb}>
            <Link href="/">Home</Link> / Team
          </div>

          <div className={s.heroGrid}>
            {/* Left: copy */}
            <div>
              <span className={s.eyebrow}>Leadership &amp; department heads</span>
              <h1>
                The people who<br />
                actually run Solveye.
              </h1>
              <p className={s.lead}>
                A mix of operators, clinicians, and engineers — most spent the first decade of their
                career inside the back office of a hospital, lab, or insurance company. They picked
                up the phone before they led a department.
              </p>
            </div>

            {/* Right: hall-of-fame animated stack */}
            <div className={s.hofStage} aria-label="Solveye team highlights">
              <div className={s.hofDeco} aria-hidden="true" />

              {/* Card 1 — large feature, leftmost */}
              <div className={`${s.hofCard} ${s.hof1}`}>
                <div className={s.hofSlides}>
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=900&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=80')" }} />
                </div>
              </div>

              {/* Card 2 — mid, center-right (offset by 1 photo) */}
              <div className={`${s.hofCard} ${s.hof2}`}>
                <div className={s.hofSlides}>
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=600&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80')" }} />
                </div>
              </div>

              {/* Card 3 — small trailing, far right (offset by 2 photos) */}
              <div className={`${s.hofCard} ${s.hof3}`}>
                <div className={s.hofSlides}>
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=400&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80')" }} />
                  <div className={s.hofSlide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80')" }} />
                </div>
              </div>

              <div className={s.hofCaption}>
                <span className={s.hofBar} />
                <span>Solveye &middot; hall of fame</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLIENT: filters + grids + CTA + modal ===== */}
      <TeamClient />
    </>
  )
}
