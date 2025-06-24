
import { useWallet } from "@/context/WalletContext";
import { Button } from "@/components/ui/button";
import WalletConnect from "./WalletConnect";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const CallToAction = () => {
  const { account } = useWallet();
  
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-light/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-400/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header with icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="h-16 w-16 text-accent-light animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r from-accent-light/20 to-yellow-400/20 rounded-full blur-lg"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-accent-light via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Web3 Journey?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our decentralized platform today and experience the future of freelancing with{" "}
            <span className="text-accent-light font-semibold">blockchain technology</span>.
          </p>

          {/* Benefits list */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              "Zero Platform Fees",
              "Instant Payments", 
              "Global Access",
              "Smart Contracts"
            ].map((benefit) => (
              <div key={benefit} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium text-white">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <WalletConnect 
              className="bg-gradient-to-r from-accent-light to-yellow-400 text-primary hover:from-accent hover:to-orange-500 text-lg px-10 py-6 rounded-full font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            />
            <Button 
              variant="outline" 
              className="border-2 border-accent-light text-accent-light hover:bg-accent-light hover:text-primary text-lg px-10 py-6 rounded-full font-semibold backdrop-blur-sm bg-white/10 hover:bg-accent-light transition-all duration-300 group"
              asChild
            >
              <Link to="/jobs" className="flex items-center gap-2">
                {account ? "Post a Job" : "Browse Jobs"}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">$2M+</div>
              <div className="text-sm text-gray-400">Total Volume</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-400">Blockchains</div>
            </div>
          </div>

          <p className="text-gray-400 mt-8 text-lg">
            <span className="text-accent-light font-semibold">No registration fees.</span> Only pay for work delivered.
          </p>
        </div>
      </div>
      
      {/* Enhanced abstract shapes */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-accent/15 to-accent-light/15 blur-3xl animate-pulse"></div>
      </div>
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-accent-light/10 to-yellow-400/10 blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
};

export default CallToAction;
