
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";

const steps = [
  {
    number: "01",
    title: "Connect Your Wallet",
    description: "Start by connecting your Web3 wallet like MetaMask or WalletConnect. This serves as your identity on the platform."
  },
  {
    number: "02",
    title: "Post or Find Jobs",
    description: "Clients can post jobs with detailed requirements and budget. Freelancers can browse and apply to jobs that match their skills."
  },
  {
    number: "03",
    title: "Escrow Funds",
    description: "When a freelancer is selected, the client deposits funds into a smart contract escrow that automatically executes based on predefined conditions."
  },
  {
    number: "04",
    title: "Complete the Work",
    description: "Freelancers work on the project according to the agreed terms and submit deliverables through the platform."
  },
  {
    number: "05",
    title: "Release Payment",
    description: "Upon successful completion and client approval, the smart contract automatically releases payment to the freelancer."
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How <span className="text-accent-light">DeFreeLance</span> Works</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our platform uses blockchain technology to create a transparent and trustless environment for freelancers and clients.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-accent-light bg-opacity-30 transform md:translate-x-0"></div>
            
            {/* Timeline steps */}
            {steps.map((step, index) => (
              <div key={step.number} className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  {/* Step number for mobile */}
                  <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-accent-light text-primary font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  
                  {/* Content layout changes based on odd/even index */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-1'}`}>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                  
                  {/* Step number circle - positioned in the middle for desktop */}
                  <div className={`hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-accent-light text-primary font-bold text-xl absolute left-1/2 transform -translate-x-1/2 z-10`}>
                    {step.number}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto bg-secondary rounded-xl p-8 mt-20 relative overflow-hidden">
            {/* Background subtle pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Smart Contract Security</h2>
              <p className="text-gray-300 mb-6">
                Our platform's smart contracts are audited by industry-leading security firms to ensure the safety of all user funds.
                The blockchain-based escrow system guarantees that freelancers get paid for completed work and clients receive the services they paid for.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-primary p-4 rounded-lg">
                  <h4 className="font-bold text-white">Automated Escrow</h4>
                  <p className="text-gray-400 text-sm">Funds are held in a secure smart contract until work completion.</p>
                </div>
                <div className="bg-primary p-4 rounded-lg">
                  <h4 className="font-bold text-white">Dispute Resolution</h4>
                  <p className="text-gray-400 text-sm">Fair arbitration process for resolving disagreements.</p>
                </div>
                <div className="bg-primary p-4 rounded-lg">
                  <h4 className="font-bold text-white">Low Gas Fees</h4>
                  <p className="text-gray-400 text-sm">Optimized contracts to minimize transaction costs.</p>
                </div>
              </div>
              
              <div className="bg-accent bg-opacity-10 border border-accent-light border-opacity-20 rounded-lg p-4 mb-6">
                <h4 className="text-accent-light font-bold mb-2">Example Smart Contract Functionality:</h4>
                <pre className="bg-gray-800 p-3 rounded overflow-x-auto text-gray-300 text-sm">
                  <code>
{`function createJob(string memory title, uint amount) public {
  // Client creates job and deposits funds
}

function releasePayment(uint jobId) public {
  // Client approves work and releases payment
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HowItWorks;
