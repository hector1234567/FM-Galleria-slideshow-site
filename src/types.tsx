export type PaintType = {
  name: {
    es: string;
    en: string;
  };
  year: number;
  description: {
    es: string;
    en: string;
  };
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
  name: {
    es: string;
    en: string;
  };
};
