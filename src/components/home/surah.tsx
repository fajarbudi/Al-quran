"use client";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { getAlQuran } from "@/components/function/useFetchAlQuran";

const surah = () => {
  const { data, isLoading } = getAlQuran(`https://equran.id/api/v2/surat`);
  if (isLoading) return <h1>Tunggu</h1>;
  const surahs = data.data;
  return surahs.map((surat: any, i: number) => (
    <Link key={i} href={`/surah/${surat.nomor}`}>
      <div
        data-aos="flip-down"
        data-aos-anchor-placement="center-bottom"
        style={{ minWidth: 320 }}
        className=" m-6 h-190 rounded-xl text-center px-6 py-4 xl:px-2 grid content-between relative shadow-claymorpishm1 hover:shadow-claymorpishm3">
        <div className="flex flex-row justify-between px-6 pt-6">
          <h1
            data-aos-delay="1000"
            data-aos="zoom-in"
            data-aos-anchor-placement="bottom-bottom"
            className="text-white bg-[#0593E8] px-8 py-2 rounded-xl absolute -top-4 shadow-claymorpishm2">
            {surat.namaLatin}
          </h1>
          <p>{surat.nomor}.</p>
          <div>
            <p className="border-b-2 pb-2">{surat.arti}</p>
            <div className="flex flex-row justify-center gap-2 pb-2 mt-2">
              <p>{surat.tempatTurun} -</p>
              <p>{surat.jumlahAyat} Ayat</p>
            </div>
          </div>
          <p className="text-2xl text-[#094067] flex items-center">
            {surat.nama}
          </p>
        </div>
        <div className=" border-[#0593E8] border-t-2 pt-2 mx-auto">
          <audio
            controls
            className="rounded-xl bg-[#0593E8] shadow-claymorpishm2 h-10">
            <source src={`${surat.audioFull["05"]}`} type="audio/mp3" />
          </audio>
        </div>
      </div>
    </Link>
  ));
};

export default function Surah() {
  return (
    <>
      <div>
        <Navbar judul="Al-Quran" position="sticky top-0" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 dekstop:grid-cols-6 mt-4">
          {surah()}
        </div>
      </div>
    </>
  );
}
