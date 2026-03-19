import type { Metadata } from 'next'

export const metadata: Metadata = {
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RemodexLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
