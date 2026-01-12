import React from "react";
import Image from "next/image";

interface CertificateImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const CertificateImage: React.FC<CertificateImageProps> = ({
  src,
  alt,
  width = 300,
  height = 190,
  className = "object-contain w-[85%] h-full",
}) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
      {/* Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/Kontent/LOGO 2.png"
          alt="watermark"
          width={200}
          height={200}
          className="opacity-35 object-contain max-w-[60%]"
        />
      </div>
    </div>
  );
};
