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

export function getAlBaqarah() {
  return useSWR(`https://equran.id/api/v2/surat/2`, fetcher);
}

export function getDzikir() {
  return useSWR("/data/dzikir", fetcher);
}

export function getSayyidulIstighfar() {
  return useSWR("/data/sayyidulIstighfar", fetcher);
}

export function getAsmaulHusna() {
  return useSWR("https://asmaul-husna-api.vercel.app/api/all", fetcher);
}
