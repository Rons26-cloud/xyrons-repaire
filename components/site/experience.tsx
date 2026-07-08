'use client'

import {
  Fan,
  Flame,
  Gauge,
  Microscope,
  PackageSearch,
  Power,
  ScanLine,
  Stethoscope,
  Wrench,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem, Reveal } from './reveal'

const STEPS = [
  {
    icon: Stethoscope,
    title: 'Diagnosis',
    desc: 'Pemeriksaan menyeluruh untuk menemukan sumber kerusakan secara akurat.',
  },
  {
    icon: PackageSearch,
    title: 'Konfirmasi Kerusakan',
    desc: 'Menjelaskan hasil diagnosa, estimasi biaya, dan waktu pengerjaan secara transparan.',
  },
  {
    icon: Wrench,
    title: 'Perbaikan',
    desc: 'Proses perbaikan dengan peralatan modern dan sparepart berkualitas.',
  },
  {
    icon: ScanLine,
    title: 'Quality Check',
    desc: 'Pengujian akhir menyeluruh sebelum perangkat dikembalikan ke pelanggan.',
  },
]

const TOOLS = [
  { icon: Microscope, label: 'Microscope' },
  { icon: Fan, label: 'Hot Air Station' },
  { icon: Flame, label: 'Solder Station' },
  { icon: Power, label: 'Power Supply' },
  { icon: Gauge, label: 'Multimeter' },
  { icon: ScanLine, label: 'Screen Separator' },
]

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Work Process"
          title={
            <>
              Alur Kerja yang <span className="text-gradient-brand">Rapi & Transparan</span>
            </>
          }
          description="Empat tahap standar yang memastikan setiap perbaikan dilakukan dengan teliti dan dapat dipertanggungjawabkan."
        />

        {/* Timeline */}
        <StaggerGroup className="relative mt-14 grid gap-6 md:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <StaggerItem key={title}>
              <div className="relative flex h-full flex-col items-center rounded-3xl border border-border bg-white/[0.03] p-6 text-center transition-colors hover:border-primary/40">
                <span className="grid h-16 w-16 place-items-center rounded-2xl border border-primary/25 bg-background text-primary shadow-[0_0_24px_-6px_rgba(255,122,0,0.6)]">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="mt-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Tools */}
        <Reveal className="mt-20">
          <div className="glass rounded-3xl p-8">
            <div className="mb-8 text-center">
              <h3 className="font-heading text-2xl font-extrabold sm:text-3xl">
                Peralatan <span className="text-gradient-brand">Profesional</span>
              </h3>
              <p className="mt-2 text-muted-foreground">
                Ditunjang perangkat kelas industri untuk hasil yang presisi.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {TOOLS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-white/[0.02] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
