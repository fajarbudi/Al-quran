import Surah from "@/components/home/surah";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Al-quran & Dzikir",
  description: "Website Al-quran, Dzikir, Kumpulan Doa, Asmaul Husna",
};
export default function Home() {
  return (
    <main>
      <Surah />
    </main>
  );
}
