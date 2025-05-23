
import { useEffect, useState, useRef } from 'react';

const cryptoSponsors = [
  {
    name: "Coinbase",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Coinbase-Logo.png",
    category: "Exchange"
  },
  {
    name: "Binance",
    logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    category: "Exchange"
  },
  {
    name: "Ethereum Foundation",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    category: "Blockchain"
  },
  {
    name: "Polygon",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    category: "Layer 2"
  },
  {
    name: "Chainlink",
    logo: "https://cryptologos.cc/logos/chainlink-link-logo.png",
    category: "Oracle"
  },
  {
    name: "Uniswap",
    logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
    category: "DeFi"
  },
  {
    name: "MetaMask",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
    category: "Wallet"
  },
  {
    name: "OpenSea",
    logo: "https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png",
    category: "NFT"
  }
];

const CryptoSponsors = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={scrollRef}
      className="bg-gradient-to-br from-primary via-secondary to-primary py-20 px-4 relative overflow-hidden"
    >
      {/* Floating Crypto Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-10 animate-spin" style={{ animationDuration: '8s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Trusted by <span className="text-accent-light">Crypto Giants</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            BlockLance is proudly supported by the world's leading cryptocurrency exchanges, 
            blockchain networks, and Web3 platforms
          </p>
        </div>
        
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {cryptoSponsors.map((sponsor, index) => (
            <div 
              key={sponsor.name}
              className="group bg-secondary/50 backdrop-blur-sm rounded-xl p-6 hover:bg-secondary/70 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-accent/20"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animation: isVisible ? `fade-in 0.5s ease-out ${index * 0.1}s forwards` : 'none',
                opacity: 0
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white rounded-xl p-2">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-accent-light transition-colors">
                  {sponsor.name}
                </h3>
                <span className="text-xs text-accent-light bg-accent-light/20 px-2 py-1 rounded-full">
                  {sponsor.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.8s' }}>
          <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-6 border border-accent/20">
            <div className="text-3xl font-bold text-accent-light mb-2">$50M+</div>
            <div className="text-gray-300">Total Volume Processed</div>
          </div>
          <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-6 border border-accent/20">
            <div className="text-3xl font-bold text-accent-light mb-2">15+</div>
            <div className="text-gray-300">Blockchain Networks</div>
          </div>
          <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-6 border border-accent/20">
            <div className="text-3xl font-bold text-accent-light mb-2">100K+</div>
            <div className="text-gray-300">Active Users</div>
          </div>
        </div>
      </div>

      {/* Abstract crypto-themed shapes */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CryptoSponsors;
