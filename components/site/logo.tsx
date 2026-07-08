import { Cog, Smartphone } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#home" className={cn('group flex items-center gap-3', className)} aria-label="Xyron Tech home">
      <span className="relative grid h-11 w-11 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary shadow-[0_0_20px_-4px_rgba(255,122,0,0.6)] transition-transform duration-300 group-hover:scale-105">
        <Smartphone className="h-5 w-5" strokeWidth={2.2} />
        <Cog className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-background text-accent" strokeWidth={2.4} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-extrabold tracking-tight">
          XYRON <span className="text-gradient-brand">TECH</span>
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Mobile Repair Specialist
        </span>
      </span>
    </a>
  )
}
