import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Solution = () => {
  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="bg-white dark:bg-midnight_text rounded-3xl lg:px-16 px-4 py-12 shadow-lg">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div>
              <h1 className="md:text-35 sm:text-28 text-24 font-semibold text-midnight_text dark:text-white text-center">
                Tentang{" "}
                <span className="text-primary">Kami</span>
              </h1>
              <p className="mt-6 text-base text-muted dark:text-white dark:text-opacity-70 lg:max-w-full sm:max-w-75% text-center">
                CV. Kurnia Jaya Teknik adalah penyedia peralatan listrik terpercaya di Jawa Timur dengan pengalaman bertahun-tahun. Kami melayani kebutuhan peralatan listrik untuk berbagai proyek dengan kualitas terbaik dan pelayanan yang memuaskan.
              </p>
              <Link
                href="/about"
                className="lg:text-17 flex gap-4 w-fit items-center bg-primary text-white py-2 px-4 lg:py-3 lg:px-8 rounded-lg mt-12 border-2 border-primary hover:bg-white hover:text-primary hover:shadow-lg transition-all duration-300 mx-auto"
              >
                Pelajari Lebih Lanjut
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="13"
                  height="13"
                />
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/solution/solution.png"
                alt="image"
                width={531}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
