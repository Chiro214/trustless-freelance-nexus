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
  supportedNetworks: NetworkConfig[];
  currentNetwork: NetworkConfig | null;
};

interface NetworkConfig {
  chainId: number;
  name: string;
  displayName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls: string[];
  icon: string;
  category: 'mainnet' | 'testnet' | 'local';
}

const WalletContext = createContext<WalletContextType | null>(null);

// LocalStorage keys for persistence
const WALLET_CONNECTED_KEY = 'DeFreelance-wallet-connected';
const SELECTED_ACCOUNT_KEY = 'DeFreelance-selected-account';

// Comprehensive network configurations
const SUPPORTED_NETWORKS: NetworkConfig[] = [
  // Ethereum Networks
  {
    chainId: 1,
    name: 'ethereum',
    displayName: 'Ethereum Mainnet',
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['https://mainnet.infura.io/v3/'],
    blockExplorerUrls: ['https://etherscan.io/'],
    icon: '🔷',
    category: 'mainnet'
  },
  {
    chainId: 11155111,
    name: 'sepolia',
    displayName: 'Ethereum Sepolia',
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['https://sepolia.infura.io/v3/'],
    blockExplorerUrls: ['https://sepolia.etherscan.io/'],
    icon: '🔹',
    category: 'testnet'
  },
  // Polygon Networks
  {
    chainId: 137,
    name: 'polygon',
    displayName: 'Polygon Mainnet',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: ['https://polygon-rpc.com/'],
    blockExplorerUrls: ['https://polygonscan.com/'],
    icon: '💠',
    category: 'mainnet'
  },
  {
    chainId: 80001,
    name: 'mumbai',
    displayName: 'Polygon Mumbai',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    icon: '💎',
    category: 'testnet'
  },
  // Binance Smart Chain
  {
    chainId: 56,
    name: 'bsc',
    displayName: 'BNB Smart Chain',
    nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
    rpcUrls: ['https://bsc-dataseed1.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com/'],
    icon: '🟡',
    category: 'mainnet'
  },
  {
    chainId: 97,
    name: 'bsc-testnet',
    displayName: 'BNB Testnet',
    nativeCurrency: { name: 'BNB', symbol: 'tBNB', decimals: 18 },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    blockExplorerUrls: ['https://testnet.bscscan.com/'],
    icon: '🟨',
    category: 'testnet'
  },
  // Arbitrum Networks
  {
    chainId: 42161,
    name: 'arbitrum',
    displayName: 'Arbitrum One',
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://arbiscan.io/'],
    icon: '🔵',
    category: 'mainnet'
  },
  {
    chainId: 421613,
    name: 'arbitrum-goerli',
    displayName: 'Arbitrum Goerli',
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://goerli.arbiscan.io/'],
    icon: '🔘',
    category: 'testnet'
  },
  // Optimism Networks
  {
    chainId: 10,
    name: 'optimism',
    displayName: 'Optimism',
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['https://mainnet.optimism.io'],
    blockExplorerUrls: ['https://optimistic.etherscan.io/'],
    icon: '🔴',
    category: 'mainnet'
  },
  {
    chainId: 420,
    name: 'optimism-goerli',
    displayName: 'Optimism Goerli',
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['https://goerli.optimism.io'],
    blockExplorerUrls: ['https://goerli-optimism.etherscan.io/'],
    icon: '🟠',
    category: 'testnet'
  },
  // Avalanche Networks
  {
    chainId: 43114,
    name: 'avalanche',
    displayName: 'Avalanche C-Chain',
    nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://snowtrace.io/'],
    icon: '⚪',
    category: 'mainnet'
  },
  {
    chainId: 43113,
    name: 'fuji',
    displayName: 'Avalanche Fuji',
    nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://testnet.snowtrace.io/'],
    icon: '⚫',
    category: 'testnet'
  },
  // Local Development Networks
  {
    chainId: 1337,
    name: 'ganache',
    displayName: 'Ganache Local',
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['http://localhost:7545'],
    blockExplorerUrls: ['http://localhost:7545'],
    icon: '🧪',
    category: 'local'
  },
  {
    chainId: 31337,
    name: 'hardhat',
    displayName: 'Hardhat Local',
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['http://localhost:8545'],
    blockExplorerUrls: ['http://localhost:8545'],
    icon: '⚒️',
    category: 'local'
  }
];

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

  // Get current network configuration
  const getCurrentNetwork = (networkId: number | null): NetworkConfig | null => {
    if (!networkId) return null;
    return SUPPORTED_NETWORKS.find(network => network.chainId === networkId) || null;
  };

  const currentNetwork = getCurrentNetwork(chainId);

  // Check if wallet is already connected on mount
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
            
            const network = getCurrentNetwork(currentChainId);
            if (network) {
              toast.success(`Connected to ${network.displayName}`);
            }
            
            // Set account
            const accountToUse = savedAccount && accounts.includes(savedAccount) ? savedAccount : accounts[0];
            setAccount(accountToUse);
            localStorage.setItem(WALLET_CONNECTED_KEY, 'true');
            localStorage.setItem(SELECTED_ACCOUNT_KEY, accountToUse);
          } else if (wasConnected) {
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
          toast("Wallet disconnected");
        } else {
          setAllAccounts(accounts);
          const savedAccount = localStorage.getItem(SELECTED_ACCOUNT_KEY);
          const accountToUse = savedAccount && accounts.includes(savedAccount) ? savedAccount : accounts[0];
          
          if (accountToUse !== account) {
            setAccount(accountToUse);
            localStorage.setItem(WALLET_CONNECTED_KEY, 'true');
            localStorage.setItem(SELECTED_ACCOUNT_KEY, accountToUse);
            const shortAddress = `${accountToUse.substring(0, 4)}...${accountToUse.substring(accountToUse.length - 4)}`;
            toast("Account switched: " + shortAddress);
          }
        }
      };

      const handleChainChanged = (chainIdHex: string) => {
        const newChainId = parseInt(chainIdHex, 16);
        setChainId(newChainId);
        
        const network = getCurrentNetwork(newChainId);
        if (network) {
          toast.success(`Switched to ${network.displayName}`);
        } else {
          toast.warning(`Connected to unsupported network (Chain ID: ${newChainId})`);
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
      toast.error("MetaMask not found. Please install MetaMask to continue.");
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    setIsConnecting(true);
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' });
      const currentChainId = parseInt(chainIdHex, 16);
      
      setAllAccounts(accounts);
      setAccount(accounts[0]);
      setChainId(currentChainId);
      localStorage.setItem(WALLET_CONNECTED_KEY, 'true');
      localStorage.setItem(SELECTED_ACCOUNT_KEY, accounts[0]);
      
      const network = getCurrentNetwork(currentChainId);
      if (network) {
        toast.success(`Connected to ${network.displayName}! Found ${accounts.length} account(s).`);
      } else {
        toast.success(`Wallet connected! Found ${accounts.length} account(s). (Unsupported network)`);
      }
    } catch (error: any) {
      console.error('Error connecting wallet:', error);
      
      // Clean up localStorage on any error
      localStorage.removeItem(WALLET_CONNECTED_KEY);
      localStorage.removeItem(SELECTED_ACCOUNT_KEY);
      
      // Handle specific error cases
      if (error.code === 4001) {
        toast.error("Connection rejected. Please approve the wallet connection.");
      } else if (error.code === -32002) {
        toast.error("Connection request already pending. Please check MetaMask.");
      } else {
        toast.error(error?.message || "Failed to connect wallet");
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const addNetwork = async (network: NetworkConfig) => {
    if (!window.ethereum) {
      toast.error("MetaMask not found");
      return;
    }

    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: `0x${network.chainId.toString(16)}`,
          chainName: network.displayName,
          nativeCurrency: network.nativeCurrency,
          rpcUrls: network.rpcUrls,
          blockExplorerUrls: network.blockExplorerUrls,
        }],
      });
      toast.success(`${network.displayName} added successfully`);
    } catch (error: any) {
      if (error.code === 4902) {
        toast.error("Failed to add network. Please add it manually.");
      } else {
        toast.error("Failed to add network");
      }
    }
  };

  const switchNetwork = async (targetChainId: number) => {
    if (!window.ethereum) {
      toast.error("MetaMask not found");
      return;
    }

    const targetNetwork = SUPPORTED_NETWORKS.find(n => n.chainId === targetChainId);
    if (!targetNetwork) {
      toast.error("Unsupported network");
      return;
    }

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${targetChainId.toString(16)}` }],
      });
      toast.success(`Switched to ${targetNetwork.displayName}`);
    } catch (error: any) {
      if (error.code === 4902) {
        // Network not found, try to add it
        await addNetwork(targetNetwork);
        // Then try to switch again
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: `0x${targetChainId.toString(16)}` }],
          });
        } catch (switchError) {
          toast.error("Failed to switch to network after adding");
        }
      } else {
        toast.error(`Failed to switch to ${targetNetwork.displayName}`);
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
    toast.success("Wallet disconnected");
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
        isConnecting,
        supportedNetworks: SUPPORTED_NETWORKS,
        currentNetwork
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};