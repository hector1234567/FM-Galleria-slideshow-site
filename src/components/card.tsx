type CardProps = {
  height: number;
  imgUrl: string;
};

export default function Card({ height, imgUrl }: CardProps) {
  return (
    <div className="pb-10" style={{ height: `${height}px` }}>
      <div
        className="h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
    </div>
  );
}
