
import { Button } from "@/components/ui/button";
import JobCard from "./JobCard";

const sampleJobs = [
  {
    id: 1,
    title: "Smart Contract Developer",
    description: "Develop a secure escrow contract for a real estate platform. Must have experience with Solidity and Hardhat.",
    price: "1.2",
    category: "Blockchain",
    deadline: "10 days",
    clientName: "0x1a2...3b4c"
  },
  {
    id: 2,
    title: "Frontend React Developer",
    description: "Build responsive UI components for our Web3 integration. Experience with ethers.js and React required.",
    price: "0.8",
    category: "Web Development",
    deadline: "7 days",
    clientName: "0xdef...789a"
  },
  {
    id: 3,
    title: "Content Writer for DeFi",
    description: "Create engaging blog posts explaining DeFi concepts to beginners. Must understand blockchain fundamentals.",
    price: "0.3",
    category: "Content",
    deadline: "5 days",
    clientName: "0xbcd...456e"
  }
];

const JobsSection = () => {
  return (
    <section className="py-20 bg-gray-900 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Latest <span className="text-accent-light">Jobs</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Browse through the latest blockchain and Web3 opportunities posted by clients.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleJobs.map(job => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-accent-light text-accent-light hover:bg-accent-light hover:text-primary"
          >
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
