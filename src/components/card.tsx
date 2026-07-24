import { Link } from "@tanstack/react-router";

type CardProps = {
  height: number;
  imgUrl: string;
  name: string;
  artist: string;
};

export default function Card({ height, imgUrl, name, artist }: CardProps) {
  return (
    <div className="not-last:pb-10" style={{ height: `${height}px` }}>
      <div className="relative h-full overflow-clip">
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
        <Link
          to={"/detail/$name"}
          params={{ name: name.replaceAll(" ", "_") }}
          className="absolute top-0 left-0 flex h-full w-full cursor-pointer items-end bg-linear-to-b from-50% to-black transition-colors hover:from-[#ffffff3e]"
        >
          <div className="m-8 leading-tight text-white">
            <h2 className="mb-1 text-[24px] font-bold">{name}</h2>
            <span className="text-[13px] font-extralight opacity-75">
              {artist}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
