"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface type {
  judul: string;
  position?: string;
}
export default function navbar(props: type) {
  const [url, setUrl]: any = useState("");
  useEffect(() => {
    const Url = JSON.parse(localStorage.getItem("url") || "[]");
    setUrl(Url);
  }, []);

  return (
    <>
      <nav
        className={`bg-[#3da9fc] text-white ${props.position} mx-4 rounded-b-xl z-10`}>
        <div className="flex justify-between px-4 lg:px-10">
          <div className="w-24 -m-4 pt-2">
            <img src="/icon3.png"></img>
          </div>
          <div className="py-4">
            <h1 className="text-xl">{props.judul}</h1>
          </div>
          <div>
            <Link href={`/surat/${url.noSurah}#${url.noAyat}`}>
              <div className="text-center pt-2">
                <p>{!url.namaSurah ? "Belum" : "Lanjutkan"}</p>
                <p>
                  {!url.namaSurah
                    ? "Menyimpan Ayat"
                    : `${url.namaSurah} - ${url.noAyat}`}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
