
import { useEffect, useState, useRef } from 'react';

const cryptoGiants = [
  {
    name: "Coinbase",
    logo: "https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg"
  },
  {
    name: "Binance",
    logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png"
  },
  {
    name: "FTX",
    logo: "https://seeklogo.com/images/F/ftx-logo-45715F8DE1-seeklogo.com.png"
  },
  {
    name: "Kraken",
    logo: "https://seeklogo.com/images/K/kraken-logo-01DDAF7CDA-seeklogo.com.png"
  },
  {
    name: "Crypto.com",
    logo: "https://seeklogo.com/images/C/crypto-com-logo-B4F8ED8F16-seeklogo.com.png"
  },
  {
    name: "Uniswap",
    logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png"
  },
  {
    name: "Aave",
    logo: "https://cryptologos.cc/logos/aave-aave-logo.png"
  },
  {
    name: "Compound",
    logo: "https://cryptologos.cc/logos/compound-comp-logo.png"
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
      className="bg-primary py-16 px-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-8 h-8 bg-accent/10 rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-10 right-10 w-6 h-6 bg-accent-light/10 animate-bounce" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 text-white transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Trusted by <span className="text-accent-light">Crypto Giants</span>
        </h2>
        <p className={`text-center text-gray-300 mb-12 max-w-2xl mx-auto transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Leading cryptocurrency exchanges and DeFi protocols trust BlockLance for their freelance talent needs
        </p>
        
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {cryptoGiants.map((company, index) => (
            <div 
              key={company.name}
              className="group relative flex flex-col items-center"
              style={{ 
                transitionDelay: `${index * 150}ms`,
                animation: isVisible ? `fade-in 0.6s ease-out ${index * 0.15}s forwards` : 'none',
                opacity: 0
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
              
              <div className="relative bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 border border-accent/10 hover:border-accent-light/30 transition-all duration-500 hover:scale-105 w-full h-24 flex items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="max-h-10 max-w-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
              <p className="mt-4 text-center text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">{company.name}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-400 text-sm">
            Join the leading crypto companies already using BlockLance for their development needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default CryptoSponsors;
