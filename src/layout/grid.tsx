import React from "react";
import Card from "../components/card";
import { useWindowWidth } from "../hooks/useWindowWidth";
import type { PaintType } from "../types";

type GridProps = {
  paints: PaintType[];
};

export default function Grid({ paints }: GridProps) {
  const windowWith = useWindowWidth();

  let numCols = 1;

  if (windowWith > 560) numCols = 2;
  if (windowWith > 768) numCols = 3;
  if (windowWith > 1030) numCols = 4;

  const cols: PaintType[][] = Array.from({ length: numCols }, () => []);
  const heights = Array(numCols).fill(0);

  for (const p of paints) {
    const colIndx = heights.indexOf(Math.min(...heights));
    const h = p.height;
    if (!h) continue;

    cols[colIndx].push(p);
    heights[colIndx] += h + 40;
  }

  const colHeight = Math.min(...heights);

  return (
    <div
      className="grid gap-x-10"
      style={{ gridTemplateColumns: `repeat(${numCols}, minmax(0, 1fr))` }}
    >
      {cols.map((col, index) => (
        <div className="-mb-10" key={index}>
          {col.map((p) => (
            <React.Fragment key={p.name}>
              {p?.height ? (
                <Card
                  height={((p.height + 40) * colHeight * 1.2) / heights[index]}
                  imgUrl={p.images.thumbnail}
                  name={p.name}
                  artist={p.artist.name}
                />
              ) : null}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}
