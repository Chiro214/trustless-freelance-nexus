
import { useWallet } from "@/context/WalletContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Wallet, Loader2, ChevronDown, Network, ExternalLink } from "lucide-react";

type WalletConnectProps = {
  variant?: "default" | "outline";
  className?: string;
};

const WalletConnect = ({ variant = "default", className = "" }: WalletConnectProps) => {
  const { 
    account, 
    allAccounts, 
    connectWallet, 
    disconnectWallet, 
    switchAccount, 
    switchNetwork,
    isConnecting, 
    currentNetwork,
    supportedNetworks 
  } = useWallet();

  const handleWalletAction = () => {
    if (account) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  };
  
  const displayAddress = (address: string) => 
    `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;

  // Group networks by category
  const groupedNetworks = supportedNetworks.reduce((acc, network) => {
    if (!acc[network.category]) {
      acc[network.category] = [];
    }
    acc[network.category].push(network);
    return acc;
  }, {} as Record<string, typeof supportedNetworks>);

  // If connected, show comprehensive dropdown
  if (account) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={variant} className={className}>
            <div className="flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">
                  {displayAddress(account)}
                </span>
                {currentNetwork && (
                  <span className="text-xs opacity-75 flex items-center gap-1">
                    <span>{currentNetwork.icon}</span>
                    {currentNetwork.displayName}
                  </span>
                )}
              </div>
              <ChevronDown className="h-3 w-3" />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80">
          {/* Account Selection */}
          {allAccounts.length > 1 && (
            <>
              <DropdownMenuLabel>
                Switch Account ({allAccounts.length} available)
              </DropdownMenuLabel>
              <DropdownMenuGroup>
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
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
            </>
          )}

          {/* Network Selection */}
          <DropdownMenuLabel className="flex items-center gap-2">
            <Network className="h-4 w-4" />
            Switch Network
          </DropdownMenuLabel>
          
          {/* Mainnet Networks */}
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-xs font-normal text-muted-foreground px-2">
              Mainnet
            </DropdownMenuLabel>
            {groupedNetworks.mainnet?.map((network) => (
              <DropdownMenuItem
                key={network.chainId}
                onClick={() => switchNetwork(network.chainId)}
                className={`cursor-pointer ${currentNetwork?.chainId === network.chainId ? 'bg-accent' : ''}`}
              >
                <div className="flex items-center gap-2 w-full">
                  <span className="text-base">{network.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{network.displayName}</div>
                    <div className="text-xs text-muted-foreground">{network.nativeCurrency.symbol}</div>
                  </div>
                  {currentNetwork?.chainId === network.chainId && (
                    <span className="text-xs text-green-500">Connected</span>
                  )}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          {/* Testnet Networks */}
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-xs font-normal text-muted-foreground px-2">
              Testnet (Recommended for Testing)
            </DropdownMenuLabel>
            {groupedNetworks.testnet?.map((network) => (
              <DropdownMenuItem
                key={network.chainId}
                onClick={() => switchNetwork(network.chainId)}
                className={`cursor-pointer ${currentNetwork?.chainId === network.chainId ? 'bg-accent' : ''}`}
              >
                <div className="flex items-center gap-2 w-full">
                  <span className="text-base">{network.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{network.displayName}</div>
                    <div className="text-xs text-muted-foreground">{network.nativeCurrency.symbol}</div>
                  </div>
                  {currentNetwork?.chainId === network.chainId && (
                    <span className="text-xs text-green-500">Connected</span>
                  )}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          {/* Local Development Networks */}
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-xs font-normal text-muted-foreground px-2">
              Local Development
            </DropdownMenuLabel>
            {groupedNetworks.local?.map((network) => (
              <DropdownMenuItem
                key={network.chainId}
                onClick={() => switchNetwork(network.chainId)}
                className={`cursor-pointer ${currentNetwork?.chainId === network.chainId ? 'bg-accent' : ''}`}
              >
                <div className="flex items-center gap-2 w-full">
                  <span className="text-base">{network.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{network.displayName}</div>
                    <div className="text-xs text-muted-foreground">{network.nativeCurrency.symbol}</div>
                  </div>
                  {currentNetwork?.chainId === network.chainId && (
                    <span className="text-xs text-green-500">Connected</span>
                  )}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          {/* Current Network Info */}
          {currentNetwork && (
            <>
              <DropdownMenuLabel className="text-xs font-normal text-muted-foreground px-2">
                Current Network Info
              </DropdownMenuLabel>
              <div className="px-3 py-2 text-xs">
                <div className="flex justify-between">
                  <span>Network:</span>
                  <span className="font-medium">{currentNetwork.displayName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Chain ID:</span>
                  <span className="font-mono">{currentNetwork.chainId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Currency:</span>
                  <span>{currentNetwork.nativeCurrency.symbol}</span>
                </div>
                {currentNetwork.blockExplorerUrls[0] && (
                  <a 
                    href={currentNetwork.blockExplorerUrls[0]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-500 hover:text-blue-600 mt-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    View Explorer
                  </a>
                )}
              </div>
              <DropdownMenuSeparator />
            </>
          )}

          {/* Disconnect */}
          <DropdownMenuItem 
            onClick={disconnectWallet} 
            className="cursor-pointer text-red-600 hover:text-red-700"
          >
            <Wallet className="h-4 w-4 mr-2" />
            Disconnect Wallet
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Not connected state
  return (
    <Button
      variant={variant}
      className={className}
      onClick={handleWalletAction}
      disabled={isConnecting}
    >
      {isConnecting ? (
        <div className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          Connecting...
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </div>
      )}
    </Button>
  );
};

export default WalletConnect;
