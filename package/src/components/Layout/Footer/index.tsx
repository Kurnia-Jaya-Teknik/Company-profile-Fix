"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-[#1C1C1E] text-foottext pt-16 pb-10">
      
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-500 via-gray-400 to-red-500" />

      <div className="container mx-auto px-4 lg:max-w-6xl">

        {/* GRID 3 KOLOM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* ========== 1. LOGO DI TENGAH & ABOUT ========== */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/Kontent/LOGO 3.jpg"   // LOGO KOTAK
              alt="Company Logo"
              width={170}
              height={170}
              className="object-contain"
              priority
            />

            <p className="mt-6 text-[15px] leading-relaxed text-gray-300 max-w-xs">
              Kami adalah perusahaan yang bergerak di bidang 
              <b> Mechanical, Electrical & Automation System</b>. 
              Mengutamakan kualitas, ketepatan waktu, dan hubungan profesional.
            </p>
          </div>

          {/* ========== 2. CONTACT INFO ========== */}
          <div className="space-y-6 text-center md:text-left md:pl-6">
            <h3 className="text-[18px] font-semibold text-gray-100 tracking-wide mb-2">
              Kontak Kami
            </h3>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Icon icon="weui:location-outlined" className="w-6 h-6 text-red-500" />
              <Link
                href="https://maps.app.goo.gl/rHXcn3mr2hpYdCLc7?g_st=ic"
                target="_blank"
                className="hover:text-red-400 transition"
              >
                Dusun Kemuning, Gambir Kuning, Kraton, Pasuruan – Jawa Timur
              </Link>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Icon icon="majesticons:phone-retro-line" className="w-6 h-6 text-red-500" />
              <Link href="tel:+6234356188810" className="hover:text-red-400 transition">
                (0343) 5618810
              </Link>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Icon icon="clarity:email-line" className="w-6 h-6 text-red-500" />
              <Link
                href="mailto:kurniajayatek@gmail.com"
                className="hover:text-red-400 transition"
              >
                kurniajayatek@gmail.com
              </Link>
            </div>
          </div>

          {/* ========== 3. SOCIAL MEDIA ========== */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[18px] font-semibold text-gray-100 tracking-wide mb-4">
              Temukan Kami
            </h3>

            <div className="flex gap-5">
              <Link href="#" className="hover:text-red-400 transition">
                <Icon icon="ri:facebook-fill" width="32" height="32" />
              </Link>
              <Link href="#" className="hover:text-red-400 transition">
                <Icon icon="fa6-brands:linkedin" width="32" height="32" />
              </Link>
              <Link href="#" className="hover:text-red-400 transition">
                <Icon icon="fa6-brands:instagram" width="32" height="32" />
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
