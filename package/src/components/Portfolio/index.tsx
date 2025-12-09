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
  "/Kontent/Foto Portofolio/P22.jpg",
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
          className="dark:bg-midnight_text bg-white rounded-3xl md:py-20 py-10 2xl:pr-14 2xl:pl-20 sm:px-14 px-6 shadow-lg"
        >
          <motion.div {...TopAnimation} className="items-start mb-12 text-center">
            <p className="text-14 uppercase tracking-[0.4em] text-muted dark:text-white">
              CV Kurnia Jaya Teknik
            </p>
            <h2 className="font-semibold md:text-35 sm:text-28 text-24 text-midnight_text dark:text-white mt-2">
              Portofolio <span className="text-primary">Pekerjaan</span>
            </h2>
            <p className="text-center mt-4 text-base text-muted dark:text-white dark:text-opacity-70">
              Pengalaman lengkap kami dalam instalasi elektrik, panel, dan sistem otomasi di pabrik Nestle.
            </p>
          </motion.div>
          <div className="grid gap-8">
            {portfolioSections.map((section, index) => (
              <motion.div
                key={section.id}
                {...cardAnimation(index)}
                className="bg-white/5 dark:bg-midnight_text border border-border dark:border-dark_border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-midnight_text dark:text-white">
                    {section.title}
                  </h3>
                  <span className="text-sm font-semibold text-primary">{section.summary}</span>
                </div>
                <p className="text-sm text-muted dark:text-white dark:text-opacity-70 mb-3">
                  {section.description}
                </p>
                <ol className="list-decimal list-inside text-sm text-muted dark:text-white dark:text-opacity-70 space-y-1">
                  {section.items.map((item, idx) => (
                    <li key={`${section.id}-${idx}`}>{item}</li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-center text-20 font-semibold text-midnight_text dark:text-white mb-6">
              Dokumentasi Lapangan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioImages.map((src) => (
                <div
                  key={src}
                  onClick={() => setSelectedImg(src)}
                  className="overflow-hidden rounded-2xl border border-border dark:border-dark_border shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative w-full h-64">
                    <Image
                      src={src}
                      alt="Dokumentasi proyek CV. Kurnia Jaya Teknik"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Popup */}
          {selectedImg && (
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImg(null)}
            >
              <div className="relative max-w-7xl max-h-[90vh]">
                <button
                  onClick={() => setSelectedImg(null)}
                  className="absolute -top-3 -right-3 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors z-10 shadow-lg"
                >
                  ✕
                </button>
                <div className="relative">
                  <Image
                    src={selectedImg}
                    alt="Dokumentasi proyek"
                    width={1200}
                    height={800}
                    className="rounded-2xl max-h-[85vh] w-auto object-contain"
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