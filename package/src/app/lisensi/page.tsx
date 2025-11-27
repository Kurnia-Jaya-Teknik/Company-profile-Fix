"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

const TopAnimation = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const lisensiData = [
  {
    title: "Surat Keterangan Terdaftar",
    img: "/Kontent/L1.png",
    desc: "Dokumen resmi yang menyatakan bahwa perusahaan telah terdaftar secara hukum.",
    detail:
      "Surat Keterangan Terdaftar adalah bukti legalitas awal perusahaan...",
  },
  {
    title: "Nomor Induk Berusaha",
    img: "/Kontent/L2.png",
    desc: "Identitas pelaku usaha yang diterbitkan pemerintah sebagai legalitas bisnis.",
    detail:
      "Nomor Induk Berusaha (NIB) adalah nomor identitas wajib setiap pelaku usaha...",
  },
  {
    title: "Nomor Induk Berusaha",
    img: "/Kontent/L3.png",
    desc: "Identitas pelaku usaha sebagai bukti registrasi resmi.",
    detail:
      "NIB ini merupakan bukti tambahan legalitas yang telah diverifikasi...",
  },
  {
    title: "Surat Izin Usaha Perdagangan",
    img: "/Kontent/L4.png",
    desc: "Izin resmi pemerintah untuk menjalankan usaha perdagangan.",
    detail:
      "SIUP adalah dokumen perizinan untuk aktivitas perdagangan secara legal...",
  },
  {
    title: "Izin Usaha Industri",
    img: "/Kontent/L5.png",
    desc: "Dokumen izin untuk menjalankan usaha pada sektor industri.",
    detail:
      "Izin Usaha Industri menandakan bahwa perusahaan memenuhi standar pemerintah...",
  },
  {
    title: "NPWP",
    img: "/Kontent/L6.png",
    desc: "Nomor Pokok Wajib Pajak sebagai identitas perpajakan perusahaan.",
    detail:
      "NPWP digunakan sebagai identitas wajib pajak dan keperluan administrasi...",
  },
  {
    title: "Surat Pengukuhan PKP",
    img: "/Kontent/L7.png",
    desc: "Dokumen bahwa perusahaan telah dikukuhkan sebagai PKP.",
    detail:
      "PKP wajib memungut, menyetor, dan melaporkan pajak pertambahan nilai...",
  },
];

const Lisensi = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  
  const breadcrumbLinks = [
    { href: "/", text: "Beranda" },
    { href: "/lisensi", text: "Lisensi" },
  ];

  return (
    <section className="min-h-screen pt-36 pb-12 bg-white dark:bg-darkmode">
       <div className="container mx-auto px-4 max-w-6xl">

        {/* Title and Breadcrumb */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 mt-8">
          <h1 className="font-bold md:text-5xl sm:text-4xl text-3xl text-midnight_text dark:text-white">
            Lisensi
          </h1>
          <Breadcrumb links={breadcrumbLinks} />
        </div>

        {/* Subtitle */}
        <motion.div {...TopAnimation} className="items-start mb-6">
          <h2 className="font-semibold md:text-35 sm:text-28 text-24 text-midnight_text dark:text-white text-center">
            Legalitas <span className="text-primary">Perusahaan</span>
          </h2>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
          {lisensiData.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className="bg-white dark:bg-darkmode rounded-2xl shadow-md border border-gray-100 
              dark:border-gray-700 p-5 flex flex-col items-center w-full max-w-[320px]
              min-h-[340px] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer
              hover:border-primary/40"
            >
              <div className="w-full h-[220px] flex items-center justify-center overflow-hidden rounded-xl mb-4 bg-gray-50 dark:bg-gray-800">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={190}
                  className="object-contain w-[85%] h-full"
                />
              </div>

              <h2 className="text-lg font-bold text-primary text-center mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-center text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Popup Modal – Image Only */}
        {selectedIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center 
        bg-black/50 backdrop-blur-sm p-4">

            {/* Close Button */}
            <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-5 right-5 bg-white/80 dark:bg-gray-700/80
            w-10 h-10 flex items-center justify-center rounded-full text-gray-700 
            dark:text-gray-200 hover:bg-red-500 hover:text-white transition-all shadow-lg"
            >
            ✕
            </button>

            {/* Image Only */}
            <div className="max-w-3xl w-full flex items-center justify-center">
            <Image
                src={lisensiData[selectedIdx].img}
                alt="Preview"
                width={1200}
                height={800}
                className="object-contain w-full max-h-[90vh] rounded-lg shadow-xl"
            />
            </div>

        </div>
        )}


      </div>
    </section>
  );
};

export default Lisensi;
