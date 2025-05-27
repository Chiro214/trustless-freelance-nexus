
import { useEffect, useState, useRef } from 'react';

const partners = [
  {
    name: "Polygon",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.png"
  },
  {
    name: "Chainlink",
    logo: "https://cryptologos.cc/logos/chainlink-link-logo.png"
  },
  {
    name: "IPFS",
    logo: "https://cdn.worldvectorlogo.com/logos/ipfs-logo.svg"
  },
  {
    name: "Alchemy",
    logo: "https://www.datocms-assets.com/45776/1620155116-alchemylogo.svg"
  },
  {
    name: "Ethereum",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png"
  },
  {
    name: "Arbitrum",
    logo: "https://cryptologos.cc/logos/arbitrum-arb-logo.png"
  },
  {
    name: "Optimism",
    logo: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png"
  },
  {
    name: "Solana",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png"
  }
];

const Partners = () => {
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
      className="bg-gradient-to-br from-secondary via-primary to-secondary py-24 px-4 relative overflow-hidden"
    >
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent/5 to-accent-light/5"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-accent-light/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-accent/10 to-accent-light/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-accent-light/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Powered by <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">Blockchain Infrastructure</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-light to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Built on the most trusted and innovative blockchain technologies in the industry
          </p>
        </div>
        
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="group relative flex flex-col items-center"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animation: isVisible ? `fade-in 0.6s ease-out ${index * 0.1}s forwards` : 'none',
                opacity: 0
              }}
            >
              {/* Trendy card with glassmorphism */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-accent-light/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 w-full h-32 flex items-center justify-center group-hover:bg-white/10">
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-light/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-h-16 max-w-full object-contain filter brightness-75 contrast-125 hover:brightness-100 hover:contrast-100 transition-all duration-500 hover:scale-110 relative z-10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-16 h-16 bg-gradient-to-br from-accent-light to-accent rounded-lg flex items-center justify-center text-white font-bold text-xl';
                    fallback.textContent = partner.name.charAt(0);
                    target.parentNode?.appendChild(fallback);
                  }}
                />
              </div>
              
              <p className="mt-4 text-center text-sm font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-accent-light">{partner.name}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-r from-accent-light to-accent">
            <span className="px-6 py-3 transition-all ease-in duration-75 bg-primary rounded-full group-hover:bg-opacity-0 text-white">
              Secure • Scalable • Decentralized
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
