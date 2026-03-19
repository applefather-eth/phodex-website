import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Cormorant_Garamond,
  IBM_Plex_Sans,
  JetBrains_Mono,
} from 'next/font/google'
import { FaApple, FaGithub, FaStar } from 'react-icons/fa6'
import {
  LuArrowRight,
  LuGitBranch,
  LuMonitor,
  LuPlay,
  LuQrCode,
  LuShield,
  LuWifi,
  LuZap,
} from 'react-icons/lu'

import { ThemeToggle } from '@/components/ThemeToggle'
import { TerminalGrid } from '@/components/TerminalGrid'
import { FadeIn } from '@/components/remodex/FadeIn'
import { CopyButton } from '@/components/remodex/CopyButton'
import { getRemodexStars, REMODEX_REPO_URL } from '@/lib/github'

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})
const bodyFont = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})
const mono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Remodex — Remote Control for Codex',
  description:
    'Control Codex from your iPhone. Open-source bridge + iOS app with end-to-end encryption. Local-first, self-host friendly.',
}

const FEATURES = [
  {
    icon: LuShield,
    title: 'End-to-End Encrypted',
    description: 'X25519 key exchange with AES-256-GCM. The transport layer cannot decrypt your code.',
  },
  {
    icon: LuQrCode,
    title: 'QR Code Pairing',
    description: 'Scan once to establish a cryptographic session. No accounts, no cloud.',
  },
  {
    icon: LuZap,
    title: 'Interactive Modes',
    description: 'Fast mode for low-latency iteration. Plan mode for structured thinking.',
  },
  {
    icon: LuGitBranch,
    title: 'Git from iPhone',
    description: 'Commit, push, pull, and switch branches without touching your Mac.',
  },
  {
    icon: LuPlay,
    title: 'Task Steering',
    description: 'Steer active runs mid-execution. Queue follow-up prompts without restarting.',
  },
  {
    icon: LuMonitor,
    title: 'Desktop Sync',
    description: 'Shared thread history with Codex.app. Resume sessions with remodex resume.',
  },
]

const STEPS = [
  { num: '01', title: 'Install the bridge', description: 'One npm command sets up the Node.js bridge on your Mac.', code: 'npm i -g remodex@latest' },
  { num: '02', title: 'Run remodex up', description: 'Start the bridge, connect to Codex, and print a QR code.', code: 'remodex up' },
  { num: '03', title: 'Scan QR code and check status', description: 'Scan the QR from the iOS app to pair, then verify the bridge is live.', code: 'remodex status' },
]

