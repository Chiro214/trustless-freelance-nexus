import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/context/WalletContext";
import CryptoPayment from "./CryptoPayment";
import { toast } from "sonner";

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
  const [showPayment, setShowPayment] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [applicationTxHash, setApplicationTxHash] = useState<string>("");

  const handleApply = () => {
    if (!account) {
      toast.error("Please connect your wallet first");
      return;
    }
    setShowPayment(true);
  };

  const handleReleasePayment = async () => {
    if (!account) {
      toast.error("Please connect your wallet first");
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate contract interaction for escrow release
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success(`Payment of ${price} ETH released successfully`);
      setIsCompleted(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Payment release error:", error);
      toast.error("Failed to release payment");
      setIsLoading(false);
    }
  };

  const handlePaymentSuccess = (token: any, txHash: string) => {
    setApplicationTxHash(txHash);
    setShowPayment(false);
    toast.success(`Application submitted with transaction: ${txHash.substring(0, 10)}...`);
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
        
        <div className="flex justify-between items-center mb-5">
          <div>
            <span className="text-accent-light font-bold text-xl">{price}</span>
            <span className="text-gray-400 text-sm ml-1">ETH</span>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm">Due by:</p>
            <p className="text-white font-medium">{deadline}</p>
          </div>
        </div>
        
        {applicationTxHash && (
          <div className="mb-4 p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
            <p className="text-blue-400 text-sm">
              Application TX: 
              <a 
                href={`https://etherscan.io/tx/${applicationTxHash}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 underline hover:text-blue-300"
              >
                {applicationTxHash.substring(0, 10)}...{applicationTxHash.substring(applicationTxHash.length - 8)}
              </a>
            </p>
          </div>
        )}
        
        <div className="flex justify-between items-center border-t border-gray-700 pt-4">
          <div>
            <p className="text-gray-400 text-sm">Posted by:</p>
            <p className="text-white font-medium">{clientName}</p>
          </div>
          
          {isCompleted ? (
            <div className="flex items-center text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Completed
            </div>
          ) : showPayment ? (
            <CryptoPayment 
              amount={price} 
              recipientAddress={clientName} // Using clientName as recipient address
              onPayment={handlePaymentSuccess}
            />
          ) : account && account.toLowerCase() === clientName.toLowerCase() ? (
            <Button 
              className="bg-accent-light text-primary hover:bg-accent hover:text-white"
              onClick={handleReleasePayment}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Release Payment"}
            </Button>
          ) : (
            <Button 
              className="bg-accent-light text-primary hover:bg-accent hover:text-white"
              onClick={handleApply}
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
