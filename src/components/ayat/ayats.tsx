import Tafsir from "./tafsir";
import { simpan, lanjutkan } from "@/components/function/useAlert";
import localFont from "next/font/local";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const myFont = localFont({ src: "../../../public/font/LPMQ.ttf" });
interface type {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: any;
}

interface props {
  array: {
    nomor: string;
    namaLatin: string;
    ayat: Array<type>;
  };
  id: number;
  Url: string;
}

export default function ayats({ array, id, Url }: props) {
  const ayat = array.ayat;
  const router = useRouter();
  useEffect(() => {
    const Url = JSON.parse(localStorage.getItem("url") || "[]");
    if (Url.noAyat) {
      lanjutkan(Url, router);
    }
  });

  return ayat.map((ayat, i: number) => (
    <div
      id={`${ayat.nomorAyat}`}
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-anchor-placement="top-bottom"
      key={i}
      className=" cursor-pointer my-10 mx-4 py-6 px-4 rounded-xl md:w-7/12 2xl:w-8/12 md:m-10 shadow-claymorpishm1 hover:shadow-claymorpishm3 relative">
      <div
        onClick={() => {
          simpan(id.toString(), ayat.nomorAyat.toString(), array.namaLatin);
        }}>
        <p className="h-10 text-[#3da9fc] absolute top-4">
          ( {ayat.nomorAyat}. )
        </p>
        <p
          style={{ lineHeight: "250%", wordSpacing: "3px" }}
          className={`mt-2 text-2xl lg:text-4xl text-end antialiased text-[#094067] ${myFont.className}`}>
          {`${ayat.teksArab}`}
        </p>
        <div className="md:flex flex-row justify-between">
          <div className="mr-4">
            <p className="my-2 text-sm lg:text-base">{ayat.teksLatin}</p>
            <p className="text-sm lg:text-base">{ayat.teksIndonesia}</p>
          </div>
          <div>
            <audio
              controls
              className="rounded-xl my-4 mx-auto bg-[#0593E8] shadow-claymorpishm2">
              <source src={`${ayat.audio["05"]}`} type="audio/mp3" />
            </audio>
          </div>
        </div>
      </div>
      <Tafsir
        Nomor={parseInt(array.nomor)}
        NomorAyat={ayat.nomorAyat}
        url={Url}
      />
    </div>
  ));
}
