// FILE: page.tsx
// Purpose: Serves the Remodex legal markdown for the data protection notice route.
// Layer: Next.js App Router page
// Depends on: remodex/privacy-policy.md, LegalPage

import { readFileSync } from 'fs'
import { join } from 'path'
import type { Metadata } from 'next'

import { LegalPage } from '@/components/remodex/LegalPage'

export const metadata: Metadata = {
  title: 'Data Protection Notice',
  description: 'How Remodex handles your data. Local-first architecture, end-to-end encryption, no accounts, no analytics, no tracking.',
  openGraph: {
    title: 'Data Protection Notice — Remodex',
    description: 'How Remodex handles your data. Local-first architecture, end-to-end encryption, no accounts, no analytics, no tracking.',
  },
  twitter: {
    card: 'summary',
    title: 'Data Protection Notice — Remodex',
    description: 'How Remodex handles your data. Local-first architecture, end-to-end encryption, no accounts, no analytics, no tracking.',
  },
}

export default function PrivacyPolicyPage() {
  const content = readFileSync(
    join(process.cwd(), 'src/content/remodex/privacy-policy.md'),
    'utf-8'
  )

  return <LegalPage content={content} />
}
