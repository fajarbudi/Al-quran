"use client";
import { useState } from "react";
import { getTafsir } from "@/components/function/useFetchData";

interface type {
  NomorAyat: number;
  Nomor: number;
  url: string;
}

export default function tafsir(props: type) {
  const [isHidden, setIsHidden] = useState("hidden");

  const hasil = () => {
    const { data, isLoading } = getTafsir(
      `${props.url}/v2/tafsir/${props.Nomor}`
    );

    if (isLoading) return <h1>Tunggu Data</h1>;

    const tafsir = data.data.tafsir[props.NomorAyat - 1];
    return <h1>{tafsir.teks}</h1>;
  };

  return (
    <>
      <div className=" border-t-2 mt-4 pt-4 indent-4 relative">
        <div
          className={`${isHidden} pb-4 mb-4  border-b-2 text-sm lg:text-base`}>
          {hasil()}
        </div>
        <button
          data-aos-delay="600"
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          className="py-2 px-6 absolute text-white rounded-xl bg-[#0593E8] right-2/4 shadow-claymorpishm2 text-sm lg:text-base"
          onClick={() => {
            isHidden == "hidden" ? setIsHidden("block") : setIsHidden("hidden");
          }}>
          {isHidden == "hidden" ? "Show Tafsir" : "Hidden Tafsir"}
        </button>
      </div>
    </>
  );
}
