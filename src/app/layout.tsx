"use client";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Nunito_Sans } from "next/font/google";

const inter = Nunito_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en" className="text-[#5f6c7b]">
        <body className={inter.className}>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
