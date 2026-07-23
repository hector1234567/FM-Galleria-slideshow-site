import Card from "../components/card";
import { useWindowWidth } from "../hooks/useWindowWidth";

export default function Grid() {
  const windowWith = useWindowWidth();

  let numCols = 1;

  if (windowWith > 375) numCols = 2;
  if (windowWith > 768) numCols = 3;
  if (windowWith > 1030) numCols = 4;

  const hs = [
    100, 200, 300, 400, 100, 200, 300, 400, 100, 200, 300, 400, 100, 200, 300,
    400, 100, 200, 300, 400,
  ];

  const cols: number[][] = Array.from({ length: numCols }, () => []);
  const heights = Array(numCols).fill(0);

  for (const h of hs) {
    const colIndx = heights.indexOf(Math.min(...heights));
    cols[colIndx].push(h);
    heights[colIndx] += h;
  }

  const colHeight = Math.min(...heights);

  return (
    <div
      className="grid gap-x-10"
      style={{ gridTemplateColumns: `repeat(${numCols}, minmax(0, 1fr))` }}
    >
      {cols.map((col, index) => (
        <div>
          {col.map((h) => (
            <Card height={(h * colHeight) / heights[index]} />
          ))}
        </div>
      ))}
    </div>
    // <div className="grid auto-rows-10 gap-x-10 bg-red-300 sm:grid-cols-2 md:grid-cols-4">
    //   <Card height={100} />
    //   <Card height={100} />
    //   <Card height={100} />
    //   <Card height={100} />
    //   <Card height={300} />
    //   <Card height={600} />
    //   <Card height={100} />
    //   <Card height={300} />
    //   <Card height={600} />
    //   <Card height={100} />
    //   <Card height={300} />
    //   <Card height={600} />
    // </div>
  );
}
