import { CheckCircle2, Cpu, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { Reveal } from './reveal'

const POINTS = [
  { icon: Sparkles, label: 'Professional', desc: 'Pengerjaan rapi & terukur' },
  { icon: Cpu, label: 'Original Sparepart', desc: 'Komponen berkualitas' },
  { icon: Zap, label: 'Fast Repair', desc: 'Estimasi cepat & jelas' },
  { icon: ShieldCheck, label: 'Warranty', desc: 'Garansi tiap servis' },
]

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Image */}
        <Reveal direction="right">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary/15 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-primary/20">
              <img
                src="/about-workbench.png"
                alt="Xyron working on a smartphone motherboard under a microscope"
                className="aspect-[4/3] w-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
            <div className="glass absolute -bottom-6 -right-2 hidden rounded-2xl px-5 py-4 sm:block">
              <p className="font-heading text-3xl font-extrabold text-primary">1000+</p>
              <p className="text-xs text-muted-foreground">Perangkat berhasil diperbaiki</p>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal direction="left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Tentang Saya
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-balance sm:text-4xl md:text-5xl">
            Teknisi yang <span className="text-gradient-brand">Presisi & Terpercaya</span>
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Saya memiliki pengalaman lebih dari 3 tahun dalam dunia perbaikan smartphone
              profesional. Menangani berbagai jenis kerusakan mulai dari yang ringan hingga
              kerusakan level motherboard.
            </p>
            <p>
              Setiap perbaikan dilakukan menggunakan peralatan modern dan standar industri, sehingga
              hasilnya lebih awet, aman, dan bergaransi. Transparansi biaya dan kepuasan pelanggan
              adalah prioritas utama saya.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {POINTS.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-2xl border border-border bg-white/[0.03] p-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-success" /> {label}
                  </p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
