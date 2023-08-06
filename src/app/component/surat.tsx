"use client";

import Link from "next/link";
import Navbar from "@/app/component/navbar";
import { getSurah } from "@/app/component/useFetchData";

export default function surat() {
  const hasil = () => {
    const { data, isLoading } = getSurah();

    if (isLoading)
      return <h1 className="text-2xl mx-auto">tunggu data.....</h1>;
    const surah = data.data;
    return surah.map((surat: any, i: number) => (
      <Link key={i} href={`/surat/${surat.nomor}`}>
        <div
          style={{ height: "190px" }}
          className=" m-6 rounded-xl text-center claymorpishm px-6 py-4  xl:px-2 xl:w-80 grid content-between relative">
          <div className="flex flex-row justify-between px-6 pt-6">
            <div className="text-white bg-[#3da9fc] px-8 py-2 rounded-xl claymorpishm1 absolute -top-4">
              <h1>{surat.namaLatin}</h1>
            </div>
            <p>{surat.nomor}.</p>
            <div className="grid gap-2">
              <p className="border-b-2">{surat.arti}</p>
              <div className="flex flex-row justify-center gap-2 pb-2">
                <p>{surat.tempatTurun} -</p>
                <p>{surat.jumlahAyat} Ayat</p>
              </div>
            </div>
            <p className="text-2xl text-[#094067] flex items-center">
              {surat.nama}
            </p>
          </div>
          <div className=" border-[#3da9fc] border-t-2 pt-2 mx-auto">
            <audio controls className="rounded-xl bg-[#3da9fc] claymorpishm1">
              <source src={`${surat.audioFull["05"]}`} />
            </audio>
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <>
      <div>
        <Navbar judul="Al-Quran" position="sticky top-0" />
        <div className="flex justify-center xl:justify-start xl:ml-12  flex-wrap mt-4">
          {hasil()}
        </div>
      </div>
    </>
  );
}
