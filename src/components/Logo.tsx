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
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-accent via-accent-light to-accent-dark ${animated ? 'animate-spin-slow' : ''}`}>
        <div className="absolute inset-1 rounded-full bg-primary"></div>
      </div>
      
      {/* Inner content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* D and F letters with modern styling */}
        <div className="flex items-center justify-center">
          <span className="text-white font-bold text-lg leading-none bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            D
          </span>
          <div className="w-1 h-1 bg-accent rounded-full mx-0.5 animate-pulse"></div>
          <span className="text-white font-bold text-lg leading-none bg-gradient-to-r from-accent-light to-accent-dark bg-clip-text text-transparent">
            F
          </span>
        </div>
      </div>
      
      {/* Floating particles */}
      {animated && (
        <>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-accent-light rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 -left-2 w-1 h-1 bg-accent-dark rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </>
      )}
    </div>
  );
};

export default Logo;