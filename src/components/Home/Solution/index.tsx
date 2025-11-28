"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Solution = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // 20% elemen terlihat langsung animate 
  });

  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const fadeLeft = {
    hidden: { x: -60, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  const fadeRight = {
    hidden: { x: 60, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div
          ref={ref}
          className="bg-heroBg dark:bg-midnight_text rounded-3xl lg:px-16 px-4 py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">

            {/* Left Image */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src="/Kontent/Gambar 6.jpg"
                alt="Gambar 6"
                width={260}
                height={260}
                className="rounded-xl object-cover"
              />
            </motion.div>

            {/* Center Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <h1 className="md:text-35 sm:text-28 text-24 font-semibold text-midnight_text dark:text-white mb-4">
                Tentang <span className="text-primary">Kami</span>
              </h1>

              <p className="mt-2 text-base text-muted dark:text-white dark:text-opacity-70 max-w-md text-justify">
                CV. Kurnia Jaya Teknik adalah penyedia peralatan listrik terpercaya di Jawa Timur dengan pengalaman bertahun-tahun. Kami melayani kebutuhan peralatan listrik untuk berbagai proyek dengan kualitas terbaik dan pelayanan yang memuaskan.
              </p>

              <Link
                href="/about"
                className="lg:text-17 flex gap-4 w-fit items-center bg-primary text-white py-2 px-4 lg:py-3 lg:px-8 rounded-lg mt-8 border border-primary hover:text-primary hover:bg-transparent mx-auto transition-all"
              >
                Pelajari Lebih Lanjut
                <Icon icon="solar:alt-arrow-right-linear" width="13" height="13" />
              </Link>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <Image
                src="/Kontent/Gambar 7.jpg"
                alt="Gambar 7"
                width={260}
                height={260}
                className="rounded-xl object-cover"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
