import {CardStyles} from './types/types';
import {Icon} from 'leaflet';

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

export const RoomCardStyles: CardStyles = {
  ArticleClass: 'near-places__card place-card',
  WrapperClass: 'near-places__image-wrapper place-card__image-wrapper',
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
  BookmarkCaption: 'In bookmarks'
} as const;

export const STARS_COUNT = 5;
export const STAR_TITLES = [
  'perfect', 'good', 'not bad', 'badly', 'terribly'
];

export const ReviewLength = {
  Max: 300,
  Min: 50
} as const;

export const FeaturesPresent = {
  type: {
    class: 'entire',
    text: '${}'
  },
  bedrooms: {
    class: 'bedrooms',
    text: '${} Bedrooms'
  },
  maxAdults: {
    class: 'adults',
    text: 'Max ${} adults'
  }
};

export const TypeOffer = {
  room: 'Private room',
  apartment: 'Apartment',
  house: 'House',
  hotel: 'Hotel'
} as const;

type FeaturesKey = keyof typeof FeaturesPresent;
export const FEATURES: FeaturesKey[] = ['type', 'bedrooms', 'maxAdults'];

export const NEAR_OFFERS = [6, 7, 8, 9];

export const AUTH = AuthorizationStatus.Auth;
export const MAX_IMAGES = 6;

const ICON_HEIGHT = 40;
const ICON_WIDTH = 30;

export const defaultMapMarker = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_WIDTH / 2, ICON_HEIGHT]
});

export const activeMapMarker = new Icon({
  iconUrl: 'img/pin-active',
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_WIDTH / 2, ICON_HEIGHT]
});
