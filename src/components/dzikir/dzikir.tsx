"use client";
import localFont from "next/font/local";
import { getDzikir } from "@/components/function/useFetchData";
const myFont = localFont({ src: "../../font/LPMQ.ttf" });

export default function dzikir() {
  const { data, isLoading } = getDzikir();
  if (isLoading)
    return <h1 className="text-center text-2xl mt-4">Tunggu Data......</h1>;
  const dzikirs = data;

  interface type {
    arab: string;
    latin: string;
    dibaca: string;
    arti: string;
  }
  return (
    <>
      <section className="flex flex-wrap justify-center py-10">
        {dzikirs.map((dzikir: type, i: number) => (
          <div
            key={i}
            className="shadow-claymorpishm1 rounded-xl p-4 w-11/12 xl:w-9/12 my-4">
            <div className="flex justify-between">
              <p className="mr-2">{i + 1}.</p>
              <div>
                <h1
                  style={{ lineHeight: "250%", wordSpacing: "3px" }}
                  className={` text-3xl lg:text-4xl text-[#094067] pb-2 text-end ${myFont.className}`}
                  dangerouslySetInnerHTML={{ __html: `${dzikir.arab}` }}
                />
              </div>
            </div>
            <p className="border-b-2 pb-2">
              {dzikir.latin}
              <span className="ml-2 font-bold">( {`${dzikir.dibaca}`} )</span>
            </p>
            <p className="pt-2">
              <b>Artinya: </b> {dzikir.arti}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
