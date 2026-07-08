'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Cog, Smartphone } from 'lucide-react'

export function LoadingScreen() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative grid h-16 w-16 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary shadow-[0_0_30px_-4px_rgba(255,122,0,0.7)]"
            >
              <Smartphone className="h-7 w-7" />
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                className="absolute -bottom-1.5 -right-1.5"
              >
                <Cog className="h-5 w-5 rounded-full bg-background text-accent" />
              </motion.span>
            </motion.span>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut' }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
            <p className="font-heading text-sm font-semibold tracking-[0.3em] text-muted-foreground">
              XYRON TECH
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
