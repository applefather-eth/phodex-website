'use client'

import { useEffect, useRef } from 'react'

const CHARS = '*>.<:~|_#;${}\\/%&+=-^!?@'
const CELL = 12
const RADIUS = 160
const RADIUS_SQ = RADIUS * RADIUS
const CHANGE_MS = 100
const MAX_ALPHA = 0.3
const HALF = CELL / 2

export function TerminalGrid() {
  const cvs = useRef<HTMLCanvasElement>(null)
  const mouse = useRef(-9999, -9999)
  const grid = useRef<{ chars: Uint8Array; stamps: Float32Array; offsets: Float32Array; cols: number; rows: number } | null>(null)
  const raf = useRef(0)

  useEffect(() => {
    const el = cvs.current!
    const ctx = el.getContext('2d')!
    let mx = -9999
    let my = -9999

    function resize() {
      const dpr = devicePixelRatio
      const w = innerWidth
      const h = innerHeight
      el.width = w * dpr
      el.height = h * dpr
      el.style.width = w + 'px'
      el.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const cols = Math.ceil(w / CELL) + 1
      const rows = Math.ceil(h / CELL) + 1
      const n = cols * rows
      grid.current = {
        chars: new Uint8Array(n).map(() => Math.random() * CHARS.length | 0),
        stamps: new Float32Array(n),
        offsets: new Float32Array(n).map(() => Math.random() * Math.random() * 120),
        cols,
        rows,
      }
    }

    function draw(now: number) {
      const g = grid.current!
      const { chars, stamps, offsets, cols, rows } = g

      ctx.clearRect(0, 0, innerWidth, innerHeight)

      // early-out: mouse offscreen
      if (mx < -999) {
        raf.current = requestAnimationFrame(draw)
        return
      }

      const isDark = document.documentElement.classList.contains('dark')
      const r = isDark ? 255 : 0
      ctx.font = '10px monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      // only iterate cells near mouse
      const colMin = Math.max(0, ((mx - RADIUS) / CELL | 0) - 1)
      const colMax = Math.min(cols, ((mx + RADIUS) / CELL | 0) + 2)
      const rowMin = Math.max(0, ((my - RADIUS) / CELL | 0) - 1)
      const rowMax = Math.min(rows, ((my + RADIUS) / CELL | 0) + 2)

      for (let row = rowMin; row < rowMax; row++) {
        const y = row * CELL + HALF
        const dy = y - my
        const dySq = dy * dy
        const rowOff = row * cols

        for (let col = colMin; col < colMax; col++) {
          const x = col * CELL + HALF
          const dx = x - mx
          const distSq = dx * dx + dySq

          if (distSq >= RADIUS_SQ) continue

          const i = rowOff + col
          if (now - stamps[i] > CHANGE_MS + offsets[i]) {
            chars[i] = Math.random() * CHARS.length | 0
            stamps[i] = now
          }

          const intensity = 1 - Math.sqrt(distSq) / RADIUS
          ctx.fillStyle = `rgba(${r},${r},${r},${(intensity * MAX_ALPHA).toFixed(2)})`
          ctx.fillText(CHARS[chars[i]], x, y)
        }
      }

      raf.current = requestAnimationFrame(draw)
    }

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    const onLeave = () => { mx = -9999; my = -9999 }

    resize()
    raf.current = requestAnimationFrame(draw)

    addEventListener('mousemove', onMove)
    addEventListener('resize', resize)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      removeEventListener('mousemove', onMove)
      removeEventListener('resize', resize)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <canvas
      ref={cvs}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
