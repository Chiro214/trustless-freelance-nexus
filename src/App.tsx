import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { WalletProvider } from "./context/WalletContext";
import { JobsProvider } from "./context/JobsContext";
import HelpAssistant from "./components/HelpAssistant";
import LoadingScreen from "./components/LoadingScreen";
import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
import PostJob from "./pages/PostJob";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Fees from "./pages/Fees";
import FAQ from "./pages/FAQ";
import Tutorials from "./pages/Tutorials";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Documentation from "./pages/Documentation";
import Community from "./pages/Community";
import Support from "./pages/Support";
import Partnerships from "./pages/Partnerships";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="bottom-right" />
        <AuthProvider>
          <WalletProvider>
            <JobsProvider>
              {isLoading ? (
                <LoadingScreen onComplete={handleLoadingComplete} duration={3000} />
              ) : (
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/post-job" element={<PostJob />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/fees" element={<Fees />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/tutorials" element={<Tutorials />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/partnerships" element={<Partnerships />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <HelpAssistant />
                </BrowserRouter>
              )}
            </JobsProvider>
          </WalletProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;