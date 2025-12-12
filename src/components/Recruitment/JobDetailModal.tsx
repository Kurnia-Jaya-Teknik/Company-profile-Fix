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
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white dark:bg-gradient-to-br dark:from-[#1e2f42] dark:via-[#2a3f54] dark:to-[#1e2f42] rounded-2xl shadow-2xl max-w-4xl w-full max-h-[96vh] sm:max-h-[90vh] overflow-hidden relative border border-gray-200 dark:border-gray-600/30 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-red-500/10 to-pink-500/10 dark:from-red-500/20 dark:to-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 via-pink-500 to-red-600 opacity-0 dark:opacity-100"></div>

          {/* Header */}
          <div className="sticky top-0 bg-white/95 dark:bg-[#1e2f42]/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-600/30 px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between z-10 flex-shrink-0">
            <div className="relative z-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-midnight_text dark:text-white uppercase pr-10 tracking-tight leading-tight">
                {job.title}
              </h2>
              {/* Location and Type badges */}
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-white/10 rounded-lg">
                  <Icon icon="lucide:calendar" className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{job.postedDate}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-white/10 rounded-lg">
                  <Icon icon="lucide:map-pin" className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-white/10 rounded-lg">
                  <Icon icon="lucide:clock" className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{job.type}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-110 z-20"
              aria-label="Close modal"
            >
              <Icon icon="lucide:x" className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Content */}
          <div className="px-5 sm:px-7 py-5 sm:py-6 space-y-5 sm:space-y-6 overflow-y-auto flex-1 relative z-10">
            {/* Job Details Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4 border border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Icon icon="lucide:user" className="w-5 h-5 text-red-500 dark:text-red-400" />
                  <span className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-wide">Experience</span>
                </div>
                <p className="text-base font-bold text-midnight_text dark:text-white">{job.experienceLevel}</p>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4 border border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Icon icon="lucide:graduation-cap" className="w-5 h-5 text-red-500 dark:text-red-400" />
                  <span className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-wide">Education</span>
                </div>
                <p className="text-base font-bold text-midnight_text dark:text-white">{job.qualificationLevel}</p>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4 border border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Icon icon="lucide:briefcase" className="w-5 h-5 text-red-500 dark:text-red-400" />
                  <span className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-wide">Years</span>
                </div>
                <p className="text-base font-bold text-midnight_text dark:text-white">{job.yearsOfExperience}</p>
              </div>
              {job.fieldOfWork && (
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4 border border-gray-200 dark:border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon icon="lucide:wrench" className="w-5 h-5 text-red-500 dark:text-red-400" />
                    <span className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-wide">Field</span>
                  </div>
                  <p className="text-base font-bold text-midnight_text dark:text-white">{job.fieldOfWork}</p>
                </div>
              )}
            </div>

            {/* Main Task */}
            <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-5 sm:p-6 border border-gray-200 dark:border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-6 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
                <h3 className="text-base sm:text-lg font-black text-midnight_text dark:text-white uppercase tracking-wide">
                  Main Tasks
                </h3>
              </div>
              <ul className="space-y-3">
                {job.mainTasks.map((task, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon icon="lucide:check" className="w-4 h-4 text-white font-bold" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualification */}
            <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-5 sm:p-6 border border-gray-200 dark:border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-6 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
                <h3 className="text-base sm:text-lg font-black text-midnight_text dark:text-white uppercase tracking-wide">
                  Qualifications
                </h3>
              </div>
              <ul className="space-y-3">
                {job.qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon icon="lucide:check" className="w-4 h-4 text-white font-bold" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                      {qual}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="bg-white/95 dark:bg-[#1e2f42]/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-600/30 px-5 sm:px-7 py-3.5 sm:py-4 flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center gap-2.5 sm:gap-3 z-10 flex-shrink-0">
            <button
              onClick={onClose}
              className="px-6 py-2.5 sm:py-3 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 text-gray-700 dark:text-gray-200 rounded-xl font-bold transition-all duration-200 text-sm sm:text-base hover:scale-105"
            >
              Close
            </button>
            <a
              href={getEmailLink(job)}
              onClick={onClose}
              className="group px-7 py-2.5 sm:py-3 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-xl font-bold transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Lamar Pekerjaan Ini
              <Icon icon="lucide:send" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailModal;

