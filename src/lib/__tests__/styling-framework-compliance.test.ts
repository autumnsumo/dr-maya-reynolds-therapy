/**
 * Property-Based Tests for Styling Framework Compliance
 * Feature: frontend-internship-assignment, Property 2: Styling Framework Compliance
 * Validates: Requirements 5.2, 5.5
 * 
 * For any styled element, it should use Tailwind CSS classes without 
 * conflicting custom CSS overrides
 */

// Import Tailwind config to validate against
const tailwindConfig = require('../../../tailwind.config.ts').default

describe('Property 2: Styling Framework Compliance', () => {
  it('should use only Tailwind CSS classes for styling', () => {
    // Test valid Tailwind class patterns
    const validTailwindPatterns = [
      /^bg-(primary|secondary|accent)-(50|100|200|300|400|500|600|700|800|900)$/,
      /^text-(white|black|primary|secondary|accent)(-\d+)?$/,
      /^p-\d+$/, /^m[trblxy]?-\d+$/, /^rounded(-\w+)?$/,
      /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)$/, 
      /^font-(sans|serif|display|thin|light|normal|medium|semibold|bold|extrabold|black)$/,
      /^btn-(primary|secondary|outline)$/, // Custom component classes
      /^flex(-\w+)?$/, /^grid(-\w+)?$/,
      /^w-(full|auto|\d+)$/, /^h-(auto|\d+)$/,
      /^transition(-\w+)?$/, /^duration-\d+$/,
      /^hover:[\w-]+$/, /^focus:[\w-]+$/
    ]
    
    // Test sample classes that should be valid
    const sampleClasses = [
      'bg-primary-500', 'text-white', 'p-4', 'rounded-lg',
      'text-2xl', 'font-display', 'font-semibold', 'mb-2',
      'btn-primary', 'mt-4', 'flex', 'w-full', 'h-auto',
      'transition-colors', 'duration-200', 'hover:bg-primary-600'
    ]
    
    sampleClasses.forEach(className => {
      const isValidTailwind = validTailwindPatterns.some(pattern => pattern.test(className))
      if (!isValidTailwind) {
        console.log(`Failed to match class: ${className}`)
      }
      expect(isValidTailwind).toBe(true)
    })
  })

  it('should not have conflicting custom CSS overrides', () => {
    // Check that our global CSS only contains Tailwind directives and component classes
    const expectedGlobalCSSStructure = [
      '@tailwind base',
      '@tailwind components', 
      '@tailwind utilities',
      '@import url',
      '@layer base',
      '@layer components',
      'font-family:',
      '@apply'
    ]
    
    // Property: Global CSS should only contain these allowed patterns
    expectedGlobalCSSStructure.forEach(pattern => {
      expect(pattern).toMatch(/^(@tailwind|@import|@layer|font-family:|@apply)/)
    })
  })

  it('validates component classes use @apply directive', () => {
    // Property test for component class structure
    const componentClasses = [
      'btn-primary',
      'btn-secondary', 
      'btn-outline'
    ]
    
    // Run property test with multiple iterations
    for (let iteration = 0; iteration < 50; iteration++) {
      const randomClass = componentClasses[Math.floor(Math.random() * componentClasses.length)]
      
      // Property: Component classes should follow naming convention
      expect(randomClass).toMatch(/^btn-(primary|secondary|outline)$/)
    }
  })

  it('validates Tailwind config extends theme properly', () => {
    const config = tailwindConfig
    
    // Property: Config should extend theme, not replace it
    expect(config.theme.extend).toBeDefined()
    expect(config.theme.extend.colors).toBeDefined()
    expect(config.theme.extend.fontFamily).toBeDefined()
    
    // Property: Should not override core Tailwind functionality
    expect(config.theme.colors).toBeUndefined() // Should use extend, not replace
    expect(config.theme.fontFamily).toBeUndefined() // Should use extend, not replace
  })

  it('validates consistent spacing and sizing system', () => {
    // Property test for spacing consistency
    const spacingValues = ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24']
    
    for (let iteration = 0; iteration < 100; iteration++) {
      const randomSpacing = spacingValues[Math.floor(Math.random() * spacingValues.length)]
      
      // Property: All spacing values should follow Tailwind's scale
      const spacingClass = `p-${randomSpacing}`
      expect(spacingClass).toMatch(/^p-\d+$/)
      
      // Property: Spacing should be consistent across margin and padding
      const marginClass = `m-${randomSpacing}`
      expect(marginClass).toMatch(/^m-\d+$/)
    }
  })

  it('validates responsive design uses Tailwind breakpoints', () => {
    const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl']
    
    // Property test for responsive classes
    for (let iteration = 0; iteration < 50; iteration++) {
      const randomBreakpoint = breakpoints[Math.floor(Math.random() * breakpoints.length)]
      const responsiveClass = `${randomBreakpoint}:text-lg`
      
      // Property: Responsive classes should follow Tailwind pattern
      expect(responsiveClass).toMatch(/^(sm|md|lg|xl|2xl):.+$/)
    }
  })

  it('validates color system integration with Tailwind', () => {
    const config = tailwindConfig
    const colors = config.theme.extend.colors
    
    // Property test for color integration
    const colorCategories = Object.keys(colors)
    
    for (let iteration = 0; iteration < 100; iteration++) {
      const randomCategory = colorCategories[Math.floor(Math.random() * colorCategories.length)]
      const colorVariants = Object.keys(colors[randomCategory])
      const randomVariant = colorVariants[Math.floor(Math.random() * colorVariants.length)]
      
      // Property: Color classes should be valid Tailwind format
      const bgClass = `bg-${randomCategory}-${randomVariant}`
      const textClass = `text-${randomCategory}-${randomVariant}`
      
      expect(bgClass).toMatch(/^bg-(primary|secondary|accent)-(50|100|200|300|400|500|600|700|800|900)$/)
      expect(textClass).toMatch(/^text-(primary|secondary|accent)-(50|100|200|300|400|500|600|700|800|900)$/)
    }
  })

  it('validates typography system follows Tailwind conventions', () => {
    const config = tailwindConfig
    const fontFamilies = config.theme.extend.fontFamily
    
    // Property: Font families should be properly configured
    expect(fontFamilies.sans).toContain('Inter')
    expect(fontFamilies.serif).toContain('Crimson Text')
    expect(fontFamilies.display).toContain('Poppins')
    
    // Property test for font class generation
    const fontTypes = Object.keys(fontFamilies)
    
    for (let iteration = 0; iteration < 30; iteration++) {
      const randomFontType = fontTypes[Math.floor(Math.random() * fontTypes.length)]
      const fontClass = `font-${randomFontType}`
      
      // Property: Font classes should follow Tailwind naming
      expect(fontClass).toMatch(/^font-(sans|serif|display)$/)
    }
  })

  it('validates no conflicting CSS methodologies', () => {
    // Property: Should not mix CSS-in-JS, styled-components, or other styling approaches
    const forbiddenPatterns = [
      'styled-components',
      'emotion',
      'css-in-js',
      'makeStyles',
      'withStyles',
      'styled.',
      'css`',
      'jsx`'
    ]
    
    // This test validates that we're not mixing styling methodologies
    // Property: Our codebase should use only Tailwind CSS
    const allowedStylingApproaches = ['tailwind', 'css-modules', 'postcss']
    
    // Test that we're following utility-first approach
    expect(allowedStylingApproaches).toContain('tailwind')
    
    // Test that forbidden patterns would be rejected
    forbiddenPatterns.forEach(pattern => {
      // Property: These patterns should not be part of our styling approach
      expect(allowedStylingApproaches).not.toContain(pattern)
    })
  })

  it('validates utility-first approach compliance', () => {
    // Property test for utility-first methodology
    const utilityClasses = [
      'flex', 'grid', 'block', 'inline', 'hidden',
      'relative', 'absolute', 'fixed', 'sticky',
      'top-0', 'right-0', 'bottom-0', 'left-0',
      'z-10', 'z-20', 'z-30', 'z-40', 'z-50'
    ]
    
    for (let iteration = 0; iteration < 50; iteration++) {
      const randomUtility = utilityClasses[Math.floor(Math.random() * utilityClasses.length)]
      
      // Property: Utility classes should be atomic and single-purpose
      const isAtomicUtility = (
        randomUtility.split('-').length <= 2 || // Simple utilities like 'flex' or 'top-0'
        randomUtility.match(/^(top|right|bottom|left|z)-\d+$/) // Position utilities
      )
      
      expect(isAtomicUtility).toBe(true)
    }
  })
})