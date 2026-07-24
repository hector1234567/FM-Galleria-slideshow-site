import { createFileRoute } from "@tanstack/react-router";
import useLoadPaints from "../hooks/useLoadPaints";
import { useWindowWidth } from "../hooks/useWindowWidth";
import Navbar from "../layout/navbar";

export const Route = createFileRoute("/detail/$name")({
  component: RouteComponent,
});

function RouteComponent() {
  const { name } = Route.useParams() as { name: string };
  const { paints, loading } = useLoadPaints();
  const windowWith = useWindowWidth();

  if (loading) return <span>Loading...</span>;

  const index = paints.findIndex((p) => p.name === name.replaceAll("_", " "));
  const paint = paints[index];

  const heroImg =
    windowWith > 375 ? paint.images.hero.large : paint.images.hero.small;

  return (
    <>
      <div className="flex flex-col justify-between gap-9 xl:mb-10 xl:flex-row">
        <div className="flex xl:basis-212">
          <figure className="relative max-h-140 w-full xl:mb-16 xl:h-118.75">
            <img
              src={heroImg}
              alt={paint.name}
              className="h-full w-full object-cover"
            />
            <button className="absolute bottom-4 left-4 flex cursor-pointer items-center gap-2 bg-black p-3.5 text-white">
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fill-rule="nonzero">
                  <path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z" />
                </g>
              </svg>
              <span className="text-[10px] font-bold uppercase">
                View image {index}
              </span>
            </button>
          </figure>
          <div className="z-10 flex flex-col xl:justify-between">
            <div className="-mt-0.5 -ml-60 max-w-[50vw] bg-white pb-16 pl-16.25 xl:-ml-16.25">
              <h1 className="mb-6 text-[56px] leading-[115%] font-bold">
                {paint.name}
              </h1>
              <span className="text-grey-400 text-[14px]">
                {paint.artist.name}
              </span>
            </div>
            <figure>
              <img
                src={paint.artist.image}
                alt={paint.artist.name}
                className="ml-8 h-32 w-32"
              />
            </figure>
          </div>
        </div>
        <div className="relative bg-no-repeat pt-27.5 pb-14.75 xl:w-119">
          <svg
            width="500"
            height="210"
            className="fill-grey-100 absolute top-0 left-0 font-serif text-[200px] font-bold"
          >
            <text x="0" y="200">
              {paint.year}
            </text>
          </svg>
          <div className="text-grey-400 top relative mx-auto flex h-full max-w-114.25 flex-col justify-between xl:mx-0 xl:max-w-87.5">
            <p className="mb-10 text-[14px] leading-[200%]">
              {paint.description}
            </p>
            <a
              href={paint.source}
              className="text-[9px] font-bold uppercase transition-colors hover:text-black"
            >
              Go to source
            </a>
          </div>
        </div>
      </div>
      <Navbar paint={paint} progress={(100 * index) / paints.length} />
    </>
  );
}
