import Surah from "@/components/home/surah";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Al-Quran",
  description: "Al-Quran Indonesia",
};
export default function Home() {
  return (
    <main>
      <Surah />
    </main>
  );
}
