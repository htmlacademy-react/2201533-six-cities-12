import {AuthorizationStatus} from '../settings';
import {City, User} from './types';
import {Comment, PlaceData} from './place-data-types';
import {SortingVariants} from '../consts/sort-consts';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userEmail: string;
};

export type CityData = {
  cities: City[];
  cityIndex: number;
  city: City;
  citiesOffers: PlaceData[];
  offersCount: number;
  sortingVariant: SortingVariants;
  activeCard: number;
};

export interface OfferData {
  selectedOffer: PlaceData;
  nearOffers: PlaceData[];
  comments: Comment[];
}

export interface OfferFlag {
  isOfferLoading: boolean;
}

export type OfferStore = OfferData & OfferFlag;

export type OffersData = {
  offers : PlaceData[];
  isOffersLoaded: boolean;
  hosts: User[];
};

export type CityPayLoad = {
  index: number;
  offers: PlaceData[];
};

export type SortPayLoad = {
  variant: SortingVariants;
  offers: PlaceData[];
  hosts: User[];
}
