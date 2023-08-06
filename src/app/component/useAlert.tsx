import Swal from "sweetalert2";

export default function alert(
  nomorSurah: string,
  nomorAyat: string,
  nama: string
) {
  const data = { noSurah: nomorSurah, noAyat: nomorAyat, namaSurah: nama };
  const peringatan = () => {
    Swal.fire({
      width: "350px",
      title: "Apakah Kamu Yakin?",
      text: "Menyimpan Ayat ini",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3da9fc",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Simpan",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("url", JSON.stringify(data));
        Swal.fire("Tersimpan!", "Ayat ini berhasil disimpan.", "success");
      }
    });
  };

  return peringatan();
}
