interface type {
  deskripsi: string;
}
export default function deskripsi(props: type) {
  return (
    <>
      <div className="fixed right-0">
        <div className="w-64 p-4 rounded-xl m-10 hidden md:block xl:w-96 2xl:h-auto claymorpishm">
          <div className="text-center text-white text-xl bg-[#3da9fc] absolute top-4 py-2 px-10 rounded-xl claymorpishm1">
            Deskripsi
          </div>
          <div
            style={{ height: "600px" }}
            className="md:overflow-scroll indent-4 pt-6">
            <div>{props.deskripsi}</div>
          </div>
        </div>
      </div>
    </>
  );
}
