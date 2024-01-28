import Dzikir from "@/components/dzikir/dzikir";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dzikir",
  description: "Dzikir Indonesia",
};

export default function page() {
  return (
    <>
      <main>
        <Navbar judul="Dzikir" position="sticky top-0" />
        <Dzikir />
      </main>
    </>
  );
}
