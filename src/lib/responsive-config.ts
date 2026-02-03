/**
 * Responsive Design Configuration
 * 
 * This file defines the responsive breakpoint strategy matching the original
 * Lilac template behavior and Tailwind CSS conventions.
 */

// =============================================================================
// BREAKPOINT DEFINITIONS
// =============================================================================

export const BREAKPOINTS = {
  // Mobile-first approach (default)
  mobile: {
    min: 0,
    max: 767,
    label: 'Mobile',
    tailwindPrefix: '', // Default (no prefix)
  },
  // Tablet
  tablet: {
    min: 768,
    max: 1023,
    label: 'Tablet',
    tailwindPrefix: 'md:', // Medium screens
  },
  // Desktop
  desktop: {
    min: 1024,
    max: 1279,
    label: 'Desktop', 
    tailwindPrefix: 'lg:', // Large screens
  },
  // Large Desktop
  largeDesktop: {
    min: 1280,
    max: Infinity,
    label: 'Large Desktop',
    tailwindPrefix: 'xl:', // Extra large screens
  },
} as const;

// =============================================================================
// RESPONSIVE LAYOUT PATTERNS
// =============================================================================

/**
 * Layout behavior across breakpoints for each major component
 */
export const RESPONSIVE_LAYOUTS = {
  // Header/Navigation
  header: {
    mobile: {
      layout: 'flex justify-between items-center py-4',
      logo: 'text-xl font-serif font-semibold',
      navigation: 'hidden', // Hidden on mobile
      mobileMenu: 'block md:hidden', // Show hamburger menu
    },
    tablet: {
      layout: 'flex justify-between items-center py-4',
      logo: 'text-2xl font-serif font-semibold',
      navigation: 'flex space-x-6', // Show navigation
      mobileMenu: 'hidden', // Hide hamburger menu
    },
    desktop: {
      layout: 'flex justify-between items-center py-4',
      logo: 'text-2xl font-serif font-semibold',
      navigation: 'flex space-x-8', // Larger spacing
      mobileMenu: 'hidden',
    },
  },

  // Hero Section
  hero: {
    mobile: {
      container: 'px-4 py-12 text-center',
      headline: 'text-3xl font-bold mb-4',
      subheading: 'text-lg mb-6',
      buttons: 'flex flex-col space-y-4',
    },
    tablet: {
      container: 'px-6 py-16 text-center',
      headline: 'text-4xl font-bold mb-6',
      subheading: 'text-xl mb-8',
      buttons: 'flex flex-row space-x-4 justify-center',
    },
    desktop: {
      container: 'px-8 py-20 text-center',
      headline: 'text-5xl font-bold mb-8',
      subheading: 'text-2xl mb-10',
      buttons: 'flex flex-row space-x-6 justify-center',
    },
  },

  // About Section
  about: {
    mobile: {
      container: 'px-4 py-12',
      layout: 'flex flex-col items-center text-center space-y-6',
      image: 'w-32 h-32 rounded-full mb-6',
      content: 'max-w-none',
    },
    tablet: {
      container: 'px-6 py-16',
      layout: 'grid grid-cols-1 md:grid-cols-2 gap-8 items-center',
      image: 'w-48 h-48 rounded-full',
      content: 'max-w-lg',
    },
    desktop: {
      container: 'px-8 py-20',
      layout: 'grid grid-cols-2 gap-12 items-center',
      image: 'w-64 h-64 rounded-full',
      content: 'max-w-xl',
    },
  },

  // Services Section
  services: {
    mobile: {
      container: 'px-4 py-12',
      grid: 'grid grid-cols-1 gap-6',
      card: 'p-4 text-center',
    },
    tablet: {
      container: 'px-6 py-16',
      grid: 'grid grid-cols-2 gap-8',
      card: 'p-6 text-center',
    },
    desktop: {
      container: 'px-8 py-20',
      grid: 'grid grid-cols-3 gap-8',
      card: 'p-6 text-center',
    },
  },

  // Our Office Section
  office: {
    mobile: {
      container: 'px-4 py-12',
      layout: 'flex flex-col space-y-6',
      images: 'grid grid-cols-1 gap-4',
    },
    tablet: {
      container: 'px-6 py-16',
      layout: 'grid grid-cols-1 md:grid-cols-2 gap-8 items-center',
      images: 'grid grid-cols-2 gap-4',
    },
    desktop: {
      container: 'px-8 py-20',
      layout: 'grid grid-cols-2 gap-12 items-center',
      images: 'grid grid-cols-2 gap-6',
    },
  },

  // Contact Section
  contact: {
    mobile: {
      container: 'px-4 py-12',
      layout: 'flex flex-col space-y-8',
      form: 'w-full',
      info: 'w-full text-center',
    },
    tablet: {
      container: 'px-6 py-16',
      layout: 'grid grid-cols-1 md:grid-cols-2 gap-8',
      form: 'w-full',
      info: 'w-full',
    },
    desktop: {
      container: 'px-8 py-20',
      layout: 'grid grid-cols-2 gap-12',
      form: 'w-full',
      info: 'w-full',
    },
  },

  // Footer
  footer: {
    mobile: {
      container: 'px-4 py-8',
      grid: 'grid grid-cols-1 gap-8 text-center',
      copyright: 'text-center text-sm',
    },
    tablet: {
      container: 'px-6 py-8',
      grid: 'grid grid-cols-2 md:grid-cols-3 gap-8',
      copyright: 'text-center text-sm',
    },
    desktop: {
      container: 'px-8 py-8',
      grid: 'grid grid-cols-3 gap-8',
      copyright: 'text-center text-sm',
    },
  },
} as const;

