import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Soft lilac/purple primary - the signature Lilac template color
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        // Warm neutral grays for balance and readability
        secondary: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        // Warm amber accent for gentle highlights
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'], // More elegant serif for Lilac template
        display: ['Playfair Display', 'system-ui', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'organic': '2rem 3rem 2rem 3rem',
        'curved': '1.5rem 2rem 1.5rem 2rem',
        'gentle': '1rem 1.5rem 1rem 1.5rem',
      },
      boxShadow: {
        'gentle': '0 4px 20px rgba(168, 85, 247, 0.1)',
        'sanctuary': '0 8px 40px rgba(168, 85, 247, 0.15)',
        'floating': '0 12px 60px rgba(168, 85, 247, 0.2)',
      },
      backgroundImage: {
        'sanctuary': 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #e9d5ff 100%)',
        'flowing': 'linear-gradient(45deg, #fafaf9 0%, #f5f5f4 100%)',
        'organic': 'radial-gradient(ellipse at center, #faf5ff 0%, #f3e8ff 70%)',
      },
    },
  },
  plugins: [],
}
export default config