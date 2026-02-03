'use client'

import { usePerformanceMonitoring, useImagePreloading } from '../lib/hooks/usePerformance'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import OurOffice from '../components/sections/OurOffice'
import Contact from '../components/sections/Contact'
import { THERAPIST_PROFILE, OFFICE_INFO } from '../lib/constants'

export default function Home() {
  // Monitor performance
  usePerformanceMonitoring()
  
  // Preload critical images
  const criticalImages = [
    THERAPIST_PROFILE.image,
    OFFICE_INFO.images[0].src,
  ]
  useImagePreloading(criticalImages)

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <OurOffice />
      <Contact />
    </main>
  )
}