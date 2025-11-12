import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { About } from "@/components/sections/About"
import { CTA } from "@/components/sections/CTA"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App