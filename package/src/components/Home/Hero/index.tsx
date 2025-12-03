"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { Heroimage } from "@/app/api/data";
import { useEffect, useState } from "react";

const Hero = () => {
  const sliderImages = ["/Kontent/Gambar 1.jpg", "/Kontent/Gambar 2.jpg", "/Kontent/Gambar 3.jpg", "/Kontent/Gambar 8.jpg", "/Kontent/Gambar 9.jpg", "/Kontent/Gambar 10.jpg"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 1 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 1 },
  };
  return (
    <section className="relative pt-28 mb-10 bg-cover bg-center dark:bg-darkmode">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) relative z-1 md:max-w-(--breakpoint-md) px-4">
        <div className="grid grid-cols-12 items-start">
          <motion.div {...leftAnimation} className="lg:col-span-6 col-span-12">
            <h1 className="md:text-50 sm:text-40 text-28 text-midnight_text dark:text-white lg:text-start mb-9 lg:w-full w-3/4">
              CV. Kurnia Jaya Teknik
              <br />
              <span className="bg-border dark:bg-transparent md:text-50 text-36 rounded-lg lg:text-start text-primary max-w-max">
                Solusi Rekayasa Mekanikal, Elektrikal, 
              </span>
              <span>
                dan Otomasi yang Terpercaya
              </span>
              <br />
              di Jawa Timur.
            </h1>
            
            <p className="sm:text-19 text-16 text-muted dark:text-white dark:text-opacity-70 text-start lg:max-w-full sm:max-w-75% text-justify">
              CV. Kurnia Jaya Teknik adalah perusahaan berbadan hukum yang beroperasi di sektor kontraktor mekanikal, elektrikal, sistem otomasi, perdagangan, dan jasa pendukung lainnya. Dengan pengalaman dan kompetensi tim yang tersertifikasi, kami berkomitmen memberikan layanan berkualitas melalui perencanaan, pelaksanaan, dan pengendalian proyek yang efektif, serta selalu menempatkan standar K3 dan integritas sebagai prioritas utama.
            </p>

            <div className="flex items-center mt-12 mb-6">
              <Link
                href="/contact"
                className="text-17 flex gap-2 items-center bg-primary text-white py-3 px-8 rounded-lg border-2 border-primary hover:bg-white hover:text-primary hover:shadow-lg transition-all duration-300 group"
              >
                <span className="font-bold whitespace-nowrap">Hubungi Kami</span>
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="13"
                  height="13"
                  className="transition-colors"
                />
              </Link>
            </div>
            {/* Slider and Trusted by for tablet/mobile */}
            <div className="block lg:hidden mt-12">
              <div className="relative w-full max-w-[360px] sm:max-w-[480px] aspect-[16/9] mx-auto flex items-center justify-center">
                <Image
                  src={sliderImages[currentSlide]}
                  alt={`Gambar ${currentSlide + 1}`}
                  width={360}
                  height={202}
                  className="rounded-2xl object-cover w-full h-full"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {sliderImages.map((_, index) => (
                    <span
                      key={index}
                      className={`h-2 w-8 rounded-full transition-all ${
                        currentSlide === index ? "bg-primary" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <p className="text-18 text-muted dark:text-white dark:text-opacity-70 text-center mb-4">
                  Trusted by
                </p>
                <div className="flex space-x-4 sm:space-x-6 justify-center w-full items-center flex-wrap gap-4">
                  {Heroimage.map((item, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <Image
                        src={item.lightimage}
                        alt={`Trusted partner ${index + 1}`}
                        width={90}
                        height={45}
                        className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                        style={{ maxHeight: "45px", maxWidth: "100px", width: "auto", height: "auto" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          {/* Slider and Trusted by for desktop */}
          <motion.div
            {...rightAnimation}
            className="lg:col-span-6 col-span-12 pl-0 hidden lg:block"
          >
            <div className="relative w-full max-w-[560px] aspect-[16/9] mx-auto flex items-center justify-center">
              <Image
                src={sliderImages[currentSlide]}
                alt={`Gambar ${currentSlide + 1}`}
                width={560}
                height={315}
                className="rounded-2xl object-cover w-full h-full"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {sliderImages.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-8 rounded-full transition-all ${
                      currentSlide === index ? "bg-primary" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-26">
              <p className="text-18 text-muted dark:text-white dark:text-opacity-70 text-center mb-4">
                Trusted by
              </p>
              <div className="flex justify-center items-center gap-6 flex-wrap">
                {Heroimage.map((item, index) => (
                  <div key={index} className="flex items-center justify-center h-12">
                    <Image
                      src={item.lightimage}
                      alt={`Trusted partner ${index + 1}`}
                      width={100}
                      height={50}
                      className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                      style={{ maxHeight: "40px", width: "auto", height: "auto" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
