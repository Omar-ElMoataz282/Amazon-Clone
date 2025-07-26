import useSWR from "swr";

// Fetcher To Get Data From Api
export function useDataSWR({ api }: { api: string }) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR(api, fetcher);

  return { data };
}
