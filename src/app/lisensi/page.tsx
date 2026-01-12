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

// Kategori Sertifikat
export type CertificateCategory = "scissor" | "supervisor-scaffolder" | "teknisi-k3-listrik" | "teknisi-k3-peranca" | "tkbt-2" | "welder" | "all";

const categoryLabels: Record<CertificateCategory, string> = {
  all: "Semua Sertifikat",
  scissor: "Scissor",
  "supervisor-scaffolder": "Supervisor Scaffolder",
  "teknisi-k3-listrik": "Teknisi K3 Listrik",
  "teknisi-k3-peranca": "Teknisi K3 Peranca",
  "tkbt-2": "TKBT 2",
  welder: "Welder",
};

const categoryDescriptions: Record<CertificateCategory, string> = {
  all: "Koleksi lengkap sertifikat perusahaan dan karyawan kami mencakup berbagai bidang keahlian dan kompetensi profesional dengan standar internasional.",
  scissor: "Sertifikat keahlian dalam penggunaan dan penguasaan peralatan Scissor dengan standar keselamatan internasional.",
  "supervisor-scaffolder": "Sertifikat untuk profesional yang mengelola dan mengawasi proyek scaffolding dengan kompetensi tinggi.",
  "teknisi-k3-listrik": "Sertifikat Teknisi Kesehatan dan Keselamatan Kerja (K3) khusus untuk sektor kelistrikan dan instalasi listrik.",
  "teknisi-k3-peranca": "Sertifikat Teknisi K3 untuk perancang dengan fokus pada desain dan perencanaan sistem keselamatan kerja.",
  "tkbt-2": "Sertifikat Tenaga Kerja Bersertifikat Tingkat 2 yang menunjukkan kompetensi profesional sesuai standar nasional.",
  welder: "Sertifikat Welder untuk tukang las dengan kualifikasi internasional dan standar kualitas pengelasan tinggi.",
};

interface SertifikatItem {
  title: string;
  category: Exclude<CertificateCategory, "all">;
  img: string;
  desc: string;
  detail: string;
}

const lisensiData: SertifikatItem[] = [
  {
    title: "Scissor Lift - Muwafiqur",
    category: "scissor",
    img: "/Kontent/sertifikat/Scissor Lift-Muwafiqur_page-0001.jpg",
    desc: "Sertifikat keahlian Scissor Lift dari peserta pelatihan.",
    detail: "Sertifikat Scissor Lift dengan standar keselamatan internasional.",
  },
  {
    title: "Supervisor Scaffolder - Muwafiqur",
    category: "supervisor-scaffolder",
    img: "/Kontent/sertifikat/Supervisor Scaffolder-Muwafiqur_page-0001.jpg",
    desc: "Sertifikat Supervisor Scaffolder profesional.",
    detail: "Sertifikat untuk profesional scaffolding tingkat supervisor.",
  },
  {
    title: "Teknisi K3 Listrik - M Bustomi",
    category: "teknisi-k3-listrik",
    img: "/Kontent/sertifikat/Teknisi K3 Listrik-M Bustomi_page-0001.jpg",
    desc: "Sertifikat Teknisi K3 Listrik profesional.",
    detail: "Sertifikat untuk sektor kelistrikan dan instalasi listrik.",
  },
  {
    title: "Teknisi Perancah - Bustomi",
    category: "teknisi-k3-peranca",
    img: "/Kontent/sertifikat/Teknisi Perancah-Bustomi_page-0001.jpg",
    desc: "Sertifikat Teknisi K3 Peranca terstandar.",
    detail: "Sertifikat untuk perencanaan sistem keselamatan kerja.",
  },
  {
    title: "TKBT 2 - Ahmad Fuiji",
    category: "tkbt-2",
    img: "/Kontent/sertifikat/TKBT 2-Ahmad Fuiji_page-0001.jpg",
    desc: "Sertifikat TKBT 2 resmi pemerintah.",
    detail: "Sertifikat Tenaga Kerja Bersertifikat Tingkat 2.",
  },
  {
    title: "TKBT 2 - Lukman Hadi",
    category: "tkbt-2",
    img: "/Kontent/sertifikat/TKBT 2-Lukman Hadi_page-0001.jpg",
    desc: "Sertifikat TKBT 2 resmi pemerintah.",
    detail: "Sertifikat Tenaga Kerja Bersertifikat Tingkat 2.",
  },
  {
    title: "TKBT 2 - M. Fatkhur Rochman",
    category: "tkbt-2",
    img: "/Kontent/sertifikat/TKBT 2-M. Fatkhur Rochman_page-0001.jpg",
    desc: "Sertifikat TKBT 2 resmi pemerintah.",
    detail: "Sertifikat Tenaga Kerja Bersertifikat Tingkat 2.",
  },
  {
    title: "TKBT 2 - Anang",
    category: "tkbt-2",
    img: "/Kontent/sertifikat/TKBT2 Anang_page-0001.jpg",
    desc: "Sertifikat TKBT 2 resmi pemerintah.",
    detail: "Sertifikat Tenaga Kerja Bersertifikat Tingkat 2.",
  },
  {
    title: "TKBT 2 - Nur Salim",
    category: "tkbt-2",
    img: "/Kontent/sertifikat/TKBT2 Nur Salim_page-0001.jpg",
    desc: "Sertifikat TKBT 2 resmi pemerintah.",
    detail: "Sertifikat Tenaga Kerja Bersertifikat Tingkat 2.",
  },
];

