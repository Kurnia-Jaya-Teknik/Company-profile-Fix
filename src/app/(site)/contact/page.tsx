import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami | CV. Kurnia Jaya Teknik",
  description: "Hubungi CV. Kurnia Jaya Teknik untuk konsultasi dan informasi lebih lanjut mengenai peralatan listrik dan layanan kami.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Beranda" },
    { href: "/contact", text: "Hubungi Kami" },
  ];
  return (
    <>
      <HeroSub
        title="Hubungi Kami"
        description="Siap membantu kebutuhan peralatan listrik Anda"
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
    </>
  );
};

export default page;
