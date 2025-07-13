import { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";

const partners = [
  {
    name: "Polygon",
    logo: "/assets/networks/polygon.png",
    fallback: "⬟",
    color: "from-white-500 to-white-500"
  },
  {
    name: "Chainlink",
    logo: "/assets/networks/chainlink.png",
    fallback: "🔗",
    color: "from-white-500 to-white-500"
  },
  {
    name: "IPFS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png",
    fallback: "📁",
    color: "from-teal-500 to-green-500"
  },
  {
    name: "Alchemy",
    logo: "/assets/networks/alchemy.png",
    fallback: "⚗️",
    color: "from-indigo-500 to-purple-500"
  },
  {
    name: "Ethereum",
    logo: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/eth.svg",
    fallback: "Ξ",
    color: "from-blue-400 to-purple-500"
  },
  {
    name: "Arbitrum",
    logo: "/assets/networks/arbitrum.png",
    fallback: "🏛️",
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "Optimism",
    logo: "/assets/networks/optimism.png",
    fallback: "⚡",
    color: "from-red-500 to-pink-500"
  },
  {
    name: "Solana",
    logo: "/assets/networks/solana.png", // Use your PNG path here
    fallback: "◎",
    color: "from-purple-400 to-pink-400"
  }
];

const Partners = () => {
  const navigate = useNavigate();
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

  const handleImageError = (partnerName: string) => {
    setImageErrors(prev => ({ ...prev, [partnerName]: true }));
  };

  return (
    <section 
      ref={scrollRef}
      className="bg-gradient-to-br from-secondary via-primary to-secondary py-24 px-4 relative overflow-hidden"
    >
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent/5 to-blue-500/5"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-accent/10 to-blue-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-accent/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Powered by <span className="bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">Blockchain Infrastructure</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-blue-500 mx-auto rounded-full mb-6"></div>
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
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-accent/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 w-full h-32 flex items-center justify-center group-hover:bg-white/15 shadow-lg">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {imageErrors[partner.name] ? (
                  <div className={`w-20 h-20 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl relative z-10 shadow-lg`}>
                    {partner.fallback}
                  </div>
                ) : (
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="max-h-20 max-w-full object-contain filter brightness-100 hover:brightness-110 transition-all duration-500 hover:scale-110 relative z-10"
                    onError={() => handleImageError(partner.name)}
                    loading="lazy"
                  />
                )}
              </div>
              
              <p className="mt-4 text-center text-sm font-medium 
                text-white
                opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-white-400">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <button
            className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-r from-accent to-blue-500 cursor-pointer shadow-lg transition-all duration-300
              hover:scale-105 hover:shadow-2xl active:scale-95 active:shadow-inner"
            onClick={() => navigate("/jobs")}
            type="button"
          >
            <span className="px-6 py-3 transition-all ease-in duration-200 bg-primary rounded-full group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-blue-500 group-hover:text-white group-hover:scale-105 group-active:scale-95">
              Secure • Scalable • Decentralized
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;