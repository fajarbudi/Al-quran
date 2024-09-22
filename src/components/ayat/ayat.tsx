"use client";
import Navbar from "@/components/navbar";
import { getData } from "@/components/function/useFetchData";
import Deskripsi from "@/components/ayat/deskripsi";
import NextPrevSurah from "@/components/function/NextPrevSurah";
import Ayats from "@/components/ayat/ayats";
import localFont from "next/font/local";

interface type {
  id: number;
  url: string;
}

const myFont = localFont({ src: "../../../public/font/LPMQ.ttf" });
export default function Ayat(props: type) {
  const { data, isLoading } = getData(`${props.url}/v2/surat/${props.id}`);

  if (isLoading)
    return (
      <h1 className="text-center w-screen text-2xl mt-4">Tunggu Data......</h1>
    );
  const surah = data.data;
  const selanjutnya = surah.suratSelanjutnya;
  const sebelumnya = surah.suratSebelumnya;
  return (
    <>
      <div>
        <Navbar
          judul={surah.namaLatin}
          ayat={surah.jumlahAyat}
          position="sticky top-0"
        />
        <h1
          className={`text-4xl md:text-6xl text-center pt-6 px-4 md:px-6  text-[#094067] ${myFont.className}`}>
          {props.id == 1
            ? ""
            : " بِسْــــــــــــــــــمِ اللّٰهِ الرَّحْمَنِ الرَّحِيْمِ"}
        </h1>

        <div className="flex justify-center md:justify-around">
          <div>
            <Ayats array={surah} id={props.id} Url={props.url} />
            <div className="md:w-7/12 2xl:w-8/12 my-10">
              <NextPrevSurah next={selanjutnya} prev={sebelumnya} />
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
