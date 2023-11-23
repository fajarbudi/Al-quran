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

    text?.classList.toggle("h-24");
    text?.classList.toggle("h-9");
  };
  return Data.map((asmaulHusna: type, i: number) => (
    <div
      key={i}
      className="shadow-claymorpishm1 m-4 p-6 rounded-xl w-64 xl:w-56 h-36 relative">
      <div className="flex flex-row border-b-2 pb-3.5">
        <h1>{i + 1}.</h1>
        <div style={{ marginLeft: "20%" }}>
          <h1 className="text-center">{asmaulHusna.arab}</h1>
          <h1>{asmaulHusna.latin}</h1>
        </div>
      </div>
      <div
        id={`${i}`}
        onClick={() => coba(i)}
        className=" h-9 p-2 shadow-claymorpishm2 rounded-xl bg-[#3da9fc] text-white absolute left-0 bottom-0 w-64 xl:w-56 cursor-pointer overflow-hidden">
        <p className="text-center">{asmaulHusna.arti}</p>
      </div>
    </div>
  ));
}
