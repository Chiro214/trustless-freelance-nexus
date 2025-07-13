
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X, MessageCircle, ExternalLink, HelpCircle, Minimize2, Sparkles, Move } from "lucide-react";
import { Link } from "react-router-dom";

const HelpAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 24, y: 24 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const helpOptions = [
    {
      title: "How to get started?",
      description: "Learn the basics of posting jobs and finding work on DeFreelance",
      link: "/how-it-works"
    },
    {
      title: "Connect your wallet",
      description: "Step-by-step guide to connect your crypto wallet",
      link: "/tutorials"
    },
    {
      title: "Understanding fees",
      description: "Learn about our transparent fee structure",
      link: "/fees"
    },
    {
      title: "Smart contract security",
      description: "How our escrow system protects your funds",
      link: "/about"
    }
  ];

  // Auto-hide message after 5 seconds
  useEffect(() => {
    if (showMessage && !isOpen) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showMessage, isOpen]);

  // Handle mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isOpen || isMinimized) return;
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const newX = Math.max(0, Math.min(window.innerWidth - 80, e.clientX - dragOffset.x));
    const newY = Math.max(0, Math.min(window.innerHeight - 80, e.clientY - dragOffset.y));
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  if (!isOpen) {
    return (
      <div 
        className="fixed z-50 select-none"
        style={{ 
          right: `${position.x}px`, 
          bottom: `${position.y}px`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          onMouseDown={handleMouseDown}
          className={`w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 via-yellow-400 to-amber-500 hover:from-orange-500 hover:via-yellow-500 hover:to-amber-600 shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-white/50 group relative overflow-hidden ${isDragging ? 'scale-110' : ''}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-pulse"></div>
          <div className="relative flex flex-col items-center">
            <span className="text-3xl mb-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg animate-bounce">
              ₿
            </span>
            <Sparkles className="w-3 h-3 text-white/80 animate-ping" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"></div>
          
          {!isDragging && (
            <Move className="absolute top-1 left-1 w-3 h-3 text-white/60" />
          )}
        </Button>
        
        {/* Enhanced floating message bubble */}
        {showMessage && !isDragging && (
          <div className="absolute bottom-24 right-0 bg-gradient-to-br from-white via-white to-gray-50 backdrop-blur-lg text-gray-800 px-6 py-4 rounded-2xl shadow-2xl border border-white/80 max-w-xs transform -translate-x-4 animate-in slide-in-from-bottom-4 fade-in-0 duration-700 ring-1 ring-gray-200/50">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold animate-pulse">₿</span>
                </div>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900 mb-1 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Need assistance?
                </div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  Let me know if you need any help with DeFreelance!
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-gradient-to-br from-white to-gray-50 border-r border-b border-gray-200/50 shadow-sm"></div>
            
            {/* Progress bar for auto-hide */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full animate-[shrink_5s_linear_forwards]"></div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      className="fixed z-50"
      style={{ 
        right: `${position.x}px`, 
        bottom: `${position.y}px`
      }}
    >
      {isMinimized ? (
        <Button
          onClick={() => setIsMinimized(false)}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 via-yellow-400 to-amber-500 hover:from-orange-500 hover:via-yellow-500 hover:to-amber-600 shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-white/50"
        >
          <span className="text-3xl animate-bounce drop-shadow-lg">₿</span>
        </Button>
      ) : (
        <Card className="w-96 bg-gradient-to-br from-white/95 via-white/98 to-white/95 backdrop-blur-lg shadow-2xl border-0 overflow-hidden ring-1 ring-white/50">
          <CardHeader className="bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-500 text-white pb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute inset-0 opacity-30">
              <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <g fill="none" fillRule="evenodd">
                  <g fill="#ffffff" fillOpacity="0.05">
                    <circle cx="30" cy="30" r="2"/>
                  </g>
                </g>
              </svg>
            </div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm ring-2 ring-white/30">
                  <span className="text-3xl animate-bounce drop-shadow-lg">₿</span>
                </div>
                <div>
                  <CardTitle className="text-xl font-bold drop-shadow-sm">DeFreelance Assistant</CardTitle>
                  <CardDescription className="text-orange-100 text-sm font-medium">
                    Your crypto freelance guide
                  </CardDescription>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(true)}
                  className="text-white hover:bg-white/20 w-9 h-9 p-0 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 w-9 h-9 p-0 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6 space-y-4 bg-gradient-to-b from-transparent to-gray-50/30">
            <div className="text-sm text-gray-700 mb-6 p-4 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-xl border border-blue-100/50 shadow-inner">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                <span className="font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hello there! 👋</span>
              </div>
              <p className="text-gray-600">Let me know if you need any help navigating DeFreelance. I&apos;m here to assist you!</p>
            </div>
            
            <div className="space-y-3">
              {helpOptions.map((option, index) => (
                <Link key={index} to={option.link} onClick={() => setIsOpen(false)}>
                  <div className="p-4 rounded-xl border border-gray-200/50 hover:border-orange-300/70 hover:bg-gradient-to-br hover:from-orange-50/50 hover:via-yellow-50/50 hover:to-amber-50/50 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-orange-100/50 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-gray-800 group-hover:text-orange-700 transition-colors">
                          {option.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 leading-relaxed group-hover:text-gray-600">
                          {option.description}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-all duration-300 ml-3 group-hover:scale-110" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="pt-4 border-t border-gray-200/50">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-500 hover:from-orange-500 hover:via-yellow-500 hover:to-amber-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-white/20">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support Team
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default HelpAssistant;
