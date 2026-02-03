'use client'

import { useState } from 'react'
import Button from '../ui/Button'
import { THERAPIST_PROFILE, OFFICE_INFO, CONTACT_INFO } from '../../lib/constants'

interface ContactProps {
  className?: string
}

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export default function Contact({ className = '' }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={`relative py-20 sm:py-24 md:py-32 bg-sanctuary overflow-hidden ${className}`}>
      {/* Organic background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-organic opacity-20"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-accent-200 rounded-curved opacity-25"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-300 rounded-gentle opacity-15"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with flowing design */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="relative inline-block">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-secondary-900 mb-6">
                Begin Your{' '}
                <span className="text-primary-600 relative inline-block">
                  Journey
                  {/* Handwritten underline */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 140 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8C20 4 40 2 70 4C100 6 120 8 138 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary-400"/>
                  </svg>
                </span>
              </h2>
            </div>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto leading-relaxed font-serif italic">
              "Take the first gentle step toward healing. I'm here to walk alongside you with compassion, expertise, and unwavering support."
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Information - Organic styling */}
            <div className="space-y-10">
              <div className="relative">
                {/* Organic background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50 to-accent-50 rounded-organic transform rotate-1 opacity-80" aria-hidden="true"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-organic shadow-sanctuary border border-primary-100">
                  <h3 className="text-3xl font-serif font-bold text-secondary-900 mb-8">
                    Connect With{' '}
                    <span className="text-primary-600">Dr. Maya</span>
                  </h3>
                  
                  {/* Office Address with organic styling */}
                  <div className="mb-8">
                    <h4 className="text-xl font-serif font-semibold text-secondary-800 mb-4 flex items-center">
                      <span className="text-2xl mr-3">🏡</span>
                      Our Sanctuary
                    </h4>
                    <div className="bg-primary-50 p-4 rounded-gentle border border-primary-100">
                      <p className="text-secondary-700 leading-relaxed">
                        {OFFICE_INFO.address.street}<br />
                        {OFFICE_INFO.address.city}, {OFFICE_INFO.address.state} {OFFICE_INFO.address.zipCode}
                      </p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">📞</span>
                      <div>
                        <p className="font-medium text-secondary-800">Phone</p>
                        <p className="text-secondary-600">{CONTACT_INFO.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">✉️</span>
                      <div>
                        <p className="font-medium text-secondary-800">Email</p>
                        <p className="text-secondary-600">{CONTACT_INFO.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Demographics with organic styling */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-primary-50 to-white rounded-organic transform -rotate-1 opacity-80" aria-hidden="true"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-organic shadow-sanctuary border border-accent-100">
                  <h4 className="text-2xl font-serif font-bold text-secondary-800 mb-6 text-center">
                    Who I Support
                  </h4>
                  <p className="text-secondary-700 mb-6 text-center italic">
                    Specialized care for high-achieving adults ready to prioritize their well-being:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-primary-400 rounded-full mt-1.5 mr-4 flex-shrink-0 animate-pulse"></div>
                      <span className="text-secondary-700">Experiencing anxiety, panic, or overwhelming stress</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-accent-400 rounded-full mt-1.5 mr-4 flex-shrink-0 animate-pulse"></div>
                      <span className="text-secondary-700">Processing trauma or recovering from burnout</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-primary-400 rounded-full mt-1.5 mr-4 flex-shrink-0 animate-pulse"></div>
                      <span className="text-secondary-700">Seeking balance between success and well-being</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-accent-400 rounded-full mt-1.5 mr-4 flex-shrink-0 animate-pulse"></div>
                      <span className="text-secondary-700">Ready to invest in their mental health journey</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Session Types */}
              <div className="text-center">
                <h4 className="text-xl font-serif font-semibold text-secondary-800 mb-4">
                  Session Options
                </h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {THERAPIST_PROFILE.sessionTypes.map((type) => (
                    <span
                      key={type}
                      className="px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-secondary-800 rounded-curved text-sm font-medium shadow-gentle border border-primary-200"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form - Organic styling */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-accent-50 to-primary-50 rounded-organic transform rotate-1 opacity-80" aria-hidden="true"></div>
              
              <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-organic shadow-sanctuary border border-primary-100">
                <h3 className="text-3xl font-serif font-bold text-secondary-900 mb-8 text-center">
                  Send a{' '}
                  <span className="text-primary-600 relative inline-block">
                    Message
                    <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 4C20 2 40 1 60 3C80 5 100 6 118 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-primary-400"/>
                    </svg>
                  </span>
                </h3>
                
                {isSubmitted ? (
                  <div className="bg-gradient-to-br from-green-50 to-primary-50 border border-green-200 rounded-organic p-8 text-center shadow-gentle">
                    <div className="text-green-600 mb-4">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-green-800 mb-4">
                      Message Received! 🌸
                    </h4>
                    <p className="text-green-700 mb-6 italic">
                      Thank you for reaching out. I'll respond within 24 hours with care and attention to your needs.
                    </p>
                    <Button
                      variant="outline"
                      className="rounded-curved border-green-300 text-green-700 hover:bg-green-50"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-curved focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                          errors.name ? 'border-red-400 shadow-red-100' : 'border-primary-200 shadow-gentle'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600 italic">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-curved focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                          errors.email ? 'border-red-400 shadow-red-100' : 'border-primary-200 shadow-gentle'
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600 italic">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-curved focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                          errors.phone ? 'border-red-400 shadow-red-100' : 'border-primary-200 shadow-gentle'
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-600 italic">{errors.phone}</p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-curved focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300 resize-vertical bg-white/80 backdrop-blur-sm ${
                          errors.message ? 'border-red-400 shadow-red-100' : 'border-primary-200 shadow-gentle'
                        }`}
                        placeholder="Tell me a bit about what brings you here and how I can support your healing journey..."
                      />
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-600 italic">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full transform hover:scale-105 transition-all duration-300 shadow-gentle hover:shadow-sanctuary rounded-curved"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending with Care...' : 'Send Message 🌸'}
                    </Button>

                    <p className="text-sm text-secondary-500 text-center italic">
                      * Required fields. Your information is held with complete confidentiality and care.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}