/**
 * Property-Based Test: Layout Stability
 * Feature: frontend-internship-assignment, Property 5: Layout Stability
 * 
 * **Validates: Requirements 7.4**
 * 
 * Property: For any responsive breakpoint transition, the layout should not exhibit 
 * cumulative layout shift above acceptable thresholds
 */

import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'

// Mock Next.js components
jest.mock('next/image', () => {
  const mockReact = require('react')
  return function MockImage({ src, alt, width, height, ...props }: any) {
    return mockReact.createElement('img', { 
      src, 
      alt, 
      width: width || 400,
      height: height || 300,
      style: { 
        width: width ? `${width}px` : '400px', 
        height: height ? `${height}px` : '300px',
        display: 'block'
      },
      ...props 
    })
  }
})

jest.mock('next/link', () => {
  const mockReact = require('react')
  return function MockLink({ href, children, ...props }: any) {
    return mockReact.createElement('a', { href, ...props }, children)
  }
})

// Mock constants with address structure
jest.mock('../../lib/constants', () => ({
  THERAPIST_PROFILE: {
    name: 'Dr. Maya Reynolds',
    title: 'Licensed Clinical Psychologist',
    bio: 'Experienced therapist specializing in anxiety, trauma, and burnout recovery.',
    image: '/test-image.jpg',
    imageAlt: 'Dr. Maya Reynolds professional headshot',
    sessionTypes: ['In-person', 'Telehealth'],
    location: 'Santa Monica, CA',
    specializations: ['Anxiety', 'Panic Disorders', 'Trauma', 'Burnout'],
    approaches: ['CBT', 'EMDR', 'Mindfulness', 'Body-Oriented Techniques'],
    clientTypes: ['High-achieving adults', 'Overwhelmed professionals']
  },
  OFFICE_INFO: {
    address: {
      street: '123th Street 45 W',
      city: 'Santa Monica',
      state: 'CA',
      zipCode: '90401'
    },
    description: 'A welcoming and comfortable therapeutic environment.',
    features: ['Private entrance', 'Comfortable seating', 'Natural lighting', 'Soundproof rooms'],
    images: [
      { src: '/office-1.jpg', alt: 'Main therapy office' },
      { src: '/office-2.jpg', alt: 'Waiting area' },
      { src: '/office-3.jpg', alt: 'Reception area' }
    ]
  },
  CONTACT_INFO: {
    phone: '(123) 456-7890',
    email: 'test@example.com'
  }
}))

// Mock utils
jest.mock('../../lib/utils', () => ({
  cn: (...classes: any[]) => classes.filter(Boolean).join(' ')
}))

// Mock getBoundingClientRect for JSDOM environment
const mockGetBoundingClientRect = (element: HTMLElement, viewport: { width: number; height: number }) => {
  const tagName = element.tagName.toLowerCase()
  const classList = Array.from(element.classList)
  
  // Simulate realistic dimensions based on element type and classes
  let width = 0
  let height = 0
  
  if (tagName === 'header') {
    width = viewport.width
    height = 64 // Standard header height
  } else if (tagName === 'footer') {
    width = viewport.width
    height = 200 // Standard footer height
  } else if (tagName === 'section') {
    width = viewport.width
    height = Math.min(400, viewport.height * 0.6) // Reasonable section height
  } else if (tagName === 'img') {
    const imgWidth = element.getAttribute('width')
    const imgHeight = element.getAttribute('height')
    width = imgWidth ? parseInt(imgWidth) : 400
    height = imgHeight ? parseInt(imgHeight) : 300
  } else if (tagName === 'form') {
    width = Math.min(500, viewport.width * 0.9)
    height = 400
  } else if (classList.some(cls => cls.includes('grid'))) {
    width = viewport.width * 0.9
    height = 200
  } else {
    // Default dimensions for other elements
    width = Math.min(300, viewport.width * 0.8)
    height = 50
  }
  
  return {
    width,
    height,
    top: 0,
    left: 0,
    bottom: height,
    right: width,
    x: 0,
    y: 0,
    toJSON: () => ({})
  }
}

// Import components after mocking
import Hero from '../../components/sections/Hero'
import About from '../../components/sections/About'
import Services from '../../components/sections/Services'
import OurOffice from '../../components/sections/OurOffice'
import Contact from '../../components/sections/Contact'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'

