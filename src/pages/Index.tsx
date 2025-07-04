import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import JobsSection from "@/components/JobsSection";
import CryptoSponsors from "@/components/CryptoSponsors";
import CryptoLogos from "@/components/CryptoLogos";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const Index = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative bg-gradient-to-br from-primary via-secondary to-primary">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-secondary/95"></div>
        <div className="relative z-10">
          <Features />
          <CryptoLogos />
          <Suspense fallback={
            <div className="h-96 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-light"></div>
            </div>
          }>
            <JobsSection />
          </Suspense>
          <CryptoSponsors />
          <Partners />
          <CallToAction />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;