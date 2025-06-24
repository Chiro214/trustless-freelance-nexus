
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { useJobs } from "@/context/JobsContext";

// Sample jobs data
const sampleJobs = [
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
  }
];

const categories = ["All", "Blockchain", "Web Development", "Content", "Security", "Design", "Economics", "Development", "Marketing", "Writing"];

const Jobs = () => {
  const { getAllJobs } = useJobs();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const postedJobs = getAllJobs();
  
  // Combine sample jobs with posted jobs
  const allJobs = [
    ...sampleJobs,
    ...postedJobs.map(job => ({
      id: job.id,
      title: job.title,
      description: job.description,
      price: job.budget,
      category: job.category.charAt(0).toUpperCase() + job.category.slice(1),
      deadline: job.deadline,
      clientName: job.clientAddress
    }))
  ];
  
  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already reactive with the onChange handler
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-light/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 relative z-10">
        <div className="container mx-auto">
          {/* Enhanced header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Briefcase className="h-16 w-16 text-accent-light animate-pulse" />
                <div className="absolute -inset-2 bg-gradient-to-r from-accent-light/20 to-yellow-400/20 rounded-full blur-lg"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find <span className="bg-gradient-to-r from-accent-light via-yellow-400 to-orange-400 bg-clip-text text-transparent">Web3</span> Jobs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Browse through available jobs or use filters to find the perfect match for your skills in the{" "}
              <span className="text-accent-light font-semibold">decentralized economy</span>.
            </p>
          </div>
          
          {/* Enhanced search and filter section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20 shadow-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-accent-light transition-colors" size={20} />
                <Input 
                  type="text"
                  placeholder="Search for jobs, skills, or keywords..."
                  className="pl-12 bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-gray-300 h-14 rounded-xl focus:border-accent-light focus:ring-2 focus:ring-accent-light/20 transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-accent-light to-yellow-400 text-primary hover:from-accent hover:to-orange-500 h-14 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Filter size={18} />
                Search Jobs
              </Button>
            </form>
            
            {/* Enhanced category filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <Button 
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={
                    selectedCategory === category 
                      ? "bg-gradient-to-r from-accent-light to-yellow-400 text-primary hover:from-accent hover:to-orange-500 border-0 shadow-lg transform hover:scale-105 transition-all duration-300" 
                      : "border-2 border-white/30 text-white hover:bg-white/20 hover:border-accent-light backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  }
                  onClick={() => setSelectedCategory(category)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Enhanced job grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <div 
                  key={job.id} 
                  className="animate-fade-in hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <JobCard {...job} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 animate-fade-in">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 max-w-md mx-auto">
                  <div className="w-24 h-24 bg-gradient-to-r from-gray-400/20 to-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">No Jobs Found</h3>
                  <p className="text-gray-300 mb-6">
                    We couldn't find any jobs matching your criteria. Try adjusting your search or filters.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-2 border-accent-light text-accent-light hover:bg-accent-light hover:text-primary transition-all duration-300 transform hover:scale-105"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced stats section */}
          <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-accent-light">{filteredJobs.length}</div>
                <div className="text-gray-300">Available Jobs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-blue-400">Instant</div>
                <div className="text-gray-300">Payments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Jobs;
