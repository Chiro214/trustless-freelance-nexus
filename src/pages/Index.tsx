
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import JobsSection from "@/components/JobsSection";
import CryptoSponsors from "@/components/CryptoSponsors";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <JobsSection />
      <CryptoSponsors />
      <Partners />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
