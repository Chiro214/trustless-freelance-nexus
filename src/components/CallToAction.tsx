
import { useWallet } from "@/context/WalletContext";
import { Button } from "@/components/ui/button";
import WalletConnect from "./WalletConnect";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const { account } = useWallet();
  
  return (
    <section className="py-20 bg-primary relative overflow-hidden px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-light/5 to-accent/5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Start Your <span className="text-accent-light">Web3</span> Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join our decentralized platform today and experience the future of freelancing with blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WalletConnect 
              className="bg-accent-light text-primary hover:bg-accent hover:text-white text-lg px-8 py-6"
            />
            <Button 
              variant="outline" 
              className="border-accent-light text-accent-light hover:bg-accent-light hover:text-primary text-lg px-8 py-6"
              asChild
            >
              <Link to="/jobs">
                {account ? "Post a Job" : "Browse Jobs"}
              </Link>
            </Button>
          </div>
          <p className="text-gray-400 mt-8">
            No registration fees. Only pay for work delivered.
          </p>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <div className="w-64 h-64 rounded-full bg-accent opacity-10 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0">
        <div className="w-64 h-64 rounded-full bg-accent-light opacity-10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default CallToAction;
