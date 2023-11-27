import Tafsir from "@/app/component/tafsir";
import { simpan, lanjutkan } from "@/app/component/useAlert";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const myFont = localFont({ src: "../../font/LPMQ.ttf" });
interface type {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: any;
}

export default function ayats(props: any) {
  const surah = props.array;
  const ayat = surah.ayat;
  const [url, setUrl]: any = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!url.noAyat) {
      const Url = JSON.parse(localStorage.getItem("url") || "[]");
      setUrl(Url);
    } else {
      lanjutkan(url, router);
    }
  });

  return ayat.map((ayat: type, i: number) => (
    <div
      id={`${ayat.nomorAyat}`}
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-anchor-placement="top-bottom"
      key={i}
      className=" cursor-pointer my-10 mx-4 py-6 px-4 rounded-xl md:w-7/12 2xl:w-8/12 md:m-10 shadow-claymorpishm1 hover:shadow-claymorpishm3">
      <div
        onClick={() => {
          simpan(
            props.id.toString(),
            ayat.nomorAyat.toString(),
            surah.namaLatin
          );
        }}>
        <div className="flex flex-row justify-between gap-2">
          <p className="text-[#3da9fc] flex-none">( {ayat.nomorAyat}. )</p>
          <p
            style={{ lineHeight: "220%", wordSpacing: "3px" }}
            className={`text-4xl text-end antialiased text-[#094067] ${myFont.className}`}>
            {`${ayat.teksArab}`}
          </p>
        </div>
        <div className="md:flex flex-row justify-between">
          <div className="mr-4">
            <p className="my-2">{ayat.teksLatin}</p>
            <p>{ayat.teksIndonesia}</p>
          </div>
          <div>
            <audio
              controls
              className="rounded-xl my-4 mx-auto bg-blue-400 shadow-claymorpishm2">
              <source src={`${ayat.audio["05"]}`} type="audio/mp3" />
            </audio>
          </div>
        </div>
      </div>
      <Tafsir Nomor={parseInt(surah.nomor)} NomorAyat={ayat.nomorAyat} />
    </div>
  ));
}
