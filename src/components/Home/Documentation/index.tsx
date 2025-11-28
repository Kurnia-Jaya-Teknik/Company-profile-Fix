"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const galleryImages = [
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
];

const Documentation = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    galleryImages.forEach((img) => {
      const preload = new window.Image();
      preload.src = img;
      preload.onerror = () =>
        setImageErrors((prev) => ({ ...prev, [img]: true }));
    });
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
  const imageAnimation = (index: number) => ({
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
            {/* <p className="text-14 uppercase tracking-[0.4em] text-muted dark:text-white">
              Dokumentasi
            </p> */}
            <h2 className="font-semibold md:text-35 sm:text-28 text-24 text-midnight_text dark:text-white mt-2">
              Dokumentasi <span className="text-primary">Lapangan</span>
            </h2>
            <p className="text-center mt-4 text-base text-muted dark:text-white dark:text-opacity-70">
              Koleksi foto langsung dari proyek mekanikal, elektrikal, dan otomatisasi kami.
            </p>
          </motion.div>

          {/* Gallery */}
          <motion.div {...BottomAnimation} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {galleryImages.slice(0, 6).map((image, index) => (
              <motion.div
                key={index}
                {...imageAnimation(index)}
                className="relative overflow-hidden rounded-lg group cursor-pointer w-full"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={300}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay dihapus agar gambar tidak tertutup */}
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-8 flex justify-center">
            <Link
              href="/portfolio"
              className="text-17 flex gap-2 items-center bg-primary text-white py-3 px-8 rounded-lg border-2 border-primary hover:bg-white hover:text-primary hover:shadow-lg transition-all duration-300 group"
            >
              <span className="font-bold whitespace-nowrap">Lihat Portofolio Pekerjaan</span>
              <span className="group-hover:text-primary transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 19L19 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
