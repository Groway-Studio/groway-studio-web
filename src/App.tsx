import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { OurServicesPage } from '@/pages/OurServicesPage'
import { AboutUsPage } from '@/pages/AboutUsPage'
import { ContactPage } from '@/pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<OurServicesPage />} />
        <Route path="/nosotros" element={<AboutUsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App