import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

const UPLOAD_DIR = path.join(process.cwd(), 'uploads', 'applications')
const MAX_SIZE = 10 * 1024 * 1024 // 10 MB
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData()

    const first    = (form.get('first')    as string | null)?.trim()
    const last     = (form.get('last')     as string | null)?.trim()
    const email    = (form.get('email')    as string | null)?.trim()
    const phone    = (form.get('phone')    as string | null)?.trim()
    const linkedin = (form.get('linkedin') as string | null)?.trim() ?? ''
    const title    = (form.get('title')    as string | null)?.trim()
    const why      = (form.get('why')      as string | null)?.trim()
    const jobRole  = (form.get('jobRole')  as string | null)?.trim() ?? ''
    const consent  =  form.get('consent')  as string | null
    const file     =  form.get('file')     as File   | null

    if (!first || !last || !email || !phone || !title || !why) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }
    if (consent !== 'yes') {
      return NextResponse.json({ error: 'Consent is required.' }, { status: 400 })
    }
    if (!file || file.size === 0) {
      return NextResponse.json({ error: 'Resume file is required.' }, { status: 400 })
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: 'File exceeds 10 MB limit.' }, { status: 400 })
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: 'Only PDF, DOC, and DOCX files are accepted.' }, { status: 400 })
    }

    await mkdir(UPLOAD_DIR, { recursive: true })

    const ext      = file.name.split('.').pop() ?? 'bin'
    const safeName = `${Date.now()}-${email.replace(/[^a-z0-9]/gi, '_')}.${ext}`
    const buffer   = Buffer.from(await file.arrayBuffer())
    await writeFile(path.join(UPLOAD_DIR, safeName), buffer)

    // TODO: forward to ATS / send notification email to talent@solveye.health
    console.log('[apply] received', { first, last, email, phone, linkedin, title, why, jobRole, file: safeName })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[api/apply]', err)
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}
