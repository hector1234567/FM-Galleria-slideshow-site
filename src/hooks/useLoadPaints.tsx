import { useEffect, useState } from "react";
import { type PaintType } from "../types";
import { getImageHeight, shuffle } from "../utils/helpers";

export default function useLoadPaints() {
  const [paints, setPaints] = useState<PaintType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function fetchpaints() {
      const res = await fetch("/data.json");
      const data = (await res.json()) as PaintType[];

      for (const d of data) {
        d.height = await getImageHeight(d.images.thumbnail);
      }

      setPaints(() => shuffle(data) as PaintType[]);
      setLoading(false);
    })();
  }, []);

  return { paints, loading };
}
