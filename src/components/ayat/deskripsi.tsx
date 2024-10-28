"use client";
import { useState } from "react";
interface type {
  deskripsi: string;
  surah: string;
}
export default function deskripsi(props: type) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <div className="fixed right-0">
        <button
          onClick={() => {
            isHidden ? setIsHidden(false) : setIsHidden(true);
          }}
          style={{ writingMode: "vertical-rl" }}
          className="bg-[#0593E8] text-white rounded-md py-4 px-px absolute top-1/4 left-3 md:hidden shadow-claymorpishm2">
          {isHidden ? "Deskripsi" : "Close"}
        </button>
        <div
          className={`${
            isHidden ? "-mr-coba" : ""
          } transition-all duration-500 md:mr-px`}>
          <div className=" w-80 p-4 rounded-xl -my-16 mx-8 md:my-12 md:w-64 xl:w-96 2xl:h-auto bg-white shadow-claymorpishm1">
            <div className="text-center text-white text-xl bg-[#0593E8] absolute -top-20 md:top-6 py-2 px-10 rounded-xl shadow-claymorpishm2 text-sm lg:text-base">
              Deskripsi
            </div>
            <div
              style={{ height: "600px" }}
              className="overflow-scroll indent-4 pt-4 pr-4 text-sm lg:text-base">
              <h1 className="text-center text-2xl text-[#094067] mb-2 pb-2 border-b-2">
                {props.surah}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: `${props.deskripsi}` }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
