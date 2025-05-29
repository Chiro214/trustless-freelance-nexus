
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Freelancing is Decentralized",
      excerpt: "Exploring how blockchain technology is revolutionizing the gig economy",
      author: "DeFreelance Team",
      date: "May 15, 2024",
      readTime: "5 min read",
      category: "Industry Insights"
    },
    {
      title: "Smart Contracts: Protecting Freelancers and Clients",
      excerpt: "Understanding how our escrow system ensures fair payments for everyone",
      author: "Tech Team",
      date: "May 10, 2024",
      readTime: "7 min read",
      category: "Technology"
    },
    {
      title: "Getting Started with Crypto Payments",
      excerpt: "A beginner's guide to receiving payments in cryptocurrency",
      author: "Community Team",
      date: "May 5, 2024",
      readTime: "4 min read",
      category: "Guide"
    },
    {
      title: "Why Choose DeFreelance Over Traditional Platforms",
      excerpt: "Comparing the benefits of decentralized vs centralized freelancing",
      author: "Marketing Team",
      date: "April 30, 2024",
      readTime: "6 min read",
      category: "Comparison"
    },
    {
      title: "Building Trust in a Decentralized World",
      excerpt: "How reputation systems work on blockchain-based platforms",
      author: "Product Team",
      date: "April 25, 2024",
      readTime: "8 min read",
      category: "Product"
    },
    {
      title: "The Economics of DeFi Freelancing",
      excerpt: "Understanding the tokenomics behind decentralized freelance platforms",
      author: "Research Team",
      date: "April 20, 2024",
      readTime: "10 min read",
      category: "Economics"
    }
  ];

  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-accent-light">Blog</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Insights, updates, and guides from the DeFreelance community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-accent/20 text-accent-light">
                      {post.category}
                    </Badge>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-white group-hover:text-accent-light transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
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

export default Blog;
