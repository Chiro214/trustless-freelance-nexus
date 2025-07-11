import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  animated = false,
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative group transition-all duration-500 ${animated ? 'animate-pulse' : ''}`}>
        {/* Logo with modern effects */}
        <div className="relative">
          <img 
            src="/lovable-uploads/aabf3db6-8259-41f8-8ec3-e3953d040455.png" 
            alt="DeFreelance Logo"
            className={`
              ${sizeClasses[size]} w-auto object-contain 
              transition-all duration-500 ease-out
              group-hover:scale-110 group-hover:rotate-3
              filter drop-shadow-lg group-hover:drop-shadow-2xl
              ${animated ? 'animate-float' : ''}
            `}
          />
          
          {/* Glow effect for dark mode */}
          <div className={`
            absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
            bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 
            rounded-full blur-xl scale-150
            ${animated ? 'animate-pulse' : ''}
          `}></div>
          
          {/* Animated ring */}
          {animated && (
            <div className="absolute inset-0 -m-2">
              <div className="w-full h-full border-2 border-purple-400/30 rounded-full animate-spin-slow"></div>
            </div>
          )}
        </div>
      </div>
      
      {showText && (
        <span className={`
          font-bold transition-all duration-500
          bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 
          dark:from-purple-400 dark:via-blue-400 dark:to-purple-400 
          bg-clip-text text-transparent bg-300%
          ${textSizeClasses[size]}
          ${animated ? 'animate-text-shimmer' : ''}
          hover:scale-105 cursor-default
        `}>
          DeFreelance
        </span>
      )}
    </div>
  );
};

export default Logo;