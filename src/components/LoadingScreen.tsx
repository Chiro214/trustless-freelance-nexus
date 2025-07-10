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
            }, 800);
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
      bg-gradient-to-br from-gray-50 via-white to-purple-50
      dark:from-gray-900 dark:via-black dark:to-purple-900
      transition-all duration-800 ease-out
      ${fadeOut ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}
    `}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl animate-morph"></div>
      </div>

      {/* Main loading container */}
      <div className="relative z-10 text-center">
        {/* Glassmorphic container */}
        <div className="
          bg-white/20 dark:bg-black/20 
          backdrop-blur-[20px] 
          border border-white/30 dark:border-white/10
          rounded-3xl p-12 shadow-2xl
          animate-fade-in
        ">
          {/* Logo with glow effect */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Logo size="xl" animated={true} showText={false} />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>

          {/* Brand name with gradient */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:from-purple-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-text-shimmer bg-300%">
              DeFreelance
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg font-medium animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Decentralized Freelancing Platform
            </p>
          </div>

          {/* Progress bar */}
          <div className="w-64 mx-auto">
            <div className="bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-white/20">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{progress}%</span>
            </div>
          </div>

          {/* Loading dots */}
          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-float-slow"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;