// =============================================================================
// RESPONSIVE UTILITIES
// =============================================================================

/**
 * Generate responsive class strings for Tailwind CSS
 */
export const generateResponsiveClasses = (
  mobileClass: string,
  tabletClass?: string,
  desktopClass?: string,
  largeDesktopClass?: string
): string => {
  const classes = [mobileClass];
  
  if (tabletClass) {
    classes.push(`md:${tabletClass}`);
  }
  
  if (desktopClass) {
    classes.push(`lg:${desktopClass}`);
  }
  
  if (largeDesktopClass) {
    classes.push(`xl:${largeDesktopClass}`);
  }
  
  return classes.join(' ');
};

/**
 * Common responsive patterns as utility functions
 */
export const RESPONSIVE_UTILS = {
  // Container with responsive padding
  container: () => generateResponsiveClasses(
    'container mx-auto px-4',
    'px-6',
    'px-8'
  ),

  // Section spacing
  sectionSpacing: () => generateResponsiveClasses(
    'py-12',
    'py-16', 
    'py-20'
  ),

  // Grid layouts
  gridCols: (mobile: number, tablet?: number, desktop?: number) => {
    const mobileClass = `grid-cols-${mobile}`;
    const tabletClass = tablet ? `grid-cols-${tablet}` : undefined;
    const desktopClass = desktop ? `grid-cols-${desktop}` : undefined;
    
    return generateResponsiveClasses(
      `grid ${mobileClass}`,
      tabletClass ? `grid-cols-${tablet}` : undefined,
      desktopClass ? `grid-cols-${desktop}` : undefined
    );
  },

  // Text sizes
  textSize: (mobile: string, tablet?: string, desktop?: string) => {
    return generateResponsiveClasses(
      `text-${mobile}`,
      tablet ? `text-${tablet}` : undefined,
      desktop ? `text-${desktop}` : undefined
    );
  },

  // Spacing
  spacing: (mobile: string, tablet?: string, desktop?: string) => {
    return generateResponsiveClasses(
      mobile,
      tablet,
      desktop
    );
  },
};

// =============================================================================
// BREAKPOINT DETECTION UTILITIES
// =============================================================================

/**
 * Client-side breakpoint detection (for use in React components)
 */
export const useBreakpoint = () => {
  // This would be implemented with a custom hook in a real application
  // For now, we'll provide the structure
  return {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
    currentBreakpoint: 'desktop' as keyof typeof BREAKPOINTS,
  };
};

/**
 * CSS media queries for each breakpoint
 */
export const MEDIA_QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.tablet.min - 1}px)`,
  tablet: `(min-width: ${BREAKPOINTS.tablet.min}px) and (max-width: ${BREAKPOINTS.desktop.min - 1}px)`,
  desktop: `(min-width: ${BREAKPOINTS.desktop.min}px) and (max-width: ${BREAKPOINTS.largeDesktop.min - 1}px)`,
  largeDesktop: `(min-width: ${BREAKPOINTS.largeDesktop.min}px)`,
  
  // Utility queries
  tabletAndUp: `(min-width: ${BREAKPOINTS.tablet.min}px)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktop.min}px)`,
  mobileOnly: `(max-width: ${BREAKPOINTS.tablet.min - 1}px)`,
} as const;

// =============================================================================
// COMPONENT-SPECIFIC RESPONSIVE CONFIGS
// =============================================================================

/**
 * Pre-configured responsive classes for common components
 */
export const COMPONENT_RESPONSIVE_CLASSES = {
  // Button sizes across breakpoints
  button: {
    small: generateResponsiveClasses('px-3 py-1.5 text-sm', 'px-4 py-2', 'px-4 py-2'),
    medium: generateResponsiveClasses('px-4 py-2 text-base', 'px-6 py-3', 'px-6 py-3'),
    large: generateResponsiveClasses('px-6 py-3 text-lg', 'px-8 py-4', 'px-8 py-4'),
  },

  // Card padding and spacing
  card: {
    padding: generateResponsiveClasses('p-4', 'p-6', 'p-6'),
    spacing: generateResponsiveClasses('space-y-4', 'space-y-6', 'space-y-6'),
  },

  // Image sizes
  image: {
    profileSmall: generateResponsiveClasses('w-24 h-24', 'w-32 h-32', 'w-40 h-40'),
    profileMedium: generateResponsiveClasses('w-32 h-32', 'w-48 h-48', 'w-64 h-64'),
    profileLarge: generateResponsiveClasses('w-48 h-48', 'w-64 h-64', 'w-80 h-80'),
  },

  // Typography
  typography: {
    headline: generateResponsiveClasses('text-3xl', 'text-4xl', 'text-5xl'),
    subheading: generateResponsiveClasses('text-lg', 'text-xl', 'text-2xl'),
    body: generateResponsiveClasses('text-base', 'text-lg', 'text-lg'),
    caption: generateResponsiveClasses('text-sm', 'text-sm', 'text-base'),
  },
} as const;