"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const ContactInfo = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const cardAnimation = (index: number) => ({
    initial: { scale: 0.9, opacity: 0 },
    animate: inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 },
    transition: { duration: 0.5, delay: 0.2 + index * 0.1 },
  });

  return (
    <>
      <section className="dark:bg-darkmode overflow-hidden pt-4 pb-10">
        <div
          ref={ref}
          className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 "
        >
          {/* ====================== 2 KOLOM (TEXT + GAMBAR) ====================== */}
<motion.div {...TopAnimation}>
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-4">

    {/* LEFT: TEXT */}
    <div className="space-y-4">
      <h2 className="font-extrabold text-28 sm:text-32 md:text-36 text-midnight_text dark:text-white leading-snug">
        <span className="text-primary">Kontak</span> & Informasi Perusahaan
      </h2>

      <p className="text-base sm:text-lg text-muted dark:text-darktext leading-relaxed">
        Hubungi kami untuk mendapatkan informasi lebih lanjut terkait layanan yang kami sediakan.
        Tim profesional kami siap merespon dengan cepat dan membantu kebutuhan Anda.
      </p>

      <div className="h-1 w-20 bg-primary rounded-full"></div>
    </div>

    {/* RIGHT: IMAGE */}
    <div className="flex justify-center md:justify-end">
      <div className="relative group">
        <Image
          src="/Kontent/Gambar 11.png"
          alt="Kontak Image"
          width={480}
          height={480}
          className="rounded-2xl object-cover  
          group-hover:scale-[1.02] transition-transform duration-300"
        />

        {/* Decorative Glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 
        bg-primary/40 blur-xl"></div>
      </div>
    </div>

  </div>
</motion.div>


          {/* ====================== CARDS & MAPS ====================== */}
          <motion.div {...bottomAnimation}>
            <div className="grid lg:grid-cols-2 gap-6 mt-8">

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {/* CARD 1 */}
                <motion.div
                  {...cardAnimation(0)}
                  className="bg-white dark:bg-midnight_text p-5 rounded-xl border border-border dark:border-dark_border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-2.5 rounded-lg flex-shrink-0 flex items-center justify-center w-[48px] h-[48px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#FFFFFF" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-20 font-bold text-midnight_text dark:text-white mb-2">Alamat</h3>
                      <p className="text-base text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                        <strong className="text-midnight_text dark:text-white">CV. Kurnia Jaya Teknik</strong>
                        <br /> Jawa Timur, Indonesia
                        <br />
                        <span className="text-sm text-muted dark:text-white dark:text-opacity-60">
                          Koordinat: -7.6978194, 112.8637701
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* CARD 2 */}
                <motion.div
                  {...cardAnimation(1)}
                  className="bg-white dark:bg-midnight_text p-5 rounded-xl border border-border dark:border-dark_border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-2.5 rounded-lg flex-shrink-0 flex items-center justify-center w-[48px] h-[48px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#FFFFFF" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-20 font-bold text-midnight_text dark:text-white mb-2">Telepon</h3>
                      <p className="text-base text-muted dark:text-white dark:text-opacity-70">
                        Hubungi kami untuk informasi lebih lanjut
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* CARD 3 */}
                <motion.div
                  {...cardAnimation(2)}
                  className="bg-white dark:bg-midnight_text p-5 rounded-xl border border-border dark:border-dark_border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-2.5 rounded-lg flex-shrink-0 flex items-center justify-center w-[48px] h-[48px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#FFFFFF" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-20 font-bold text-midnight_text dark:text-white mb-2">Email</h3>
                      <a
                        href="mailto:info@kurniajayateknik.com"
                        className="text-base text-primary hover:text-opacity-80 transition-all"
                      >
                        info@kurniajayateknik.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* CARD 4 */}
                <motion.div
                  {...cardAnimation(3)}
                  className="bg-white dark:bg-midnight_text p-5 rounded-xl border border-border dark:border-dark_border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-2.5 rounded-lg flex-shrink-0 flex items-center justify-center w-[48px] h-[48px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#FFFFFF" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-20 font-bold text-midnight_text dark:text-white mb-2">
                        Jam Operasional
                      </h3>
                      <p className="text-base text-muted dark:text-white dark:text-opacity-70">
                        Senin - Jumat: 08:00 - 17:00 WIB <br />
                        Sabtu: 08:00 - 12:00 WIB
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* WHATSAPP BUTTON */}
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white border-2 border-primary py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-all w-full font-bold text-17 shadow-md hover:shadow-lg cursor-pointer group"
                >
                  <Icon
                    icon="ic:baseline-whatsapp"
                    width="24"
                    height="24"
                    className="text-white group-hover:text-primary transition-colors flex-shrink-0"
                  />
                  <span className="group-hover:text-primary whitespace-nowrap">
                    Hubungi <span className="text-white group-hover:text-primary">Kami</span>
                  </span>
                </a>
              </div>

              {/* GOOGLE MAPS */}
              <motion.div
                {...cardAnimation(4)}
                className="w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg bg-white dark:bg-midnight_text border border-border dark:border-dark_border"
              >
                <div className="relative w-full h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1234567890!2d112.8637701!3d-7.6978194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7cfce434d890b%3A0x426ed7dc814a46d0!2sCV.%20Kurnia%20Jaya%20Teknik!5e0!3m2!1sid!2sid!4v1735123456789!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
