"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { JobListing } from "./JobListings";

interface JobCardProps {
  job: JobListing;
  onSeeDetails: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onSeeDetails }) => {
  return (
    <div className="group bg-white dark:bg-gradient-to-br dark:from-[#1e2f42] dark:via-[#2a3f54] dark:to-[#1e2f42] border border-gray-200 dark:border-gray-600/30 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-2xl dark:shadow-xl dark:hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-red-500/10 to-pink-500/10 dark:from-red-500/20 dark:to-pink-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
      
      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-500 via-pink-500 to-red-600 opacity-0 dark:opacity-100 group-hover:w-2 transition-all duration-300"></div>
      
      {/* Job Title */}
      <div className="relative z-10 mb-4">
        <h3 className="text-xl sm:text-2xl font-black text-midnight_text dark:text-white uppercase leading-tight group-hover:text-primary dark:group-hover:text-red-400 transition-colors duration-300 tracking-tight">
          {job.title}
        </h3>
      </div>

      {/* Location and Job Type */}
      <div className="relative z-10 flex flex-wrap items-center gap-3 sm:gap-4 mb-5 pb-4 border-b border-gray-200 dark:border-gray-600/30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-100 dark:bg-white/10 rounded-lg flex items-center justify-center">
            <Icon icon="lucide:calendar" className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200">{job.postedDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-100 dark:bg-white/10 rounded-lg flex items-center justify-center">
            <Icon icon="lucide:map-pin" className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">{job.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-100 dark:bg-white/10 rounded-lg flex items-center justify-center">
            <Icon icon="lucide:clock" className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200">{job.type}</span>
        </div>
      </div>

      {/* Main Task */}
      <div className="relative z-10 mb-5">
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
          {job.mainTask}
        </p>
      </div>

      {/* Job Details - Experience, Education, Years */}
      <div className="relative z-10 flex flex-wrap items-center gap-2.5 mb-5">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10">
          <Icon icon="lucide:user" className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" />
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{job.experienceLevel}</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10">
          <Icon icon="lucide:graduation-cap" className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" />
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{job.qualificationLevel}</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10">
          <Icon icon="lucide:briefcase" className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" />
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{job.yearsOfExperience}</span>
        </div>
      </div>

      {/* Tags and Button */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-gray-200 dark:border-gray-600/30">
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold border-2 border-gray-200 dark:border-gray-600/50 text-gray-700 dark:text-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-white/10 dark:to-white/5 hover:border-primary dark:hover:border-red-400 hover:scale-105 transition-all duration-200 cursor-default shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={onSeeDetails}
          className="group/btn bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 dark:from-red-500 dark:to-pink-600 dark:hover:from-red-600 dark:hover:to-pink-700 text-white px-5 py-2 rounded-xl font-bold transition-all duration-300 text-center text-sm w-full sm:w-auto shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
        >
          See Details
          <Icon icon="lucide:arrow-right" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;

