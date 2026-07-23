import { useState, useEffect } from "react";

export function useWindowWidth(delay = 150): number {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId: number;

    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(window.innerWidth), delay);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return width;
}
