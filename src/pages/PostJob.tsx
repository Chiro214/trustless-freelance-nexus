import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Calendar, Tag, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useWallet } from "@/context/WalletContext";
import { useJobs } from "@/context/JobsContext";
import { useCreativeToast } from "@/hooks/use-creative-toast";

const PostJob = () => {
  const { account } = useWallet();
  const { addPostedJob, postedJobs } = useJobs();
  const { showToast } = useCreativeToast();
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    deadline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track withdrawn jobs by index
  const [withdrawnJobs, setWithdrawnJobs] = useState<number[]>([]);

  const categories = [
    "blockchain",
    "web-development", 
    "mobile-development",
    "design",
    "content-writing",
    "marketing",
    "data-analysis",
    "cybersecurity"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!account) {
      showToast({
        type: 'warning',
        title: 'Wallet Required',
        description: 'Please connect your wallet to post a job'
      });
      return;
    }

    if (!formData.title || !formData.description || !formData.category || !formData.budget || !formData.deadline) {
      showToast({
        type: 'error',
        title: 'Missing Information',
        description: 'Please fill in all fields'
      });
      return;
    }

    if (isNaN(Number(formData.budget)) || Number(formData.budget) <= 0) {
      showToast({
        type: 'error',
        title: 'Invalid Budget',
        description: 'Please enter a valid budget amount'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate blockchain transaction
      await new Promise(resolve => setTimeout(resolve, 2000));

      addPostedJob({
        title: formData.title,
        description: formData.description,
        category: formData.category,
        budget: formData.budget + " ETH",
        deadline: formData.deadline,
        clientAddress: account
      });

      showToast({
        type: 'success',
        title: 'Job Posted Successfully! 🎉',
        description: 'Your job is now live and visible to freelancers'
      });

      // Reset form
      setFormData({
        title: "",
        description: "",
        category: "",
        budget: "",
        deadline: ""
      });

    } catch (error) {
      console.error("Error posting job:", error);
      showToast({
        type: 'error',
        title: 'Posting Failed',
        description: 'Please try again'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWithdrawJob = (jobIndex: number) => {
    setWithdrawnJobs(prev => [...prev, jobIndex]);
    // Optionally, you can implement job removal logic in the context if needed.
    // For now, just mark the job as withdrawn locally.
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Add extra top padding to prevent overlap with the navbar/dashboard */}
      <div className="pt-40 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Post a <span className="text-accent-light">Job</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Create a new job posting and connect with talented freelancers on the blockchain.
            </p>
          </div
          >
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Job Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white mb-2 font-medium">Job Title</label>
                  <Input
                    name="title"
                    placeholder="e.g., Smart Contract Developer"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">Description</label>
                  <Textarea
                    name="description"
                    placeholder="Describe the job requirements, skills needed, and project details..."
                    className="bg-white/10 border-white/20 text-white min-h-[120px] placeholder:text-gray-400"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      <Tag className="w-4 h-4 inline mr-1" />
                      Category
                    </label>
                    <Select value={formData.category} onValueChange={(value) => handleSelectChange('category', value)}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>
                            {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-medium">
                      <DollarSign className="w-4 h-4 inline mr-1" />
                      Budget (ETH)
                    </label>
                    <Input
                      name="budget"
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="1.5"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-medium">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Deadline
                    </label>
                    <Input
                      name="deadline"
                      placeholder="e.g., 7 days"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !account}
                    className={`w-full font-semibold py-6 text-lg
                      ${isSubmitting || !account
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-white text-black hover:text-white border-2 border-white transition-all duration-300 shadow-lg"
                      }`}
                  >
                    {isSubmitting
                      ? "Posting Job..."
                      : !account
                      ? "Connect Wallet to Post"
                      : "Post Job"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">Posted Jobs</h2>
            <div className="space-y-4">
              {postedJobs.length === 0 ? (
                <p className="text-gray-400">No jobs posted yet.</p>
              ) : (
                postedJobs.map((job, idx) => {
                  const isWithdrawn = withdrawnJobs.includes(idx);
                  return (
                    <div key={job.title + job.deadline} className="p-4 bg-white/10 rounded-lg border border-white/20 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                        <p className="text-gray-300">{job.description}</p>
                        <div className="flex flex-wrap gap-4 mt-2">
                          <span className="text-sm bg-accent-light text-white bold rounded-full px-3 py-1">{job.category}</span>
                          <span className="text-sm bg-accent-light text-white bold rounded-full px-3 py-1">{job.budget}</span>
                          <span className="text-sm bg-accent-light text-white bold rounded-full px-3 py-1">{job.deadline}</span>
                        </div>
                      </div>
                      <button
                        className={`ml-6 flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200
                          ${isWithdrawn ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 text-white"}`}
                        disabled={isWithdrawn}
                        onClick={() => handleWithdrawJob(idx)}
                        title="Withdraw Job"
                      >
                        <XCircle className="w-5 h-5" />
                        {isWithdrawn ? "Withdrawn" : "Withdraw"}
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PostJob;
