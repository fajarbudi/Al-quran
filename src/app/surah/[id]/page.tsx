import Ayat from "@/components/ayat/ayat";
import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const data = await fetch(`https://equran.id/api/v2/surat/${id}`).then((res) =>
    res.json()
  );

  return {
    title: `Al-quran | ${data.data.namaLatin}`,
    description: `Al-Quran Indonesia surah: ${data.data.namaLatin}`,
  };
}

export default function page({ params }: { params: { id: number } }) {
  return (
    <>
      <main>
        <Ayat id={params.id} />
      </main>
    </>
  );
}
