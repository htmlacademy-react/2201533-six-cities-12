import {CardStyles} from './types/types';

export const CitiesName = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
} as const;

export const AppRoute = {
  Root: '/',
  Favorites: '/favorites',
  Login: '/login',
  Room: '/offer',
  DefaultCity: CitiesName.Paris
} as const;

export const RouteParam = {
  City: ':city',
  Room: ':id'
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const SORTING_VARIANTS: string[] = [
  'Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'
];

export const OffersCardStyles: CardStyles = {
  ArticleClass: 'cities__card place-card',
  WrapperClass: 'cities__image-wrapper place-card__image-wrapper',
  ImgWidth: '260',
  ImgHeight: '200',
  InfoClass: 'place-card__info',
  BookmarkCaption: 'To bookmarks'
} as const;

export const FavoritesCardStyles: CardStyles = {
  ArticleClass: 'favorites__card place-card',
  WrapperClass: 'favorites__image-wrapper place-card__image-wrapper',
  ImgWidth: '150',
  ImgHeight: '110',
  InfoClass: 'favorites__card-info place-card__info',
  BookmarkCaption: 'n bookmarks'
} as const;

export const STARS_COUNT = 5;
export const STAR_TITLES = [
  'perfect', 'good', 'not bad', 'badly', 'terribly'
];

export const ReviewLength = {
  Max: 300,
  Min: 50
} as const;

export const AUTH = AuthorizationStatus.Auth;
export const MAX_IMAGES = 6;
