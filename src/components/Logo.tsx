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
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${animated ? 'animate-pulse' : ''} transition-all duration-300 hover:scale-110`}>
        <img 
          src="/assets/images/defreelance-logo.png" 
          alt="DeFreelance Logo" 
          className={`${sizeClasses[size]} w-auto object-contain filter transition-all duration-300 
            dark:brightness-0 dark:invert 
            drop-shadow-lg hover:drop-shadow-xl
            ${animated ? 'animate-glow-pulse' : ''}
          `}
        />
        {animated && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        )}
      </div>
      
      {showText && (
        <span className={`font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent ${textSizeClasses[size]} transition-all duration-300`}>
          DeFreelance
        </span>
      )}
    </div>
  );
};

export default Logo;