"use client";
import "@/app/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Nunito_Sans } from "next/font/google";

const inter = Nunito_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 800,
    });
  });
  return (
    <html lang="en" className="text-[#5f6c7b] scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
