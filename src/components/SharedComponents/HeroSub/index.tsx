import React, { FC } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { BreadcrumbLink } from "@/types/breadcrumb";

interface HeroSubProps {
  title: string;
  description: string;
  breadcrumbLinks: BreadcrumbLink[];
}

const HeroSub: FC<HeroSubProps> = ({ title, breadcrumbLinks }) => {
  return (
      <section className="text-center bg-cover pt-36 pb-8 relative dark:bg-darkmode overflow-x-hidden">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 relative z-1 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h2 className="text-midnight_text font-bold md:text-5xl sm:text-4xl text-3xl relative dark:text-white">
            {title}
          </h2>
          <Breadcrumb links={breadcrumbLinks} />
        </div>
      </section>
  );
};

export default HeroSub;
