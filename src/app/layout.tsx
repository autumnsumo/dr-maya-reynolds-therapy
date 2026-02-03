import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ScrollProgress from '../components/ui/ScrollProgress'
import BackToTop from '../components/ui/BackToTop'
import { seoMetadata, structuredData, professionalServiceData } from '../lib/seo'
import { WebVitals } from './web-vitals'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = seoMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceData),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <WebVitals />
        <ScrollProgress />
        <BackToTop />
        {/* Skip to main content link for keyboard navigation */}
        <a 
          href="#main-content" 
          className="skip-link focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-grow pt-16 sm:pt-20" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}