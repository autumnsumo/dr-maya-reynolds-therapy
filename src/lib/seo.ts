import { Metadata } from 'next'
import { THERAPIST_PROFILE, OFFICE_INFO, CONTACT_INFO } from './constants'

// SEO-optimized metadata for the homepage
export const seoMetadata: Metadata = {
  metadataBase: new URL('https://drmayareynolds.com'),
  title: 'Dr. Maya Reynolds - Licensed Clinical Psychologist | Santa Monica Therapy Services',
  description: 'Expert therapy services in Santa Monica, CA. Dr. Maya Reynolds specializes in anxiety therapy, panic disorder treatment, trauma therapy, and burnout counseling. CBT, EMDR, mindfulness therapy available. In-person & telehealth sessions for Santa Monica residents.',
  keywords: [
    'therapy Santa Monica',
    'psychologist Santa Monica',
    'anxiety therapy Santa Monica',
    'trauma therapy Santa Monica',
    'CBT therapy Santa Monica',
    'EMDR therapy Santa Monica',
    'Santa Monica therapist',
    'Santa Monica psychology',
    'burnout therapy Santa Monica',
    'panic disorder treatment Santa Monica',
    'licensed clinical psychologist Santa Monica',
    'telehealth therapy California',
    'mindfulness therapy Santa Monica',
    'body-oriented therapy Santa Monica',
    'therapy near me Santa Monica',
    'mental health services Santa Monica'
  ],
  authors: [{ name: 'Dr. Maya Reynolds' }],
  creator: 'Dr. Maya Reynolds',
  publisher: 'Dr. Maya Reynolds Psychology Practice',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://drmayareynolds.com',
    siteName: 'Dr. Maya Reynolds Psychology Practice',
    title: 'Dr. Maya Reynolds - Licensed Clinical Psychologist | Santa Monica Therapy Services',
    description: 'Expert therapy services in Santa Monica, CA. Specializing in anxiety therapy, trauma counseling, and burnout treatment with CBT, EMDR, and mindfulness approaches for Santa Monica residents.',
    images: [
      {
        url: '/images/dr-maya-reynolds.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Maya Reynolds - Licensed Clinical Psychologist providing therapy services in Santa Monica, CA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Maya Reynolds - Licensed Clinical Psychologist | Santa Monica Therapy Services',
    description: 'Expert therapy services in Santa Monica, CA. Specializing in anxiety therapy, trauma counseling, and burnout treatment for high-achieving adults.',
    images: ['/images/dr-maya-reynolds.jpg'],
  },
  alternates: {
    canonical: 'https://drmayareynolds.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

// JSON-LD structured data for local business
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://drmayareynolds.com',
  name: THERAPIST_PROFILE.name,
  alternateName: 'Dr. Maya Reynolds Psychology Practice',
  description: 'Licensed clinical psychologist providing comprehensive therapy services in Santa Monica, CA. Specializing in anxiety therapy, panic disorder treatment, trauma counseling, and burnout recovery for high-achieving adults.',
  url: 'https://drmayareynolds.com',
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  priceRange: '$$',
  paymentAccepted: ['Cash', 'Credit Card', 'Insurance'],
  currenciesAccepted: 'USD',
  address: {
    '@type': 'PostalAddress',
    streetAddress: OFFICE_INFO.address.street,
    addressLocality: OFFICE_INFO.address.city,
    addressRegion: OFFICE_INFO.address.state,
    postalCode: OFFICE_INFO.address.zipCode,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '34.0194', // Santa Monica coordinates
    longitude: '-118.4912',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Santa Monica',
      sameAs: 'https://en.wikipedia.org/wiki/Santa_Monica,_California',
    },
    {
      '@type': 'City', 
      name: 'Venice',
      sameAs: 'https://en.wikipedia.org/wiki/Venice,_Los_Angeles',
    },
    {
      '@type': 'City',
      name: 'Los Angeles',
      sameAs: 'https://en.wikipedia.org/wiki/Los_Angeles',
    },
    {
      '@type': 'City',
      name: 'West Hollywood',
      sameAs: 'https://en.wikipedia.org/wiki/West_Hollywood,_California',
    },
    {
      '@type': 'State',
      name: 'California',
      sameAs: 'https://en.wikipedia.org/wiki/California',
    },
  ],
  serviceType: 'Mental Health Services',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Santa Monica Therapy Services',
    itemListElement: THERAPIST_PROFILE.specializations.map((specialization, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: `${specialization} Therapy in Santa Monica`,
        description: `Professional ${specialization.toLowerCase()} therapy services in Santa Monica, CA`,
        areaServed: 'Santa Monica, CA',
      },
      position: index + 1,
    })),
  },
  employee: {
    '@type': 'Person',
    name: THERAPIST_PROFILE.name,
    jobTitle: THERAPIST_PROFILE.title,
    description: THERAPIST_PROFILE.bio,
    image: THERAPIST_PROFILE.image,
    knowsAbout: THERAPIST_PROFILE.specializations,
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional License',
      recognizedBy: {
        '@type': 'Organization',
        name: 'California Board of Psychology',
      },
    },
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '09:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.psychologytoday.com/us/therapists/maya-reynolds',
    'https://www.linkedin.com/in/drmayareynolds',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Anonymous Client',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'Dr. Reynolds helped me work through my anxiety and panic attacks with compassionate, evidence-based care. Highly recommend.',
    },
  ],
}

// Additional structured data for professional service
export const professionalServiceData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Dr. Maya Reynolds Psychology Practice - Santa Monica Therapy',
  description: 'Licensed clinical psychology practice specializing in anxiety therapy, trauma counseling, and burnout treatment in Santa Monica, California',
  provider: {
    '@type': 'Person',
    name: THERAPIST_PROFILE.name,
    jobTitle: THERAPIST_PROFILE.title,
    hasCredential: THERAPIST_PROFILE.license,
  },
  serviceType: 'Mental Health Therapy Services',
  areaServed: 'Santa Monica, CA',
  availableChannel: [
    {
      '@type': 'ServiceChannel',
      serviceType: 'In-person therapy sessions in Santa Monica',
      availableLanguage: 'English',
    },
    {
      '@type': 'ServiceChannel',
      serviceType: 'Telehealth therapy for California residents',
      availableLanguage: 'English',
    },
  ],
}