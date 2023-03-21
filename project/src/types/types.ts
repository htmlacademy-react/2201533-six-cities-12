export type MapLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  location: MapLocation;
  name: string;
};

export type PlacePoint = {
  id: number;
  location: MapLocation;
}

export type OfferFeatures = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

export type PlaceData = {
  id: number;
  price: number;
  title: string;
  isPremium: boolean;
  previewImage: string;
  rating: number;
  city: number;
  isFavorite: boolean;
  images: number[];
  location: MapLocation;
  features: OfferFeatures;
  hostId: number;
};

export type CardStyles = {
  ArticleClass: string;
  WrapperClass: string;
  ImgWidth: string;
  ImgHeight: string;
  InfoClass: string;
  BookmarkCaption: string;
};

export type User = {
  id: number;
  isPro: boolean;
  name: string;
  avatarUrl: string;
}
