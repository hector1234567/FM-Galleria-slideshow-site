import { createContext } from "react";
import type { PaintType } from "./types";

export const PaintsContext = createContext<{
  paints: PaintType[];
  loading: boolean;
}>({ paints: [], loading: true });
