import Image from 'next/image'
import { THERAPIST_PROFILE } from '../../lib/constants'
import { AnimatedSection, StaggeredList, ParallaxElement, FloatingElement, MorphingShape } from '../ui/AnimatedElements'

interface AboutProps {
  className?: string
}

export default function About({ className = '' }: AboutProps) {
  const credentials = [
    { title: THERAPIST_PROFILE.title, icon: '🎓' },
    { title: `Licensed in ${THERAPIST_PROFILE.location}`, icon: '📋' },
    { title: '10+ Years Experience', icon: '⭐' },
    { title: 'Evidence-Based Practice', icon: '🔬' }
  ]

  const focusAreas = ['Anxiety & Panic', 'Trauma Recovery', 'Burnout & Stress', 'Life Transitions']

  return (
    <section 
      id="about"
      className={`relative py-20 sm:py-24 md:py-32 bg-flowing overflow-hidden ${className}`}
      aria-labelledby="about-heading"
    >
      {/* Animated organic background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <ParallaxElement speed={0.2}>
          <MorphingShape 
            className="absolute top-20 right-10 opacity-30" 
            color="bg-primary-100" 
            size={160} 
          />
        </ParallaxElement>
        <ParallaxElement speed={0.3}>
          <FloatingElement amplitude={10} duration={6} delay={2}>
            <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent-200 rounded-gentle opacity-40"></div>
          </FloatingElement>
        </ParallaxElement>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Column - Animated organic design */}
          <div className="relative order-2 lg:order-1">
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                {/* Animated organic background shapes */}
                <ParallaxElement speed={0.1}>
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 via-accent-100 to-primary-200 rounded-organic transform -rotate-2 opacity-60 animate-pulse-scale" aria-hidden="true"></div>
                </ParallaxElement>
                <ParallaxElement speed={0.15}>
                  <div className="absolute -inset-2 bg-gradient-to-tl from-accent-200 to-primary-100 rounded-curved transform rotate-1 opacity-40 animate-morph" aria-hidden="true"></div>
                </ParallaxElement>
                
                {/* Main image with hover effects */}
                <div className="relative bg-white p-4 rounded-organic shadow-sanctuary hover-lift hover-glow transition-all duration-500">
                  <Image
                    src={THERAPIST_PROFILE.image}
                    alt={`${THERAPIST_PROFILE.name} - Licensed Clinical Psychologist in professional office setting`}
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-curved object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Animated floating credential badge */}
                  <FloatingElement amplitude={8} duration={3} delay={1}>
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-gentle shadow-floating p-3 transform rotate-3 hover-lift">
                      <p className="text-sm font-semibold text-primary-700">Licensed</p>
                      <p className="text-xs text-secondary-600">{THERAPIST_PROFILE.license}</p>
                    </div>
                  </FloatingElement>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 rounded-organic opacity-0 hover:opacity-100 transition-opacity duration-300 animate-shimmer pointer-events-none"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Content Column - Animated flowing text layout */}
          <div className="order-1 lg:order-2">
            <AnimatedSection animation="fadeInRight" delay={100}>
              <div className="relative">
                <h2 id="about-heading" className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-secondary-900 mb-6">
                  <span className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>About{' '}</span>
                  <span className="text-primary-600 relative inline-block animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    Dr. Maya
                    {/* Animated handwritten underline */}
                    <svg className="absolute -bottom-2 left-0 w-full h-3 animate-fade-in-up" style={{animationDelay: '0.6s'}} viewBox="0 0 150 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M2 6C25 3 50 2 75 4C100 6 125 8 148 6" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        className="text-primary-400"
                        strokeDasharray="150"
                        strokeDashoffset="150"
                        style={{
                          animation: 'draw-line 1.5s ease-out 0.8s forwards'
                        }}
                      />
                    </svg>
                  </span>
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="space-y-6 text-lg text-secondary-700 leading-relaxed">
                <p className="font-serif italic text-xl text-primary-700 mb-8 animate-slide-in-right" style={{animationDelay: '0.5s'}}>
                  "Creating a safe sanctuary where healing begins and authentic self-discovery unfolds."
                </p>
                
                <p className="animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                  Dr. Maya Reynolds brings over a decade of experience in helping individuals navigate life's most challenging moments. As a licensed clinical psychologist in California, she specializes in creating a therapeutic environment that feels more like a peaceful retreat than a clinical setting.
                </p>
                
                <p className="animate-fade-in-up" style={{animationDelay: '0.9s'}}>
                  Her approach combines evidence-based practices with deep compassion, recognizing that each person's journey to healing is unique. Whether you're struggling with anxiety, processing trauma, or feeling overwhelmed by life's demands, Dr. Maya provides the gentle guidance and professional expertise needed for meaningful change.
                </p>
              </div>
            </AnimatedSection>
            
            {/* Animated credentials in organic layout */}
            <AnimatedSection animation="fadeInUp" delay={500}>
              <div className="mt-10 space-y-4">
                <h3 className="text-xl font-serif font-semibold text-secondary-800 mb-6 animate-slide-in-right" style={{animationDelay: '1.1s'}}>
                  Credentials & Training
                </h3>
                <StaggeredList className="grid sm:grid-cols-2 gap-4" staggerDelay={200}>
                  {credentials.map((credential, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-gentle p-4 shadow-gentle border border-primary-100 hover-lift hover-glow transition-all duration-300">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{credential.icon}</span>
                        <p className="text-secondary-700 font-medium">{credential.title}</p>
                      </div>
                    </div>
                  ))}
                </StaggeredList>
              </div>
            </AnimatedSection>
            
            {/* Animated specializations with organic styling */}
            <AnimatedSection animation="fadeInUp" delay={700}>
              <div className="mt-10">
                <h3 className="text-xl font-serif font-semibold text-secondary-800 mb-6 animate-slide-in-right" style={{animationDelay: '1.5s'}}>
                  Areas of Focus
                </h3>
                <StaggeredList className="flex flex-wrap gap-3" staggerDelay={150}>
                  {focusAreas.map((area, index) => (
                    <span key={index} className="bg-primary-100 text-primary-800 px-4 py-2 rounded-curved text-sm font-medium hover-lift transition-all duration-300 hover:bg-primary-200 hover:scale-105">
                      {area}
                    </span>
                  ))}
                </StaggeredList>
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