import { Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from './logo'
import { FacebookIcon, InstagramIcon, WhatsappIcon } from './brand-icons'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  'LCD Replacement',
  'Battery Replacement',
  'Charging Repair',
  'Software Repair',
  'Motherboard Repair',
]

const SOCIALS = [
  { icon: WhatsappIcon, href: 'https://wa.me/6281234567890', label: 'WhatsApp' },
  { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-black/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Layanan perbaikan smartphone profesional dengan hasil presisi, transparan, dan
              bergaransi.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-white/5 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold">Quick Links</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold">Services</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s} className="text-sm text-muted-foreground">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold">Contact</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              {/* Diperbaiki: Telepon menjadi link dan ditambah anti-error */}
              <li className="flex items-center gap-2.5" suppressHydrationWarning>
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+6281234567890" className="transition-colors hover:text-primary">
                  +62 812-3456-7890
                </a>
              </li>
              {/* Diperbaiki: Email menjadi link dan ditambah anti-error */}
              <li className="flex items-center gap-2.5" suppressHydrationWarning>
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hello@xyrontech.id" className="transition-colors hover:text-primary">
                  hello@xyrontech.id
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Jl. Teknologi No. 21,
                Jakarta
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          {/* Diperbaiki: Tanggal/Tahun dinamis diamankan dengan suppressHydrationWarning */}
          <p suppressHydrationWarning>© {new Date().getFullYear()} Xyron Tech. All rights reserved.</p>
          <p>
            Crafted with precision by <span className="text-gradient-brand font-semibold">Xyron</span>
          </p>
        </div>
      </div>
    </footer>
  )
}