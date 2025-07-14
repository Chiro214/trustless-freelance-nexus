
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Heart, Trophy, Zap, Globe } from "lucide-react";

const Community = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-36 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-accent-light">Community</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Connect with fellow freelancers, clients, and blockchain enthusiasts from around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6 hover:border-accent-light/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-8 h-8 text-accent-light" />
                <h3 className="text-xl font-bold text-white">Discord Server</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Join our active Discord community for real-time discussions, support, and networking opportunities.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">15K+ Members</span>
                <span className="text-sm text-green-400">🟢 Active</span>
              </div>
              <Button variant="outline" className="w-full border-accent-light/30 from-black to-black text-primary hover:from-accent hover:to-accent-500">
                Join Discord
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6 hover:border-blue-400/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Twitter</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Follow us for the latest updates, announcements, and insights from the DeFreelance team.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">50K+ Followers</span>
                <span className="text-sm text-blue-400">📈 Growing</span>
              </div>
              <Button variant="outline" className="w-full border-blue-400/30 text-blue-400 hover:bg-blue-400 hover:text-white">
                Follow @DeFreelance
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6 hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-bold text-white">GitHub</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Contribute to our open-source projects and help shape the future of decentralized freelancing.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">2K+ Contributors</span>
                <span className="text-sm text-purple-400">⭐ Open Source</span>
              </div>
              <Button variant="outline" className="w-full border-purple-400/30 text-purple-400 hover:bg-purple-400 hover:text-white">
                View on GitHub
              </Button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Community Stats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-light mb-2">67K+</div>
                <div className="text-gray-300">Total Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-gray-300">Daily Active</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">25</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-gray-300">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Community Programs</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <Zap className="w-5 h-5 text-accent-light" />
                  <span className="text-white">Ambassador Program</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <Heart className="w-5 h-5 text-red-400" />
                  <span className="text-white">Referral Rewards</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="text-white">Monthly Contests</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Community Guidelines</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Be respectful and professional</li>
                <li>• Help fellow community members</li>
                <li>• Share knowledge and experiences</li>
                <li>• Follow platform rules and guidelines</li>
                <li>• Report any suspicious activity</li>
              </ul>
              <Button variant="outline" className="w-full mt-4 border-accent-light/30 text-accent-light hover:bg-accent-light hover:text-primary">
                Read Full Guidelines
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
