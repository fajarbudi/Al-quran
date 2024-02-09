import Ayat from "@/components/ayat/ayat";
import type { Metadata } from "next";
import { getAyat } from "@/components/function/useFetchData";

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

export default async function page({ params }: { params: { id: number } }) {
  const res = await getAyat(params.id);
  const data = res.data;
  return (
    <>
      <main>
        <Ayat id={params.id} data={data} />
      </main>
    </>
  );
}
