import { useNavigate } from "@tanstack/react-router";
import { useContext, useEffect, useRef } from "react";
import { GalleryContext, PaintsContext } from "../contexts";

export default function GalleryButton() {
  const navigate = useNavigate();
  const { paints, loading } = useContext(PaintsContext);
  const { count, setCount, isPlaying, setIsPlaying } =
    useContext(GalleryContext);
  const interval = useRef<number | null>(null);

  function handleClickInitGallery() {
    if (!paints) return;

    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
      setIsPlaying(false);
      return;
    }

    setCount(0);
    setIsPlaying(true);
    interval.current = window.setInterval(() => {
      setCount((prev) => (prev + 1) % paints.length);
    }, 5000);
  }

  useEffect(() => {
    if (paints && isPlaying) {
      navigate({
        to: "/detail/$name",
        params: { name: paints[count].name.replaceAll(" ", "_") },
      });
    } else if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  }, [count, isPlaying]);

  useEffect(() => {
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, []);

  return (
    <button
      disabled={loading}
      className="text-grey-400 cursor-pointer items-center text-[9px] font-bold tracking-[2px] uppercase hover:text-black sm:text-[12px] sm:tracking-[2.5px]"
      onClick={handleClickInitGallery}
    >
      {isPlaying ? "Stop Gallery" : "Start Gallery"}
    </button>
  );
}
