
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

interface CryptoToken {
  name: string;
  symbol: string;
  icon: string;
  chainId: number;
  contractAddress?: string;
  logoUrl?: string;
  decimals: number;
}

const tokens: CryptoToken[] = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: '🔹',
    logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    chainId: 1,
    decimals: 18,
  },
  {
    name: 'Polygon',
    symbol: 'MATIC',
    icon: '💠',
    logoUrl: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
    chainId: 137,
    decimals: 18,
  },
  {
    name: 'USDT',
    symbol: 'USDT',
    icon: '💵',
    logoUrl: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    chainId: 1,
    contractAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    decimals: 6,
  },
  {
    name: 'USDC',
    symbol: 'USDC',
    icon: '💵',
    logoUrl: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    chainId: 1,
    contractAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    decimals: 6,
  },
  {
    name: 'BNB',
    symbol: 'BNB',
    icon: '🟡',
    logoUrl: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
    chainId: 56,
    decimals: 18,
  },
];

interface CryptoPaymentProps {
  amount?: string;
  recipientAddress?: string;
  onPayment?: (token: CryptoToken, txHash: string) => void;
  className?: string;
}

const CryptoPayment = ({ 
  amount = "0", 
  recipientAddress = "0x742d35Cc6634C0532925a3b8D8cF93a8a8c0C6e5", // Default recipient
  onPayment, 
  className = "" 
}: CryptoPaymentProps) => {
  const [selectedToken, setSelectedToken] = useState<CryptoToken>(tokens[0]);
  const { account, connectWallet } = useWallet();
  const [isProcessing, setIsProcessing] = useState(false);
  const [transactionHash, setTransactionHash] = useState<string>("");

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
        toast.error(`Please switch to the correct network for ${selectedToken.name}`);
        setIsProcessing(false);
        return;
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
      toast.success(`Transaction submitted! Hash: ${txHash.substring(0, 10)}...`);
      
      // Wait for transaction confirmation
      const receipt = await provider.waitForTransaction(txHash);
      
      if (receipt?.status === 1) {
        toast.success(`Payment of ${amount} ${selectedToken.symbol} completed! TX: ${txHash}`);
        
        if (onPayment) {
          onPayment(selectedToken, txHash);
        }
      } else {
        toast.error("Transaction failed");
      }
      
    } catch (error: any) {
      console.error("Payment error:", error);
      
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
        <div className="p-3 bg-green-900/20 border border-green-700 rounded-lg">
          <p className="text-green-400 text-sm">
            Transaction Hash: 
            <a 
              href={`https://etherscan.io/tx/${transactionHash}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 underline hover:text-green-300"
            >
              {transactionHash.substring(0, 10)}...{transactionHash.substring(transactionHash.length - 8)}
            </a>
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
