import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "Tentang Kami | CV. Kurnia Jaya Teknik",
  description:
    "CV. Kurnia Jaya Teknik Pasuruan — penyedia peralatan listrik terpercaya di Jawa Timur. Spesialis Mechanical, Electrical & Automation System.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Beranda" },
    { href: "/about", text: "Tentang Kami" },
  ];
  return (
    <>
      <HeroSub
        title="Tentang Kami"
        description="CV. Kurnia Jaya Teknik Pasuruan — penyedia peralatan listrik terpercaya di Jawa Timur. Spesialis Mechanical, Electrical & Automation System."
        breadcrumbLinks={breadcrumbLinks}
      />
      <About />
    </>
  );
};

export default page;

