import Swal from "sweetalert2";

export function simpan(nomorSurah: string, nomorAyat: string, nama: string) {
  const data = { noSurah: nomorSurah, noAyat: nomorAyat, namaSurah: nama };

  Swal.fire({
    title: "Apakah Kamu Akan",
    text: `Menyimpan ${nama} - ${nomorAyat}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3da9fc",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Simpan",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.setItem("url", JSON.stringify(data));
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: `Menyimpan ${nama} - ${nomorAyat}`,
      });
    }
  });
}

export function lanjutkan(url: any, router: any) {
  Swal.fire({
    title: "Apakah Kamu Akan",
    text: `Melanjutkan ${url.namaSurah} - ${url.noAyat}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3da9fc",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Lanjutkan",
  }).then((result) => {
    if (result.isConfirmed) {
      router.push(`/surah/${url.noSurah}#${url.noAyat}`);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Silahkan Melanjutkan Kembali",
      });
    }
  });
}