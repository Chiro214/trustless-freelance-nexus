
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";

type WalletContextType = {
  account: string | null;
  chainId: number | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  switchNetwork: (chainId: number) => Promise<void>;
  isConnecting: boolean;
};

const WalletContext = createContext<WalletContextType | null>(null);

// LocalStorage keys for persistence
const WALLET_CONNECTED_KEY = 'blocklance-wallet-connected';

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  // Check if wallet is already connected on mount and attempt reconnection
  useEffect(() => {
    const wasConnected = localStorage.getItem(WALLET_CONNECTED_KEY) === 'true';
    
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' });
            setChainId(parseInt(chainIdHex, 16));
            localStorage.setItem(WALLET_CONNECTED_KEY, 'true');
          } else if (wasConnected) {
            // Try to reconnect if previously connected
            connectWallet().catch(() => {
              localStorage.removeItem(WALLET_CONNECTED_KEY);
            });
          }
        } catch (error) {
          console.error('Error checking wallet connection:', error);
          localStorage.removeItem(WALLET_CONNECTED_KEY);
        }
      }
    };

    checkConnection();
  }, []);

  // Listen for account and chain changes
  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          setAccount(null);
          localStorage.removeItem(WALLET_CONNECTED_KEY);
          toast("Wallet disconnected from BlockLance");
        } else if (accounts[0] !== account) {
          setAccount(accounts[0]);
          localStorage.setItem(WALLET_CONNECTED_KEY, 'true');
          const shortAddress = `${accounts[0].substring(0, 4)}...${accounts[0].substring(accounts[0].length - 4)}`;
          toast("Wallet connected to BlockLance: " + shortAddress);
        }
      };

      const handleChainChanged = (chainIdHex: string) => {
        setChainId(parseInt(chainIdHex, 16));
        toast("Network changed on BlockLance");
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);

      return () => {
        if (window.ethereum.removeListener) {
          window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
          window.ethereum.removeListener('chainChanged', handleChainChanged);
        }
      };
    }
  }, [account]);

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast.error("MetaMask not found. Please install MetaMask to use BlockLance.");
      return;
    }

    setIsConnecting(true);
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' });
      setChainId(parseInt(chainIdHex, 16));
      localStorage.setItem(WALLET_CONNECTED_KEY, 'true');
      toast.success("Wallet connected to BlockLance successfully!");
    } catch (error: any) {
      console.error('Error connecting wallet:', error);
      localStorage.removeItem(WALLET_CONNECTED_KEY);
      
      if (error.code === 4001) {
        toast.error("Connection rejected. Please approve the wallet connection to use BlockLance.");
      } else {
        toast.error(error?.message || "Failed to connect wallet to BlockLance");
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const switchNetwork = async (targetChainId: number) => {
    if (!window.ethereum) {
      toast.error("MetaMask not found");
      return;
    }

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${targetChainId.toString(16)}` }],
      });
      toast.success(`Network switched successfully on BlockLance`);
    } catch (error: any) {
      if (error.code === 4902) {
        toast.error("Network not found in wallet. Please add it manually.");
      } else {
        toast.error("Failed to switch network");
      }
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setChainId(null);
    localStorage.removeItem(WALLET_CONNECTED_KEY);
    toast.success("Wallet disconnected from BlockLance");
  };

  return (
    <WalletContext.Provider
      value={{
        account,
        chainId,
        connectWallet,
        disconnectWallet,
        switchNetwork,
        isConnecting
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
