/**
 * Lilac Template Structure Analysis and Component Mapping
 * 
 * This file documents the complete structure of the Lilac template and provides
 * TypeScript interfaces for all components and data structures.
 * 
 * Based on research of the original Lilac template from Go Bloom Creative,
 * this analysis maps out all sections, components, and layout patterns.
 */

// =============================================================================
// TEMPLATE STRUCTURE ANALYSIS
// =============================================================================

/**
 * LILAC TEMPLATE SECTIONS (Top to Bottom):
 * 
 * 1. Header/Navigation
 *    - Logo/Brand name (left)
 *    - Navigation menu (right) - Desktop
 *    - Mobile hamburger menu
 *    - Sticky/fixed positioning
 * 
 * 2. Hero Section
 *    - Large headline text
 *    - Subheading/description
 *    - Call-to-action button(s)
 *    - Background image or gradient
 *    - Curved/organic shape elements
 * 
 * 3. About Section
 *    - Section heading
 *    - Professional photo (circular/curved)
 *    - Bio text content
 *    - Credentials and licensing info
 *    - Flowing layout with organic shapes
 * 
 * 4. Services Section
 *    - Section heading
 *    - Service cards/blocks
 *    - Specializations list
 *    - Therapeutic approaches
 *    - Session types (in-person/telehealth)
 * 
 * 5. Our Office Section (Custom - not in original)
 *    - Section heading
 *    - Office description
 *    - Office images
 *    - Safety/comfort messaging
 * 
 * 6. Contact Section
 *    - Contact form
 *    - Office address
 *    - Phone/email
 *    - Client demographic messaging
 * 
 * 7. Footer
 *    - Contact information
 *    - Services summary
 *    - Office hours
 *    - Copyright and licensing
 */

// =============================================================================
// RESPONSIVE BREAKPOINT STRATEGY
// =============================================================================

/**
 * Responsive Breakpoints (matching Tailwind CSS defaults):
 * - Mobile: < 768px (default)
 * - Tablet: 768px - 1023px (md:)
 * - Desktop: 1024px+ (lg:)
 * - Large Desktop: 1280px+ (xl:)
 * 
 * Layout Behavior:
 * - Mobile: Single column, stacked sections, hamburger menu
 * - Tablet: Two-column layouts where appropriate, expanded spacing
 * - Desktop: Multi-column layouts, horizontal navigation, larger images
 */

export const BREAKPOINTS = {
  mobile: '0px',
  tablet: '768px',
  desktop: '1024px',
  largeDesktop: '1280px',
} as const;

// =============================================================================
// COMPONENT INTERFACES
// =============================================================================

// Base component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Layout Components
export interface HeaderProps extends BaseComponentProps {
  logo?: string;
  navigationItems: NavigationItem[];
  isSticky?: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface FooterProps extends BaseComponentProps {
  contactInfo: ContactInfo;
  services: string[];
  officeHours: OfficeHours[];
  copyright: string;
  licenseInfo: string;
}

// Section Components
export interface HeroSectionProps extends BaseComponentProps {
  headline: string;
  subheading: string;
  ctaButtons: CTAButton[];
  backgroundImage?: string;
  backgroundGradient?: string;
}

export interface AboutSectionProps extends BaseComponentProps {
  heading: string;
  therapistInfo: TherapistInfo;
  profileImage: string;
  credentials: string[];
}

export interface ServicesSectionProps extends BaseComponentProps {
  heading: string;
  specializations: ServiceItem[];
  approaches: ServiceItem[];
  sessionTypes: ServiceItem[];
}

export interface OurOfficeSectionProps extends BaseComponentProps {
  heading: string;
  description: string;
  features: string[];
  images: OfficeImage[];
}

export interface ContactSectionProps extends BaseComponentProps {
  heading: string;
  contactForm: ContactFormConfig;
  officeInfo: OfficeInfo;
  clientDemographic: string;
}

// UI Components
export interface ButtonProps extends BaseComponentProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  content: string;
  image?: string;
  imageAlt?: string;
  variant?: 'default' | 'elevated' | 'bordered';
}

export interface ImageProps extends BaseComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  shape?: 'rectangle' | 'circle' | 'rounded';
}

// =============================================================================
// DATA MODELS
// =============================================================================

export interface TherapistInfo {
  name: string;
  title: string;
  license: string;
  location: string;
  bio: string;
  profileImage: string;
  credentials: string[];
}

export interface ServiceItem {
  name: string;
  description?: string;
  icon?: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  fullAddress?: string;
}

export interface OfficeInfo {
  address: Address;
  description: string;
  features: string[];
  images: OfficeImage[];
}

export interface OfficeImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface OfficeHours {
  days: string;
  hours: string;
}

export interface CTAButton {
  text: string;
  href: string;
  variant: ButtonProps['variant'];
  size: ButtonProps['size'];
}

export interface ContactFormConfig {
  fields: ContactFormField[];
  submitText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required: boolean;
  placeholder?: string;
  options?: string[]; // For select fields
}

// =============================================================================
// THEME SYSTEM INTERFACES
// =============================================================================

