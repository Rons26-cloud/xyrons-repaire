'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { SectionHeading } from './section-heading'

const REVIEWS = [
  {
    name: 'Andini Pratiwi',
    role: 'iPhone 13 Pro',
    text: 'LCD iPhone saya yang pecah parah diganti dengan hasil rapi banget. Prosesnya cepat dan dijelaskan detail. Recommended!',
    initials: 'AP',
  },
  {
    name: 'Budi Santoso',
    role: 'Samsung S22 Ultra',
    text: 'HP saya mati total kena air, sudah pasrah. Ternyata bisa hidup normal lagi. Teknisi yang benar-benar ahli di levelnya.',
    initials: 'BS',
  },
  {
    name: 'Citra Melati',
    role: 'Xiaomi Redmi Note 12',
    text: 'Baterai boros dan sering restart, sekarang awet seharian. Harga transparan, ada garansi pula. Puas banget.',
    initials: 'CM',
  },
  {
    name: 'Dimas Nugroho',
    role: 'Oppo Reno 8',
    text: 'Port charger longgar diperbaiki cuma sebentar. Pelayanannya profesional dan ramah. Pasti balik lagi kalau ada masalah.',
    initials: 'DN',
  },
  {
    name: 'Eka Wijaya',
    role: 'iPhone 11',
    text: 'Bootloop setelah update, semua data aman dan HP normal lagi. Komunikasinya enak, update terus progresnya.',
    initials: 'EW',
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selected, setSelected] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    const id = setInterval(() => emblaApi.scrollNext(), 5000)
    return () => {
      clearInterval(id)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section id="testimonials" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Apa Kata <span className="text-gradient-brand">Pelanggan</span>
            </>
          }
          description="Kepuasan pelanggan adalah bukti nyata dari kualitas setiap perbaikan yang saya kerjakan."
        />

        <div className="relative mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {REVIEWS.map((r) => (
                <div
                  key={r.name}
                  className="min-w-0 shrink-0 grow-0 basis-full px-3 sm:basis-1/2 lg:basis-1/3"
                >
                  <figure className="glass flex h-full flex-col gap-5 rounded-3xl p-7">
                    <Quote className="h-8 w-8 text-primary/60" />
                    <div className="flex gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="flex-1 leading-relaxed text-foreground/90">
                      “{r.text}”
                    </blockquote>
                    <figcaption className="flex items-center gap-3 border-t border-border pt-5">
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/15 font-heading text-sm font-bold text-primary">
                        {r.initials}
                      </span>
                      <span>
                        <span className="block font-semibold">{r.name}</span>
                        <span className="block text-xs text-muted-foreground">{r.role}</span>
                      </span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Sebelumnya"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white/5 text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ke slide ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selected === i ? 'w-6 bg-primary' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Berikutnya"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white/5 text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
