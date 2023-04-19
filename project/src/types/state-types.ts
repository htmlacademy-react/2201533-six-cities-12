import {AuthorizationStatus} from '../settings';
import {City, User} from './types';
import {Comment, PlaceData} from './place-data-types';
import {SortingVariants} from '../consts/sort-consts';
import {NO_ACTIVE_CARD} from "../consts/place-card-consts";

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userEmail: string;
};

export type HeaderData = {
  isAuth: boolean;
  email: string;
}

export type CityData = {
  cities: City[];
  cityIndex: number;
};

export type MapData = {
  activeCard: number;
}

export enum PromiseStates {
  undefined = 'undefined',
  reject = 'rejected',
  pending = 'pending',
  fulfill = 'fulfilled',
}

export interface OfferData {
  selectedOffer: PlaceData;
  nearOffers: PlaceData[];
  comments: Comment[];
  postCommentState: PromiseStates;
  timer: NodeJS.Timeout;
  rating: number;
  comment: string;
}

export interface OfferFlag {
  isOfferLoading: boolean;
}

export type OfferStore = OfferData & OfferFlag;

export type RoomData = {
  isLoading: boolean;
  offer: PlaceData;
  near: PlaceData[];
}

export type FavoritesStore = {
  count: number;
  isFavoritesLoading: boolean;
  favorites: PlaceData[];
}

export type IsFavorite = {
  id: number;
  isFavorite: boolean;
}

export type OffersData = {
  offers : PlaceData[];
  isOffersLoaded: boolean;
  hosts: User[];
  isFavorites: IsFavorite[];
  sortingVariant: SortingVariants;
};
