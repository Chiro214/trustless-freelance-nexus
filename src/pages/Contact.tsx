import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Github, Twitter } from "lucide-react";
import { useCreativeToast } from "@/hooks/use-creative-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useCreativeToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_712xk8o",
        "Ckip3gOA7JnHhIkDc",
        {
          from_name: "Test User",
          from_email: "test@example.com",
          subject: "Test Subject",
          message: "Test message"
        },
        "Ckip3gOA7JnHhIkDc"
      );
      alert("Success!");
    } catch (error) {
      alert("Error: " + JSON.stringify(error));
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-36 pb-12 px-4">
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
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white mb-2">First Name</label>
                      <Input 
                        name="firstName"
                        placeholder="John" 
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Last Name</label>
                      <Input 
                        name="lastName"
                        placeholder="Doe" 
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <Input 
                      name="email"
                      placeholder="john@example.com" 
                      type="email" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Subject</label>
                    <Input 
                      name="subject"
                      placeholder="How can we help?" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Message</label>
                    <Textarea 
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      className="bg-white/10 border-white/20 text-white min-h-[120px] placeholder:text-gray-400"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-black text-white font-semibold py-3"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
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
                  <a href="mailto:chiragshukla236@gmail.com" className="text-accent-light hover:underline">
                    chiragshukla236@gmail.com
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
                  <a href="https://discord.gg/DeFreelance" target="_blank" rel="noopener noreferrer" className="text-accent-light hover:underline">
                    discord.gg/DeFreelance
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://twitter.com/DeFreelance" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-light">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/DeFreelance" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-light">
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
