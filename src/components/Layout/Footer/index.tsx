"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="relative mt-12 sm:mt-16 md:mt-20 bg-[#1C1C1E] text-foottext pt-10 sm:pt-14 md:pt-16 pb-6 sm:pb-8 md:pb-10">
      
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-500 via-gray-400 to-red-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* GRID 3 KOLOM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">

          {/* ========== 1. LOGO DI TENGAH & ABOUT ========== */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-4 sm:mb-6">
              <Image
                src="/Kontent/LOGO 3.jpg"
                alt="Company Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <p className="text-xs sm:text-sm md:text-[15px] leading-relaxed text-gray-300 max-w-xs px-4 sm:px-0">
              Kami adalah perusahaan yang bergerak di bidang 
              <b> Mechanical, Electrical & Automation System</b>. 
              Mengutamakan kualitas, ketepatan waktu, dan hubungan profesional.
            </p>
          </div>

          {/* ========== 2. CONTACT INFO ========== */}
          <div className="space-y-4 sm:space-y-5 text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-100 tracking-wide mb-4 sm:mb-6">
              Kontak Kami
            </h3>

            <div className="flex items-start gap-3 sm:gap-4 justify-center md:justify-start px-4 sm:px-0">
              <div className="w-5 sm:w-6 md:w-7 flex-shrink-0 flex items-start justify-center mt-0.5">
                <Icon icon="weui:location-outlined" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-500" />
              </div>
              <Link
                href="https://maps.app.goo.gl/rHXcn3mr2hpYdCLc7?g_st=ic"
                target="_blank"
                className="hover:text-red-400 transition-colors text-xs sm:text-sm md:text-[15px] leading-relaxed text-center md:text-left max-w-xs"
              >
                Dusun Kemuning, Gambir Kuning, Kraton, Pasuruan – Jawa Timur
              </Link>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 justify-center md:justify-start">
              <div className="w-5 sm:w-6 md:w-7 flex-shrink-0 flex items-center justify-center">
                <Icon icon="majesticons:phone-retro-line" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-500" />
              </div>
              <Link href="tel:+6285731000076" className="hover:text-red-400 transition-colors text-xs sm:text-sm md:text-[15px]">
                085731000076
              </Link>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 justify-center md:justify-start">
              <div className="w-5 sm:w-6 md:w-7 flex-shrink-0 flex items-center justify-center">
                <Icon icon="clarity:email-line" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-500" />
              </div>
              <Link
                href="mailto:kurniajayatek@gmail.com"
                className="hover:text-red-400 transition-colors text-xs sm:text-sm md:text-[15px] break-all"
              >
                kurniajayatek@gmail.com
              </Link>
            </div>
          </div>

          {/* ========== 3. SOCIAL MEDIA ========== */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-100 tracking-wide mb-4 sm:mb-6">
              Temukan Kami
            </h3>

            <div className="flex gap-4 sm:gap-5">
              <Link href="#" className="hover:text-red-400 hover:scale-110 transition-all duration-200">
                <Icon icon="ri:facebook-fill" className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />
              </Link>
              <Link href="#" className="hover:text-red-400 hover:scale-110 transition-all duration-200">
                <Icon icon="fa6-brands:linkedin" className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />
              </Link>
              <Link href="#" className="hover:text-red-400 hover:scale-110 transition-all duration-200">
                <Icon icon="fa6-brands:instagram" className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />
              </Link>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 sm:mt-12 md:mt-14 pt-4 sm:pt-5 md:pt-6"></div>

        {/* COPYRIGHT */}
        <p className="text-center text-xs sm:text-sm text-gray-400">
          © {new Date().getFullYear()} Kurnia Jaya Teknik. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
