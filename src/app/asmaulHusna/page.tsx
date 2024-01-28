import AsmaulHusna from "@/components/asmaulHusna/asmaulHusna";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asmaul Husna",
  description: "Asmaul Husna Indonesia",
};

export default function page() {
  return (
    <>
      <main>
        <Navbar judul="Asmaul Husna" position="sticky top-0" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 dekstop:grid-cols-10 mt-4 px-4">
          <AsmaulHusna />
        </div>
      </main>
    </>
  );
}
