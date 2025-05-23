
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";

// Sample jobs data
const allJobs = [
  {
    id: 1,
    title: "Smart Contract Developer",
    description: "Develop a secure escrow contract for a real estate platform. Must have experience with Solidity and Hardhat.",
    price: "1.2",
    category: "Blockchain",
    deadline: "10 days",
    clientName: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b"
  },
  {
    id: 2,
    title: "Frontend React Developer",
    description: "Build responsive UI components for our Web3 integration. Experience with ethers.js and React required.",
    price: "0.8",
    category: "Web Development",
    deadline: "7 days",
    clientName: "0xdef789abcdef789abcdef789abcdef789abcdef7"
  },
  {
    id: 3,
    title: "Content Writer for DeFi",
    description: "Create engaging blog posts explaining DeFi concepts to beginners. Must understand blockchain fundamentals.",
    price: "0.3",
    category: "Content",
    deadline: "5 days",
    clientName: "0xbcd456efbcd456efbcd456efbcd456efbcd456ef"
  },
  {
    id: 4,
    title: "Blockchain Security Auditor",
    description: "Audit smart contract code for vulnerabilities and security issues. Experience with security analysis tools required.",
    price: "2.5",
    category: "Security",
    deadline: "14 days",
    clientName: "0x5678def5678def5678def5678def5678def5678d"
  },
  {
    id: 5,
    title: "NFT Artist",
    description: "Create a collection of 10 unique NFT artworks for a new crypto gaming project. Must have previous NFT experience.",
    price: "1.0",
    category: "Design",
    deadline: "20 days",
    clientName: "0xabc9876abc9876abc9876abc9876abc9876abc987"
  },
  {
    id: 6,
    title: "Token Economics Designer",
    description: "Design token economics and incentive structures for a new DeFi platform. Prior experience with tokenomics required.",
    price: "3.2",
    category: "Economics",
    deadline: "30 days",
    clientName: "0x1234567812345678123456781234567812345678"
  }
];

const categories = ["All", "Blockchain", "Web Development", "Content", "Security", "Design", "Economics"];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already reactive with the onChange handler
    // This is just to handle form submission
  };

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Find <span className="text-accent-light">Web3</span> Jobs</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Browse through available jobs or use filters to find the perfect match for your skills.
            </p>
          </div>
          
          <div className="bg-secondary rounded-xl p-6 mb-10">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text"
                  placeholder="Search for jobs..."
                  className="pl-10 bg-gray-800 border-gray-700 text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button type="submit" className="bg-accent-light text-primary hover:bg-accent hover:text-white">
                Search
              </Button>
            </form>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map(category => (
                <Button 
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={
                    selectedCategory === category 
                      ? "bg-accent-light text-primary hover:bg-accent hover:text-white" 
                      : "border-gray-600 text-gray-300 hover:bg-gray-700"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <JobCard key={job.id} {...job} />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-xl text-gray-400">No jobs found matching your criteria.</p>
                <Button 
                  variant="outline"
                  className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Jobs;
