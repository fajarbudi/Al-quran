import { useState } from "react";
interface type {
  deskripsi: string;
}
export default function deskripsi(props: type) {
  const [isHidden, setIsHidden] = useState(true);
  console.log(isHidden);
  return (
    <>
      <div className="fixed right-0">
        <button
          onClick={() => {
            isHidden ? setIsHidden(false) : setIsHidden(true);
          }}
          style={{ writingMode: "sideways-lr" }}
          className="bg-[#3da9fc] text-white rounded-md py-4 px-px claymorpishm1 absolute top-1/4 left-3 md:hidden">
          {isHidden ? "Deskripsi" : "Close"}
        </button>
        <div
          className={`${
            isHidden ? "-mr-coba" : ""
          } transition-all duration-500 md:mr-px`}>
          <div className=" w-96 p-4 rounded-xl my-10 mx-8 md:w-64  xl:w-96 2xl:h-auto claymorpishm bg-white">
            <div className="text-center text-white text-xl bg-[#3da9fc] absolute top-4 py-2 px-10 rounded-xl claymorpishm1">
              Deskripsi
            </div>
            <div
              style={{ height: "600px" }}
              className="md:overflow-scroll indent-4 pt-6">
              {props.deskripsi}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
