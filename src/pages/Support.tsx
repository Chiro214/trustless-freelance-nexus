
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HelpCircle, MessageSquare, Mail, Phone, Clock, Search } from "lucide-react";
import { useState } from "react";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "How do I get started on BlockLance?",
      answer: "Connect your wallet, complete your profile, and start browsing jobs or posting your own."
    },
    {
      question: "What are the platform fees?",
      answer: "We charge a 5% platform fee on completed transactions, which is automatically deducted."
    },
    {
      question: "How are payments secured?",
      answer: "All payments are secured through smart contracts and escrow services on the blockchain."
    },
    {
      question: "Can I dispute a transaction?",
      answer: "Yes, we have a built-in dispute resolution system with community arbitrators."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How Can We <span className="text-accent-light">Help?</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Get the support you need to succeed on BlockLance. We're here to help 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Support</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <Input className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <Input type="email" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="account">Account Issues</SelectItem>
                        <SelectItem value="payment">Payment Problems</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="dispute">Dispute Resolution</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <Input className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" placeholder="Brief description of your issue" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <Textarea 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]" 
                      placeholder="Please describe your issue in detail..."
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-accent-light to-yellow-400 text-primary hover:from-accent hover:to-orange-500">
                    Submit Ticket
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-accent-light" />
                  <h3 className="text-lg font-bold text-white">Live Chat</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Get instant help from our support team.
                </p>
                <Button className="w-full bg-gradient-to-r from-accent-light to-yellow-400 text-primary">
                  Start Chat
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-bold text-white">Email Support</h3>
                </div>
                <p className="text-gray-300 text-sm mb-2">support@blocklance.io</p>
                <p className="text-gray-400 text-xs">Response within 24 hours</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-bold text-white">Support Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white">9AM - 6PM UTC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Weekend</span>
                    <span className="text-white">10AM - 4PM UTC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-8">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-6 h-6 text-accent-light" />
              <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
            </div>
            
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-300 text-sm">{faq.answer}</p>
                </div>
              ))}
              {filteredFaqs.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-400">No FAQs found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
