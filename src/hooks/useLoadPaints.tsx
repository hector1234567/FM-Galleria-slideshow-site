import { type PaintType } from "../types";
import fetchpaints from "../api/getPaints";
import { useQuery } from "@tanstack/react-query";

export default function useLoadPaints() {
  const { isLoading, data } = useQuery<PaintType[]>({
    queryKey: ["paints"],
    queryFn: () => fetchpaints(),
    staleTime: Infinity,
  });

  return {
    paints: data,
    loading: isLoading,
  };
}
