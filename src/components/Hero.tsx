
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Play, Shield, Globe, Zap, TrendingUp, Users, Star, CheckCircle } from "lucide-react";
import Logo from "./Logo";
import FuturisticBackground from "./FuturisticBackground";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/jobs');
  };

  const handleLearnMore = () => {
    navigate('/how-it-works');
  };

  const handleWatchDemo = () => {
    console.log('Watch demo clicked');
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(44, 20, 60, 0.7), rgba(10, 10, 30, 0.6)), url('/glowing-hex.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left space-y-8 animate-fade-in">
              {/* Premium Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent/20 via-accent-light/10 to-accent/5 rounded-full border border-accent/30 backdrop-blur-sm">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></div>
                <span className="text-accent-light font-medium text-sm">
                  Revolutionizing Freelancing with Blockchain
                </span>
                <div className="w-2 h-2 bg-accent-light rounded-full ml-3 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white block mb-2 mt-12">The Future of</span>
                  <span className="block bg-gradient-to-r from-accent via-accent-light to-accent-dark bg-clip-text text-transparent bg-300% animate-gradient-shift">
                    Decentralized
                  </span>
                  <span className="text-white block mt-2">Freelancing</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  Connect with global talent on a blockchain-powered platform that ensures 
                  <span className="text-accent-light font-semibold"> secure payments</span>, 
                  <span className="text-accent font-semibold"> transparent transactions</span>, and 
                  <span className="text-accent-dark font-semibold"> zero intermediaries</span>.
                </p>
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Secure Escrow</div>
                      <div className="text-sm text-gray-400">Smart contracts</div>
                    </div>
                  </div>
                </div>
                
                <div className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Global Reach</div>
                      <div className="text-sm text-gray-400">Worldwide talent</div>
                    </div>
                  </div>
                </div>
                
                <div className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent-dark/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Low Fees</div>
                      <div className="text-sm text-gray-400">2.5% platform fee</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-accent to-accent-dark text-white hover:from-accent-dark hover:to-accent px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-accent/25 transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleWatchDemo}
                  className="border-2 border-accent/50 text-accent hover:bg-accent/10 hover:border-accent px-8 py-4 text-lg font-semibold transition-all duration-300 group backdrop-blur-sm"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">50K+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent-light to-accent-dark bg-clip-text text-transparent">$2M+</div>
                  <div className="text-sm text-gray-400">Transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent-dark to-accent bg-clip-text text-transparent">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Main Dashboard Card */}
                <div className="bg-black backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-border relative overflow-hidden animate-glow-pulse">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl"></div>
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="flex items-center space-x-3">
                      <Logo size="md" animated={true} />
                      <div>
                        <div className="font-bold text-foreground">DeFreelance</div>
                        <div className="text-sm text-muted-foreground">Decentralized Platform</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-muted-foreground">Live</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-4 border border-primary/20 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-primary">1,247</div>
                      <div className="text-sm text-muted-foreground">Active Jobs</div>
                    </div>
                    <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-4 border border-accent/20 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-accent">8,932</div>
                      <div className="text-sm text-muted-foreground">Freelancers</div>
                    </div>
                    <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-4 border border-accent/20 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-green-400">$847K</div>
                      <div className="text-sm text-muted-foreground">Paid Out</div>
                    </div>
                    <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-4 border border-accent/20 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-yellow-400 flex items-center">
                        4.9<Star className="w-4 h-4 ml-1 fill-current" />
                      </div>
                      <div className="text-sm text-muted-foreground">Avg Rating</div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-3 relative z-10">
                    <div className="text-sm font-semibold text-foreground mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-accent" />
                      Recent Activity
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-accent/10 to-transparent rounded-lg border border-accent/20 backdrop-blur-sm">
                      <div className="w-10 h-10 bg-gradient-to-r from-accent to-accent-dark rounded-full flex items-center justify-center text-white text-sm font-bold">
                        SC
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">Smart Contract Developer</div>
                        <div className="text-xs text-muted-foreground">Posted 2 minutes ago</div>
                      </div>
                      <div className="text-sm font-semibold text-green-400">$1,200</div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-accent-light/10 to-transparent rounded-lg border border-accent-light/20 backdrop-blur-sm">
                      <div className="w-10 h-10 bg-gradient-to-r from-accent-light to-accent rounded-full flex items-center justify-center text-white text-sm font-bold">
                        RD
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">React Developer</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                          Payment completed
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-green-400">$800</div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-accent-dark/10 to-transparent rounded-lg border border-accent-dark/20 backdrop-blur-sm">
                      <div className="w-10 h-10 bg-gradient-to-r from-accent-dark to-accent-light rounded-full flex items-center justify-center text-white text-sm font-bold">
                        UD
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">UI/UX Designer</div>
                        <div className="text-xs text-muted-foreground">In progress</div>
                      </div>
                      <div className="text-sm font-semibold text-accent">$650</div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-accent to-accent-light rounded-full opacity-80 animate-float"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-accent-light to-accent-dark rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Floating Info Cards */}
                <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-white/20 animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-white">Secure Payments</span>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-white/20 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-white">Global Network</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-12 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-white/20 animate-float" style={{ animationDelay: '3s' }}>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium text-white">Instant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
