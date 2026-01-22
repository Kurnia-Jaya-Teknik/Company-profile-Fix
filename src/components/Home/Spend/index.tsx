"use client";
import React, { FC, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ShieldCheck, FileCheck, Landmark, ChevronLeft, ChevronRight } from "lucide-react";

const Spend: FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [currentISOIndex, setCurrentISOIndex] = useState(0);

  const isoImages = [
    { src: "/Kontent/ISO 90012015.jpg", alt: "Sertifikat ISO 9001:2015" },
    { src: "/Kontent/ISO 450012018.jpg", alt: "Sertifikat ISO 45001:2018" },
  ];

  // Tutup modal via ESC
  useEffect(() => {
    const escClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", escClose);
    return () => window.removeEventListener("keydown", escClose);
  }, []);

  const TopAnimation = {
    initial: { y: -50, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.8 },
  };

  const BottomAnimation = {
    initial: { y: 50, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.8, delay: 0.2 },
  };

  const nextISO = () => {
    setCurrentISOIndex((prev) => (prev + 1) % isoImages.length);
  };

  const prevISO = () => {
    setCurrentISOIndex((prev) => (prev - 1 + isoImages.length) % isoImages.length);
  };

  return (
    <section className="dark:bg-darkmode overflow-hidden py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div ref={ref}>

          {/* ISO Certificate Section */}
          <motion.div 
            {...TopAnimation} 
            className="mb-16"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Certificate Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedImg("/images/notification-letter-iso.jpg")}
                className="cursor-pointer flex-shrink-0"
              >
              </motion.div>
            </div>
          </motion.div>

          {/* ISO 9001 & 45001 Certificate Section */}
          <motion.div 
            {...TopAnimation} 
            className="mb-20"
          >
            {/* Title & Subtitle Section */}
            <motion.div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-500 p-4 rounded-xl">
                  <ShieldCheck size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Sertifikasi ISO
                  </h3>
                  <p className="text-red-600 dark:text-red-400 font-semibold text-sm md:text-base mt-1">
                    Komitmen Internasional untuk Kualitas & Keselamatan
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              {/* Left Side - Carousel Gambar */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-auto lg:flex-shrink-0"
              >
                <div className="relative flex flex-col items-center">
                  {/* Image Only with Border Radius */}
                  <motion.div
                    key={currentISOIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setSelectedImg(isoImages[currentISOIndex].src)}
                    className="cursor-pointer"
                  >
                    <Image
                      src={isoImages[currentISOIndex].src}
                      alt={isoImages[currentISOIndex].alt}
                      width={350}
                      height={500}
                      className="object-contain rounded-2xl max-w-[280px] md:max-w-[350px] shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </motion.div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={prevISO}
                      className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    
                    {/* Dots Indicator */}
                    <div className="flex items-center gap-2 px-2">
                      {isoImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentISOIndex(idx)}
                          className={`transition-all duration-300 rounded-full ${
                            idx === currentISOIndex 
                              ? "w-6 h-2 bg-red-600" 
                              : "w-2 h-2 bg-gray-400 dark:bg-gray-600 hover:bg-red-400"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextISO}
                      className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex-1 space-y-8"
              >
                {/* Main Description */}
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                    CV. Kurnia Jaya Teknik telah memperoleh sertifikasi <strong>ISO 9001:2015</strong> untuk Sistem Manajemen Mutu dan <strong>ISO 45001:2018</strong> untuk Sistem Manajemen Keselamatan dan Kesehatan Kerja. Komitmen kami terhadap standar internasional menjamin kualitas layanan dan keselamatan dalam setiap proyek yang kami jalankan.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                    Sertifikasi ini mencerminkan dedikasi tim kami dalam memberikan layanan terbaik sambil memastikan lingkungan kerja yang aman dan kondusif bagi seluruh stakeholder.
                  </p>
                </div>

                {/* Features with Bullet Points - 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Manajemen Mutu (ISO 9001)</p>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1.5">Sistem pengendalian kualitas yang terdokumentasi dan terstandar untuk konsistensi layanan.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Keselamatan & Kesehatan (ISO 45001)</p>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1.5">Manajemen risiko kerja yang komprehensif untuk melindungi setiap anggota tim.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Kepuasan Pelanggan</p>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1.5">Fokus pada kebutuhan klien dan kepuasan maksimal dalam setiap aspek layanan.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Perbaikan Berkelanjutan</p>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1.5">Evaluasi dan optimasi proses secara rutin untuk peningkatan berkelanjutan.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Kredibilitas Global</p>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1.5">Pengakuan internasional dan kepercayaan dari klien dan mitra global.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Audit Berkala</p>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1.5">Pemeriksaan rutin oleh badan independen untuk memastikan kepatuhan standar.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div {...TopAnimation} className="text-center mb-14">
            <h2 className="md:text-36 text-28 font-semibold text-midnight_text dark:text-white leading-tight">
              Legalitas <span className="text-primary">Perusahaan</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">
              Informasi resmi terkait legalitas dan perizinan perusahaan.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-14 items-start">

            {/* LEFT CARD */}
            <motion.div {...BottomAnimation} className="w-full">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 
                max-w-[400px] sm:max-w-[480px] lg:max-w-[520px] mx-auto">
                
                <div className="space-y-8 text-gray-700 dark:text-gray-200 text-[16px] leading-relaxed">
                  
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white mb-2 text-[20px]">Akta Pendirian</p>
                    <p>Notaris: Achmad Haris Hidayat, SH., M.KN.</p>
                    <p>Nomor & Tanggal: 08 – 12 Maret 2019</p>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 dark:text-white mb-2 text-[20px]">Nomor Induk Berusaha (NIB) & TDP</p>
                    <p>Lokasi: Kabupaten Pasuruan</p>
                    <p>Ditetapkan: 18 Juli 2019</p>
                    <p>Nomor: 9120005771586</p>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 dark:text-white mb-2 text-[20px]">Pajak</p>
                    <p>NPWP: 90.855.105.4-624.000</p>
                    <p>SPPKP: S-869PKP/WPJ.12/KP.0503/2019</p>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 dark:text-white mb-2 text-[20px]">Bank</p>
                    <p>Bank BCA - KCP Pasuruan</p>
                    <p>No. Rekening: 0893465755</p>
                    <p>Atas Nama: Kurnia Jaya Teknik CV</p>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE – IMAGE + INFO */}
            <motion.div {...BottomAnimation} className="w-full flex flex-col items-center gap-2">

              {/* Badge kecil */}
              <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <ShieldCheck size={18} />
                Terdaftar & Diawasi Pemerintah
              </div>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedImg("/Kontent/Gambar 12.jpg")}
                className="cursor-pointer w-full max-w-[340px] lg:max-w-[300px] h-[380px] flex items-center justify-center mt-0 mb-0 "
              >
                <Image
                  src="/Kontent/Gambar 12.png"
                  alt="Legalitas Perusahaan"
                  width={260}
                  height={380}
                  className="object-contain w-full h-full"
                />
              </motion.div>

              {/* Mini Info Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-gray-200 dark:border-gray-700 max-w-sm w-full">
                <p className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <FileCheck size={20} className="text-primary" />
                  Legalitas Terverifikasi
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Dokumen resmi sesuai ketentuan OSS-RBA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Pajak perusahaan aktif & valid
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Terdaftar di instansi pemerintahan terkait
                  </li>
                </ul>
              </div>

            </motion.div>

          </div>
        </div>
      </div>

      {/* MODAL IMAGE */}
      {selectedImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-4xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src={selectedImg}
                alt="Preview"
                width={900}
                height={1200}
                className="object-contain rounded-lg max-h-[85vh] cursor-pointer hover:opacity-90 transition-opacity"
                draggable={false}
                onClick={() => setSelectedImg(null)}
              />
            </motion.div>

            {/* Navigation Buttons in Modal */}
            <button
              onClick={prevISO}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white/20 hover:bg-white/40 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextISO}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white/20 hover:bg-white/40 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      )}

    </section>
  );
};

export default Spend;