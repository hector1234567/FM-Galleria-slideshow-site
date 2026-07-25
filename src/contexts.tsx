import { createContext } from "react";
import type { PaintType } from "./types";

export const PaintsContext = createContext<{
  paints: PaintType[] | undefined;
  loading: boolean;
}>({
  paints: [],
  loading: true,
});
