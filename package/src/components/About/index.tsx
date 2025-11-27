"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import VisionMission from "@/components/VisionMission";

const About = () => {
  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-0">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* ============================ */}
        {/*        COMPANY HEADER        */}
        {/* ============================ */}
        <div className="bg-heroBg dark:bg-midnight_text rounded-3xl flex flex-col items-center text-center py-12 px-6 mb-12 shadow-sm">
          <h2 className="md:text-5xl text-3xl font-bold text-midnight_text dark:text-white mb-6">
            Tentang <span className="text-primary">Kami</span>
          </h2>

          <div className="flex justify-center mb-8">
            <div className="relative w-56 h-32">
              <Image
                src="/Kontent/LOGO 2.png"
                alt="CV. Kurnia Jaya Teknik Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">
            {/* Left Image */}
              <div className="flex justify-center items-start h-full">
                <div className="w-full h-full rounded-2xl overflow-hidden flex items-center justify-center aspect-square">
                  <Image
                    src="/Kontent/Gambar 4.jpg"
                    alt="Gambar 1"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            {/* Text Content */}
            <div className="flex flex-col justify-center items-center">
              <div className="text-base text-muted dark:text-white/70 leading-relaxed text-justify space-y-6">
                <p>
                  Dalam menjalankan usahanya, perusahaan kami mempunyai prinsip tanggung jawab dan kepercayaan, sehingga diharapkan mampu menciptakan hubungan yang efisien antara pihak internal dan eksternal perusahaan. Perusahaan kami memiliki tenaga ahli bersertifikasi dan berpengalaman dengan komitmen tinggi terhadap standar K3 dan lingkungan kerja.
                </p>
                <p>
                  Kurnia Jaya Teknik merupakan perusahaan berbadan hukum CV yang berdiri pada 12 Maret 2019 di Pasuruan. Bergerak dalam bidang kontraktor mekanikal, elektrikal, sistem otomasi, perdagangan, dan jasa lainnya. Diresmikan berdasarkan akta nomor 08 oleh Notaris Achmad Haris Hidayat, SH., M.KN serta disahkan melalui SK Menteri Hukum dan HAM AHU-0018171-AH.01.14 Tahun 2019.
                </p>
                <p>
                  Seiring memasuki era industri 4.0, kami terus melakukan inovasi dan pengembangan teknologi untuk menjadi perusahaan yang handal dan dapat dipercaya.
                </p>
              </div>
            </div>
            {/* Right Image */}
              <div className="flex justify-center items-start h-full">
                <div className="w-full h-full rounded-2xl overflow-hidden flex items-center justify-center aspect-square">
                  <Image
                    src="/Kontent/Gambar 5.jpg"
                    alt="Gambar 2"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
          </div>

          <Link
            href="/contact"
            className="mt-8 flex gap-3 items-center bg-primary text-white py-3 px-8 rounded-lg border border-primary hover:bg-transparent hover:text-primary transition-all"
          >
            Hubungi Kami
            <Icon icon="solar:alt-arrow-right-linear" width="14" />
          </Link>
        </div>

        {/* ============================ */}
        {/*       VISION & MISSION       */}
        {/* ============================ */}
        <VisionMission />

        {/* Company Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-heroBg dark:bg-midnight_text rounded-2xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-white dark:bg-darkmode rounded-full flex items-center justify-center shadow-lg">
                <Icon
                  icon="solar:check-circle-bold"
                  width="48"
                  height="48"
                  color="#DC3545"
                />
              </div>
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
              <div className="w-20 h-20 bg-white dark:bg-darkmode rounded-full flex items-center justify-center shadow-lg">
                <Icon
                  icon="solar:user-hand-up-bold"
                  width="48"
                  height="48"
                  color="#DC3545"
                />
              </div>
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
              <div className="w-20 h-20 bg-white dark:bg-darkmode rounded-full flex items-center justify-center shadow-lg">
                <Icon
                  icon="solar:heart-bold"
                  width="48"
                  height="48"
                  color="#DC3545"
                />
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

        {/* ============================ */}
        {/*         EXPERTISE            */}
        {/* ============================ */}
        <div className="bg-heroBg dark:bg-midnight_text rounded-3xl px-6 lg:px-16 py-12 shadow-sm">
          <h2 className="text-center md:text-4xl text-3xl font-semibold text-midnight_text dark:text-white mb-12">
            Bidang <span className="text-primary">Keahlian</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "solar:plug-circle-bold",
                title: "Electrical System",
                desc: "Sistem kelistrikan lengkap untuk kebutuhan proyek industri maupun komersial.",
              },
              {
                icon: "solar:settings-bold",
                title: "Mechanical System",
                desc: "Peralatan mekanik berkualitas untuk mendukung operasional Anda.",
              },
              {
                icon: "solar:cpu-bolt-bold",
                title: "Automation System",
                desc: "Sistem otomasi modern untuk meningkatkan efisiensi dan produktivitas.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <Icon
                  icon={item.icon}
                  width="64"
                  height="64"
                  className="text-primary mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-midnight_text dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-muted dark:text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
