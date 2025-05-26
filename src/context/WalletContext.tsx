import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";

type WalletContextType = {
  account: string | null;
  allAccounts: string[];
  chainId: number | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  switchNetwork: (chainId: number) => Promise<void>;
  switchAccount: (account: string) => void;
  isConnecting: boolean;
};

const WalletContext = createContext<WalletContextType | null>(null);

// LocalStorage keys for persistence
const WALLET_CONNECTED_KEY = 'blocklance-wallet-connected';
const SELECTED_ACCOUNT_KEY = 'blocklance-selected-account';

// Networks to avoid (mainnet only, allow local development networks)
const FORBIDDEN_NETWORKS = [1]; // Only Ethereum mainnet

// Local development networks (Ganache, Hardhat, etc.)
const LOCAL_NETWORKS = [1337, 5777, 31337]; // Common local network chain IDs

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [allAccounts, setAllAccounts] = useState<string[]>([]);
  const [chainId, setChainId] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  // Check if current network is forbidden (only mainnet, allow local networks)
  const isNetworkForbidden = (networkId: number) => {
    return FORBIDDEN_NETWORKS.includes(networkId);
  };

  // Check if network is a local development network
  const isLocalNetwork = (networkId: number) => {
    return LOCAL_NETWORKS.includes(networkId);
  };

  // Check if wallet is already connected on mount and attempt reconnection
  useEffect(() => {
    const wasConnected = localStorage.getItem(WALLET_CONNECTED_KEY) === 'true';
    const savedAccount = localStorage.getItem(SELECTED_ACCOUNT_KEY);
    
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAllAccounts(accounts);
            const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' });
            const currentChainId = parseInt(chainIdHex, 16);
            setChainId(currentChainId);
            
            // Check if network is forbidden
            if (isNetworkForbidden(currentChainId)) {
              toast.error("Please switch away from mainnet to use BlockLance");
              return;
            }
            
            // Check if network is a local development network
            if (isLocalNetwork(currentChainId)) {
              toast.success("Local development network connected to BlockLance");
            }
            
            // Set account (use saved account if available and in list, otherwise first account)
            const accountToUse = savedAccount && accounts.includes(savedAccount) ? savedAccount : accounts[0];
            setAccount(accountToUse);
            localStorage.setItem(WALLET_CONNECTED_KEY, 'true');
            localStorage.setItem(SELECTED_ACCOUNT_KEY, accountToUse);
          } else if (wasConnected) {
            // Try to reconnect if previously connected
            connectWallet().catch(() => {
              localStorage.removeItem(WALLET_CONNECTED_KEY);
              localStorage.removeItem(SELECTED_ACCOUNT_KEY);
            });
          }
        } catch (error) {
          console.error('Error checking wallet connection:', error);
          localStorage.removeItem(WALLET_CONNECTED_KEY);
          localStorage.removeItem(SELECTED_ACCOUNT_KEY);
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
          setAllAccounts([]);
          localStorage.removeItem(WALLET_CONNECTED_KEY);
          localStorage.removeItem(SELECTED_ACCOUNT_KEY);
          toast("Wallet disconnected from BlockLance");
        } else {
          setAllAccounts(accounts);
          const savedAccount = localStorage.getItem(SELECTED_ACCOUNT_KEY);
          const accountToUse = savedAccount && accounts.includes(savedAccount) ? savedAccount : accounts[0];
          
          if (accountToUse !== account) {
            setAccount(accountToUse);
            localStorage.setItem(WALLET_CONNECTED_KEY, 'true');
            localStorage.setItem(SELECTED_ACCOUNT_KEY, accountToUse);
            const shortAddress = `${accountToUse.substring(0, 4)}...${accountToUse.substring(accountToUse.length - 4)}`;
            toast("Wallet account changed: " + shortAddress);
          }
        }
      };

      const handleChainChanged = (chainIdHex: string) => {
        const newChainId = parseInt(chainIdHex, 16);
        setChainId(newChainId);
        
        if (isNetworkForbidden(newChainId)) {
          toast.error("Mainnet detected! Please switch to a testnet or local network to use BlockLance");
          // Auto-disconnect from mainnet
          disconnectWallet();
        } else if (isLocalNetwork(newChainId)) {
          toast.success("Local development network connected to BlockLance");
        } else {
          toast("Network changed on BlockLance");
        }
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
      const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' });
      const currentChainId = parseInt(chainIdHex, 16);
      
      // Check if network is forbidden (only mainnet)
      if (isNetworkForbidden(currentChainId)) {
        toast.error("Please switch away from mainnet to use BlockLance");
        setIsConnecting(false);
        return;
      }
      
      setAllAccounts(accounts);
      setAccount(accounts[0]);
      setChainId(currentChainId);
      localStorage.setItem(WALLET_CONNECTED_KEY, 'true');
      localStorage.setItem(SELECTED_ACCOUNT_KEY, accounts[0]);
      
      if (isLocalNetwork(currentChainId)) {
        toast.success(`Connected to local development network! Found ${accounts.length} account(s).`);
      } else {
        toast.success(`Wallet connected to BlockLance successfully! Found ${accounts.length} account(s).`);
      }
    } catch (error: any) {
      console.error('Error connecting wallet:', error);
      localStorage.removeItem(WALLET_CONNECTED_KEY);
      localStorage.removeItem(SELECTED_ACCOUNT_KEY);
      
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

    // Prevent switching to forbidden networks
    if (isNetworkForbidden(targetChainId)) {
      toast.error("Cannot switch to mainnet. BlockLance only supports testnets and local networks.");
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

  const switchAccount = (newAccount: string) => {
    if (allAccounts.includes(newAccount)) {
      setAccount(newAccount);
      localStorage.setItem(SELECTED_ACCOUNT_KEY, newAccount);
      const shortAddress = `${newAccount.substring(0, 4)}...${newAccount.substring(newAccount.length - 4)}`;
      toast.success(`Switched to account: ${shortAddress}`);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setAllAccounts([]);
    setChainId(null);
    localStorage.removeItem(WALLET_CONNECTED_KEY);
    localStorage.removeItem(SELECTED_ACCOUNT_KEY);
    toast.success("Wallet disconnected from BlockLance");
  };

  return (
    <WalletContext.Provider
      value={{
        account,
        allAccounts,
        chainId,
        connectWallet,
        disconnectWallet,
        switchNetwork,
        switchAccount,
        isConnecting
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