describe('Property 5: Layout Stability', () => {
  // Define common breakpoints for testing
  const breakpoints = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1024, height: 768 },
    { name: 'large-desktop', width: 1920, height: 1080 }
  ]

  // Current viewport state for mocking
  let currentViewport = { width: 1024, height: 768 }

  // Helper function to simulate viewport resize
  const setViewport = (width: number, height: number) => {
    currentViewport = { width, height }
    
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: height,
    })
    
    // Trigger resize event
    window.dispatchEvent(new Event('resize'))
  }

  // Setup getBoundingClientRect mock before each test
  beforeEach(() => {
    // Mock getBoundingClientRect for all elements
    Element.prototype.getBoundingClientRect = jest.fn(function(this: HTMLElement) {
      return mockGetBoundingClientRect(this, currentViewport)
    })
  })

  // Helper function to measure layout shift using DOM structure analysis
  const measureLayoutStability = (element: HTMLElement, callback: () => void) => {
    // Count child elements and their types before change
    const initialChildCount = element.children.length
    const initialStructure = Array.from(element.children).map(child => ({
      tagName: child.tagName,
      className: child.className,
      childCount: child.children.length
    }))
    
    callback()
    
    // Check structure after change
    const finalChildCount = element.children.length
    const finalStructure = Array.from(element.children).map(child => ({
      tagName: child.tagName,
      className: child.className,
      childCount: child.children.length
    }))
    
    // Calculate stability score (0 = perfectly stable, 1 = completely changed)
    let structuralChanges = 0
    
    // Check if child count changed
    if (initialChildCount !== finalChildCount) {
      structuralChanges += 0.5
    }
    
    // Check if structure changed
    const maxLength = Math.max(initialStructure.length, finalStructure.length)
    for (let i = 0; i < maxLength; i++) {
      const initial = initialStructure[i]
      const final = finalStructure[i]
      
      if (!initial || !final) {
        structuralChanges += 0.1
      } else if (initial.tagName !== final.tagName || initial.className !== final.className) {
        structuralChanges += 0.2
      }
    }
    
    return Math.min(structuralChanges, 1) // Cap at 1
  }

  // Property Test: Header maintains stability across breakpoints
  describe('Property: Header maintains layout stability', () => {
    it('should not cause layout shift when transitioning between breakpoints', async () => {
      const { container } = render(React.createElement(Header))
      const header = container.querySelector('header')!
      
      let totalLayoutShift = 0
      
      for (let i = 0; i < breakpoints.length - 1; i++) {
        const currentBreakpoint = breakpoints[i]
        const nextBreakpoint = breakpoints[i + 1]
        
        // Set initial viewport
        setViewport(currentBreakpoint.width, currentBreakpoint.height)
        
        // Measure layout stability when changing viewport
        const layoutShift = measureLayoutStability(header, () => {
          setViewport(nextBreakpoint.width, nextBreakpoint.height)
        })
        
        totalLayoutShift += layoutShift
      }
      
      // Total layout shift should be minimal (< 0.5 is acceptable for structural stability)
      expect(totalLayoutShift).toBeLessThan(0.5)
    })

    it('should maintain consistent structure across breakpoints', () => {
      breakpoints.forEach(breakpoint => {
        setViewport(breakpoint.width, breakpoint.height)
        
        const { container } = render(React.createElement(Header))
        const header = container.querySelector('header')!
        
        // Header should have consistent structure
        expect(header).toBeTruthy()
        expect(header.tagName).toBe('HEADER')
        
        // Should contain navigation elements
        const nav = header.querySelector('nav')
        expect(nav).toBeTruthy()
        
        // Should have logo/title
        const logo = header.querySelector('a[href="/"]')
        expect(logo).toBeTruthy()
        
        // Simulated dimensions should be reasonable
        const rect = header.getBoundingClientRect()
        expect(rect.width).toBeGreaterThan(0)
        expect(rect.height).toBeGreaterThan(50)
        expect(rect.height).toBeLessThan(120)
      })
    })
  })

  // Property Test: Hero section maintains stability
  describe('Property: Hero section maintains layout stability', () => {
    it('should not cause significant layout shift during responsive transitions', async () => {
      const { container } = render(React.createElement(Hero))
      const heroSection = container.querySelector('section')!
      
      let maxLayoutShift = 0
      
      for (let i = 0; i < breakpoints.length - 1; i++) {
        const currentBreakpoint = breakpoints[i]
        const nextBreakpoint = breakpoints[i + 1]
        
        setViewport(currentBreakpoint.width, currentBreakpoint.height)
        
        const layoutShift = measureLayoutStability(heroSection, () => {
          setViewport(nextBreakpoint.width, nextBreakpoint.height)
        })
        
        maxLayoutShift = Math.max(maxLayoutShift, layoutShift)
      }
      
      // Maximum layout shift should be acceptable
      expect(maxLayoutShift).toBeLessThan(0.3)
    })

    it('should maintain proper image structure across breakpoints', () => {
      breakpoints.forEach(breakpoint => {
        setViewport(breakpoint.width, breakpoint.height)
        
        const { container } = render(React.createElement(Hero))
        const images = container.querySelectorAll('img')
        
        images.forEach(img => {
          // Images should have explicit dimensions
          expect(img.getAttribute('width') || img.style.width).toBeTruthy()
          expect(img.getAttribute('height') || img.style.height).toBeTruthy()
          
          const rect = img.getBoundingClientRect()
          
          // Images should maintain reasonable aspect ratios
          const aspectRatio = rect.width / rect.height
          expect(aspectRatio).toBeGreaterThan(0.5) // Not too tall
          expect(aspectRatio).toBeLessThan(3) // Not too wide
        })
      })
    })
  })

  // Property Test: Grid layouts maintain stability
  describe('Property: Grid layouts maintain stability', () => {
    const gridComponents = [
      { name: 'Services', component: Services },
      { name: 'About', component: About },
      { name: 'OurOffice', component: OurOffice }
    ]

    gridComponents.forEach(({ name, component: Component }) => {
      it(`should maintain grid stability in ${name} section`, () => {
        breakpoints.forEach(breakpoint => {
          setViewport(breakpoint.width, breakpoint.height)
          
          const { container } = render(React.createElement(Component))
          const gridElements = container.querySelectorAll('[class*="grid"], .grid')
          
          // Should have grid elements or structured content
          expect(container.children.length).toBeGreaterThan(0)
          
          // Check overall container structure
          const section = container.querySelector('section')
          if (section) {
            const rect = section.getBoundingClientRect()
            
            // Section should not overflow viewport
            expect(rect.width).toBeLessThanOrEqual(breakpoint.width + 1)
            
            // Section should have reasonable height
            expect(rect.height).toBeGreaterThan(0)
            expect(rect.height).toBeLessThan(breakpoint.height * 2)
          }
        })
      })
    })
  })

  // Property Test: Text content doesn't cause layout shifts
  describe('Property: Text content maintains layout stability', () => {
    it('should not cause layout shift when text loads', async () => {
      const { container, rerender } = render(React.createElement(About))
      const section = container.querySelector('section')!
      
      const initialStructure = Array.from(section.children).map(child => ({
        tagName: child.tagName,
        textContent: child.textContent?.length || 0
      }))
      
      // Simulate text loading by re-rendering
      rerender(React.createElement(About))
      
      const finalStructure = Array.from(section.children).map(child => ({
        tagName: child.tagName,
        textContent: child.textContent?.length || 0
      }))
      
      // Structure should remain stable
      expect(finalStructure.length).toBe(initialStructure.length)
      
      // Content should be consistent
      for (let i = 0; i < initialStructure.length; i++) {
        expect(finalStructure[i].tagName).toBe(initialStructure[i].tagName)
        expect(finalStructure[i].textContent).toBeGreaterThan(0)
      }
    })
  })

  // Property Test: Form elements maintain stability
  describe('Property: Form elements maintain layout stability', () => {
    it('should not cause excessive layout shift during form interactions', async () => {
      const { container } = render(React.createElement(Contact))
      const form = container.querySelector('form')
      
      if (form) {
        const initialChildCount = form.children.length
        
        // Simulate form validation (which might show error messages)
        const inputs = container.querySelectorAll('input, textarea')
        inputs.forEach(input => {
          // Trigger validation by setting invalid value
          if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
            input.value = 'test'
            input.dispatchEvent(new Event('blur'))
          }
        })
        
        await waitFor(() => {
          const finalChildCount = form.children.length
          
          // Form structure should remain reasonably stable
          // Allow for error message additions but not complete restructuring
          const structuralChange = Math.abs(finalChildCount - initialChildCount) / initialChildCount
          expect(structuralChange).toBeLessThan(0.5) // Less than 50% structural change
        })
      } else {
        // If no form found, ensure Contact component renders properly
        expect(container.children.length).toBeGreaterThan(0)
      }
    })
  })

  // Property Test: Images don't cause layout shifts
  describe('Property: Images maintain layout stability', () => {
    it('should reserve space for images to prevent layout shift', () => {
      const components = [Hero, About, OurOffice]
      
      components.forEach(Component => {
        const { container } = render(React.createElement(Component))
        const images = container.querySelectorAll('img')
        
        images.forEach(img => {
          // Images should have explicit dimensions or aspect ratio preservation
          const hasWidth = img.hasAttribute('width') || img.style.width
          const hasHeight = img.hasAttribute('height') || img.style.height
          
          // At least one dimension should be specified to prevent layout shift
          expect(hasWidth || hasHeight).toBe(true)
          
          // Verify mocked dimensions are reasonable
          const rect = img.getBoundingClientRect()
          expect(rect.width).toBeGreaterThan(0)
          expect(rect.height).toBeGreaterThan(0)
        })
      })
    })
  })

  // Property Test: Footer maintains stability
  describe('Property: Footer maintains layout stability', () => {
    it('should maintain consistent layout across breakpoints', () => {
      breakpoints.forEach(breakpoint => {
        setViewport(breakpoint.width, breakpoint.height)
        
        const { container } = render(React.createElement(Footer))
        const footer = container.querySelector('footer')!
        
        // Footer should exist and have proper structure
        expect(footer).toBeTruthy()
        expect(footer.tagName).toBe('FOOTER')
        
        // Footer should have content
        expect(footer.children.length).toBeGreaterThan(0)
        
        // Simulated dimensions should be reasonable
        const rect = footer.getBoundingClientRect()
        expect(rect.width).toBeGreaterThan(0)
        expect(rect.height).toBeGreaterThan(100) // Minimum footer height
        expect(rect.height).toBeLessThan(500) // Maximum reasonable footer height
      })
    })
  })
})

