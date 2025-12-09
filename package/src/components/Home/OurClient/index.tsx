"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Heroimage } from "@/app/api/data";
import Image from "next/image";

const OurClient = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: -50, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.8 },
  };

  return (
    <section className="dark:bg-darkmode py-14 bg-gray-50">
      <div
        ref={ref}
        className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4"
      >
        <motion.div {...TopAnimation}>
          <div className="px-4 lg:px-12">
            <h2 className="text-center font-semibold md:text-35 sm:text-28 text-24 mb-12 text-midnight_text dark:text-white">
              Our <span className="text-primary">Client</span>
            </h2>
          </div>
          
          <div className="flex justify-center items-center gap-12 md:gap-16 lg:gap-20 flex-wrap">
            {Heroimage.map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={item.lightimage}
                  alt={`Client ${index + 1}`}
                  width={200}
                  height={100}
                  className="object-contain"
                  style={{ maxHeight: "100px", width: "auto", height: "auto" }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurClient;