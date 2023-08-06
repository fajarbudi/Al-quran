"use client";
import Tafsir from "@/app/component/tafsir";
import Navbar from "@/app/component/navbar";
import Alert from "@/app/component/useAlert";
import Deskripsi from "@/app/component/deskripsi";
import { getAyat } from "@/app/component/useFetchData";
import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";

const roboto = Poppins({ subsets: ["latin"], weight: "500" });

interface type {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: any;
}

export default function apa(props: any) {
  const [coba, setCoba] = useState("");

  const { data, isLoading } = getAyat(props.id);
  useEffect(() => {
    if (!isLoading) {
      setCoba(data.data.namaLatin);
    }
  });
  const hasil = () => {
    if (isLoading)
      return <h1 className="text-center text-2xl mt-4">Tunggu Data.....</h1>;
    const surah = data.data;
    const ayat = surah.ayat;
    const aduh = data.data.namaLatin;

    const left = ayat.map((ayat: type, i: number) => (
      <div
        key={i}
        id={`${ayat.nomorAyat}`}
        className=" cursor-pointer my-10 mx-4 py-6 px-4 rounded-xl claymorpishm md:w-7/12 2xl:w-8/12 md:m-10">
        <div
          onClick={() => {
            Alert(
              props.id.toString(),
              ayat.nomorAyat.toString(),
              surah.namaLatin
            );
          }}>
          <div className="flex flex-row justify-between gap-2">
            <p className="text-[#3da9fc] flex-none">( {ayat.nomorAyat}. )</p>
            <p
              className={` md:text-4xl text-end leading-relaxed text-[#094067] ${roboto.className}`}>
              {ayat.teksArab}
            </p>
          </div>
          <div className="md:flex flex-row justify-between">
            <div>
              <p className="my-2">{ayat.teksLatin}</p>
              <p>{ayat.teksIndonesia}</p>
            </div>
            <div>
              <audio
                controls
                className="rounded-xl my-4 mx-auto bg-blue-400 claymorpishm1">
                <source src={`${ayat.audio["05"]}`} type="audio/mp3" />
              </audio>
            </div>
          </div>
        </div>
        <Tafsir Nomor={parseInt(surah.nomor)} NomorAyat={ayat.nomorAyat} />
      </div>
    ));
    const home = (
      <>
        <h1 className=" text-3xl md:text-6xl text-center pt-6 px-4 md:px-6  text-[#094067]">
          بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
        </h1>
        <div className="flex justify-center md:justify-around">
          <div>{left}</div>
          <Deskripsi deskripsi={surah.deskripsi} />
        </div>
      </>
    );

    return home;
  };

  return (
    <>
      <main>
        <Navbar judul={coba} position="sticky top-0" />
        <div>{hasil()}</div>
      </main>
    </>
  );
}
