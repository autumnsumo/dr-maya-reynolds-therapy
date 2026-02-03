import Image from 'next/image'
import Button from '../ui/Button'
import { OFFICE_INFO } from '../../lib/constants'

interface OurOfficeProps {
  className?: string
}

export default function OurOffice({ className = '' }: OurOfficeProps) {
  return (
    <section 
      id="office"
      className={`relative py-20 sm:py-24 md:py-32 bg-organic overflow-hidden ${className}`}
      aria-labelledby="office-heading"
    >
      {/* Organic background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-32 left-16 w-36 h-36 bg-accent-200 rounded-organic opacity-20"></div>
        <div className="absolute bottom-16 right-12 w-28 h-28 bg-primary-200 rounded-curved opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent-300 rounded-gentle opacity-25"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with flowing design */}
        <header className="text-center mb-16 sm:mb-20">
          <div className="relative inline-block">
            <h2 id="office-heading" className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-secondary-900 mb-6">
              Our{' '}
              <span className="text-primary-600 relative inline-block">
                Sanctuary
                {/* Handwritten underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8C25 4 50 2 80 4C110 6 135 8 158 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary-400"/>
                </svg>
              </span>
            </h2>
          </div>
          <p className="text-lg text-secondary-700 max-w-3xl mx-auto leading-relaxed font-serif italic">
            "A thoughtfully designed space where healing begins the moment you arrive"
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-16 sm:mb-20">
          {/* Content Column - Flowing text layout */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-secondary-900 mb-8">
              Where Comfort Meets{' '}
              <span className="text-primary-600">Healing</span>
            </h3>
            
            <div className="space-y-6 text-lg text-secondary-700 leading-relaxed">
              <p>
                Step into a space designed to nurture your soul. Our Santa Monica sanctuary combines the warmth of home with the professionalism of clinical excellence, creating an environment where authentic healing can unfold naturally.
              </p>
              
              <p>
                Every element—from the soft lighting to the carefully chosen textures—has been thoughtfully curated to help you feel immediately at ease. This isn't just an office; it's a refuge where your journey toward wellness begins.
              </p>
            </div>
            
            {/* Key Features in organic cards */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {OFFICE_INFO.features.map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-gentle p-4 shadow-gentle border border-primary-100 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-primary-400 rounded-full mt-1.5 mr-3 flex-shrink-0 animate-pulse"></div>
                    <span className="text-secondary-700 font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Column - Organic curved design */}
          <div className="relative">
            <div className="relative w-full">
              {/* Organic background shapes */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary-100 via-accent-100 to-primary-200 rounded-organic transform rotate-2 opacity-60" aria-hidden="true"></div>
              <div className="absolute -inset-3 bg-gradient-to-tl from-accent-200 to-primary-100 rounded-curved transform -rotate-1 opacity-40" aria-hidden="true"></div>
              
              {/* Main image */}
              <div className="relative bg-white p-4 rounded-organic shadow-sanctuary">
                <Image
                  src={OFFICE_INFO.images[0].src}
                  alt={OFFICE_INFO.images[0].alt}
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-curved object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Floating comfort badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-gentle shadow-floating p-3 transform -rotate-3">
                  <p className="text-sm font-semibold text-primary-700">Comfort</p>
                  <p className="text-xs text-secondary-600">& Privacy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Gallery with organic layout */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-3xl font-serif font-bold text-secondary-900 text-center mb-12">
            Spaces for{' '}
            <span className="text-primary-600 relative inline-block">
              Healing
              <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4C20 2 40 1 60 3C80 5 90 6 98 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-primary-400"/>
              </svg>
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
            {OFFICE_INFO.images.slice(1).map((image, index) => (
              <figure key={index} className={`relative group transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all duration-500`}>
                <div className="relative overflow-hidden rounded-organic shadow-gentle group-hover:shadow-sanctuary">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                </div>
              </figure>
            ))}
          </div>
        </div>

        {/* Safety, Comfort, Privacy with organic styling */}
        <div className="relative">
          {/* Organic background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50 to-accent-50 rounded-organic transform -rotate-1 opacity-90" aria-hidden="true"></div>
          
          <div className="relative bg-white/90 backdrop-blur-sm p-8 sm:p-12 md:p-16 rounded-organic shadow-sanctuary border border-primary-100">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center mb-12">
              <article className="space-y-6">
                <div className="text-5xl mb-4" role="img" aria-label="Safety sanctuary icon">🕊️</div>
                <h4 className="text-2xl font-serif font-bold text-secondary-900">Sacred Safety</h4>
                <p className="text-secondary-700 leading-relaxed">
                  A protected sanctuary where vulnerability becomes strength and authentic expression is not just welcomed, but celebrated.
                </p>
              </article>
              
              <article className="space-y-6">
                <div className="text-5xl mb-4" role="img" aria-label="Comfort embrace icon">🤗</div>
                <h4 className="text-2xl font-serif font-bold text-secondary-900">Gentle Comfort</h4>
                <p className="text-secondary-700 leading-relaxed">
                  Thoughtfully curated elements create an atmosphere of warmth and ease, allowing your nervous system to naturally settle and open.
                </p>
              </article>
              
              <article className="space-y-6 sm:col-span-2 lg:col-span-1">
                <div className="text-5xl mb-4" role="img" aria-label="Privacy sanctuary icon">🌿</div>
                <h4 className="text-2xl font-serif font-bold text-secondary-900">Complete Privacy</h4>
                <p className="text-secondary-700 leading-relaxed">
                  Your sacred space for healing is completely confidential, allowing you to explore your inner world without reservation.
                </p>
              </article>
            </div>
            
            <div className="text-center">
              <Button 
                variant="primary" 
                size="lg"
                className="transform hover:scale-105 transition-all duration-300 shadow-gentle hover:shadow-sanctuary rounded-curved"
              >
                Experience Our Sanctuary
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}