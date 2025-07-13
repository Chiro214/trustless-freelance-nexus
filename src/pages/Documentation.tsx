
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Book, Code, Zap, Shield, Globe, ArrowRight } from "lucide-react";

const Documentation = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-accent-light">Developer</span> Documentation
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Everything you need to integrate with DeFreelance's decentralized freelancing platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-8 space-y-8">
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Book className="w-6 h-6 text-accent-light" />
                    <h2 className="text-2xl font-bold text-white">Getting Started</h2>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Learn the basics of integrating with our blockchain-powered freelancing platform.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-accent-light/30 text-accent-light hover:bg-accent-light hover:text-primary">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Quick Start Guide
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-accent-light/30 text-accent-light hover:bg-accent-light hover:text-primary">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Authentication Setup
                    </Button>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="w-6 h-6 text-yellow-400" />
                    <h2 className="text-2xl font-bold text-white">API Reference</h2>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Complete reference for all available endpoints and smart contract interactions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-primary">
                      Jobs API
                    </Button>
                    <Button variant="outline" className="justify-start border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-primary">
                      Payments API
                    </Button>
                    <Button variant="outline" className="justify-start border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-primary">
                      Smart Contracts
                    </Button>
                    <Button variant="outline" className="justify-start border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-primary">
                      WebSocket Events
                    </Button>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-green-400" />
                    <h2 className="text-2xl font-bold text-white">Examples & Tutorials</h2>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Code examples and step-by-step tutorials for common use cases.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-green-400/30 text-green-400 hover:bg-green-400 hover:text-primary">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Creating a Job Posting
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-green-400/30 text-green-400 hover:bg-green-400 hover:text-primary">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Handling Payments
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-green-400/30 text-green-400 hover:bg-green-400 hover:text-primary">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Dispute Resolution
                    </Button>
                  </div>
                </section>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-accent-light" />
                  <h3 className="text-lg font-bold text-white">Security</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Best practices for secure integration with our platform.
                </p>
                <Button size="sm" className="w-full bg-gradient-to-r from-accent-light to-yellow-400 text-primary">
                  Security Guide
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-bold text-white">SDKs</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Official SDKs for popular programming languages.
                </p>
                <div className="space-y-2">
                  <Button size="sm" variant="outline" className="w-full border-blue-400/30 text-blue-400">
                    JavaScript SDK
                  </Button>
                  <Button size="sm" variant="outline" className="w-full border-blue-400/30 text-blue-400">
                    Python SDK
                  </Button>
                  <Button size="sm" variant="outline" className="w-full border-blue-400/30 text-blue-400">
                    Go SDK
                  </Button>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6">
                <h3 className="text-lg font-bold text-white mb-4">Need Help?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Join our developer community for support and discussions.
                </p>
                <div className="space-y-2">
                  <Button size="sm" variant="outline" className="w-full border-accent-light/30 text-accent-light">
                    Discord Community
                  </Button>
                  <Button size="sm" variant="outline" className="w-full border-accent-light/30 text-accent-light">
                    GitHub Issues
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;
