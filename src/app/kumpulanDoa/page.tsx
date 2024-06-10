import SayyidulIstighfar from "@/components/kumpulanDoa/sayyidulIstighfar";
import AlBaqarah from "@/components/kumpulanDoa/alBaqarah";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kumpulan Doa",
  description: "Kumpulan Doa dengan arti bahasa Indonesia",
};

export default async function kumpulanDoa() {
  const url = `${process.env.BASE_URL}`;

  const res = await fetch(`${url}/v2/surat/2`, { mode: "no-cors" });
  const data = await res.json();
  const datas = data.data;
  return (
    <>
      <main>
        <Navbar judul="Sayyidul Istighfar" position="sticky top-0" />
        <SayyidulIstighfar />
        <AlBaqarah data={datas} />
      </main>
    </>
  );
}
