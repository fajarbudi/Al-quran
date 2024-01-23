import sayyidulIstighfar from "@/data/sayyidulIstighfar";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../../font/LPMQ.ttf" });

export default function sayyidulIstighfars() {
  const data = sayyidulIstighfar();

  return (
    <>
      <section className="flex justify-center mt-6">
        <div className="shadow-claymorpishm1 rounded-xl p-6 w-11/12 xl:w-9/12 my-4">
          <h1 className="text-center text-[#094067] text-3xl">
            Sayyidul Istighfar
          </h1>
          {data.map((SayyidulIstighfar, i) => (
            <div key={i} className="my-6 shadow-claymorpishm2 p-4 rounded-xl">
              <div className="flex flex-row justify-between">
                <p>{i + 1}.</p>
                <h1
                  style={{ lineHeight: "220%", wordSpacing: "3px" }}
                  className={`text-3xl lg:text-4xl text-end text-[#094067] ${myFont.className}`}>
                  {SayyidulIstighfar.arab}
                </h1>
              </div>
              <p>{SayyidulIstighfar.latin}</p>
              <p>
                <b>Artinya :</b> {SayyidulIstighfar.arti}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
