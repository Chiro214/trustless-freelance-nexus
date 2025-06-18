
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { useAuth } from './useAuth';
import { toast } from '@/components/ui/use-toast';

type Proposal = Tables<'proposals'>;
type ProposalWithDetails = Proposal & {
  jobs: {
    title: string;
    budget: number;
  } | null;
  profiles: {
    username: string | null;
    full_name: string | null;
  } | null;
};

export const useProposals = () => {
  const [proposals, setProposals] = useState<ProposalWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchUserProposals = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('proposals')
        .select(`
          *,
          jobs:job_id (
            title,
            budget
          ),
          profiles:freelancer_id (
            username,
            full_name
          )
        `)
        .eq('freelancer_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setProposals(data || []);
    } catch (error) {
      console.error('Error fetching proposals:', error);
      toast({
        title: "Error",
        description: "Failed to fetch proposals. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createProposal = async (proposalData: {
    job_id: string;
    cover_letter: string;
    proposed_rate: number;
    estimated_duration?: string;
  }) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to submit a proposal.",
        variant: "destructive",
      });
      return null;
    }

    try {
      const { data, error } = await supabase
        .from('proposals')
        .insert({
          ...proposalData,
          freelancer_id: user.id,
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Success",
        description: "Proposal submitted successfully!",
      });

      fetchUserProposals(); // Refresh proposals list
      return data;
    } catch (error) {
      console.error('Error creating proposal:', error);
      toast({
        title: "Error",
        description: "Failed to submit proposal. Please try again.",
        variant: "destructive",
      });
      return null;
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserProposals();
    }
  }, [user]);

  return {
    proposals,
    loading,
    fetchUserProposals,
    createProposal,
  };
};
