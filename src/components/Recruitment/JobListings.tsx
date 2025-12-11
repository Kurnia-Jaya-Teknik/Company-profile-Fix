"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import JobCard from "./JobCard";
import JobDetailModal from "./JobDetailModal";
import JobAdminPanel from "./JobAdminPanel";
import AdminAuth from "./AdminAuth";
import { useJobListingsAPI } from "@/hooks/useJobListingsAPI";

export interface JobListing {
  id: string;
  title: string;
  postedDate: string;
  location: string;
  company: string;
  mainTask: string;
  fullTask: string;
  mainTasks: string[];
  qualifications: string[];
  experienceLevel: string;
  qualificationLevel: string;
  yearsOfExperience: string;
  fieldOfWork?: string;
  tags: string[];
  type: string;
}


const JobListings = () => {
  const { jobs, addJob, updateJob, deleteJob, resetToDefault, isLoading } = useJobListingsAPI();
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleOpenModal = (job: JobListing) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <>
      {/* Admin Auth */}
      <div className="mb-6 flex justify-end items-center gap-3">
        <AdminAuth
          onAuthenticated={() => {
            setIsAuthenticated(true);
            setIsAdminMode(true);
          }}
          isAuthenticated={isAuthenticated}
        />
        {isAuthenticated && (
          <button
            onClick={() => setIsAdminMode(!isAdminMode)}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium flex items-center gap-2"
          >
            <Icon icon={isAdminMode ? "lucide:eye-off" : "lucide:settings"} className="w-5 h-5" />
            {isAdminMode ? "Mode Tampilan" : "Mode Admin"}
          </button>
        )}
      </div>

      {/* Admin Panel */}
      {isAdminMode && (
        <JobAdminPanel
          jobs={jobs}
          onAdd={addJob}
          onUpdate={updateJob}
          onDelete={deleteJob}
          onReset={resetToDefault}
        />
      )}

      {/* Job Listings */}
      {isLoading ? (
        <div className="text-center text-gray-500 dark:text-gray-400 py-8">
          Memuat data...
        </div>
      ) : (
        <div className="space-y-6 mb-12">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <JobCard key={job.id} job={job} onSeeDetails={() => handleOpenModal(job)} />
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              Belum ada lowongan pekerjaan
            </p>
          )}
        </div>
      )}
      <JobDetailModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default JobListings;

