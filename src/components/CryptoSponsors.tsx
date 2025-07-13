
import { useEffect, useState, useRef } from 'react';

const cryptoGiants = [
  {
    name: "Coinbase",
    logo: "/assets/sponsors/coinbase.png",
    fallback: "CB",
    color: "from-blue-500 to-indigo-600"
  },
  {
    name: "Binance",
    logo: "/assets/sponsors/binance.png",
    fallback: "BNB",
    color: "from-yellow-400 to-orange-500"
  },
  {
    name: "Uniswap",
    logo: "/assets/sponsors/uniswap.png",
    fallback: "🦄",
    color: "from-pink-500 to-purple-600"
  },
  {
    name: "Kraken",
    logo: "/assets/sponsors/kraken.png",
    fallback: "🐙",
    color: "from-purple-600 to-indigo-700"
  },
  {
    name: "Crypto.com",
    logo: "/assets/sponsors/crypto.png",
    fallback: "YB",
    color: "from-blue-600 to-purple-700"
  },
  {
    name: "1inch",
    logo: "/assets/sponsors/1inch.png",
    fallback: "1️⃣",
    color: "from-red-500 to-pink-600"
  },
  {
    name: "Aave",
    logo: "/assets/sponsors/aave.png",
    fallback: "👻",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Compound",
    logo: "/assets/sponsors/compound.png",
    fallback: "💰",
    color: "from-green-500 to-teal-600"
  }
];

const CryptoSponsors = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

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

  const handleImageError = (companyName: string) => {
    setImageErrors(prev => ({ ...prev, [companyName]: true }));
  };

  return (
    <section 
      ref={scrollRef}
      className="bg-gradient-to-br from-primary via-secondary to-primary py-24 px-4 relative overflow-hidden"
    >
      {/* Modern animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-light/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-accent-light/5 to-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Trusted by <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">Crypto Giants</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-light to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Leading cryptocurrency exchanges and DeFi protocols trust BlockLance for their freelance talent needs
          </p>
        </div>
        
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {cryptoGiants.map((company, index) => (
            <div 
              key={company.name}
              className="group relative flex flex-col items-center"
              style={{ 
                transitionDelay: `${index * 150}ms`,
                animation: isVisible ? `fade-in 0.7s ease-out ${index * 0.15}s forwards` : 'none',
                opacity: 0
              }}
            >
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:border-accent-light/50 transition-all duration-700 hover:scale-110 hover:-translate-y-3 w-full h-32 flex items-center justify-center group-hover:bg-white/10 shadow-xl hover:shadow-2xl hover:shadow-accent-light/20">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-light via-accent to-accent-light opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-sm animate-pulse"></div>
                
                <div className="absolute top-2 right-2 w-2 h-2 bg-accent-light rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-ping"></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                
                {imageErrors[company.name] ? (
                  <div className={`w-14 h-14 bg-gradient-to-br ${company.color} rounded-xl flex items-center justify-center text-white font-bold text-lg relative z-10`}>
                    {company.fallback}
                  </div>
                ) : (
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`} 
                    className="max-h-14 max-w-full object-contain filter brightness-90 contrast-110 hover:brightness-110 hover:contrast-125 transition-all duration-700 hover:scale-105 relative z-10"
                    onError={() => handleImageError(company.name)}
                    loading="lazy"
                  />
                )}
              </div>
              
              <p className="mt-5 text-center text-sm font-semibold text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-accent-light transform group-hover:-translate-y-1">{company.name}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-r from-accent-light via-accent to-accent-light">
            <span className="px-8 py-4 transition-all ease-in duration-75 bg-primary rounded-full group-hover:bg-opacity-0 text-white font-medium">
              Join the leading crypto companies already using BlockLance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoSponsors;
