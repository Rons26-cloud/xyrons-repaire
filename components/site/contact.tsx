'use client'

import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { FacebookIcon, InstagramIcon, WhatsappIcon } from './brand-icons'

const WHATSAPP_URL = 'https://wa.me/67890'

const CHANNELS = [
  {
    icon: WhatsappIcon,
    label: 'WhatsApp',
    value: '+62 812-3456-7890',
    href: WHATSAPP_URL,
  },
  { icon: Phone, label: 'Telepon', value: '+62 -3456-7890', href: 'tel:+6281234567890' },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: '@xyron.tech',
    href: 'https://instagram.com',
  },
  {
    icon: FacebookIcon,
    label: 'Facebook',
    value: 'Xyron Tech',
    href: 'https://facebook.com',
  },
  { icon: Mail, label: 'Email', value: 'hello@xyrontech.id', href: 'mailto:hello@xyrontech.id' },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Jl. Teknologi No. 21, Jakarta',
    href: 'https://maps.google.com',
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Ada Kerusakan? <span className="text-gradient-brand">Hubungi Saya</span>
            </>
          }
          description="Konsultasikan masalah smartphone Anda sekarang. Respon cepat dan estimasi biaya transparan."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Contact channels */}
          <Reveal direction="right" className="lg:col-span-3">
            <div className="glass h-full rounded-3xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {CHANNELS.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                        {label}
                      </span>
                      <span className="block truncate font-semibold">{value}</span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-primary/20 bg-primary/[0.06] p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Jam Operasional</p>
                    <p className="text-sm text-muted-foreground">Senin – Minggu, 09.00 – 21.00 WIB</p>
                  </div>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_26px_-4px_rgba(255,122,0,0.85)]"
                >
                  <WhatsappIcon className="h-4 w-4" />
                  Chat Sekarang
                </a>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal direction="left" className="lg:col-span-2">
            <div className="glass h-full overflow-hidden rounded-3xl">
              <iframe
                title="Lokasi Xyron Tech"
                src="https://www.google.com/maps?q=Jakarta&output=embed"
                className="h-64 w-full grayscale contrast-125 lg:h-full lg:min-h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
