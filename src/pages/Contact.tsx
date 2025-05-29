
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact <span className="text-accent-light">Us</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get in touch with our team. We're here to help with any questions or feedback.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Send us a message</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2">First Name</label>
                    <Input placeholder="John" className="bg-white/10 border-white/20 text-white" />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Last Name</label>
                    <Input placeholder="Doe" className="bg-white/10 border-white/20 text-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2">Email</label>
                  <Input placeholder="john@example.com" type="email" className="bg-white/10 border-white/20 text-white" />
                </div>

                <div>
                  <label className="block text-white mb-2">Subject</label>
                  <Input placeholder="How can we help?" className="bg-white/10 border-white/20 text-white" />
                </div>

                <div>
                  <label className="block text-white mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..."
                    className="bg-white/10 border-white/20 text-white min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-accent hover:bg-accent-light text-primary font-semibold py-3">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 text-accent-light mr-3" />
                    <h3 className="text-white font-semibold">Email Support</h3>
                  </div>
                  <p className="text-gray-300 mb-2">For general inquiries and support</p>
                  <a href="mailto:support@blocklance.com" className="text-accent-light hover:underline">
                    support@blocklance.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="w-6 h-6 text-accent-light mr-3" />
                    <h3 className="text-white font-semibold">Live Chat</h3>
                  </div>
                  <p className="text-gray-300 mb-2">Join our Discord community</p>
                  <a href="https://discord.gg/blocklance" target="_blank" rel="noopener noreferrer" className="text-accent-light hover:underline">
                    discord.gg/blocklance
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://twitter.com/blocklance" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-light">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/blocklance" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-light">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
