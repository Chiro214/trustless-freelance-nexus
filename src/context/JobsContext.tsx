
import React, { createContext, useContext, useState, ReactNode } from 'react';

type JobApplication = {
  jobId: number;
  applicantAddress: string;
  txHash: string;
  timestamp: Date;
  status: 'applied' | 'completed';
};

type PostedJob = {
  id: number;
  title: string;
  description: string;
  budget: string;
  category: string;
  deadline: string;
  clientAddress: string;
  timestamp: Date;
  status: 'active' | 'completed' | 'cancelled';
};

type JobsContextType = {
  applications: JobApplication[];
  postedJobs: PostedJob[];
  addApplication: (jobId: number, applicantAddress: string, txHash: string) => void;
  addPostedJob: (job: Omit<PostedJob, 'id' | 'timestamp' | 'status'>) => void;
  completeJob: (jobId: number) => void;
  getJobApplications: (jobId: number) => JobApplication[];
  getUserApplications: (userAddress: string) => JobApplication[];
  isJobApplied: (jobId: number, userAddress: string) => boolean;
  getAllJobs: () => PostedJob[];
};

const JobsContext = createContext<JobsContextType | null>(null);

export const useJobs = () => {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobsProvider');
  }
  return context;
};

export const JobsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [postedJobs, setPostedJobs] = useState<PostedJob[]>([]);

  const addApplication = (jobId: number, applicantAddress: string, txHash: string) => {
    const newApplication: JobApplication = {
      jobId,
      applicantAddress,
      txHash,
      timestamp: new Date(),
      status: 'applied'
    };
    setApplications(prev => [...prev, newApplication]);
  };

  const addPostedJob = (job: Omit<PostedJob, 'id' | 'timestamp' | 'status'>) => {
    const newJob: PostedJob = {
      ...job,
      id: Date.now(),
      timestamp: new Date(),
      status: 'active'
    };
    setPostedJobs(prev => [...prev, newJob]);
  };

  const completeJob = (jobId: number) => {
    setApplications(prev => 
      prev.map(app => 
        app.jobId === jobId ? { ...app, status: 'completed' } : app
      )
    );
    setPostedJobs(prev =>
      prev.map(job =>
        job.id === jobId ? { ...job, status: 'completed' } : job
      )
    );
  };

  const getJobApplications = (jobId: number) => {
    return applications.filter(app => app.jobId === jobId);
  };

  const getUserApplications = (userAddress: string) => {
    return applications.filter(app => app.applicantAddress.toLowerCase() === userAddress.toLowerCase());
  };

  const isJobApplied = (jobId: number, userAddress: string) => {
    return applications.some(app => 
      app.jobId === jobId && app.applicantAddress.toLowerCase() === userAddress.toLowerCase()
    );
  };

  const getAllJobs = () => {
    return postedJobs;
  };

  return (
    <JobsContext.Provider value={{
      applications,
      postedJobs,
      addApplication,
      addPostedJob,
      completeJob,
      getJobApplications,
      getUserApplications,
      isJobApplied,
      getAllJobs
    }}>
      {children}
    </JobsContext.Provider>
  );
};
