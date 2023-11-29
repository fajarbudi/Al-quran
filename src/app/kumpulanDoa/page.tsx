import SayyidulIstighfar from "@/app/component/sayyidulIstighfar";
import Navbar from "@/app/component/navbar";
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
