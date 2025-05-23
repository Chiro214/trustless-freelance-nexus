
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
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png"
  },
  {
    name: "Alchemy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Alchemy_Logo.png"
  },
  {
    name: "Ethereum",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png"
  },
  {
    name: "Binance Smart Chain",
    logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png"
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
      className="bg-secondary py-16 px-4 relative overflow-hidden"
    >
      {/* Floating crypto elements in background */}
      <div className="absolute inset-0">
        <div className="absolute top-8 right-8 w-6 h-6 bg-accent opacity-20 rotate-45 animate-spin" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-8 left-8 w-4 h-4 bg-accent-light opacity-20 animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-r from-accent to-accent-light opacity-10 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-10 text-white transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Powered by <span className="text-accent-light">Blockchain Infrastructure</span>
        </h2>
        
        <div className={`flex flex-wrap justify-center items-center gap-10 md:gap-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="group relative"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animation: isVisible ? `fade-in 0.5s ease-out ${index * 0.1}s forwards` : 'none',
                opacity: 0
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent-light/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
              
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-accent/20 hover:border-accent-light/40 transition-all duration-300">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                />
              </div>
              <p className="mt-3 text-center text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
