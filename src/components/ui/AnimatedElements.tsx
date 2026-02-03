'use client'

import { ReactNode, RefObject } from 'react'
import { useScrollAnimation, useStaggeredAnimation, useParallaxScroll, useTypewriterEffect } from '../../lib/hooks/useScrollAnimation'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn' | 'slideInUp'
  delay?: number
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0 
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation({ delay })

  const animationClasses = {
    fadeInUp: isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-8',
    fadeInLeft: isVisible 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 -translate-x-8',
    fadeInRight: isVisible 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 translate-x-8',
    fadeIn: isVisible 
      ? 'opacity-100' 
      : 'opacity-0',
    scaleIn: isVisible 
      ? 'opacity-100 scale-100' 
      : 'opacity-0 scale-95',
    slideInUp: isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-12'
  }

  return (
    <div
      ref={elementRef as RefObject<HTMLDivElement>}
      className={`transition-all duration-1000 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  )
}

interface StaggeredListProps {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
}

export function StaggeredList({ children, className = '', staggerDelay = 150 }: StaggeredListProps) {
  const { containerRef, visibleItems } = useStaggeredAnimation(children.length, staggerDelay)

  return (
    <div ref={containerRef as RefObject<HTMLDivElement>} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ease-out ${
            visibleItems.has(index)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxElement({ children, speed = 0.3, className = '' }: ParallaxElementProps) {
  const { elementRef, offset } = useParallaxScroll(speed)

  return (
    <div
      ref={elementRef as RefObject<HTMLDivElement>}
      className={className}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  )
}

interface TypewriterTextProps {
  text: string
  speed?: number
  className?: string
  startOnView?: boolean
}

export function TypewriterText({ 
  text, 
  speed = 50, 
  className = '',
  startOnView = true 
}: TypewriterTextProps) {
  const { displayText, startTypewriter } = useTypewriterEffect(text, speed)
  const { elementRef, isVisible } = useScrollAnimation()

  // Start typewriter when element comes into view
  if (startOnView && isVisible && displayText === '') {
    startTypewriter()
  }

  return (
    <span ref={elementRef as RefObject<HTMLSpanElement>} className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

interface FloatingElementProps {
  children: ReactNode
  className?: string
  amplitude?: number
  duration?: number
  delay?: number
}

export function FloatingElement({ 
  children, 
  className = '',
  amplitude = 10,
  duration = 3,
  delay = 0
}: FloatingElementProps) {
  return (
    <div
      className={`animate-float ${className}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        '--float-amplitude': `${amplitude}px`
      } as any}
    >
      {children}
    </div>
  )
}

interface PulsingElementProps {
  children: ReactNode
  className?: string
  scale?: number
  duration?: number
}

export function PulsingElement({ 
  children, 
  className = '',
  scale = 1.05,
  duration = 2
}: PulsingElementProps) {
  return (
    <div
      className={`animate-pulse-scale ${className}`}
      style={{
        animationDuration: `${duration}s`,
        '--pulse-scale': scale
      } as any}
    >
      {children}
    </div>
  )
}

interface MorphingShapeProps {
  className?: string
  color?: string
  size?: number
}

export function MorphingShape({ 
  className = '',
  color = 'bg-primary-200',
  size = 100
}: MorphingShapeProps) {
  return (
    <div
      className={`${color} rounded-organic animate-morph ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  )
}

interface GlowingElementProps {
  children: ReactNode
  className?: string
  glowColor?: string
  intensity?: 'low' | 'medium' | 'high'
}

export function GlowingElement({ 
  children, 
  className = '',
  glowColor = 'primary',
  intensity = 'medium'
}: GlowingElementProps) {
  const glowClasses = {
    low: `shadow-${glowColor}-200/30`,
    medium: `shadow-${glowColor}-300/50`,
    high: `shadow-${glowColor}-400/70`
  }

  return (
    <div className={`animate-glow ${glowClasses[intensity]} ${className}`}>
      {children}
    </div>
  )
}
