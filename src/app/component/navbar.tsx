"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface type {
  judul: string;
  position?: string;
}
export default function navbar(props: type) {
  const [url, setUrl]: any = useState("");
  const [navbarOpen, setNavbarOpen] = useState(false);
  useEffect(() => {
    const Url = JSON.parse(localStorage.getItem("url") || "[]");
    setUrl(Url);
  }, []);

  return (
    <>
      <nav
        className={`bg-[#3da9fc] text-white ${props.position} mx-4 rounded-b-xl z-10 shadow-3d pb-4`}>
        <div className="flex justify-between px-4 lg:px-10">
          <div className=" pt-4">
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div
              className={
                " items-center lg:flex" + (navbarOpen ? " flex" : " hidden")
              }>
              <ul className="flex flex-col lg:flex-row list-none">
                <li className="nav-item">
                  <Link href="/">
                    <span className=" px-3 py-2 flex items-center text-white hover:opacity-75 ml-2">
                      Al-Quran
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/asmaulHusna">
                    <span className=" px-3 py-2 flex items-center text-white hover:opacity-75 ml-2">
                      Asmaul Husna
                    </span>
                  </Link>
                </li>
                <li className=" nav-item">
                  <Link href="/surat/36">
                    <span className=" px-3 py-2 flex items-center text-white hover:opacity-75 ml-2">
                      Yasin
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-4 lg:-ms-72 absolute left-1/4 lg:static">
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
