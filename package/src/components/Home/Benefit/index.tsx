"use client";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const galleryImages = [
  "/Kontent/1.jpg",
  "/Kontent/2.jpg",
  "/Kontent/3.jpg",
  "/Kontent/4.jpg",
  "/Kontent/5.jpg",
];

const Benefit = () => {
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
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
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
          className="dark:bg-midnight_text bg-heroBg rounded-3xl md:py-20 py-10 2xl:pr-14 2xl:pl-20 sm:px-14 px-6"
        >
          <motion.div {...TopAnimation} className="items-start mb-12">
            <h2 className="font-bold md:text-35 sm:text-28 text-24 text-midnight_text dark:text-white text-center">
              <span className="bg-border dark:bg-darkHeroBg rounded-lg text-primary max-w-max px-3 py-1">
                Gallery
              </span>
            </h2>
            <p className="text-center mt-4 text-base text-muted dark:text-white dark:text-opacity-70">
              Dokumentasi Proyek dan Karya Kami
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {galleryImages.map((image, index) => (
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
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Benefit;
