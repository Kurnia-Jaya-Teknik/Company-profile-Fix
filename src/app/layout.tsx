import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV. Kurnia Jaya Teknik Pasuruan - Penyedia Peralatan Listrik Terpercaya Jawa Timur",
  description:
    "CV. Kurnia Jaya Teknik Pasuruan adalah penyedia peralatan listrik terpercaya di Jawa Timur. Spesialis Mechanical, Electrical & Automation System. Melayani Pasuruan, Surabaya, Malang dan sekitarnya.",
  keywords: [
    "kurnia jaya teknik",
    "kurnia jaya teknik pasuruan",
    "peralatan listrik pasuruan",
    "electrical pasuruan",
    "mechanical pasuruan",
    "automation system pasuruan",
    "kontraktor listrik jawa timur",
    "electrical supplier pasuruan",
    "mekanikal elektrikal pasuruan",
    "cv kurnia jaya teknik",
  ],
  authors: [{ name: "CV. Kurnia Jaya Teknik" }],
  creator: "CV. Kurnia Jaya Teknik",
  publisher: "CV. Kurnia Jaya Teknik",
  metadataBase: new URL("https://kurniajayatek.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://kurniajayatek.com",
    title: "CV. Kurnia Jaya Teknik Pasuruan - Peralatan Listrik Terpercaya",
    description:
      "Penyedia peralatan listrik profesional di Pasuruan dan Jawa Timur. Spesialis Mechanical, Electrical & Automation System.",
    siteName: "CV. Kurnia Jaya Teknik",
    images: [
      {
        url: "/Kontent/LOGO 2.png",
        width: 1200,
        height: 630,
        alt: "CV. Kurnia Jaya Teknik Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV. Kurnia Jaya Teknik Pasuruan",
    description: "Penyedia Peralatan Listrik Terpercaya di Jawa Timur",
    images: ["/Kontent/LOGO 2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "dYIVWmgJfWMBGBJL9g_1Uk7vxiRa3DgpbLuc",
  },
  icons: {
    icon: [
      { url: "/Kontent/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/Kontent/icon.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/Kontent/icon.png",
    apple: { url: "/Kontent/icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CV. Kurnia Jaya Teknik",
    image: "https://kurniajayatek.com/Kontent/LOGO 2.png",
    "@id": "https://kurniajayatek.com",
    url: "https://kurniajayatek.com",
    telephone: "+62 857-3100-0076",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pasuruan",
      addressLocality: "Pasuruan",
      addressRegion: "Jawa Timur",
      postalCode: "67100",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.6453,
      longitude: 112.9075,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      "https://kurniajayatek.com",
    ],
    description:
      "CV. Kurnia Jaya Teknik adalah penyedia peralatan listrik terpercaya di Pasuruan dan Jawa Timur. Spesialis Mechanical, Electrical & Automation System dengan pengalaman bertahun-tahun melayani industri dan komersial.",
    areaServed: [
      {
        "@type": "City",
        name: "Pasuruan",
      },
      {
        "@type": "State",
        name: "Jawa Timur",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Electrical dan Mechanical",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mechanical System",
            description: "Instalasi dan maintenance sistem mekanikal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical System",
            description: "Instalasi dan perawatan sistem kelistrikan",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automation System",
            description: "Solusi otomasi industri dan komersial",
          },
        },
      ],
    },
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmsans.className}`}>
        <AuthDialogProvider>
          <SessionProviderComp>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light"
            >
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
            </ThemeProvider>
          </SessionProviderComp>
        </AuthDialogProvider>
      </body>
    </html>
  );
}
