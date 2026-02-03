import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  loading?: boolean
  icon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, loading = false, icon, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group'
    
    const variants = {
      primary: 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-gentle hover:shadow-sanctuary',
      secondary: 'bg-gradient-to-r from-secondary-100 to-secondary-200 hover:from-secondary-200 hover:to-secondary-300 text-secondary-900 shadow-gentle hover:shadow-sanctuary',
      outline: 'border-2 border-primary-300 text-primary-700 hover:bg-primary-50 hover:border-primary-400 shadow-gentle hover:shadow-sanctuary'
    }
    
    const sizes = {
      sm: 'h-9 px-3 text-sm rounded-curved',
      md: 'h-10 px-4 py-2 rounded-curved',
      lg: 'h-11 px-8 text-lg rounded-curved'
    }

    return (
      <button
        className={cn(
          baseStyles, 
          variants[variant], 
          sizes[size], 
          'hover-lift',
          loading && 'cursor-wait',
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {/* Animated background shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        
        {/* Loading spinner */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Button content */}
        <span className={`flex items-center space-x-2 ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
          {icon && (
            <span className="transform group-hover:scale-110 transition-transform duration-300">
              {icon}
            </span>
          )}
          <span className="relative">
            {children}
          </span>
        </span>
        
        {/* Ripple effect on click */}
        <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150 rounded-curved"></div>
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button