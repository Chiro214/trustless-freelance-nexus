
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is DeFreelance?",
      answer: "DeFreelance is a decentralized freelancing platform that uses blockchain technology to ensure secure, transparent transactions between clients and freelancers."
    },
    {
      question: "How do payments work?",
      answer: "Payments are handled through smart contracts on the blockchain. Funds are held in escrow until work is completed and approved by the client."
    },
    {
      question: "What cryptocurrencies do you accept?",
      answer: "We support multiple cryptocurrencies including Ethereum, Polygon, Bitcoin, and various stablecoins like USDC and USDT."
    },
    {
      question: "Are there any fees?",
      answer: "We charge a minimal 2.5% platform fee for freelancers. Clients can post jobs for free. All fees are transparently displayed."
    },
    {
      question: "How do I get started?",
      answer: "Simply connect your crypto wallet, create your profile, and start browsing jobs or posting projects. No lengthy verification process required."
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-36 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="text-accent-light">Questions</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Find answers to common questions about DeFreelance
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/20">
                  <AccordionTrigger className="text-white hover:text-accent-light">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
