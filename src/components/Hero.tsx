// FILE: Hero.tsx
// Purpose: Render the landing hero with messaging, CTA actions, and product mockup.
// Layer: Presentational component
// Depends on: next/font/google, next/image, react-icons

import { JetBrains_Mono } from 'next/font/google'
import Image from 'next/image'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { HiMiniFire } from 'react-icons/hi2'
import { LuArrowRight, LuTerminal } from 'react-icons/lu'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export function Hero() {
  return (
    <section className="relative z-20 min-h-[calc(100vh-80px)] flex items-center px-4 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16">
        {/* Copy and actions */}
        <div className="flex flex-col items-start text-left flex-1">
          <div className="inline-flex items-center gap-1.5 border border-foreground/15 bg-background rounded-full px-3 py-1 mb-4 md:mb-8">
            <HiMiniFire size={11} className="text-foreground/50" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-foreground/50">
              Codex Agent on Your iPhone
            </span>
          </div>

          <h1
            className="font-bold leading-[1.05] tracking-tight md:whitespace-nowrap"
            style={{ fontSize: 'clamp(2.2rem, 4.2vw, 5rem)' }}
          >
            <span className="block text-foreground">Code from anywhere.</span>
            <span className="block shimmer-text">No Mac required.</span>
          </h1>

          <p className="mt-3 md:mt-7 text-foreground/40 max-w-sm text-sm leading-relaxed">
            Connect your GitHub repo, spin up a Codex agent, and code straight
            from your iPhone. Watch every change stream in real time and push
            when you're ready.
          </p>

          {/* Keep conversion-first CTA ordering while exposing the open-source test path. */}
          <div className="mt-5 md:mt-9 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://tally.so/r/b5lYz1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-1 rounded-full bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <LuTerminal size={15} strokeWidth={2.5} /> Start Coding
            </a>
            <a
              href="https://github.com/Emanuele-web04/remodex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-1.5 rounded-full border border-foreground/15 bg-background/80 px-7 text-sm font-medium text-foreground transition-colors hover:border-foreground/35 hover:bg-foreground/5"
            >
              <FaGithub size={15} />
              Try remote control too
            </a>
          </div>

          {/* Social proof link for the most recent public progress update. */}
          <a
            href="https://x.com/emanueledpt/status/2029988488586662321?s=20"
            target="_blank"
            rel="noopener noreferrer"
            className={`${jetbrainsMono.className} mt-3 inline-flex items-center gap-1.5 text-xs md:text-sm text-foreground/70 underline underline-offset-4 hover:text-foreground transition-colors`}
          >
            <FaXTwitter size={12} />
            See latest update
            <LuArrowRight size={13} />
          </a>
        </div>

        {/* Mockup — right on desktop, below button on mobile */}
        <div
          className="relative flex-shrink-0 w-[calc(100%+2rem)] -mx-4 md:mx-0 md:w-auto"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 90%), linear-gradient(to bottom, black 50%, transparent 92%)',
            WebkitMaskComposite: 'source-in',
            maskImage: 'linear-gradient(to right, black 40%, transparent 90%), linear-gradient(to bottom, black 50%, transparent 92%)',
            maskComposite: 'intersect',
          }}
        >
          <Image
            src="/mockupp.png"
            alt="Phodex app mockup"
            width={520}
            height={620}
            className="relative w-full max-w-[360px] mx-auto md:max-w-none md:w-[520px]"
            priority
          />
        </div>

      </div>
    </section>
  )
}
