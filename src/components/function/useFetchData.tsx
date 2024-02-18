"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function getData(url: string) {
  return useSWR(url, fetcher);
}

export function getTafsir(url: string) {
  return useSWR(url, fetcher);
}
