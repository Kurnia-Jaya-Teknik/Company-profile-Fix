"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { JobListing } from "./JobListings";
import JobFormModal from "./JobFormModal";

interface JobAdminPanelProps {
  jobs: JobListing[];
  onAdd: (job: Omit<JobListing, "id">) => void;
  onUpdate: (id: string, job: Partial<JobListing>) => void;
  onDelete: (id: string) => void;
  onReset: () => void;
}

const JobAdminPanel: React.FC<JobAdminPanelProps> = ({
  jobs,
  onAdd,
  onUpdate,
  onDelete,
  onReset,
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<JobListing | null>(null);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const handleEdit = (job: JobListing) => {
    setEditingJob(job);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (job: Omit<JobListing, "id">) => {
    if (editingJob) {
      onUpdate(editingJob.id, job);
    } else {
      onAdd(job);
    }
    setIsFormOpen(false);
    setEditingJob(null);
  };

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus lowongan ini?")) {
      onDelete(id);
    }
  };

  const handleReset = () => {
    if (confirm("Apakah Anda yakin ingin mengembalikan data ke default? Semua perubahan akan hilang.")) {
      onReset();
      setShowConfirmReset(false);
    }
  };

  return (
    <div className="bg-white dark:bg-darkmode rounded-lg shadow-lg p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-midnight_text dark:text-white">
          Kelola Lowongan Pekerjaan
        </h3>
        <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={() => {
              setEditingJob(null);
              setIsFormOpen(true);
            }}
            className="px-3 sm:px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Icon icon="lucide:plus" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="whitespace-nowrap">Tambah Lowongan</span>
          </button>
          <button
            onClick={() => setShowConfirmReset(!showConfirmReset)}
            className="px-3 sm:px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Icon icon="lucide:refresh-cw" className="w-4 h-4 sm:w-5 sm:h-5" />
            Reset
          </button>
        </div>
      </div>

      {showConfirmReset && (
        <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
            Reset akan mengembalikan semua data ke default. Tindakan ini tidak dapat dibatalkan.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg text-sm"
            >
              Ya, Reset
            </button>
            <button
              onClick={() => setShowConfirmReset(false)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3 sm:space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <div className="flex-1 w-full sm:w-auto">
              <h4 className="font-semibold text-sm sm:text-base text-midnight_text dark:text-white mb-1">
                {job.title}
              </h4>
              <p className="text-xs sm:text-sm text-body-color dark:text-gray-400">
                {job.location} • {job.postedDate}
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={() => handleEdit(job)}
                className="flex-1 sm:flex-none px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs sm:text-sm flex items-center justify-center gap-1"
              >
                <Icon icon="lucide:edit" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Edit
              </button>
              <button
                onClick={() => handleDelete(job.id)}
                className="flex-1 sm:flex-none px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs sm:text-sm flex items-center justify-center gap-1"
              >
                <Icon icon="lucide:trash" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

      <JobFormModal
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingJob(null);
        }}
        onSubmit={handleFormSubmit}
        initialData={editingJob}
      />
    </div>
  );
};

export default JobAdminPanel;

