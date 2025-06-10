import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useWallet } from "@/context/WalletContext";
import { useJobs } from "@/context/JobsContext";

const jobSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  category: z.string().min(1, "Please select a category"),
  budget: z.string().min(1, "Budget is required").refine((val) => !isNaN(Number(val)) && Number(val) > 0, "Budget must be a positive number"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  deadline: z.string().min(1, "Deadline is required")
});

type JobFormData = z.infer<typeof jobSchema>;

const PostJob = () => {
  const { account } = useWallet();
  const { addPostedJob } = useJobs();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: "",
      category: "",
      budget: "",
      description: "",
      deadline: ""
    }
  });

  const onSubmit = async (data: JobFormData) => {
    if (!account) {
      toast.error("Please connect your wallet to post a job");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate blockchain transaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Add job to context
      addPostedJob({
        title: data.title,
        category: data.category,
        budget: data.budget,
        description: data.description,
        deadline: data.deadline,
        clientAddress: account
      });

      console.log('Job posted successfully');
      
      toast.success("Job posted successfully! Redirecting to jobs page...");
      
      setTimeout(() => {
        navigate('/jobs');
      }, 1500);

    } catch (error) {
      console.error('Error posting job:', error);
      toast.error("Failed to post job. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Job Title</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter job title" 
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/10 border-white/20 text-white">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="development">Development</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="writing">Writing</SelectItem>
                            <SelectItem value="blockchain">Blockchain</SelectItem>
                            <SelectItem value="content">Content</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Budget (ETH)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="0.5" 
                            type="number" 
                            step="0.01"
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="deadline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Deadline</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., 7 days, 2 weeks" 
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your project requirements..."
                            className="bg-white/10 border-white/20 text-white min-h-[120px] placeholder:text-gray-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {!account && (
                    <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                      <p className="text-yellow-300 text-sm">
                        Please connect your wallet to post a job
                      </p>
                    </div>
                  )}

                  <Button 
                    type="submit"
                    disabled={!account || isSubmitting}
                    className="w-full bg-accent hover:bg-accent-light text-primary font-semibold py-3"
                  >
                    {isSubmitting ? "Posting Job..." : "Post Job"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostJob;
