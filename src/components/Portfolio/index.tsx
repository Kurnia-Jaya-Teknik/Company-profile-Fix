"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { portfolioSections } from "@/data/portfolioData";

const portfolioImages = [
  "/Kontent/Foto Portofolio/P4.jpg",
  "/Kontent/Foto Portofolio/P5.jpg",
  "/Kontent/Foto Portofolio/P6.jpg",
  "/Kontent/Foto Portofolio/P7.jpg",
  "/Kontent/Foto Portofolio/P8.jpg",
  "/Kontent/Foto Portofolio/P9.jpg",
  "/Kontent/Foto Portofolio/P10.jpg",
  "/Kontent/Foto Portofolio/P11.jpg",
  "/Kontent/Foto Portofolio/P12.jpg",
  "/Kontent/Foto Portofolio/P15.jpg",
  "/Kontent/Foto Portofolio/P16.jpg",
  "/Kontent/Foto Portofolio/P17.jpg",
  "/Kontent/Foto Portofolio/P18.jpg",
  "/Kontent/Foto Portofolio/P19.jpg",
  "/Kontent/Foto Portofolio/P20.jpg",
  "/Kontent/Foto Portofolio/P21.jpg",
  "/Kontent/Foto Portofolio/P23.jpg",
  "/Kontent/Foto Portofolio/P24.jpg",
];

const Portfolio = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const cardAnimation = (index: number) => ({
    initial: { y: 24, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 },
    transition: { duration: 0.6, delay: 0.1 + index * 0.1 },
  });

  return (
    <section className="dark:bg-darkmode py-14 overflow-x-hidden">
      <div className="container lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 mx-auto">
        <div
          ref={ref}
          className="dark:bg-gradient-to-br dark:from-[#1e2f42] dark:via-[#2a3f54] dark:to-[#1e2f42] bg-white rounded-3xl md:py-20 py-10 2xl:pr-14 2xl:pl-20 sm:px-14 px-6 shadow-lg relative overflow-hidden border border-gray-200 dark:border-gray-600/30"
        >
          {/* Decorative Background Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-red-500/10 to-pink-500/10 dark:from-red-500/20 dark:to-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-2xl"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 via-pink-500 to-red-600 opacity-0 dark:opacity-100"></div>

          <motion.div {...TopAnimation} className="items-start mb-12 text-center relative z-10">
            <p className="text-sm uppercase tracking-[0.4em] text-muted dark:text-gray-300 font-bold">
              CV Kurnia Jaya Teknik
            </p>
            <h2 className="font-black md:text-4xl sm:text-3xl text-2xl text-midnight_text dark:text-white mt-3 uppercase tracking-tight">
              Portofolio <span className="text-primary dark:text-red-400">Pekerjaan</span>
            </h2>
            <p className="text-center mt-4 text-base text-muted dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Pengalaman lengkap kami dalam instalasi elektrik, panel, dan sistem otomasi di pabrik Nestle.
            </p>
          </motion.div>
          <div className="grid gap-6 relative z-10">
            {portfolioSections.map((section, index) => (
              <motion.div
                key={section.id}
                {...cardAnimation(index)}
                className="group bg-white dark:bg-gradient-to-br dark:from-[#1a2a3a] dark:to-[#2d3e4f] border border-gray-200 dark:border-gray-600/30 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-2xl dark:shadow-xl dark:hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-500 via-pink-500 to-red-600 opacity-0 dark:opacity-100 group-hover:w-2 transition-all duration-300"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 relative z-10">
                  <h3 className="text-lg sm:text-xl font-black text-midnight_text dark:text-white group-hover:text-primary dark:group-hover:text-red-400 transition-colors duration-300 uppercase tracking-tight">
                    {section.title}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1.5 text-sm font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/20 rounded-lg border border-red-200 dark:border-red-500/30 whitespace-nowrap">
                    {section.summary}
                  </span>
                </div>
                
                {/* Description Box */}
                <div className="mb-5 p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-4 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
                    <span className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-wide">Deskripsi Proyek</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed pl-3">
                    {section.description}
                  </p>
                </div>

                {/* Items List */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-4 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
                    <span className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-wide">Detail Pekerjaan</span>
                  </div>
                  <ol className="list-none text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-2.5 pl-3">
                    {section.items.map((item, idx) => (
                      <li key={`${section.id}-${idx}`} className="flex items-start gap-3 leading-relaxed">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">{idx + 1}</span>
                        </div>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 relative z-10">
            <h3 className="text-center text-xl sm:text-2xl font-black text-midnight_text dark:text-white mb-8 uppercase tracking-tight">
              Dokumentasi Lapangan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {portfolioImages.map((src) => (
                <div
                  key={src}
                  onClick={() => setSelectedImg(src)}
                  className="group overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-600/30 shadow-md cursor-pointer hover:shadow-2xl hover:border-red-400 dark:hover:border-red-500 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative w-full h-64">
                    <Image
                      src={src}
                      alt="Dokumentasi proyek CV. Kurnia Jaya Teknik"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Popup */}
          {selectedImg && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImg(null)}
            >
              <div className="relative max-w-7xl max-h-[90vh]">
                <button
                  onClick={() => setSelectedImg(null)}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-2xl hover:scale-110 font-bold text-xl"
                >
                  ✕
                </button>
                <div className="relative border-4 border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={selectedImg}
                    alt="Dokumentasi proyek"
                    width={1200}
                    height={800}
                    className="rounded-xl max-h-[85vh] w-auto object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

