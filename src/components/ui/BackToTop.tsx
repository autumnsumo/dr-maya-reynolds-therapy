'use client'

import { useState, useEffect } from 'react'
import { FloatingElement } from './AnimatedElements'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`fixed bottom-8 right-8 z-40 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
    }`}>
      <FloatingElement amplitude={5} duration={3}>
        <button
          onClick={scrollToTop}
          className="group bg-gradient-to-br from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white p-4 rounded-organic shadow-sanctuary hover:shadow-floating transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
          aria-label="Back to top"
        >
          <svg 
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
          
          {/* Animated glow effect */}
          <div className="absolute inset-0 rounded-organic bg-primary-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
          
          {/* Ripple effect on click */}
          <div className="absolute inset-0 rounded-organic bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150"></div>
        </button>
      </FloatingElement>
    </div>
  )
}