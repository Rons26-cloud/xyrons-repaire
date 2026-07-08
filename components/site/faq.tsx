'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'Berapa lama waktu pengerjaan servis?',
    a: 'Sebagian besar perbaikan seperti ganti LCD, baterai, atau port charger selesai dalam 30–90 menit. Untuk kasus level motherboard atau water damage bisa memerlukan waktu lebih lama, dan estimasinya akan saya sampaikan setelah diagnosa.',
  },
  {
    q: 'Apakah setiap perbaikan bergaransi?',
    a: 'Ya. Semua perbaikan bergaransi hingga 6 bulan untuk memberikan ketenangan. Garansi mencakup sparepart dan pengerjaan sesuai jenis kerusakan yang ditangani.',
  },
  {
    q: 'Berapa biaya perbaikannya?',
    a: 'Biaya tergantung jenis kerusakan dan tipe perangkat. Saya selalu memberikan estimasi transparan terlebih dahulu, dan pengerjaan baru dimulai setelah Anda menyetujui biayanya. Tidak ada biaya tersembunyi.',
  },
  {
    q: 'Apakah perbaikan bisa ditunggu di tempat?',
    a: 'Bisa. Untuk perbaikan ringan hingga menengah Anda dapat menunggu langsung. Untuk perbaikan yang membutuhkan waktu lebih lama, Anda dapat meninggalkan perangkat dan saya akan mengabari progresnya.',
  },
  {
    q: 'Apakah data di HP saya aman?',
    a: 'Keamanan data adalah prioritas. Untuk perbaikan hardware, data Anda tetap aman. Untuk perbaikan software, saya akan menginformasikan lebih dulu jika ada risiko kehilangan data agar bisa di-backup.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Pertanyaan yang <span className="text-gradient-brand">Sering Diajukan</span>
            </>
          }
        />

        <Reveal className="mt-12 flex flex-col gap-4">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className={cn(
                  'overflow-hidden rounded-2xl border bg-white/[0.03] transition-colors',
                  isOpen ? 'border-primary/40' : 'border-border',
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="font-heading text-base font-semibold sm:text-lg">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-primary transition-transform duration-300',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-in-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="min-h-0">
                    <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
