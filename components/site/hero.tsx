'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, MessageCircle } from 'lucide-react'

const ROLES = [
  'Mobile Phone Repair Technician',
  'Micro-Soldering Specialist',
  'Motherboard & IC Expert',
]

const CHECKLIST = [
  'LCD Replacement',
  'Battery Replacement',
  'Charging Port Repair',
  'Water Damage Repair',
  'Software Repair',
  'IC Repair',
]

const WHATSAPP_URL = 'https://wa.me/6281234567890'

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index]
    const speed = deleting ? 40 : 90
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setTimeout(() => setDeleting(true), 1400)
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setIndex((i) => (i + 1) % words.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return text
}

export function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 md:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-border bg-white/5 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Hello, I&apos;m
          </span>

          <div className="space-y-3">
            <h1 className="font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
              XYRON <span className="text-gradient-brand">SAPUTRA</span>
            </h1>
            <p className="flex min-h-8 items-center font-heading text-lg font-semibold text-foreground/90 sm:text-2xl">
              <span className="text-gradient-brand">{typed}</span>
              <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-primary sm:h-7" />
            </p>
          </div>

          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Saya teknisi profesional yang berpengalaman memperbaiki berbagai jenis smartphone seperti
            iPhone, Samsung, Xiaomi, Oppo, Vivo, Realme, Huawei, dan merek lainnya. Mengutamakan
            kualitas, kecepatan, transparansi, dan garansi pada setiap proses perbaikan.
          </p>

          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium">
                <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_-4px_rgba(255,122,0,0.85)]"
            >
              Lihat Layanan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              Hubungi WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/20 blur-3xl" />
          <div className="animate-float">
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/25 glow-brand">
              <img
                src="/xyron-portrait.png"
                alt="Xyron Saputra, professional mobile phone repair technician"
                className="aspect-[4/5] w-full object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-border bg-black/40 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="font-heading text-sm font-bold">Xyron Saputra</p>
                  <p className="text-xs text-muted-foreground">Certified Repair Technician</p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
                  <span className="h-2 w-2 rounded-full bg-success" /> Available
                </span>
              </div>
            </div>
          </div>

          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass absolute -left-4 top-10 hidden rounded-2xl px-4 py-3 sm:block"
          >
            <p className="font-heading text-2xl font-extrabold text-primary">3+</p>
            <p className="text-xs text-muted-foreground">Tahun Pengalaman</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
