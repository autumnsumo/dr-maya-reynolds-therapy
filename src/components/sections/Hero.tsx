import Image from 'next/image'
import Button from '../ui/Button'
import { THERAPIST_PROFILE } from '../../lib/constants'
import { AnimatedSection, ParallaxElement, FloatingElement, MorphingShape } from '../ui/AnimatedElements'

interface HeroProps {
  className?: string
}

export default function Hero({ className = '' }: HeroProps) {
  return (
    <section 
      className={`relative bg-sanctuary overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 ${className}`}
      aria-labelledby="hero-heading"
    >
      {/* Animated organic background shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <ParallaxElement speed={0.2}>
          <MorphingShape 
            className="absolute -top-40 -right-40 opacity-60" 
            color="bg-primary-100" 
            size={320} 
          />
        </ParallaxElement>
        <ParallaxElement speed={0.3}>
          <FloatingElement amplitude={15} duration={4} delay={1}>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-100 rounded-curved opacity-40"></div>
          </FloatingElement>
        </ParallaxElement>
        <ParallaxElement speed={0.1}>
          <FloatingElement amplitude={8} duration={5} delay={2}>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary-200 rounded-gentle opacity-30"></div>
          </FloatingElement>
        </ParallaxElement>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column - Animated text layout */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <div className="relative">
                <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-secondary-900 mb-6 leading-tight">
                  <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                    Find Your Path to{' '}
                  </span>
                  <span className="text-primary-600 relative inline-block animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                    Healing
                    {/* Animated handwritten underline */}
                    <svg className="absolute -bottom-2 left-0 w-full h-3 animate-fade-in-up" style={{animationDelay: '0.9s'}} viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M2 8C20 4 40 2 60 4C80 6 100 8 120 6C140 4 160 2 180 4C190 5 195 6 198 7" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        className="text-primary-400"
                        strokeDasharray="200"
                        strokeDashoffset="200"
                        style={{
                          animation: 'draw-line 2s ease-out 1.2s forwards'
                        }}
                      />
                    </svg>
                  </span>
                </h1>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInLeft" delay={400}>
              <p className="text-xl sm:text-2xl text-primary-700 mb-4 font-medium font-serif italic animate-slide-in-left" style={{animationDelay: '0.8s'}}>
                {THERAPIST_PROFILE.name}, {THERAPIST_PROFILE.title}
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInLeft" delay={600}>
              <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{animationDelay: '1s'}}>
                Creating a sanctuary for healing in Santa Monica. Specializing in anxiety, trauma, and burnout recovery through compassionate, evidence-based therapy.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="transform hover:scale-105 transition-all duration-300 shadow-gentle hover:shadow-sanctuary rounded-curved hover-lift animate-scale-in"
                  style={{animationDelay: '1.2s'}}
                >
                  Begin Your Journey
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="transform hover:scale-105 transition-all duration-300 rounded-curved border-primary-300 text-primary-700 hover:bg-primary-50 hover-lift animate-scale-in"
                  style={{animationDelay: '1.4s'}}
                >
                  Learn More
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={1000}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-secondary-600">
                <span className="flex items-center justify-center lg:justify-start animate-slide-in-left" style={{animationDelay: '1.6s'}}>
                  <FloatingElement amplitude={3} duration={2} delay={0}>
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  </FloatingElement>
                  Licensed in California
                </span>
                <span className="flex items-center justify-center lg:justify-start animate-slide-in-left" style={{animationDelay: '1.8s'}}>
                  <FloatingElement amplitude={3} duration={2} delay={0.5}>
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  </FloatingElement>
                  In-Person & Telehealth
                </span>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Image Column - Animated organic design */}
          <div className="relative order-1 lg:order-2">
            <AnimatedSection animation="fadeInRight" delay={300}>
              <div className="relative w-full max-w-lg mx-auto">
                {/* Animated organic background shapes */}
                <ParallaxElement speed={0.1}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-primary-100 to-accent-100 rounded-organic transform rotate-3 scale-105 animate-morph" aria-hidden="true"></div>
                </ParallaxElement>
                <ParallaxElement speed={0.15}>
                  <div className="absolute inset-0 bg-gradient-to-tl from-accent-200 via-primary-100 to-primary-200 rounded-curved transform -rotate-2 scale-95 opacity-60 animate-pulse-scale" aria-hidden="true"></div>
                </ParallaxElement>
                
                {/* Main image container with hover effects */}
                <div className="relative bg-white p-3 rounded-organic shadow-sanctuary transform hover:scale-105 transition-all duration-500 hover:rotate-1 hover-lift hover-glow">
                  <Image
                    src={THERAPIST_PROFILE.image}
                    alt={THERAPIST_PROFILE.imageAlt}
                    width={500}
                    height={600}
                    className="w-full h-auto rounded-curved object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                  
                  {/* Animated floating elements */}
                  <FloatingElement amplitude={12} duration={3} delay={0}>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-300 rounded-full opacity-80"></div>
                  </FloatingElement>
                  <FloatingElement amplitude={8} duration={4} delay={1}>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary-300 rounded-full opacity-60"></div>
                  </FloatingElement>
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 rounded-organic opacity-0 hover:opacity-100 transition-opacity duration-300 animate-shimmer pointer-events-none"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Add the draw-line animation */}
      <style jsx>{`
        @keyframes draw-line {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  )
}