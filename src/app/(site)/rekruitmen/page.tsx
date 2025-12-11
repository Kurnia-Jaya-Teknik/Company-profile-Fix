import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import Link from "next/link";
import JobListings from "@/components/Recruitment/JobListings";

export const metadata: Metadata = {
  title: "Rekruitmen | CV. Kurnia Jaya Teknik",
  description:
    "Bergabunglah dengan tim CV. Kurnia Jaya Teknik. Kami mencari talenta terbaik untuk mengembangkan karir di bidang Mechanical, Electrical & Automation System.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Beranda" },
    { href: "/rekruitmen", text: "Rekruitmen" },
  ];

  return (
    <>
      <HeroSub
        title="Rekruitmen"
        description="Bergabunglah dengan tim CV. Kurnia Jaya Teknik"
        breadcrumbLinks={breadcrumbLinks}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-midnight_text dark:text-white mb-4">
              Lowongan Pekerjaan
            </h2>
            <p className="text-lg text-body-color dark:text-gray-300">
              Kami mencari individu yang berdedikasi dan berkomitmen untuk bergabung dengan tim kami
            </p>
          </div>

          {/* Job Listings */}
          <JobListings />

          {/* How to Apply Section */}
          <div className="bg-white dark:bg-darkmode rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-midnight_text dark:text-white mb-6">
              Cara Melamar
            </h3>
            <p className="text-body-color dark:text-gray-300 mb-4">
              Kirimkan CV dan surat lamaran Anda ke:
            </p>
            <div className="space-y-2 text-body-color dark:text-gray-300">
              <p>
                <strong>Email:</strong> info@kurniajayateknik.com
              </p>
              <p>
                <strong>Atau hubungi kami</strong> melalui halaman{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Hubungi Kami
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

