"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function getSurah() {
  return useSWR("https://equran.id/api/v2/surat", fetcher);
}

export function getAyat(noAyat: number) {
  return useSWR(`https://equran.id/api/v2/surat/${noAyat}`, fetcher);
}

export function getTafsir(nomorAyat: number) {
  return useSWR(`https://equran.id/api/v2/tafsir/${nomorAyat}`, fetcher);
}

export function ayatBaru() {
  return useSWR(
    "https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=26",
    fetcher
  );
}
