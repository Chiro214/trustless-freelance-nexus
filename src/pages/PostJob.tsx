
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PostJob = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Post a <span className="text-accent-light">Job</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Find the perfect freelancer for your project using blockchain-powered hiring
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Job Details</CardTitle>
              <CardDescription className="text-gray-300">
                Provide detailed information about your project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-white mb-2">Job Title</label>
                <Input placeholder="Enter job title" className="bg-white/10 border-white/20 text-white" />
              </div>

              <div>
                <label className="block text-white mb-2">Category</label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="writing">Writing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-white mb-2">Budget (ETH)</label>
                <Input placeholder="0.5" type="number" className="bg-white/10 border-white/20 text-white" />
              </div>

              <div>
                <label className="block text-white mb-2">Description</label>
                <Textarea 
                  placeholder="Describe your project requirements..."
                  className="bg-white/10 border-white/20 text-white min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-accent hover:bg-accent-light text-primary font-semibold py-3">
                Post Job
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostJob;
