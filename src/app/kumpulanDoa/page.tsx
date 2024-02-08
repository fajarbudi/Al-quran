import SayyidulIstighfar from "@/components/kumpulanDoa/sayyidulIstighfar";
import AlBaqarah from "@/components/kumpulanDoa/alBaqarah";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kumpulan Doa",
  description: "Kumpulan Doa dengan arti bahasa Indonesia",
};

export default function kumpulanDoa() {
  return (
    <>
      <main>
        <Navbar judul="Sayyidul Istighfar" position="sticky top-0" />
        <SayyidulIstighfar />
        <AlBaqarah />
      </main>
    </>
  );
}
