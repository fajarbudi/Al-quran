"use client";
import { getData } from "@/components/function/useFetchData";

export default function asmaulHusna(props: any) {
  const { data, isLoading } = getData(props.url);
  if (isLoading)
    return <h1 className="text-center text-2xl w-screen">Tunggu Data......</h1>;
  const datas = data.data;

  interface type {
    latin: string;
    arti: string;
    arab: string;
  }
  const coba = (id: any) => {
    const text = document.getElementById(id);
    const textFull = document.getElementById(`full${id}`);
    const textPreview = document.getElementById(`preview${id}`);

    text?.classList.toggle("h-auto");
    text?.classList.toggle("h-10");

    textFull?.classList.toggle("hidden");
    textPreview?.classList.toggle("hidden");
  };
  return datas.map((asmaulHusna: type, i: number) => (
    <div
      key={i}
      className="shadow-claymorpishm1 m-2 rounded-xl max-w-lg xl:m-4 h-32 grid content-between">
      <div className="pt-2.5 px-4 grid content-center">
        <h1 className="absolute">{i + 1}.</h1>
        <h1 className="text-center text-[#094067]">{asmaulHusna.arab}</h1>
        <h1 className="text-center">{asmaulHusna.latin}</h1>
      </div>
      <div
        id={`${i}`}
        onClick={() => coba(i)}
        className=" h-10 p-2 shadow-claymorpishm2 rounded-b-xl bg-[#3da9fc] text-white cursor-pointer transition-all ease-out duration-500 grid content-center">
        <p id={`preview${i}`} className="text-center ">
          {asmaulHusna.arti.length > 16
            ? `${asmaulHusna.arti.substring(0, 15)}...`
            : asmaulHusna.arti}
        </p>
        <p id={`full${i}`} className="text-center hidden">
          {asmaulHusna.arti}
        </p>
      </div>
    </div>
  ));
}
