import { readFileSync } from 'fs'
import { join } from 'path'
import type { Metadata } from 'next'

import { LegalPage } from '@/components/remodex/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy — Remodex',
  description: 'Remodex Privacy Policy. Learn how we handle your data with our local-first, privacy-respecting architecture.',
}

export default function PrivacyPolicyPage() {
  const content = readFileSync(
    join(process.cwd(), 'src/content/remodex/privacy-policy.md'),
    'utf-8'
  )

  return <LegalPage content={content} />
}
