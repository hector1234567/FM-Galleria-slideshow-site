import type { PaintType } from "../types";
import { getImageHeight, shuffle } from "../utils/helpers";

export default async function fetchpaints() {
  const res = await fetch("/data_trans.json");
  const data = (await res.json()) as PaintType[];

  for (const d of data) {
    d.height = await getImageHeight(d.images.thumbnail);
  }

  return shuffle(data) as PaintType[];
}
