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

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <Icons.bgGrid className="absolute left-1/2 top-[4.5rem] -z-50 w-full -translate-x-1/2 text-gray-50 opacity-5 dark:text-gray-900 dark:opacity-40 md:left-0 md:top-0 md:w-full md:-translate-x-0 md:scale-100" />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
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
