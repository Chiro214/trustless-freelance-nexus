
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/context/WalletContext";
import { useJobs } from "@/context/JobsContext";
import CryptoPayment from "./CryptoPayment";
import { toast } from "sonner";
import { ExternalLink, Users, CheckCircle, Clock, DollarSign, User } from "lucide-react";

type JobCardProps = {
  id: number;
  title: string;
  description: string;
  price: string;
  category: string;
  deadline: string;
  clientName: string;
}

const JobCard = ({
  id,
  title,
  description,
  price,
  category,
  deadline,
  clientName
}: JobCardProps) => {
  const { account } = useWallet();
  const { addApplication, completeJob, getJobApplications, isJobApplied } = useJobs();
  const [showPayment, setShowPayment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const jobApplications = getJobApplications(id);
  const isAppliedByUser = account ? isJobApplied(id, account) : false;
  const userApplication = jobApplications.find(app => 
    account && app.applicantAddress.toLowerCase() === account.toLowerCase()
  );
  const isCompleted = userApplication?.status === 'completed';
  const isClientView = account && account.toLowerCase() === clientName.toLowerCase();

  const handleApply = () => {
    if (!account) {
      toast.error("Please connect your wallet to apply on BlockLance");
      return;
    }
    if (isAppliedByUser) {
      toast.info("You have already applied for this job");
      return;
    }
    setShowPayment(true);
  };

  const handleReleasePayment = async () => {
    if (!account) {
      toast.error("Please connect your wallet to release payment on BlockLance");
      return;
    }

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      completeJob(id);
      toast.success(`Payment of $${price} released successfully on BlockLance`);
      setIsLoading(false);
    } catch (error) {
      console.error("Payment release error:", error);
      toast.error("Failed to release payment on BlockLance");
      setIsLoading(false);
    }
  };

  const handlePaymentSuccess = (token: any, txHash: string) => {
    if (account) {
      addApplication(id, account, txHash);
      setShowPayment(false);
      const shortTxHash = `${txHash.substring(0, 6)}...${txHash.substring(txHash.length - 4)}`;
      toast.success(`Application submitted on BlockLance with transaction: ${shortTxHash}`);
    }
  };

  const getExplorerUrl = (txHash: string) => {
    return `https://etherscan.io/tx/${txHash}`;
  };

  const displayClientName = clientName.startsWith('0x') 
    ? `${clientName.substring(0, 6)}...${clientName.substring(clientName.length - 4)}`
    : clientName;

  const getApplicationStatusBadge = () => {
    if (isCompleted) {
      return (
        <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">
          <CheckCircle size={14} />
          Completed
        </div>
      );
    }
    if (isAppliedByUser) {
      return (
        <div className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30">
          <CheckCircle size={14} />
          Applied
        </div>
      );
    }
    return null;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Blockchain': 'from-orange-400 to-yellow-500',
      'Web Development': 'from-blue-400 to-cyan-500',
      'Content': 'from-purple-400 to-pink-500',
      'Security': 'from-red-400 to-orange-500',
      'Design': 'from-green-400 to-teal-500',
      'Economics': 'from-indigo-400 to-purple-500',
      'Development': 'from-cyan-400 to-blue-500',
      'Marketing': 'from-pink-400 to-rose-500',
      'Writing': 'from-amber-400 to-orange-500',
    };
    return colors[category as keyof typeof colors] || 'from-gray-400 to-gray-500';
  };

  return (
    <div className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-accent-light/30 relative">
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-light/20 via-transparent to-yellow-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      <div className="p-6 relative">
        {/* Header with enhanced styling */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-accent-light transition-colors duration-300 line-clamp-2 flex-1 mr-3">
            {title}
          </h3>
          <span className={`bg-gradient-to-r ${getCategoryColor(category)} bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap border border-white/20 shadow-lg`}>
            {category}
          </span>
        </div>
        
        <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">{description}</p>
        
        {/* Enhanced pricing and deadline section */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <DollarSign className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <span className="text-green-400 font-bold text-2xl">${price}</span>
              <span className="text-gray-400 text-sm ml-1">USD</span>
            </div>
          </div>
          <div className="text-right flex items-center gap-2">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <Clock className="w-4 h-4 text-orange-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Due by:</p>
              <p className="text-white font-semibold">{deadline}</p>
            </div>
          </div>
        </div>

        {/* Enhanced applications counter and status */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 bg-blue-500/20 px-3 py-2 rounded-lg border border-blue-500/30">
            <Users size={16} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">
              {jobApplications.length} application{jobApplications.length !== 1 ? 's' : ''}
            </span>
          </div>
          {getApplicationStatusBadge()}
        </div>
        
        {/* Enhanced transaction details */}
        {userApplication && (
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl backdrop-blur-sm">
            <div className="flex justify-between items-center mb-2">
              <p className="text-blue-400 font-semibold">
                {isCompleted ? '✅ Job Completed' : '🔄 Application Submitted'}
              </p>
              <a 
                href={getExplorerUrl(userApplication.txHash)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1 hover:scale-105 transition-all duration-200"
              >
                View Transaction <ExternalLink size={12} />
              </a>
            </div>
            <p className="text-gray-300 text-xs font-mono bg-black/20 px-2 py-1 rounded truncate">
              {userApplication.txHash}
            </p>
          </div>
        )}
        
        {/* Enhanced footer */}
        <div className="flex justify-between items-center border-t border-white/20 pt-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <User className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Posted by:</p>
              <p className="text-white font-semibold text-sm">{displayClientName}</p>
            </div>
          </div>
          
          {showPayment ? (
            <CryptoPayment 
              usdAmount={price}
              recipientAddress={clientName}
              onPayment={handlePaymentSuccess}
            />
          ) : isClientView && jobApplications.length > 0 && !isCompleted ? (
            <Button 
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={handleReleasePayment}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Processing...
                </div>
              ) : (
                "Release Payment"
              )}
            </Button>
          ) : isCompleted ? (
            <div className="flex items-center text-green-400 bg-green-500/20 px-4 py-2 rounded-lg border border-green-500/30">
              <CheckCircle className="h-5 w-5 mr-2" />
              Completed
            </div>
          ) : isAppliedByUser ? (
            <div className="flex items-center text-blue-400 bg-blue-500/20 px-4 py-2 rounded-lg border border-blue-500/30">
              <CheckCircle className="h-5 w-5 mr-2" />
              Applied
            </div>
          ) : (
            <Button 
              className="bg-gradient-to-r from-accent-light to-yellow-400 text-primary hover:from-accent hover:to-orange-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
              onClick={handleApply}
              disabled={!account}
            >
              Apply Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
