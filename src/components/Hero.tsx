
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-primary min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
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
              <Button 
                className="bg-accent-light text-primary hover:bg-accent hover:text-white text-lg px-8 py-6"
              >
                Connect Wallet
              </Button>
              <Button 
                variant="outline" 
                className="border-accent-light text-accent-light hover:bg-accent-light hover:text-primary text-lg px-8 py-6"
              >
                Explore Jobs
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 h-[300px] md:h-[450px] animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Placeholder for Spline 3D scene - in production, replace with actual Spline iframe */}
            <div className="w-full h-full bg-secondary rounded-xl overflow-hidden">
              <iframe
                src="https://my.spline.design/untitled-76d4d9a5201d3c45548c867d4779f960/" 
                className="w-full h-full border-none"
                title="Blockchain freelance platform visualization"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2">
        <div className="w-96 h-96 rounded-full bg-accent opacity-10 blur-3xl"></div>
      </div>
      <div className="absolute -top-32 -right-32">
        <div className="w-96 h-96 rounded-full bg-accent-light opacity-10 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;
