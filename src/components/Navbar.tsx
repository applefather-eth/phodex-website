import { ThemeToggle } from './ThemeToggle'
import { LuTerminal } from 'react-icons/lu'

export function Navbar() {
  return (
    <header className="relative z-20 px-8 py-7 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <LuTerminal size={16} strokeWidth={2.5} className="text-foreground/80" />
        <span className="text-foreground text-sm font-semibold tracking-[0.25em] uppercase">
          phodex
        </span>
      </div>
      <ThemeToggle />
    </header>
  )
}
