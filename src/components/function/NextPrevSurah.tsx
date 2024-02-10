import Link from "next/link";
interface type {
  nextSurah: string;
  nextAyat: number;
  nextNomor: number;
  prevSurah: string;
  prevAyat: number;
  prevNomor: number;
}
export default function selanjutnya(props: type) {
  return (
    <>
      <div
        className={`text-white flex ${
          !props.prevSurah || !props.nextSurah
            ? "justify-center"
            : "justify-evenly"
        }`}>
        <Link href={`/surah/${props.prevNomor}`}>
          <div
            className={`bg-[#0593E8] px-4 py-2 rounded-xl shadow-claymorpishm2 ${
              !props.prevSurah ? "hidden" : "block"
            }`}>
            <p>Sebelumnya</p>
            <div className="flex flex-row gap-2">
              <p>{props.prevSurah} - </p>
              <p>{props.prevAyat}</p>
            </div>
          </div>
        </Link>
        <Link href={`/surah/${props.nextNomor}`}>
          <div
            className={`bg-[#0593E8] px-4 py-2 rounded-xl shadow-claymorpishm2 ${
              !props.nextSurah ? "hidden" : "block"
            }`}>
            <p className="text-center">Selanjutnya</p>
            <div className="flex flex-row gap-2">
              <p>{props.nextSurah} - </p>
              <p>{props.nextAyat}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
