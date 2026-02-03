'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FloatingElement } from '../ui/AnimatedElements'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'services', 'office', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section === 'hero' ? '' : section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    closeMenu()
  }

  const navItems = [
    { id: 'about', label: 'About', icon: '🌸' },
    { id: 'services', label: 'Services', icon: '🦋' },
    { id: 'office', label: 'Our Sanctuary', icon: '🏡' },
    { id: 'contact', label: 'Connect', icon: '✨' }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sanctuary border-b border-primary-200' 
          : 'bg-white/90 backdrop-blur-sm shadow-gentle border-b border-primary-100'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Animated Logo */}
          <Link 
            href="/" 
            className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-primary-600 hover:text-primary-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-curved hover-lift group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="relative">
              Dr. Maya Reynolds
              {/* Animated underline on hover */}
              <svg className="absolute -bottom-1 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 200 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2C40 1 80 1 120 2C160 3 180 2 198 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-primary-400"/>
              </svg>
            </span>
          </Link>

          {/* Desktop Navigation with animations */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative text-secondary-700 hover:text-primary-600 transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-curved px-3 py-2 hover-lift ${
                  activeSection === item.id ? 'text-primary-600' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="flex items-center space-x-2">
                  <FloatingElement amplitude={2} duration={2} delay={index * 0.2}>
                    <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {item.icon}
                    </span>
                  </FloatingElement>
                  <span>{item.label}</span>
                </span>
                
                {/* Active indicator */}
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-400 rounded-full transition-all duration-300 ${
                  activeSection === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-primary-50 rounded-curved opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            ))}
          </nav>

          {/* Animated Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-curved text-secondary-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover-lift"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Animated Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-primary-200 bg-gradient-to-br from-primary-50/50 to-accent-50/50 rounded-b-curved" role="navigation" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group text-left text-secondary-700 hover:text-primary-600 transition-all duration-300 font-medium py-3 px-4 rounded-curved hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover-lift ${
                    activeSection === item.id ? 'text-primary-600 bg-white/60' : ''
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.3s ease-out ${index * 50}ms`
                  }}
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}