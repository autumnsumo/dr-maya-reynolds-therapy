'use client'

import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100

      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-primary-100/30 z-50">
      <div 
        className="h-full bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 transition-all duration-150 ease-out shadow-sm"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}