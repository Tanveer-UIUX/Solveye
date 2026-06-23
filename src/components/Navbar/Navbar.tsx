'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import s from './Navbar.module.scss'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const path = usePathname()

  const isActive = (href: string) =>
    path === href || (href !== '/' && path.startsWith(href))

  return (
    <header className={s.nav}>
      <div className={s.inner}>
        <Link href="/" className={s.brand}>
          <Image src="/logo/SolvEye-Logo.png" alt="SolvEye" width={140} height={36} />
        </Link>

        <nav className={s.links} aria-label="Primary">
          <div className={s.hasDropdown}>
            <Link
              href="/services"
              className={`${s.link} ${isActive('/services') ? s.active : ''}`}
            >
              Services &#9662;
            </Link>
            <div className={s.dropdown}>
              <Link href="/services#billing" className={s.dropItem}>
                <strong>Medical Billing</strong>
                <small>End-to-end RCM for clinics &amp; hospitals</small>
              </Link>
              <Link href="/services#coding" className={s.dropItem}>
                <strong>Medical Coding</strong>
                <small>CPT, ICD-10, HCC certified coders</small>
              </Link>
              <Link href="/services#credentialing" className={s.dropItem}>
                <strong>Provider Credentialing</strong>
                <small>Enrollment &amp; re-credentialing</small>
              </Link>
              <Link href="/services#ar" className={s.dropItem}>
                <strong>AR Recovery</strong>
                <small>Aged claim follow-up &amp; appeals</small>
              </Link>
              <Link href="/services" className={s.dropItem}>
                <strong>All services &rarr;</strong>
              </Link>
            </div>
          </div>

          <Link href="/about" className={`${s.link} ${isActive('/about') ? s.active : ''}`}>
            About
          </Link>
          <Link href="/careers" className={`${s.link} ${isActive('/careers') ? s.active : ''}`}>
            Careers
          </Link>
          <Link href="/life-at-solveye" className={`${s.link} ${isActive('/life-at-solveye') ? s.active : ''}`}>
            Life at Solveye
          </Link>
          <Link href="/training-workshops" className={`${s.link} ${isActive('/training-workshop') ? s.active : ''}`}>
            Traning & Workshop
          </Link>
          <Link href="/team" className={`${s.link} ${isActive('/team') ? s.active : ''}`}>
            Team
          </Link>
          <Link href="/contact" className={`${s.link} ${isActive('/contact') ? s.active : ''}`}>
            Contact
          </Link>
        </nav>

        <div className={s.cta}>
          <Link href="/contact#demo" className={s.btnPrimary}>Contact Us</Link>
          <button
            className={s.toggle}
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${s.mobileMenu} ${open ? s.open : ''}`}>
        <Link href="/services" className={s.link} onClick={() => setOpen(false)}>Services</Link>
        <Link href="/about" className={s.link} onClick={() => setOpen(false)}>About</Link>
        <Link href="/careers" className={s.link} onClick={() => setOpen(false)}>Careers</Link>
        <Link href="/team" className={s.link} onClick={() => setOpen(false)}>Life at Solveye</Link>
        <Link href="/team" className={s.link} onClick={() => setOpen(false)}>Traning & Workshop</Link>
        <Link href="/team" className={s.link} onClick={() => setOpen(false)}>Team</Link>
        <Link href="/contact" className={s.link} onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </header>
  )
}
