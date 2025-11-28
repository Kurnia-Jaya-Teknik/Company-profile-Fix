"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Logo: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hindari hydration mismatch: tunggu sampai client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Default logo (light). Ganti jika sudah mounted dan theme === 'dark'
  const logoSrc = mounted && theme === "dark" ? "/Kontent/Logo3.png" : "/Kontent/LOGO 2.png";

  return (
    <Link href="/" aria-label="Kurnia Jaya Teknik">
      <div className="w-[200px] h-[60px] relative">
        <Image
          src={logoSrc}
          alt="Kurnia Jaya Teknik Logo"
          fill
          sizes="(max-width: 768px) 150px, 200px"
          quality={100}
          className="object-contain transition-opacity duration-300 ease-in-out"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
