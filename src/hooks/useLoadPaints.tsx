import { useEffect, useState } from "react";
import { type PaintType } from "../types";

export default function useLoadPaints() {
  const [paints, setPaints] = useState<PaintType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function fetchpaints() {
      const res = await fetch("/data.json");
      const data = (await res.json()) as PaintType[];

      function getImageDimensions(src: string) {
        return new Promise<number>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img.height);
          img.onerror = () =>
            reject(new Error("No se pudo decodificar la imagen"));
          img.src = src;
        });
      }

      for (const d of data) {
        d.height = await getImageDimensions(d.images.thumbnail);
      }

      setPaints(() => [...data]);
      setLoading(false);
    })();
  }, []);

  return { paints, loading };
}
