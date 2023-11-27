"use client";
import Navbar from "@/app/component/navbar";
import Deskripsi from "@/app/component/deskripsi";
import NextPrevSurah from "@/app/component/NextPrevSurah";
import Ayats from "@/app/component/ayats";
import { getAyat } from "@/app/component/useFetchData";
import localFont from "next/font/local";

interface type {
  id: number;
}
const myFont = localFont({ src: "../../font/LPMQ.ttf" });
export default function Ayat(props: type) {
  const { data, isLoading } = getAyat(props.id);

  if (isLoading)
    return <h1 className="text-center text-2xl mt-4">Tunggu Data.....</h1>;
  const surah = data.data;
  const selanjutnya = surah.suratSelanjutnya;
  const sebelumnya = surah.suratSebelumnya;

  return (
    <>
      <div>
        <Navbar judul={surah.namaLatin} position="sticky top-0" />
        <h1
          className={`text-2xl md:text-6xl text-center pt-6 px-4 md:px-6  text-[#094067] ${myFont.className}`}>
          {props.id == 1
            ? ""
            : " بِسْــــــــــــــــــمِ اللّٰهِ الرَّحْمَنِ الرَّحِيْمِ"}
        </h1>

        <div className="flex justify-center md:justify-around">
          <div>
            <Ayats array={surah} id={props.id} />
            <div className="md:w-7/12 2xl:w-8/12 my-10">
              <NextPrevSurah
                nextSurah={selanjutnya.namaLatin}
                nextAyat={selanjutnya.jumlahAyat}
                nextNomor={selanjutnya.nomor}
                prevSurah={sebelumnya.namaLatin}
                prevAyat={sebelumnya.jumlahAyat}
                prevNomor={sebelumnya.nomor}
              />
            </div>
          </div>
          <div className={`${props.id == 1 ? "mt-20" : ""}`}>
            <Deskripsi deskripsi={surah.deskripsi} surah={surah.namaLatin} />
          </div>
        </div>
      </div>
    </>
  );
}
