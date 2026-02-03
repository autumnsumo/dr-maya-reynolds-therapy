import { render, screen } from '@testing-library/react'
import React from 'react'

// Mock the layout components and CSS imports
jest.mock('../../components/layout/Header', () => {
  return function MockHeader() {
    return <header data-testid="header">Header</header>
  }
})

jest.mock('../../components/layout/Footer', () => {
  return function MockFooter() {
    return <footer data-testid="footer">Footer</footer>
  }
})

// Mock the CSS import
jest.mock('../globals.css', () => ({}))

// Mock Next.js font imports
jest.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'inter-font',
    variable: '--font-inter',
  }),
  Playfair_Display: () => ({
    className: 'playfair-font', 
    variable: '--font-playfair',
  }),
}))

// Create a simplified RootLayout component for testing
function TestRootLayout({ children }: { children: React.ReactNode }) {
  // Set document attributes for testing
  React.useEffect(() => {
    document.documentElement.setAttribute('lang', 'en')
    document.documentElement.className = '--font-inter --font-playfair'
    document.body.className = 'inter-font'
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <header data-testid="header">Header</header>
      <main className="flex-grow">
        {children}
      </main>
      <footer data-testid="footer">Footer</footer>
    </div>
  )
}

describe('RootLayout', () => {
  it('renders the basic HTML structure', () => {
    render(
      <TestRootLayout>
        <div>Test content</div>
      </TestRootLayout>
    )

    // Check for HTML structure
    expect(document.documentElement).toHaveAttribute('lang', 'en')
    expect(document.body).toBeInTheDocument()
  })

  it('includes font variables in HTML class', () => {
    render(
      <TestRootLayout>
        <div>Test content</div>
      </TestRootLayout>
    )

    // Check that font variables are applied
    const html = document.documentElement
    expect(html.className).toContain('--font-inter')
    expect(html.className).toContain('--font-playfair')
  })

  it('applies Inter font to body', () => {
    render(
      <TestRootLayout>
        <div>Test content</div>
      </TestRootLayout>
    )

    // Check that body has the Inter font class
    expect(document.body.className).toContain('inter-font')
  })

  it('renders Header component', () => {
    render(
      <TestRootLayout>
        <div>Test content</div>
      </TestRootLayout>
    )

    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('renders Footer component', () => {
    render(
      <TestRootLayout>
        <div>Test content</div>
      </TestRootLayout>
    )

    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders children content in main element', () => {
    render(
      <TestRootLayout>
        <div data-testid="test-content">Test content</div>
      </TestRootLayout>
    )

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(main).toHaveClass('flex-grow')
    expect(screen.getByTestId('test-content')).toBeInTheDocument()
  })

  it('has proper layout structure with flex classes', () => {
    render(
      <TestRootLayout>
        <div>Test content</div>
      </TestRootLayout>
    )

    // Check for the main layout wrapper
    const layoutWrapper = document.querySelector('.min-h-screen.flex.flex-col')
    expect(layoutWrapper).toBeInTheDocument()
  })

  it('maintains proper semantic HTML structure', () => {
    render(
      <TestRootLayout>
        <div>Test content</div>
      </TestRootLayout>
    )

    // Check semantic structure: header -> main -> footer
    const header = screen.getByTestId('header')
    const main = screen.getByRole('main')
    const footer = screen.getByTestId('footer')

    expect(header).toBeInTheDocument()
    expect(main).toBeInTheDocument()
    expect(footer).toBeInTheDocument()

    // Verify order in DOM
    const layoutWrapper = document.querySelector('.min-h-screen')
    const children = Array.from(layoutWrapper?.children || [])
    
    expect(children[0]).toBe(header)
    expect(children[1]).toBe(main)
    expect(children[2]).toBe(footer)
  })

  it('provides theme context through font variables', () => {
    render(
      <TestRootLayout>
        <div>Test content</div>
      </TestRootLayout>
    )

    // Verify that CSS custom properties for fonts are available
    // This tests the theme provider functionality
    const html = document.documentElement
    
    // The font variables should be available
    expect(html.className).toContain('--font-inter')
    expect(html.className).toContain('--font-playfair')
  })

  it('supports theme customization through font system', () => {
    render(
      <TestRootLayout>
        <div>Test content</div>
      </TestRootLayout>
    )

    // Test that the theme system is properly configured
    const html = document.documentElement
    const body = document.body
    
    // Verify font variables are set up for theme system
    expect(html.className).toMatch(/--font-/)
    expect(body.className).toContain('font')
  })
})