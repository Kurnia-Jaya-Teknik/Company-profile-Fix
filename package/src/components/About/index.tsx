"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import VisionMission from "@/components/VisionMission";

const About = () => {
  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-0">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        {/* Company Overview */}
        <div className="bg-heroBg dark:bg-midnight_text rounded-3xl lg:px-6 px-2 py-0 mb-0">
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
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="13"
                  height="13"
                />
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
          <div className="bg-heroBg dark:bg-midnight_text rounded-2xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Icon
                icon="solar:medal-ribbons-star-bold"
                width="48"
                height="48"
                className="text-primary"
              />
            </div>
            <h3 className="text-22 font-semibold text-midnight_text dark:text-white mb-3">
              Kualitas Terjamin
            </h3>
            <p className="text-base text-muted dark:text-white dark:text-opacity-70">
              Kami hanya menyediakan produk peralatan listrik dengan kualitas terbaik dan terpercaya untuk memastikan kepuasan pelanggan.
            </p>
          </div>

          <div className="bg-heroBg dark:bg-midnight_text rounded-2xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Icon
                icon="solar:hand-stars-bold"
                width="48"
                height="48"
                className="text-primary"
              />
            </div>
            <h3 className="text-22 font-semibold text-midnight_text dark:text-white mb-3">
              Pelayanan Profesional
            </h3>
            <p className="text-base text-muted dark:text-white dark:text-opacity-70">
              Tim profesional kami siap memberikan pelayanan terbaik dan solusi yang tepat untuk setiap kebutuhan peralatan listrik Anda.
            </p>
          </div>

          <div className="bg-heroBg dark:bg-midnight_text rounded-2xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Icon
                icon="solar:map-point-bold"
                width="48"
                height="48"
                className="text-primary"
              />
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
        <div className="bg-heroBg dark:bg-midnight_text rounded-3xl lg:px-16 px-4 py-12">
          <h2 className="md:text-35 sm:text-28 text-24 font-semibold text-midnight_text dark:text-white text-center mb-8">
            Bidang <span className="text-primary">Keahlian</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Icon
                icon="solar:plug-circle-bold"
                width="64"
                height="64"
                className="text-primary mx-auto mb-4"
              />
              <h3 className="text-20 font-semibold text-midnight_text dark:text-white mb-2">
                Electrical System
              </h3>
              <p className="text-base text-muted dark:text-white dark:text-opacity-70">
                Sistem kelistrikan lengkap untuk berbagai kebutuhan proyek
              </p>
            </div>

            <div className="text-center">
              <Icon
                icon="solar:settings-bold"
                width="64"
                height="64"
                className="text-primary mx-auto mb-4"
              />
              <h3 className="text-20 font-semibold text-midnight_text dark:text-white mb-2">
                Mechanical System
              </h3>
              <p className="text-base text-muted dark:text-white dark:text-opacity-70">
                Peralatan mekanik berkualitas untuk mendukung operasional
              </p>
            </div>

            <div className="text-center">
              <Icon
                icon="solar:cpu-bolt-bold"
                width="64"
                height="64"
                className="text-primary mx-auto mb-4"
              />
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

