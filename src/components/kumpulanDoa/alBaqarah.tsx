"use client";
import { getAlBaqarah } from "@/components/function/useFetchData";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../font/LPMQ.ttf" });

export default function alBaqarah() {
  const { data, isLoading } = getAlBaqarah();
  if (isLoading) return "";
  const ayat = data.data.ayat;
  const ayat285 = ayat[284];
  const ayat286 = ayat[285];

  return (
    <>
      <section className="flex justify-center mt-6">
        <div className="shadow-claymorpishm1 rounded-xl p-6 w-11/12 xl:w-9/12 my-4">
          <div>
            <h1 className="text-center text-[#094067] text-3xl">
              Al Baqarah 285 - 286
            </h1>
            <p className="text-center mt-4">
              Siapa yang membaca dua ayat terakhir dari surat Al-Baqarah pada
              malam hari, maka ia akan diberi kecukupan.
              <br />
              <b>HR Bukhari no.5009 dan Muslim no. 808</b>
            </p>
          </div>
          <div className="my-6 shadow-claymorpishm2 p-4 rounded-xl">
            <div className="flex flex-row justify-between mb-8">
              <p>{285}.</p>
              <h1
                style={{ lineHeight: "220%", wordSpacing: "3px" }}
                className={`text-3xl lg:text-4xl text-end text-[#094067] ${myFont.className}`}>
                {ayat285.teksArab}
              </h1>
            </div>
            <p>{ayat285.teksLatin}</p>
          </div>
          <div className="my-6 shadow-claymorpishm2 p-4 rounded-xl">
            <div className="flex flex-row justify-between mb-8">
              <p>{286}.</p>
              <h1
                style={{ lineHeight: "220%", wordSpacing: "3px" }}
                className={`text-3xl lg:text-4xl text-end text-[#094067] ${myFont.className}`}>
                {ayat286.teksArab}
              </h1>
            </div>
            <p>{ayat286.teksLatin}</p>
          </div>
        </div>
      </section>
    </>
  );
}
