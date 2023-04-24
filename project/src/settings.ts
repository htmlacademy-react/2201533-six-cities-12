import {Icon} from 'leaflet';

export enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Login = '/login',
  Room = '/offer',
}

export const RouteParam = {
  City: ':city',
  Room: ':id'
} as const;

export const APIRoute = {
  Offers: '/hotels',
  Comments: '/comments',
  Login: '/login',
  Logout: '/logout',
  Favorite: '/favorite'
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

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

export const NEAR_OFFERS = [6, 7, 8];

export const AUTH = AuthorizationStatus.Auth;
export const MAX_IMAGES = 6;
export const MAX_COMMENTS = 10;

const ICON_HEIGHT = 40;
const ICON_WIDTH = 30;

export const defaultMapMarker = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_WIDTH / 2, ICON_HEIGHT]
});

export const activeMapMarker = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_WIDTH / 2, ICON_HEIGHT]
});

export const BASE_URL = 'https://12.react.pages.academy/six-cities';
export const REQUEST_TIMEOUT = 5000;

export enum NameSpace {
  User = 'USER',
  City = 'CITY',
  Offers = 'OFFERS',
  Offer = 'OFFER',
  Favorites = 'FAVORITES',
  Map = 'MAP'
}

export enum errMsg {
  fetchOffers = 'failed to download data from the server',
  postComment = 'couldn\'t send a comment'
}

export const DEFAULT_EMAIL = '';
