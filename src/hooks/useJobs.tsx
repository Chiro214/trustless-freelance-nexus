
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { useAuth } from './useAuth';
import { toast } from '@/hooks/use-toast';

type Job = Tables<'jobs'>;
type JobWithProfile = Job & {
  profiles: {
    username: string | null;
    full_name: string | null;
  } | null;
};

export const useJobs = () => {
  const [jobs, setJobs] = useState<JobWithProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('jobs')
        .select(`
          *,
          profiles:client_id (
            username,
            full_name
          )
        `)
        .eq('status', 'active')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      toast({
        title: "Error",
        description: "Failed to fetch jobs. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createJob = async (jobData: {
    title: string;
    description: string;
    category: string;
    budget: number;
    deadline: string;
    skills_required?: string[];
  }) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to post a job.",
        variant: "destructive",
      });
      return null;
    }

    try {
      const { data, error } = await supabase
        .from('jobs')
        .insert({
          ...jobData,
          client_id: user.id,
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Success",
        description: "Job posted successfully!",
      });

      fetchJobs(); // Refresh jobs list
      return data;
    } catch (error) {
      console.error('Error creating job:', error);
      toast({
        title: "Error",
        description: "Failed to post job. Please try again.",
        variant: "destructive",
      });
      return null;
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return {
    jobs,
    loading,
    fetchJobs,
    createJob,
  };
};
