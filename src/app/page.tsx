import Surah from "@/components/home/surah";
import { getSurah } from "@/components/function/useFetchData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Al-quran & Dzikir",
  description: "Website Al-quran, Dzikir, Kumpulan Doa, Asmaul Husna",
};
export default async function Home() {
  const res = await getSurah();
  const data = res.data;

  return (
    <main>
      <Surah data={data} />
    </main>
  );
}
