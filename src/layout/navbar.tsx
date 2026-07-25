import { Link } from "@tanstack/react-router";
import type { PaintType } from "../types";

type NavbarProps = {
  paint: PaintType;
  progress: number;
};

export default function Navbar({ paint, progress }: NavbarProps) {
  return (
    <nav className="fixed bottom-0 left-0 z-40 flex h-24 w-screen items-center justify-center bg-white">
      <div
        className="absolute top-0 left-0 h-px w-full"
        style={{
          backgroundImage: `linear-gradient(to right, #000, #000 ${progress}%, #E5E5E5 ${progress}%, #E5E5E5)`,
        }}
      ></div>
      <div className="m-x-auto container flex items-center justify-between px-10">
        <div>
          <p className="mb-1 text-[18px] font-bold">{paint.name}</p>
          <p className="text-[13px] opacity-75">{paint.artist.name}</p>
        </div>
        <div className="flex gap-10">
          <Link to={"/"} className="transition-opacity hover:opacity-50">
            <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#000" fill="none" fillRule="evenodd">
                <path
                  d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
                  strokeWidth="2"
                />
                <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
              </g>
            </svg>
          </Link>
          <Link to={"/"} className="transition-opacity hover:opacity-50">
            <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#000" fill="none" fillRule="evenodd">
                <path
                  d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                  strokeWidth="2"
                />
                <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
