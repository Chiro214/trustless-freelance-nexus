
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X, MessageCircle, ExternalLink, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HelpAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const helpOptions = [
    {
      title: "How to get started?",
      description: "Learn the basics of posting jobs and finding work on Defreelance",
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

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 shadow-lg hover:shadow-xl transition-all duration-300 border-4 border-white group"
        >
          <div className="relative">
            <span className="text-2xl animate-bounce group-hover:scale-110 transition-transform">
              ₿
            </span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </Button>
        
        {/* Floating message bubble */}
        <div className="absolute bottom-20 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg border max-w-xs animate-bounce opacity-90">
          <div className="text-sm font-medium">Need help? 🚀</div>
          <div className="text-xs text-gray-600">Click me for assistance!</div>
          <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isMinimized ? (
        <Button
          onClick={() => setIsMinimized(false)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 shadow-lg hover:shadow-xl transition-all duration-300 border-4 border-white"
        >
          <span className="text-2xl animate-bounce">₿</span>
        </Button>
      ) : (
        <Card className="w-80 bg-white/95 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl animate-bounce">₿</span>
                <div>
                  <CardTitle className="text-lg">Bitcoin Helper</CardTitle>
                  <CardDescription className="text-orange-100 text-sm">
                    Your crypto assistant
                  </CardDescription>
                </div>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(true)}
                  className="text-white hover:bg-white/20 w-8 h-8 p-0"
                >
                  <HelpCircle className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 w-8 h-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-4 space-y-3">
            <div className="text-sm text-gray-600 mb-4">
              Hi there! 👋 I'm here to help you navigate Defreelance. What would you like to know?
            </div>
            
            <div className="space-y-2">
              {helpOptions.map((option, index) => (
                <Link key={index} to={option.link} onClick={() => setIsOpen(false)}>
                  <div className="p-3 rounded-lg border hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm text-gray-800 group-hover:text-orange-600">
                          {option.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {option.description}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-600" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="pt-3 border-t">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
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
