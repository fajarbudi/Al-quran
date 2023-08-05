"use client";
import { useState } from "react";
import { getTafsir } from "@/app/component/useFetchData";

interface type {
  NomorAyat: number;
  Nomor: number;
}
export default function tafsir(props: type) {
  const [isHidden, setIsHidden] = useState("hidden");

  const hasil = () => {
    const { data, isLoading, error } = getTafsir(props.Nomor);
    if (error) return "erooor";
    if (isLoading) return <h1>Tunggu Data</h1>;
    const tafsir = data.data.tafsir[props.NomorAyat - 1];
    return <h1>{tafsir.teks}</h1>;
  };

  return (
    <>
      <div className=" border-t-2 mt-4 pt-4 indent-4 relative">
        <div className={`${isHidden} pb-4 mb-4  border-b-2`}>{hasil()}</div>
        <button
          className="py-2 px-6 absolute claymorpishm1 text-white rounded-xl bg-[#3da9fc] right-2/4"
          onClick={() => {
            isHidden == "hidden" ? setIsHidden("block") : setIsHidden("hidden");
          }}>
          {isHidden == "hidden" ? "Show Tafsir" : "Hidden Tafsir"}
        </button>
      </div>
    </>
  );
}
