import AsmaulHusna from "@/app/component/asmaulHusna";
import Navbar from "@/app/component/navbar";
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
        <div className="flex flex-wrap justify-center xl:justify-start xl:ml-16 mt-4">
          <AsmaulHusna />
        </div>
      </main>
    </>
  );
}
