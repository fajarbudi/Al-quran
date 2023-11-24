"use client";
import { getAsmaulHusna } from "@/app/component/useFetchData";

export default function asmaulHusna() {
  const { data, isLoading } = getAsmaulHusna();
  if (isLoading)
    return <h1 className="text-2xl mt-4 lg:text-center">Loading...</h1>;
  const Data = data.data;

  interface type {
    latin: string;
    arti: string;
    arab: string;
  }
  const coba = (id: any) => {
    const text = document.getElementById(id);
    const textFull = document.getElementById(`full${id}`);
    const textPreview = document.getElementById(`preview${id}`);

    text?.classList.toggle("h-20");
    text?.classList.toggle("h-10");

    textFull?.classList.toggle("hidden");
    textPreview?.classList.toggle("hidden");
  };
  return Data.map((asmaulHusna: type, i: number) => (
    <div
      key={i}
      className="shadow-claymorpishm1 m-2 p-2 rounded-xl w-48 xl:w-56 xl:m-4 h-32 relative">
      <div className="flex flex-row pb-3.5">
        <h1>{i + 1}.</h1>
        <div style={{ marginLeft: "20%" }}>
          <h1 className="text-center">{asmaulHusna.arab}</h1>
          <h1>{asmaulHusna.latin}</h1>
        </div>
      </div>
      <div
        id={`${i}`}
        onClick={() => coba(i)}
        className=" h-10 p-2 shadow-claymorpishm2 rounded-b-xl bg-[#3da9fc] text-white absolute left-0 bottom-0 w-48 xl:w-56 cursor-pointer overflow-hidden">
        <p id={`preview${i}`} className="text-center ">
          {asmaulHusna.arti.length > 18
            ? `${asmaulHusna.arti.substring(0, 18)}...`
            : asmaulHusna.arti}
        </p>
        <p id={`full${i}`} className="text-center hidden">
          {asmaulHusna.arti}
        </p>
      </div>
    </div>
  ));
}
