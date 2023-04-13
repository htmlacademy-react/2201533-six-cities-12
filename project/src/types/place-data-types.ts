import {City, MapLocation, User} from './types';
import {TypeOffer} from '../settings';
import {OfferData} from './state-types';

export type OfferFeatures = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

export type RawPlace = {
  bedrooms: number;
  maxAdults: number;
  type: keyof typeof TypeOffer;
  city: City;
  description: string;
  goods: string[];
  host : User;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: MapLocation;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
}

export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}

export type RawPlaceData = (RawPlace | RawPlace[] | Comment[]);

export type PlaceData = {
  features: OfferFeatures;
  city: number;
  description: string;
  goods: string[];
  hostId: number;
  id: number;
  images: string[];
//  isFavorite: boolean;
  isPremium: boolean;
  location: MapLocation;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
};

export type Loader = {
  field: keyof OfferData;
  url: (id: number) => string;
}

export type PostFavorite = {
  hotelId: number;
  status: boolean;
}
