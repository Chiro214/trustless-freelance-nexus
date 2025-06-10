
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X, MessageCircle, ExternalLink, HelpCircle, Minimize2, Sparkles } from "lucide-react";
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
          className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 via-yellow-400 to-amber-500 hover:from-orange-500 hover:via-yellow-500 hover:to-amber-600 shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-white/50 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-pulse"></div>
          <div className="relative flex flex-col items-center">
            <span className="text-3xl mb-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
              ₿
            </span>
            <Sparkles className="w-3 h-3 text-white/80 animate-bounce" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"></div>
        </Button>
        
        {/* Professional floating message bubble */}
        <div className="absolute bottom-24 right-0 bg-white/95 backdrop-blur-sm text-gray-800 px-6 py-4 rounded-2xl shadow-2xl border border-gray-200/50 max-w-xs transform -translate-x-4 animate-in slide-in-from-bottom-4 fade-in-0 duration-700">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">₿</span>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900 mb-1">
                Need assistance?
              </div>
              <div className="text-xs text-gray-600 leading-relaxed">
                Let me know if you need any help with Defreelance!
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-200/50"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isMinimized ? (
        <Button
          onClick={() => setIsMinimized(false)}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 via-yellow-400 to-amber-500 hover:from-orange-500 hover:via-yellow-500 hover:to-amber-600 shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-white/50"
        >
          <span className="text-3xl animate-bounce drop-shadow-lg">₿</span>
        </Button>
      ) : (
        <Card className="w-96 bg-white/98 backdrop-blur-sm shadow-2xl border-0 overflow-hidden ring-1 ring-gray-200/50">
          <CardHeader className="bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-500 text-white pb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-3xl animate-bounce drop-shadow-lg">₿</span>
                </div>
                <div>
                  <CardTitle className="text-xl font-bold">DeFreelance Assistant</CardTitle>
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
                  className="text-white hover:bg-white/20 w-9 h-9 p-0 rounded-full transition-all duration-200"
                >
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 w-9 h-9 p-0 rounded-full transition-all duration-200"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6 space-y-4">
            <div className="text-sm text-gray-700 mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span className="font-semibold text-gray-800">Hello there! 👋</span>
              </div>
              <p className="text-gray-600">Let me know if you need any help navigating Defreelance. I'm here to assist you!</p>
            </div>
            
            <div className="space-y-3">
              {helpOptions.map((option, index) => (
                <Link key={index} to={option.link} onClick={() => setIsOpen(false)}>
                  <div className="p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-gray-800 group-hover:text-orange-700 transition-colors">
                          {option.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                          {option.description}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors ml-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-500 hover:from-orange-500 hover:via-yellow-500 hover:to-amber-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
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
