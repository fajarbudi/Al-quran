import SayyidulIstighfar from "@/components/sayyidulIstighfar/sayyidulIstighfar";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayyidul Istighfar",
  description: "Sayyidul Istighfar Indonesia",
};

export default function kumpulanDoa() {
  return (
    <>
      <main>
        <Navbar judul="Sayyidul Istighfar" position="sticky top-0" />
        <SayyidulIstighfar />
      </main>
    </>
  );
}
