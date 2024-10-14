import SayyidulIstighfar from "@/components/kumpulanDoa/sayyidulIstighfar";
import AlBaqarah from "@/components/kumpulanDoa/alBaqarah";
import SelamatDuniaAkhirat from "@/components/kumpulanDoa/selamatDuniaAkhirat";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kumpulan Doa",
  description: "Kumpulan Doa dengan arti bahasa Indonesia",
};

export default function kumpulanDoa() {
  const url = `${process.env.BASE_URL}`;

  return (
    <>
      <main>
        <Navbar judul="Kumpulan Doa" position="sticky top-0" />
        <SelamatDuniaAkhirat />
        <SayyidulIstighfar />
        <AlBaqarah url={url} />
      </main>
    </>
  );
}
