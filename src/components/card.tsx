export default function Card({ height }) {
  return (
    <div className="bg-blue-300 pb-10" style={{ height: `${height}px` }}>
      <div className="h-full bg-amber-300">card {height}</div>
    </div>
  );
}
