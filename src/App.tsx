import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Approach } from '@/components/sections/Approach'
import { DepthLevels } from '@/components/sections/DepthLevels'
import { Method } from '@/components/sections/Method'
import { Proof } from '@/components/sections/Proof'
import { Startups } from '@/components/sections/Startups'
import { Contact } from '@/components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <a
        href="#approach"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent-9 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[oklch(0.14_0.02_40)]"
      >
        Skip to content
      </a>
      <Navigation />
      <main>
        <Hero />
        <Approach />
        <DepthLevels />
        <Method />
        <Proof />
        <Startups />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
