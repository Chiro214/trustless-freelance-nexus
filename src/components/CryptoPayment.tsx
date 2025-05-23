
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useWallet } from "@/context/WalletContext";
import { toast } from "sonner";
import { ethers } from "ethers";
import { ExternalLink } from "lucide-react";

interface CryptoToken {
  name: string;
  symbol: string;
  icon: string;
  chainId: number;
  contractAddress?: string;
  logoUrl?: string;
  decimals: number;
  explorerUrl: string; // Added explorer URL for each network
}

const tokens: CryptoToken[] = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: '🔹',
    logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    chainId: 1,
    decimals: 18,
    explorerUrl: 'https://etherscan.io'
  },
  {
    name: 'Polygon',
    symbol: 'MATIC',
    icon: '💠',
    logoUrl: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
    chainId: 137,
    decimals: 18,
    explorerUrl: 'https://polygonscan.com'
  },
  {
    name: 'USDT',
    symbol: 'USDT',
    icon: '💵',
    logoUrl: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    chainId: 1,
    contractAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    decimals: 6,
    explorerUrl: 'https://etherscan.io'
  },
  {
    name: 'USDC',
    symbol: 'USDC',
    icon: '💵',
    logoUrl: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    chainId: 1,
    contractAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    decimals: 6,
    explorerUrl: 'https://etherscan.io'
  },
  {
    name: 'BNB',
    symbol: 'BNB',
    icon: '🟡',
    logoUrl: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
    chainId: 56,
    decimals: 18,
    explorerUrl: 'https://bscscan.com'
  },
];

interface CryptoPaymentProps {
  amount?: string;
  recipientAddress?: string;
  onPayment?: (token: CryptoToken, txHash: string) => void;
  className?: string;
}

// Network names mapping
const networkNames: Record<number, string> = {
  1: 'Ethereum Mainnet',
  137: 'Polygon Mainnet',
  56: 'BNB Smart Chain',
};

