import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Chirag Shukla",
    role: "Lead Developer",
    description: "Blockchain architect with 5+ years in smart contract development and DeFi protocols.",
    image: "assets/Team/chirag.jpg",
    twitter: "#",
    github: "#",
    linkedin: "https://www.linkedin.com/in/chirag-shukla24/"
  },
  {
    id: 2,
    name: "Rakshan Shetty",
    role: "Product Manager",
    description: "Product strategist specializing in Web3 platforms and decentralized applications.",
    image: "/assets/Team/rakshan.jpg",
    twitter: "#",
    github: "#",
    linkedin: "https://www.linkedin.com/in/rakshan-shetty-57292a2ba/"
  },
  {
    id: 3,
    name: "Yash Sharma",
    role: "Blockchain Engineer",
    description: "Blockchain and Web3 integration specialist with expertise in wallet connectivity.",
    image: "/assets/Team/yash.jpeg",
    twitter: "#",
    github: "#",
    linkedin: "https://www.linkedin.com/in/yash-sharma-7b688a19b/"
  },
  {
    id: 4,
    name: "Nitesh Vishwakarma",
    role: "Security Auditor",
    description: "Smart contract security expert ensuring platform safety and user fund protection.",
    image: "/assets/Team/nitesh.jpeg",
    twitter: "#",
    github: "#",
    linkedin: "https://www.linkedin.com/in/niteshvishwakarma07/"
  }
];

const About = () => {
  const navigate = useNavigate();

  const handleStartUsingDeFreelance = () => {
    navigate('/jobs');
  };

  const handleJoinCommunity = () => {
    // Open Discord or community link
    window.open('https://discord.gg/DeFreelance', '_blank');
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-36 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About <span className="text-accent-light">DeFreelance</span></h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We're building the future of freelancing by leveraging blockchain technology to create a trustless, transparent, and efficient marketplace.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-secondary rounded-xl overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
                  <div className="lg:w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" 
                      alt="Blockchain technology"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Mission</h2>
                    <p className="text-gray-300 mb-4 text-lg">
                      DeFreelance aims to revolutionize the freelancing industry by removing intermediaries and enabling direct, secure, and transparent transactions between clients and freelancers through blockchain technology.
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Traditional freelancing platforms charge high fees, control payment flows, and often have opaque dispute resolution processes. We're changing that by building a decentralized platform where:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                  <li>Smart contracts automatically enforce payment terms</li>
                  <li>Funds are securely held in escrow until work is completed</li>
                  <li>Transaction fees are minimal compared to traditional platforms</li>
                  <li>All interactions are transparent and verifiable on-chain</li>
                  <li>Users have full control over their data and earnings</li>
                </ul>
                
                <div className="bg-primary p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Why Blockchain?</h3>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="md:w-2/3">
                      <p className="text-gray-300">
                        Blockchain technology provides the perfect foundation for a freelancing platform by enabling trustless transactions, immutable records, and programmable money. By leveraging smart contracts, we can automate payment releases based on predefined conditions, eliminating the need for third-party intermediaries.
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <img 
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop" 
                        alt="Smart contracts"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our <span className="text-accent-light">Team</span></h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We're a diverse group of blockchain developers, designers, and industry experts passionate about the future of work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-secondary rounded-xl overflow-hidden text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-accent-light mb-3">{member.role}</p>
                    <p className="text-gray-300 mb-4 text-sm">
                      {member.description}
                    </p>
                    <div className="flex justify-center space-x-3">
                      <a href={member.twitter} className="text-gray-400 hover:text-white transition-colors">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href={member.github} className="text-gray-400 hover:text-white transition-colors">
                        <span className="sr-only">GitHub</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href={member.linkedin} className="text-gray-400 hover:text-white transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Join Our Journey</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-accent-light text-white hover:bg-accent hover:text-white"
                onClick={handleStartUsingDeFreelance}
              >
                Start Using DeFreelance
              </Button>
              <Button 
                variant="outline" 
                className="border-accent-light text-accent-light hover:bg-white hover:border-accent-light hover:text-primary"
                onClick={handleJoinCommunity}
              >
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Partners />
      <Footer />
    </div>
  );
};

export default About;
