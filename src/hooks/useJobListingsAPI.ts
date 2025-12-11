"use client";
import { useState, useEffect } from "react";
import { JobListing } from "@/components/Recruitment/JobListings";
import { DEFAULT_JOBS } from "./useJobListings";

export const useJobListingsAPI = () => {
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load jobs from API
  const loadJobs = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch("/api/jobs");
      const result = await response.json();
      
      if (result.success) {
        // If no data, use default jobs
        if (result.data && result.data.length > 0) {
          setJobs(result.data);
        } else {
          setJobs(DEFAULT_JOBS);
          // Save default jobs to API
          await saveJobsToAPI(DEFAULT_JOBS);
        }
      } else {
        // If API not configured, fallback to localStorage
        if (result.useLocalStorage) {
          console.warn("JSONBin not configured, using localStorage");
          const stored = typeof window !== "undefined" 
            ? localStorage.getItem("job_listings") 
            : null;
          if (stored) {
            setJobs(JSON.parse(stored));
          } else {
            setJobs(DEFAULT_JOBS);
          }
        } else {
          throw new Error(result.error || "Failed to load jobs");
        }
      }
    } catch (err: any) {
      console.error("Error loading jobs:", err);
      setError(err.message);
      // Fallback to localStorage or default jobs
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("job_listings");
        if (stored) {
          try {
            setJobs(JSON.parse(stored));
          } catch {
            setJobs(DEFAULT_JOBS);
          }
        } else {
          setJobs(DEFAULT_JOBS);
        }
      } else {
        setJobs(DEFAULT_JOBS);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Save jobs to API
  const saveJobsToAPI = async (jobsToSave: JobListing[]) => {
    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jobs: jobsToSave }),
      });

      const result = await response.json();
      
      if (!result.success) {
        // If API not configured, fallback to localStorage
        if (result.useLocalStorage && typeof window !== "undefined") {
          console.warn("JSONBin not configured, saving to localStorage");
          localStorage.setItem("job_listings", JSON.stringify(jobsToSave));
          return true;
        }
        throw new Error(result.error || "Failed to save jobs");
      }
      
      return true;
    } catch (err: any) {
      console.error("Error saving jobs:", err);
      // Fallback to localStorage
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("job_listings", JSON.stringify(jobsToSave));
          console.warn("Saved to localStorage as fallback");
          return true;
        } catch (localErr) {
          throw err;
        }
      }
      throw err;
    }
  };

  // Load on mount
  useEffect(() => {
    loadJobs();
  }, []);

  const addJob = async (job: Omit<JobListing, "id">) => {
    const newJob: JobListing = {
      ...job,
      id: Date.now().toString(),
    };
    
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    
    try {
      await saveJobsToAPI(updatedJobs);
    } catch (err) {
      // Revert on error
      setJobs(jobs);
      throw err;
    }
    
    return newJob;
  };

  const updateJob = async (id: string, updatedJob: Partial<JobListing>) => {
    const jobIndex = jobs.findIndex((job) => job.id === id);
    if (jobIndex === -1) return;
    
    const updatedJobs = [
      ...jobs.slice(0, jobIndex),
      { ...jobs[jobIndex], ...updatedJob, id }, // Ensure ID is preserved
      ...jobs.slice(jobIndex + 1),
    ];
    
    const previousJobs = jobs;
    setJobs(updatedJobs);
    
    try {
      await saveJobsToAPI(updatedJobs);
    } catch (err) {
      // Revert on error
      setJobs(previousJobs);
      throw err;
    }
  };

  const saveAllJobs = async () => {
    try {
      await saveJobsToAPI(jobs);
      return true;
    } catch (err) {
      throw err;
    }
  };

  const deleteJob = async (id: string) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    
    setJobs(updatedJobs);
    
    try {
      await saveJobsToAPI(updatedJobs);
    } catch (err) {
      // Revert on error
      setJobs(jobs);
      throw err;
    }
  };

  const resetToDefault = async () => {
    setJobs(DEFAULT_JOBS);
    
    try {
      await saveJobsToAPI(DEFAULT_JOBS);
    } catch (err) {
      // Revert on error
      loadJobs();
      throw err;
    }
  };

  return {
    jobs,
    isLoading,
    error,
    addJob,
    updateJob,
    deleteJob,
    resetToDefault,
    refresh: loadJobs,
    saveAll: saveAllJobs,
  };
};

