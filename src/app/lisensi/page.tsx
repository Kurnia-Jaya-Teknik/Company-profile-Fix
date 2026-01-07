"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

// Variants animasi muncul saat scroll
const TopAnimation = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const lisensiData = [
  {
    title: "Surat Pemberitahuan Proses Sertifikasi ISO",
    img: "/images/Notification Letter - CV Kurnia Jaya Teknik ISO.jpg",
    desc: "Surat ini menyatakan bahwa CV Kurnia Jaya Teknik sedang dalam proses sertifikasi ISO 9001:2015 dan ISO 45001:2018 oleh AMTIVO Group.",
    detail: "Surat Keterangan Terdaftar adalah bukti legalitas awal perusahaan...",
  },
  {
    title: "Nomor Induk Berusaha",
    img: "/Kontent/Gambar 12.png",
    desc: "Identitas pelaku usaha yang diterbitkan pemerintah sebagai legalitas bisnis.",
    detail:
      "Nomor Induk Berusaha (NIB) adalah nomor identitas wajib setiap pelaku usaha...",
  },
  {
    title: "Nomor Induk Berusaha",
    img: "/Kontent/Gambar 11.png",
    desc: "Identitas pelaku usaha sebagai bukti registrasi resmi.",
    detail:
      "NIB ini merupakan bukti tambahan legalitas yang telah diverifikasi...",
  },
  {
    title: "Surat Izin Usaha Perdagangan",
    img: "/Kontent/Gambar 9.jpg",
    desc: "Izin resmi pemerintah untuk menjalankan usaha perdagangan.",
    detail: "SIUP adalah dokumen perizinan untuk aktivitas perdagangan secara legal...",
  },
  {
    title: "Izin Usaha Industri",
    img: "/Kontent/Gambar 10.jpg",
    desc: "Dokumen izin untuk menjalankan usaha pada sektor industri.",
    detail:
      "Izin Usaha Industri menandakan bahwa perusahaan memenuhi standar pemerintah...",
  },
  {
    title: "NPWP",
    img: "/Kontent/Gambar 3.jpg",
    desc: "Nomor Pokok Wajib Pajak sebagai identitas perpajakan perusahaan.",
    detail:
      "NPWP digunakan sebagai identitas wajib pajak dan keperluan administrasi...",
  },
  
  
  
];

const Lisensi = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const breadcrumbLinks = [
    { href: "/", text: "Beranda" },
    { href: "/lisensi", text: "Sertifikat" },
  ];

  return (
    <section className="min-h-screen pt-36 pb-12 bg-white dark:bg-darkmode">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Title + Breadcrumb */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 mt-8">
          <h1 className="font-bold md:text-5xl sm:text-4xl text-3xl text-midnight_text dark:text-white">
            Sertifikat
          </h1>
          <Breadcrumb links={breadcrumbLinks} />
        </div>

        {/* Subtitle (Animasi muncul saat scroll) */}
        <motion.div
          variants={TopAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="items-start mb-6"
        >
          <h2 className="font-semibold md:text-35 sm:text-28 text-24 text-midnight_text dark:text-white text-center">
            Sertifikat <span className="text-primary">Perusahaan</span>
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

        {/* Popup Modal */}
        {selectedIdx !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-0"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Overlay blur + gelap */}
            <div className="absolute inset-0 backdrop-blur-md bg-black/65" />
            <div className="relative z-10" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setSelectedIdx(null)}
                className="absolute -top-4 -right-4 bg-red-500 text-white w-8 h-8 rounded-full shadow-md flex items-center justify-center hover:bg-red-600 transition-all"
                aria-label="Close"
              >
                ✕
              </button>
              <Image
                src={lisensiData[selectedIdx].img}
                alt="Preview"
                width={1000}
                height={700}
                className="object-contain w-full max-h-[85vh] rounded-2xl shadow-lg"
              />
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Lisensi;
