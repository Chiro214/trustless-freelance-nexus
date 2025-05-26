
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/context/WalletContext";
import { useJobs } from "@/context/JobsContext";
import CryptoPayment from "./CryptoPayment";
import { toast } from "sonner";
import { ExternalLink, Users, CheckCircle } from "lucide-react";

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
        <div className="flex items-center gap-1 text-green-400 text-sm">
          <CheckCircle size={16} />
          Completed
        </div>
      );
    }
    if (isAppliedByUser) {
      return (
        <div className="flex items-center gap-1 text-blue-400 text-sm">
          <CheckCircle size={16} />
          Applied
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className="bg-accent-light bg-opacity-20 text-accent-light px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-accent-light font-bold text-xl">${price}</span>
            <span className="text-gray-400 text-sm ml-1">USD</span>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm">Due by:</p>
            <p className="text-white font-medium">{deadline}</p>
          </div>
        </div>

        {/* Applications counter and status */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Users size={16} />
            <span>{jobApplications.length} application{jobApplications.length !== 1 ? 's' : ''}</span>
          </div>
          {getApplicationStatusBadge()}
        </div>
        
        {userApplication && (
          <div className="mb-4 p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
            <div className="flex justify-between items-center">
              <p className="text-blue-400 text-sm">
                {isCompleted ? 'Job Completed' : 'Application Submitted'}
              </p>
              <a 
                href={getExplorerUrl(userApplication.txHash)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1"
              >
                View Transaction <ExternalLink size={12} />
              </a>
            </div>
            <p className="text-gray-300 text-xs mt-1 truncate">
              {userApplication.txHash}
            </p>
          </div>
        )}
        
        <div className="flex justify-between items-center border-t border-gray-700 pt-4">
          <div>
            <p className="text-gray-400 text-sm">Posted by:</p>
            <p className="text-white font-medium">{displayClientName}</p>
          </div>
          
          {showPayment ? (
            <CryptoPayment 
              usdAmount={price}
              recipientAddress={clientName}
              onPayment={handlePaymentSuccess}
            />
          ) : isClientView && jobApplications.length > 0 && !isCompleted ? (
            <Button 
              className="bg-accent-light text-primary hover:bg-accent hover:text-white"
              onClick={handleReleasePayment}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Release Payment"}
            </Button>
          ) : isCompleted ? (
            <div className="flex items-center text-green-400">
              <CheckCircle className="h-5 w-5 mr-1" />
              Completed
            </div>
          ) : isAppliedByUser ? (
            <div className="flex items-center text-blue-400">
              <CheckCircle className="h-5 w-5 mr-1" />
              Applied
            </div>
          ) : (
            <Button 
              className="bg-accent-light text-primary hover:bg-accent hover:text-white"
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
