import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Xyron Tech | Mobile Phone Repair Technician',
  description:
    'Professional smartphone repair services specializing in LCD replacement, battery replacement, charging repair, motherboard repair, software repair, and water damage restoration.',
  generator: 'v0.app',
  keywords: [
    'mobile phone repair',
    'smartphone repair',
    'LCD replacement',
    'battery replacement',
    'motherboard repair',
    'water damage repair',
    'Xyron Tech',
  ],
  authors: [{ name: 'Xyron' }],
  openGraph: {
    title: 'Xyron Tech | Mobile Phone Repair Technician',
    description:
      'Professional smartphone repair — LCD, battery, charging port, motherboard, software, and water damage restoration with warranty.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090909',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${poppins.variable} bg-background`}>
      <body className="noise-overlay antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
