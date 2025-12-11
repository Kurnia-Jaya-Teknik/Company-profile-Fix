"use client";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { JobListing } from "./JobListings";

interface JobDetailModalProps {
  job: JobListing | null;
  isOpen: boolean;
  onClose: () => void;
}

const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, isOpen, onClose }) => {
  const getEmailLink = (job: JobListing) => {
    const email = "hrdkurniajayatek@gmail.com";
    const subject = encodeURIComponent(`Lamaran Pekerjaan - ${job.title}`);
    const body = encodeURIComponent(
      `Yth. HRD CV. Kurnia Jaya Teknik

Dengan hormat,

Saya tertarik untuk melamar posisi ${job.title} di CV. Kurnia Jaya Teknik.

Berikut adalah data diri saya:
- Nama Lengkap: 
- Email: 
- No. Telepon: 
- Alamat: 

Saya siap untuk mengikuti proses seleksi selanjutnya.

Terima kasih atas perhatiannya.

Hormat saya,
[Nama Anda]`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };
  // Close modal on ESC key
  useEffect(() => {
    const escClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", escClose);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", escClose);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !job) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white dark:bg-darkmode rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white dark:bg-darkmode border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between z-10">
            <h2 className="text-2xl font-bold text-midnight_text dark:text-white pr-8">
              {job.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <Icon icon="lucide:x" className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6 space-y-6">
            {/* Main Task */}
            <div>
              <h3 className="font-bold text-lg text-midnight_text dark:text-white mb-3">
                Main Task:
              </h3>
              <ul className="space-y-2">
                {job.mainTasks.map((task, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-midnight_text dark:bg-white mt-2 flex-shrink-0"></span>
                    <span className="text-body-color dark:text-gray-300 text-sm">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualification */}
            <div>
              <h3 className="font-bold text-lg text-midnight_text dark:text-white mb-3">
                Qualification:
              </h3>
              <ul className="space-y-2">
                {job.qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-midnight_text dark:bg-white mt-2 flex-shrink-0"></span>
                    <span className="text-body-color dark:text-gray-300 text-sm">
                      {qual}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Job Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-midnight_text dark:text-white">
                    Experience Level:
                  </span>
                  <span className="ml-2 text-body-color dark:text-gray-300">
                    {job.experienceLevel}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-midnight_text dark:text-white">
                    Location:
                  </span>
                  <span className="ml-2 text-body-color dark:text-gray-300">
                    {job.location}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-midnight_text dark:text-white">
                    Qualification:
                  </span>
                  <span className="ml-2 text-body-color dark:text-gray-300">
                    {job.qualificationLevel}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-midnight_text dark:text-white">
                    Years of Experience:
                  </span>
                  <span className="ml-2 text-body-color dark:text-gray-300">
                    {job.yearsOfExperience}
                  </span>
                </div>
                {job.fieldOfWork && (
                  <div>
                    <span className="font-semibold text-midnight_text dark:text-white">
                      Field of Work:
                    </span>
                    <span className="ml-2 text-body-color dark:text-gray-300">
                      {job.fieldOfWork}
                    </span>
                  </div>
                )}
                <div>
                  <span className="font-semibold text-midnight_text dark:text-white">
                    Job Type:
                  </span>
                  <span className="ml-2 text-body-color dark:text-gray-300">
                    {job.type}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="sticky bottom-0 bg-white dark:bg-darkmode border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors"
            >
              Tutup
            </button>
            <a
              href={getEmailLink(job)}
              onClick={onClose}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors inline-block text-center"
            >
              Lamar Pekerjaan ini
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailModal;

