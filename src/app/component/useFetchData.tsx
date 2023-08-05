"use client";
import { useQuery } from "react-query";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function getSurah() {
  return useQuery("surah", async () => {
    const { data } = await axios.get("https://equran.id/api/v2/surat");
    return data.data;
  });
}

export function getAyat(noAyat: number) {
  return useQuery("ayat", async () => {
    const { data } = await axios.get(
      `https://equran.id/api/v2/surat/${noAyat}`
    );
    return data;
  });
}

export function getTafsir(nomorAyat: number) {
  return useSWR(`https://equran.id/api/v2/tafsir/${nomorAyat}`, fetcher);
}
