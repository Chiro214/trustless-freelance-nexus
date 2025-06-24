
import { Button } from "@/components/ui/button";
import WalletConnect from "./WalletConnect";
import { Link } from "react-router-dom";
import { useWallet } from "@/context/WalletContext";
import { Shield, Users, Zap, Globe, ArrowRight, Star } from "lucide-react";

const Hero = () => {
  const { account } = useWallet();

  return (
    <div className="bg-gradient-to-br from-primary via-secondary to-primary min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Enhanced 3D Crypto Motion Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
        
        {/* Floating Bitcoin Icons */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-20 animate-bounce shadow-lg" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">₿</div>
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-15 animate-bounce shadow-lg" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">₿</div>
        </div>
        
        {/* Floating Ethereum Icons */}
        <div className="absolute top-60 left-20 w-18 h-18 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse shadow-lg" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}>
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">Ξ</div>
        </div>
        <div className="absolute bottom-40 right-10 w-14 h-14 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-15 animate-pulse shadow-lg" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">Ξ</div>
        </div>
        
        {/* Enhanced geometric shapes */}
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-accent/20 rotate-45 animate-spin shadow-lg" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-accent-light/25 animate-ping shadow-lg" style={{ animationDelay: '3s' }}></div>
        
        {/* Animated connecting lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-light/25 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-accent-light font-medium">Trusted by 10,000+ Users</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
              <span className="bg-gradient-to-r from-accent-light via-white to-accent-light bg-clip-text text-transparent">Decentralized</span>
              <br />
              <span className="text-white">Freelancing</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Reimagined</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in leading-relaxed" style={{ animationDelay: '0.1s' }}>
              Experience the future of work with blockchain-powered smart contracts. 
              <span className="text-accent-light font-semibold"> Zero fees, maximum trust.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <WalletConnect
                className="bg-gradient-to-r from-accent-light to-yellow-400 text-primary hover:from-accent hover:to-orange-500 text-lg px-8 py-6 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              />
              <Button 
                variant="outline" 
                className="border-2 border-accent-light text-accent-light hover:bg-accent-light hover:text-primary text-lg px-8 py-6 rounded-full font-semibold backdrop-blur-sm bg-white/10 hover:bg-accent-light transition-all duration-300 group"
                asChild
              >
                <Link to="/jobs" className="flex items-center gap-2">
                  Explore Jobs
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">$2M+</div>
                <div className="text-sm text-gray-400">Total Paid</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Networks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Enhanced Blockchain Visualization */}
            <div className="w-full h-full bg-gradient-to-br from-secondary/50 to-primary/50 backdrop-blur-lg rounded-3xl overflow-hidden relative p-8 border border-white/10 shadow-2xl">
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Enhanced Feature Cards */}
                <div className="bg-gradient-to-br from-primary/80 to-secondary/80 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl border border-white/10 hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-full mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-center">Secure Escrow</span>
                  <span className="text-xs text-gray-300 text-center mt-1">Smart Contract Protected</span>
                </div>
                
                <div className="bg-gradient-to-br from-primary/80 to-secondary/80 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl border border-white/10 hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-full mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-center">Zero Fees</span>
                  <span className="text-xs text-gray-300 text-center mt-1">Direct P2P Payments</span>
                </div>
                
                <div className="bg-gradient-to-br from-primary/80 to-secondary/80 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl border border-white/10 hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-center">Instant Payments</span>
                  <span className="text-xs text-gray-300 text-center mt-1">Real-time Settlements</span>
                </div>
                
                <div className="bg-gradient-to-br from-primary/80 to-secondary/80 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl border border-white/10 hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-500 p-4 rounded-full mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-center">Multi-Chain</span>
                  <span className="text-xs text-gray-300 text-center mt-1">50+ Networks</span>
                </div>
              </div>
              
              {/* Floating elements over the visualization */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-40 animate-spin" style={{ animationDuration: '6s' }}></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '4s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced abstract shapes */}
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2">
        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-accent/20 to-accent-light/20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>
      <div className="absolute -top-32 -right-32">
        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-accent-light/15 to-yellow-400/15 blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </div>
    </div>
  );
};

export default Hero;
