import { useState, useEffect } from "react";
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
  explorerUrl: string;
  coingeckoId: string;
}

const tokens: CryptoToken[] = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: '🔹',
    logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    chainId: 1,
    decimals: 18,
    explorerUrl: 'https://etherscan.io',
    coingeckoId: 'ethereum'
  },
  {
    name: 'Polygon',
    symbol: 'MATIC',
    icon: '💠',
    logoUrl: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
    chainId: 137,
    decimals: 18,
    explorerUrl: 'https://polygonscan.com',
    coingeckoId: 'matic-network'
  },
  {
    name: 'USDT',
    symbol: 'USDT',
    icon: '💵',
    logoUrl: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    chainId: 1,
    contractAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    decimals: 6,
    explorerUrl: 'https://etherscan.io',
    coingeckoId: 'tether'
  },
  {
    name: 'USDC',
    symbol: 'USDC',
    icon: '💵',
    logoUrl: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    chainId: 1,
    contractAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    decimals: 6,
    explorerUrl: 'https://etherscan.io',
    coingeckoId: 'usd-coin'
  },
  {
    name: 'BNB',
    symbol: 'BNB',
    icon: '🟡',
    logoUrl: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
    chainId: 56,
    decimals: 18,
    explorerUrl: 'https://bscscan.com',
    coingeckoId: 'binancecoin'
  },
];

interface TokenPrice {
  usd: number;
}

interface CryptoPaymentProps {
  usdAmount?: string; // Changed to USD amount as base
  recipientAddress?: string;
  onPayment?: (token: CryptoToken, txHash: string) => void;
  className?: string;
}

const networkNames: Record<number, string> = {
  1: 'Ethereum Mainnet',
  137: 'Polygon Mainnet',
  56: 'BNB Smart Chain',
};

const CryptoPayment = ({ 
  usdAmount = "100", // Default USD amount
  recipientAddress = "0x742d35Cc6634C0532925a3b8D8cF93a8a8c0C6e5",
  onPayment, 
  className = "" 
}: CryptoPaymentProps) => {
  const [selectedToken, setSelectedToken] = useState<CryptoToken>(tokens[0]);
  const { account, connectWallet, chainId, switchNetwork } = useWallet();
  const [isProcessing, setIsProcessing] = useState(false);
  const [transactionHash, setTransactionHash] = useState<string>("");
  const [transactionStatus, setTransactionStatus] = useState<'pending' | 'confirmed' | 'failed' | null>(null);
  const [tokenPrices, setTokenPrices] = useState<Record<string, TokenPrice>>({});
  const [isLoadingPrice, setIsLoadingPrice] = useState(false);
  const [calculatedAmount, setCalculatedAmount] = useState<string>("0");

  // Fetch token prices from CoinGecko
  const fetchTokenPrices = async () => {
    setIsLoadingPrice(true);
    try {
      const coinIds = tokens.map(token => token.coingeckoId).join(',');
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=usd`
      );
      const data = await response.json();
      setTokenPrices(data);
    } catch (error) {
      console.error('Error fetching token prices:', error);
      toast.error('Failed to fetch current token prices');
    } finally {
      setIsLoadingPrice(false);
    }
  };

  // Calculate token amount based on USD value
  const calculateTokenAmount = (usdValue: string, tokenPrice: number) => {
    if (!tokenPrice || !usdValue) return "0";
    const amount = parseFloat(usdValue) / tokenPrice;
    return amount.toFixed(6);
  };

  // Update calculated amount when token or prices change
  useEffect(() => {
    if (tokenPrices[selectedToken.coingeckoId]) {
      const amount = calculateTokenAmount(usdAmount, tokenPrices[selectedToken.coingeckoId].usd);
      setCalculatedAmount(amount);
    }
  }, [selectedToken, tokenPrices, usdAmount]);

  // Fetch prices on component mount
  useEffect(() => {
    fetchTokenPrices();
  }, []);

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
      
      if (Number(network.chainId) !== selectedToken.chainId) {
        toast.info(`Switching to ${networkNames[selectedToken.chainId] || `Network ${selectedToken.chainId}`}...`);
        await switchNetwork(selectedToken.chainId);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const updatedNetwork = await provider.getNetwork();
        if (Number(updatedNetwork.chainId) !== selectedToken.chainId) {
          throw new Error(`Please switch to ${networkNames[selectedToken.chainId] || `Network ${selectedToken.chainId}`} manually`);
        }
      }

      let txHash: string;

      if (selectedToken.contractAddress) {
        txHash = await handleERC20Payment(provider, selectedToken, calculatedAmount, recipientAddress);
      } else {
        txHash = await handleNativeTokenPayment(provider, calculatedAmount, recipientAddress);
      }

      setTransactionHash(txHash);
      setTransactionStatus('pending');
      toast.success(`Transaction submitted! Hash: ${txHash.substring(0, 10)}...`);
      
      const receipt = await provider.waitForTransaction(txHash);
      
      if (receipt?.status === 1) {
        setTransactionStatus('confirmed');
        toast.success(`Payment of ${calculatedAmount} ${selectedToken.symbol} completed!`);
        
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
                  {tokenPrices[token.coingeckoId] && (
                    <span className="text-xs text-gray-400 ml-2">
                      ${tokenPrices[token.coingeckoId].usd}
                    </span>
                  )}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="bg-gray-800/50 p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">USD Amount:</span>
          <span className="text-white font-medium">${usdAmount}</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-sm text-gray-400">Token Amount:</span>
          <span className="text-accent-light font-medium">
            {isLoadingPrice ? (
              "Loading..."
            ) : (
              `${calculatedAmount} ${selectedToken.symbol}`
            )}
          </span>
        </div>
        {tokenPrices[selectedToken.coingeckoId] && (
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-gray-500">Current Price:</span>
            <span className="text-xs text-gray-400">
              ${tokenPrices[selectedToken.coingeckoId].usd}
            </span>
          </div>
        )}
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
        disabled={isProcessing || isLoadingPrice}
      >
        {!account 
          ? "Connect Wallet" 
          : isProcessing 
            ? "Processing Transaction..." 
            : isLoadingPrice
              ? "Loading Prices..."
              : `Pay ${calculatedAmount} ${selectedToken.symbol} ($${usdAmount})`}
      </Button>
    </div>
  );
};

export default CryptoPayment;
