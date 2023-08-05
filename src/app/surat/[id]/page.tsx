import Ayat from "@/app/component/ayat";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Al-Quran",
  description: "Al-Quran Indonesia",
};

export default function page({ params }: { params: { id: number } }) {
  return (
    <>
      <main>
        <Ayat id={params.id} />
      </main>
    </>
  );
}