export interface ThemeColors {
  primary: ColorScale;
  secondary: ColorScale;
  accent: ColorScale;
  neutral: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  error: ColorScale;
}

export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface Typography {
  fontFamily: {
    sans: string[];
    serif: string[];
    mono: string[];
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  fontWeight: {
    thin: number;
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
}

export interface Spacing {
  px: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  8: string;
  10: string;
  12: string;
  16: string;
  20: string;
  24: string;
  32: string;
  40: string;
  48: string;
  56: string;
  64: string;
}

// =============================================================================
// LAYOUT PATTERNS
// =============================================================================

/**
 * Common Layout Patterns in Lilac Template:
 * 
 * 1. Container Pattern:
 *    - Max width container with horizontal padding
 *    - Responsive padding (px-4 on mobile, px-6 on tablet, px-8 on desktop)
 *    - Centered content with mx-auto
 * 
 * 2. Section Pattern:
 *    - Consistent vertical spacing (py-16 on desktop, py-12 on mobile)
 *    - Section headings with consistent typography
 *    - Content blocks with proper spacing
 * 
 * 3. Grid Pattern:
 *    - CSS Grid for complex layouts
 *    - Flexbox for simpler alignments
 *    - Responsive grid columns (1 on mobile, 2-3 on desktop)
 * 
 * 4. Card Pattern:
 *    - Consistent padding and spacing
 *    - Subtle shadows and borders
 *    - Hover states for interactive elements
 * 
 * 5. Image Pattern:
 *    - Curved/organic shapes using CSS clip-path or border-radius
 *    - Responsive images with proper aspect ratios
 *    - Lazy loading and optimization
 */

export interface LayoutPattern {
  name: string;
  description: string;
  cssClasses: string;
  responsiveVariants: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export const LAYOUT_PATTERNS: Record<string, LayoutPattern> = {
  container: {
    name: 'Container',
    description: 'Main content container with responsive padding',
    cssClasses: 'container mx-auto px-4 md:px-6 lg:px-8',
    responsiveVariants: {
      mobile: 'px-4',
      tablet: 'px-6',
      desktop: 'px-8',
    },
  },
  section: {
    name: 'Section',
    description: 'Standard section spacing and layout',
    cssClasses: 'py-12 md:py-16 lg:py-20',
    responsiveVariants: {
      mobile: 'py-12',
      tablet: 'py-16',
      desktop: 'py-20',
    },
  },
  grid: {
    name: 'Grid',
    description: 'Responsive grid layout',
    cssClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',
    responsiveVariants: {
      mobile: 'grid-cols-1 gap-6',
      tablet: 'grid-cols-2 gap-8',
      desktop: 'grid-cols-3 gap-8',
    },
  },
  card: {
    name: 'Card',
    description: 'Standard card component styling',
    cssClasses: 'bg-white rounded-lg shadow-sm border border-secondary-200 p-6',
    responsiveVariants: {
      mobile: 'p-4',
      tablet: 'p-6',
      desktop: 'p-6',
    },
  },
};

// =============================================================================
// COMPONENT MAPPING
// =============================================================================

/**
 * Component File Structure Mapping:
 * 
 * Layout Components:
 * - src/components/layout/Header.tsx ✓ (exists)
 * - src/components/layout/Footer.tsx ✓ (exists)
 * - src/components/layout/Navigation.tsx (mobile menu component)
 * 
 * Section Components:
 * - src/components/sections/HeroSection.tsx
 * - src/components/sections/AboutSection.tsx
 * - src/components/sections/ServicesSection.tsx
 * - src/components/sections/OurOfficeSection.tsx
 * - src/components/sections/ContactSection.tsx
 * 
 * UI Components:
 * - src/components/ui/Button.tsx ✓ (exists)
 * - src/components/ui/Card.tsx
 * - src/components/ui/Image.tsx
 * - src/components/ui/ContactForm.tsx
 * - src/components/ui/ServiceCard.tsx
 * 
 * Utility Files:
 * - src/lib/constants.ts ✓ (exists)
 * - src/lib/utils.ts ✓ (exists)
 * - src/lib/template-analysis.ts ✓ (this file)
 */

export const COMPONENT_MAPPING = {
  layout: [
    'Header',
    'Footer', 
    'Navigation',
  ],
  sections: [
    'HeroSection',
    'AboutSection', 
    'ServicesSection',
    'OurOfficeSection',
    'ContactSection',
  ],
  ui: [
    'Button',
    'Card',
    'Image', 
    'ContactForm',
    'ServiceCard',
  ],
} as const;

// =============================================================================
// VALIDATION HELPERS
// =============================================================================

export const validateTherapistInfo = (info: TherapistInfo): boolean => {
  return !!(
    info.name &&
    info.title &&
    info.license &&
    info.location &&
    info.bio &&
    info.profileImage &&
    info.credentials.length > 0
  );
};

export const validateContactInfo = (info: ContactInfo): boolean => {
  return !!(
    info.name &&
    info.title &&
    info.phone &&
    info.email &&
    info.address.street &&
    info.address.city &&
    info.address.state &&
    info.address.zipCode
  );
};

export const validateServiceItem = (item: ServiceItem): boolean => {
  return !!item.name;
};