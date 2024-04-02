import Link from "next/link";

interface type {
  next: {
    nomor: number;
    namaLatin: string;
    jumlahAyat: number;
  };
  prev: {
    nomor: number;
    namaLatin: string;
    jumlahAyat: number;
  };
}

export default function selanjutnya({ next, prev }: type) {
  return (
    <>
      <div
        className={`text-white flex ${
          !prev.namaLatin || !next.namaLatin
            ? "justify-center"
            : "justify-evenly"
        }`}>
        <Link href={`/surah/${prev.nomor}`}>
          <div
            className={`bg-[#0593E8] px-4 py-2 rounded-xl shadow-claymorpishm2 ${
              !prev.nomor ? "hidden" : "block"
            }`}>
            <p>Sebelumnya</p>
            <div className="flex flex-row gap-2">
              <p>{prev.namaLatin} - </p>
              <p>{prev.jumlahAyat}</p>
            </div>
          </div>
        </Link>
        <Link href={`/surah/${next.nomor}`}>
          <div
            className={`bg-[#0593E8] px-4 py-2 rounded-xl shadow-claymorpishm2 ${
              !next.nomor ? "hidden" : "block"
            }`}>
            <p className="text-center">Selanjutnya</p>
            <div className="flex flex-row gap-2">
              <p>{next.namaLatin} - </p>
              <p>{next.jumlahAyat}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
