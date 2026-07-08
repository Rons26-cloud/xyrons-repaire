'use client'

import {
  BatteryCharging,
  Camera,
  Cpu,
  MonitorSmartphone,
  PlugZap,
  Wrench,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const SERVICES = [
  {
    icon: MonitorSmartphone,
    title: 'LCD Replacement',
    desc: 'Mengganti layar pecah, ghost touch, green line, dan black screen dengan sparepart berkualitas.',
  },
  {
    icon: BatteryCharging,
    title: 'Battery Replacement',
    desc: 'Mengganti baterai yang sudah drop, kembung, atau cepat habis agar performa kembali optimal.',
  },
  {
    icon: PlugZap,
    title: 'Charging Repair',
    desc: 'Memperbaiki port charger longgar, tidak mengisi, atau koneksi data yang tidak stabil.',
  },
  {
    icon: Wrench,
    title: 'Software Repair',
    desc: 'Bootloop, restart sendiri, error system, hingga unlock dan flashing ulang perangkat.',
  },
  {
    icon: Camera,
    title: 'Camera Repair',
    desc: 'Perbaikan kamera depan, kamera belakang, dan modul Face ID yang buram atau error.',
  },
  {
    icon: Cpu,
    title: 'Motherboard Repair',
    desc: 'Perbaikan level board: IC Power, IC Charger, CPU, hingga EMMC dengan micro-soldering.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Layanan Saya"
          title={
            <>
              Solusi Lengkap untuk <span className="text-gradient-brand">Setiap Kerusakan</span>
            </>
          }
          description="Dari kerusakan ringan hingga perbaikan level motherboard, semua ditangani dengan standar industri dan garansi resmi."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_20px_60px_-25px_rgba(255,122,0,0.6)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