export default async function RemodexPage() {
  const stars = await getRemodexStars()

  return (
    <div className={`${bodyFont.className} relative min-h-screen overflow-hidden bg-background`}>
      <TerminalGrid />

      {/* ── Navbar ── */}
      <header className="relative z-20 px-5 sm:px-6 md:px-16 lg:px-24 py-7 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Remodex" width={20} height={20} className="rounded-sm" />
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-foreground/80">Remodex</span>
        </div>
        <ThemeToggle />
      </header>

      {/* ── Hero ── */}
      <section className="relative z-20 px-5 sm:px-6 md:px-16 lg:px-24 py-12 md:py-0 md:min-h-[calc(100vh-80px)] flex items-center">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="flex flex-col items-start flex-1 w-full md:max-w-xl">
            <FadeIn>
              <a
                href={REMODEX_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/15 bg-muted rounded-full px-3 py-1.5 mb-8 transition-colors hover:border-foreground/25"
              >
                <FaGithub size={11} className="text-foreground/50" />
                <span className={`${mono.className} text-[10px] tracking-[0.22em] uppercase text-foreground/50`}>
                  Open source on GitHub
                </span>
                {typeof stars === 'number' && (
                  <span className="inline-flex items-center gap-1 text-foreground/40">
                    <FaStar size={8} />
                    <span className={`${mono.className} text-[10px]`}>{stars}</span>
                  </span>
                )}
              </a>
            </FadeIn>

            <FadeIn delay={80}>
              <h1 className={`${displayFont.className} text-[2.6rem] sm:text-[3.4rem] md:text-[4.4rem] lg:text-[5.2rem] leading-[0.88] tracking-[-0.04em] text-foreground`}>
                Control Codex from your iPhone.
              </h1>
            </FadeIn>

            <FadeIn delay={160}>
              <p className="mt-8 text-[15px] sm:text-base leading-7 text-foreground/50 max-w-lg font-[family-name:var(--font-geist-sans)]">
                Open-source iPhone bridge for Codex. The app stays lightweight,
                the repo stays on your machine, and every active run remains
                readable while you move. End-to-end encrypted.
              </p>
            </FadeIn>

            <FadeIn delay={240} className="w-full">
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap w-full">
                <a
                  href="https://testflight.apple.com/join/PKZhBUVM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-90 font-sans"
                >
                  <FaApple size={17} />
                  Download App Now
                </a>
                <div className={`${mono.className} inline-flex h-12 w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-foreground/15 bg-muted px-4 sm:px-5 text-xs sm:text-sm text-foreground/60`}>
                  <span className="truncate">npm i -g remodex@latest</span>
                  <CopyButton text="npm i -g remodex@latest" />
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={200} className="flex-shrink-0">
            <div
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at center, black 70%, transparent 100%)',
                maskImage: 'radial-gradient(ellipse 75% 75% at center, black 70%, transparent 100%)',
              }}
            >
              <Image
                src="/hero.png"
                alt="Remodex app mockup"
                width={520}
                height={620}
                className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[480px]"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Screenshot gallery ── */}
      <section className="relative z-20 px-5 sm:px-6 md:px-16 lg:px-24 py-24 md:py-36">
        <div className="w-full max-w-7xl mx-auto">
          <FadeIn>
            <span className={`${mono.className} text-[11px] tracking-[0.3em] uppercase text-foreground/30`}>
              Interface
            </span>
            <h2 className={`${displayFont.className} mt-4 text-3xl sm:text-4xl md:text-5xl leading-[0.92] tracking-[-0.035em] text-foreground`}>
              Built for focus.
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[
              { src: '/speed.jpg', title: 'Live control', description: 'Fast mode, Plan mode, steer active runs, and queue follow-up prompts — all without restarting.', contain: true },
              { src: '/giti.jpg', title: 'Git from iPhone', description: 'Commit, push, pull, branch, stash, and inspect diffs. The full git workflow from your pocket.', contain: true },
              { src: '/connection.png', title: 'Secure pairing', description: 'QR bootstrap with E2E encryption. Trusted devices auto-reconnect — no re-scan needed.', contain: true },
              { src: '/files-skills.png', title: '@files, $skills, /commands', description: 'Reference files with @, invoke skills with $, run /review, /status, or /subagents to spawn parallel agents.', contain: true },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="group rounded-[2rem] border-2 border-foreground/15 bg-card overflow-hidden h-full flex flex-col">
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={800}
                      height={500}
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className={`w-full h-auto transition-transform duration-500 group-hover:scale-[1.03] ${item.contain ? '' : 'object-cover object-top'}`}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="px-5 sm:px-7 md:px-8 py-4 sm:py-5">
                    <h3 className="text-sm sm:text-base font-medium text-foreground mb-1 font-sans">{item.title}</h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-foreground/45 font-[family-name:var(--font-geist-sans)]">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features — clean grid, no cards ── */}
      <section className="relative z-20 px-5 sm:px-6 md:px-16 lg:px-24 py-24 md:py-36">
        <div className="w-full max-w-7xl mx-auto">
          <FadeIn>
            <span className={`${mono.className} text-[11px] tracking-[0.3em] uppercase text-foreground/30`}>
              Features
            </span>
            <h2 className={`${displayFont.className} mt-4 text-3xl sm:text-4xl md:text-5xl leading-[0.92] tracking-[-0.035em] text-foreground`}>
              Everything you need.{' '}
              <span className="text-foreground/20">Nothing you don&apos;t.</span>
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 60}>
                <div className="rounded-2xl border border-foreground/10 bg-card p-6 sm:p-7 md:p-8 h-full">
                  <f.icon size={22} strokeWidth={1.5} className="text-foreground/35 mb-5" />
                  <h3 className="text-base font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/40">{f.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="relative z-20 px-5 sm:px-6 md:px-16 lg:px-24 py-24 md:py-36">
        <div className="w-full max-w-7xl mx-auto">
          <FadeIn>
            <span className={`${mono.className} text-[11px] tracking-[0.3em] uppercase text-foreground/30`}>
              Setup
            </span>
            <h2 className={`${displayFont.className} mt-4 text-3xl sm:text-4xl md:text-5xl leading-[0.92] tracking-[-0.035em] text-foreground`}>
              Three moves, then you&apos;re in.
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
            {STEPS.map((s, i) => (
              <FadeIn key={s.num} delay={i * 100}>
                <div className="rounded-2xl border border-foreground/10 bg-card p-6 sm:p-7 md:p-8 h-full flex flex-col">
                  <span className={`${mono.className} text-[11px] tracking-[0.3em] text-foreground/20`}>{s.num}</span>
                  <h3 className="mt-4 text-base font-medium text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/40 mb-5 flex-1">{s.description}</p>
                  {s.code && (
                    <div className={`${mono.className} text-[11px] sm:text-xs text-foreground/50 bg-foreground/5 border border-foreground/10 rounded-lg px-3 py-2 flex items-center justify-between gap-2 sm:gap-3`}>
                      <span className="flex items-center gap-2">
                        <span className="text-foreground/20">$</span>
                        <span>{s.code}</span>
                      </span>
                      <CopyButton text={s.code} />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security ── */}
      <section className="relative z-20 px-5 sm:px-6 md:px-16 lg:px-24 py-24 md:py-36">
        <div className="w-full max-w-7xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl border border-foreground/10 bg-card p-6 sm:p-8 md:p-16">
              <div className="flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-16">
                <LuShield size={32} strokeWidth={1.3} className="text-foreground/25 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className={`${displayFont.className} text-2xl sm:text-3xl md:text-4xl leading-[0.92] tracking-[-0.03em] text-foreground mb-5`}>
                    Security by default
                  </h3>
                  <p className="text-[15px] leading-7 text-foreground/40 max-w-2xl">
                    Every session begins with a fresh X25519 ephemeral key exchange.
                    Application payloads are encrypted with AES-256-GCM and protected
                    by monotonic counters against replay attacks. The transport layer
                    observes connection metadata but cannot decrypt your code.
                  </p>
                  <div className={`${mono.className} mt-10 flex flex-wrap gap-2`}>
                    {['X25519', 'AES-256-GCM', 'Ed25519', 'HKDF-SHA256', 'Replay protection'].map(t => (
                      <span key={t} className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[10px] tracking-[0.15em] uppercase text-foreground/35">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-20 px-5 sm:px-6 md:px-16 lg:px-24 py-24 md:py-44">
        <div className="w-full max-w-7xl mx-auto text-center">
          <FadeIn>
            <span className={`${mono.className} text-[11px] tracking-[0.3em] uppercase text-foreground/30`}>
              Get Started
            </span>
            <h2 className={`${displayFont.className} mt-5 text-3xl sm:text-4xl md:text-6xl leading-[0.88] tracking-[-0.04em] text-foreground`}>
              Your iPhone steers.
              <br />
              <span className="shimmer-text">Your Mac runs.</span>
            </h2>
            <p className="mt-6 text-sm sm:text-base text-foreground/40 max-w-md mx-auto leading-relaxed font-[family-name:var(--font-geist-sans)]">
              Open source. Local-first. End-to-end encrypted.
              No accounts, no cloud, no telemetry.
            </p>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://testflight.apple.com/join/PKZhBUVM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90 font-sans"
              >
                <FaApple size={17} />
                Download App Now
              </a>
              <a
                href={REMODEX_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-foreground/15 px-7 text-sm font-medium text-foreground/50 transition-colors hover:text-foreground hover:border-foreground/30 font-sans"
              >
                <FaGithub size={15} />
                View on GitHub
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-20 px-5 sm:px-6 md:px-16 lg:px-24 py-8 border-t border-foreground/8">
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/30">
          <div className="flex items-center gap-2">
            <LuWifi size={12} strokeWidth={2} className="text-foreground/40" />
            <span className="text-foreground/40">Remodex</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={REMODEX_REPO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground/50 transition-colors">GitHub</a>
            <span className={mono.className}>ISC License</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
