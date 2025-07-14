
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Fees = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-36 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fee <span className="text-accent-light">Structure</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Transparent and competitive fees powered by blockchain technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">For Freelancers</CardTitle>
                <CardDescription className="text-gray-300">
                  Keep more of what you earn
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-white">
                  <Check className="w-5 h-5 text-accent-light mr-3" />
                  <span>2.5% platform fee</span>
                </div>
                <div className="flex items-center text-white">
                  <Check className="w-5 h-5 text-accent-light mr-3" />
                  <span>No hidden charges</span>
                </div>
                <div className="flex items-center text-white">
                  <Check className="w-5 h-5 text-accent-light mr-3" />
                  <span>Instant crypto payments</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">For Clients</CardTitle>
                <CardDescription className="text-gray-300">
                  Secure and transparent hiring
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-white">
                  <Check className="w-5 h-5 text-accent-light mr-3" />
                  <span>Free to post jobs</span>
                </div>
                <div className="flex items-center text-white">
                  <Check className="w-5 h-5 text-accent-light mr-3" />
                  <span>Smart contract escrow</span>
                </div>
                <div className="flex items-center text-white">
                  <Check className="w-5 h-5 text-accent-light mr-3" />
                  <span>No payment until satisfied</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fees;