const Lisensi = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CertificateCategory>("all");

  const breadcrumbLinks = [
    { href: "/", text: "Beranda" },
    { href: "/lisensi", text: "Sertifikat" },
  ];

  // Filter data berdasarkan kategori
  const filteredData = selectedCategory === "all" 
    ? lisensiData 
    : lisensiData.filter(item => item.category === selectedCategory);

  return (
    <section className="min-h-screen pt-36 pb-12 bg-white dark:bg-darkmode">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Title + Breadcrumb */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 mt-8">
          <h1 className="font-bold md:text-5xl sm:text-4xl text-3xl text-midnight_text dark:text-white">
            Sertifikat <span className="text-primary">Perusahaan & Karyawan</span>
          </h1>
          <Breadcrumb links={breadcrumbLinks} />
        </div>

        {/* Filter Dropdown */}
        <motion.div
          variants={TopAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="relative">
            <label htmlFor="category-filter" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Pilih Jenis Sertifikat:
            </label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as CertificateCategory)}
              className="px-6 py-3 rounded-lg border-2 border-primary bg-white dark:bg-gray-800 
                text-midnight_text dark:text-white font-semibold cursor-pointer 
                hover:border-primary/70 focus:outline-none focus:ring-2 focus:ring-primary/50 
                transition-all duration-300 min-w-[280px] appearance-none pr-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23167EF7' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
              }}
            >
              {Object.entries(categoryLabels).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Kategori Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Menampilkan <span className="font-semibold text-primary">{filteredData.length}</span> sertifikat
          </p>
        </motion.div>

        {/* Subheader Kategori */}
        {(
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10 p-6 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl border border-primary/20 dark:border-primary/30"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              {categoryLabels[selectedCategory]}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
              {categoryDescriptions[selectedCategory]}
            </p>
          </motion.div>
        )}

        {/* Card Grid */}
        {filteredData.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
          >
            {filteredData.map((item, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedIdx(lisensiData.indexOf(item))}
                className="bg-white dark:bg-darkmode rounded-2xl shadow-md border border-gray-100 
                  dark:border-gray-700 p-5 flex flex-col items-center w-full max-w-[320px]
                  min-h-[340px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer
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

                <h2 className="text-lg font-bold text-primary text-center mb-2 line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-center text-sm line-clamp-3">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Belum ada sertifikat untuk kategori ini
            </p>
          </div>
        )}

        {/* Popup Modal */}
        {selectedIdx !== null && lisensiData[selectedIdx]?.img && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Overlay blur + gelap */}
            <div className="absolute inset-0 backdrop-blur-md bg-black/65" />
            <div className="relative z-10" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setSelectedIdx(null)}
                className="absolute -top-4 -right-4 bg-red-500 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-red-600 transition-all font-bold text-xl"
                aria-label="Close"
              >
                ✕
              </button>
              <Image
                src={lisensiData[selectedIdx].img}
                alt={lisensiData[selectedIdx].title}
                width={1000}
                height={700}
                className="object-contain w-full max-h-[85vh] rounded-2xl shadow-lg"
              />
              <p className="text-white text-center mt-4 font-semibold">
                {lisensiData[selectedIdx].title}
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Lisensi;
