"use client";
import Navbar from "@/app/component/navbar";
import Deskripsi from "@/app/component/deskripsi";
import Selanjutnya from "@/app/component/selanjutnya";
import Ayats from "@/app/component/ayats";
import { getAyat } from "@/app/component/useFetchData";
import { useState, useEffect } from "react";
import localFont from "next/font/local";

interface type {
  id: number;
}
const myFont = localFont({ src: "../../font/LPMQ.ttf" });
export default function Ayat(props: type) {
  const [coba, setCoba] = useState("");
  const { data, isLoading } = getAyat(props.id);
  useEffect(() => {
    if (!isLoading) {
      setCoba(data.data.namaLatin);
    }
  });

  if (isLoading)
    return <h1 className="text-center text-2xl mt-4">Tunggu Data.....</h1>;
  const surah = data.data;
  const selanjutnya = surah.suratSelanjutnya;
  const sebelumnya = surah.suratSebelumnya;

  return (
    <>
      <div>
        <Navbar judul={coba} position="sticky top-0" />
        <h1
          className={`text-4xl md:text-6xl text-center pt-6 px-4 md:px-6  text-[#094067] ${myFont.className}`}>
          {props.id == 1
            ? ""
            : " بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ"}
        </h1>

        <div className="flex justify-center md:justify-around">
          <div>
            <Ayats array={surah} />
            <div className="md:w-7/12 2xl:w-8/12 my-10">
              <Selanjutnya
                nextSurah={selanjutnya.namaLatin}
                nextAyat={selanjutnya.jumlahAyat}
                nextNomor={selanjutnya.nomor}
                prevSurah={sebelumnya.namaLatin}
                prevAyat={sebelumnya.jumlahAyat}
                prevNomor={sebelumnya.nomor}
              />
            </div>
          </div>
          <Deskripsi deskripsi={surah.deskripsi} />
        </div>
      </div>
    </>
  );
}
