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
   sm: 'h-12',
   md: 'h-16',
   lg: 'h-24',
   xl: 'h-32'
};


  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-5xl'
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className={`relative group transition-all duration-500 ${animated ? 'animate-pulse' : ''}`}>
        {/* Logo with modern effects */}
        <div className="relative">
          <img 
            src="/assets/logo-new.png"
            alt="DeFreelance Logo"
            className={`
             ${sizeClasses[size]} w-auto object-contain 
             transition-transform duration-300 ease-in-out
             hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.4)]
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
          ml-2 font-semibold text-transparent bg-clip-text
          bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500
          ${textSizeClasses[size]} 
          transition-opacity duration-500 ease-in-out hover:opacity-80
        `}>
          DeFreelance
        </span>

      )}
    </div>
  );
};

export default Logo;