import { About } from '@/components/site/about'
import { BeforeAfter } from '@/components/site/before-after'
import { Contact } from '@/components/site/contact'
import { Experience } from '@/components/site/experience'
import { Faq } from '@/components/site/faq'
import { FloatingActions } from '@/components/site/floating-actions'
import { Footer } from '@/components/site/footer'
import { Gallery } from '@/components/site/gallery'
import { Hero } from '@/components/site/hero'
import { LoadingScreen } from '@/components/site/loading-screen'
import { Navbar } from '@/components/site/navbar'
import { Services } from '@/components/site/services'
import { Stats } from '@/components/site/stats'
import { Testimonials } from '@/components/site/testimonials'

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="relative overflow-x-hidden">
        <Hero />
        <Stats />
        <Services />
        <About />
        <Experience />
        <BeforeAfter />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
