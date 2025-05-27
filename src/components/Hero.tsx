
import { Button } from "@/components/ui/button";
import WalletConnect from "./WalletConnect";
import { Link } from "react-router-dom";
import { useWallet } from "@/context/WalletContext";
import { Shield, Users, Zap, Globe } from "lucide-react";

const Hero = () => {
  const { account } = useWallet();

  return (
    <div className="bg-primary min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* 3D Crypto Motion Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Bitcoin Icons */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">₿</div>
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-15 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm">₿</div>
        </div>
        
        {/* Floating Ethereum Icons */}
        <div className="absolute top-60 left-20 w-14 h-14 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}>
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">Ξ</div>
        </div>
        <div className="absolute bottom-40 right-10 w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm">Ξ</div>
        </div>
        
        {/* Floating Polygon Icons */}
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}>
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm">⬟</div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-accent opacity-10 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-accent-light opacity-15 animate-ping" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating Lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-light to-transparent opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              <span className="text-accent-light">Decentralized</span> Freelancing
              <br />
              <span className="text-accent-light">Trustless</span> Payments
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Connect directly with clients and freelancers using blockchain-based smart contracts. 
              No intermediaries, no fees, no trust issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <WalletConnect
                className="bg-accent-light text-primary hover:bg-accent hover:text-white text-lg px-8 py-6"
              />
              <Button 
                variant="outline" 
                className="border-accent-light text-accent-light hover:bg-accent-light hover:text-primary text-lg px-8 py-6"
                asChild
              >
                <Link to="/jobs">
                  Explore Jobs
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 h-[300px] md:h-[450px] animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Blockchain Visualization */}
            <div className="w-full h-full bg-secondary rounded-xl overflow-hidden relative p-8">
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Feature Cards */}
                <div className="bg-primary p-4 rounded-lg flex flex-col items-center justify-center text-white">
                  <Shield className="h-8 w-8 text-accent-light mb-2" />
                  <span className="text-sm font-semibold">Secure Escrow</span>
                </div>
                <div className="bg-primary p-4 rounded-lg flex flex-col items-center justify-center text-white">
                  <Users className="h-8 w-8 text-accent-light mb-2" />
                  <span className="text-sm font-semibold">Zero Middlemen</span>
                </div>
                <div className="bg-primary p-4 rounded-lg flex flex-col items-center justify-center text-white">
                  <Zap className="h-8 w-8 text-accent-light mb-2" />
                  <span className="text-sm font-semibold">Smart Contracts</span>
                </div>
                <div className="bg-primary p-4 rounded-lg flex flex-col items-center justify-center text-white">
                  <Globe className="h-8 w-8 text-accent-light mb-2" />
                  <span className="text-sm font-semibold">Multi-Chain</span>
                </div>
              </div>
              {/* Floating crypto elements over the visualization */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-30 animate-spin" style={{ animationDuration: '6s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2">
        <div className="w-96 h-96 rounded-full bg-accent opacity-10 blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>
      <div className="absolute -top-32 -right-32">
        <div className="w-96 h-96 rounded-full bg-accent-light opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </div>
    </div>
  );
};

export default Hero;
