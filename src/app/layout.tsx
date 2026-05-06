import type { Metadata } from 'next'
import { Montserrat, Hind_Madurai, Exo } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import './globals.scss'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const hindMadurai = Hind_Madurai({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const exo = Exo({
  subsets: ['latin'],
  variable: '--font-eyebrow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Solveye — Healthcare BPO & IT Services',
  description:
    'Solveye gives clinics, hospitals, and health systems an integrated back-office — billing, coding, credentialing, and analytics — backed by a HIPAA-grade platform and 1,200+ specialists.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${hindMadurai.variable} ${exo.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
