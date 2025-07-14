
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-36 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of <span className="text-accent-light">Service</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Last updated: May 29, 2025
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using DeFreelance, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Platform Description</h2>
              <p className="text-gray-300 leading-relaxed">
                DeFreelance is a decentralized freelancing platform that connects clients with freelancers using blockchain technology. 
                All transactions are secured through smart contracts to ensure transparency and fair payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your wallet and account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
                <li>Act professionally and ethically</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                All payments are processed through blockchain smart contracts. Platform fees are clearly disclosed before transaction confirmation. 
                Users are responsible for their own transaction fees and taxes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                DeFreelance provides the platform "as is" and makes no warranties regarding the service. 
                We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes. 
                Continued use of the platform constitutes acceptance of the modified terms.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
