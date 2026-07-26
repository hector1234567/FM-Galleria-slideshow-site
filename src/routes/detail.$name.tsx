import { createFileRoute } from "@tanstack/react-router";
import { useWindowWidth } from "../hooks/useWindowWidth";
import Navbar from "../layout/navbar";
import ViewImageButton from "../components/view-image-button";
import { useContext } from "react";
import { PaintsContext } from "../contexts";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/detail/$name")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "es" ? "es" : "en";

  const { name } = Route.useParams() as { name: string };
  const { paints, loading } = useContext(PaintsContext);
  const windowWith = useWindowWidth();

  if (loading) return <span>Loading...</span>;
  if (!paints) return <span>Error!</span>;

  const index = paints.findIndex(
    (p) => p.name.en === name.replaceAll("_", " "),
  );
  const paint = paints[index];

  const heroImg =
    windowWith > 375 ? paint.images.hero.large : paint.images.hero.small;

  return (
    <>
      <div className="flex flex-col justify-between gap-9 xl:mb-7 xl:flex-row">
        <div className="flex flex-col md:flex-row xl:basis-212">
          <figure className="relative max-h-70 w-full overflow-hidden md:max-h-140 xl:mb-16 xl:h-118.75">
            <img
              src={heroImg}
              alt={paint.name[lang]}
              className="h-full w-full object-cover"
            />
            <ViewImageButton
              imageUrl={paint.images.gallery}
              name={paint.name[lang]}
            />
          </figure>
          <div className="z-10 -mt-15 flex min-w-40 flex-col md:mt-0 xl:justify-between">
            <div className="max-w-[50vw] bg-white p-6 md:-mt-0.5 md:-ml-60 md:pb-16 md:pl-16.25 xl:-ml-16.25">
              <h1 className="mb-2 text-[24px] leading-[115%] font-bold md:mb-6 md:text-[56px]">
                {paint.name[lang]}
              </h1>
              <span className="text-grey-400 text-[14px]">
                {paint.artist.name[lang]}
              </span>
            </div>
            <figure>
              <img
                src={paint.artist.image}
                alt={paint.artist.name[lang]}
                className="ml-8 h-16 w-16 md:h-32 md:w-32"
              />
            </figure>
          </div>
        </div>
        <div className="relative -mt-27.5 bg-no-repeat pt-27.5 pb-14.75 md:mt-0 xl:w-119">
          <svg className="fill-grey-100 absolute top-0 right-0 ml-auto h-25 w-62.5 font-serif text-[100px] font-bold md:right-auto md:left-0 md:h-50 md:w-112.5 md:text-[180px]">
            <text x="0" y="90%">
              {paint.year}
            </text>
          </svg>
          <div className="text-grey-400 top relative flex h-full flex-col justify-between md:mx-auto md:max-w-114.25 xl:mx-0 xl:max-w-87.5">
            <p className="mb-10 text-[14px] leading-[200%]">
              {paint.description[lang]}
            </p>
            <a
              href={paint.source}
              target="__blank"
              className="text-[9px] font-bold uppercase transition-colors hover:text-black"
            >
              {t("Go_to_source")}
            </a>
          </div>
        </div>
      </div>
      <Navbar progress={(100 * index) / paints.length} index={index} />
    </>
  );
}
