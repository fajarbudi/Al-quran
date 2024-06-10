import Surah from "@/components/home/surah";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Al-quran & Dzikir",
  description: "Website Al-quran, Dzikir, Kumpulan Doa, Asmaul Husna",
};
export default async function Home() {
  const url = `${process.env.BASE_URL}`;

  const res = await fetch(`${url}/v2/surat`, { mode: "no-cors" });
  const data = await res.json();
  const datas = data.data;
  return (
    <main>
      <Surah url={url} datas={datas} />
    </main>
  );
}
