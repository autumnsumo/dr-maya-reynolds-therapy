// Performance monitoring utilities
export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'production') {
    // Log Core Web Vitals for monitoring
    console.log(metric)
    
    // You can send to analytics service here
    // Example: analytics.track('Web Vital', metric)
  }
}

// Image optimization helpers
export const getOptimizedImageProps = (
  src: string,
  alt: string,
  priority: boolean = false
) => ({
  src,
  alt,
  quality: 85,
  priority,
  placeholder: 'blur' as const,
  blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
})

// Lazy loading intersection observer
export const createLazyLoadObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  if (typeof window === 'undefined') return null
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px 0px',
    threshold: 0.1,
  })
}

// Performance budget checker
export const checkPerformanceBudget = () => {
  if (typeof window === 'undefined') return
  
  // Check for performance API support
  if ('performance' in window && 'getEntriesByType' in window.performance) {
    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.fetchStart
      const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart
      
      // Log performance metrics
      console.log('Performance Metrics:', {
        loadTime: `${loadTime}ms`,
        domContentLoaded: `${domContentLoaded}ms`,
        firstContentfulPaint: 'Available via PerformanceObserver',
      })
      
      // Warn if load time exceeds 3 seconds
      if (loadTime > 3000) {
        console.warn('Page load time exceeds 3 seconds:', loadTime)
      }
    }
  }
}

// Core Web Vitals monitoring
export const observeWebVitals = () => {
  if (typeof window === 'undefined') return
  
  // Observe Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as any
        
        reportWebVitals({
          name: 'LCP',
          value: lastEntry.startTime,
          rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs-improvement' : 'poor'
        })
      })
      
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
    } catch (e) {
      console.warn('LCP observer not supported')
    }
    
    // Observe First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          reportWebVitals({
            name: 'FID',
            value: entry.processingStart - entry.startTime,
            rating: entry.processingStart - entry.startTime < 100 ? 'good' : 
                   entry.processingStart - entry.startTime < 300 ? 'needs-improvement' : 'poor'
          })
        })
      })
      
      fidObserver.observe({ entryTypes: ['first-input'] })
    } catch (e) {
      console.warn('FID observer not supported')
    }
    
    // Observe Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        
        reportWebVitals({
          name: 'CLS',
          value: clsValue,
          rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
        })
      })
      
      clsObserver.observe({ entryTypes: ['layout-shift'] })
    } catch (e) {
      console.warn('CLS observer not supported')
    }
  }
}