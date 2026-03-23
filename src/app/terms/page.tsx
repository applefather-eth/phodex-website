import { readFileSync } from 'fs'
import { join } from 'path'
import type { Metadata } from 'next'

import { LegalPage } from '@/components/remodex/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Use — Remodex',
  description: 'Remodex Terms of Use. Read the terms governing your use of the Remodex app.',
}

export default function TermsPage() {
  const content = readFileSync(
    join(process.cwd(), 'src/content/remodex/terms.md'),
    'utf-8'
  )

  return <LegalPage content={content} />
}
