import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', animated = false }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Outer ring with gradient */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent ${animated ? 'animate-spin-slow' : ''}`}>
        <div className="absolute inset-1 rounded-full bg-white"></div>
      </div>
      
      {/* Inner content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* D and F letters with modern styling */}
        <div className="flex items-center justify-center">
          <span className="text-primary font-bold text-lg leading-none bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            D
          </span>
          <div className="w-1 h-1 bg-accent rounded-full mx-0.5 animate-pulse"></div>
          <span className="text-secondary font-bold text-lg leading-none bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            F
          </span>
        </div>
      </div>
      
      {/* Floating particles */}
      {animated && (
        <>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-ping"></div>
          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 -left-2 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </>
      )}
    </div>
  );
};

export default Logo;