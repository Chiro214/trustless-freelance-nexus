
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Shield, Globe, Coins } from "lucide-react";

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
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating crypto symbols */}
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <Coins className="w-8 h-8 text-accent-light/30" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-2000">
          <Globe className="w-12 h-12 text-yellow-400/20" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-3000">
          <Shield className="w-10 h-10 text-green-400/25" />
        </div>
        <div className="absolute bottom-20 right-32 animate-pulse delay-500">
          <Zap className="w-6 h-6 text-blue-400/30" />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-light/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-accent-light/20 rounded-full border border-accent-light/30 text-accent-light text-sm font-medium mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            Decentralized Freelancing Platform
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-accent-light via-yellow-400 to-green-400 bg-clip-text text-transparent animate-pulse">
              Freelancing
            </span>
            is Here
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with global talent on a blockchain-powered platform. 
            <span className="text-accent-light font-semibold"> Secure payments</span>, 
            <span className="text-yellow-400 font-semibold"> zero intermediaries</span>, and 
            <span className="text-green-400 font-semibold"> complete transparency</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg"
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-accent-light to-yellow-400 text-primary hover:from-accent hover:to-orange-500 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-accent-light/25 transform hover:scale-105 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleLearnMore}
              className="border-2 border-accent-light/50 text-accent-light hover:bg-accent-light hover:text-primary px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
            >
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-accent-light/30 transition-all duration-300 group">
              <div className="text-3xl font-bold text-accent-light mb-2 group-hover:scale-110 transition-transform duration-300">$2M+</div>
              <div className="text-gray-300">Total Transactions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 group">
              <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 group">
              <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
