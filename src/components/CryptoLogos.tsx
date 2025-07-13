import { Bitcoin, Zap } from "lucide-react";

const CryptoLogos = () => {
  return (
    <section className="py-16 bg-secondary px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Supported <span className="text-accent">Networks</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Defreelance supports multiple blockchain networks for maximum flexibility and low transaction costs.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {/* Ethereum */}
          <div className="flex flex-col items-center p-6 bg-primary rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-3">
              <img src="/assets/networks/ethereum.png" alt="Ethereum Logo" className="h-10 w-10 object-contain" />
            </div>
            <span className="text-white font-semibold">Ethereum</span>
            <span className="text-white-400 text-sm">ETH</span>
          </div>

          {/* Bitcoin */}
          <div className="flex flex-col items-center p-6 bg-primary rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center mb-3">
              <img src="/assets/networks/bitcoin.png" alt="Bitcoin Logo" className="h-10 w-10 object-contain" />
            </div>
            <span className="text-white font-semibold">Bitcoin</span>
            <span className="text-white-400 text-sm">BTC</span>
          </div>

          {/* Polygon */}
          <div className="flex flex-col items-center p-6 bg-primary rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-white-500 to-grey-500 rounded-full flex items-center justify-center mb-3">
              <img src="/assets/networks/polygon.png" alt="Polygon Logo" className="h-10 w-10 object-contain" />
            </div>
            <span className="text-white font-semibold">Polygon</span>
            <span className="text-white-400 text-sm">MATIC</span>
          </div>

          {/* Binance Smart Chain */}
          <div className="flex flex-col items-center p-6 bg-primary rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-3">
              <img src="/assets/networks/bnb.png" alt="BSC Logo" className="h-10 w-10 object-contain" />
            </div>
            <span className="text-white font-semibold">BSC</span>
            <span className="text-white-400 text-sm">BNB</span>
          </div>

          {/* Arbitrum */}
          <div className="flex flex-col items-center p-6 bg-primary rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-3">
              <img src="/assets/networks/arbitrum.png" alt="Arbitrum Logo" className="h-10 w-10 object-contain" />
            </div>
            <span className="text-white font-semibold">Arbitrum</span>
            <span className="text-white-400 text-sm">ARB</span>
          </div>

          {/* Optimism */}
          <div className="flex flex-col items-center p-6 bg-primary rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-grey-500 to-grey-500 rounded-full flex items-center justify-center mb-3">
              <img src="/assets/networks/tron.png" alt="tron Logo" className="h-10 w-10 object-contain" />
            </div>
            <span className="text-white font-semibold">Tron</span>
            <span className="text-white-400 text-sm">TRX</span>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            More networks coming soon. Defreelance is constantly expanding to support new blockchain ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CryptoLogos;