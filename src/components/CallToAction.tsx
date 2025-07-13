import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, Zap, Globe, CheckCircle } from "lucide-react";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleStartEarning = () => {
    navigate('/jobs');
  };

  const handlePostJob = () => {
    navigate('/post-job');
  };

  const handleLearnMore = () => {
    navigate('/how-it-works');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full border border-accent/30 text-accent text-sm font-medium mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            Join the Revolution
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Career?
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of freelancers and clients who are already experiencing the future of work with secure, transparent, and efficient blockchain transactions.
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border-4 border-white/20 hover:border-green-400/40 transition-all duration-300 group">
              <Shield className="w-8 h-8 text-green-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-white mb-2">100% Secure</h3>
              <p className="text-gray-300 text-sm text-center">Smart contracts ensure your funds are always protected</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border-4 border-white/20 hover:border-blue-400/40 transition-all duration-300 group">
              <Globe className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-white mb-2">Global Access</h3>
              <p className="text-gray-300 text-sm text-center">Work with clients from anywhere in the world</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border-4 border-white/20 hover:border-accent/40 transition-all duration-300 group">
              <CheckCircle className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-white mb-2">Instant Payments</h3>
              <p className="text-gray-300 text-sm text-center">Get paid immediately when work is completed</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              onClick={handleStartEarning}
              className="bg-gradient-to-r from-accent to-blue-500 text-white hover:from-blue-500 hover:to-accent px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-accent/25 transform hover:scale-105 transition-all duration-300 group"
            >
              Start Earning Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handlePostJob}
              className="border-2 border-accent/50 text-accent hover:bg-accent hover:text-white px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
            >
              Post Your First Job
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              onClick={handleLearnMore}
              className="text-gray-300 hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-400 text-sm mb-4">Trusted by leading companies worldwide</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-white">Meta</div>
              <div className="text-2xl font-bold text-white">Google</div>
              <div className="text-2xl font-bold text-white">Microsoft</div>
              <div className="text-2xl font-bold text-white">Amazon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;