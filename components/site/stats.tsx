'use client'

import { Award, CheckCircle2, ShieldCheck, Smile } from 'lucide-react'
import CountUp from 'react-countup'
import { StaggerGroup, StaggerItem } from './reveal'

const STATS = [
  { icon: Award, value: 3, suffix: '+', label: 'Tahun Pengalaman' },
  { icon: CheckCircle2, value: 1000, suffix: '+', label: 'Perbaikan Selesai' },
  { icon: Smile, value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { icon: ShieldCheck, value: 6, suffix: ' Bln', label: 'Garansi Servis' },
]

export function Stats() {
  return (
    <section className="relative py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <StaggerGroup className="glass grid grid-cols-2 gap-6 rounded-3xl p-6 sm:p-8 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, suffix, label }) => (
            <StaggerItem
              key={label}
              className="flex flex-col items-center gap-2 text-center lg:flex-row lg:text-left"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-heading text-3xl font-extrabold sm:text-4xl">
                  <CountUp end={value} duration={2.4} enableScrollSpy scrollSpyOnce />
                  <span className="text-gradient-brand">{suffix}</span>
                </p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
