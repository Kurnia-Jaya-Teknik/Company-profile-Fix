"use client";
import React, { FC, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ShieldCheck, FileCheck, Landmark } from "lucide-react";

const Spend: FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

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
                onClick={() => setSelectedImg("/Kontent/Gambar 12.png")}
                className="cursor-pointer flex-shrink-0"
              >
                <div className="relative">
                  <Image
                    src="/Kontent/Gambar 12.png"
                    alt="Sertifikat ISO CV Kurnia Jaya Teknik"
                    width={400}
                    height={550}
                    className="object-contain rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 max-w-[300px] md:max-w-[400px]"
                  />
                  <div className="absolute -top-3 -right-3 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    ISO Certified
                  </div>
                </div>
              </motion.div>

              {/* Certificate Info */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-500 p-3 rounded-xl">
                    <ShieldCheck size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      Sertifikasi ISO
                    </h3>
                      <p className="text-red-600 dark:text-red-400 font-semibold">
                      Standar Manajemen Mutu Internasional
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                  CV. Kurnia Jaya Teknik telah menerima <strong>Surat Pemberitahuan Proses Sertifikasi ISO</strong>, 
                  yang menunjukkan komitmen kami terhadap standar kualitas internasional dalam layanan rekayasa 
                  mekanikal, elektrikal, dan otomasi.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Manajemen Mutu</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Sistem terdokumentasi & terstandar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Kepuasan Pelanggan</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Fokus pada kebutuhan klien</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Perbaikan Berkelanjutan</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Evaluasi & optimasi proses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Kredibilitas Global</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Pengakuan internasional</p>
                    </div>
                  </div>
                </div>
              </div>
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
            className="relative max-w-4xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImg}
              alt="Preview"
              width={900}
              height={1200}
              className="object-contain rounded-lg max-h-[85vh]"
              draggable={false}
            />

            <button
              className="absolute -top-3 -right-3 bg-red-600 text-white w-9 h-9 rounded-full 
              flex items-center justify-center text-xl shadow-lg hover:bg-red-700"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}

    </section>
  );
};

export default Spend;
