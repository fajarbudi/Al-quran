import Surah from "@/app/component/surah";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Al-Quran",
  description: "Al-Quran Indonesia",
};
export default function Home() {
  return (
    <main>
      <Link
        href={"/asmaulHusna"}
        style={{ writingMode: "vertical-rl" }}
        className="fixed right-0 top-1/4 py-4 text-white bg-[#3da9fc] rounded-lg shadow-claymorpishm2">
        Asmaul Husna
      </Link>
      <Surah />
    </main>
  );
}
