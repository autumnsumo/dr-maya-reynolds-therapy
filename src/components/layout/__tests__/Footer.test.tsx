import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('Dr. Maya Reynolds, Psy.D.')).toBeInTheDocument()
    expect(screen.getByText('Licensed Clinical Psychologist')).toBeInTheDocument()
    expect(screen.getByText('123th Street 45 W')).toBeInTheDocument()
    expect(screen.getByText('Santa Monica, CA 90401')).toBeInTheDocument()
  })

  it('renders clickable contact links', () => {
    render(<Footer />)
    
    const phoneLink = screen.getByRole('link', { name: '(123) 456-7890' })
    const emailLink = screen.getByRole('link', { name: 'info@drmayareynolds.com' })
    
    expect(phoneLink).toHaveAttribute('href', 'tel:+1234567890')
    expect(emailLink).toHaveAttribute('href', 'mailto:info@drmayareynolds.com')
  })

  it('renders services list', () => {
    render(<Footer />)
    expect(screen.getByText('Anxiety & Panic Disorders')).toBeInTheDocument()
    expect(screen.getByText('Trauma Therapy')).toBeInTheDocument()
    expect(screen.getByText('Burnout Recovery')).toBeInTheDocument()
    expect(screen.getByText('Individual Therapy')).toBeInTheDocument()
    expect(screen.getByText('Telehealth Sessions')).toBeInTheDocument()
  })

  it('renders office hours', () => {
    render(<Footer />)
    expect(screen.getByText('Monday - Thursday: 9:00 AM - 6:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Friday: 9:00 AM - 4:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Saturday: By appointment')).toBeInTheDocument()
    expect(screen.getByText('Sunday: Closed')).toBeInTheDocument()
  })

  it('renders copyright information', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2024 Dr. Maya Reynolds. All rights reserved./)).toBeInTheDocument()
    expect(screen.getByText(/Licensed Clinical Psychologist | PSY 12345/)).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('bg-secondary-900', 'text-white')
  })

  it('has proper responsive grid layout', () => {
    render(<Footer />)
    const gridContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-3')
    expect(gridContainer).toBeInTheDocument()
  })

  it('renders all section headings', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Information')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Office Hours')).toBeInTheDocument()
  })

  it('has proper styling classes', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-secondary-900', 'text-white')
    
    const container = footer.querySelector('.container')
    expect(container).toHaveClass('mx-auto', 'px-4', 'py-8')
  })

  it('includes license information in footer', () => {
    render(<Footer />)
    expect(screen.getByText(/PSY 12345/)).toBeInTheDocument()
    expect(screen.getByText(/Santa Monica, California/)).toBeInTheDocument()
  })

  it('has proper link hover states', () => {
    render(<Footer />)
    const phoneLink = screen.getByRole('link', { name: '(123) 456-7890' })
    const emailLink = screen.getByRole('link', { name: 'info@drmayareynolds.com' })
    
    expect(phoneLink).toHaveClass('hover:text-white', 'transition-colors')
    expect(emailLink).toHaveClass('hover:text-white', 'transition-colors')
  })
})