import Ayat from "@/components/ayat/ayat";
import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const data = await fetch(`${process.env.BASE_URL}/v2/surat/${id}`).then(
    (res) => res.json()
  );

  return {
    title: `Al-quran | ${data.data.namaLatin}`,
    description: `Al-Quran Indonesia surah: ${data.data.namaLatin}`,
  };
}

export default async function page({ params }: { params: { id: number } }) {
  const url = `${process.env.BASE_URL}`;
  return (
    <>
      <main>
        <Ayat id={params.id} url={url} />
      </main>
    </>
  );
}
