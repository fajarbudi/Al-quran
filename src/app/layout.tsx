"use client";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { QueryClient, QueryClientProvider } from "react-query";
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
      duration: 1000,
    });
  });
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en" className="text-[#5f6c7b]">
        <body className={inter.className}>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
