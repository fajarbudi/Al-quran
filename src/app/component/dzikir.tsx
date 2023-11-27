import localFont from "next/font/local";
import dzikirs from "@/app/data/dzikir";
const myFont = localFont({ src: "../../font/LPMQ.ttf" });

export default function dzikir() {
  const Dzikirs = dzikirs();
  return (
    <>
      <section className="flex flex-wrap justify-center py-10">
        {Dzikirs.map((dzikir, i) => (
          <div
            key={i}
            className="shadow-claymorpishm1 rounded-xl p-4 w-11/12 xl:w-9/12 my-4">
            <div className="flex justify-between">
              <p className="mr-2">{i + 1}.</p>
              <div>
                <h1
                  style={{ lineHeight: "220%", wordSpacing: "3px" }}
                  className={`text-4xl text-[#094067] pb-2 text-end xl:text-center ${
                    myFont.className
                  } ${i == 6 ? "" : "hidden"}`}>
                  أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ . بِسْمِ اللهِ
                  الرَّحْمَنِ الرَّحِيْمِ
                </h1>
                <h1
                  style={{ lineHeight: "220%", wordSpacing: "3px" }}
                  className={`text-4xl text-[#094067] pb-2 text-end ${myFont.className}`}>
                  {dzikir.arab}
                </h1>
              </div>
            </div>
            <p className="border-b-2 pb-2">
              {dzikir.latin}
              <span className="ml-2 font-bold">( {`${dzikir.dibaca}`} )</span>
            </p>
            <p className="pt-2">
              <b>Artinya: </b> {dzikir.arti}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
