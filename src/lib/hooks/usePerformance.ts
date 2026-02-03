'use client'

import { useEffect } from 'react'

export function usePerformanceMonitoring() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1] as any
          
          if (lastEntry.startTime > 2500) {
            console.warn('LCP is slow:', lastEntry.startTime)
          }
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        
        return () => lcpObserver.disconnect()
      } catch (e) {
        console.warn('LCP monitoring not supported')
      }
    }
  }, [])
}

export function useImagePreloading(imageSrcs: string[]) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const preloadImages = imageSrcs.map((src) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
      return link
    })
    
    return () => {
      preloadImages.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link)
        }
      })
    }
  }, [imageSrcs])
}

export function useLazyLoading() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
              observer.unobserve(img)
            }
          }
        })
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1,
      }
    )
    
    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach((img) => observer.observe(img))
    
    return () => observer.disconnect()
  }, [])
}