"use client";
import Image from "next/image";
import Link from "next/link";
import VisionMission from "@/components/VisionMission";

const About = () => {
  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-0">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        {/* Company Overview */}
        <div className="bg-white dark:bg-midnight_text rounded-3xl lg:px-6 px-2 py-0 mb-0 shadow-lg">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="md:text-35 sm:text-28 text-24 font-semibold text-midnight_text dark:text-white m-0 text-center mb-6">
                <span className="text-midnight_text dark:text-white">Tentang </span><span className="text-primary">Kami</span>
              </h2>
              <p className="text-base text-muted dark:text-white dark:text-opacity-70 mb-6 leading-relaxed whitespace-pre-line">
                Dalam menjalankan usahanya, perusahaan kami mempunyai prinsip tanggung jawab dan kepercayaan, sehingga diharapkan mampu menciptakan hubungan yang efisien antara pihak internal perusahaan dalam hal ini anggota dan pihak eksternal perusahaan dalam hal ini pengguna jasa dan atau pihak yang ada kaitan hubungan kerja dengan perusahaan. Perusahaan kami memiliki tenaga ahli bersertifikasi dan berpengalaman. Komitmen CV. Kurnia Jaya Teknik untuk menyelesaikan setiap amanah pekerjaan yang telah dipercayakan tidak terlepas dari peran setiap anggota dalam melakukan perencanaan, pelaksanaan dan pengendalian proyek dengan sistem manajemen dan metode yang efektif serta memperhatikan standar K3 (Keselamatan Kesehatan Kerja) dan lingkungan kerja.
              </p>
              <p className="text-base text-muted dark:text-white dark:text-opacity-70 mb-6 leading-relaxed whitespace-pre-line">
                Kurnia Jaya Teknik merupakan perusahaan berbadan hukum CV (Commanditaire Vennootschap) atau perseorangan dengan lokasi usaha berada di Pasuruan. Berdirinya perusahaan kami sebagai bentuk respon terhadap peluang di dunia engineering yang semakin terbuka dan berkembang di Indonesia. CV. Kurnia Jaya Teknik bergerak di bidang usaha kontraktor mekanikal, elektrikal, sistem otomasi, perdagangan dan jasa lainnya. Perusahaan ini berdiri pada tanggal 12 Maret 2019 berdasarkan akta nomor 08 yang dibuat oleh Notaris Achmad Haris Hidayat, SH., M.KN. Dan telah memperoleh persetujuan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia melalui surat keputusan nomor: AHU-0018171-AH.01.14 Tahun 2019, melalui surat keputusan tersebut perusahaan ditetapkan sebagai Perusahaan Persero Komanditer, yaitu menjadi CV. Kurnia Jaya Teknik.
              </p>
              <p className="text-base text-muted dark:text-white dark:text-opacity-70 mb-6 leading-relaxed whitespace-pre-line">
                Seiring memasuki era baru industri 4.0 dan sesuai visi & misi perusahaan, maka perusahaan kami akan terus menerus melakukan update dan upgrade teknologi demi menjadi perusahaan yang dapat dihandalkan dan terpercaya.
              </p>
              <Link
                href="/contact"
                className="lg:text-17 flex gap-4 w-fit items-center bg-primary text-white py-2 px-4 lg:py-3 lg:px-8 rounded-lg mt-6 border border-primary hover:text-primary hover:bg-transparent transition-all"
              >
                Hubungi Kami
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/Kontent/LOGO 2.png"
                  alt="CV. Kurnia Jaya Teknik Logo"
                  width={500}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <VisionMission />

        {/* Company Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-midnight_text rounded-2xl p-6 text-center shadow-md">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 10h7c-.53 4.12-3.28 7.79-7 8.94V12H5V7.3l7-3.89v8.59z" fill="#DC3545"/>
                </svg>
              </div>
            </div>
            <h3 className="text-22 font-semibold text-midnight_text dark:text-white mb-3">
              Kualitas Terjamin
            </h3>
            <p className="text-base text-muted dark:text-white dark:text-opacity-70">
              Kami hanya menyediakan produk peralatan listrik dengan kualitas terbaik dan terpercaya untuk memastikan kepuasan pelanggan.
            </p>
          </div>

          <div className="bg-white dark:bg-midnight_text rounded-2xl p-6 text-center shadow-md">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="#DC3545"/>
                </svg>
              </div>
            </div>
            <h3 className="text-22 font-semibold text-midnight_text dark:text-white mb-3">
              Pelayanan Profesional
            </h3>
            <p className="text-base text-muted dark:text-white dark:text-opacity-70">
              Tim profesional kami siap memberikan pelayanan terbaik dan solusi yang tepat untuk setiap kebutuhan peralatan listrik Anda.
            </p>
          </div>

          <div className="bg-white dark:bg-midnight_text rounded-2xl p-6 text-center shadow-md">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#DC3545"/>
                </svg>
              </div>
            </div>
            <h3 className="text-22 font-semibold text-midnight_text dark:text-white mb-3">
              Melayani Jawa Timur
            </h3>
            <p className="text-base text-muted dark:text-white dark:text-opacity-70">
              Kami melayani seluruh wilayah Jawa Timur dengan komitmen untuk memberikan akses mudah terhadap peralatan listrik berkualitas.
            </p>
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-white dark:bg-midnight_text rounded-3xl lg:px-16 px-4 py-12 shadow-lg">
          <h2 className="md:text-35 sm:text-28 text-24 font-semibold text-midnight_text dark:text-white text-center mb-8">
            Bidang <span className="text-primary">Keahlian</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="#DC3545" className="mx-auto mb-4">
                <path d="M13 2h-2v7H8l4 4 4-4h-3V2zM4 18h16v2H4z"/>
                <circle cx="12" cy="12" r="10" fill="none" stroke="#DC3545" strokeWidth="1.5"/>
              </svg>
              <h3 className="text-20 font-semibold text-midnight_text dark:text-white mb-2">
                Electrical System
              </h3>
              <p className="text-base text-muted dark:text-white dark:text-opacity-70">
                Sistem kelistrikan lengkap untuk berbagai kebutuhan proyek
              </p>
            </div>

            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="#DC3545" className="mx-auto mb-4">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
              </svg>
              <h3 className="text-20 font-semibold text-midnight_text dark:text-white mb-2">
                Mechanical System
              </h3>
              <p className="text-base text-muted dark:text-white dark:text-opacity-70">
                Peralatan mekanik berkualitas untuk mendukung operasional
              </p>
            </div>

            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="#DC3545" className="mx-auto mb-4">
                <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 1h4v4h-4V3zm0 6h4v4h-4V9zm-4-6h4v4H8V3zm0 6h4v4H8V9zm0 6h4v4H8v-4zm0 6h4v2H8v-2zm4 0h4v2h-4v-2zm0-6h4v4h-4v-4z"/>
                <path d="M13 11h-2v2.5L9.5 15H11v2l3-3.5h-1V11z" fill="white"/>
              </svg>
              <h3 className="text-20 font-semibold text-midnight_text dark:text-white mb-2">
                Automation System
              </h3>
              <p className="text-base text-muted dark:text-white dark:text-opacity-70">
                Sistem otomasi modern untuk efisiensi dan produktivitas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

