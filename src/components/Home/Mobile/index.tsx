"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const partnerLogos = ["/Kontent/Nestle.png", "/Kontent/Gea.jpg"];

const Mobile = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

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
  const logoAnimation = (index: number) => ({
    initial: { scale: 0.8, opacity: 0 },
    animate: inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 },
    transition: { duration: 0.5, delay: 0.2 + index * 0.1 },
  });

  return (
    <section className="dark:bg-darkmode py-14 overflow-x-hidden">
      <div className="container lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 mx-auto">
        <div
          ref={ref}
          className="dark:bg-midnight_text bg-white rounded-3xl md:py-20 py-10 2xl:pr-14 2xl:pl-20 sm:px-14 px-6 shadow-lg"
        >
          <motion.div {...TopAnimation} className="items-start mb-12 text-center">
            <h2 className="font-semibold md:text-35 sm:text-28 text-24 text-midnight_text dark:text-white">
              Client <span className="text-primary">Kami</span>
            </h2>
            <p className="text-center mt-4 text-base text-muted dark:text-white dark:text-opacity-70">
              Klien terpilih yang mempercayakan proyek mekanikal & elektrikal kepada kami
            </p>
          </motion.div>

          <motion.div {...BottomAnimation} className="flex justify-center mt-8">
            <div className="grid grid-cols-2 gap-8 justify-items-center">
              {partnerLogos.map((logo, index) => (
                <motion.div
                  key={logo}
                  {...logoAnimation(index)}
                  className="flex items-center justify-center p-6 bg-white dark:bg-midnight_text rounded-xl border border-border dark:border-dark_border shadow-sm hover:shadow-md transition-all hover:scale-105"
                >
                  <Image
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    width={150}
                    height={100}
                    className="object-contain max-h-20 w-auto"
                    unoptimized
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="text-center mt-8 flex justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
            >
              Lihat Portofolio Pekerjaan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
