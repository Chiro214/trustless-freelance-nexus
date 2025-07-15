import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/context/WalletContext";
import { useAuth } from "@/hooks/useAuth";
import { useProposals } from "@/hooks/useProposals";
import CryptoPayment from "./CryptoPayment";
import { toast } from "sonner";
import { ExternalLink, Users, CheckCircle, Clock, DollarSign, User } from "lucide-react";

// Add the onApply prop to JobCardProps
type JobCardProps = {
  id: number;
  title: string;
  description: string;
  price: string;
  category: string;
  deadline: string;
  clientName: string;
  onApply?: () => void; 
};

const JobCard = ({
  id,
  title,
  description,
  price,
  category,
  deadline,
  clientName,
  onApply,
}: JobCardProps) => {
  const { account } = useWallet();
  const { user } = useAuth();
  const { proposals, createProposal, loading: proposalLoading } = useProposals();
  const [showPayment, setShowPayment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check if user has already applied to this job
  const userProposals = proposals.filter(p => 
    p.job_id === id.toString() && p.freelancer_id === user?.id
  );
  const hasApplied = userProposals.length > 0;
  const userProposal = userProposals[0];
  const isCompleted = userProposal?.status === 'accepted';
  const isClientView = false; // We'll implement this when we have real job data

  const handleApply = async () => {
    if (!account) {
      toast.error("Please connect your wallet to apply");
      return;
    }

    if (hasApplied) {
      toast.info("You have already applied for this job");
      return;
    }

    setIsLoading(true);

    try {
      const proposalData = {
        job_id: id.toString(),
        proposed_rate: parseFloat(price),
        cover_letter: `I am interested in working on this ${category.toLowerCase()} project: ${title}`,
        estimated_duration: deadline
      };

      const result = await createProposal(proposalData);

      if (result) {
        toast.success("Application submitted successfully!");
      }
    } catch (error) {
      console.error("Error applying to job:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  const handleReleasePayment = async () => {
    if (!account) {
      toast.error("Please connect your wallet to release payment");
      return;
    }

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // This would be implemented when we have real client/job ownership
      toast.success(`Payment of $${price} released successfully`);
      setIsLoading(false);
    } catch (error) {
      console.error("Payment release error:", error);
      toast.error("Failed to release payment");
      setIsLoading(false);
    }
  };

  const handlePaymentSuccess = (token: any, txHash: string) => {
    // This is now handled in the handleApply function
    setShowPayment(false);
    const shortTxHash = `${txHash.substring(0, 6)}...${txHash.substring(txHash.length - 4)}`;
    toast.success(`Application submitted with transaction: ${shortTxHash}`);
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
    if (hasApplied) {
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
              {userProposals.length} proposal{userProposals.length !== 1 ? 's' : ''}
            </span>
          </div>
          {getApplicationStatusBadge()}
        </div>
        
        {/* Enhanced transaction details */}
        {userProposal && (
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl backdrop-blur-sm">
            <div className="flex justify-between items-center mb-2">
              <p className="text-blue-400 font-semibold">
                {isCompleted ? '✅ Proposal Accepted' : '🔄 Proposal Submitted'}
              </p>
            </div>
            <p className="text-gray-300 text-xs">
              Status: {userProposal.status} • Rate: ${userProposal.proposed_rate}
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
          ) : isClientView && userProposals.length > 0 && !isCompleted ? (
            <Button 
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={handleReleasePayment}
              disabled={isLoading || proposalLoading}
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
          ) : hasApplied ? (
            <div className="flex items-center text-blue-400 bg-blue-500/20 px-4 py-2 rounded-lg border border-blue-500/30">
              <CheckCircle className="h-5 w-5 mr-2" />
              Applied
            </div>
          ) : (
            <Button 
              className="bg-gradient-to-r from-accent-light to-yellow-400 text-primary hover:from-accent hover:to-orange-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
              onClick={onApply ? onApply : handleApply}
              disabled={!account || isLoading || proposalLoading} // Only require wallet connection
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                  Applying...
                </div>
              ) : (
                "Apply Now"
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;