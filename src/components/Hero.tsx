import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Play, CheckCircle, Users, Globe, TrendingUp, Shield, Zap } from "lucide-react";
import Logo from "./Logo";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/jobs');
  };

  const handleLearnMore = () => {
    navigate('/how-it-works');
  };

  const handleWatchDemo = () => {
    // Open demo video or modal
    console.log('Watch demo clicked');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-white">
      {/* Clean geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-100/40 to-purple-200/20 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-accent/10 to-accent-light/20 rounded-full blur-2xl animate-morph" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-64 h-64 bg-gradient-to-br from-secondary/10 to-primary/5 rounded-full blur-3xl animate-morph" style={{ animationDelay: '4s' }}></div>
        
        {/* Minimal grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2E073F" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-light/20 to-accent/10 rounded-full border border-accent/20 text-primary text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></div>
                Revolutionizing Freelancing with Blockchain
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  The Future of
                  <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Decentralized
                  </span>
                  <span className="block">Freelancing</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  Connect with global talent on a blockchain-powered platform that ensures 
                  <span className="font-semibold text-primary"> secure payments</span>, 
                  <span className="font-semibold text-secondary"> transparent transactions</span>, and 
                  <span className="font-semibold text-accent"> zero intermediaries</span>.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Secure Escrow</div>
                    <div className="text-sm text-gray-600">Smart contracts</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Global Reach</div>
                    <div className="text-sm text-gray-600">Worldwide talent</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-light/50 to-accent/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Low Fees</div>
                    <div className="text-sm text-gray-600">2.5% platform fee</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-accent px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                >
                  <span className="flex items-center">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleWatchDemo}
                  className="border-2 border-accent/30 text-primary hover:bg-accent/10 hover:border-accent px-8 py-4 text-lg font-semibold transition-all duration-300 group backdrop-blur-sm"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">50K+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">$2M+</div>
                  <div className="text-sm text-gray-600">Transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-purple-100 relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-light/5 to-accent/5 rounded-3xl"></div>
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="flex items-center space-x-3">
                      <Logo size="md" animated={true} />
                      <div>
                        <div className="font-bold text-primary">DeFreelance</div>
                        <div className="text-sm text-gray-600">Decentralized Platform</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Live</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/10">
                      <div className="text-2xl font-bold text-primary">1,247</div>
                      <div className="text-sm text-primary/70">Active Jobs</div>
                    </div>
                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-4 border border-secondary/10">
                      <div className="text-2xl font-bold text-secondary">8,932</div>
                      <div className="text-sm text-secondary/70">Freelancers</div>
                    </div>
                    <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-4 border border-accent/10">
                      <div className="text-2xl font-bold text-accent">$847K</div>
                      <div className="text-sm text-accent/70">Paid Out</div>
                    </div>
                    <div className="bg-gradient-to-br from-accent-light/20 to-accent-light/10 rounded-xl p-4 border border-accent-light/20">
                      <div className="text-2xl font-bold text-primary">4.9★</div>
                      <div className="text-sm text-primary/70">Avg Rating</div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-3 relative z-10">
                    <div className="text-sm font-semibold text-primary mb-3">Recent Activity</div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border border-primary/10">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-xs font-bold">
                        JS
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Smart Contract Developer</div>
                        <div className="text-xs text-gray-600">Posted 2 minutes ago</div>
                      </div>
                      <div className="text-sm font-semibold text-green-600">$1,200</div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border border-secondary/10">
                      <div className="w-8 h-8 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                        RD
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">React Developer</div>
                        <div className="text-xs text-gray-600">Payment completed</div>
                      </div>
                      <div className="text-sm font-semibold text-green-600">$800</div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-accent/5 to-transparent rounded-lg border border-accent/10">
                      <div className="w-8 h-8 bg-gradient-to-r from-accent to-accent-light rounded-full flex items-center justify-center text-white text-xs font-bold">
                        UD
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">UI/UX Designer</div>
                        <div className="text-xs text-gray-600">In progress</div>
                      </div>
                      <div className="text-sm font-semibold text-accent">$650</div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-accent to-accent-light rounded-full opacity-80 animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full opacity-60 animate-pulse"></div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-8 -left-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-purple-100 animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">Secure Payments</span>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-purple-100 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-gray-900">Global Network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;