type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  location?: Location;
  name: string;
};

type PlaceData = {
  id: number;
  price: number;
  type: string;
  title: string;
  isPremium: boolean;
  previewImage: string;
  rating: string;
  bedrooms: number;
  city: number;
  isFavorite: boolean;
};

type PlacesProps = {
  city: string;
  count: number;
  offers: PlaceData[];
};

type HeaderProps = {
  isAuth: boolean;
  isLogin: boolean;
}

export type {PlaceData, PlacesProps, City, Location, HeaderProps};
