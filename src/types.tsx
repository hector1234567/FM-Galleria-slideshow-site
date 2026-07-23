export type PaintType = {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: ArtistType;
  images: ImagesType;
  height?: number;
};

export type ImagesType = {
  thumbnail: string;
  hero: {
    small: string;
    large: string;
  };
  gallery: string;
};

export type ArtistType = {
  image: string;
  name: string;
};
