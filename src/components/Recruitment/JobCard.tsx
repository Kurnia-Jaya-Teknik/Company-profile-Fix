"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { JobListing } from "./JobListings";

interface JobCardProps {
  job: JobListing;
  onSeeDetails: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onSeeDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-darkmode border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 relative">
      {/* Clock Icon - Top Right */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
        <Icon 
          icon="lucide:clock" 
          className="w-5 h-5 text-gray-600 dark:text-gray-400" 
        />
      </div>

      {/* Job Title */}
      <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-4 pr-12">
        {job.title}
      </h3>

      {/* Date and Location */}
      <div className="flex flex-wrap gap-4 mb-4 text-sm text-body-color dark:text-gray-300">
        <div className="flex items-center gap-2">
          <Icon icon="lucide:calendar" className="w-4 h-4" />
          <span>{job.postedDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="lucide:map-pin" className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
      </div>

      {/* Main Task */}
      <div className="mb-4">
        <h4 className="font-semibold text-midnight_text dark:text-white mb-2">
          Main Task:
        </h4>
        <p className="text-body-color dark:text-gray-300 text-sm leading-relaxed">
          {isExpanded ? job.fullTask : job.mainTask}
          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="text-primary hover:underline ml-1"
            >
              Read More
            </button>
          )}
        </p>
      </div>

      {/* Tags and Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={onSeeDetails}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-center"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;

