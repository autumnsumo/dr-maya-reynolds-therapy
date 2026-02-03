'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log Core Web Vitals in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vital:', metric)
    }
    
    // In production, you would send to analytics
    // Example: analytics.track('Web Vital', metric)
    
    // Check performance thresholds
    const thresholds = {
      CLS: { good: 0.1, poor: 0.25 },
      FID: { good: 100, poor: 300 },
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      TTFB: { good: 800, poor: 1800 },
    }
    
    const threshold = thresholds[metric.name as keyof typeof thresholds]
    if (threshold) {
      let rating = 'good'
      if (metric.value > threshold.poor) rating = 'poor'
      else if (metric.value > threshold.good) rating = 'needs-improvement'
      
      if (rating !== 'good') {
        console.warn(`${metric.name} needs improvement:`, {
          value: metric.value,
          rating,
          threshold
        })
      }
    }
  })

  return null
}