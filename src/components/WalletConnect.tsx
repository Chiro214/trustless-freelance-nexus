
import { useWallet } from "@/context/WalletContext";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

type WalletConnectProps = {
  variant?: "default" | "outline";
  className?: string;
};

const WalletConnect = ({ variant = "default", className = "" }: WalletConnectProps) => {
  const { account, connectWallet, disconnectWallet, isConnecting } = useWallet();

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

  return (
    <Button
      variant={variant}
      className={className}
      onClick={handleWalletAction}
      disabled={isConnecting}
    >
      {isConnecting ? (
        <span className="flex items-center gap-2">
          <span className="animate-spin">⟳</span> Connecting...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <Wallet className="h-4 w-4" />
          {account ? displayAddress : "Connect Wallet"}
        </span>
      )}
    </Button>
  );
};

export default WalletConnect;
