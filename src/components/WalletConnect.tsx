
import { useWallet } from "@/context/WalletContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Wallet, Loader2, ChevronDown, AlertTriangle } from "lucide-react";

type WalletConnectProps = {
  variant?: "default" | "outline";
  className?: string;
};

const WalletConnect = ({ variant = "default", className = "" }: WalletConnectProps) => {
  const { account, allAccounts, connectWallet, disconnectWallet, switchAccount, isConnecting, chainId } = useWallet();

  const handleWalletAction = () => {
    if (account) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  };
  
  const displayAddress = (address: string) => 
    `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;

  // Map chainIds to network names (excluding mainnet)
  const getNetworkName = () => {
    if (!chainId) return null;
    
    const networks: Record<number, string> = {
      11155111: "Sepolia", // Ethereum testnet
      137: "MATIC",
      80001: "Mumbai", // Polygon testnet
      56: "BSC",
      97: "BSC Testnet",
      10: "OP",
      420: "OP Goerli", // Optimism testnet
      42161: "ARB",
      421613: "ARB Goerli", // Arbitrum testnet
      43114: "AVAX",
      43113: "Fuji" // Avalanche testnet
    };
    
    return networks[chainId] || `Chain ${chainId}`;
  };

  const networkName = getNetworkName();
  
  // Check if on mainnet
  const isMainnet = chainId === 1;

  // If connected and multiple accounts available, show dropdown
  if (account && allAccounts.length > 1) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={variant}
            className={className}
          >
            <span className="flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              <span>
                {displayAddress(account)}
                {networkName && (
                  <span className="ml-1 text-xs opacity-75">({networkName})</span>
                )}
              </span>
              <ChevronDown className="h-3 w-3" />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="px-2 py-1.5 text-sm font-semibold">
            Select Account ({allAccounts.length})
          </div>
          <DropdownMenuSeparator />
          {allAccounts.map((accountAddress, index) => (
            <DropdownMenuItem
              key={accountAddress}
              onClick={() => switchAccount(accountAddress)}
              className={`cursor-pointer ${account === accountAddress ? 'bg-accent' : ''}`}
            >
              <div className="flex flex-col gap-1">
                <span className="font-mono text-sm">
                  {displayAddress(accountAddress)}
                </span>
                <span className="text-xs text-muted-foreground">
                  Account {index + 1}
                  {account === accountAddress && " (Current)"}
                </span>
              </div>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={disconnectWallet} className="cursor-pointer text-red-600">
            Disconnect Wallet
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Show warning if on mainnet
  if (isMainnet) {
    return (
      <Button
        variant="destructive"
        className={className}
        onClick={disconnectWallet}
      >
        <span className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          Mainnet Detected - Disconnect
        </span>
      </Button>
    );
  }

  // Default single account or not connected state
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
              {displayAddress(account)}
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
