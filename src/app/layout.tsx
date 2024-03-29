import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import ThemeContextProvider from "@/context/theme-context";
import { Icons } from "@/components/Icons";
import { ImageGradients } from "@/components/ImageGradients";
import LightIcon from "/public/favicon-light.png";
import DarkIcon from "/public/favicon-dark.png";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dillon | Personal Portfolio",
  description: "Dillon is a full-stack developer with 6 years of experience.",
  icons: [
    {
      rel: "icon",
      media: "(prefers-color-scheme: light)",
      type: "image/png",
      url: LightIcon.src,
    },
    {
      rel: "icon",
      media: "(prefers-color-scheme: dark)",
      type: "image/png",
      url: DarkIcon.src,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.className} relative bg-gray-50 pt-28 text-gray-950 antialiased dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <Icons.bgGrid className="left-1/2 top-[4.5rem] -z-40 hidden w-full -translate-x-1/2 text-gray-50 opacity-20 dark:stroke-gray-50 dark:text-gray-900 md:absolute md:left-0 md:top-0 md:block md:w-full md:-translate-x-0 md:scale-100 md:opacity-5" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ImageGradients />
            <Header />
            {children}
            <Footer />
            <Toaster richColors />
            <DarkModeToggle />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
