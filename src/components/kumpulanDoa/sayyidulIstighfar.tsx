"use client";
import { getSayyidulIstighfar } from "@/components/function/useFetchData";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../../public/font/LPMQ.ttf" });

export default function sayyidulIstighfars() {
  const { data, isLoading } = getSayyidulIstighfar();
  if (isLoading)
    return <h1 className="text-center text-2xl mt-4">Tunggu Data....</h1>;

  interface type {
    arab: string;
    latin: string;
    arti: string;
  }
  return (
    <>
      <section className="flex justify-center mt-6">
        <div className="shadow-claymorpishm1 rounded-xl p-4 w-11/12 xl:w-9/12 my-4 relative pt-10">
          <div className="flex justify-center mb-6 absolute -top-5">
            <h1 className="text-center text-white text-xl  bg-[#3da9fc] shadow-claymorpishm2 rounded-xl py-2 w-52">
              Sayyidul Istighfar
            </h1>
          </div>
          {data.map((SayyidulIstighfar: type, i: number) => (
            <div key={i} className=" border-b-2 mb-4 pb-2 relative">
              <p className="text-[#3da9fc] absolute top-0">( {i + 1}. )</p>
              <h1
                style={{ lineHeight: "250%", wordSpacing: "3px" }}
                className={`text-3xl lg:text-4xl text-end text-[#094067] ${myFont.className}`}>
                {SayyidulIstighfar.arab}
              </h1>
              <p>{SayyidulIstighfar.latin}</p>
              <p>
                <b>Artinya :</b> {SayyidulIstighfar.arti}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
