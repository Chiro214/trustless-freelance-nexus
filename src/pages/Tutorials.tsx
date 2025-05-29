
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";

const Tutorials = () => {
  const tutorials = [
    {
      title: "Getting Started with DeFreelance",
      description: "Learn how to create your account and set up your profile",
      duration: "5 min",
      difficulty: "Beginner"
    },
    {
      title: "Connecting Your Wallet",
      description: "Step-by-step guide to connect your crypto wallet",
      duration: "3 min",
      difficulty: "Beginner"
    },
    {
      title: "Finding and Applying for Jobs",
      description: "How to browse jobs and submit compelling proposals",
      duration: "8 min",
      difficulty: "Beginner"
    },
    {
      title: "Creating Effective Job Posts",
      description: "Best practices for posting jobs that attract top talent",
      duration: "10 min",
      difficulty: "Intermediate"
    },
    {
      title: "Understanding Smart Contracts",
      description: "How our escrow system protects both parties",
      duration: "12 min",
      difficulty: "Intermediate"
    },
    {
      title: "Advanced Platform Features",
      description: "Explore advanced features for power users",
      duration: "15 min",
      difficulty: "Advanced"
    }
  ];

  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-accent-light">Tutorials</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Learn how to make the most of DeFreelance with our comprehensive tutorials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      tutorial.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                      tutorial.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {tutorial.difficulty}
                    </span>
                    <span className="text-gray-400 text-sm">{tutorial.duration}</span>
                  </div>
                  <CardTitle className="text-white group-hover:text-accent-light transition-colors">
                    {tutorial.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {tutorial.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-colors">
                    <Play className="w-6 h-6 text-accent-light" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tutorials;
