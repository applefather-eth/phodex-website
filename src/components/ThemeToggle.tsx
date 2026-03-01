'use client'

import { IconSun, IconMoon } from '@tabler/icons-react'
import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      className="text-foreground/50 hover:text-foreground transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <IconSun size={16} stroke={1.8} /> : <IconMoon size={16} stroke={1.8} />}
    </button>
  )
}
