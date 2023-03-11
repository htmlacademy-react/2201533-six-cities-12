export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  location?: Location;
  name: string;
};

export type PlaceData = {
  id: number;
  price: number;
  type: string;
  title: string;
  isPremium: boolean;
  previewImage: string;
  rating: number;
  bedrooms: number;
  city: number;
  isFavorite: boolean;
  images: number[];
  maxAdults: number;
};

export type PlacesProps = {
  city: string;
  count: number;
  offers: PlaceData[];
};

export type FavoritesProps = {
  offers: PlaceData[];
  count: number;
}

export type FavoritesCityProps = {
  offers: PlaceData[];
  city: string;
}

export type CardStyles = {
  ArticleClass: string;
  WrapperClass: string;
  ImgWidth: string;
  ImgHeight: string;
  InfoClass: string;
  BookmarkCaption: string;
};
