
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Handshake, Users, Globe, Zap, Shield, TrendingUp } from "lucide-react";

const Partnerships = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partner With <span className="text-accent-light">DeFreelance</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Join forces with the leading decentralized freelancing platform and unlock new opportunities for growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6 text-center hover:border-accent-light/30 transition-all duration-300">
              <Users className="w-12 h-12 text-accent-light mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Strategic Partners</h3>
              <p className="text-gray-300 text-sm">
                Long-term partnerships for mutual growth and innovation in the blockchain space.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6 text-center hover:border-yellow-400/30 transition-all duration-300">
              <Globe className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Technology Integration</h3>
              <p className="text-gray-300 text-sm">
                Integrate your services with our platform to reach a global freelancing audience.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6 text-center hover:border-green-400/30 transition-all duration-300">
              <Handshake className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Channel Partners</h3>
              <p className="text-gray-300 text-sm">
                Become a reseller or affiliate partner and earn commissions on referrals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Partner Benefits</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-accent-light mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">Revenue Growth</h3>
                    <p className="text-gray-300 text-sm">Access to new revenue streams and business opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">Brand Association</h3>
                    <p className="text-gray-300 text-sm">Align with a trusted leader in blockchain technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">Innovation Access</h3>
                    <p className="text-gray-300 text-sm">Early access to new features and technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">Global Network</h3>
                    <p className="text-gray-300 text-sm">Connect with our worldwide community of freelancers and clients</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Partnership Inquiry</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                  <Input className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" placeholder="Your company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Contact Email</label>
                  <Input type="email" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" placeholder="contact@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Partnership Type</label>
                  <Input className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" placeholder="e.g., Technology Integration" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]" 
                    placeholder="Tell us about your partnership idea..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-accent-light to-yellow-400 text-primary hover:from-accent hover:to-orange-500">
                  Submit Partnership Request
                </Button>
              </form>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Current Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CC</span>
                </div>
                <p className="text-gray-300 text-sm">CryptoChain</p>
              </div>
              <div className="text-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DW</span>
                </div>
                <p className="text-gray-300 text-sm">DefiWallet</p>
              </div>
              <div className="text-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BP</span>
                </div>
                <p className="text-gray-300 text-sm">BlockPay</p>
              </div>
              <div className="text-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SM</span>
                </div>
                <p className="text-gray-300 text-sm">SmartMeta</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm">Join our growing network of trusted partners</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partnerships;
