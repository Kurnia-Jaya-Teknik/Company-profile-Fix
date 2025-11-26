import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Portofolio | CV. Kurnia Jaya Teknik",
  description:
    "Dokumentasi pekerjaan mekanikal, elektrikal, dan sistem otomasi yang telah ditangani oleh CV. Kurnia Jaya Teknik.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Beranda" },
    { href: "/portfolio", text: "Portofolio" },
  ];
  return (
    <>
      <HeroSub
        title="Portofolio"
        description="Pengalaman kerja dan dokumentasi lapangan CV. Kurnia Jaya Teknik"
        breadcrumbLinks={breadcrumbLinks}
      />
      <Portfolio />
    </>
  );
};

export default page;

