"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import VisionMission from "@/components/VisionMission";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  // Trigger animasi saat user scroll
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const fadeLeft = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  const fadeRight = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-0">
      <div className="container mx-auto max-w-7xl px-4">

        {/* ======================================== */}
        {/*             COMPANY HEADER               */}
        {/* ======================================== */}

        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.8 }}
          className="bg-heroBg dark:bg-midnight_text rounded-3xl flex flex-col items-center text-center py-16 px-6 mb-14 shadow-sm"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-midnight_text dark:text-white mb-6">
            Tentang <span className="text-primary">Kami</span>
          </h2>

          {/* Bigger centered logo */}
          <div className="flex justify-center mb-10">
            <div className="relative w-64 h-36">
              <Image
                src="/Kontent/LOGO 2.png"
                alt="CV. Kurnia Jaya Teknik Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* GRID: image – text – image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full items-stretch">

            {/* Left Image */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ duration: 0.8 }}
              className="flex justify-center items-stretch h-full"
            >
              <div className="w-full overflow-hidden flex rounded-2xl">
                <Image
                  src="/Kontent/Gambar 4.jpg"
                  alt="Gambar 1"
                  width={350}
                  height={500}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Center Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center items-center h-full"
            >
              <div className="text-base text-muted dark:text-white/70 leading-relaxed text-justify space-y-6">
                <p>
                  Dalam menjalankan usahanya, perusahaan kami mempunyai prinsip
                  tanggung jawab dan kepercayaan, sehingga diharapkan mampu
                  menciptakan hubungan yang efisien antara pihak internal dan
                  eksternal perusahaan. Perusahaan kami memiliki tenaga ahli
                  bersertifikasi dan berpengalaman dengan komitmen tinggi
                  terhadap standar K3 dan lingkungan kerja.
                </p>
                <p>
                  Kurnia Jaya Teknik merupakan perusahaan berbadan hukum CV yang
                  berdiri pada 12 Maret 2019 di Pasuruan. Bergerak dalam bidang
                  kontraktor mekanikal, elektrikal, sistem otomasi, perdagangan,
                  dan jasa lainnya.
                </p>
                <p>
                  Seiring memasuki era industri 4.0, kami terus melakukan inovasi
                  dan pengembangan teknologi untuk menjadi perusahaan yang handal
                  dan dapat dipercaya.
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center items-stretch h-full"
            >
              <div className="w-full overflow-hidden flex rounded-2xl">
                <Image
                  src="/Kontent/Gambar 5.jpg"
                  alt="Gambar 2"
                  width={350}
                  height={500}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            </motion.div>

          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="mt-10 flex gap-3 items-center bg-primary text-white py-3 px-10 rounded-lg border border-primary hover:bg-transparent hover:text-primary transition-all"
          >
            Hubungi Kami
            <Icon icon="solar:alt-arrow-right-linear" width="16" />
          </Link>
        </motion.div>

        {/* ======================================== */}
        {/*             VISION & MISSION             */}
        {/* ======================================== */}
        <VisionMission />

        {/* ======================================== */}
        {/*              COMPANY VALUES              */}
        {/* ======================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:grid md:grid-cols-3 gap-6 mb-12 items-center md:items-start"
        >
          {[
            {
              icon: "solar:check-circle-bold",
              title: "Kualitas Terjamin",
              text: "Kami hanya menyediakan produk peralatan listrik dengan kualitas terbaik dan terpercaya.",
            },
            {
              icon: "solar:user-hand-up-bold",
              title: "Pelayanan Profesional",
              text: "Tim profesional kami siap memberikan pelayanan terbaik dan solusi tepat.",
            },
            {
              icon: "solar:heart-bold",
              title: "Melayani Jawa Timur",
              text: "Menyediakan akses mudah terhadap peralatan listrik berkualitas di seluruh Jawa Timur.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-heroBg dark:bg-midnight_text rounded-2xl p-8 flex flex-col items-center shadow-sm w-full max-w-sm"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-white dark:bg-darkmode rounded-full flex items-center justify-center shadow-lg">
                  <Icon icon={item.icon} width="48" className="text-primary" />
                </div>
              </div>
              <h3 className="text-22 font-semibold text-midnight_text dark:text-white mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-base text-muted dark:text-white/70 text-center">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ======================================== */}
        {/*                EXPERTISE                 */}
        {/* ======================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-heroBg dark:bg-midnight_text rounded-3xl px-6 lg:px-16 py-14 shadow-sm"
        >
          <h2 className="text-center md:text-4xl text-3xl font-semibold text-midnight_text dark:text-white mb-12">
            Bidang <span className="text-primary">Keahlian</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "solar:plug-circle-bold",
                title: "Electrical System",
                desc: "Sistem kelistrikan lengkap untuk kebutuhan proyek industri maupun komersial.",
              },
              {
                icon: "solar:settings-bold",
                title: "Mechanical System",
                desc: "Peralatan mekanik berkualitas untuk mendukung operasional Anda.",
              },
              {
                icon: "solar:cpu-bolt-bold",
                title: "Automation System",
                desc: "Sistem otomasi modern untuk meningkatkan efisiensi dan produktivitas.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <Icon
                  icon={item.icon}
                  width="64"
                  className="text-primary mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-midnight_text dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-muted dark:text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;