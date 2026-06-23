import Link from 'next/link'
import Image from 'next/image'
import s from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.grid}>
          {/* Brand */}
          <div className={s.brandCol}>
            <Link href="/" className={s.brand}>
              <Image src="/logo/SolvEye-Logo.png" alt="SolvEye" width={140} height={36} />
            </Link>
            <p>
              Healthcare BPO and IT services that move the needle on revenue,
              accuracy, and patient experience.
            </p>
            <div className={s.badges}>
              <span className={s.badge}>&#9679; HIPAA</span>
              <span className={s.badge}>&#9679; SOC 2 TYPE II</span>
              <span className={s.badge}>&#9679; HITRUST</span>
            </div>
          </div>

          {/* Services */}
          <div className={s.col}>
            <h5>Services</h5>
            <ul>
              <li><Link href="/services">Medical Billing</Link></li>
              <li><Link href="/services#coding">Medical Coding</Link></li>
              <li><Link href="/services#credentialing">Credentialing</Link></li>
              <li><Link href="/services#ar">AR Recovery</Link></li>
              <li><Link href="/services#priorauth">Prior Authorization</Link></li>
              <li><Link href="/services#analytics">Practice Analytics</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className={s.col}>
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/team">Leadership</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/about#culture">Culture</Link></li>
              <li><Link href="/about#compliance">Compliance</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className={s.col}>
            <h5>Resources</h5>
            <ul>
              <li><Link href="#">Case studies</Link></li>
              <li><Link href="#">RCM playbook</Link></li>
              <li><Link href="#">Insights blog</Link></li>
              <li><Link href="#">Press</Link></li>
              <li><Link href="/contact">Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={s.col}>
            <h5>Contact</h5>
            <ul>
              <li>
                <address>
                  2120 Market Street, Suite 400<br />
                  Philadelphia, PA 19103
                </address>
              </li>
              <li><a href="tel:+18554655639">+1 (855) 465-5639</a></li>
              <li><a href="mailto:hello@solveye.health">hello@solveye.health</a></li>
            </ul>
          </div>
        </div>

        <div className={s.bottom}>
          <span>&copy; 2026 Solveye Health, Inc. All rights reserved.</span>
          <div className={s.legal}>
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Accessibility</Link>
            <Link href="#">Notice of Privacy Practices</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
