
import { useWallet } from "@/context/WalletContext";
import { Button } from "@/components/ui/button";
import { Wallet, Loader2 } from "lucide-react";

type WalletConnectProps = {
  variant?: "default" | "outline";
  className?: string;
};

const WalletConnect = ({ variant = "default", className = "" }: WalletConnectProps) => {
  const { account, connectWallet, disconnectWallet, isConnecting, chainId } = useWallet();

  const handleWalletAction = () => {
    if (account) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  };
  
  const displayAddress = account 
    ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
    : "Connect Wallet";

  // Map chainIds to network names
  const getNetworkName = () => {
    if (!chainId) return null;
    
    const networks: Record<number, string> = {
      1: "ETH",
      137: "MATIC",
      56: "BSC",
      10: "OP",
      42161: "ARB",
      43114: "AVAX"
    };
    
    return networks[chainId] || `Chain ${chainId}`;
  };

  const networkName = getNetworkName();

  return (
    <Button
      variant={variant}
      className={className}
      onClick={handleWalletAction}
      disabled={isConnecting}
    >
      {isConnecting ? (
        <span className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          Connecting...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <Wallet className="h-4 w-4" />
          {account ? (
            <span>
              {displayAddress}
              {networkName && (
                <span className="ml-1 text-xs opacity-75">({networkName})</span>
              )}
            </span>
          ) : (
            "Connect Wallet"
          )}
        </span>
      )}
    </Button>
  );
};

export default WalletConnect;
