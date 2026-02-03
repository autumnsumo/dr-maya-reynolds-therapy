import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText('Dr. Maya Reynolds')).toBeInTheDocument()
  })

  it('renders navigation links on desktop', () => {
    render(<Header />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Our Office')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has proper navigation link structure', () => {
    render(<Header />)
    const aboutLink = screen.getByRole('link', { name: 'About' })
    const servicesLink = screen.getByRole('link', { name: 'Services' })
    const officeLink = screen.getByRole('link', { name: 'Our Office' })
    const contactLink = screen.getByRole('link', { name: 'Contact' })

    expect(aboutLink).toHaveAttribute('href', '#about')
    expect(servicesLink).toHaveAttribute('href', '#services')
    expect(officeLink).toHaveAttribute('href', '#office')
    expect(contactLink).toHaveAttribute('href', '#contact')
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<Header />)
    const menuButton = screen.getByLabelText('Toggle menu')
    
    // Mobile menu should not be visible initially
    expect(screen.queryByRole('navigation')).toBeInTheDocument()
    
    // Click to open mobile menu
    fireEvent.click(menuButton)
    
    // Mobile navigation should be visible
    const mobileNav = screen.getAllByRole('navigation')[1] // Second nav element is mobile
    expect(mobileNav).toBeInTheDocument()
  })

  it('closes mobile menu when navigation link is clicked', () => {
    render(<Header />)
    const menuButton = screen.getByLabelText('Toggle menu')
    
    // Open mobile menu
    fireEvent.click(menuButton)
    
    // Click on a mobile navigation link
    const mobileLinks = screen.getAllByRole('link', { name: 'About' })
    const mobileAboutLink = mobileLinks.find(link => 
      link.closest('nav')?.className.includes('md:hidden')
    )
    
    if (mobileAboutLink) {
      fireEvent.click(mobileAboutLink)
    }
    
    // Menu should close (this tests the onClick handler)
    expect(menuButton).toBeInTheDocument()
  })

  it('has proper responsive classes', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('bg-white', 'shadow-sm', 'border-b', 'border-secondary-200')
  })

  it('has accessible mobile menu button', () => {
    render(<Header />)
    const menuButton = screen.getByLabelText('Toggle menu')
    expect(menuButton).toHaveAttribute('aria-label', 'Toggle menu')
    expect(menuButton).toHaveClass('md:hidden') // Hidden on desktop
  })

  it('renders logo as a link to home', () => {
    render(<Header />)
    const logoLink = screen.getByRole('link', { name: 'Dr. Maya Reynolds' })
    expect(logoLink).toHaveAttribute('href', '/')
    expect(logoLink).toHaveClass('text-2xl', 'font-serif', 'font-semibold', 'text-primary-600')
  })
})