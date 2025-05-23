
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

interface CryptoToken {
  name: string;
  symbol: string;
  icon: string;
  chainId: number;
  contractAddress?: string;
}

const tokens: CryptoToken[] = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: '🔹',
    chainId: 1,
  },
  {
    name: 'Polygon',
    symbol: 'MATIC',
    icon: '💠',
    chainId: 137,
  },
  {
    name: 'USDT',
    symbol: 'USDT',
    icon: '💵',
    chainId: 1,
    contractAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7'
  },
  {
    name: 'USDC',
    symbol: 'USDC',
    icon: '💵',
    chainId: 1,
    contractAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
  },
];

interface CryptoPaymentProps {
  amount?: string;
  onPayment?: (token: CryptoToken) => void;
  className?: string;
}

const CryptoPayment = ({ amount = "0", onPayment, className = "" }: CryptoPaymentProps) => {
  const [selectedToken, setSelectedToken] = useState<CryptoToken>(tokens[0]);
  const { account, connectWallet } = useWallet();

  const handlePayment = async () => {
    if (!account) {
      await connectWallet();
      return;
    }

    try {
      toast.success(`Payment of ${amount} ${selectedToken.symbol} initiated`);
      if (onPayment) {
        onPayment(selectedToken);
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed");
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
                  <span>{token.icon}</span>
                  <span>{token.symbol} - {token.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button 
        className="bg-accent-light text-primary hover:bg-accent hover:text-white"
        onClick={handlePayment}
      >
        {!account 
          ? "Connect Wallet" 
          : `Pay ${amount} ${selectedToken.symbol}`}
      </Button>
    </div>
  );
};

export default CryptoPayment;
