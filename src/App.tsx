import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { OurServicesPage } from '@/pages/OurServicesPage'
import { AboutUsPage } from '@/pages/AboutUsPage'
import { ContactPage } from '@/pages/ContactPage'

function App() {
  const basename = import.meta.env.MODE === 'production' ? '/groway-studio-web' : '';
  
  return (
    <BrowserRouter basename={basename}>
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