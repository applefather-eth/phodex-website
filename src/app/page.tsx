import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { TerminalGrid } from '@/components/TerminalGrid'

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <TerminalGrid />
      <Navbar />
      <Hero />
    </div>
  )
}
