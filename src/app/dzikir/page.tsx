import Dzikir from "../../app/component/dzikir/dzikir";
import Navbar from "../../app/component/navbar";
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
