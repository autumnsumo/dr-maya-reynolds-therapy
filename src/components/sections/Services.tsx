import { THERAPIST_PROFILE } from '../../lib/constants'
import { AnimatedSection, StaggeredList, ParallaxElement, FloatingElement, MorphingShape } from '../ui/AnimatedElements'

interface ServicesProps {
  className?: string
}

interface ServiceCardProps {
  title: string
  items: readonly string[]
  icon: string
  description: string
  index: number
}

function ServiceCard({ title, items, icon, description, index }: ServiceCardProps) {
  const rotations = ['rotate-1', '-rotate-1', 'rotate-2']
  const bgGradients = ['from-primary-50 to-accent-50', 'from-accent-50 to-primary-100', 'from-primary-100 to-accent-100']
  
  return (
    <article className={`bg-gradient-to-br ${bgGradients[index % 3]} p-6 sm:p-8 rounded-organic shadow-gentle hover:shadow-sanctuary transition-all duration-500 transform hover:scale-105 ${rotations[index % 3]} hover:rotate-0 border border-primary-100 hover-lift hover-glow group`}>
      <div className="text-4xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300" role="img" aria-label={`${title} icon`}>
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-secondary-900 mb-4 text-center group-hover:text-primary-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-secondary-600 mb-6 text-center italic">{description}</p>
      <StaggeredList staggerDelay={100}>
        {items.map((item, itemIndex) => (
          <li key={itemIndex} className="flex items-start mb-4">
            <FloatingElement amplitude={2} duration={2} delay={itemIndex * 0.2}>
              <div className="w-3 h-3 bg-primary-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
            </FloatingElement>
            <span className="text-secondary-700 font-medium">{item}</span>
          </li>
        ))}
      </StaggeredList>
    </article>
  )
}

export default function Services({ className = '' }: ServicesProps) {
  const serviceCategories = [
    {
      title: "Specializations",
      items: THERAPIST_PROFILE.specializations,
      icon: "🌸",
      description: "Gentle healing for life's deepest challenges"
    },
    {
      title: "Therapeutic Approaches",
      items: THERAPIST_PROFILE.approaches,
      icon: "🦋",
      description: "Evidence-based methods with compassionate care"
    },
    {
      title: "Session Options",
      items: THERAPIST_PROFILE.sessionTypes,
      icon: "🌿",
      description: "Flexible options for your comfort and convenience"
    }
  ]

  return (
    <section 
      id="services"
      className={`relative py-20 sm:py-24 md:py-32 bg-sanctuary overflow-hidden ${className}`}
      aria-labelledby="services-heading"
    >
      {/* Animated organic background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <ParallaxElement speed={0.2}>
          <MorphingShape 
            className="absolute top-10 left-10 opacity-20" 
            color="bg-accent-200" 
            size={128} 
          />
        </ParallaxElement>
        <ParallaxElement speed={0.3}>
          <FloatingElement amplitude={20} duration={8} delay={1}>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-100 rounded-curved opacity-30"></div>
          </FloatingElement>
        </ParallaxElement>
        <ParallaxElement speed={0.1}>
          <FloatingElement amplitude={12} duration={6} delay={3}>
            <div className="absolute top-1/2 right-10 w-20 h-20 bg-accent-300 rounded-gentle opacity-25"></div>
          </FloatingElement>
        </ParallaxElement>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated section header with flowing design */}
        <header className="text-center mb-16 sm:mb-20">
          <AnimatedSection animation="fadeInUp" delay={100}>
            <div className="relative inline-block">
              <h2 id="services-heading" className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-secondary-900 mb-6">
                <span className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>Services &{' '}</span>
                <span className="text-primary-600 relative inline-block animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  Approaches
                  {/* Animated handwritten underline */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 animate-fade-in-up" style={{animationDelay: '0.6s'}} viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M2 8C30 4 60 2 90 4C120 6 150 8 180 6C190 5 195 6 198 7" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      className="text-primary-400"
                      strokeDasharray="200"
                      strokeDashoffset="200"
                      style={{
                        animation: 'draw-line 2s ease-out 0.8s forwards'
                      }}
                    />
                  </svg>
                </span>
              </h2>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={300}>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto leading-relaxed animate-slide-in-up" style={{animationDelay: '0.5s'}}>
              Compassionate, evidence-based therapy designed to help you find peace, healing, and authentic connection with yourself. Each approach is carefully chosen to support your unique journey toward wellness.
            </p>
          </AnimatedSection>
        </header>

        {/* Animated service cards in organic flowing grid */}
        <AnimatedSection animation="fadeInUp" delay={400}>
          <StaggeredList className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20" staggerDelay={200}>
            {serviceCategories.map((category, index) => (
              <ServiceCard
                key={index}
                title={category.title}
                items={category.items}
                icon={category.icon}
                description={category.description}
                index={index}
              />
            ))}
          </StaggeredList>
        </AnimatedSection>

        {/* Animated client focus section with organic styling */}
        <AnimatedSection animation="scaleIn" delay={600}>
          <div className="relative">
            {/* Animated organic background shape */}
            <ParallaxElement speed={0.1}>
              <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50 to-accent-50 rounded-organic transform -rotate-1 opacity-80 animate-pulse-scale" aria-hidden="true"></div>
            </ParallaxElement>
            
            <div className="relative bg-white/90 backdrop-blur-sm p-8 sm:p-12 md:p-16 rounded-organic shadow-sanctuary border border-primary-100 hover-lift transition-all duration-500">
              <div className="text-center">
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-secondary-900 mb-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                  Who I Work{' '}
                  <span className="text-primary-600 relative inline-block">
                    With
                    <svg className="absolute -bottom-1 left-0 w-full h-2 animate-fade-in-up" style={{animationDelay: '1s'}} viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M2 4C15 2 30 1 45 3C60 5 70 6 78 4" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        className="text-primary-400"
                        strokeDasharray="80"
                        strokeDashoffset="80"
                        style={{
                          animation: 'draw-line 1.5s ease-out 1.2s forwards'
                        }}
                      />
                    </svg>
                  </span>
                </h3>
                
                <p className="text-lg text-secondary-700 mb-10 max-w-2xl mx-auto leading-relaxed font-serif italic animate-slide-in-up" style={{animationDelay: '1s'}}>
                  "I specialize in creating a sanctuary for high-achieving individuals ready to embrace authentic healing and meaningful transformation."
                </p>
                
                <StaggeredList className="flex flex-wrap justify-center gap-4" staggerDelay={150}>
                  {THERAPIST_PROFILE.clientTypes.map((clientType, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-r from-primary-100 to-accent-100 px-6 py-3 rounded-curved shadow-gentle transform hover:scale-105 transition-all duration-300 border border-primary-200 hover-lift hover-glow"
                      role="listitem"
                    >
                      <span className="text-secondary-800 font-medium">{clientType}</span>
                    </div>
                  ))}
                </StaggeredList>
              </div>
            </div>
          </div>
        </AnimatedSection>
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