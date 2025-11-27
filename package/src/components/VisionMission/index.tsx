
"use client";
import React from "react";

const VisionMission = () => {
  return (
    <div className="bg-white dark:bg-midnight_text text-dark dark:text-white px-4 py-20 mb-16">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-2 text-center">
            <span className="text-black dark:text-white">Visi, Misi, </span>
            <span className="text-primary">& Motto</span>
          </h2>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Visi Card */}
          <div className="bg-white dark:bg-midnight_text rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="flex justify-center mb-4">
              <span className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="white">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">Visi Kami</h3>
            <p className="text-gray-500 dark:text-white/70 text-base text-justify">Menjadi perusahaan yang dapat dihandalkan dan dipercaya dengan komitmen untuk selalu tumbuh berkembang guna memberikan pelayanan yang prima.</p>
          </div>
          {/* Misi Card */}
          <div className="bg-white dark:bg-midnight_text rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="flex justify-center mb-4">
              <span className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="white">
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="12" y1="2" x2="12" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="12" y1="19" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="2" y1="12" x2="5" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="19" y1="12" x2="22" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">Misi Kami</h3>
            <ul className="text-gray-500 dark:text-white/70 text-base space-y-2 text-left max-w-xs mx-auto list-disc pl-5">
              <li>Membangun dan menjaga kerjasama yang profesional, unggul, dan kompeten.</li>
              <li>Pengembangan berkelanjutan demi meningkatkan kualitas layanan.</li>
              <li>Menjaga kepercayaan mitra demi bisnis berkelanjutan.</li>
              <li>After sales service cepat & responsif.</li>
            </ul>
          </div>
          {/* Motto Card */}
          <div className="bg-white dark:bg-midnight_text rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="flex justify-center mb-4">
              <span className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="white">
                  <polygon points="12 2 15 10 23 10 17 14 19 22 12 17 5 22 7 14 1 10 9 10" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">Motto Kami</h3>
            <p className="text-gray-500 dark:text-white/70 text-base italic text-justify">“Good Plan, Good Results.”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
