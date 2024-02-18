"use client";
import { getData } from "@/components/function/useFetchData";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../../public/font/LPMQ.ttf" });

export default function alBaqarah(props: { url: string }) {
  const { data, isLoading } = getData(`${props.url}/v2/surat/2`);
  if (isLoading) return "";
  const ayats = data.data.ayat;
  const ayat = ayats.slice(284, 286);

  interface type {
    nomorAyat: number;
    teksArab: string;
    teksLatin: string;
  }

  return (
    <>
      <section className="flex justify-center mt-6">
        <div className="shadow-claymorpishm1 rounded-xl p-6 w-11/12 xl:w-9/12 my-4 relative pt-10">
          <div className="flex justify-center mb-6 absolute -top-5">
            <h1 className="text-center text-white text-xl  bg-[#3da9fc] shadow-claymorpishm2 rounded-xl py-2 w-56">
              Al Baqarah 285 - 286
            </h1>
          </div>
          <p className="text-center mb-4 pb-4">
            Siapa yang membaca dua ayat terakhir dari surat Al-Baqarah pada
            malam hari, maka ia akan diberi kecukupan.
            <br />
            <b>HR Bukhari no.5009 dan Muslim no. 808</b>
          </p>
          {ayat.map((ayat: type, i: number) => (
            <div key={i} className=" border-b-2 mb-4 pb-2 relative">
              <p className="text-[#3da9fc] absolute top-0">
                ( {ayat.nomorAyat}. )
              </p>
              <div className="flex flex-row justify-between mb-8 pt-4">
                <h1
                  style={{ lineHeight: "250%", wordSpacing: "3px" }}
                  className={`text-3xl lg:text-4xl text-end text-[#094067] ${myFont.className}`}>
                  {ayat.teksArab}
                </h1>
              </div>
              <p>{ayat.teksLatin}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
