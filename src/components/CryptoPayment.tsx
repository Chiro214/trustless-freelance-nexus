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

// Local development networks (Ganache, Hardhat, etc.)
const LOCAL_NETWORKS = [1337, 5777, 31337];

const tokens: CryptoToken[] = [
  // Local development ETH (for Ganache/Hardhat)
  {
    name: 'Local Ethereum',
    symbol: 'ETH',
    icon: '🔷',
    logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    chainId: 1337, // Ganache default
    decimals: 18,
    explorerUrl: 'http://localhost:7545', // Ganache GUI explorer
    coingeckoId: 'ethereum'
  },
  {
    name: 'Local Ethereum',
    symbol: 'ETH',
    icon: '🔷',
    logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    chainId: 5777, // Alternative Ganache port
    decimals: 18,
    explorerUrl: 'http://localhost:8545', 
    coingeckoId: 'ethereum'
  },
  {
    name: 'Ethereum Sepolia',
    symbol: 'ETH',
    icon: '🔹',
    logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    chainId: 11155111,
    decimals: 18,
    explorerUrl: 'https://sepolia.etherscan.io',
    coingeckoId: 'ethereum'
  },
  {
    name: 'Polygon Mumbai',
    symbol: 'MATIC',
    icon: '💠',
    logoUrl: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
    chainId: 80001,
    decimals: 18,
    explorerUrl: 'https://mumbai.polygonscan.com',
    coingeckoId: 'matic-network'
  }
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
  1337: 'Ganache Local',
  5777: 'Ganache Local', 
  31337: 'Hardhat Local',
  11155111: 'Ethereum Sepolia',
  80001: 'Polygon Mumbai',
};

const CryptoPayment = ({ 
  usdAmount = "100", // Default USD amount
  recipientAddress = "0xF1Fe21C38525cBf286736aa983dcf36Bc228bBD9",
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

  // Check if current network is local
  const isLocalNetwork = (networkId: number) => {
    return LOCAL_NETWORKS.includes(networkId);
  };

  // Get available tokens for current network
  const getAvailableTokens = () => {
    if (!chainId) return tokens;
    return tokens.filter(token => token.chainId === chainId);
  };

  // Update selected token when network changes
  useEffect(() => {
    if (chainId) {
      const availableTokens = getAvailableTokens();
      if (availableTokens.length > 0 && !availableTokens.some(t => t.symbol === selectedToken.symbol && t.chainId === chainId)) {
        setSelectedToken(availableTokens[0]);
      }
    }
  }, [chainId]);

  // Fetch token prices from CoinGecko (skip for local networks)
  const fetchTokenPrices = async () => {
    if (chainId && isLocalNetwork(chainId)) {
      // For local networks, use mock prices
      setTokenPrices({
        'ethereum': { usd: 2000 }, // Mock ETH price
        'matic-network': { usd: 0.8 } // Mock MATIC price
      });
      return;
    }

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
      // Use fallback prices for local development
      setTokenPrices({
        'ethereum': { usd: 2000 },
        'matic-network': { usd: 0.8 }
      });
      if (!chainId || !isLocalNetwork(chainId)) {
        toast.error('Failed to fetch current token prices, using fallback values');
      }
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
  }, [chainId]);

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
    if (chainId && isLocalNetwork(chainId)) {
      // For local networks, just return the transaction hash (no explorer)
      return `#${txHash}`;
    }
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
      const currentChainId = Number(network.chainId);
      
      // Check if we need to switch networks (only if not on local network)
      if (currentChainId !== selectedToken.chainId) {
        if (isLocalNetwork(currentChainId) && isLocalNetwork(selectedToken.chainId)) {
          // If both are local networks, proceed without switching
          console.log('Both networks are local, proceeding with current network');
        } else if (!isLocalNetwork(currentChainId)) {
          toast.info(`Switching to ${networkNames[selectedToken.chainId] || `Network ${selectedToken.chainId}`}...`);
          await switchNetwork(selectedToken.chainId);
          
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const updatedNetwork = await provider.getNetwork();
          if (Number(updatedNetwork.chainId) !== selectedToken.chainId) {
            throw new Error(`Please switch to ${networkNames[selectedToken.chainId] || `Network ${selectedToken.chainId}`} manually`);
          }
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
      
      if (chainId && isLocalNetwork(chainId)) {
        toast.success(`Transaction submitted on local network! Hash: ${txHash.substring(0, 10)}...`);
      } else {
        toast.success(`Transaction submitted! Hash: ${txHash.substring(0, 10)}...`);
      }
      
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

  const availableTokens = getAvailableTokens();

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Select Payment Token</label>
        <Select
          value={selectedToken.symbol}
          onValueChange={(value) => {
            const token = availableTokens.find(t => t.symbol === value);
            if (token) setSelectedToken(token);
          }}
        >
          <SelectTrigger className="w-full bg-gray-800 border-gray-700">
            <SelectValue placeholder="Select token" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700">
            {availableTokens.map((token) => (
              <SelectItem key={`${token.symbol}-${token.chainId}`} value={token.symbol}>
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
                      {chainId && isLocalNetwork(chainId) && (
                        <span className="text-xs text-blue-400 ml-1">(Mock)</span>
                      )}
                    </span>
                  )}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {chainId && isLocalNetwork(chainId) && (
        <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-3">
          <p className="text-blue-400 text-sm">
            🧪 Local Development Network Detected ({networkNames[chainId]})
          </p>
          <p className="text-blue-300 text-xs mt-1">
            Using mock prices for testing. Make sure you have sufficient test ETH in your account.
          </p>
        </div>
      )}

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
            {!(chainId && isLocalNetwork(chainId)) && (
              <a 
                href={getExplorerUrl(selectedToken, transactionHash)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xs flex items-center gap-1"
              >
                View <ExternalLink size={12} />
              </a>
            )}
          </div>
          <p className="text-gray-300 text-xs mt-1 truncate">
            {transactionHash}
          </p>
        </div>
      )}

      <Button 
        className="bg-accent-light text-primary hover:bg-accent hover:text-white"
        onClick={handlePayment}
        disabled={isProcessing || isLoadingPrice || availableTokens.length === 0}
      >
        {!account 
          ? "Connect Wallet" 
          : isProcessing 
            ? "Processing Transaction..." 
            : isLoadingPrice
              ? "Loading Prices..."
              : availableTokens.length === 0
                ? "No tokens available for this network"
                : `Pay ${calculatedAmount} ${selectedToken.symbol} ($${usdAmount})`}
      </Button>
    </div>
  );
};

export default CryptoPayment;
