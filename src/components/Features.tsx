
import { Check, Shield, User, Wallet } from "lucide-react";

const features = [
  {
    title: "Secure Escrow",
    description: "Funds are held in smart contracts until work is approved, ensuring security for both parties.",
    icon: Shield
  },
  {
    title: "Zero Middlemen",
    description: "Connect directly with clients or freelancers without paying commission to intermediaries.",
    icon: User
  },
  {
    title: "Multi-Chain Support",
    description: "Use Polygon, Ethereum or BSC for transactions based on your preference.",
    icon: Wallet
  },
  {
    title: "Smart Contracts",
    description: "All agreements are encoded in transparent, immutable smart contracts on the blockchain.",
    icon: Check
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-primary px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How <span className="text-accent-light">DeFreeLance</span> Works</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Our platform leverages blockchain technology to create a trustless environment for freelancers and clients.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="bg-secondary p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-accent bg-opacity-10 p-4 rounded-full inline-flex mb-6">
                <feature.icon className="h-6 w-6 text-accent-light" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-r from-accent to-accent-light">
            <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-primary rounded-md group-hover:bg-opacity-0 text-white">
              Learn More About How It Works
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
