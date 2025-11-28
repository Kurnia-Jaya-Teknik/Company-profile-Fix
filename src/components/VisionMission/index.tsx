"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import React from "react";

const VisionMission = () => {
  const sectionRef = useRef(null);

  const inView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  // CARD COMPONENT
  type CardProps = {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
  };

  const Card = ({ icon, title, children }: CardProps) => (
    <div className="bg-white dark:bg-midnight_text rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
      {/* ICON WRAPPER */}
      <div className="flex justify-center mb-4">
        <span className="w-12 h-12 rounded-full bg-primary flex items-center justify-center ">
          <div className="flex items-center justify-center w-10 h-10 ml-1 mt-1 ">
            {icon}
          </div>
        </span>
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
        {title}
      </h3>

      {/* CONTENT */}
      {children}
    </div>
  );

  return (
    <div
      ref={sectionRef}
      className="bg-white dark:bg-midnight_text text-dark dark:text-white px-4 py-20 mb-16"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-black dark:text-white">Visi, Misi, </span>
            <span className="text-primary">& Motto</span>
          </h2>
        </motion.div>

        {/* GRID CARDS */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* VISI */}
          <Card
            title="Visi Kami"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="2" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="22" />
              </svg>
            }
          >
            <p className="text-gray-500 dark:text-white/70 text-base text-justify">
              Menjadi perusahaan yang dapat diandalkan dengan komitmen untuk terus tumbuh dan memberikan pelayanan yang prima.
            </p>
          </Card>

          {/* MISI */}
          <Card
            title="Misi Kami"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11" />
              </svg>
            }
          >
            <ul className="text-gray-500 dark:text-white/70 text-base space-y-2 text-left max-w-xs mx-auto list-disc pl-5">
              <li>Membangun dan menjaga kerjasama profesional.</li>
              <li>Pengembangan berkelanjutan demi kualitas layanan.</li>
              <li>Menjaga kepercayaan mitra untuk keberlanjutan bisnis.</li>
              <li>Layanan after sales cepat dan responsif.</li>
            </ul>
          </Card>

          {/* MOTTO */}
          <Card
            title="Motto Kami"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15 10 23 10 17 14 19 22 12 17 5 22 7 14 1 10 9 10" />
              </svg>
            }
          >
            <p className="text-gray-500 dark:text-white/70 text-base italic text-justify">
              “Good Plan, Good Results.”
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionMission;