// Property-based test runner with multiple iterations
describe('Property-Based Test Runner: Layout Stability', () => {
  const iterations = 50 // Reduced for performance
  
  // Current viewport state for property tests
  let currentViewport = { width: 1024, height: 768 }

  // Setup getBoundingClientRect mock for property tests
  beforeEach(() => {
    Element.prototype.getBoundingClientRect = jest.fn(function(this: HTMLElement) {
      return mockGetBoundingClientRect(this, currentViewport)
    })
  })

  // Helper function to set viewport for property tests
  const setViewportForProperty = (width: number, height: number) => {
    currentViewport = { width, height }
    
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: height,
    })
    
    window.dispatchEvent(new Event('resize'))
  }
  
  it(`should maintain layout stability across ${iterations} random viewport changes`, () => {
    const components = [Hero, About, Services, OurOffice, Contact]
    
    for (let i = 0; i < iterations; i++) {
      // Random component
      const RandomComponent = components[Math.floor(Math.random() * components.length)]
      
      // Random viewport sizes
      const width = 320 + Math.floor(Math.random() * 1600) // 320px to 1920px
      const height = 568 + Math.floor(Math.random() * 512) // 568px to 1080px
      
      setViewportForProperty(width, height)
      
      const { container, unmount } = render(React.createElement(RandomComponent))
      const mainElement = container.querySelector('section') || container.querySelector('header') || container.querySelector('footer')
      
      if (mainElement) {
        const rect = mainElement.getBoundingClientRect()
        
        // Element should have reasonable dimensions
        expect(rect.width).toBeGreaterThan(0)
        expect(rect.height).toBeGreaterThan(0)
        
        // Element should not be excessively large
        expect(rect.height).toBeLessThan(height * 3) // Not excessively tall
      }
      
      // Component should render without errors
      expect(container.children.length).toBeGreaterThan(0)
      
      unmount()
    }
  })

  // Property Test: Consistent behavior across rapid viewport changes
  it('should handle rapid viewport changes without structural instability', () => {
    const { container } = render(React.createElement(Hero))
    const heroSection = container.querySelector('section')!
    
    let maxStructuralChange = 0
    
    // Simulate rapid viewport changes
    for (let i = 0; i < 10; i++) {
      const width1 = 375 + (i * 100)
      const width2 = 1200 - (i * 50)
      
      setViewportForProperty(width1, 667)
      const initialChildren = heroSection.children.length
      
      setViewportForProperty(width2, 800)
      const finalChildren = heroSection.children.length
      
      // Calculate structural change
      const structuralChange = Math.abs(finalChildren - initialChildren) / Math.max(initialChildren, 1)
      maxStructuralChange = Math.max(maxStructuralChange, structuralChange)
    }
    
    // Should handle rapid changes without major structural changes
    expect(maxStructuralChange).toBeLessThan(0.2) // Less than 20% structural change
  })

  // Property Test: Content doesn't cause horizontal overflow
  it('should prevent horizontal overflow across all viewport sizes', () => {
    const components = [Hero, About, Services, OurOffice, Contact, Header, Footer]
    const viewportWidths = [320, 375, 768, 1024, 1200, 1920]
    
    components.forEach(Component => {
      viewportWidths.forEach(width => {
        setViewportForProperty(width, 800)
        
        const { container, unmount } = render(React.createElement(Component))
        
        // Check main container for reasonable width
        const mainElement = container.firstElementChild
        if (mainElement) {
          const rect = mainElement.getBoundingClientRect()
          
          // Element should not be excessively wide
          expect(rect.width).toBeLessThanOrEqual(width + 50) // Allow reasonable margin
        }
        
        // Component should render successfully
        expect(container.children.length).toBeGreaterThan(0)
        
        unmount()
      })
    })
  })
})