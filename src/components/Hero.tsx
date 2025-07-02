import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Shield, Globe, Coins, Star, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/jobs');
  };

  const handleLearnMore = () => {
    navigate('/how-it-works');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-light/10 via-transparent to-yellow-400/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-accent-light/20 to-yellow-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/15 to-purple-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-32 w-16 h-16 bg-gradient-to-br from-orange-400/25 to-red-500/25 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Large gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-accent-light/10 via-yellow-400/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/10 via-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-400/5 via-transparent to-accent-light/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '10s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-light/20 via-yellow-400/20 to-accent-light/20 rounded-full border border-accent-light/30 text-accent-light text-sm font-medium mb-8 backdrop-blur-lg shadow-2xl hover:scale-105 transition-all duration-300 group">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <Zap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-gradient-to-r from-accent-light to-yellow-400 bg-clip-text text-transparent font-semibold">
              Decentralized Freelancing Platform
            </span>
            <div className="w-2 h-2 bg-blue-400 rounded-full ml-3 animate-ping"></div>
          </div>
          
          {/* Enhanced Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="block mb-4">The Future of</span>
            <span className="block bg-gradient-to-r from-accent-light via-yellow-400 via-orange-400 to-green-400 bg-clip-text text-transparent animate-pulse relative">
              Freelancing
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-light/20 to-yellow-400/20 blur-2xl -z-10 animate-pulse"></div>
            </span>
            <span className="block mt-4 text-4xl md:text-5xl lg:text-6xl text-gray-300">is Here</span>
          </h1>
          
          {/* Enhanced Subheading */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 leading-relaxed">
              Connect with global talent on a blockchain-powered platform.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg md:text-xl">
              <span className="flex items-center bg-gradient-to-r from-accent-light/10 to-yellow-400/10 px-4 py-2 rounded-full border border-accent-light/20 backdrop-blur-sm">
                <Shield className="w-5 h-5 mr-2 text-accent-light" />
                <span className="text-accent-light font-semibold">Secure payments</span>
              </span>
              <span className="flex items-center bg-gradient-to-r from-yellow-400/10 to-orange-400/10 px-4 py-2 rounded-full border border-yellow-400/20 backdrop-blur-sm">
                <Users className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Zero intermediaries</span>
              </span>
              <span className="flex items-center bg-gradient-to-r from-green-400/10 to-teal-400/10 px-4 py-2 rounded-full border border-green-400/20 backdrop-blur-sm">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                <span className="text-green-400 font-semibold">Complete transparency</span>
              </span>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg"
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-accent-light via-yellow-400 to-orange-400 text-primary hover:from-accent hover:via-orange-500 hover:to-red-500 px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-accent-light/25 transform hover:scale-110 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleLearnMore}
              className="border-2 border-accent-light/50 text-accent-light hover:bg-accent-light hover:text-primary px-10 py-6 text-xl font-bold backdrop-blur-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-light/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">Learn More</span>
            </Button>
          </div>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-accent-light/40 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-light to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-4xl font-bold text-accent-light mb-2 group-hover:scale-110 transition-transform duration-300">$2M+</div>
              <div className="text-gray-300 font-medium">Total Transactions</div>
              <div className="w-full h-1 bg-gradient-to-r from-accent-light/20 to-yellow-400/20 rounded-full mt-4">
                <div className="h-full bg-gradient-to-r from-accent-light to-yellow-400 rounded-full w-3/4 animate-pulse"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-yellow-400/40 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
              <div className="text-gray-300 font-medium">Active Users</div>
              <div className="w-full h-1 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full mt-4">
                <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full w-4/5 animate-pulse"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-green-400/40 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-gray-300 font-medium">Uptime</div>
              <div className="w-full h-1 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full mt-4">
                <div className="h-full bg-gradient-to-r from-green-400 to-teal-400 rounded-full w-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center gap-2 text-gray-400">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">Trusted by 50K+ users</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Audited smart contracts</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">Global community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-light/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-light rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;