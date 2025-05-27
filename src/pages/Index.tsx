
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
      <Features />
      <CryptoLogos />
      <Suspense fallback={<div className="h-96 flex items-center justify-center text-white">Loading jobs...</div>}>
        <JobsSection />
      </Suspense>
      <CryptoSponsors />
      <Partners />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
