import { useState } from "react";

export default function useGallery() {
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return { count, isPlaying, setCount, setIsPlaying };
}
