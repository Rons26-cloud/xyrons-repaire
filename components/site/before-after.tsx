'use client'

import { useCallback, useRef, useState } from 'react'
import { ArrowLeftRight } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const CASES = [
  {
    title: 'Ganti LCD',
    tagBefore: 'LCD Pecah',
    tagAfter: 'LCD Baru',
    before: '/ba-lcd-before.png',
    after: '/ba-lcd-after.png',
  },
  {
    title: 'Software Repair',
    tagBefore: 'Bootloop',
    tagAfter: 'Normal',
    before: '/ba-boot-before.png',
    after: '/ba-boot-after.png',
  },
  {
    title: 'Water Damage',
    tagBefore: 'Korosi',
    tagAfter: 'Berfungsi',
    before: '/ba-water-before.png',
    after: '/ba-water-after.png',
  },
]

function CompareCard({ item }: { item: (typeof CASES)[number] }) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, next)))
  }, [])

  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-white/[0.03]">
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none touch-none"
        onPointerDown={(e) => {
          dragging.current = true
          e.currentTarget.setPointerCapture(e.pointerId)
          setFromClientX(e.clientX)
        }}
        onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
      >
        {/* After (base) */}
        <img
          src={item.after || '/placeholder.svg'}
          alt={`${item.title} — sesudah diperbaiki`}
          className="absolute inset-0 h-full w-full object-cover"
          crossOrigin="anonymous"
          draggable={false}
        />
        <span className="absolute right-3 top-3 rounded-full bg-success/20 px-3 py-1 text-xs font-semibold text-success">
          {item.tagAfter}
        </span>

        {/* Before (clipped via clip-path so the image never distorts) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={item.before || '/placeholder.svg'}
            alt={`${item.title} — sebelum diperbaiki`}
            className="absolute inset-0 h-full w-full object-cover"
            crossOrigin="anonymous"
            draggable={false}
          />
          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
            {item.tagBefore}
          </span>
        </div>

        {/* Handle */}
        <div
          className="absolute inset-y-0 z-10 flex items-center"
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="h-full w-0.5 bg-primary shadow-[0_0_12px_rgba(255,122,0,0.9)]" />
          <span className="absolute grid h-10 w-10 place-items-center rounded-full border border-primary bg-background text-primary shadow-[0_0_20px_-2px_rgba(255,122,0,0.8)]">
            <ArrowLeftRight className="h-4 w-4" />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="font-heading font-bold">{item.title}</h3>
        <span className="text-xs text-muted-foreground">Geser untuk membandingkan</span>
      </div>
    </article>
  )
}

export function BeforeAfter() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Before / After"
          title={
            <>
              Hasil Nyata yang <span className="text-gradient-brand">Berbicara</span>
            </>
          }
          description="Geser slider pada setiap kartu untuk melihat perbandingan kondisi sebelum dan sesudah perbaikan."
        />
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {CASES.map((item) => (
            <StaggerItem key={item.title}>
              <CompareCard item={item} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
