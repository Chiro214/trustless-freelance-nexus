import React, { useEffect, useState } from 'react';
import Logo from './Logo';

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, duration = 3000 }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setIsVisible(false);
              onComplete?.();
            }, 1000);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`
      fixed inset-0 z-50 flex items-center justify-center
      bg-gradient-to-br from-purple-900 via-black to-purple-900
      transition-all duration-1000 ease-out
      ${fadeOut ? 'opacity-0 scale-110 blur-sm' : 'opacity-100 scale-100'}
    `}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl animate-morph"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-purple-400/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-6 h-6 bg-blue-400/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-500/30 animate-pulse"></div>
      </div>

      {/* Main loading container with glassmorphism */}
      <div className="relative z-10 text-center">
        <div className="
          bg-black/40 
          backdrop-blur-[30px] 
          border border-purple-500/30
          rounded-3xl p-16 shadow-2xl
          animate-fade-in
          relative overflow-hidden
          hover:scale-105 transition-transform duration-700
        ">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl"></div>
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 p-[1px]">
            <div className="w-full h-full bg-black/40 rounded-3xl"></div>
          </div>

          <div className="relative z-10">
            {/* Logo with enhanced glow effect */}
            <div className="mb-10 flex justify-center">
              <div className="relative group">
                <Logo size="xl" animated={true} showText={false} />
                
                {/* Multi-layer glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-2xl animate-pulse scale-150"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-xl animate-pulse scale-125"></div>
                
                {/* Orbiting particles */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute -top-2 left-1/2 w-2 h-2 bg-purple-400/60 rounded-full"></div>
                  <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-blue-400/60 rounded-full"></div>
                  <div className="absolute -bottom-2 left-1/2 w-2 h-2 bg-purple-400/60 rounded-full"></div>
                  <div className="absolute top-1/2 -left-2 w-1.5 h-1.5 bg-blue-400/60 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Brand name with enhanced gradient */}
            <div className="mb-10">
              <h1 className="
                text-5xl md:text-6xl font-bold mb-3
                bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 
                dark:from-purple-400 dark:via-blue-400 dark:to-purple-400 
                bg-clip-text text-transparent 
                animate-text-shimmer bg-300%
                drop-shadow-lg
              ">
                DeFreelance
              </h1>
              <p className="
                mt-4 text-xl md:text-2xl font-semibold
                bg-gradient-to-r from-gray-200 to-gray-200 bg-clip-text text-transparent
                drop-shadow-[0_2px_16px_rgba(168,139,250,0.65)]
                animate-[neonFlicker_2s_infinite]
                tracking-wide
              ">
                Decentralized Freelancing Platform
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>
            </div>

            {/* Enhanced progress bar */}
            <div className="w-80 mx-auto">
              <div className="
                bg-gray-800/50 
                rounded-full h-3 overflow-hidden 
                backdrop-blur-sm border border-purple-500/20
                shadow-inner
              ">
                <div 
                  className="
                    h-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 
                    rounded-full transition-all duration-500 ease-out 
                    relative overflow-hidden
                    shadow-lg shadow-purple-500/25
                  "
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-text-shimmer"></div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-gray-400 text-sm font-medium">
                  {progress}% Loading...
                </span>
              </div>
            </div>

            {/* Enhanced loading dots */}
            <div className="flex justify-center space-x-3 mt-8">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce shadow-lg shadow-purple-500/25"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce shadow-lg shadow-blue-500/25" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce shadow-lg shadow-purple-500/25" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>

        {/* Floating elements around the container */}
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute top-1/4 -left-8 w-6 h-6 bg-purple-500/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-1/4 -right-8 w-4 h-4 bg-blue-500/20 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;