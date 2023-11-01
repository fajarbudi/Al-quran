"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

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
        className={`bg-[#3da9fc] text-white ${props.position} mx-4 rounded-b-xl z-10 shadow-3d`}>
        <div className="flex justify-between px-4 lg:px-10">
          <a href={"/"}>
            <div
              data-aos-delay="1000"
              data-aos="fade-down"
              data-aos-anchor-placement="top-center"
              className="-m-4 pt-2">
              <Image src="/icon3.webp" alt="icon" width={100} height={100} />
            </div>
          </a>
          <div className="py-4">
            <h1 className="text-xl">{props.judul}</h1>
          </div>

          <Link
            className="pt-2 "
            href={`${!url.namaSurah ? `/` : `/surat/${url.noSurah}`}`}>
            <div className="text-center px-2 py-px rounded-md active:bg-sky-600  shadow-3d ">
              <p>{!url.namaSurah ? "Tekan Ayat" : "Lanjutkan"}</p>
              <p>
                {!url.namaSurah
                  ? "Untuk Menyimpan"
                  : `${url.namaSurah} - ${url.noAyat}`}
              </p>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
