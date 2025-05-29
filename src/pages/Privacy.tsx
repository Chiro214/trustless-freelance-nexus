
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy <span className="text-accent-light">Policy</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Last updated: May 29, 2025
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                DeFreelance collects minimal information necessary to provide our services:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                <li>Wallet addresses for blockchain transactions</li>
                <li>Profile information you choose to provide</li>
                <li>Transaction data stored on the blockchain</li>
                <li>Usage analytics to improve our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                <li>To facilitate transactions between users</li>
                <li>To provide customer support</li>
                <li>To improve platform functionality</li>
                <li>To comply with legal requirements</li>
                <li>To prevent fraud and abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement industry-standard security measures to protect your data. However, no method of transmission 
                over the internet is 100% secure. We cannot guarantee absolute security of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Blockchain Transparency</h2>
              <p className="text-gray-300 leading-relaxed">
                Transaction data is stored on public blockchains and is inherently transparent. 
                While wallet addresses are pseudonymous, blockchain data is publicly accessible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed">
                We may use third-party services for analytics, wallet connections, and blockchain interactions. 
                These services have their own privacy policies that govern their use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account</li>
                <li>Withdraw consent where applicable</li>
                <li>Data portability rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at privacy@defreelance.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
