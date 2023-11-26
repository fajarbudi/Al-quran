import Dzikir from "@/app/component/dzikir";
import Navbar from "@/app/component/navbar";

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
