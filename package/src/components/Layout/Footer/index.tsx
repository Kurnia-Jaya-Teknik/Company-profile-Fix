"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-[#1C1C1E] text-foottext pt-16 pb-10">
      
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-500 via-gray-400 to-red-500" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">

        {/* GRID 3 KOLOM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">

          {/* ========== 1. LOGO DI TENGAH & ABOUT ========== */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-60 md:h-60 mx-auto mb-3">
              <Image
                src="/Kontent/Logo3.png"
                alt="Company Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <p className="text-sm sm:text-[15px] leading-relaxed text-gray-300 max-w-xs text-justify">
              Kami adalah perusahaan yang bergerak di bidang 
              <b> Mechanical, Electrical & Automation System</b>. 
              Mengutamakan kualitas, ketepatan waktu, dan hubungan profesional.
            </p>
          </div>

          {/* ========== 2. CONTACT INFO ========== */}
          <div className="space-y-5 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-100 tracking-wide mb-6">
              Kontak Kami
            </h3>

            <div className="flex items-start gap-4 justify-center md:justify-start">
              <Icon icon="weui:location-outlined" className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 flex-shrink-0 mt-0.5" />
              <Link
                href="https://maps.app.goo.gl/rHXcn3mr2hpYdCLc7?g_st=ic"
                target="_blank"
                className="hover:text-red-400 transition-colors text-sm sm:text-[15px] leading-relaxed text-left max-w-xs"
              >
                Dusun Kemuning, Gambir Kuning, Kraton, Pasuruan – Jawa Timur
              </Link>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Icon icon="majesticons:phone-retro-line" className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 flex-shrink-0" />
              <Link href="tel:+6285731000076" className="hover:text-red-400 transition-colors text-sm sm:text-[15px]">
                085731000076
              </Link>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Icon icon="clarity:email-line" className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 flex-shrink-0" />
              <Link
                href="mailto:kurniajayatek@gmail.com"
                className="hover:text-red-400 transition-colors text-sm sm:text-[15px]"
              >
                kurniajayatek@gmail.com
              </Link>
            </div>
          </div>

          {/* ========== 3. SOCIAL MEDIA ========== */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-100 tracking-wide mb-6">
              Temukan Kami
            </h3>

            <div className="flex gap-5">
              <Link href="#" className="hover:text-red-400 hover:scale-110 transition-all duration-200">
                <Icon icon="ri:facebook-fill" className="w-8 h-8 sm:w-9 sm:h-9" />
              </Link>
              <Link href="#" className="hover:text-red-400 hover:scale-110 transition-all duration-200">
                <Icon icon="fa6-brands:linkedin" className="w-8 h-8 sm:w-9 sm:h-9" />
              </Link>
              <Link href="#" className="hover:text-red-400 hover:scale-110 transition-all duration-200">
                <Icon icon="fa6-brands:instagram" className="w-8 h-8 sm:w-9 sm:h-9" />
              </Link>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-14 pt-6"></div>

        {/* COPYRIGHT */}
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Kurnia Jaya Teknik. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
