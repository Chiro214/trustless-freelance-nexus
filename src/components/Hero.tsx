import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Shield, Globe, Coins, Star, TrendingUp, Users, Bitcoin, DollarSign, Sparkles, Rocket, Target } from "lucide-react";
import Logo from "./Logo";

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
      {/* Enhanced Animated Crypto Background */}
      <div className="absolute inset-0">
        {/* Dynamic gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-transparent to-yellow-500/10 animate-gradient-shift bg-300%"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-400/5 to-transparent"></div>
        
        {/* Floating crypto symbols with enhanced animations */}
        <div className="absolute top-20 left-10 animate-float">
          <Bitcoin className="w-16 h-16 text-orange-400/40 animate-crypto-pulse" />
        </div>
        <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
          <DollarSign className="w-20 h-20 text-yellow-500/35 animate-crypto-pulse" />
        </div>
        <div className="absolute bottom-40 left-24 animate-float" style={{ animationDelay: '4s' }}>
          <Coins className="w-18 h-18 text-amber-400/40 animate-crypto-pulse" />
        </div>
        <div className="absolute bottom-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Zap className="w-14 h-14 text-orange-500/45 animate-crypto-pulse" />
        </div>
        <div className="absolute top-1/2 left-20 animate-float" style={{ animationDelay: '3s' }}>
          <Globe className="w-12 h-12 text-yellow-400/40 animate-crypto-pulse" />
        </div>
        <div className="absolute top-1/3 right-12 animate-float" style={{ animationDelay: '5s' }}>
          <Shield className="w-15 h-15 text-amber-500/35 animate-crypto-pulse" />
        </div>
        
        {/* Additional floating elements */}
        <div className="absolute top-16 left-1/3 animate-float" style={{ animationDelay: '6s' }}>
          <Sparkles className="w-10 h-10 text-orange-300/30 animate-crypto-pulse" />
        </div>
        <div className="absolute bottom-20 left-1/2 animate-float" style={{ animationDelay: '7s' }}>
          <Rocket className="w-12 h-12 text-yellow-400/35 animate-crypto-pulse" />
        </div>
        
        {/* Enhanced floating geometric shapes */}
        <div className="absolute top-24 left-1/4 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-yellow-500/20 rounded-full blur-xl animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-48 right-1/4 w-40 h-40 bg-gradient-to-br from-yellow-500/15 to-amber-600/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-28 h-28 bg-gradient-to-br from-amber-400/25 to-orange-500/25 rounded-full blur-xl animate-bounce-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-24 right-1/3 w-24 h-24 bg-gradient-to-br from-orange-500/30 to-yellow-400/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
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
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/10 via-yellow-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/10 via-amber-600/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-orange-400/5 via-transparent to-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '10s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-7xl mx-auto">
          {/* Enhanced Badge with Logo */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-400/20 via-yellow-500/20 to-amber-600/20 rounded-full border border-orange-400/30 text-orange-400 text-sm font-medium mb-12 backdrop-blur-lg shadow-2xl hover:scale-105 transition-all duration-300 group">
            <Logo size="sm" animated={true} className="mr-3" />
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <Zap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent font-semibold">
              Revolutionary Decentralized Freelancing
            </span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full ml-3 animate-ping"></div>
          </div>
          
          {/* Enhanced Main Heading with Creative Layout */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="hidden md:block w-32 h-0.5 bg-gradient-to-r from-transparent to-orange-400 mr-6"></div>
              <Target className="w-8 h-8 text-orange-400 animate-pulse" />
              <div className="hidden md:block w-32 h-0.5 bg-gradient-to-l from-transparent to-orange-400 ml-6"></div>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight">
              <span className="block mb-4 animate-fade-in">The Future of</span>
              <span className="block bg-gradient-to-r from-orange-400 via-yellow-500 via-amber-500 to-orange-600 bg-clip-text text-transparent animate-gradient-shift bg-300% relative">
                Freelancing
                <div className="absolute -inset-6 bg-gradient-to-r from-orange-400/20 to-yellow-500/20 blur-3xl -z-10 animate-pulse"></div>
              </span>
              <span className="block mt-6 text-5xl md:text-6xl lg:text-7xl text-gray-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                Starts Here
              </span>
            </h1>
          </div>
          
          {/* Enhanced Subheading with Creative Elements */}
          <div className="max-w-5xl mx-auto mb-16">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '1s' }}>
              Connect with global talent on a blockchain-powered platform
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-lg md:text-xl">
              <span className="flex items-center bg-gradient-to-r from-orange-400/10 to-yellow-500/10 px-6 py-3 rounded-full border border-orange-400/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                <Shield className="w-6 h-6 mr-3 text-orange-400" />
                <span className="text-orange-400 font-semibold">Secure Payments</span>
              </span>
              <span className="flex items-center bg-gradient-to-r from-yellow-500/10 to-amber-600/10 px-6 py-3 rounded-full border border-yellow-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '1.4s' }}>
                <Users className="w-6 h-6 mr-3 text-yellow-500" />
                <span className="text-yellow-500 font-semibold">Zero Intermediaries</span>
              </span>
              <span className="flex items-center bg-gradient-to-r from-amber-600/10 to-orange-500/10 px-6 py-3 rounded-full border border-amber-600/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '1.6s' }}>
                <TrendingUp className="w-6 h-6 mr-3 text-amber-600" />
                <span className="text-amber-600 font-semibold">Complete Transparency</span>
              </span>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons with Creative Layout */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 animate-fade-in" style={{ animationDelay: '1.8s' }}>
            <Button 
              size="lg"
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-orange-400 via-yellow-500 to-amber-600 text-white hover:from-yellow-500 hover:via-orange-400 hover:to-yellow-600 px-12 py-8 text-2xl font-bold shadow-2xl hover:shadow-orange-400/25 transform hover:scale-110 transition-all duration-500 group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center">
                <Rocket className="mr-4 w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                Get Started
                <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleLearnMore}
              className="border-2 border-orange-400/50 text-orange-400 hover:bg-orange-400 hover:text-white px-12 py-8 text-2xl font-bold backdrop-blur-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center">
                <Sparkles className="mr-3 w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                Learn More
              </span>
            </Button>
          </div>
          
          {/* Enhanced Stats with Creative Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '2s' }}>
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-10 border border-white/20 hover:border-orange-400/40 transition-all duration-500 group hover:scale-105 hover:-translate-y-4 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-3xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-orange-400 mb-3 group-hover:scale-110 transition-transform duration-300">$2M+</div>
                <div className="text-gray-300 font-medium text-lg">Total Transactions</div>
                <div className="w-full h-2 bg-gradient-to-r from-orange-400/20 to-yellow-500/20 rounded-full mt-6">
                  <div className="h-full bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full w-3/4 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-10 border border-white/20 hover:border-yellow-500/40 transition-all duration-500 group hover:scale-105 hover:-translate-y-4 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-yellow-500 mb-3 group-hover:scale-110 transition-transform duration-300">10K+</div>
                <div className="text-gray-300 font-medium text-lg">Active Users</div>
                <div className="w-full h-2 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 rounded-full mt-6">
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full w-4/5 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-10 border border-white/20 hover:border-amber-600/40 transition-all duration-500 group hover:scale-105 hover:-translate-y-4 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-amber-600 mb-3 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                <div className="text-gray-300 font-medium text-lg">Uptime</div>
                <div className="w-full h-2 bg-gradient-to-r from-amber-600/20 to-orange-500/20 rounded-full mt-6">
                  <div className="h-full bg-gradient-to-r from-amber-600 to-orange-500 rounded-full w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 hover:opacity-100 transition-opacity duration-500 animate-fade-in" style={{ animationDelay: '2.2s' }}>
            <div className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors duration-300 group">
              <Star className="w-6 h-6 text-yellow-400 fill-current group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-lg font-medium">Trusted by 50K+ users</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 hover:text-amber-600 transition-colors duration-300 group">
              <Shield className="w-6 h-6 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-medium">Audited smart contracts</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 transition-colors duration-300 group">
              <Globe className="w-6 h-6 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-lg font-medium">Global community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating action indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-orange-400/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-2 h-4 bg-orange-400 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;