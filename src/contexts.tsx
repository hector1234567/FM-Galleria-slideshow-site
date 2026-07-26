import { createContext, type Dispatch, type SetStateAction } from "react";
import type { PaintType } from "./types";

export const PaintsContext = createContext<{
  paints: PaintType[] | undefined;
  loading: boolean;
}>({
  paints: [],
  loading: true,
});

export const GalleryContext = createContext<{
  count: number;
  isPlaying: boolean;
  setCount: Dispatch<SetStateAction<number>>;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}>({
  count: 0,
  isPlaying: false,
  setCount: () => {},
  setIsPlaying: () => {},
});
