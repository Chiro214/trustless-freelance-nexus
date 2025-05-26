
import React, { createContext, useContext, useState, ReactNode } from 'react';

type JobApplication = {
  jobId: number;
  applicantAddress: string;
  txHash: string;
  timestamp: Date;
  status: 'applied' | 'completed';
};

type JobsContextType = {
  applications: JobApplication[];
  addApplication: (jobId: number, applicantAddress: string, txHash: string) => void;
  completeJob: (jobId: number) => void;
  getJobApplications: (jobId: number) => JobApplication[];
  getUserApplications: (userAddress: string) => JobApplication[];
  isJobApplied: (jobId: number, userAddress: string) => boolean;
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

  const completeJob = (jobId: number) => {
    setApplications(prev => 
      prev.map(app => 
        app.jobId === jobId ? { ...app, status: 'completed' } : app
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

  return (
    <JobsContext.Provider value={{
      applications,
      addApplication,
      completeJob,
      getJobApplications,
      getUserApplications,
      isJobApplied
    }}>
      {children}
    </JobsContext.Provider>
  );
};
