"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface type {
  judul: string;
  ayat?: string;
  position?: string;
}
export default function navbar(props: type) {
  const [url, setUrl]: any = useState("");
  const [navbarOpen, setNavbarOpen] = useState(false);
  useEffect(() => {
    const Url = JSON.parse(localStorage.getItem("url") || "[]");
    setTimeout(() => {
      setUrl(Url);
    }, 500);
  });

  return (
    <>
      <nav
        className={`bg-[#0593E8] text-white ${props.position} mx-4 rounded-b-xl z-10 shadow-3d pb-4`}>
        <div className="flex justify-between px-4 lg:px-10">
          <div className=" pt-4">
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block minNav:hidden outline-none focus:outline-none"
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
              className={`items-center minNav:flex ${
                navbarOpen ? "" : " hidden"
              } transition-all duration-500`}>
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
                  <Link href="/surah/36">
                    <span className=" px-3 py-2 flex items-center text-white hover:opacity-75 ml-2">
                      Yasin
                    </span>
                  </Link>
                </li>
                <li className=" nav-item">
                  <Link href="/dzikir">
                    <span className=" px-3 py-2 flex items-center text-white hover:opacity-75 ml-2">
                      Dzikir
                    </span>
                  </Link>
                </li>
                <li className=" nav-item">
                  <Link href="/kumpulanDoa">
                    <span className=" px-3 py-2 flex items-center text-white hover:opacity-75 ml-2">
                      Kumpulan Doa
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            data-aos="fade-down"
            data-aos-delay="1500"
            data-aos-anchor-placement="center-bottom"
            className="pt-2 lg:-ms-72 absolute top-1 left-16 lg:static">
            {props.ayat ? (
              <div>
                <h1 className="text-center md:text-lg">{props.judul}</h1>
                <p className="text-center md:text-lg">{props.ayat} Ayat</p>
              </div>
            ) : (
              <h1 className="mt-2 text-base md:text-2xl">{props.judul}</h1>
            )}
          </div>

          <Link
            className="pt-2 "
            href={`${!url.namaSurah ? `/` : `/surah/${url.noSurah}`}`}>
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
