import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Solution from "@/components/Home/Solution";
import Spend from "@/components/Home/Spend";
import Payment from "@/components/Home/Payment";
import Documentation from "@/components/Home/Documentation";
import Mobile from "@/components/Home/Mobile";
import Pricing from "@/components/Home/Pricing";
import VisionMission from "@/components/VisionMission";
import Business from "@/components/Home/Business";


export const metadata: Metadata = {
  title: "CV KURNIA JAYA TEKNIK",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Solution />
      <VisionMission />
      <Business />
      <Spend />
      <Payment />
      <div id="documentation">
        <Documentation />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
    </main>
  );
}
