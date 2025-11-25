import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Solution from "@/components/Home/Solution";
import Spend from "@/components/Home/Spend";
import Payment from "@/components/Home/Payment";
import Benefit  from "@/components/Home/Benefit";
import Mobile from "@/components/Home/Mobile";
import Search from "@/components/Home/Search";
import Pricing from "@/components/Home/Pricing";


export const metadata: Metadata = {
  title: "CV KURNIA JAYA TEKNIK",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Solution />
      <Spend />
      <Payment />
      <Benefit />
      <Mobile />
      <Search />
      <Pricing />
    </main>
  );
}
