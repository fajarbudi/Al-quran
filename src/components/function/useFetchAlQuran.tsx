import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function getAlQuran(url: string) {
  return useSWR(url, fetcher);
}