const CryptoPayment = ({ 
  amount = "0", 
  recipientAddress = "0x742d35Cc6634C0532925a3b8D8cF93a8a8c0C6e5", // Default recipient
  onPayment, 
  className = "" 
}: CryptoPaymentProps) => {
  const [selectedToken, setSelectedToken] = useState<CryptoToken>(tokens[0]);
  const { account, connectWallet, chainId, switchNetwork } = useWallet();
  const [isProcessing, setIsProcessing] = useState(false);
  const [transactionHash, setTransactionHash] = useState<string>("");
  const [transactionStatus, setTransactionStatus] = useState<'pending' | 'confirmed' | 'failed' | null>(null);

  const handleNativeTokenPayment = async (provider: ethers.BrowserProvider, amount: string, recipientAddress: string) => {
    const signer = await provider.getSigner();
    const amountInWei = ethers.parseEther(amount);
    
    const transaction = {
      to: recipientAddress,
      value: amountInWei,
      gasLimit: 21000,
    };

    const tx = await signer.sendTransaction(transaction);
    return tx.hash;
  };

  const handleERC20Payment = async (provider: ethers.BrowserProvider, token: CryptoToken, amount: string, recipientAddress: string) => {
    if (!token.contractAddress) throw new Error("Contract address not found");
    
    const signer = await provider.getSigner();
    const amountInUnits = ethers.parseUnits(amount, token.decimals);
    
    // ERC20 ABI for transfer function
    const erc20ABI = [
      "function transfer(address to, uint256 amount) returns (bool)",
      "function balanceOf(address owner) view returns (uint256)",
      "function decimals() view returns (uint8)"
    ];
    
    const contract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
    const tx = await contract.transfer(recipientAddress, amountInUnits);
    return tx.hash;
  };

  const getExplorerUrl = (token: CryptoToken, txHash: string) => {
    return `${token.explorerUrl}/tx/${txHash}`;
  };

  const handlePayment = async () => {
    if (!account) {
      await connectWallet();
      return;
    }

    if (!window.ethereum) {
      toast.error("MetaMask not found. Please install MetaMask.");
      return;
    }

    setIsProcessing(true);
    
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();
      
      // Check if we're on the correct network
      if (Number(network.chainId) !== selectedToken.chainId) {
        toast.info(`Switching to ${networkNames[selectedToken.chainId] || `Network ${selectedToken.chainId}`}...`);
        await switchNetwork(selectedToken.chainId);
        
        // Delay to allow network switch to complete
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Check network again
        const updatedNetwork = await provider.getNetwork();
        if (Number(updatedNetwork.chainId) !== selectedToken.chainId) {
          throw new Error(`Please switch to ${networkNames[selectedToken.chainId] || `Network ${selectedToken.chainId}`} manually`);
        }
      }

      let txHash: string;

      if (selectedToken.contractAddress) {
        // ERC20 token payment
        txHash = await handleERC20Payment(provider, selectedToken, amount, recipientAddress);
      } else {
        // Native token payment (ETH, MATIC, BNB)
        txHash = await handleNativeTokenPayment(provider, amount, recipientAddress);
      }

      setTransactionHash(txHash);
      setTransactionStatus('pending');
      toast.success(`Transaction submitted! Hash: ${txHash.substring(0, 10)}...`);
      
      // Wait for transaction confirmation
      const receipt = await provider.waitForTransaction(txHash);
      
      if (receipt?.status === 1) {
        setTransactionStatus('confirmed');
        toast.success(`Payment of ${amount} ${selectedToken.symbol} completed!`);
        
        if (onPayment) {
          onPayment(selectedToken, txHash);
        }
      } else {
        setTransactionStatus('failed');
        toast.error("Transaction failed");
      }
      
    } catch (error: any) {
      console.error("Payment error:", error);
      setTransactionStatus('failed');
      
      if (error.code === 4001) {
        toast.error("Transaction rejected by user");
      } else if (error.code === -32603) {
        toast.error("Insufficient funds or gas");
      } else {
        toast.error(error.message || "Transaction failed");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Select Payment Token</label>
        <Select
          value={selectedToken.symbol}
          onValueChange={(value) => {
            const token = tokens.find(t => t.symbol === value);
            if (token) setSelectedToken(token);
          }}
        >
          <SelectTrigger className="w-full bg-gray-800 border-gray-700">
            <SelectValue placeholder="Select token" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700">
            {tokens.map((token) => (
              <SelectItem key={token.symbol} value={token.symbol}>
                <div className="flex items-center gap-2">
                  {token.logoUrl ? (
                    <img src={token.logoUrl} alt={token.name} className="w-5 h-5 rounded-full" />
                  ) : (
                    <span>{token.icon}</span>
                  )}
                  <span>{token.symbol} - {token.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {transactionHash && (
        <div className={`p-3 rounded-lg ${
          transactionStatus === 'confirmed' 
            ? 'bg-green-900/20 border border-green-700' 
            : transactionStatus === 'failed'
              ? 'bg-red-900/20 border border-red-700'
              : 'bg-blue-900/20 border border-blue-700'
        }`}>
          <div className="flex justify-between items-center">
            <p className={`text-sm ${
              transactionStatus === 'confirmed' 
                ? 'text-green-400' 
                : transactionStatus === 'failed'
                  ? 'text-red-400'
                  : 'text-blue-400'
            }`}>
              {transactionStatus === 'confirmed' 
                ? 'Transaction Confirmed' 
                : transactionStatus === 'failed'
                  ? 'Transaction Failed'
                  : 'Transaction Pending'}
            </p>
            <a 
              href={getExplorerUrl(selectedToken, transactionHash)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xs flex items-center gap-1"
            >
              View <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-gray-300 text-xs mt-1 truncate">
            {transactionHash}
          </p>
        </div>
      )}

      <Button 
        className="bg-accent-light text-primary hover:bg-accent hover:text-white"
        onClick={handlePayment}
        disabled={isProcessing}
      >
        {!account 
          ? "Connect Wallet" 
          : isProcessing 
            ? "Processing Transaction..." 
            : `Pay ${amount} ${selectedToken.symbol}`}
      </Button>
    </div>
  );
};

export default CryptoPayment;
