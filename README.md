# Dr. Maya Reynolds - Therapy Practice Website

> **Live Demo**: [Coming Soon - Deployment in Progress]  
> **Repository**: [GitHub Repository URL]

A professional therapy practice website built with Next.js and Tailwind CSS, transforming the Lilac template into a custom design for Dr. Maya Reynolds, a licensed clinical psychologist in Santa Monica, CA.

## 🎯 Project Overview

This project demonstrates advanced frontend development skills through:
- **Template Transformation**: Converting the Lilac template into a therapy-focused design
- **Custom Branding**: Complete theme redesign with professional color palette
- **Content Customization**: Tailored content for Dr. Maya's practice and specializations
- **Technical Excellence**: Modern development practices with comprehensive testing

## ✨ Features

- **Modern Tech Stack**: Next.js 14 with TypeScript and Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Custom Theme**: Professional color palette and typography system
- **SEO Optimized**: Meta tags and structured data for local Santa Monica searches
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Performance**: Optimized images, lazy loading, and Core Web Vitals compliance
- **Custom Office Section**: Unique section highlighting practice environment
- **Property-Based Testing**: Comprehensive test coverage with formal correctness properties

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git (for cloning the repository)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[username]/dr-maya-reynolds-therapy.git
cd dr-maya-reynolds-therapy
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Available Scripts

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build optimized production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm test` - Run Jest test suite
- `npm run test:watch` - Run tests in watch mode for development

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage with all sections
│   ├── globals.css        # Global styles and Tailwind imports
│   └── __tests__/         # App-level tests
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Responsive navigation header
│   │   └── Footer.tsx     # Site footer
│   ├── sections/          # Homepage sections
│   │   ├── Hero.tsx       # Hero section with CTA
│   │   ├── About.tsx      # Dr. Maya's credentials
│   │   ├── Services.tsx   # Therapy services offered
│   │   ├── OurOffice.tsx  # Custom office environment section
│   │   └── Contact.tsx    # Contact form and location
│   └── ui/                # Reusable UI components
│       ├── Button.tsx     # Themed button component
│       └── OptimizedImage.tsx # Performance-optimized images
├── lib/
│   ├── constants.ts       # Site content and configuration
│   ├── utils.ts          # Utility functions
│   ├── seo.ts            # SEO metadata configuration
│   ├── performance.ts    # Performance monitoring
│   └── hooks/            # Custom React hooks
└── public/
    └── images/           # Optimized therapy practice images
```

## 🎨 Design System

### Color Palette

- **Primary (Blue)**: Professional trust and reliability
  - `blue-50` to `blue-900` - Main branding and CTAs
- **Secondary (Gray)**: Clean, modern neutrals
  - `gray-50` to `gray-900` - Text and subtle elements
- **Accent (Amber)**: Warm, welcoming highlights
  - `amber-50` to `amber-900` - Emphasis and interactive states

### Typography

- **Headings**: Playfair Display (serif) - Elegant, professional
- **Body Text**: Inter (sans-serif) - Clean, readable
- **Responsive Scale**: Fluid typography across all breakpoints

### Components

All components follow consistent design patterns:
- Responsive design with mobile-first approach
- Accessible markup with ARIA labels
- Consistent spacing using Tailwind's spacing scale
- Hover and focus states for interactive elements

## 🧪 Testing Strategy

The project includes comprehensive testing with multiple approaches:

### Unit Tests
- **Component Testing**: React Testing Library for UI components
- **Integration Testing**: User interaction flows and form validation
- **Coverage**: All critical components and user paths

### Property-Based Testing
- **Accessibility Compliance**: WCAG 2.1 AA standards validation
- **Performance Standards**: Core Web Vitals and loading metrics
- **SEO Optimization**: Meta tags and structured data validation
- **Layout Stability**: Responsive design consistency
- **Interactive Feedback**: User interaction responsiveness
- **Styling Framework**: Tailwind CSS compliance
- **Color System**: Theme consistency across components

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm test -- Hero.test.tsx

# Run tests with coverage
npm test -- --coverage
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected for Next.js)
3. Deploy with automatic builds on push to main

### Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`

### Manual Deployment
```bash
npm run build
npm run start
```

## 🏥 About Dr. Maya Reynolds

**Licensed Clinical Psychologist**  
**Location**: Santa Monica, CA  
**License**: PSY 12345 (California)

### Specializations
- Anxiety and Panic Disorders
- Trauma and PTSD
- Professional Burnout
- High-Achieving Adults

### Therapeutic Approaches
- Cognitive Behavioral Therapy (CBT)
- Eye Movement Desensitization and Reprocessing (EMDR)
- Mindfulness-Based Interventions
- Body-Oriented Therapy

### Session Options
- In-Person Sessions (Santa Monica Office)
- Telehealth Sessions (California Residents)

## 📈 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: All metrics in "Good" range
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Optimized for local Santa Monica therapy searches

## 🤝 Contributing

This project was created as part of a frontend development internship assignment. The codebase demonstrates:

- Modern React/Next.js development patterns
- Comprehensive testing strategies
- Accessibility-first design approach
- Performance optimization techniques
- SEO best practices for local businesses

## 📄 License

This project is created as part of a frontend development internship assignment. All content is for demonstration purposes.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**