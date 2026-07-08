'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from './section-heading'

// Masukkan 20 foto Anda di sini
const ALL_IMAGES = [
  { src: '/gallery-1.png', caption: 'Micro-soldering IC', span: 'row-span-2' },
  { src: '/gallery-2.png', caption: 'Workshop & tools', span: '' },
  { src: '/gallery-3.png', caption: 'Board level repair', span: '' },
  { src: '/gallery-4.png', caption: 'Screen replacement', span: '' },
  { src: '/gallery-5.png', caption: 'Logic board analysis', span: '' },
  { src: '/gallery-6.png', caption: 'Precision cleaning', span: 'row-span-2' },
  { src: '/gallery-7.png', caption: 'Component testing', span: '' },
  { src: '/gallery-8.png', caption: 'Cable management', span: '' },
  { src: '/gallery-9.png', caption: 'Battery installation', span: '' },
  { src: '/gallery-10.png', caption: 'Final assembly', span: '' },
  { src: '/gallery-11.png', caption: 'Connector check', span: '' },
  { src: '/gallery-12.png', caption: 'Surface mounting', span: 'row-span-2' },
  { src: '/gallery-13.png', caption: 'Quality assurance', span: '' },
  { src: '/gallery-14.png', caption: 'Tool organization', span: '' },
  { src: '/gallery-15.png', caption: 'Device calibration', span: '' },
  { src: '/gallery-16.png', caption: 'Backlight repair', span: '' },
  { src: '/gallery-17.png', caption: 'Heat sink check', span: '' },
  { src: '/gallery-18.png', caption: 'Testing station', span: '' },
  { src: '/gallery-19.png', caption: 'Thermal paste application', span: 'row-span-2' },
  { src: '/gallery-20.png', caption: 'Device ready', span: '' },
]

export function Gallery() {
  const [visibleCount, setVisibleCount] = useState(8) // Tampilkan 8 awal

  return (
    <section id="gallery" className="relative scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Gallery"
          title={<>Dokumentasi <span className="text-gradient-brand">Proses & Hasil</span></>}
          description="Beberapa momen dari workshop dan hasil servis kami."
        />

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4">
          <AnimatePresence>
            {ALL_IMAGES.slice(0, visibleCount).map((img, i) => (
              <motion.figure
                key={img.src + i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-3xl border border-border ${img.span || ''}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay selalu terlihat untuk memastikan teks terbaca */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Caption selalu muncul */}
                <figcaption className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                  {img.caption}
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>

        {visibleCount < ALL_IMAGES.length && (
          <div className="mt-10 flex justify-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="px-6 py-3 rounded-full border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-all"
            >
              Lihat Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </section>
  )
}