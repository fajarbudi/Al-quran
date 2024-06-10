"use client";
import { useState } from "react";

export default function Button(props: any) {
  const [isHidden, setIsHidden] = useState("hidden");

  const hasil = () => {
    // const { data, isLoading } = getTafsir(
    //   `${props.url}/v2/tafsir/${props.Nomor}`
    // );

    // if (isLoading) return <h1>Tunggu Data</h1>;
    const data = props.data;

    const tafsir = data.data.tafsir[props.NomorAyat - 1];
    return <h1>{tafsir.teks}</h1>;
  };
  return (
    <>
      <div className={`${isHidden} pb-4 mb-4  border-b-2`}>{hasil()}</div>
      <button
        data-aos-delay="600"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
        className="py-2 px-6 absolute text-white rounded-xl bg-[#0593E8] right-2/4 shadow-claymorpishm2"
        onClick={() => {
          isHidden == "hidden" ? setIsHidden("block") : setIsHidden("hidden");
        }}>
        {isHidden == "hidden" ? "Show Tafsir" : "Hidden Tafsir"}
      </button>
    </>
  );
}
